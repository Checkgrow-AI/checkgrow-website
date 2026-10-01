"use client";

/* Real stories: a full-width testimonial slider (quote left, portrait
   right), auto-advancing with a progress line and an avatar rail
   underneath (reference: influencer-slider layout). Below it, the demo
   video behind a click-to-play purple card so no video bytes load until
   asked for. The client-logo marquee lives up top in LogoMarquee.tsx. */

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/Reveal";

type Study = {
  id: string;
  person: string;
  role: string;
  company: string;
  attribution?: string;
  photo: string;
  focus?: string;
  logo?: string;
  metrics?: string[];
  quote: string;
};

const studies: Study[] = [
  {
    id: "salim-sayed",
    person: "Salim Sayed",
    role: "Marketing Director",
    company: "Payroll",
    photo: "/case-studies/salim-sayed.webp",
    quote:
      "It is a well-thought-out growth operating system that connects marketing and sales while giving leadership greater visibility.",
  },
  {
    id: "sophia-ahrel",
    person: "Sophia Ahrel",
    role: "Founder",
    company: "Ahrel&Co",
    attribution: "Founder, Ahrel&Co · Mentor, Brighteye Ventures",
    photo: "/case-studies/sophia-ahrel.webp",
    quote:
      "This is a full go-to-market tech stack in one place. It's super practical because you have context and everything in one platform.",
  },
  {
    id: "amanda-bester",
    person: "Amanda Bester",
    role: "Founder",
    company: "Pragmattica Consulting",
    photo: "/case-studies/amanda-bester-retouched.webp",
    quote:
      "What makes CheckGrow so compelling is its ability to bring marketing strategy, campaign planning, execution and performance visibility into one connected platform",
  },
  {
    id: "witrina",
    person: "Ivo Pavlović",
    role: "Founder & CEO",
    company: "Witrina",
    photo: "/case-studies/ivo-witrina-retouched.webp",
    logo: "/client-logos/witrina.svg",
    metrics: ["€100k+ Organic Revenue"],
    quote:
      "We didn't want to build just another webshop. We wanted a curated digital space people enjoy browsing. Checkgrow gave us the engine to create at scale without losing our brand.",
  },
  {
    id: "wespa",
    person: "Milena Urban",
    role: "CFO",
    company: "WESPA",
    photo: "/case-studies/milena-wespa.avif",
    logo: "/client-logos/wespa.svg",
    metrics: ["3x Growth", "8x ROI"],
    quote:
      "Setup took minutes, and within hours we were running smoother. The interface is clean, the automations are thoughtful, and nothing feels bloated. It's easily one of the smartest decisions we've made this year.",
  },
  {
    id: "minka",
    person: "Vikram R.",
    role: "CPO",
    company: "Minka",
    photo: "/case-studies/vikram-minka-enhanced.webp",
    logo: "/client-logos/minka.svg",
    metrics: ["30+ Enterprise SQLs"],
    quote:
      "Checkgrow got us started on our GTM strategy in a niche technical space. We've learned a lot from our engagement, from SEO to LinkedIn advertising. We're in a much better position to market our services now.",
  },
  {
    id: "woodoz",
    person: "Petar Curic",
    role: "CEO",
    company: "Woodoz",
    photo: "/case-studies/petar-curic.jpg",
    focus: "object-[64%_22%]",
    logo: "/client-logos/woodoz.svg",
    metrics: ["400+ Paying Users"],
    quote:
      "We had the vision and the product, but not the growth engine. Checkgrow helped us structure everything, from campaigns to content. For the first time, our go-to-market felt coordinated and scalable.",
  },
];

/* the client set shares a padded 153×60 canvas; woodoz is cropped tight
   (263×47), so it gets its own height to sit optically level */

const HOLD_MS = 6500;

function Slider() {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const pausedRef = useRef(false);
  const barRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const readWordsRef = useRef(-1);
  const startRef = useRef(0);
  const progressRef = useRef(0);
  /* restart signal: bumped on manual selection so the effect resets the line */
  const [restartKey, setRestartKey] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setReduced(true));
      return () => cancelAnimationFrame(raf);
    }
  }, []);

  const go = useCallback((i: number) => {
    setIndex((i + studies.length) % studies.length);
  }, []);

  /* auto-advance with a rAF-driven progress line (pauses on hover;
     restartKey resets the line after a manual selection) */
  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    progressRef.current = 0;
    startRef.current = performance.now();
    if (barRef.current) barRef.current.style.transform = "scaleX(0)";
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (pausedRef.current) {
        startRef.current = now - progressRef.current * HOLD_MS;
        return;
      }
      const t = (now - startRef.current) / HOLD_MS;
      progressRef.current = Math.min(t, 1);
      if (barRef.current)
        barRef.current.style.transform = `scaleX(${Math.min(t, 1)})`;
      /* reading effect: the words turn purple in pace with the hold,
         finishing at ~82% so the quote reads complete before the switch */
      const spans = quoteRef.current?.querySelectorAll<HTMLElement>("[data-w]");
      if (spans && spans.length) {
        const n = Math.min(spans.length, Math.floor((t / 0.82) * spans.length));
        if (n !== readWordsRef.current) {
          readWordsRef.current = n;
          spans.forEach((el, i) => {
            el.style.color = i < n ? "var(--color-accent)" : "";
          });
        }
      }
      if (t >= 1) {
        progressRef.current = 0;
        startRef.current = now;
        readWordsRef.current = -1;
        setIndex((v) => (v + 1) % studies.length);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, restartKey]);

  /* manual selection restarts the line */
  const select = (i: number) => {
    setRestartKey((k) => k + 1);
    go(i);
  };

  const s = studies[index];

  return (
    <div
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div className="relative overflow-hidden rounded-card bg-raised shadow-soft ring-1 ring-line">
        <div className="grid md:grid-cols-[minmax(0,340px)_1fr] lg:grid-cols-[minmax(0,400px)_1fr]">
          {/* portrait */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-95">
            <AnimatePresence initial={false}>
              <motion.div
                key={s.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={s.photo}
                  alt={`${s.person}, ${s.attribution ?? `${s.role} at ${s.company}`}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className={`object-cover ${s.focus ?? "object-top"}`}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* quote */}
          <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
            <div>
              <span
                aria-hidden
                className="block font-serif text-5xl leading-none text-accent"
              >
                &ldquo;
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.blockquote
                  key={s.id}
                  ref={quoteRef}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.38, ease: [0.2, 0, 0, 1] }}
                  className="mt-3 text-xl leading-snug font-medium text-balance lg:text-2xl"
                >
                  {s.quote.split(" ").map((w, i) => (
                    <span
                      key={i}
                      data-w
                      className="transition-colors duration-300"
                    >
                      {w}{" "}
                    </span>
                  ))}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-8 border-t border-line pt-5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-semibold">{s.person}</p>
                    <p className="text-sm text-muted">
                      {s.attribution ?? `${s.role} · ${s.company}`}
                    </p>
                  </div>
                  {s.metrics && s.metrics.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                      {s.metrics.map((m) => (
                        <span
                          key={m}
                          className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* progress line */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-line">
          <div
            ref={barRef}
            className="h-full origin-left bg-accent"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>

      {/* avatar rail */}
      <div className="mt-8 flex flex-wrap items-start justify-center gap-x-5 gap-y-5 sm:gap-x-8">
        {studies.map((st, i) => {
          const active = i === index;
          return (
            <button
              key={st.id}
              type="button"
              onClick={() => select(i)}
              aria-label={`Show ${st.person}'s story`}
              aria-current={active}
              className="group flex w-24 flex-col items-center text-center"
            >
              <span
                className={`relative block size-14 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-canvas transition-all duration-300 sm:size-16 ${
                  active ? "ring-accent" : "ring-transparent opacity-60 group-hover:opacity-100"
                }`}
              >
                <Image
                  src={st.photo}
                  alt={`${st.person}, ${st.attribution ?? `${st.role} at ${st.company}`}`}
                  fill
                  sizes="64px"
                  className={`object-cover ${st.focus ?? "object-top"}`}
                />
              </span>
              <span
                className={`mt-2.5 text-xs font-semibold transition-colors duration-200 ${
                  active ? "text-foreground" : "text-muted"
                }`}
              >
                {st.person}
              </span>
              <span className="text-[10.5px] text-muted">{st.company}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DemoCard() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative mt-20 overflow-hidden rounded-card p-8 text-white md:p-12"
      style={{ backgroundColor: "var(--color-raised)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{ backgroundColor: "rgba(99, 115, 255, 0.12)" }}
      />
      <div className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-h2 text-balance">Demos don&apos;t lie.</h3>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/85">
            Watch Checkgrow run a real go-to-market end to end: 2 minutes 41
            seconds, one take, no cuts.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-foreground px-7 text-sm font-semibold text-canvas transition-colors duration-200 hover:bg-accent"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                {open ? (
                  <path d="M3 2.5h3v9H3zM8 2.5h3v9H8z" fill="currentColor" />
                ) : (
                  <path d="M3.5 2 12 7l-8.5 5V2z" fill="currentColor" />
                )}
              </svg>
              {open ? "Hide the demo" : "Watch our demo review"}
            </button>
            <a
              href="#waitlist"
              className="inline-flex min-h-12 items-center rounded-full border border-accent/50 bg-transparent px-7 text-sm font-semibold text-accent transition-colors duration-200 hover:bg-brand-strong hover:text-white"
            >
              Get Free Early Access
            </a>
          </div>
        </div>

        {/* the video mounts only when opened, so nothing downloads before */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="demo"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
              className="overflow-hidden"
            >
              <div className="relative mx-auto mt-9 max-w-3xl overflow-hidden rounded-card bg-canvas shadow-[0_30px_60px_-15px_rgba(24,24,24,0.5)]">
                <video
                  src="/videos/checkgrow-demo-review.mp4"
                  autoPlay
                  loop
                  playsInline
                  controls
                  preload="auto"
                  poster="/videos/checkgrow-demo-review-poster.jpg"
                  className="aspect-video w-full object-cover"
                />
                <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-canvas/70 px-3 py-1.5 text-xs font-medium text-foreground">
                  2:41 · real demo, no cuts
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="relative mt-7 text-center text-sm text-white/80">
          Struggling with your marketing and still questioning?
        </p>
      </div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section className="border-t border-line py-24 md:py-32" id="stories">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-label flex items-center justify-center gap-2.5 text-muted">
            Real stories
          </p>
          <h2 className="text-h1 mt-6 text-balance">
            100+ marketing experts already grow with Checkgrow.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Founders, CMOs and operators who ran their growth through
            Checkgrow, in their own words.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-14">
            <Slider />
          </div>
          <DemoCard />
        </Reveal>
      </div>
    </section>
  );
}
