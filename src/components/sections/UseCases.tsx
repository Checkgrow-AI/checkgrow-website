import { Reveal } from "@/components/Reveal";

type UseCase = {
  eyebrow: string;
  title: string;
  scenario: string;
  body: string;
  points: string[];
  img: string;
  alt: string;
};

const cases: UseCase[] = [
  {
    eyebrow: "Knowledge Centre",
    title: "Explain the business once. Never again.",
    scenario:
      "A founder onboards their company in an afternoon: brand, products, buyer personas, website.",
    body: "From that moment every AI output is grounded in real company context. No more pasting the same brief into a chatbot, and no more off-brand copy that needs rewriting.",
    points: [
      "One knowledge base read automatically by every feature",
      "Update it by chatting: the AI drafts, you approve",
      "New team members productive without training",
    ],
    img: "/mockups/knowledge-center.svg",
    alt: "Knowledge Centre mockup: company knowledge collected in one place and read by AI agents",
  },
  {
    eyebrow: "Campaigns",
    title: "Launch campaigns in hours, not weeks.",
    scenario:
      "A marketer stands up a launch campaign: full briefing from awareness to action, budget split, channel mix.",
    body: "Benchmarks are informed by competitors' live ad activity, and the creatives to run it are generated per channel and funnel stage, exportable and shareable with stakeholders.",
    points: [
      "Full funnel briefing with hooks and storytelling per stage",
      "Budget allocation and channel benchmarks from real competitor signals",
      "Ad creatives per channel, translatable into multiple languages",
    ],
    img: "/mockups/campaigns.svg",
    alt: "Campaigns mockup: an AI-built funnel briefing with budget allocation and creatives",
  },
  {
    eyebrow: "AI Agents → Tasks",
    title: "AI output becomes shipped work, not a dead doc.",
    scenario:
      "A week of LinkedIn posts, an outreach sequence and ad variants, drafted by specialist agents and routed to the team.",
    body: "Every delivery lands on a shared board with owners, checklists and sign-off. The platform even proposes the next high-impact tasks from your data and goals.",
    points: [
      "Specialist agents for ads, social, email, outreach, OKRs and PR",
      "Chain agents together: one output feeds the next",
      "Sign-off workflow so generated work actually reaches the market",
    ],
    img: "/mockups/ai-tasks.svg",
    alt: "AI Tasks mockup: agent deliveries flowing into an execution board with approvals",
  },
  {
    eyebrow: "Insights",
    title: "Give the board a dashboard.",
    scenario:
      "A growth lead opens Monday's report: GA4, Meta Ads and Google Ads in one view, events mapped to the funnel.",
    body: "Raw events get friendly names and funnel stages automatically, totals are computed server-side so they're right at any scale, and the report shares as a live public link.",
    points: [
      "GA4 + Meta + Google Ads unified with one date range",
      "Events auto-classified into TOFU / MOFU / BOFU",
      "Client-ready shareable reports, no spreadsheet stitching",
    ],
    img: "/mockups/insights.svg",
    alt: "Insights mockup: unified analytics with funnel classification and shareable reports",
  },
  {
    eyebrow: "Website audit",
    title: "A consultant-grade conversion audit, on demand.",
    scenario:
      "Before the next campaign spends a euro, the team audits their site: desktop and mobile, scored by category.",
    body: "Findings are evidence-checked and prioritised, benchmarked against competitors, and turned straight into tasks, with history so progress is measurable.",
    points: [
      "Multi-page audit with screenshots and per-category scores",
      "Prioritised, evidence-checked fixes, not 200 generic warnings",
      "Findings become owned tasks; snapshots track improvement",
    ],
    img: "/mockups/website-reporting.svg",
    alt: "Website audit mockup: scored conversion audit with prioritised fixes",
  },
];

export function UseCases() {
  return (
    <section className="border-t border-line bg-surface py-24 md:py-32" id="use-cases">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="text-label flex items-center gap-2.5 text-muted">
            <span className="dot-marker" aria-hidden />
            In practice
          </p>
          <h2 className="text-h1 mt-6 text-balance">
            What a week inside Checkgrow looks like.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Real workflows from the platform, each one grounded in your
            knowledge base, each one feeding the next.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {cases.map((c, i) => (
            <div
              key={c.eyebrow}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
                {/* Self-contained animated SVG — plays via <img>, transparent
                    canvas merging with the page, still under reduced motion */}
                <div className="mockup-glow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.img}
                    alt={c.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.08} className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-label flex items-center gap-2 text-muted">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                  {c.eyebrow}
                </p>
                <h3 className="text-h2 mt-4 text-balance">{c.title}</h3>
                <p className="mt-4 font-medium leading-relaxed">{c.scenario}</p>
                <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
