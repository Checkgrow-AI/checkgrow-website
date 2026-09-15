"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

type Tool = {
  id: string;
  name: string;
  state: string;
  rot: number;
  pos: string;
  heading: string;
  bullets: string[];
};

const tools: Tool[] = [
  {
    id: "content",
    name: "Content tool",
    state: "no brand context",
    rot: -3.5,
    pos: "left-[4%] top-[2%]",
    heading: "Off-brand by default",
    bullets: [
      "Copy that doesn't sound like you",
      "Blind to products and personas",
      "Calendar guesswork, no research",
      "Every draft starts from blank",
    ],
  },
  {
    id: "ads",
    name: "Ad platform",
    state: "no audience context",
    rot: 2,
    pos: "right-[2%] top-0",
    heading: "Spend without strategy",
    bullets: [
      "Channels pulling in different directions",
      "Boosting posts instead of strategy",
      "No ICP, no strategic audience",
      "Creatives guessed, never benchmarked",
    ],
  },
  {
    id: "chatbot",
    name: "AI chatbot",
    state: "re-brief every time",
    rot: 1,
    pos: "left-[22%] top-[38%]",
    heading: "Chat with no memory",
    bullets: [
      "Different LLMs, no single source of truth",
      "Random PDF uploads, repeated chats",
      "Context re-typed every session",
      "No automations, no prompt craft",
    ],
  },
  {
    id: "analytics",
    name: "Analytics",
    state: "data nobody reads",
    rot: 3,
    pos: "bottom-[4%] left-0",
    heading: "Data nobody reads",
    bullets: [
      "Dashboards without decisions",
      "Events never mapped to a funnel",
      "Paid, organic and site data split",
      "Nothing says what to do next",
    ],
  },
  {
    id: "rivals",
    name: "Competitor sheet",
    state: "stale by Monday",
    rot: -3,
    pos: "bottom-0 right-[6%]",
    heading: "Stale by Monday",
    bullets: [
      "Research done once, then forgotten",
      "No live view of rivals' ads",
      "Insights never reach campaigns",
      "Gut feel instead of signals",
    ],
  },
];

const spring = { type: "spring" as const, stiffness: 400, damping: 32 };

export function Problem() {
  const [active, setActive] = useState<string | null>(null);
  const activeTool = tools.find((t) => t.id === active) ?? null;

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* soft purple corner glows, this section only */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-36 -top-36 size-90 rounded-full bg-accent/15 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-36 size-100 rounded-full blur-[100px]"
        style={{ backgroundColor: "rgba(99,115,255,0.1)" }}
      />
      <div className="wrap relative grid items-center gap-14 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="text-label flex items-center gap-2.5 text-muted">
            <span className="dot-marker" aria-hidden />
            The problem
          </p>
          <h2 className="text-h1 mt-6 max-w-md">
            Every marketing tool starts from zero.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Five tools means explaining your business five times, then again
            for every new campaign, hire and AI prompt. Nothing carries
            forward. Nothing remembers what actually worked. You shouldn&apos;t
            need a data analyst to read your own funnel.
          </p>
          <p className="mt-4 text-sm text-muted">
            Tap a tool to see what really goes wrong inside it.
          </p>
        </Reveal>

        <RevealStagger className="relative h-85" gap={0.07}>
          {/* Backdrop: closes the expanded card on any outside click */}
          <AnimatePresence>
            {active && (
              <motion.button
                type="button"
                aria-label="Close"
                className="fixed inset-0 z-20 cursor-default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActive(null)}
              />
            )}
          </AnimatePresence>

          {tools.map((t) => (
            <RevealItem key={t.id} className={`absolute ${t.pos}`}>
              <motion.div
                animate={
                  active && active !== t.id
                    ? { filter: "blur(4px)", opacity: 0.45, scale: 0.97 }
                    : { filter: "blur(0px)", opacity: 1, scale: 1 }
                }
                transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
              >
                {active !== t.id && (
                  <motion.div
                    layoutId={t.id}
                    role="button"
                    tabIndex={0}
                    aria-expanded={false}
                    onClick={() => setActive(t.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActive(t.id);
                      }
                    }}
                    initial={{ rotate: t.rot }}
                    whileHover={{ rotate: 0, y: -5, scale: 1.03 }}
                    transition={spring}
                    className="card-ring group w-40 cursor-pointer rounded-lg bg-raised p-4 shadow-soft ring-1 ring-line transition-shadow duration-200 hover:shadow-raised hover:ring-[1.5px] hover:ring-accent/60"
                    style={{ "--ring-delay": `${-tools.indexOf(t) * 0.6}s` } as CSSProperties}
                  >
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-semibold">{t.name}</p>
                      <span
                        aria-hidden
                        className="text-sm leading-none text-muted transition-colors duration-200 group-hover:text-accent"
                      >
                        +
                      </span>
                    </div>
                    <p className="text-label mt-2 normal-case tracking-normal text-muted">
                      ↻ {t.state}
                    </p>
                    <div className="mt-2.5 h-1 overflow-hidden rounded bg-line">
                      <div className="h-full w-[14%] rounded bg-lavender" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </RevealItem>
          ))}

          {/* Expanded card: the clicked tool morphs into this panel */}
          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
            <AnimatePresence>
              {activeTool && (
                <motion.div
                  key={activeTool.id}
                  layoutId={activeTool.id}
                  transition={spring}
                  className="pointer-events-auto w-[290px] rounded-xl bg-raised p-5 shadow-raised ring-[1.5px] ring-accent/50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold">{activeTool.name}</p>
                      <p className="text-label mt-1 normal-case tracking-normal text-muted">
                        ↻ {activeTool.state}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label="Close"
                      onClick={() => setActive(null)}
                      className="flex size-6 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-surface hover:text-foreground"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                        <path
                          d="M1 1 L9 9 M9 1 L1 9"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, delay: 0.12, ease: [0, 0, 0.2, 1] }}
                  >
                    <p className="mt-4 border-t border-line pt-3.5 text-[13px] font-semibold">
                      {activeTool.heading}
                    </p>
                    <ul className="mt-2.5 flex flex-col gap-2">
                      {activeTool.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-muted"
                        >
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            aria-hidden
                            className="mt-[4px] shrink-0 text-accent"
                          >
                            <path
                              d="M1 1 L8 8 M8 1 L1 8"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <RevealItem className="absolute right-0 top-[45%] max-md:hidden">
            <motion.p
              animate={active ? { filter: "blur(4px)", opacity: 0.35 } : { filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="text-label w-32 leading-relaxed text-muted"
            >
              Five stacks.
              <br />
              Zero memory.
            </motion.p>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  );
}
