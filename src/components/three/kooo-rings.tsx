"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group } from "three";

// The three interlocking "ooo" rings from the Kooo logo, rendered in 3D.
function Rings({ color }: { color: string }) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { pointer, clock } = state;
    group.current.rotation.y += (pointer.x * 0.5 + Math.sin(clock.elapsedTime * 0.3) * 0.25 - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-pointer.y * 0.3 - group.current.rotation.x) * 0.05;
  });

  return (
    <group ref={group}>
      {[-1.25, 0, 1.6].map((x, i) => (
        <Float key={x} speed={1.5 + i * 0.3} rotationIntensity={0.4} floatIntensity={0.6}>
          <mesh position={[x, 0, i === 1 ? 0.15 : 0]} rotation={[0, i === 1 ? 0.35 : -0.15, 0]}>
            <torusGeometry args={[1, 0.07, 32, 128]} />
            <meshStandardMaterial color={color} metalness={0.55} roughness={0.3} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

type KoooRingsProps = {
  color?: string;
  /** Pause rendering while off screen. */
  active?: boolean;
};

export default function KoooRings({ color = "#0a1f44", active = true }: KoooRingsProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      frameloop={active ? "always" : "never"}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 4, 5]} intensity={2.5} />
      <pointLight position={[-4, -2, 3]} intensity={40} color="#ffffff" />
      <Rings color={color} />
    </Canvas>
  );
}
