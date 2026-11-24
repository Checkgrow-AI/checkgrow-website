import type { Dictionary } from "@/i18n/dictionaries";

const TP_GREEN = "#00B67A";
const TP_URL = "https://www.trustpilot.com/review/checkgrow.com";

function Star({ size = 12, color = "#FFFFFF" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden>
      <path
        d="M10 1.6l2.32 4.7 5.18.75-3.75 3.66.89 5.16L10 13.43l-4.64 2.44.89-5.16L2.5 7.05l5.18-.75z"
        fill={color}
      />
    </svg>
  );
}

/* Compact horizontal Trustpilot strip: logo · star boxes · rating · reviews.
   Source: trustpilot.com/review/checkgrow.com (4.4 · Excellent · 12 reviews).
   Rendered by server pages and by the client hero alike, so it takes its
   copy as a prop (`home` dictionary: trustpilot). */
export function Trustpilot({ copy }: { copy: Dictionary["home"]["trustpilot"] }) {
  return (
    <a
      href={TP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-wrap items-center gap-x-3 gap-y-2 transition-opacity duration-200 hover:opacity-75"
      aria-label={copy.label}
    >
      <span className="flex items-center gap-1.5">
        <Star size={16} color={TP_GREEN} />
        <span className="text-sm font-semibold tracking-tight">{"Trustpilot"}</span>
      </span>

      <span className="flex gap-0.5" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="flex size-5 items-center justify-center"
            style={{ backgroundColor: TP_GREEN }}
          >
            <Star />
          </span>
        ))}
        {/* 4.4 → part-filled fifth box, Trustpilot style */}
        <span
          className="flex size-5 items-center justify-center"
          style={{
            background: `linear-gradient(90deg, ${TP_GREEN} 50%, #DCDCE6 50%)`,
          }}
        >
          <Star />
        </span>
      </span>

      <span className="text-sm text-muted" aria-hidden>
        <strong className="font-semibold text-foreground">{copy.score}</strong> {copy.rating} · {copy.reviews}
      </span>
    </a>
  );
}
