import { Reveal } from "@/components/Reveal";
import { fmt } from "@/i18n/format";
import { getT } from "@/i18n/server";

const models = [
  { name: "OpenAI", icon: "/brand-icons/openai.svg" },
  { name: "Gemini", icon: "/brand-icons/gemini.svg" },
  { name: "Claude", icon: "/brand-icons/claude.svg" },
  { name: "Perplexity", icon: "/brand-icons/perplexity.svg" },
];

export function Credibility() {
  const t = getT("home").credibility;
  return (
    <section className="border-y border-line bg-surface">
      <div className="wrap flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <Reveal>
          <p className="max-w-md text-base leading-relaxed text-muted">
            {t.before}{" "}<strong className="font-semibold text-foreground">{t.strong}</strong>{t.after}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-label text-muted">{t.worksAcross}</span>
            {models.map((m) => (
              <span key={m.name} className="flex items-center gap-2 text-sm font-medium">
                {m.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.icon}
                    alt={fmt(t.modelAlt, { name: m.name })}
                    width={18}
                    height={18}
                    className="size-4.5"
                  />
                ) : (
                  <span className="size-1.5 rounded-full bg-lavender" aria-hidden />
                )}
                {m.name}
              </span>
            ))}
            <span className="text-sm text-muted">· {t.noLockIns}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
