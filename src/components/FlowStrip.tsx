"use client";

import { motion } from "motion/react";

/* One glowing light travels behind the whole strip; each chip's dot
   blinks purple the moment the light passes underneath it. Orb sweep
   and dot blinks share one 5.6s linear timeline, so the sync holds
   without any JS. Delays are tuned to the chips' horizontal centres. */

const DESKTOP: Array<{ label: string; delay: number }> = [
  { label: "Your business", delay: 0.1 },
  { label: "Create", delay: 1.35 },
  { label: "Reach", delay: 2.3 },
  { label: "Measure", delay: 3.3 },
  { label: "Improve", delay: 4.3 },
];

const MOBILE_ROW_1: Array<{ label: string; delay: number }> = [
  { label: "Your business", delay: 0.32 },
  { label: "Create", delay: 1.42 },
];
const MOBILE_ROW_2: Array<{ label: string; delay: number }> = [
  { label: "Reach", delay: 2.92 },
  { label: "Measure", delay: 3.74 },
  { label: "Improve", delay: 4.56 },
];

type Tone = "light" | "ink";

function Chip({ label, lead, delay, tone }: { label: string; lead: boolean; delay: number; tone: Tone }) {
  const looks =
    tone === "ink"
      ? lead
        ? "bg-foreground text-canvas"
        : "bg-raised text-foreground ring-1 ring-line"
      : lead
        ? "bg-foreground text-canvas"
        : "bg-raised text-foreground shadow-soft ring-1 ring-line";
  return (
    <span
      className={`relative z-10 flex min-h-10 shrink-0 items-center gap-2 rounded-full px-3.5 text-xs font-medium max-[374px]:gap-1.5 max-[374px]:px-2 sm:min-h-11 sm:gap-2.5 sm:px-5 sm:text-sm ${looks}`}
    >
      <span
        className={`flow-dot size-1.5 rounded-full ${lead ? "bg-brand" : "bg-brand/60"}`}
        style={{ animationDelay: `${delay}s` }}
        aria-hidden
      />
      {label}
    </span>
  );
}

function Track({ tone }: { tone: Tone }) {
  return (
    <span
      aria-hidden
      className={`relative z-0 mx-0.5 block h-[2.5px] w-7 shrink-0 rounded-full max-[374px]:w-4 sm:mx-1 sm:w-10 ${
        tone === "ink" ? "bg-lavender/25" : "bg-line"
      }`}
    />
  );
}

const stepIn = (order: number) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.32, delay: order * 0.14, ease: [0, 0, 0.2, 1] as const },
});

export function FlowStrip({ tone = "light" }: { tone?: Tone }) {
  const note = "text-muted";
  return (
    <>
      {/* Desktop / tablet: one row, one light */}
      <div className="hidden items-center lg:flex">
        <div className="relative flex items-center">
          <span className="flow-orb orb-x" aria-hidden />
          {DESKTOP.map((step, i) => (
            <motion.div key={step.label} className="flex items-center" {...stepIn(i)}>
              <Chip label={step.label} lead={i === 0} delay={step.delay} tone={tone} />
              {i < DESKTOP.length - 1 && <Track tone={tone} />}
            </motion.div>
          ))}
        </div>
        <motion.p className={`ml-5 hidden shrink-0 text-sm xl:block ${note}`} {...stepIn(5)}>
          ↻ what works gets remembered
        </motion.p>
      </div>

      {/* Mobile: two tidy rows; the light crosses row one, fades, and
          re-emerges at the start of row two */}
      <div className="flex flex-col items-start gap-2.5 lg:hidden">
        <div className="relative flex items-center">
          <span className="flow-orb orb-m1" aria-hidden />
          {MOBILE_ROW_1.map((step, i) => (
            <motion.div key={step.label} className="flex items-center" {...stepIn(i)}>
              <Chip label={step.label} lead={i === 0} delay={step.delay} tone={tone} />
              {i < MOBILE_ROW_1.length - 1 && <Track tone={tone} />}
            </motion.div>
          ))}
        </div>
        <div className="relative flex items-center">
          <span className="flow-orb orb-m2" aria-hidden />
          {MOBILE_ROW_2.map((step, i) => (
            <motion.div key={step.label} className="flex items-center" {...stepIn(i + 2)}>
              <Chip label={step.label} lead={false} delay={step.delay} tone={tone} />
              {i < MOBILE_ROW_2.length - 1 && <Track tone={tone} />}
            </motion.div>
          ))}
        </div>
        <motion.p className={`mt-1.5 text-sm ${note}`} {...stepIn(5)}>
          ↻ what works gets remembered
        </motion.p>
      </div>
    </>
  );
}
