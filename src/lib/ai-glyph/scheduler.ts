// One shared animation loop for every AI glyph on the page. A glyph asks for frames only while it
// is working, morphing, pulsing or hovered; a resting icon paints once and then costs nothing.
// The loop stops when no glyph needs frames, and while the tab is hidden.

type Tick = (now: number) => boolean;

const active = new Set<Tick>();
let raf = 0;

function loop(ms: number) {
  raf = 0;
  const now = ms / 1000;
  for (const tick of Array.from(active)) {
    if (!tick(now)) active.delete(tick);
  }
  schedule();
}

function schedule() {
  if (raf || active.size === 0 || typeof requestAnimationFrame === "undefined") return;
  if (typeof document !== "undefined" && document.visibilityState === "hidden") return;
  raf = requestAnimationFrame(loop);
}

if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", schedule);
}

/** Run `tick` every frame until it returns false (or `stop` is called). */
export function requestFrames(tick: Tick): () => void {
  active.add(tick);
  schedule();
  return () => { active.delete(tick); };
}
