"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const WORDS = ["product", "buyers", "market", "channels"];
const HOLD_MS = 2600;

/* deterministic pseudo-random in [0,1) so every render of a word scatters
   its sparks identically */
const rand01 = (seed: number) => {
  const v = Math.sin(seed) * 43758.5453;
  return v - Math.floor(v);
};

const SPARK_OPACITIES = [0.95, 0.72, 0.5];

/* Rotating hero verb with a fade-glow typewriter: characters light up in
   accent with a soft glow and settle into ink, while a handful of tiny
   particles pop off each letter as it lands and dissolve again; the word
   blurs away before the next one types in. SSR and pre-hydration render
   the plain first word; the cycle only starts client-side, and never for
   reduced-motion users. */
export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const raf = requestAnimationFrame(() => setRunning(true));
    const t = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), HOLD_MS);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(t);
    };
  }, []);

  if (!running) return <span>{WORDS[0]}</span>;

  const word = WORDS[index];
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={word}
        className="inline-block whitespace-pre"
        exit={{ opacity: 0, filter: "blur(6px)" }}
        transition={{ duration: 0.22, ease: [0.4, 0, 1, 1] }}
      >
        {word.split("").map((ch, i) => {
          const delay = 0.12 + i * 0.065;
          return (
            <span key={`${word}-${i}`} className="relative inline-block">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, color: "var(--color-accent)", textShadow: "0 0 26px var(--color-brand)" }}
                animate={{ opacity: 1, color: "var(--color-foreground)", textShadow: "0 0 0px transparent" }}
                transition={{ delay, duration: 0.34, ease: [0, 0, 0.2, 1] }}
              >
                {ch}
              </motion.span>
              {/* sparks: tiny dots that pop off the letter as it lands */}
              {[0, 1, 2].map((k) => {
                const seed = index * 91.7 + i * 17.3 + k * 7.1;
                const dx = (rand01(seed) - 0.5) * 34;
                const dy = -6 - rand01(seed + 1) * 26;
                const size = 2.5 + rand01(seed + 2) * 2;
                return (
                  <motion.span
                    key={k}
                    aria-hidden
                    className="pointer-events-none absolute rounded-full"
                    style={{
                      left: "50%",
                      top: `${18 + rand01(seed + 3) * 30}%`,
                      width: size,
                      height: size,
                      backgroundColor: "var(--color-brand)",
                    }}
                    initial={{ opacity: 0, x: 0, y: 2, scale: 0 }}
                    animate={{
                      opacity: [0, SPARK_OPACITIES[(i + k) % SPARK_OPACITIES.length], 0],
                      x: [0, dx * 0.6, dx],
                      y: [2, dy * 0.65, dy],
                      scale: [0, 1, 0.3],
                    }}
                    transition={{ delay: delay + 0.05 + k * 0.045, duration: 0.6, ease: "easeOut" }}
                  />
                );
              })}
            </span>
          );
        })}
      </motion.span>
    </AnimatePresence>
  );
}
