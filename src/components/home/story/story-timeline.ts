import { Color } from "three";

/**
 * The hero "film" is one continuous shot driven by scroll. `story.p` is the
 * playhead (0 → 1); the page writes it, the 3D scene and captions read it.
 */
export const story = { p: 0 };

export const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

/** Smooth 0 → 1 ramp as `p` moves from `a` to `b`. */
export function ramp(p: number, a: number, b: number) {
  const t = clamp01((p - a) / (b - a));
  return t * t * (3 - 2 * t);
}

/** Piecewise-linear number track: [[time, value], …]. */
export function track(p: number, keys: readonly (readonly [number, number])[]) {
  if (p <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (p <= keys[i][0]) {
      const [t0, v0] = keys[i - 1];
      const [t1, v1] = keys[i];
      return v0 + ((v1 - v0) * (p - t0)) / (t1 - t0);
    }
  }
  return keys[keys.length - 1][1];
}

export type ColorKeys = { t: number; c: Color }[];
export const colorKeys = (keys: [number, string][]): ColorKeys => keys.map(([t, hex]) => ({ t, c: new Color(hex) }));

/** Piecewise colour track, written into `out`. */
export function colorTrack(p: number, keys: ColorKeys, out: Color) {
  if (p <= keys[0].t) return out.copy(keys[0].c);
  for (let i = 1; i < keys.length; i++) {
    if (p <= keys[i].t) {
      const a = keys[i - 1];
      const b = keys[i];
      return out.copy(a.c).lerp(b.c, (p - a.t) / (b.t - a.t));
    }
  }
  return out.copy(keys[keys.length - 1].c);
}

/** A short pulse centred on `at`. */
const pulse = (p: number, at: number, width: number) => Math.exp(-(((p - at) / width) ** 2));

/** Everything that happens in the film, as a function of the playhead. */
export function cues(p: number) {
  return {
    /** The truck pulls in and parks. */
    drive: ramp(p, 0, 0.12),
    /** Night and storm cloud. */
    dark: ramp(p, 0.1, 0.19) * (1 - ramp(p, 0.8, 0.93)),
    rain: ramp(p, 0.17, 0.26) * (1 - ramp(p, 0.47, 0.56)),
    /** Lightning: two distant flashes, then the strike. */
    flash: Math.max(pulse(p, 0.225, 0.006), pulse(p, 0.275, 0.006), pulse(p, 0.315, 0.008)),
    strike: pulse(p, 0.315, 0.008),
    /** The tree comes down on the ute. */
    treeFall: ramp(p, 0.255, 0.305),
    fire: ramp(p, 0.318, 0.4) * (1 - ramp(p, 0.5, 0.6)),
    smoke: ramp(p, 0.34, 0.44) * (1 - ramp(p, 0.64, 0.76)),
    /** How wrecked things are; Kooo's arrival winds it back. */
    damage: ramp(p, 0.35, 0.52) * (1 - ramp(p, 0.75, 0.9)),
    crush: ramp(p, 0.285, 0.31) * (1 - ramp(p, 0.77, 0.86)),
    treeGone: ramp(p, 0.74, 0.8),
    regrow: ramp(p, 0.82, 0.93),
    /** The three Kooo rings close around the scene. */
    shield: ramp(p, 0.655, 0.75) * (1 - 0.55 * ramp(p, 0.92, 1)),
  };
}

/** Captions: when each is on screen, and whether it sits on a light or dark sky. */
export const chapters = [
  { key: "before", label: "Today", from: 0, to: 0.085 },
  { key: "evening", label: "The evening", from: 0.17, to: 0.285 },
  { key: "loss", label: "The night", from: 0.33, to: 0.49 },
  { key: "after", label: "The aftermath", from: 0.54, to: 0.655 },
  { key: "kooo", label: "Kooo steps in", from: 0.69, to: 0.835 },
  { key: "tomorrow", label: "Tomorrow", from: 0.915, to: 1 },
] as const;

/** True while the sky is light enough that text over it should be navy. */
export const isLightSky = (p: number) => p < 0.125 || p > 0.9;

/** A soft, real daylight sky (the page behind the film starts this colour too). */
export const SKY_START = "#e3eaf1";
export const skyKeys = colorKeys([
  [0, SKY_START],
  [0.1, "#dbe3ec"],
  [0.19, "#0c1830"],
  [0.33, "#0a1326"],
  [0.42, "#1d1320"],
  [0.52, "#141722"],
  [0.6, "#222b38"],
  [0.68, "#0d2244"],
  [0.8, "#103058"],
  [0.93, "#eeeeee"],
  [1, "#eeeeee"],
]);
