import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { FlowStrip } from "@/components/FlowStrip";

const verticals = [
  {
    k: "Operations",
    title: "Run the day-to-day",
    body: "The daily cockpit: your assistant answers from your data, agents produce the work, and tasks get owned, approved and shipped.",
    features: ["Dashboard", "AI Assistant", "AI Agents", "Tasks"],
  },
  {
    k: "Marketing",
    title: "Own every channel",
    body: "Funnel campaigns with budgets and creatives, the right social conversations, content from live trends, and a site that converts.",
    features: ["Campaigns", "Social Media", "Content", "Website", "Tracking"],
  },
  {
    k: "Sales",
    title: "Fill the pipeline",
    body: "Deep account dossiers, fit-scored decision-makers and prospecting that builds your target list while you sell.",
    features: ["Companies", "Sales", "Leads"],
  },
  {
    k: "Research & Reporting",
    title: "Know and measure",
    body: "Rivals' live ads and market moves, plus GA4, Meta and Google Ads unified into answers instead of dashboards.",
    features: ["Competitors", "Insights"],
  },
];

export function Shift() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="text-label flex items-center gap-2.5 text-muted">
            <span className="dot-marker" aria-hidden />
            The shift
          </p>
          <h2 className="text-h1 mt-6 text-balance">
            One brain your whole go-to-market plugs into.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Set up the business once: brand, products, audience, numbers.
            Every vertical reads from it, and every result feeds back in.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(260px,340px)_1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28">
            <div className="flex flex-col items-center rounded-xl bg-surface px-8 py-12 text-center">
              <Image
                src="/brand/logos/symbol-transparent-light.svg"
                alt="The Checkgrow knowledge core"
                width={96}
                height={96}
                className="size-16"
              />
              <p className="text-label mt-6 text-muted">The core</p>
              <h3 className="mt-2 text-xl font-semibold">Knowledge Centre</h3>
              <p className="mt-3 max-w-55 text-sm leading-relaxed text-muted">
                Brand, products, audience and numbers, defined once and read by
                every agent, campaign and report.
              </p>
            </div>
          </Reveal>

          <RevealStagger className="grid gap-x-8 gap-y-10 sm:grid-cols-2" gap={0.09}>
            {verticals.map((v) => (
              <RevealItem key={v.k}>
                <article className="border-t-2 border-line pt-6">
                  <p className="text-label flex items-center gap-2 text-muted">
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                    {v.k}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{v.body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {v.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        {/* What the system is designed to do: playbook planning
            assumptions, deliberately phrased as design goals rather than
            guarantees */}
        <RevealStagger className="mt-16 grid gap-px overflow-hidden rounded-xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4" gap={0.07}>
          {[
            {
              stat: "8–25 hrs",
              label: "Recover capacity",
              body: "of team time per month designed to come back from searching, briefing and reporting.",
            },
            {
              stat: "3–10%",
              label: "Protect spend",
              body: "of addressable media budget shielded from weak targeting and broken tracking.",
            },
            {
              stat: "40–70%",
              label: "Increase throughput",
              body: "faster first drafts across multi-channel campaigns, with human approval retained.",
            },
            {
              stat: "Every result",
              label: "Compound intelligence",
              body: "feeds the next decision: approved strategies, assets and learnings improve the context.",
            },
          ].map((s) => (
            <RevealItem key={s.label}>
              <div className="h-full bg-canvas px-6 py-7">
                <p className="text-h2">{s.stat}</p>
                <p className="text-label mt-2 flex items-center gap-2 text-muted">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                  {s.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          Design goals based on our partner playbook&apos;s planning
          assumptions; validated per team during onboarding, not guaranteed
          outcomes.
        </p>

        <div className="mt-16">
          <FlowStrip tone="light" />
        </div>
      </div>
    </section>
  );
}
