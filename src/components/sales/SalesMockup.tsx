"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { salesMockups, type SalesMockupKey } from "./salesMockups.generated";
import { useMockupHtml } from "@/i18n/client";

/* One animated Sales screen. The design is a fixed 1080×1080 board whose
   card sits 36px in; we show just the card (1008px) and scale it to the
   container. CSS keyframes drive the motion: they run only while the
   screen is on view, start from the first frame when a hidden screen is
   shown, and hold on the story's payoff for reduced-motion users. */
const CARD = 1008;
const INSET = 36;

export function SalesMockup({ id, label, className = "" }: { id: SalesMockupKey; label: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.6);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);
  const mockup = salesMockups[id];
  /* mockup text in the page's language: the sales page provides the table */
  const html = useMockupHtml(mockup.html);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / CARD));
    ro.observe(el);
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(still);
    const io = new IntersectionObserver(([entry]) => setPlaying(entry.isIntersecting && !still), { threshold: 0.2 });
    io.observe(el);
    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label}
      data-playing={playing}
      data-reduced={reduced}
      className={`sales-mockup relative aspect-square w-full overflow-hidden ${className}`}
      // reduced motion: hold the frame where the story pays off (80% in)
      style={{ borderRadius: 34 * scale, "--still": `-${mockup.loop * 0.8}s` } as CSSProperties}
    >
      <style dangerouslySetInnerHTML={{ __html: mockup.css }} />
      <div
        aria-hidden
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: 1080, height: 1080, transform: `scale(${scale}) translate(-${INSET}px, -${INSET}px)` }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
