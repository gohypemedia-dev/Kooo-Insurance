"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { clamp01, colorKeys, colorTrack, cues, skyKeys, story, track } from "./story-timeline";

/* Brand palette. Values above 1 glow through the bloom pass. */
const NAVY = "#0a1f44";
const GREEN = "#15cb8b";
const MINT = "#b9efdc";
const CREAM = "#f4efe3";
const CHAR = new THREE.Color("#221f1d");
const FIRE_HOT = new THREE.Color(2.3, 1.25, 0.28);
const FIRE_COOL = new THREE.Color(1.5, 0.16, 0.02);
const WHITE = new THREE.Color("#ffffff");
const STORM = new THREE.Color("#2a3348");

/* Scratch objects and shared materials, rewritten every frame. They live at module level,
   outside React, because the film is driven imperatively from the render loop. */
const tmp = { pos: new THREE.Vector3(), look: new THREE.Vector3(), sky: new THREE.Color(), color: new THREE.Color() };
const dummy = new THREE.Object3D();
/** Pointer position across the window (-1 to 1), and the eased value the camera follows. */
const pointer = { x: 0, y: 0, easedX: 0, easedY: 0 };
const windowMat = new THREE.MeshStandardMaterial({ color: "#9fc4e8", emissive: "#ffc46b", emissiveIntensity: 0, roughness: 0.2 });
const cloudMat = new THREE.MeshStandardMaterial({ color: "#ffffff", transparent: true, opacity: 0.6, roughness: 1, flatShading: true });
const ringMat = new THREE.MeshBasicMaterial({ toneMapped: false, transparent: true, opacity: 0 });

const sunColors = colorKeys([
  [0, "#ffeedd"],
  [0.19, "#8fa6ff"],
  [0.6, "#b8c4d8"],
  [0.8, "#bfe9d8"],
  [0.93, "#fff3e0"],
]);
const SUN_INTENSITY = [[0, 2.5], [0.1, 2.1], [0.19, 0.3], [0.52, 0.22], [0.6, 0.5], [0.8, 0.8], [0.93, 2.7], [1, 2.7]] as const;
const HEMI_INTENSITY = [[0, 1.25], [0.19, 0.5], [0.52, 0.42], [0.6, 0.7], [0.8, 0.9], [0.93, 1.35], [1, 1.35]] as const;

/** Camera move: [time, position, look-at]. One continuous dolly around the block. */
const SHOTS: [number, [number, number, number], [number, number, number]][] = [
  [0, [17, 9, 22], [0, 1.6, 0]],
  [0.14, [11, 7, 23], [0, 1.6, 0]],
  [0.3, [3, 6, 20], [-1, 2, 0]],
  [0.43, [-1, 6, 19], [-3, 2.4, -1.5]],
  [0.57, [-11, 7, 18], [-1.5, 1.6, -1]],
  [0.71, [0, 12, 26], [0, 2.2, 0]],
  [0.86, [10, 9, 23], [0, 2, 0]],
  [1, [15, 8, 21], [0, 1.8, 0]],
];

/** Deterministic pseudo-random numbers, so the film looks the same on every visit. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** Sky, lights and camera, all keyed to the playhead. */
function Director() {
  const sun = useRef<THREE.DirectionalLight>(null);
  const hemi = useRef<THREE.HemisphereLight>(null);
  const bolt = useRef<THREE.DirectionalLight>(null);
  const curves = useMemo(
    () => ({
      pos: new THREE.CatmullRomCurve3(SHOTS.map((s) => new THREE.Vector3(...s[1]))),
      look: new THREE.CatmullRomCurve3(SHOTS.map((s) => new THREE.Vector3(...s[2]))),
    }),
    [],
  );
  const framed = useRef("");

  useFrame(({ clock, scene, camera, size }) => {
    // Leave room for the captions: the block sits right of centre on wide screens, above centre on tall ones.
    const { width: w, height: h } = size;
    if (framed.current !== `${w}x${h}`) {
      framed.current = `${w}x${h}`;
      const cam = camera as THREE.PerspectiveCamera;
      if (w / h >= 1.2) cam.setViewOffset(w, h, -w * 0.19, h * 0.03, w, h);
      else cam.setViewOffset(w, h, 0, h * 0.15, w, h);
    }

    const p = story.p;
    const c = cues(p);

    colorTrack(p, skyKeys, tmp.sky);
    (scene.background as THREE.Color).copy(tmp.sky);
    (scene.fog as THREE.Fog).color.copy(tmp.sky);

    if (sun.current) {
      colorTrack(p, sunColors, sun.current.color);
      sun.current.intensity = track(p, SUN_INTENSITY);
    }
    if (hemi.current) {
      hemi.current.intensity = track(p, HEMI_INTENSITY);
      hemi.current.color.copy(tmp.sky).lerp(WHITE, 0.45);
    }
    if (bolt.current) bolt.current.intensity = c.flash * (4 + 3 * Math.sin(clock.elapsedTime * 70));

    // Map the playhead onto the camera path (shots are not evenly spaced in time).
    let i = 1;
    while (i < SHOTS.length - 1 && p > SHOTS[i][0]) i++;
    const local = clamp01((p - SHOTS[i - 1][0]) / (SHOTS[i][0] - SHOTS[i - 1][0]));
    const u = (i - 1 + local) / (SHOTS.length - 1);
    curves.pos.getPoint(u, tmp.pos);
    curves.look.getPoint(u, tmp.look);

    // Narrow screens: pull the camera back so the whole block still fits.
    const aspect = size.width / size.height;
    const pull = 1.42 * (aspect >= 1.5 ? 1 : 1 + (1.5 - aspect) * 1.05);
    tmp.pos.sub(tmp.look).multiplyScalar(pull).add(tmp.look);
    // The camera leans towards the pointer, which gives the block real depth on desktop.
    pointer.easedX += (pointer.x - pointer.easedX) * 0.04;
    pointer.easedY += (pointer.y - pointer.easedY) * 0.04;
    tmp.pos.x += pointer.easedX * 2.4;
    tmp.pos.y -= pointer.easedY * 1.2;
    // A little hand-held drift so stills never look frozen.
    tmp.pos.x += Math.sin(clock.elapsedTime * 0.25) * 0.25;
    tmp.pos.y += Math.sin(clock.elapsedTime * 0.19) * 0.12;
    // Fog starts behind the block however far back the camera sits, so it only softens the horizon.
    const reach = tmp.pos.distanceTo(tmp.look);
    (scene.fog as THREE.Fog).near = reach + 12;
    (scene.fog as THREE.Fog).far = reach + 80;
    camera.position.copy(tmp.pos);
    camera.lookAt(tmp.look);
  });

  return (
    <>
      <color attach="background" args={["#f6e7cf"]} />
      <fog attach="fog" args={["#f6e7cf", 48, 110]} />
      <hemisphereLight ref={hemi} args={["#ffffff", "#8a8474", 1.2]} />
      <directionalLight
        ref={sun}
        position={[11, 15, 9]}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0004}
        shadow-normalBias={0.04}
      >
        <orthographicCamera attach="shadow-camera" args={[-18, 18, 18, -18, 1, 50]} />
      </directionalLight>
      <directionalLight ref={bolt} position={[-6, 20, -4]} color="#dfe8ff" intensity={0} />
    </>
  );
}

/** The plinth the whole block sits on, with its road. */
function Ground() {
  return (
    <group>
      <mesh position={[0, -0.7, 0]} receiveShadow>
        <cylinderGeometry args={[14, 14, 1.4, 96]} />
        <meshStandardMaterial color="#efe9dc" roughness={0.95} />
      </mesh>
      <mesh position={[0, 0.011, 6.5]} receiveShadow>
        <boxGeometry args={[22.4, 0.02, 3.6]} />
        <meshStandardMaterial color="#3b4452" roughness={0.9} />
      </mesh>
      {[-9, -6, -3, 0, 3, 6, 9].map((x) => (
        <mesh key={x} position={[x, 0.025, 6.5]}>
          <boxGeometry args={[1.2, 0.01, 0.12]} />
          <meshStandardMaterial color="#f4efe3" />
        </mesh>
      ))}
      {/* Kerb */}
      <mesh position={[0, 0.06, 4.55]} receiveShadow castShadow>
        <boxGeometry args={[23.6, 0.12, 0.3]} />
        <meshStandardMaterial color="#cfc8b8" />
      </mesh>
    </group>
  );
}

/** The warehouse that takes the lightning strike. */
function Warehouse() {
  const W = 8;
  const H = 3.6;
  const D = 6;
  const A = 0.38; // roof pitch
  const rise = (D / 4) * Math.tan(A);
  const slab = D / 2 / Math.cos(A) + 0.35;

  const wall = useRef<THREE.MeshStandardMaterial>(null);
  const band = useRef<THREE.MeshStandardMaterial>(null);
  const roof = useRef<THREE.MeshStandardMaterial>(null);
  const glow = useRef<THREE.MeshBasicMaterial>(null);
  const front = useRef<THREE.Mesh>(null);
  const back = useRef<THREE.Mesh>(null);
  const gable = useRef<THREE.Mesh>(null);
  const sign = useRef<THREE.Mesh>(null);
  const debris = useRef<THREE.Group>(null);
  const fireLight = useRef<THREE.PointLight>(null);

  const base = useMemo(() => ({ wall: new THREE.Color(CREAM), band: new THREE.Color(GREEN), roof: new THREE.Color(NAVY) }), []);
  const gableGeo = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-D / 2, 0);
    shape.lineTo(D / 2, 0);
    shape.lineTo(0, (D / 2) * Math.tan(A));
    shape.closePath();
    return new THREE.ExtrudeGeometry(shape, { depth: W, bevelEnabled: false });
  }, []);
  const rubble = useMemo(() => {
    const r = seeded(7);
    return Array.from({ length: 9 }, () => ({
      pos: [-4 + r() * 8, 0.12, D / 2 + 0.4 + r() * 1.6] as [number, number, number],
      rot: r() * 3,
      size: [0.3 + r() * 0.7, 0.14 + r() * 0.2, 0.25 + r() * 0.5] as [number, number, number],
    }));
  }, []);

  useFrame(({ clock }) => {
    const c = cues(story.p);
    const d = c.damage;
    const t = clock.elapsedTime;
    wall.current?.color.copy(base.wall).lerp(CHAR, d * 0.85);
    band.current?.color.copy(base.band).lerp(CHAR, d * 0.9);
    roof.current?.color.copy(base.roof).lerp(CHAR, d * 0.8);
    // Windows are lit at night until the fire takes them.
    windowMat.emissiveIntensity = c.dark * (1 - clamp01(c.fire * 2 + d)) * 1.6;

    if (front.current) {
      front.current.position.y = H + rise - d * 1.7;
      front.current.rotation.x = A + d * 0.55;
    }
    if (back.current) {
      back.current.position.y = H + rise - d * 0.5;
      back.current.rotation.z = d * 0.1;
    }
    if (gable.current) gable.current.scale.y = 1 - d * 0.75;
    if (sign.current) {
      sign.current.rotation.z = -d * 0.5;
      sign.current.position.y = H - 0.55 - d * 0.5;
    }
    debris.current?.scale.setScalar(d);

    const flicker = 0.75 + 0.25 * Math.sin(t * 13) * Math.sin(t * 7.3);
    if (fireLight.current) fireLight.current.intensity = c.fire * flicker * 260;
    if (glow.current) glow.current.color.setRGB(2.6 * c.fire * flicker, 0.9 * c.fire * flicker, 0.15 * c.fire);
  });

  return (
    <group position={[-3.6, 0, -2.4]}>
      <mesh position={[0, H / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[W, H, D]} />
        <meshStandardMaterial ref={wall} color={CREAM} roughness={0.9} />
      </mesh>
      <mesh position={[0, H - 0.3, 0]}>
        <boxGeometry args={[W + 0.06, 0.4, D + 0.06]} />
        <meshStandardMaterial ref={band} color={GREEN} roughness={0.7} />
      </mesh>
      <mesh ref={gable} geometry={gableGeo} position={[-W / 2, H, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <meshStandardMaterial color={CREAM} roughness={0.9} />
      </mesh>
      <mesh ref={front} position={[0, H + rise, D / 4]} rotation={[A, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[W + 0.7, 0.2, slab]} />
        <meshStandardMaterial ref={roof} color={NAVY} roughness={0.6} />
      </mesh>
      <mesh ref={back} position={[0, H + rise, -D / 4]} rotation={[-A, 0, 0]} castShadow>
        <boxGeometry args={[W + 0.7, 0.2, slab]} />
        <meshStandardMaterial color={NAVY} roughness={0.6} />
      </mesh>

      {/* Roller door, with the fire showing behind it */}
      <mesh position={[-1.7, 1.35, D / 2 + 0.02]}>
        <boxGeometry args={[3.2, 2.7, 0.08]} />
        <meshStandardMaterial color="#16305f" roughness={0.5} />
      </mesh>
      <mesh position={[-1.7, 1.35, D / 2 + 0.07]}>
        <planeGeometry args={[2.9, 2.4]} />
        <meshBasicMaterial ref={glow} color="#000000" toneMapped={false} transparent blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      {[1.1, 2.4].map((x) => (
        <mesh key={x} position={[x, 1.9, D / 2 + 0.02]} material={windowMat}>
          <boxGeometry args={[0.95, 0.85, 0.08]} />
        </mesh>
      ))}
      <mesh ref={sign} position={[1.75, H - 0.55, D / 2 + 0.1]}>
        <boxGeometry args={[2.5, 0.5, 0.1]} />
        <meshStandardMaterial color={NAVY} roughness={0.5} />
      </mesh>

      <group ref={debris} scale={0}>
        {rubble.map((r, i) => (
          <mesh key={i} position={r.pos} rotation={[0, r.rot, 0.2]} castShadow>
            <boxGeometry args={r.size} />
            <meshStandardMaterial color="#2a2623" roughness={1} />
          </mesh>
        ))}
      </group>

      <pointLight ref={fireLight} position={[0, 4.6, 1.5]} color="#ff7a2a" intensity={0} distance={34} decay={1.6} />
    </group>
  );
}

function Shop() {
  const glass = useRef<THREE.MeshStandardMaterial>(null);
  useFrame(() => {
    const c = cues(story.p);
    if (glass.current) glass.current.emissiveIntensity = c.dark * 1.3;
  });
  return (
    <group position={[4.6, 0, -3.3]}>
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[5, 3, 4.4]} />
        <meshStandardMaterial color="#ffffff" roughness={0.9} />
      </mesh>
      <mesh position={[0, 3.1, 0]} castShadow>
        <boxGeometry args={[5.4, 0.25, 4.8]} />
        <meshStandardMaterial color={NAVY} roughness={0.6} />
      </mesh>
      <mesh position={[0, 2.55, 2.22]}>
        <boxGeometry args={[4.6, 0.5, 0.1]} />
        <meshStandardMaterial color={MINT} roughness={0.7} />
      </mesh>
      <mesh position={[0, 2.15, 2.85]} rotation={[0.32, 0, 0]} castShadow>
        <boxGeometry args={[5.1, 0.1, 1.4]} />
        <meshStandardMaterial color={GREEN} roughness={0.7} />
      </mesh>
      <mesh position={[-0.9, 1.05, 2.22]}>
        <boxGeometry args={[2.5, 1.5, 0.08]} />
        <meshStandardMaterial ref={glass} color="#a9cdea" emissive="#ffd08a" emissiveIntensity={0} roughness={0.15} />
      </mesh>
      <mesh position={[1.5, 0.95, 2.22]}>
        <boxGeometry args={[0.95, 1.9, 0.08]} />
        <meshStandardMaterial color={NAVY} roughness={0.5} />
      </mesh>
    </group>
  );
}

function Wheel({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} rotation={[Math.PI / 2, 0, 0]} castShadow>
      <cylinderGeometry args={[0.42, 0.42, 0.3, 20]} />
      <meshStandardMaterial color="#1b1d22" roughness={0.9} />
    </mesh>
  );
}

/** Delivery truck: pulls in during the opening and parks on the forecourt. */
function Truck() {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    const c = cues(story.p);
    if (ref.current) ref.current.position.x = -12.5 + c.drive * 8;
  });
  return (
    <group ref={ref} position={[-12.5, 0, 2.7]}>
      <mesh position={[0, 0.55, 0]} castShadow>
        <boxGeometry args={[5.2, 0.25, 1.5]} />
        <meshStandardMaterial color="#20242b" />
      </mesh>
      <mesh position={[-0.6, 1.65, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.7, 2, 1.8]} />
        <meshStandardMaterial color="#ffffff" roughness={0.8} />
      </mesh>
      <mesh position={[-0.6, 1.25, 0]}>
        <boxGeometry args={[3.72, 0.3, 1.82]} />
        <meshStandardMaterial color={GREEN} roughness={0.6} />
      </mesh>
      <mesh position={[2, 1.3, 0]} castShadow>
        <boxGeometry args={[1.3, 1.4, 1.7]} />
        <meshStandardMaterial color={NAVY} roughness={0.5} />
      </mesh>
      <mesh position={[2.3, 1.6, 0]}>
        <boxGeometry args={[0.75, 0.6, 1.72]} />
        <meshStandardMaterial color="#a9cdea" roughness={0.15} />
      </mesh>
      {[-1.9, -0.9, 1.9].flatMap((x) => [0.8, -0.8].map((z) => <Wheel key={`${x}${z}`} position={[x, 0.42, z]} />))}
    </group>
  );
}

/** The ute parked under the tree. */
function Ute() {
  const cabin = useRef<THREE.Group>(null);
  const body = useRef<THREE.Group>(null);
  useFrame(() => {
    const c = cues(story.p);
    if (cabin.current) cabin.current.scale.y = 1 - c.crush * 0.55;
    if (body.current) body.current.rotation.x = c.crush * 0.06;
  });
  return (
    <group ref={body} position={[4.3, 0, 1.7]} rotation={[0, -0.25, 0]}>
      <mesh position={[0, 0.72, 0]} castShadow>
        <boxGeometry args={[3.3, 0.6, 1.5]} />
        <meshStandardMaterial color={GREEN} roughness={0.5} />
      </mesh>
      <group ref={cabin} position={[0.35, 1.02, 0]}>
        <mesh position={[0, 0.3, 0]} castShadow>
          <boxGeometry args={[1.3, 0.6, 1.4]} />
          <meshStandardMaterial color="#12b57c" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.32, 0]}>
          <boxGeometry args={[1.34, 0.4, 1.42]} />
          <meshStandardMaterial color="#a9cdea" roughness={0.15} />
        </mesh>
      </group>
      {[-1.05, 1.05].flatMap((x) => [0.72, -0.72].map((z) => <Wheel key={`${x}${z}`} position={[x, 0.42, z]} />))}
    </group>
  );
}

function TreeShape({ dark = false }: { dark?: boolean }) {
  return (
    <>
      <mesh position={[0, 1.1, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.22, 2.2, 8]} />
        <meshStandardMaterial color="#6d4b3a" roughness={1} />
      </mesh>
      <mesh position={[0, 3, 0]} castShadow>
        <icosahedronGeometry args={[1.45, 1]} />
        <meshStandardMaterial color={dark ? "#1f7a5c" : "#2f9e77"} roughness={0.9} flatShading />
      </mesh>
      <mesh position={[0.25, 4.15, 0.1]} castShadow>
        <icosahedronGeometry args={[0.95, 1]} />
        <meshStandardMaterial color={dark ? "#27906b" : "#3bb489"} roughness={0.9} flatShading />
      </mesh>
    </>
  );
}

/** The tree that comes down in the storm, and the young one planted in its place. */
function FallingTree() {
  const old = useRef<THREE.Group>(null);
  const young = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const c = cues(story.p);
    if (old.current) {
      const sway = Math.sin(clock.elapsedTime * 3) * 0.05 * c.rain * (1 - c.treeFall);
      old.current.rotation.z = sway + c.treeFall * c.treeFall * 1.2;
      old.current.scale.setScalar(1 - c.treeGone);
    }
    young.current?.scale.setScalar(c.regrow * 0.8);
  });
  return (
    <group position={[7.6, 0, 1.5]}>
      <group ref={old}>
        <TreeShape />
      </group>
      <group ref={young} scale={0}>
        <TreeShape />
      </group>
    </group>
  );
}

function Lamp({ position }: { position: [number, number, number] }) {
  const bulb = useRef<THREE.MeshBasicMaterial>(null);
  const light = useRef<THREE.PointLight>(null);
  useFrame(() => {
    const c = cues(story.p);
    const on = c.dark * (1 - c.damage * 0.9);
    bulb.current?.color.setRGB(0.25 + on * 2.6, 0.25 + on * 2.0, 0.22 + on * 1.1);
    if (light.current) light.current.intensity = on * 7;
  });
  return (
    <group position={position}>
      <mesh position={[0, 1.7, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.07, 3.4, 8]} />
        <meshStandardMaterial color="#2a303a" />
      </mesh>
      <mesh position={[0, 3.4, 0.35]}>
        <boxGeometry args={[0.1, 0.08, 0.8]} />
        <meshStandardMaterial color="#2a303a" />
      </mesh>
      <mesh position={[0, 3.3, 0.7]}>
        <sphereGeometry args={[0.14, 12, 12]} />
        <meshBasicMaterial ref={bulb} toneMapped={false} />
      </mesh>
      <pointLight ref={light} position={[0, 3.2, 0.7]} color="#ffc983" intensity={0} distance={11} decay={1.8} />
    </group>
  );
}

function Props() {
  return (
    <group>
      {/* Pallets of stock on the forecourt */}
      {([[1.4, 0.4, 1.6, 0.8], [2.3, 0.4, 1.9, 0.8], [1.8, 1.15, 1.75, 0.7]] as const).map(([x, y, z, s], i) => (
        <mesh key={i} position={[x, y, z]} rotation={[0, i * 0.3, 0]} castShadow receiveShadow>
          <boxGeometry args={[s, s, s]} />
          <meshStandardMaterial color="#c9a36b" roughness={0.9} />
        </mesh>
      ))}
      {([[-10.2, -3.5, 1.1], [-8.6, -6.4, 0.85], [9.6, -5.2, 1], [0.6, -8.4, 1.15], [10.6, 0.2, 0.75]] as const).map(([x, z, s], i) => (
        <group key={i} position={[x, 0, z]} scale={s}>
          <TreeShape dark={i % 2 === 0} />
        </group>
      ))}
      <Lamp position={[0.4, 0, 3.6]} />
      <Lamp position={[-9.6, 0, 3.6]} />
      <Lamp position={[9.4, 0, 3.6]} />
    </group>
  );
}

/** Storm clouds that roll in and darken. */
function Clouds() {
  const group = useRef<THREE.Group>(null);
  const puffs = useMemo(() => {
    const r = seeded(21);
    const out: { pos: [number, number, number]; s: number }[] = [];
    for (const [cx, cz] of [[-7, -5], [2, -8], [9, -2], [-2, 1], [6, 4], [-10, 3]]) {
      for (let i = 0; i < 5; i++) out.push({ pos: [cx + (r() - 0.5) * 5, 13 + r() * 1.6, cz + (r() - 0.5) * 3], s: 1.3 + r() * 1.6 });
    }
    return out;
  }, []);

  useFrame(({ clock }) => {
    const c = cues(story.p);
    cloudMat.color.copy(WHITE).lerp(STORM, c.dark);
    cloudMat.opacity = 0.55 + c.dark * 0.4;
    if (group.current) {
      group.current.position.x = Math.sin(clock.elapsedTime * 0.05) * 2 - story.p * 3;
      // Clouds gather low for the storm and lift again at the end.
      group.current.position.y = 3 - c.dark * 3.5;
      group.current.scale.setScalar(0.75 + c.dark * 0.45);
    }
  });

  return (
    <group ref={group}>
      {puffs.map((puff, i) => (
        <mesh key={i} position={puff.pos} scale={[puff.s * 1.5, puff.s * 0.7, puff.s]} material={cloudMat}>
          <icosahedronGeometry args={[1, 2]} />
        </mesh>
      ))}
    </group>
  );
}

function Rain() {
  const COUNT = 1100;
  const ref = useRef<THREE.InstancedMesh>(null);
  const drops = useMemo(() => {
    const r = seeded(3);
    return Array.from({ length: COUNT }, () => {
      const a = r() * Math.PI * 2;
      const d = Math.sqrt(r()) * 17;
      return { x: Math.cos(a) * d, z: Math.sin(a) * d, speed: 1.1 + r() * 0.7, phase: r() };
    });
  }, []);

  useFrame(({ clock }) => {
    const mesh = ref.current;
    if (!mesh) return;
    const rain = cues(story.p).rain;
    mesh.visible = rain > 0.01;
    if (!mesh.visible) return;
    const t = clock.elapsedTime;
    const shown = Math.floor(COUNT * rain);
    for (let i = 0; i < COUNT; i++) {
      const drop = drops[i];
      const fall = (t * drop.speed + drop.phase) % 1;
      dummy.position.set(drop.x + fall * 2.2, 19 - fall * 19.5, drop.z);
      dummy.rotation.z = 0.11;
      dummy.scale.setScalar(i < shown ? 1 : 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, COUNT]} frustumCulled={false}>
      <boxGeometry args={[0.018, 0.8, 0.018]} />
      <meshBasicMaterial color="#b5c9ff" transparent opacity={0.5} depthWrite={false} />
    </instancedMesh>
  );
}

/** The bolt that hits the warehouse roof. */
function Lightning() {
  const mat = useRef<THREE.MeshBasicMaterial>(null);
  const geo = useMemo(() => {
    const r = seeded(11);
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 9; i++) {
      const y = 24 - (i / 9) * 18.6;
      const spread = i === 9 ? 0 : 1.5;
      pts.push(new THREE.Vector3(-3.6 + (r() - 0.5) * spread * 2, y, -1.4 + (r() - 0.5) * spread));
    }
    return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0), 60, 0.07, 6);
  }, []);
  useFrame(({ clock }) => {
    const s = cues(story.p).strike * (0.6 + 0.4 * Math.sin(clock.elapsedTime * 80));
    if (mat.current) {
      mat.current.opacity = s;
      mat.current.visible = s > 0.02;
    }
  });
  return (
    <mesh geometry={geo}>
      <meshBasicMaterial ref={mat} color={[5, 5.4, 7]} toneMapped={false} transparent opacity={0} visible={false} />
    </mesh>
  );
}

/** Flames and smoke over the warehouse. */
function Fire() {
  const FLAMES = 260;
  const SMOKE = 80;
  const flames = useRef<THREE.InstancedMesh>(null);
  const smoke = useRef<THREE.InstancedMesh>(null);
  const seeds = useMemo(() => {
    const r = seeded(5);
    const make = (n: number) =>
      Array.from({ length: n }, () => ({
        x: -7.2 + r() * 7.2,
        z: -5 + r() * 5.6,
        y: 3 + r() * 1.6,
        speed: 0.45 + r() * 0.6,
        phase: r(),
        size: 0.35 + r() * 0.55,
        height: 2.5 + r() * 4,
        wob: r() * 6.28,
      }));
    return { flames: make(FLAMES), smoke: make(SMOKE) };
  }, []);

  useFrame(({ clock }) => {
    const c = cues(story.p);
    const t = clock.elapsedTime;

    const f = flames.current;
    if (f) {
      f.visible = c.fire > 0.01;
      if (f.visible) {
        for (let i = 0; i < FLAMES; i++) {
          const s = seeds.flames[i];
          const life = (t * s.speed + s.phase) % 1;
          // Every sixth particle is a small ember that flies much higher.
          const ember = i % 6 === 0;
          const rise = ember ? s.height * 2.4 : s.height;
          dummy.position.set(s.x + Math.sin(t * 2 + s.wob) * 0.25 * life + life * 0.8, s.y + life * rise, s.z + Math.cos(t * 1.7 + s.wob) * 0.2);
          const grow = Math.min(1, life / 0.12);
          const size = c.fire * s.size * grow * (1 - life) * (ember ? 0.16 : 0.95);
          dummy.scale.set(size, size * (ember ? 1 : 1.9), size);
          dummy.updateMatrix();
          f.setMatrixAt(i, dummy.matrix);
          f.setColorAt(i, tmp.color.copy(FIRE_HOT).lerp(FIRE_COOL, Math.min(1, life * 1.5)));
        }
        f.instanceMatrix.needsUpdate = true;
        if (f.instanceColor) f.instanceColor.needsUpdate = true;
      }
    }

    const sm = smoke.current;
    if (sm) {
      sm.visible = c.smoke > 0.01;
      if (sm.visible) {
        for (let i = 0; i < SMOKE; i++) {
          const s = seeds.smoke[i];
          const life = (t * s.speed * 0.28 + s.phase) % 1;
          dummy.position.set(s.x + life * 5 + Math.sin(t * 0.6 + s.wob) * 0.5, s.y + 1 + life * 13, s.z + Math.cos(t * 0.5 + s.wob) * 0.5);
          dummy.scale.setScalar(c.smoke * (0.5 + life * 2.6) * Math.min(1, life / 0.1) * (1 - life * life));
          dummy.updateMatrix();
          sm.setMatrixAt(i, dummy.matrix);
        }
        sm.instanceMatrix.needsUpdate = true;
      }
    }
  });

  return (
    <group>
      <instancedMesh ref={flames} args={[undefined, undefined, FLAMES]} frustumCulled={false} visible={false}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshBasicMaterial toneMapped={false} transparent opacity={0.6} blending={THREE.AdditiveBlending} depthWrite={false} />
      </instancedMesh>
      <instancedMesh ref={smoke} args={[undefined, undefined, SMOKE]} frustumCulled={false} visible={false}>
        <icosahedronGeometry args={[0.6, 2]} />
        <meshStandardMaterial color="#26262c" transparent opacity={0.42} depthWrite={false} roughness={1} />
      </instancedMesh>
    </group>
  );
}

/** The three rings from the Kooo logo, closing around the block like a shield. */
function Shield() {
  const group = useRef<THREE.Group>(null);
  const rings = useRef<(THREE.Mesh | null)[]>([]);
  const dome = useRef<THREE.MeshBasicMaterial>(null);
  const light = useRef<THREE.PointLight>(null);
  const tilts = useMemo(() => [[1.25, 0, 0.2], [1.57, 0.5, -0.35], [1.9, -0.4, 0.5]] as const, []);

  useFrame(({ clock }) => {
    const s = cues(story.p).shield;
    const t = clock.elapsedTime;
    if (group.current) {
      group.current.visible = s > 0.005;
      group.current.rotation.y = t * 0.12 + story.p * 5;
    }
    rings.current.forEach((ring, i) => {
      if (!ring) return;
      // Each ring drops in from above, one after the other.
      const arrive = clamp01(s * 1.6 - i * 0.22);
      const ease = 1 - (1 - arrive) ** 3;
      ring.scale.setScalar(0.35 + ease * 0.65);
      ring.position.y = 3 + (1 - ease) * 16;
      ring.rotation.set(tilts[i][0] + Math.sin(t * 0.3 + i) * 0.06, tilts[i][1], tilts[i][2] + t * 0.05 * (i % 2 ? -1 : 1));
    });
    ringMat.color.setRGB(0.1 * s * 2.4, 0.82 * s * 2.4, 0.55 * s * 2.4);
    ringMat.opacity = s;
    if (dome.current) dome.current.opacity = s * 0.07;
    if (light.current) light.current.intensity = s * 140;
  });

  return (
    <group ref={group} visible={false}>
      {tilts.map((_, i) => (
        <mesh
          key={i}
          material={ringMat}
          ref={(m) => {
            rings.current[i] = m;
          }}
        >
          <torusGeometry args={[14.6 + i * 0.5, 0.085, 16, 220]} />
        </mesh>
      ))}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[14.4, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshBasicMaterial ref={dome} color={GREEN} transparent opacity={0} side={THREE.BackSide} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <pointLight ref={light} position={[0, 9, 4]} color={GREEN} intensity={0} distance={40} decay={1.5} />
    </group>
  );
}

function Grade() {
  const vignette = useRef<{ darkness: number }>(null);
  useFrame(() => {
    // Dark corners only while the sky is dark, so the last frame meets the page cleanly.
    if (vignette.current) vignette.current.darkness = cues(story.p).dark * 0.6;
  });
  return (
    <EffectComposer multisampling={4}>
      <Bloom mipmapBlur intensity={0.6} luminanceThreshold={1} luminanceSmoothing={0.2} radius={0.75} />
      <Vignette ref={vignette as never} offset={0.25} darkness={0} />
    </EffectComposer>
  );
}

/** The scroll-driven hero film. `active` pauses rendering once the hero is off screen. */
export default function StoryScene({ active = true }: { active?: boolean }) {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Canvas
      flat
      shadows="soft"
      dpr={[1, 1.75]}
      camera={{ position: [17, 9, 22], fov: 30, near: 0.5, far: 140 }}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      frameloop={active ? "always" : "never"}
    >
      <Director />
      <Ground />
      <Warehouse />
      <Shop />
      <Truck />
      <Ute />
      <FallingTree />
      <Props />
      <Clouds />
      <Rain />
      <Lightning />
      <Fire />
      <Shield />
      <Grade />
    </Canvas>
  );
}
