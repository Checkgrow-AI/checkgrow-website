"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/* Scroll reveal in the brand motion language: enter easing
   cubic-bezier(0,0,0.2,1), slow duration 360ms, once only.
   Reduced motion is handled globally by MotionProvider
   (MotionConfig reducedMotion="user") — no tree branching here.
   data-reveal lets the root layout show the content when JavaScript is
   off (the server renders the hidden start state). */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.36, delay, ease: [0, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      data-reveal
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.36, ease: [0, 0, 0.2, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
