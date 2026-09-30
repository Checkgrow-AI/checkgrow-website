"use client";

/* Hero v2: a pinned, scroll-driven story told by a dense particle field
   (soft glows + crisp full-contrast dots + an ambient spread across the
   whole screen).
     Scene 1 · a pulsating growth brain beside the USP, with the AI
               Assistant chat resting on its centre
     Scene 2 · the brain dissolves into a breathing particle circle;
               "Start onboarding your brand." + the typed website sit in
               the middle, then give way to an organic cluster of
               mixed-size knowledge bullets that follow the cursor
     Scene 3 · the circle expands into a heartbeat cloud; each vertical
               holds centrally while supporting labels scroll and the
               channel icons drift organically around the copy
     Scene 4 · the particles settle into a ring around the team:
               "One learning brain, one team, compounding growth."
   Everything scroll-linked is scrubbed in the engine's own rAF (motion
   scroll-timelines mis-compile these bindings), idle life comes from
   pulsation/twinkle/breathing, and the cursor bends nearby particles.
   Reduced motion gets a single static scene. */

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { HERO_SCROLL_SCREENS, VERTICAL_START, VERTICAL_END, heroStoryProgress, satelliteFrame, verticalFrame } from "@/lib/heroTimeline";
import { useStableVh } from "@/lib/useStableVh";
import { createTeamOrbit, teamOrbitPoint } from "@/lib/teamOrbit";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Trustpilot } from "@/components/Trustpilot";
import { RotatingWord } from "@/components/RotatingWord";
import { CheckLoader } from "@/components/CheckLoader";

const NODES = [
  "Brand",
  "ICP",
  "Use Cases",
  "Products",
  "Competitors",
  "Social Media",
  "Tracking",
  "Campaigns",
];

/* organic cluster layout for the knowledge bullets (units of S, sizes
   mixed like a tag constellation; k = cursor-parallax depth) */
const LABEL_LAYOUT: Array<{ x: number; y: number; s: "sm" | "md" | "lg" | "xl"; k: number }> = [
  { x: -0.56, y: -0.2, s: "lg", k: 0.05 },   // Brand
  { x: -0.15, y: -0.18, s: "sm", k: 0.028 }, // ICP
  { x: 0.62, y: -0.24, s: "md", k: 0.042 },  // Use Cases
  { x: 0.26, y: 0.18, s: "sm", k: 0.034 },   // Products
  { x: 0.58, y: 0.12, s: "lg", k: 0.055 },   // Competitors
  { x: -0.12, y: 0.15, s: "md", k: 0.024 },  // Social Media
  { x: -0.54, y: 0.13, s: "xl", k: 0.046 },  // Tracking
  { x: 0.22, y: -0.17, s: "xl", k: 0.032 },  // Campaigns
];

/* the phone gets its own, taller constellation so pills never collide;
   the middle rows sit at ±0.95 so the centre phrase keeps clear air */
const LABEL_LAYOUT_M: Array<{ x: number; y: number }> = [
  { x: -0.9, y: -1.6 },   // Brand
  { x: 0.55, y: -1.6 },   // ICP
  { x: 0.75, y: -0.95 },  // Use Cases
  { x: 0.9, y: 0.95 },    // Products
  { x: -0.05, y: 1.6 },   // Competitors
  { x: 0.12, y: 0.95 },   // Social Media
  { x: -0.9, y: 0.98 },   // Tracking
  { x: -0.35, y: -0.95 }, // Campaigns
];

const LABEL_SIZE: Record<string, string> = {
  sm: "px-3 py-1 text-[11px]",
  md: "px-3.5 py-1.5 text-xs sm:text-sm",
  lg: "px-4 py-2 text-sm sm:text-base",
  xl: "px-5 py-2.5 text-base sm:text-lg",
};

/* the biggest value of each knowledge bullet, typed into its tooltip
   (same order as NODES); `marks` phrases render bold in #6373FF */
const TIPS: Array<{ text: string; marks: string[] }> = [
  {
    text: "Get instant access to your brand design system and keep full context for your AI generations.",
    marks: ["full context"],
  },
  {
    text: "Know exactly who buys and why. Your ideal customer profiles feed every campaign and message.",
    marks: ["ideal customer profiles"],
  },
  {
    text: "Map every use case your product solves so the AI sells the right one to the right buyer.",
    marks: ["right buyer"],
  },
  {
    text: "Store your products once and keep every AI output accurate about what you sell.",
    marks: ["AI output accurate"],
  },
  {
    text: "Track your competitors' ads and positioning with live AI gap analysis.",
    marks: ["competitors' ads"],
  },
  {
    text: "Find the conversations that matter and publish on-brand content across every channel.",
    marks: ["Find the conversations"],
  },
  {
    text: "Have all your funnel events tracked and AI reporting within a click.",
    marks: ["funnel events"],
  },
  {
    text: "Generate Meta, Google and LinkedIn campaign strategies and link them with your paid channels.",
    marks: ["Meta", "Google", "LinkedIn"],
  },
];

/* split a tip into plain/marked segments so the typewriter can style the
   highlighted phrases while it types through them */
function tipSegments(tip: { text: string; marks: string[] }) {
  const ranges = tip.marks
    .map((m) => {
      const start = tip.text.indexOf(m);
      return start >= 0 ? { start, end: start + m.length } : null;
    })
    .filter((r): r is { start: number; end: number } => r !== null)
    .sort((a, b) => a.start - b.start);
  const segs: Array<{ text: string; marked: boolean; offset: number }> = [];
  let pos = 0;
  for (const r of ranges) {
    if (r.start > pos)
      segs.push({ text: tip.text.slice(pos, r.start), marked: false, offset: pos });
    segs.push({ text: tip.text.slice(r.start, r.end), marked: true, offset: r.start });
    pos = r.end;
  }
  if (pos < tip.text.length)
    segs.push({ text: tip.text.slice(pos), marked: false, offset: pos });
  return segs;
}

const VERTICALS: Array<{ big: string; small: string[] }> = [
  { big: "Operations", small: ["AI Assistant", "AI Agents", "AI Tasks", "Dashboard", "Integrations", "Token Management"] },
  { big: "Marketing", small: ["Campaigns", "Social Media", "Content", "Website", "Tracking"] },
  { big: "Sales", small: ["Companies", "Targets", "Leads", "Sales Brain"] },
  { big: "Research\n& Report", small: ["Insights", "Competitors", "Market Trends", "KPIs", "Conversion Events"] },
];

/* Two readable rows above/below the fixed title, never through it. */
const SAT_POS: Array<CSSProperties> = [
  { left: "22%", top: "calc(-1 * var(--sat-near))" },
  { left: "76%", top: "calc(-1 * var(--sat-near))" },
  { left: "22%", bottom: "calc(-1 * var(--sat-near))" },
  { left: "76%", bottom: "calc(-1 * var(--sat-near))" },
  { left: "50%", top: "calc(-1 * var(--sat-far))" },
  { left: "50%", bottom: "calc(-1 * var(--sat-far))" },
];

/* Channel marks float on a loose, breathing oval around the copy. */
const CHANNELS: Array<{ src: string; alt: string }> = [
  { src: "/brand-icons/google-ads.svg", alt: "Google Ads" },
  { src: "/brand-icons/google-analytics.svg", alt: "Google Analytics" },
  { src: "/brand-icons/openai.svg", alt: "ChatGPT" },
  { src: "/brand-icons/meta-ads.svg", alt: "Meta" },
  { src: "/brand-icons/instagram.svg", alt: "Instagram" },
  { src: "/brand-icons/gemini.svg", alt: "Gemini" },
  { src: "/brand-icons/reddit.svg", alt: "Reddit" },
  { src: "/brand-icons/x.svg", alt: "X" },
  { src: "/brand-icons/linkedin.svg", alt: "LinkedIn" },
  { src: "/brand-icons/claude.svg", alt: "Claude" },
  { src: "/brand-icons/tiktok.svg", alt: "TikTok" },
];

const TEAM: Array<{ img: string; alt: string }> = [
  { img: "/case-studies/ivo-witrina.avif", alt: "Founder" },
  { img: "/people/fabian-analytics.png", alt: "Fabian, analytics" },
  { img: "/case-studies/milena-wespa.avif", alt: "CFO" },
  { img: "/people/sofia-campaign-manager.png", alt: "Sofia, campaign manager" },
  { img: "/case-studies/amir-qubinets.avif", alt: "Founder" },
  { img: "/people/roberta-go-to-market.png", alt: "Roberta, go-to-market" },
  { img: "/case-studies/vikram-minka.avif", alt: "CPO" },
  { img: "/people/mikai-marketing-manager.png", alt: "Mikai, marketing manager" },
  { img: "/case-studies/petar-curic.jpg", alt: "CEO" },
  { img: "/people/thomas.png", alt: "Thomas" },
];

const URL_TEXT = "yourwebsite.com";

const CHAT_PROMPTS = [
  "Which Meta ads are converting the best?",
  "How many leads did we get this month?",
  "How many signups did we have this month?",
  "Tell me more about my competitors' ads.",
  "Let's comment on a few LinkedIn posts.",
  "What are the latest trends for us this week?",
];

const CHAT_MODELS = [
  { src: "/brand-icons/openai.svg", name: "GPT" },
  { src: "/brand-icons/claude.svg", name: "Claude" },
  { src: "/brand-icons/gemini.svg", name: "Gemini" },
];

/* ---------- helpers ---------- */
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (v: number) => v * v * (3 - 2 * v);
const ramp = (p: number, a: number, b: number) => smooth(clamp01((p - a) / (b - a)));
/* deterministic pseudo-random in [0,1) from a seed */
const rand01 = (seed: number) => {
  const v = Math.sin(seed) * 43758.5453;
  return v - Math.floor(v);
};

/* The brand token is a six-digit hex colour. Alpha-only stops keep even
   the brightest centre purple instead of bleaching it towards white. */
function makeSprite(color: string, size = 64) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, color);
  g.addColorStop(0.35, `${color}8c`);
  g.addColorStop(1, `${color}00`);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return c;
}

type P = {
  ax: number; ay: number; az: number; // brain
  bx: number; by: number;             // breathing circle
  ex: number; ey: number;             // expanded heartbeat cloud
  cx: number; cy: number;             // team ring
  sw1: number; sw2: number;           // swirl dirs for the transitions
  delay: number;
  size: number;
  alpha: number;
  phase: number;
  sharp: boolean;
  solid: boolean;                     // fully formed, no transparency
  vx: number; vy: number;             // plasmatic cursor-field velocity
  ox: number; oy: number;             // accumulated cursor displacement
};

function buildParticles(count: number): P[] {
  const ps: P[] = [];
  for (let i = 0; i < count; i++) {
    // --- brain: wide ellipsoid, centre groove, wrinkled shell bias ---
    let ax = 0, ay = 0, az = 0;
    for (let tries = 0; tries < 40; tries++) {
      const x = (Math.random() * 2 - 1) * 0.95;
      const y = (Math.random() * 2 - 1) * 0.72;
      const z = (Math.random() * 2 - 1) * 0.6;
      const inside = (x / 0.95) ** 2 + (y / 0.72) ** 2 + (z / 0.6) ** 2;
      if (inside > 1) continue;
      if (Math.abs(x) < 0.07 && Math.random() < 0.85) continue; // hemisphere groove
      if (inside < 0.55 && Math.random() < 0.55) continue;      // favour the cortex shell
      ax = x; ay = y * (y > 0.3 ? 0.92 : 1); az = z;
      break;
    }
    // cerebellum tuck
    if (i % 9 === 0) {
      ax = (Math.random() * 2 - 1) * 0.34;
      ay = 0.45 + Math.random() * 0.22;
      az = -0.15 - Math.random() * 0.3;
    }

    // --- breathing circle: a full organic shell around the centre with
    //     a sparse inner fill for depth ---
    const sa = Math.random() * Math.PI * 2;
    const band = (Math.random() + Math.random() + Math.random()) / 3 - 0.5; // ~gaussian
    const shellR = 1.04 + band * 0.24;
    const inner = Math.random() < 0.16;
    const br = inner ? 0.15 + Math.random() * 0.55 : shellR;
    const bx = Math.cos(sa) * br;
    const by = Math.sin(sa) * br * 0.92;

    // --- expanded heartbeat cloud (behind the verticals) ---
    const ea = Math.random() * Math.PI * 2;
    const er = 0.45 + Math.random() * 1.15;
    const ex = Math.cos(ea) * er * 1.15;
    const ey = Math.sin(ea) * er * 0.78;

    // --- team ring ---
    const ca = Math.random() * Math.PI * 2;
    const cr = Math.random() < 0.85 ? 0.8 + (Math.random() - 0.5) * 0.09 : 0.3 + Math.random() * 0.35;
    const ccx = Math.cos(ca) * cr;
    const ccy = Math.sin(ca) * cr * 0.86;

    const sharp = Math.random() < 0.58;
    const solid = sharp && Math.random() < 0.45;
    ps.push({
      ax, ay, az,
      bx, by,
      ex, ey,
      cx: ccx, cy: ccy,
      sw1: (Math.random() - 0.5) * 2,
      sw2: (Math.random() - 0.5) * 2,
      delay: Math.random(),
      size: sharp
        ? 0.6 + Math.random() * 1.05
        : Math.random() < 0.12
          ? 7 + Math.random() * 7
          : 2 + Math.random() * 3.4,
      alpha: solid ? 1 : sharp ? 0.5 + Math.random() * 0.45 : 0.35 + Math.random() * 0.5,
      phase: Math.random() * Math.PI * 2,
      sharp,
      solid,
      vx: 0, vy: 0, ox: 0, oy: 0,
    });
  }
  return ps;
}

/* the AI Assistant chat that rests on top of the brain in scene 1 */
function HeroChat() {
  const [text, setText] = useState("");
  const [model, setModel] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setText(CHAT_PROMPTS[0]));
      return () => cancelAnimationFrame(raf);
    }
    let prompt = 0;
    let chars = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const full = CHAT_PROMPTS[prompt];
      if (chars < full.length) {
        chars += 1;
        setText(full.slice(0, chars));
        timer = setTimeout(tick, 42);
      } else {
        timer = setTimeout(() => {
          prompt = (prompt + 1) % CHAT_PROMPTS.length;
          chars = 0;
          setText("");
          setModel(prompt % CHAT_MODELS.length);
          timer = setTimeout(tick, 260);
        }, 1600);
      }
    };
    timer = setTimeout(tick, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rounded-2xl bg-raised/95 p-4 shadow-raised ring-1 ring-line backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <CheckLoader dotColor="var(--color-foreground)" className="mt-0.5 shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="text-label text-muted">AI Assistant</p>
          <p className="mt-1.5 min-h-6 text-[15px] font-medium leading-snug">
            {text}
            <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse rounded bg-accent align-middle" />
          </p>
        </div>
      </div>
      <div className="mt-2.5 flex items-center justify-end gap-1.5 text-[11px] text-muted">
        Model:
        <Image
          src={CHAT_MODELS[model].src}
          alt={`${CHAT_MODELS[model].name} model in the Checkgrow AI marketing assistant`}
          width={14}
          height={14}
          className="size-3.5"
        />
        <span className="font-semibold text-foreground">{CHAT_MODELS[model].name}</span>
      </div>
    </div>
  );
}

/* tooltip body: the animated mark + the bullet's value, typewritten */
function TipContent({ index }: { index: number }) {
  const tip = TIPS[index];
  const text = tip.text;
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setChars(text.length));
      return () => cancelAnimationFrame(raf);
    }
    const raf = requestAnimationFrame(() => setChars(0));
    const iv = setInterval(() => {
      setChars((c) => {
        if (c >= text.length) {
          clearInterval(iv);
          return c;
        }
        return c + 1;
      });
    }, 14);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(iv);
    };
  }, [text]);

  return (
    <div className="rounded-2xl bg-raised/95 p-3.5 shadow-raised ring-1 ring-line backdrop-blur-sm">
      <div className="flex items-start gap-2.5">
        <span className="block shrink-0" style={{ width: 28, height: 28 }} aria-hidden>
          <CheckLoader dotColor="var(--color-foreground)" className="origin-top-left scale-[0.7]" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-label text-muted">{NODES[index]}</p>
          <p className="mt-1 min-h-9 text-sm font-medium leading-snug">
            {tipSegments(tip).map((seg, i) => {
              const take = Math.max(0, Math.min(seg.text.length, chars - seg.offset));
              if (take === 0) return null;
              const slice = seg.text.slice(0, take);
              return seg.marked ? (
                <strong key={i} className="font-bold" style={{ color: "var(--color-accent)" }}>
                  {slice}
                </strong>
              ) : (
                <span key={i}>{slice}</span>
              );
            })}
            <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse rounded bg-accent align-middle" />
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroV2() {
  const wrapRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const introCopyRef = useRef<HTMLDivElement>(null);
  const teamCopyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const typedRef = useRef<HTMLSpanElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctxPhraseRef = useRef<HTMLDivElement>(null);
  const teamRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wordRefs = useRef<(HTMLDivElement | null)[]>([]);
  const satRefs = useRef<(HTMLSpanElement | null)[][]>(VERTICALS.map(() => []));
  const l1Ref = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const l2Ref = useRef<HTMLDivElement>(null);
  const l3Ref = useRef<HTMLDivElement>(null);
  const l4Ref = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const tipState = useRef({ i: -1 });
  const pointerType = useRef("mouse");
  const [reduced, setReduced] = useState(false);
  const [compactFallback, setCompactFallback] = useState(false);
  const [tipIndex, setTipIndex] = useState(-1);
  const { vh: stableVh, vhRef: stableVhRef } = useStableVh();
  const staticHero = reduced || compactFallback;

  const setTip = (i: number) => {
    tipState.current.i = i;
    setTipIndex(i);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setReduced(true));
      return () => cancelAnimationFrame(raf);
    }
  }, []);

  /* ---------- the particle engine ---------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particleColor = getComputedStyle(canvas).getPropertyValue("--color-brand").trim();
    const sprite = makeSprite(particleColor);

    let isMobile = window.innerWidth < 1024;
    let isNarrow = window.innerWidth < 375;
    const particles = buildParticles(isMobile ? 480 : 1000);
    /* ambient dust spread over the whole viewport, alive in every scene;
       a share of it fully formed at full contrast */
    const ambient = Array.from({ length: isMobile ? 110 : 260 }, () => {
      const sharp = Math.random() < 0.78;
      const solid = sharp && Math.random() < 0.5;
      return {
        x: Math.random(),
        y: Math.random(),
        ph: Math.random() * Math.PI * 2,
        sz: 0.6 + Math.random() * 1.3,
        a: solid ? 0.95 : 0.2 + Math.random() * 0.5,
        sharp,
        solid,
      };
    });
    /* strong star dots (#6373FF): crisp ~3px, spread everywhere, softly
       blinking — the spacy backdrop behind every scene */
    const stars = Array.from({ length: isMobile ? 40 : 90 }, () => ({
      x: Math.random(),
      y: Math.random(),
      ph: Math.random() * Math.PI * 2,
      sz: 1.1 + Math.random() * 0.5,
      spd: 0.5 + Math.random() * 0.8,
    }));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, S = 0, headerClearance = 88;
    let cxA = 0, cyA = 0, cxB = 0, cyB = 0;
    let teamOrbit: ReturnType<typeof createTeamOrbit> | null = null;
    const currentTeam = () => teamRefs.current.filter((el): el is HTMLDivElement => el !== null && el.isConnected);
    const updateTeamOrbit = () => {
      const team = currentTeam();
      const copy = teamCopyRef.current;
      const stage = stageRef.current?.getBoundingClientRect();
      const heading = copy?.querySelector("h2");
      const range = document.createRange();
      if (heading) range.selectNodeContents(heading);
      const rects = heading ? Array.from(range.getClientRects()) : [];
      const button = copy?.querySelector("a");
      if (button) rects.push(button.getBoundingClientRect());
      teamOrbit = createTeamOrbit({
        viewportWidth: w,
        contentWidth: wrap.clientWidth,
        height: h,
        count: team.length,
        portraitSize: team[0]?.offsetWidth ?? 48,
        protectedWidth: teamCopyRef.current?.offsetWidth ?? 0,
        protectedHeight: teamCopyRef.current?.offsetHeight ?? 0,
        protectedRegions: stage ? rects.map(rect => ({
          left: rect.left - stage.left - w / 2, right: rect.right - stage.left - w / 2,
          top: rect.top - stage.top - h / 2, bottom: rect.bottom - stage.top - h / 2,
        })) : undefined,
      });
    };
    const labelPos = NODES.map(() => ({ x: 0, y: 0 }));
    const labelO = NODES.map(() => 0);

    const resize = () => {
      const nw = wrap.clientWidth;
      headerClearance = parseFloat(getComputedStyle(wrap).getPropertyValue("--header-clearance")) || 88;
      /* stable height: browser-chrome show/hide must not re-anchor the scene */
      const availableHeight = Math.max(1, (stableVhRef.current || window.innerHeight) - headerClearance);
      const copyHeight = introCopyRef.current?.offsetHeight ?? 0;
      // At extreme zoom/landscape sizes, use natural document flow rather
      // than clipping a form or shrinking readable copy into a pinned box.
      setCompactFallback(copyHeight + 48 > availableHeight);
      const nh = staticHero ? Math.max(availableHeight, copyHeight + 48) : availableHeight;
      w = nw;
      h = nh;
      // Keep the particle ring and its portraits in the same responsive mode.
      isMobile = w < 1024;
      isNarrow = w < 375;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      S = Math.min(w, h) * (isMobile ? 0.34 : 0.4);
      cxA = isMobile ? w * 0.5 : w * 0.7;
      cyA = isMobile ? h * 0.36 : h * 0.5;
      cxB = isNarrow ? wrap.clientWidth * 0.5 : w * 0.5;
      cyB = h * 0.5;
      updateTeamOrbit();
    };
    resize();
    window.addEventListener("resize", resize);
    const layoutObserver = new ResizeObserver(resize);
    if (introCopyRef.current) layoutObserver.observe(introCopyRef.current);
    if (teamCopyRef.current) layoutObserver.observe(teamCopyRef.current);

    const mouse = { x: -9999, y: -9999 };
    /* smoothed cursor for the bullet parallax */
    const sm = { x: 0, y: 0 };
    /* eased tooltip position */
    const tipPos = { x: 0, y: 0, on: false };
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY - (stageRef.current?.getBoundingClientRect().top ?? headerClearance);
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    let running = true;
    const io = new IntersectionObserver(([e]) => {
      running = e.isIntersecting;
    });
    io.observe(wrap);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!running) return;
      const t = performance.now() / 1000;
      const bounds = wrap.getBoundingClientRect();
      const rawProgress = clamp01((headerClearance - bounds.top) / Math.max(1, bounds.height - h));
      const p = staticHero ? 0 : heroStoryProgress(rawProgress);

      /* ease the cursor towards its smoothed position */
      const hasPtr = mouse.x > -999;
      const tx = hasPtr ? mouse.x : w / 2;
      const ty = hasPtr ? mouse.y : h / 2;
      sm.x += (tx - sm.x) * 0.06;
      sm.y += (ty - sm.y) * 0.06;

      ctx.clearRect(0, 0, w, h);

      /* phase blends */
      const m1 = ramp(p, 0.12, 0.26);  // brain -> circle
      const m2 = ramp(p, 0.5, 0.58);   // circle -> heartbeat cloud
      const m3 = ramp(p, 0.915, 0.96); // cloud -> team ring
      const labelsA = ramp(p, 0.3, 0.36) * (1 - ramp(p, 0.47, 0.53));
      const rot = prefersReduced ? 0 : t * 0.22;
      const pulse = prefersReduced ? 1 : 1 + 0.035 * Math.sin(t * 1.5);
      /* a soft double-thump heartbeat for the expanded cloud */
      const hb = prefersReduced
        ? 1
        : 1 + 0.05 * Math.sin(t * 1.8) + 0.022 * Math.sin(t * 3.6 + 0.9);

      /* bullet cluster: organic drift + cursor parallax, staggered
         organic appearance */
      for (let i = 0; i < NODES.length; i++) {
        const L = LABEL_LAYOUT[i];
        const di = rand01((i + 1) * 127.1);
        labelO[i] =
          ramp(p, 0.31 + di * 0.07, 0.36 + di * 0.07) * (1 - ramp(p, 0.47, 0.52));
        /* pushed outward so the centre phrase keeps clear air */
        const lx = isMobile ? LABEL_LAYOUT_M[i].x : L.x * 1.45;
        const ly = isMobile ? LABEL_LAYOUT_M[i].y : L.y * 1.8;
        labelPos[i].x =
          cxB +
          lx * S +
          Math.sin(t * 0.5 + i * 1.7) * 7 +
          (sm.x - w / 2) * L.k;
        labelPos[i].y =
          cyB +
          ly * S +
          Math.cos(t * 0.44 + i * 1.2) * 6 +
          (sm.y - h / 2) * L.k * 0.8;
      }

      /* ambient dust across the whole screen */
      for (const am of ambient) {
        const ax = am.x * w + Math.sin(t * 0.15 + am.ph) * 12;
        const ay = am.y * h + Math.cos(t * 0.12 + am.ph * 1.4) * 9;
        const tw = prefersReduced
          ? 0.94 + 0.06 * Math.sin(t * 1.3 + am.ph)
          : am.solid
            ? 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t * (0.7 + (am.ph % 1)) + am.ph))
            : 0.55 + 0.45 * Math.sin(t * 1.3 + am.ph);
        const a = am.a * tw * (isMobile && !am.solid ? 0.6 : 1);
        ctx.globalAlpha = a;
        if (am.sharp) {
          ctx.fillStyle = particleColor;
          ctx.beginPath();
          ctx.arc(ax, ay, am.sz, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const r = am.sz * 3;
          ctx.drawImage(sprite, ax - r, ay - r, r * 2, r * 2);
        }
      }
      ctx.globalAlpha = 1;

      /* strong star dots, blinking smoothly across the whole screen */
      for (const st of stars) {
        const sx = st.x * w + Math.sin(t * 0.1 + st.ph) * 8;
        const sy = st.y * h + Math.cos(t * 0.08 + st.ph * 1.6) * 6;
        const blink = prefersReduced
          ? 0.8
          : 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * st.spd + st.ph));
        ctx.globalAlpha = blink;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(sx, sy, st.sz, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      /* breathing particle halos around the visible bullets */
      if (labelsA > 0.01) {
        for (let i = 0; i < NODES.length; i++) {
          if (labelO[i] < 0.02) continue;
          const L = LABEL_LAYOUT[i];
          const orbitR = L.s === "xl" ? 58 : L.s === "lg" ? 50 : 42;
          const lx = labelPos[i].x;
          const ly = labelPos[i].y;
          for (let k = 0; k < 7; k++) {
            const dir = i % 2 === 0 ? 1 : -1;
            const ang = t * 0.5 * dir + (k * Math.PI * 2) / 7 + i;
            const ox = Math.cos(ang) * (orbitR + 6 * Math.sin(t * 0.9 + k + i));
            const oy = Math.sin(ang) * (orbitR * 0.42 + 4 * Math.cos(t * 0.7 + k * 1.3));
            ctx.globalAlpha = labelO[i] * (0.3 + 0.25 * Math.sin(t * 2.2 + k * 1.9 + i));
            const s = 1.8 + 1.1 * Math.sin(t * 1.5 + k + i * 0.8);
            ctx.drawImage(sprite, lx + ox - s, ly + oy - s, s * 2, s * 2);
          }
        }
        ctx.globalAlpha = 1;
      }

      /* particles */
      for (const pt of particles) {
        /* stage positions in screen space */
        const rx = pt.ax * Math.cos(rot) - pt.az * Math.sin(rot);
        const rz = pt.ax * Math.sin(rot) + pt.az * Math.cos(rot);
        const persp = 1.6 / (1.6 + rz);
        const axs = cxA + rx * persp * S * pulse;
        const ays = cyA + pt.ay * persp * S * pulse;

        /* the circle shell breathes radially */
        const shellBr = 1 + 0.04 * Math.sin(t * 0.9 + pt.phase);
        const bxs = cxB + pt.bx * S * shellBr + Math.sin(t * 0.9 + pt.phase) * 2.5;
        const bys = cyB + pt.by * S * shellBr + Math.cos(t * 0.8 + pt.phase) * 2.5;

        const exs = cxB + pt.ex * S * hb + Math.sin(t * 0.5 + pt.phase) * 5;
        const eys = cyB + pt.ey * S * hb + Math.cos(t * 0.44 + pt.phase * 1.2) * 4;

        const cr = Math.hypot(pt.cx, pt.cy);
        const orbit = teamOrbit!;
        const ringPoint = teamOrbitPoint(orbit, pt.phase / (Math.PI * 2) * orbit.count, t, prefersReduced);
        const cxs = orbit.centerX + (ringPoint.x - orbit.centerX) * cr / 0.8;
        const cys = orbit.centerY + (ringPoint.y - orbit.centerY) * cr / 0.8;

        /* staggered morphs with a plasmatic swirl on the way */
        const e1 = smooth(clamp01((m1 - pt.delay * 0.25) / 0.75));
        const e2 = smooth(clamp01((m2 - pt.delay * 0.25) / 0.75));
        const e3 = smooth(clamp01((m3 - pt.delay * 0.25) / 0.75));
        let x = axs + (bxs - axs) * e1;
        let y = ays + (bys - ays) * e1;
        const arc1 = Math.sin(Math.PI * e1);
        x += pt.sw1 * arc1 * S * 0.22;
        y += pt.sw2 * arc1 * S * 0.14;
        const arc2 = Math.sin(Math.PI * e2);
        x = x + (exs - x) * e2 + pt.sw2 * arc2 * S * 0.16;
        y = y + (eys - y) * e2 + pt.sw1 * arc2 * S * 0.1;
        const arc3 = Math.sin(Math.PI * e3);
        x = x + (cxs - x) * e3 + pt.sw1 * arc3 * S * 0.14;
        y = y + (cys - y) * e3 + pt.sw2 * arc3 * S * 0.1;

        /* plasmatic cursor field: the lagged cursor pushes with a curl,
           each particle answering at its own pace and drifting back */
        if (hasPtr) {
          const mdx = x - sm.x;
          const mdy = y - sm.y;
          const md2 = mdx * mdx + mdy * mdy;
          if (md2 < 57600 && md2 > 0.01) {
            const md = Math.sqrt(md2);
            const f = ((240 - md) / 240) ** 2 * 0.85;
            const curl = pt.sw1 >= 0 ? 1 : -1;
            const resp = 0.35 + 0.65 * pt.delay;
            pt.vx += ((mdx / md) * f + (-mdy / md) * f * 0.55 * curl) * resp;
            pt.vy += ((mdy / md) * f + (mdx / md) * f * 0.55 * curl) * resp;
          }
        }
        pt.vx *= 0.88;
        pt.vy *= 0.88;
        pt.ox = (pt.ox + pt.vx) * 0.955;
        pt.oy = (pt.oy + pt.vy) * 0.955;
        x += pt.ox;
        y += pt.oy;

        const depth = e1 < 0.5 ? persp : 1;
        const tw = prefersReduced || pt.solid
          ? 0.93 + 0.07 * Math.sin(t * 2 + pt.phase)
          : 0.78 + 0.22 * Math.sin(t * 2 + pt.phase);
        const mobileDim = isMobile && e1 < 0.5 ? 0.35 : 1;
        if (pt.sharp) {
          ctx.globalAlpha = pt.alpha * tw * mobileDim;
          ctx.fillStyle = particleColor;
          ctx.beginPath();
          ctx.arc(x, y, pt.size * (0.8 + 0.4 * depth), 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.globalAlpha = pt.alpha * tw * (0.55 + 0.45 * depth) * mobileDim;
          const r = pt.size * (0.7 + 0.5 * depth);
          ctx.drawImage(sprite, x - r, y - r, r * 2, r * 2);
        }
      }
      ctx.globalAlpha = 1;

      /* scroll-scrubbed typing */
      if (typedRef.current) {
        const chars = Math.round(ramp(p, 0.18, 0.26) * URL_TEXT.length);
        const txt = URL_TEXT.slice(0, chars);
        if (typedRef.current.textContent !== txt) typedRef.current.textContent = txt;
      }

      /* story layers (driven here, not by scroll-timeline magic) */
      if (chatRef.current) {
        const o = 1 - ramp(p, 0.015, 0.06);
        chatRef.current.style.opacity = String(o);
        chatRef.current.style.transform = `translateY(-50%) translateY(${-30 * ramp(p, 0.015, 0.08)}px)`;
      }
      if (l1Ref.current) {
        const o = 1 - ramp(p, 0.08, 0.15);
        l1Ref.current.style.opacity = String(o);
        l1Ref.current.style.pointerEvents = o > 0.05 ? "auto" : "none";
      }
      if (l2Ref.current) {
        /* the step-one prompt leaves before the bullets arrive */
        l2Ref.current.style.opacity = String(ramp(p, 0.15, 0.21) * (1 - ramp(p, 0.28, 0.33)));
      }
      if (l3Ref.current) {
        l3Ref.current.style.opacity = String(ramp(p, 0.525, 0.54) * (1 - ramp(p, 0.91, 0.925)));
      }
      if (l4Ref.current) {
        const o = ramp(p, 0.93, 0.975);
        l4Ref.current.style.opacity = String(o);
        l4Ref.current.style.pointerEvents = o > 0.5 ? "auto" : "none";
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = String(1 - ramp(p, 0, 0.04));
      }

      /* the centre phrase shares the bullets' window, settling in as the
         constellation completes */
      if (ctxPhraseRef.current) {
        const o = ramp(p, 0.34, 0.4) * (1 - ramp(p, 0.47, 0.52));
        ctxPhraseRef.current.style.opacity = String(o);
        ctxPhraseRef.current.style.transform = `translate(-50%, -50%) scale(${0.94 + 0.06 * smooth(o)})`;
      }

      /* mixed-size bullets breathe and follow the cursor */
      labelRefs.current.forEach((el, i) => {
        if (!el) return;
        const o = labelO[i];
        el.style.opacity = String(o);
        el.style.pointerEvents = o > 0.5 ? "auto" : "none";
        const br = 1 + 0.02 * Math.sin(t * 1.1 + i * 1.6);
        el.style.transform = `translate(-50%, -50%) translate(${labelPos[i].x}px, ${labelPos[i].y}px) scale(${(0.82 + 0.18 * smooth(o)) * br})`;
      });

      /* the value tooltip trails the cursor (or docks under the tapped
         bullet on touch), clamped inside the viewport */
      if (tipRef.current) {
        const ti = tipState.current.i;
        if (ti >= 0 && labelO[ti] > 0.4) {
          const tw2 = tipRef.current.offsetWidth || 300;
          const th2 = tipRef.current.offsetHeight || 90;
          let txp;
          let typ;
          if (isMobile) {
            txp = Math.min(Math.max(labelPos[ti].x - tw2 / 2, 10), w - tw2 - 10);
            typ = labelPos[ti].y + 34;
            if (typ + th2 > h - 10) typ = labelPos[ti].y - th2 - 34;
          } else {
            txp = Math.min(mouse.x + 18, w - tw2 - 12);
            typ = mouse.y + 22;
            if (typ + th2 > h - 12) typ = mouse.y - th2 - 18;
          }
          if (!tipPos.on) {
            tipPos.x = txp;
            tipPos.y = typ;
            tipPos.on = true;
          }
          tipPos.x += (txp - tipPos.x) * 0.35;
          tipPos.y += (typ - tipPos.y) * 0.35;
          tipRef.current.style.opacity = "1";
          tipRef.current.style.transform = `translate(${tipPos.x}px, ${tipPos.y}px)`;
        } else {
          tipRef.current.style.opacity = "0";
          tipPos.on = false;
        }
      }

      /* Icons appear after each title, and leave before it. */
      const chapter = Math.min(VERTICALS.length - 1, Math.max(0, Math.floor((p - VERTICAL_START) / ((VERTICAL_END - VERTICAL_START) / VERTICALS.length))));
      const { local } = verticalFrame(p, chapter, VERTICALS.length);
      const stageTop = stageRef.current?.getBoundingClientRect().top ?? headerClearance;
      const obstacles = satRefs.current[chapter].filter(Boolean).map(el => el!.getBoundingClientRect());
      const heading = wordRefs.current[chapter]?.querySelector("h3");
      if (heading) {
        const range = document.createRange();
        range.selectNodeContents(heading);
        obstacles.push(...Array.from(range.getClientRects()));
      }
      iconRefs.current.forEach((el, i) => {
        if (!el) return;
        const ph = i * 2.4;
        const o = satelliteFrame(local, i, CHANNELS.length).opacity;
        const radius = el.offsetWidth * 1.07 / 2;
        const drift = prefersReduced ? 0 : Math.sin(t * 0.22 + ph) * 0.055;
        const angle = -2.45 + i / CHANNELS.length * Math.PI * 2 + drift;
        const breath = prefersReduced ? 1 : 1 + 0.035 * Math.sin(t * 0.31 + ph);
        const radiusX = Math.min(w * 0.36, 390, w / 2 - radius - 16);
        const radiusY = Math.min(h * 0.37, 270, Math.max(180, w * 0.27), h / 2 - radius - 16);
        let x = w / 2 + Math.cos(angle) * radiusX * breath;
        let y = h / 2 + Math.sin(angle) * radiusY * breath;
        // Keep the original floating composition. Only nudge a mark
        // outwards when it approaches actual text, never arrange rows.
        for (let step = 0; step < 20; step++) {
          const collides = obstacles.some(rect => {
            const dx = Math.max(rect.left - x, 0, x - rect.right);
            const dy = Math.max(rect.top - stageTop - y, 0, y - (rect.bottom - stageTop));
            return Math.hypot(dx, dy) < radius + 12;
          });
          if (!collides) break;
          x = Math.max(radius + 12, Math.min(w - radius - 12, x + Math.cos(angle) * 5));
          y = Math.max(radius + 12, Math.min(h - radius - 12, y + Math.sin(angle) * 5));
        }
        // At a phone edge there may be no more horizontal room. Slide
        // around the nearby label rather than pinning an icon against it.
        const clear = (point: { x: number; y: number }) => obstacles.every(rect =>
          Math.hypot(Math.max(rect.left - point.x, 0, point.x - rect.right),
            Math.max(rect.top - stageTop - point.y, 0, point.y - (rect.bottom - stageTop))) >= radius + 12);
        if (!clear({ x, y })) {
          const gap = radius + 13;
          const candidates = obstacles.flatMap(rect => [
            { x, y: rect.top - stageTop - gap }, { x, y: rect.bottom - stageTop + gap },
            { x: rect.left - gap, y }, { x: rect.right + gap, y },
          ]).filter(point => point.x >= gap && point.x <= w - gap && point.y >= gap && point.y <= h - gap && clear(point));
          candidates.sort((a, b) => Math.hypot(a.x - x, a.y - y) - Math.hypot(b.x - x, b.y - y));
          if (candidates[0]) ({ x, y } = candidates[0]);
        }
        el.style.opacity = String(o);
        el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${(0.7 + 0.3 * smooth(o)) * (1 + 0.07 * Math.sin(t * 0.9 + ph))})`;
      });

      /* The title is a stable reading anchor; only its details scroll. */
      wordRefs.current.forEach((el, i) => {
        if (!el) return;
        const frame = verticalFrame(p, i, VERTICALS.length);
        el.style.opacity = String(frame.opacity);
        el.style.transform = `translateY(-50%) translateY(${frame.y}px)`;
        satRefs.current[i].forEach((sat, j) => {
          if (!sat) return;
          const detail = satelliteFrame(frame.local, j, VERTICALS[i].small.length);
          sat.style.opacity = String(detail.opacity);
          sat.style.transform = `translateX(-50%) translateY(${detail.y}px)`;
        });
      });

      /* Read the mounted portraits, not a captured TEAM length: local
         refreshes can replace the list while preserving these refs. */
      const team = currentTeam();
      if (!teamOrbit || teamOrbit.count !== team.length) updateTeamOrbit();
      const orbit = teamOrbit!;
      team.forEach((el, i) => {
        /* Keep the full group visible before the scene finishes, even
           when more portraits are added to the ring. */
        const revealDelay = (i / Math.max(team.length - 1, 1)) * 0.03;
        const o = ramp(p, 0.925 + revealDelay, 0.955 + revealDelay);
        const { x, y } = teamOrbitPoint(orbit, i, t, prefersReduced);
        el.style.opacity = String(o);
        el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${(0.6 + 0.4 * smooth(o)) * orbit.portraitScale})`;
      });
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      layoutObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [stableVhRef, staticHero]);

  return (
    <section
      ref={wrapRef}
      id="platform"
      className={`hero-story relative ${staticHero ? "hero-static" : ""}`}
      style={{
        "--hero-viewport": stableVh ? `${stableVh}px` : "100svh",
        height: staticHero ? "auto" : `calc(var(--hero-viewport) * ${HERO_SCROLL_SCREENS + 1} - var(--header-clearance))`,
      } as CSSProperties}
    >
      <div
        ref={stageRef}
        className="hero-stage overflow-hidden"
        onClick={() => {
          if (pointerType.current !== "mouse" && tipState.current.i >= 0) setTip(-1);
        }}
      >
        <canvas ref={canvasRef} className="absolute inset-0" aria-hidden />

        {/* Scene 1 · the brain and the USP */}
        <div ref={l1Ref} className="hero-intro absolute inset-0 flex items-center">
          <div className="hero-intro-wrap wrap w-full">
            <div ref={introCopyRef} className="hero-intro-copy max-w-xl lg:max-w-2xl">
              <p className="hero-intro-label text-label flex items-center gap-2.5 text-muted">
                <span className="dot-marker" aria-hidden />
                AI Native Growth Marketing
              </p>
              <h1 className="hero-intro-title text-display mt-6 text-balance" style={{ fontWeight: 400 }}>
                The go-to-market engine that learns your{" "}
                <span className="relative whitespace-nowrap">
                  <RotatingWord />
                </span>
                .
              </h1>
              <p className="hero-intro-body mt-7 max-w-xl text-lg leading-relaxed text-muted">
                Growth shouldn&apos;t depend on who&apos;s in the room.
                Checkgrow keeps everything your company knows in one growth
                operating system: learning, improving, and working for every
                team. It turns knowledge into customers and recognition.
              </p>
              <div className="hero-intro-trust mt-8">
                <Trustpilot />
              </div>
              <div className="hero-intro-form mt-4">
                <WaitlistForm id="hero" />
              </div>
            </div>
          </div>
        </div>

        {/* the AI Assistant resting on the brain's centre */}
        <div
          ref={chatRef}
          className="hero-chat pointer-events-none absolute hidden lg:block"
          style={{ left: "calc(70% - 210px)", top: "50%", width: 420 }}
        >
          <div className="hero-chat-scale">
            <HeroChat />
          </div>
        </div>

        {!staticHero && (
          <>
            {/* Scene 2a · onboarding prompt in the centre of the circle */}
            <div ref={l2Ref} className="pointer-events-none absolute inset-0" style={{ opacity: 0 }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <h2 className="text-h1 text-balance">
                  Start onboarding your brand.
                </h2>
                <div className="mt-6 flex min-h-12 w-full max-w-xs items-center rounded-full bg-raised px-5 shadow-soft ring-1 ring-line sm:max-w-sm">
                  <span className="text-base font-medium">
                    <span ref={typedRef} />
                    <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse rounded bg-accent align-middle" />
                  </span>
                </div>
              </div>
            </div>

            {/* Scene 2b · the knowledge bullets, an organic constellation.
                Hover (or tap) opens a typewritten value tooltip that
                follows the cursor. */}
            <div className="pointer-events-none absolute inset-0">
              <div
                ref={ctxPhraseRef}
                className="absolute left-1/2 top-1/2 w-full px-6 text-center"
                style={{ opacity: 0, transform: "translate(-50%, -50%)" }}
              >
                <h2 className="text-h2 text-balance">Build your context</h2>
              </div>
              {NODES.map((n, i) => (
                <div
                  key={n}
                  ref={(el) => {
                    labelRefs.current[i] = el;
                  }}
                  className={`bullet-ring absolute left-0 top-0 cursor-pointer whitespace-nowrap rounded-full bg-raised/90 font-semibold text-foreground shadow-soft ring-1 ring-line ${LABEL_SIZE[LABEL_LAYOUT[i].s]}`}
                  style={{ opacity: 0, pointerEvents: "none", "--ring-delay": `${-i * 0.45}s` } as CSSProperties}
                  onPointerDown={(e) => {
                    pointerType.current = e.pointerType;
                  }}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") setTip(i);
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType === "mouse") setTip(-1);
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (pointerType.current !== "mouse")
                      setTip(tipState.current.i === i ? -1 : i);
                  }}
                >
                  {n}
                </div>
              ))}
              <div
                ref={tipRef}
                className="pointer-events-none absolute left-0 top-0 z-20 w-72 sm:w-80"
                style={{ opacity: 0 }}
              >
                {tipIndex >= 0 && <TipContent index={tipIndex} />}
              </div>
            </div>

            {/* Scene 3 · every channel, every vertical */}
            <div ref={l3Ref} className="pointer-events-none absolute inset-0" style={{ opacity: 0 }}>
              {CHANNELS.map((c, i) => (
                <div
                  key={c.alt}
                  ref={(el) => {
                    iconRefs.current[i] = el;
                  }}
                  className="absolute left-0 top-0"
                  style={{ opacity: 0 }}
                >
                  <span className="hero-channel flex size-11 items-center justify-center rounded-full bg-raised shadow-soft ring-1 ring-line max-[374px]:size-8 sm:size-14">
                    <Image src={c.src} alt={c.alt} width={36} height={36} className="size-[55%]" />
                  </span>
                </div>
              ))}
              {VERTICALS.map((v, i) => (
                <div
                  key={v.big}
                  ref={(el) => {
                    wordRefs.current[i] = el;
                  }}
                  className="absolute inset-x-0 top-1/2 flex justify-center"
                  style={{ opacity: 0 }}
                >
                  <div className="hero-vertical relative px-6 text-center">
                    <h3
                      className="relative whitespace-pre-line"
                      style={{
                        lineHeight: 1.02,
                        fontWeight: 600,
                        letterSpacing: "-0.05em",
                      }}
                    >
                      {v.big}
                    </h3>
                    {v.small.map((s, j) => (
                      <span
                        key={s}
                        ref={(el) => {
                          satRefs.current[i][j] = el;
                        }}
                        className="hero-satellite absolute whitespace-nowrap text-sm font-bold text-muted sm:text-base"
                        style={{ ...SAT_POS[j % SAT_POS.length], opacity: 0 }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Scene 4 · one learning brain, one team */}
            <div ref={l4Ref} className="absolute inset-0" style={{ opacity: 0, pointerEvents: "none" }}>
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div ref={teamCopyRef} className="hero-team-copy relative z-10 text-center">
                  <h2
                    className="hero-team-title text-balance text-[clamp(1.6rem,4.8vw,3.5rem)] max-[374px]:text-[1.375rem]"
                    style={{
                      lineHeight: 1.05,
                      fontWeight: 600,
                      letterSpacing: "-0.045em",
                    }}
                  >
                    One learning brain, one team, compounding growth.
                  </h2>
                  <a
                    href="#waitlist"
                    className="mt-5 inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-accent max-[374px]:px-3 max-[374px]:text-xs"
                  >
                    Get Free Early Access
                  </a>
                </div>
              </div>
              {TEAM.map((m, i) => (
                <div
                  key={m.img}
                  ref={(el) => {
                    teamRefs.current[i] = el;
                  }}
                  className="absolute left-0 top-0"
                  style={{ opacity: 0 }}
                >
                  <Image
                    src={m.img}
                    alt={m.alt}
                    width={48}
                    height={48}
                    className="size-11 rounded-full object-cover shadow-raised ring-2 ring-line max-[374px]:size-8 sm:size-12"
                  />
                </div>
              ))}
            </div>

            {/* scroll hint */}
            <div
              ref={hintRef}
              className="hero-scroll-hint pointer-events-none absolute inset-x-0 bottom-6 hidden flex-col items-center gap-1.5 text-muted lg:flex"
            >
              <span className="text-label">Scroll</span>
              <svg width="12" height="8" viewBox="0 0 12 8" aria-hidden className="animate-bounce">
                <path
                  d="M1.5 1.5 L6 6 L10.5 1.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
