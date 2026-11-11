"use client";

import { useMemo } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

/**
 * Photo-scanned surface sets in /public/textures/<slot>/ (Poly Haven, CC0).
 * `size` is how many metres one copy of the texture covers in the real world.
 */
export const SURFACES = {
  asphalt: { size: 2 },
  concrete: { size: 2.4 },
  corrugated: { size: 2 },
  render: { size: 3 },
  grass: { size: 2 },
  bark: { size: 1.82 },
} as const;

export type Surface = keyof typeof SURFACES;

/**
 * Loads a surface's colour, normal and roughness maps, set to tile. Geometry using
 * these should carry world-scaled UVs (see `worldBox`), so `repeat` stays at 1/size.
 */
export function useSurface(slot: Surface, maps: { rough?: boolean } = { rough: true }) {
  const paths: Record<string, string> = {
    map: `/textures/${slot}/diff.jpg`,
    normalMap: `/textures/${slot}/nor.jpg`,
  };
  if (maps.rough) paths.roughnessMap = `/textures/${slot}/rough.jpg`;
  const tex = useTexture(paths) as Record<string, THREE.Texture>;
  return useMemo(() => {
    const scale = 1 / SURFACES[slot].size;
    for (const [key, t] of Object.entries(tex)) {
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(scale, scale);
      t.anisotropy = 8;
      t.colorSpace = key === "map" ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      t.needsUpdate = true;
    }
    return tex;
  }, [tex, slot]);
}

/**
 * A box whose UVs are in metres (each face is mapped by its own two axes), so a
 * tiling texture keeps its real-world scale on every face instead of stretching.
 */
export function worldBox(w: number, h: number, d: number) {
  const g = new THREE.BoxGeometry(w, h, d);
  const pos = g.attributes.position;
  const nor = g.attributes.normal;
  const uv = g.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const ax = Math.abs(nor.getX(i));
    const ay = Math.abs(nor.getY(i));
    if (ax > 0.5) uv.setXY(i, z, y);
    else if (ay > 0.5) uv.setXY(i, x, z);
    else uv.setXY(i, x, y);
  }
  uv.needsUpdate = true;
  return g;
}

/** A flat rectangle on the ground with UVs in metres. */
export function worldPlane(w: number, d: number) {
  const g = new THREE.PlaneGeometry(w, d);
  g.rotateX(-Math.PI / 2);
  const pos = g.attributes.position;
  const uv = g.attributes.uv;
  for (let i = 0; i < pos.count; i++) uv.setXY(i, pos.getX(i), pos.getZ(i));
  uv.needsUpdate = true;
  return g;
}
