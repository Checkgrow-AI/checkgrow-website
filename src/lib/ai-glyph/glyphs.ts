// The AI icons and their thinking motions, all drawn on the CheckGrow logo's own 4×4 dot lattice.
// An icon lights some of the sixteen cells (filled dot or hollow ring); unlit cells stay as faint
// ghosts so the grid always reads. While the AI works, all sixteen dots move in the kind's motion
// (borrowed from the thinking orbs: orbit, scan, shuffle, type, connect, morph); when the work ends
// they draw the check and settle back into the icon.
// Design canvas (board "Logo lattice: icons + motion"): https://claude.ai/artifact/LZdbpAhZYVUAVcmSMPrCFs

/** The kind of AI work an action does. It picks the icon and the thinking motion. */
export type AiKind = "images" | "text" | "research" | "analysis" | "plan" | "ask";

export const AI_KINDS: readonly AiKind[] = ["images", "text", "research", "analysis", "plan", "ask"];

/** How the lattice moves while the AI works. `wave` is plain loading, `breathe` is calm waiting. */
export type LatticeMotion = "orbit" | "scan" | "shuffle" | "type" | "connect" | "morph" | "wave" | "breathe";

export const LATTICE_MOTIONS: readonly LatticeMotion[] = ["orbit", "scan", "shuffle", "type", "connect", "morph", "wave", "breathe"];

/** The motion each kind thinks in. */
export const AI_KIND_MOTION: Record<AiKind, LatticeMotion> = {
  images: "shuffle",
  text: "type",
  research: "scan",
  analysis: "connect",
  plan: "morph",
  ask: "orbit",
};

/**
 * Cell patterns, row by row from the top: `f` filled dot, `o` hollow ring, `.` ghost (unlit cell).
 * `logo` is the CheckGrow mark exactly; its four rings sit on the check's cells.
 */
export const LOGO_PATTERN = "ffff" + "fffo" + "ofof" + "foff";
export const CHECK_PATTERN = "...." + "...f" + "f.f." + ".f..";

export const LATTICE: Record<AiKind, string> = {
  ask: LOGO_PATTERN,
  images: "ffff" + "f.of" + "f..f" + "ffff", // a frame with a ring sun inside
  text: "ffff" + "ffff" + "ffo." + "....", // lines, the ring is the caret
  research: "fff." + "f.f." + "ffo." + "...f", // a lens and its handle
  analysis: "...o" + "..ff" + ".fff" + "ffff", // rising bars, the ring on the tallest
  plan: "f.ff" + "f.ff" + "o.ff" + "....", // a checklist, the ring is the open item
};

/** Cell centres on a unit square, from the logo's own proportions (dot Ø = 0.2 of the mark). */
export const CELL = [0.1, 0.3667, 0.6333, 0.9] as const;
/** Dot radius on the unit square. */
export const DOT_R = 0.094;
/** The lattice is drawn at this scale round the centre, so dots that swell never touch the edge. */
export const LATTICE_INSET = 0.94;

/** One dot at one instant: position/radius on the unit square, opacity, ring-ness (0 dot → 1 ring), depth. */
export interface LatticeDot {
  x: number;
  y: number;
  r: number;
  a: number;
  o: number;
  z: number;
}

/** Hairlines some motions draw under the dots. */
export type LatticeExtra =
  | { type: "vline"; x: number }
  | { type: "seg"; from: number; to: number; p: number; f: number };

const smooth = (x: number) => {
  const v = Math.max(0, Math.min(1, x));
  return v * v * (3 - 2 * v);
};

/** A resting cell of `pattern`. `ghost` is the opacity of unlit cells (0 below 20 px). */
export function restDot(pattern: string, i: number, ghost: number): LatticeDot {
  const ch = pattern[i];
  const row = Math.floor(i / 4);
  const col = i % 4;
  return { x: CELL[col], y: CELL[row], r: ch === "." ? DOT_R * 0.8 : DOT_R, a: ch === "." ? ghost : 1, o: ch === "o" ? 1 : 0, z: 0 };
}

/** The finished state: the check's four cells lit, the rest faint. */
export function checkDot(i: number, ghost: number): LatticeDot {
  const on = CHECK_PATTERN[i] === "f";
  return { x: CELL[i % 4], y: CELL[Math.floor(i / 4)], r: on ? DOT_R * 1.08 : DOT_R * 0.7, a: on ? 1 : ghost * 0.8, o: 0, z: 0 };
}

// Morph targets: cells ordered by angle round the centre, so grid → circle → diamond never crosses.
const ANGLE_ORDER: number[] = (() => {
  const ids = Array.from({ length: 16 }, (_, k) => k);
  const ang = (k: number) => Math.atan2(CELL[Math.floor(k / 4)] - 0.5, CELL[k % 4] - 0.5);
  ids.sort((a, b) => ang(a) - ang(b));
  const pos: number[] = [];
  ids.forEach((k, p) => { pos[k] = p; });
  return pos;
})();

// Connect: the constellation's path through the cells.
const CONNECT_PATH = [0, 5, 2, 7, 11, 14, 9, 12, 8, 4];

// Shuffle: row offsets (in cells) at each keyframe; the last frame is solved.
const SHUFFLE_T = [0, 0.14, 0.3, 0.46, 0.64, 0.84];
const SHUFFLE_K = [[0, 0, 0, 0], [1, -1, 0, 1], [1, -2, 1, 1], [2, -2, 1, -1], [2, -2, 1, -1], [0, 0, 0, 0]];

/**
 * Cell `i` of `pattern` at motion time `t` (seconds). Motions that draw hairlines push them into
 * `extras` when called for cell 0.
 */
export function motionDot(motion: LatticeMotion, pattern: string, i: number, t: number, extras: LatticeExtra[]): LatticeDot {
  const row = Math.floor(i / 4);
  const col = i % 4;
  const ch = pattern[i];
  const ring = ch === "o" ? 1 : 0;
  const base = ch === "." ? 0.5 : 1;
  const gx = CELL[col];
  const gy = CELL[row];
  const R = DOT_R;

  switch (motion) {
    case "wave": {
      const k = 0.5 + 0.5 * Math.sin(t * 3.5 - (row + col) * 0.62);
      return { x: gx, y: gy, r: R * (0.72 + 0.32 * k), a: 0.16 + 0.84 * k, o: ring, z: 0 };
    }
    case "breathe": {
      const g = 1 + 0.02 * Math.sin(t * 1.9);
      const k = 0.5 + 0.5 * Math.sin(t * 1.9 - Math.hypot(gx - 0.5, gy - 0.5) * 5);
      const x = 0.5 + (gx - 0.5) * g;
      const y = 0.5 + (gy - 0.5) * g;
      return ring
        ? { x, y, r: R * (0.95 + 0.3 * k), a: 1, o: 1, z: 0 }
        : { x, y, r: R * (0.8 + 0.1 * k), a: (0.3 + 0.4 * k) * base, o: 0, z: 0 };
    }
    case "orbit": {
      const yy = 1 - (2 * (i + 0.5)) / 16;
      const rr = Math.sqrt(1 - yy * yy);
      const th = i * 2.39996 + t * 1.5;
      const x = Math.cos(th) * rr;
      const z = Math.sin(th) * rr;
      const tilt = 0.5 + 0.12 * Math.sin(t * 0.7);
      const y2 = yy * Math.cos(tilt) - z * Math.sin(tilt);
      const z2 = yy * Math.sin(tilt) + z * Math.cos(tilt);
      const d = (z2 + 1) / 2;
      return { x: 0.5 + x * 0.37, y: 0.5 - y2 * 0.37, r: R * (0.42 + 0.64 * d), a: 0.2 + 0.8 * d, o: ring, z: z2 };
    }
    case "scan": {
      const sx = 0.5 + 0.47 * Math.sin(t * 2.2 - 1.2);
      if (i === 0) extras.push({ type: "vline", x: sx });
      const k = Math.exp(-Math.pow((gx - sx) / 0.15, 2));
      return { x: gx, y: 0.5 + (gy - 0.5) * (1 - 0.1 * (1 - k)), r: R * (0.62 + 0.5 * k), a: Math.max(0.18 + 0.82 * k, ring ? 0.55 : 0) * (ch === "." ? 0.75 : 1), o: ring, z: 0 };
    }
    case "shuffle": {
      const P = 2.6;
      const ph = ((((t - row * 0.05) % P) + P) % P) / P;
      let off = 0;
      if (ph < SHUFFLE_T[5]) {
        let j = 0;
        while (j < 4 && ph >= SHUFFLE_T[j + 1]) j++;
        off = SHUFFLE_K[j][row] + (SHUFFLE_K[j + 1][row] - SHUFFLE_K[j][row]) * smooth((ph - SHUFFLE_T[j]) / (SHUFFLE_T[j + 1] - SHUFFLE_T[j]));
      }
      const w = ((((col + off + 0.5) % 4) + 4) % 4) - 0.5;
      const fade = Math.max(0, Math.min(1, 1 - Math.max(0, -w, w - 3) * 3.5));
      return { x: 0.1 + w * 0.2667, y: gy, r: R * 0.92, a: base * fade, o: ring, z: 0 };
    }
    case "type": {
      const P = 2.8;
      const ph = (t % P) / P;
      const at = 0.04 + (i / 16) * 0.62;
      const head = Math.floor(((ph - 0.04) / 0.62) * 16);
      if (ph <= at) {
        if (i === head + 1 && ph < 0.68) return { x: gx, y: gy, r: R, a: Math.sin(t * 14) > 0 ? 1 : 0.25, o: 1, z: 0 };
        return { x: gx, y: gy, r: R * 0.6, a: 0.1, o: 0, z: 0 };
      }
      const pop = Math.min(1, (ph - at) * 16);
      const end = ph > 0.86 ? 1 - (ph - 0.86) / 0.14 : 1;
      return { x: gx, y: gy, r: R * (0.55 + 0.4 * pop), a: base * end, o: ring, z: 0 };
    }
    case "connect": {
      const P = 3;
      const ph = (t % P) / P;
      const prog = Math.min(1, ph / 0.72) * (CONNECT_PATH.length - 1);
      const fade = ph > 0.84 ? 1 - (ph - 0.84) / 0.16 : 1;
      if (i === 0) {
        for (let j = 0; j < CONNECT_PATH.length - 1; j++) {
          const p = Math.max(0, Math.min(1, prog - j));
          if (p > 0) extras.push({ type: "seg", from: CONNECT_PATH[j], to: CONNECT_PATH[j + 1], p, f: fade });
        }
      }
      const idx = CONNECT_PATH.indexOf(i);
      if (idx < 0) return { x: gx, y: gy, r: R * 0.55, a: 0.12, o: 0, z: 0 };
      const reached = prog >= idx - 0.02;
      const flash = reached ? Math.exp(-Math.pow((prog - idx) * 2.2, 2)) : 0;
      return { x: gx, y: gy, r: R * (reached ? 0.9 + 0.35 * flash : 0.65), a: reached ? 0.55 + 0.45 * Math.max(fade, flash) : 0.25, o: ring, z: 0 };
    }
    case "morph": {
      const P = 3.6;
      const ph = (t % P) / P;
      const k = ANGLE_ORDER[i];
      const th = -Math.PI + ((k + 0.5) / 16) * Math.PI * 2 + t * 0.35;
      const circ = { x: 0.5 + Math.cos(th) * 0.38, y: 0.5 + Math.sin(th) * 0.38 };
      const u = ((k + 0.5) / 16) * 4;
      const side = Math.floor(u);
      const f = u - side;
      const V = [[0.5, 0.1], [0.9, 0.5], [0.5, 0.9], [0.1, 0.5], [0.5, 0.1]];
      const dia = { x: V[side][0] + (V[side + 1][0] - V[side][0]) * f, y: V[side][1] + (V[side + 1][1] - V[side][1]) * f };
      const grid: { x: number; y: number } = { x: gx, y: gy };
      let A = grid;
      let B = grid;
      let q = 0;
      if (ph < 0.12) { A = grid; B = grid; }
      else if (ph < 0.3) { A = grid; B = circ; q = smooth((ph - 0.12) / 0.18); }
      else if (ph < 0.42) { A = circ; B = circ; }
      else if (ph < 0.6) { A = circ; B = dia; q = smooth((ph - 0.42) / 0.18); }
      else if (ph < 0.72) { A = dia; B = dia; }
      else if (ph < 0.9) { A = dia; B = grid; q = smooth((ph - 0.72) / 0.18); }
      return { x: A.x + (B.x - A.x) * q, y: A.y + (B.y - A.y) * q, r: R * 0.78, a: 0.4 + 0.6 * base, o: ring, z: 0 };
    }
  }
}
