"use client";

/* A full-width platform film between the credibility strip and the
   problem. The card rises into view as it enters the viewport, and the
   audio is scrubbed by scroll: silent at the edges, full volume when the
   video is centred, fading out again as it leaves. The unmute is
   attempted as soon as the user engages at all (wheel, touch, pointer);
   if the browser vetoes it (autoplay policy pauses the video), we resume
   muted and retry after the first real activation (pointerdown/keydown).
   The speaker chip always shows the ACTUAL audio state and doubles as a
   manual override. */

import { useEffect, useRef, useState } from "react";
import { passProgress } from "@/lib/scrollProgress";
import { useStableVh } from "@/lib/useStableVh";

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (v: number) => v * v * (3 - 2 * v);
const ramp = (p: number, a: number, b: number) => smooth(clamp01((p - a) / (b - a)));

/* film chapters: click to jump, the active tab follows playback */
const CHAPTERS: Array<{ label: string; t: number }> = [
  { label: "Knowledge", t: 3 },
  { label: "Marketing", t: 36 },
  { label: "Insights", t: 86 },
  { label: "Sales", t: 99 },
  { label: "AI Chat", t: 133 },
];

export function PlatformFilm() {
  const secRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const engaged = useRef(false);   // any engagement: wheel, touch, pointer move
  const vetoed = useRef(false);    // the browser refused an unmute since the last activation
  const lastAudible = useRef(false);
  const [sound, setSound] = useState(true);
  const [audible, setAudible] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const lastBlocked = useRef(false);
  const soundRef = useRef(true);
  const [chapter, setChapter] = useState(0);
  const lastChapter = useRef(0);
  const { vhRef: stableVhRef } = useStableVh();

  useEffect(() => {
    soundRef.current = sound;
  }, [sound]);

  useEffect(() => {
    const onEngage = () => {
      engaged.current = true;
    };
    const onActivate = () => {
      engaged.current = true;
      vetoed.current = false; // a real activation lifts any earlier veto
    };
    window.addEventListener("wheel", onEngage, { passive: true });
    window.addEventListener("touchstart", onEngage, { passive: true });
    window.addEventListener("pointermove", onEngage, { passive: true });
    window.addEventListener("pointerdown", onActivate);
    window.addEventListener("keydown", onActivate);

    const video = videoRef.current;
    const sec = secRef.current;
    let io: IntersectionObserver | undefined;
    let inView = false;
    /* React does not render the muted attribute into SSR HTML, so the
       parser-time autoplay attempt is blocked. Force muted before any
       play() and retry muted whenever playback is refused. */
    const tryPlay = () => {
      if (!video || !inView) return;
      const pr = video.play();
      if (pr)
        pr.catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
    };
    if (video && sec) {
      video.defaultMuted = true;
      video.muted = true;
      io = new IntersectionObserver(([e]) => {
        inView = e.isIntersecting;
        if (inView) tryPlay();
        else video.pause();
      });
      io.observe(sec);
      video.addEventListener("canplay", tryPlay);
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const frame = () => {
      raf = requestAnimationFrame(frame);
      const p = sec ? passProgress(sec, stableVhRef.current) : 0;

      if (cardRef.current) {
        const e = prefersReduced ? 1 : ramp(p, 0.03, 0.32);
        /* gentle breathing zoom: largest when the film crosses the middle
           of the viewport, easing back down towards either edge */
        const bell = prefersReduced ? 0 : Math.sin(Math.PI * clamp01(p));
        const zoom = 1 + 0.05 * bell * bell;
        cardRef.current.style.opacity = String(e);
        cardRef.current.style.transform = `translateY(${(1 - e) * 110}px) scale(${(0.93 + 0.07 * e) * zoom})`;
      }

      const v = videoRef.current;
      if (v) {
        /* silent at the edges, full when centred */
        const bell = Math.sin(Math.PI * clamp01((p - 0.12) / 0.76));
        const vol = clamp01(bell * bell * 1.2);
        if (Math.abs(v.volume - vol) > 0.01) v.volume = vol;
        const want =
          soundRef.current && engaged.current && !vetoed.current && vol > 0.03;
        if (want && v.muted) {
          v.muted = false;
          /* the veto (a policy pause) can land asynchronously */
          setTimeout(() => {
            if (!v.muted && v.paused) {
              vetoed.current = true;
              v.muted = true;
              v.play().catch(() => {});
            }
          }, 150);
        } else if (!want && !v.muted) v.muted = true;

        /* keep the chip honest: it reflects what the ear hears */
        const actual = !v.muted && !v.paused && vol > 0.03;
        if (actual !== lastAudible.current) {
          lastAudible.current = actual;
          setAudible(actual);
        }
        /* the browser is withholding sound while the film is centre stage */
        const isBlocked = vetoed.current && soundRef.current && vol > 0.3;
        if (isBlocked !== lastBlocked.current) {
          lastBlocked.current = isBlocked;
          setBlocked(isBlocked);
        }

        /* the chapter tab follows playback */
        let ci = 0;
        for (let i = CHAPTERS.length - 1; i >= 0; i--) {
          if (v.currentTime >= CHAPTERS[i].t - 0.5) {
            ci = i;
            break;
          }
        }
        if (ci !== lastChapter.current) {
          lastChapter.current = ci;
          setChapter(ci);
        }
      }
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      video?.removeEventListener("canplay", tryPlay);
      window.removeEventListener("wheel", onEngage);
      window.removeEventListener("touchstart", onEngage);
      window.removeEventListener("pointermove", onEngage);
      window.removeEventListener("pointerdown", onActivate);
      window.removeEventListener("keydown", onActivate);
    };
  }, [stableVhRef]);

  return (
    <section
      ref={secRef}
      id="solution"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--color-canvas)" }}
    >
      {/* the big glow breathing behind the film */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{ backgroundColor: "rgba(99, 115, 255, 0.16)" }}
      />
      {/* the purple dissolves into the next section along a soft curve:
          the black rises highest at the centre and rolls off towards the
          corners, so the ending reads circular rather than a hard band */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 md:h-96"
        style={{
          background:
            "radial-gradient(140% 100% at 50% 100%, #000000 28%, rgba(0,0,0,0.7) 52%, rgba(0,0,0,0.25) 72%, rgba(0,0,0,0) 92%)",
        }}
      />
      <div className="wrap relative">
        <div
          ref={cardRef}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-xl ring-1 ring-white/20 shadow-[0_36px_70px_-12px_rgba(24,24,24,0.45)]"
          style={{ opacity: 0 }}
        >
          {/* chapter tabs spanning the top edge of the film */}
          <div className="flex w-full bg-raised" role="tablist" aria-label="Film chapters">
            {CHAPTERS.map((c, i) => (
              <button
                key={c.label}
                type="button"
                role="tab"
                aria-selected={chapter === i}
                onClick={() => {
                  engaged.current = true;
                  vetoed.current = false;
                  const v = videoRef.current;
                  if (v) {
                    v.currentTime = c.t;
                    v.play().catch(() => {});
                  }
                  lastChapter.current = i;
                  setChapter(i);
                }}
                className={`relative flex-1 whitespace-nowrap px-1 py-2.5 text-[11px] font-medium transition-colors duration-200 sm:py-3.5 sm:text-sm ${
                  chapter === i ? "text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {c.label}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-[#6373FF] transition-transform duration-300 ease-out"
                  style={{ transform: chapter === i ? "scaleX(1)" : "scaleX(0)" }}
                />
              </button>
            ))}
          </div>
          <video
            ref={videoRef}
            src="/videos/checkgrow-platform.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/checkgrow-platform-poster.jpg"
            className="block w-full cursor-pointer"
            aria-label="Checkgrow platform tour"
            onClick={() => {
              engaged.current = true;
              vetoed.current = false;
              setSound(!audible);
            }}
          />
          {blocked && (
            <button
              type="button"
              onClick={() => {
                engaged.current = true;
                vetoed.current = false;
                setSound(true);
              }}
              className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-canvas/85 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-surface"
            >
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Tap for sound
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              engaged.current = true;
              vetoed.current = false;
              const v = videoRef.current;
              if (v) {
                v.currentTime = 0;
                v.play().catch(() => {});
              }
            }}
            aria-label="Restart the platform film"
            className="absolute bottom-4 right-18 flex size-11 items-center justify-center rounded-full bg-canvas/80 text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-surface"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4.5 5v5h5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 13.5a7 7 0 1 0 1.2-5.3L4.5 10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => {
              engaged.current = true;
              vetoed.current = false;
              setSound(!audible);
            }}
            aria-label={audible ? "Mute the platform film" : "Unmute the platform film"}
            className="absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-full bg-canvas/80 text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-surface"
          >
            {audible ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 9.5v5h3.5L13 19V5L7.5 9.5H4z"
                  fill="currentColor"
                />
                <path
                  d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 9.5v5h3.5L13 19V5L7.5 9.5H4z" fill="currentColor" />
                <path
                  d="M16.5 9.5l5 5M21.5 9.5l-5 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="relative z-10 mt-9 flex justify-center">
          <a
            href="#waitlist"
            className="inline-flex min-h-12 items-center rounded-full bg-foreground px-8 text-sm font-semibold text-canvas transition-colors duration-200 hover:bg-accent"
          >
            Get Free Early Access
          </a>
        </div>
      </div>
    </section>
  );
}
