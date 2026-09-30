"use client";

/* A minimal fast-scroll rail hugging the left edge on phones (flush, no
   margin, so it steals no space from the conversion CTAs on the right):
   one small line per section, the current one in the primary purple.
   Touch it and the section titles surface beside the lines; drag to scrub
   the whole page. A plain tap on a line jumps to its section. Desktop
   never sees it. */

import { useEffect, useRef, useState } from "react";
import { useStableVh } from "@/lib/useStableVh";

const SECTIONS: Array<{ id: string; label: string }> = [
  { id: "platform", label: "Platform" },
  { id: "solution", label: "Solution" },
  { id: "stories", label: "Real Stories" },
  { id: "use-cases", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "waitlist", label: "Early Access" },
];

export function MobileScrollRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(false);
  const [shown, setShown] = useState(false);
  const dragging = useRef(false);
  const moved = useRef(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { vhRef: stableVhRef } = useStableVh();

  useEffect(() => {
    let raf = 0;
    const track = () => {
      raf = requestAnimationFrame(track);
      const vh = stableVhRef.current || window.innerHeight;
      const probe = window.scrollY + vh * 0.35;
      let idx = 0;
      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= probe) idx = i;
      }
      setCurrent((c) => (c === idx ? c : idx));

      /* the rail only surfaces once the hero story reaches step one (the
         "yourwebsite.com" scene, ~21% of the pin); before that it would
         compete with the hero for attention */
      const hero = document.getElementById("platform");
      let show = false;
      if (hero) {
        const r = hero.getBoundingClientRect();
        const span = r.height - vh;
        show =
          span > vh
            ? -r.top / span >= 0.21
            : window.scrollY > r.height * 0.6; /* reduced-motion hero */
      }
      setShown((s) => (s === show ? s : show));
    };
    raf = requestAnimationFrame(track);
    return () => cancelAnimationFrame(raf);
  }, [stableVhRef]);

  const scrubTo = (clientY: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const r = rail.getBoundingClientRect();
    const frac = Math.min(1, Math.max(0, (clientY - r.top) / r.height));
    const max =
      document.documentElement.scrollHeight -
      (stableVhRef.current || window.innerHeight);
    window.scrollTo(0, frac * max);
  };

  const show = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActive(true);
  };
  const hideSoon = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setActive(false), 700);
  };

  return (
    <div
      ref={railRef}
      className={`fixed left-0 top-1/2 z-40 flex -translate-y-1/2 touch-none flex-col items-start gap-3 py-2 pr-6 transition-opacity duration-300 lg:hidden ${
        shown ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onPointerDown={(e) => {
        dragging.current = true;
        moved.current = false;
        show();
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return;
        moved.current = true;
        scrubTo(e.clientY);
      }}
      onPointerUp={() => {
        dragging.current = false;
        hideSoon();
      }}
      onPointerCancel={() => {
        dragging.current = false;
        hideSoon();
      }}
    >
      {SECTIONS.map((s, i) => (
        <button
          key={s.id}
          type="button"
          aria-label={`Go to ${s.label}`}
          className="relative flex items-center py-0.5"
          onClick={() => {
            /* a drag that ends on a line must not double as a jump */
            if (moved.current) return;
            document.getElementById(s.id)?.scrollIntoView();
          }}
        >
          <span
            className={`pointer-events-none absolute left-full ml-2.5 whitespace-nowrap rounded-full bg-raised/90 px-2 py-0.5 text-[10px] font-semibold shadow-soft ring-1 ring-line transition-all duration-200 ${
              active ? "translate-x-0 opacity-100" : "-translate-x-1.5 opacity-0"
            } ${current === i ? "text-accent" : "text-muted"}`}
          >
            {s.label}
          </span>
          <span
            aria-hidden
            className={`block h-[2.5px] rounded-full transition-all duration-300 ${
              current === i ? "w-5 bg-[#6373FF]" : "w-3 bg-foreground/25"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
