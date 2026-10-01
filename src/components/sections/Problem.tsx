"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { problemCardState, problemTools } from "@/lib/problemCards";
import styles from "./Problem.module.css";

const columnsQuery = "(min-width: 640px)";
const getColumns = () => window.matchMedia(columnsQuery).matches;
const getServerColumns = () => false;
function subscribeColumns(callback: () => void) {
  const query = window.matchMedia(columnsQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function Problem() {
  const [active, setActive] = useState<string | null>(null);
  const triggers = useRef<Record<string, HTMLButtonElement | null>>({});
  const columns = useSyncExternalStore(subscribeColumns, getColumns, getServerColumns);
  const reduced = useReducedMotion();
  const transition = { duration: reduced ? 0 : 0.24, ease: [0.2, 0, 0, 1] as const };

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const section = triggers.current[active]?.closest("section");
      if (!(event.target instanceof Node) || !section?.contains(event.target)) return;
      setActive(null);
      triggers.current[active]?.focus({ preventScroll: true });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="the-problem" aria-labelledby="problem-title" className="py-24 md:py-32">
      <div className={`wrap ${styles.layout}`}>
        <Reveal>
          <p className="text-label text-muted">The problem</p>
          <h2 id="problem-title" className="text-h1 mt-6 max-w-md">
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

        <div className={styles.board}>
          {([0, 1] as const).map(column => (
            <div key={column} className={styles.column} data-problem-column={column}>
              {problemTools.filter(tool => tool.column === column).map(tool => {
                const { expanded, covered, top, height } = problemCardState(tool, active, columns);
                return (
                  <motion.article
                    key={tool.id}
                    className={`${styles.card} card-ring`}
                    data-problem-card={tool.id}
                    data-open={expanded}
                    data-covered={covered}
                    aria-hidden={covered || undefined}
                    inert={covered}
                    initial={false}
                    animate={{ "--tile-top": `${top}%`, "--tile-height": `${height}%` }}
                    transition={transition}
                  >
                    <h3 className={styles.heading}>
                      <button
                        ref={element => { triggers.current[tool.id] = element; }}
                        id={`problem-toggle-${tool.id}`}
                        type="button"
                        className={styles.trigger}
                        aria-label={`${expanded ? "Close " : ""}${tool.name}`}
                        aria-describedby={`problem-context-${tool.id}`}
                        aria-expanded={expanded}
                        aria-controls={`problem-details-${tool.id}`}
                        onClick={() => setActive(expanded ? null : tool.id)}
                      >
                        <span className={styles.title}>{tool.name}</span>
                        <span id={`problem-context-${tool.id}`} className={styles.context}>{tool.state}</span>
                        <svg className={styles.toggleIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                          <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.6" />
                        </svg>
                      </button>
                    </h3>
                    <motion.div
                      id={`problem-details-${tool.id}`}
                      role="region"
                      aria-labelledby={`problem-toggle-${tool.id}`}
                      aria-hidden={!expanded}
                      className={styles.details}
                      initial={false}
                      animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
                      transition={transition}
                    >
                      <ul className={styles.points}>
                        {tool.bullets.map(point => (
                          <li key={point}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                              <path d="m3 3 8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.6" />
                            </svg>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
