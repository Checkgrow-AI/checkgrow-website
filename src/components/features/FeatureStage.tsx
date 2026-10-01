"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import type { FeatureStep } from "@/lib/features";
import styles from "./Features.module.css";

const STEP_MS = 6000;
const ARTBOARD_W = 1200;
const ARTBOARD_H = 900;
/* Show only the centre of the artboard so the UI reads larger: every screen
   keeps its content within x 120–1080, so a 1040px window (980px on phones)
   still leaves background around it. */
const VISIBLE_W = 1040;
const COMPACT_FRAME = 560;
const COMPACT_W = 980;

type Props = {
  id: string;
  name: string;
  background: string;
  backgroundColor: string;
  steps: FeatureStep[];
  screens: ReactNode[];
};

export function FeatureStage({ id, name, background, backgroundColor, steps, screens }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const artboardRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);
  const [started, setStarted] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [transform, setTransform] = useState<string | null>(null);

  // Scale the fixed 1200×900 artboard to the frame.
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const fit = () => {
      const width = frame.clientWidth;
      if (!width) return;
      const visible = width < COMPACT_FRAME ? COMPACT_W : VISIBLE_W;
      const scale = width / visible;
      const x = -((ARTBOARD_W - visible) / 2) * scale;
      const y = -((ARTBOARD_H - visible * 0.75) / 2) * scale;
      setTransform(`translate(${x}px, ${y}px) scale(${scale})`);
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  // Number each animated layer so CSS can stagger them in order.
  useEffect(() => {
    artboardRef.current?.querySelectorAll<HTMLElement>("[data-screen]").forEach((screen) => {
      screen.querySelectorAll<HTMLElement>("[data-layer]").forEach((layer, index) => {
        layer.style.setProperty("--i", String(Math.min(index, 14)));
      });
    });
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting) setStarted(true);
    }, { threshold: 0.35 });
    observer.observe(frame);
    const onVisibility = () => setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const playing = !reduceMotion && !paused && !hovering && inView && pageVisible;

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setActive((step) => (step + 1) % steps.length), STEP_MS);
    return () => window.clearTimeout(timer);
  }, [playing, active, steps.length]);

  const select = useCallback((step: number, focus = false) => {
    setActive(step);
    if (focus) tabRefs.current[step]?.focus();
  }, []);

  const onTabKey = (event: KeyboardEvent<HTMLButtonElement>, step: number) => {
    const last = steps.length - 1;
    const next = { ArrowRight: step === last ? 0 : step + 1, ArrowLeft: step === 0 ? last : step - 1, Home: 0, End: last }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    select(next, true);
  };

  const showPause = !reduceMotion;

  return (
    <div>
      <div
        ref={frameRef}
        className={styles.frame}
        style={{ backgroundColor }}
        onPointerEnter={(event) => event.pointerType === "mouse" && setHovering(true)}
        onPointerLeave={() => setHovering(false)}
      >
        <Image src={background} alt="" fill sizes="(max-width: 767px) 100vw, 640px" className={styles.background} />
        <div id={`${id}-stage`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} aria-roledescription="animated product preview">
          <p className="sr-only">{`${name}, step ${active + 1} of ${steps.length}: ${steps[active].caption}`}</p>
          <div
            ref={artboardRef}
            className={styles.artboard}
            data-ready={transform ? "true" : "false"}
            data-started={started ? "true" : "false"}
            style={transform ? { transform } : undefined}
            aria-hidden="true"
            inert
          >
            {screens.map((screen, index) => (
              <div key={index} className={styles.screen} data-screen="" data-active={index === active ? "true" : "false"}>
                {screen}
              </div>
            ))}
          </div>
        </div>
        {showPause && (
          <button
            type="button"
            className={styles.pause}
            aria-pressed={paused}
            aria-label={paused ? `Play ${name} preview` : `Pause ${name} preview`}
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M7 4.5v15l12.5-7.5z" /></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><rect x="6" y="4.5" width="4" height="15" rx="1" /><rect x="14" y="4.5" width="4" height="15" rx="1" /></svg>
            )}
          </button>
        )}
      </div>

      <div className={styles.tabs} role="tablist" aria-label={`${name} in three steps`}>
        {steps.map((step, index) => (
          <button
            key={step.label}
            ref={(node) => { tabRefs.current[index] = node; }}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`${id}-stage`}
            tabIndex={index === active ? 0 : -1}
            className={styles.tab}
            onClick={() => select(index)}
            onKeyDown={(event) => onTabKey(event, index)}
          >
            <span className={styles.track} aria-hidden>
              <span
                key={index === active ? `run-${active}` : "idle"}
                className={styles.fill}
                data-playing={playing ? "true" : "false"}
                style={{ ["--step-ms" as string]: `${STEP_MS}ms` }}
              />
            </span>
            <span className={styles.tabLabel}>
              <span className={styles.tabIndex}>{String(index + 1).padStart(2, "0")}</span>
              {step.label}
            </span>
          </button>
        ))}
      </div>
      <p className={styles.caption} aria-hidden="true">{steps[active].caption}</p>
    </div>
  );
}
