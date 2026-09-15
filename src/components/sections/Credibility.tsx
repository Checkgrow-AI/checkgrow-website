import { Reveal } from "@/components/Reveal";

const models = [
  { name: "OpenAI", icon: "/brand-icons/openai.svg" },
  { name: "Gemini", icon: "/brand-icons/gemini.svg" },
  { name: "Claude", icon: "/brand-icons/claude.svg" },
  { name: "Perplexity", icon: "/brand-icons/perplexity.svg" },
];

export function Credibility() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="wrap flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <Reveal>
          <p className="max-w-md text-base leading-relaxed text-muted">
            Built from <strong className="font-semibold text-foreground">15 years of hands-on marketing</strong>:
            an agency before it was a platform, shaped by real problems, not
            theory.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-label text-muted">Works across</span>
            {models.map((m) => (
              <span key={m.name} className="flex items-center gap-2 text-sm font-medium">
                {m.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.icon}
                    alt={`${m.name} logo, supported by Checkgrow AI marketing tools`}
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
            <span className="text-sm text-muted">· no lock-ins</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
