"use client";

import { motion } from "motion/react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Trustpilot } from "@/components/Trustpilot";
import { RotatingWord } from "@/components/RotatingWord";

export function HeroV1() {
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.36, delay, ease: [0, 0, 0.2, 1] as const },
  });

  return (
    <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
      {/* Signature dot field, fading out — quiet, flat, brand-first */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-105"
        style={{
          backgroundImage:
            "radial-gradient(circle, #363536 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 85%)",
        }}
      />
      <div className="wrap relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,545px)]">
          <div>
            <motion.p
              {...enter(0)}
              className="text-label flex items-center gap-2.5 text-muted"
            >
              AI Native Growth Marketing
            </motion.p>

            <motion.h1
              {...enter(0.06)}
              className="text-display mt-6 max-w-4xl text-balance"
            >
              The go-to-market engine that learns your{" "}
              <span className="relative whitespace-nowrap">
                <RotatingWord />
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-sm bg-accent/45"
                />
              </span>
              .
            </motion.h1>

            <motion.p
              {...enter(0.12)}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
            >
              Growth shouldn&apos;t depend on who&apos;s in the room.
              Checkgrow keeps everything your company knows in one system:
              learning, improving, and working for every team. It turns
              knowledge into customers and recognition.
            </motion.p>

            <motion.div {...enter(0.16)} className="mt-8">
              <Trustpilot />
            </motion.div>

            <motion.div {...enter(0.2)} className="mt-4">
              <WaitlistForm id="hero" />
            </motion.div>
          </div>

          {/* Product proof: the Checkgrow Dashboard overview (animated SVG),
              transparent canvas sitting directly on the hero background.
              Shown on every breakpoint — stacks under the form on mobile. */}
          <motion.div {...enter(0.24)} className="mx-auto w-full max-w-105 lg:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mockups/dashboard.svg"
              alt="Checkgrow Dashboard: knowledge brain at 74%, active campaigns, competitor scan with 6.0K ads found, funnel conversions and industry trends, with the AI Assistant answering questions grounded in your data"
              width={800}
              height={760}
              className="h-auto w-full"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
