"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroAmbient.module.css";

/* Soft moving light behind the hero particles (the "aurora veil"),
   decorative only.

   On scroll the light dissolves organically: over the first ~75% of a
   screen it fades, rises and widens a little, eased so it lingers at first
   and then lets go. Read from layout geometry each frame (see
   lib/scrollProgress.ts for why the scroll-timeline path is not used). */
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

export function HeroAmbient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.closest("section");
    if (!el || !section) return;
    let frame = 0;
    let last = -1;
    const update = () => {
      frame = 0;
      const travelled = -section.getBoundingClientRect().top;
      const t = Math.min(1, Math.max(0, travelled / (window.innerHeight * 0.75)));
      if (t === last) return;
      last = t;
      const e = easeInOut(t);
      el.style.opacity = String(1 - e);
      el.style.visibility = e >= 1 ? "hidden" : "visible";
      el.style.transform = `translate3d(0, ${-e * 8}vh, 0) scale(${1 + e * 0.1})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`${styles.ambient} ${styles.aurora}`} aria-hidden>
      <div className={`${styles.layer} ${styles.one}`} />
      <div className={`${styles.layer} ${styles.two}`} />
    </div>
  );
}
