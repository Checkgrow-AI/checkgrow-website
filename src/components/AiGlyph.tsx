"use client";

import { useEffect, useRef } from "react";
import type { AiKind, LatticeMotion } from "@/lib/ai-glyph/glyphs";
import { createGlyphState, drawGlyph, stepGlyph, type AiPalette } from "@/lib/ai-glyph/morph";
import { requestFrames } from "@/lib/ai-glyph/scheduler";

/* The platform's AiGlyph (checkgrow-platform src/components/ui/ai-glyph.tsx),
   ported for the dark site: the Checkgrow logo's 4×4 dot lattice. At rest it
   shows the kind's icon; while working, all sixteen dots move in the kind's
   motion (orbit, shuffle, connect…), then draw the check and settle again.
   The engine in src/lib/ai-glyph is copied unchanged from the platform; only
   the palette is fixed to the site's white ink. On the site it loops by
   itself: `work` seconds in motion, then the check finish and a short rest.
   Paused off screen and while the tab is hidden; still under reduced motion. */

const WHITE: AiPalette = { glyph: [247, 247, 245], near: [255, 255, 255], far: [183, 181, 187] };

export function AiGlyph({
  kind,
  motion,
  size = 48,
  work = 4.5,
  rest = 2.4,
  delay = 0,
  className,
}: {
  kind: AiKind;
  motion?: LatticeMotion;
  size?: number;
  /** Seconds in motion per cycle. */
  work?: number;
  /** Seconds at rest (the check finish plays at the start of it). */
  rest?: number;
  /** Seconds before the first cycle, to offset glyphs shown side by side. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const live = useRef({ busy: false, visible: false, reduced: false, startedAt: 0 });
  const state = useRef(createGlyphState(false));

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const l = live.current;
    l.reduced = reducedQuery.matches;

    const tick = (now: number): boolean => {
      if (!l.visible && !l.reduced) return false;
      if (!l.reduced) {
        if (!l.startedAt) l.startedAt = now;
        const cycle = work + rest;
        const elapsed = now - l.startedAt - delay;
        l.busy = elapsed >= 0 && elapsed % cycle < work;
      }
      const needs = stepGlyph(state.current, l.busy, now, l.reduced);
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const px = Math.round(size * dpr);
        if (canvas.width !== px) { canvas.width = px; canvas.height = px; }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        drawGlyph(ctx, { kind, size, state: state.current, now, reduced: l.reduced, palette: WHITE, motion });
      }
      // Keep the loop alive through the rest phase so the next cycle starts on time.
      return !l.reduced && (needs || l.visible);
    };

    let stop = requestFrames(tick);
    const io = new IntersectionObserver(([entry]) => {
      l.visible = entry.isIntersecting;
      if (entry.isIntersecting) { stop(); stop = requestFrames(tick); }
    });
    io.observe(canvas);
    const onReduced = () => { l.reduced = reducedQuery.matches; l.busy = false; stop(); stop = requestFrames(tick); };
    reducedQuery.addEventListener("change", onReduced);
    return () => {
      stop();
      io.disconnect();
      reducedQuery.removeEventListener("change", onReduced);
    };
  }, [kind, motion, size, work, rest, delay]);

  return (
    <canvas
      ref={ref}
      width={size * 2}
      height={size * 2}
      style={{ width: size, height: size }}
      className={className}
      aria-hidden="true"
      data-ai-glyph={kind}
    />
  );
}
