"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { shiftBenefits, shiftStepFromProgress } from "@/lib/shiftStory";
import styles from "./Shift.module.css";

const COUNT = shiftBenefits.length;

export function Shift() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cinematic = window.matchMedia(
      "(min-width: 768px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    let nearby = false;

    const measure = () => {
      frame = 0;
      setEnhanced(cinematic.matches);
      if (!cinematic.matches) {
        setActive(0);
        return;
      }
      // Geometry, not ScrollTimeline (see src/lib/scrollProgress.ts): the
      // pinned stage sits below the header, so progress runs from the
      // track's top meeting the header to its bottom meeting the viewport's.
      const clearance = parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue("--header-clearance")) || 88;
      const rect = track.getBoundingClientRect();
      const span = rect.height - (window.innerHeight - clearance);
      const progress = span > 0 ? (clearance - rect.top) / span : 0;
      setActive(shiftStepFromProgress(progress, COUNT));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    const onScroll = () => {
      if (nearby && cinematic.matches) schedule();
    };
    const observer = new IntersectionObserver(([entry]) => {
      nearby = entry.isIntersecting;
      if (nearby) schedule();
    }, { rootMargin: "100% 0px" });
    const resizeObserver = new ResizeObserver(schedule);
    observer.observe(track);
    resizeObserver.observe(track);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);
    cinematic.addEventListener("change", schedule);
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      cinematic.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section id="the-shift" aria-labelledby="shift-title" className={`${styles.section} border-t border-line py-24 md:py-32`}>
      <div className="wrap">
        <div className={styles.intro}>
          <p className="text-label flex items-center gap-2.5 text-muted">
            The shift
          </p>
          <h2 id="shift-title" className="text-h1 mt-6 text-balance">
            One connected system.<br />More room to grow.
          </h2>
        </div>

        <div
          ref={trackRef}
          className={styles.track}
          data-enhanced={enhanced}
          data-active-benefit={active + 1}
          style={{ ["--shift-count" as string]: COUNT }}
        >
          <div className={styles.story}>
            <div className={styles.visual}>
              <figure className={styles.artwork}>
                <Image
                  src="/editorial/ai-assistant-converging-answer.webp"
                  alt="A person facing connected landscapes that converge into one answer, illustrating shared marketing intelligence."
                  fill
                  sizes="(min-width: 1200px) 512px, (min-width: 768px) 45vw, (min-width: 560px) 512px, calc(100vw - 48px)"
                  className={styles.image}
                />
                <div className={styles.scrim} aria-hidden />
                {/* Captions are repeated in the semantic chapters, so a screen
                    reader receives all four topics once, in reading order. */}
                <figcaption className={styles.caption} aria-hidden="true">
                  <Image
                    src="/brand/logos/symbol-transparent-light.svg"
                    alt=""
                    width={44}
                    height={44}
                    className={styles.symbol}
                  />
                  <div className={styles.captionStack}>
                    {shiftBenefits.map((benefit, index) => (
                      <div key={benefit.id} className={styles.captionPanel} data-state={index === active ? "active" : index < active ? "past" : "next"}>
                        <p className={styles.captionTitle}>{benefit.title}</p>
                        <p className={styles.captionBody}>{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className={styles.stage}>
              <div className={styles.chapters}>
                {shiftBenefits.map((benefit, index) => (
                  <article
                    key={benefit.id}
                    className={styles.chapter}
                    aria-labelledby={`shift-${benefit.id}`}
                    data-benefit={index + 1}
                    data-state={index === active ? "active" : index < active ? "past" : "next"}
                  >
                    <div className={styles.benefit}>
                      <p className={styles.label}>{benefit.label}</p>
                      <p className={styles.metric}>{benefit.stat}</p>
                      <p className={styles.body}>{benefit.body}</p>
                      <div className={styles.topic}>
                        <h3 id={`shift-${benefit.id}`}>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
