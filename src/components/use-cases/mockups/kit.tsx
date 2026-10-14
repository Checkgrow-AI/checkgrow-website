/* eslint-disable @next/next/no-img-element -- decorative mockup markup inside an inert, scaled artboard (not page content) */
/* Building blocks for the use case mockups (server components, static,
   decorative). Every screen is a 1200×900 Board; FeatureStage scales it and
   animates elements tagged with data-layer. */

import type { CSSProperties, ReactNode } from "react";
import s from "./Mockups.module.css";

export { s };

export const ICON = "/features/icons/";
export const PERSON = (n: number) => `/features/people/person-${String(n).padStart(2, "0")}.webp`;

type Box = { children?: ReactNode; className?: string; style?: CSSProperties; layer?: string };

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(" ");

export function Board({ children }: { children: ReactNode }) {
  return <div className={s.board}>{children}</div>;
}

export function Card({ children, className, style, layer }: Box) {
  return <div data-layer={layer} className={cx(s.card, className)} style={style}>{children}</div>;
}

export function Float({ children, className, style, layer }: Box) {
  return <div data-layer={layer} className={cx(s.float, className)} style={style}>{children}</div>;
}

export function Row({ children, gap = 10, className, style, layer }: Box & { gap?: number }) {
  return <div data-layer={layer} className={cx(s.row, className)} style={{ gap, ...style }}>{children}</div>;
}

export function Col({ children, gap = 10, className, style, layer }: Box & { gap?: number }) {
  return <div data-layer={layer} className={cx(s.col, className)} style={{ gap, ...style }}>{children}</div>;
}

export function Head({ eyebrow, title, right }: { eyebrow?: string; title: string; right?: ReactNode }) {
  return (
    <div className={cx(s.row, s.between)} style={{ gap: 16 }}>
      <div className={s.col} style={{ gap: 4 }}>
        {eyebrow && <span className={s.eyebrow}>{eyebrow}</span>}
        <span className={s.title}>{title}</span>
      </div>
      {right}
    </div>
  );
}

type ChipTone = "neutral" | "primary" | "success" | "warn" | "danger" | "outline" | "dark";
const chipTone: Record<ChipTone, string | undefined> = {
  neutral: undefined, primary: s.chipPrimary, success: s.chipSuccess, warn: s.chipWarn, danger: s.chipDanger, outline: s.chipOutline, dark: s.chipDark,
};
export function Chip({ children, tone = "neutral", icon, style }: { children: ReactNode; tone?: ChipTone; icon?: string; style?: CSSProperties }) {
  return (
    <span className={cx(s.chip, chipTone[tone])} style={style}>
      {icon && <img src={icon} alt="" className={s.logo} style={{ width: 14, height: 14 }} />}
      {children}
    </span>
  );
}

export function Btn({ children, tone, style }: { children: ReactNode; tone?: "primary" | "dark"; style?: CSSProperties }) {
  return <span className={cx(s.btn, tone === "primary" && s.btnPrimary, tone === "dark" && s.btnDark)} style={style}>{children}</span>;
}

export function Toggle({ on = true }: { on?: boolean }) {
  return <span className={cx(s.toggle, !on && s.toggleOff)} />;
}

export function Progress({ value, color, height = 6, layer = "progress" }: { value: number; color?: string; height?: number; layer?: string }) {
  return (
    <div className={s.track} style={{ height }}>
      <div data-layer={layer} className={s.fill} style={{ width: `${value}%`, background: color }} />
    </div>
  );
}

export function Logo({ src, size = 18 }: { src: string; size?: number }) {
  return <img src={src} alt="" className={s.logo} style={{ width: size, height: size }} />;
}

export function LogoBox({ src, size = 40, icon = 20 }: { src: string; size?: number; icon?: number }) {
  return (
    <span className={s.logoBox} style={{ width: size, height: size }}>
      <img src={src} alt="" className={s.logo} style={{ width: icon, height: icon }} />
    </span>
  );
}

export function Avatar({ n, size = 28 }: { n: number; size?: number }) {
  return <img src={PERSON(n)} alt="" className={s.avatar} style={{ width: size, height: size }} />;
}

export function Dot({ color }: { color: string }) {
  return <span className={s.dot} style={{ background: color }} />;
}

/* A small checkgrow symbol for "AI" moments, drawn inline (4×4 dot grid). */
export function Spark({ size = 16, color = "#6373FF" }: { size?: number; color?: string }) {
  const cells = [0, 1, 2, 3];
  const r = size / 10;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      {cells.flatMap((y) => cells.map((x) => (
        <circle key={`${x}${y}`} cx={r * 1.25 + x * (size - r * 2.5) / 3} cy={r * 1.25 + y * (size - r * 2.5) / 3} r={r} fill={color} opacity={(x + y) % 3 === 1 ? 0.45 : 1} />
      )))}
    </svg>
  );
}
