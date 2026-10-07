"use client";

/* Top of /demo-confirmation: a centred, friendly confirmation. With the
   booking hand-off from the form (sessionStorage, same tab) it names the
   visitor and shows the exact time in their zone; on a direct visit it
   shows the general message. The generate_lead conversion fires here,
   once per booking. */

import { useEffect, useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { DEMO_MINUTES } from "@/lib/demo";
import { DEMO_BOOKING_KEY, saveDemoBooking, type DemoBookingSummary } from "@/lib/demoBooking";
import { DemoIcon, type DemoIconName } from "./DemoIcons";
import styles from "./Demo.module.css";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const noSubscribe = () => () => {};
const readRaw = () => {
  try {
    return sessionStorage.getItem(DEMO_BOOKING_KEY);
  } catch {
    return null;
  }
};

function parse(raw: string | null): DemoBookingSummary | null {
  if (!raw) return null;
  try {
    const b = JSON.parse(raw) as DemoBookingSummary;
    return b.slot && !Number.isNaN(Date.parse(b.slot)) ? b : null;
  } catch {
    return null;
  }
}

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0, 0, 0.2, 1] as const },
});

export function DemoConfirmation() {
  const raw = useSyncExternalStore(noSubscribe, readRaw, () => null);
  const booking = useMemo(() => parse(raw), [raw]);

  useEffect(() => {
    if (!booking || booking.tracked) return;
    window.gtag?.("event", "generate_lead", { method: "demo_request" });
    saveDemoBooking({ ...booking, tracked: true });
  }, [booking]);

  const name = booking?.firstName?.trim();
  const nice = name ? name.charAt(0).toUpperCase() + name.slice(1) : "";
  const site = booking?.website.replace(/^https?:\/\//, "").replace(/\/$/, "") ?? "";

  let day = "";
  let time = "";
  if (booking) {
    const tz = booking.timeZone || undefined;
    const start = new Date(booking.slot);
    const end = new Date(start.getTime() + DEMO_MINUTES * 60_000);
    day = new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone: tz }).format(start);
    const hm = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz });
    time = `${hm.format(start)}–${hm.format(end)}`;
  }

  const prep: { icon: DemoIconName; title: string; body: string }[] = [
    {
      icon: "radar",
      title: "Competitor scan",
      body: site ? `Who competes with ${site}, and how they market.` : "Who you compete with, and how they market.",
    },
    { icon: "browser", title: "Website and conversion review", body: "Where visitors drop off, and what to fix first." },
    { icon: "spark", title: "Your AI growth strategy", body: "A first plan and report, ready to walk through together." },
  ];

  return (
    <section className={`wrap ${styles.confirm}`} aria-labelledby="confirm-title">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <motion.span
          className="flex size-16 items-center justify-center rounded-full bg-accent"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          aria-hidden
        >
          <svg width="28" height="28" viewBox="0 0 18 18" fill="none">
            <motion.path
              d="M3.5 9.5 L7.5 13.5 L14.5 4.5"
              stroke="var(--color-canvas)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            />
          </svg>
        </motion.span>

        <motion.p className="text-label mt-8 text-accent" {...enter(0.15)}>
          Demo confirmed
        </motion.p>
        <motion.h1 id="confirm-title" className="text-h1 mt-4 text-balance" {...enter(0.22)}>
          {nice ? `You're booked, ${nice}.` : "Your demo is booked."}
        </motion.h1>
        <motion.p className="mt-5 max-w-xl text-lg leading-relaxed text-muted" {...enter(0.3)}>
          Thank you for your time. We can&apos;t wait to show you Checkgrow
          running on your own business.
        </motion.p>

        <motion.div className={styles.confirmCard} {...enter(0.38)}>
          {booking ? (
            <ul className={styles.confirmFacts}>
              <li>
                <DemoIcon name="calendar" className="shrink-0 text-accent" />
                <span>{day}</span>
              </li>
              <li>
                <DemoIcon name="clock" className="shrink-0 text-accent" />
                <span className="tabular-nums">{time}</span>
              </li>
              <li>
                <DemoIcon name="video" className="shrink-0 text-accent" />
                <span>Google Meet</span>
              </li>
            </ul>
          ) : null}
          <p className="flex items-start justify-center gap-2.5 text-sm text-muted">
            <DemoIcon name="mail" size={18} className="mt-px shrink-0 text-accent" />
            <span>
              {booking ? (
                <>
                  The calendar invite and Meet link are on their way to{" "}
                  <span className="text-foreground">{booking.email}</span>.
                </>
              ) : (
                "Check your inbox: the calendar invite and Google Meet link are on their way."
              )}
            </span>
          </p>
        </motion.div>
      </div>

      <motion.div className="mx-auto mt-16 max-w-4xl" {...enter(0.48)}>
        <h2 className="text-label text-center text-muted">Before the call, we prepare</h2>
        <ul className={styles.prepRow}>
          {prep.map((p) => (
            <li key={p.title} className={styles.prepItem}>
              <DemoIcon name={p.icon} size={22} className="text-accent" />
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/features"
            className="inline-flex min-h-12 items-center rounded-full bg-foreground px-7 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-accent"
          >
            Explore the features
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center rounded-full px-5 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
          >
            Back to the homepage
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
