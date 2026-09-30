import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

const roles = [
  {
    who: "Founders & CMOs",
    title: "Set direction once",
    body: "Define the brand, the offer and the target buyer a single time. Everything produced downstream stays on message, without you in the loop.",
    win: "No more re-briefing",
    icon: "/brand/icons/operations-framework.svg",
    iconAlt: "Operational framework icon",
  },
  {
    who: "Marketing & sales ops",
    title: "Execute at real speed",
    body: "Specialist agents produce content, ads, outreach and creative that already know your product, audience and tone.",
    win: "Weeks to minutes",
    icon: "/brand/icons/delivery-machine.svg",
    iconAlt: "Connected delivery system icon",
  },
  {
    who: "Growth & analytics",
    title: "Close the loop",
    body: "See what converted and why, with fixes ranked and routed straight into the next campaign as tracked work.",
    win: "Compounding, not resetting",
    icon: "/brand/icons/data-analytics-kpis.svg",
    iconAlt: "Analytics and KPIs icon",
  },
];

export function Roles() {
  return (
    <section className="py-24 md:py-32" id="who">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="text-label flex items-center gap-2.5 text-muted">
            <span className="dot-marker" aria-hidden />
            Who it&apos;s for
          </p>
          <h2 className="text-h1 mt-6 text-balance">
            Each team gets its own reason to stay in one system.
          </h2>
        </Reveal>
        <RevealStagger className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3" gap={0.1}>
          {roles.map((r) => (
            <RevealItem key={r.who}>
              <article>
                <Image src={r.icon} alt={r.iconAlt} width={50} height={50} />
                <p className="text-label mt-6 text-muted">{r.who}</p>
                <h3 className="mt-3 text-xl font-semibold">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{r.body}</p>
                <p className="mt-5 text-sm font-semibold">→ {r.win}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Enterprise: the tier above the three roles */}
        <Reveal delay={0.08}>
          <div className="mt-16 overflow-hidden rounded-xl bg-surface ring-1 ring-line md:mt-20">
            <div className="grid md:grid-cols-[minmax(0,340px)_1fr] lg:grid-cols-[minmax(0,420px)_1fr]">
              <div className="relative min-h-64 md:min-h-full">
                <Image
                  src="/case-studies/bruno-ceo.avif"
                  alt="Bruno Mucheroni, founder and CEO of Checkgrow"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-8 md:p-12 lg:p-14">
                <p className="text-label flex items-center gap-2.5 text-muted">
                  <span className="dot-marker" aria-hidden />
                  For enterprises
                </p>
                <h3 className="text-h2 mt-6 text-balance">
                  Enterprise custom AI systems that drive growth.
                </h3>
                <p className="mt-6 max-w-xl leading-relaxed text-muted">
                  Large teams get the same growth system, shaped around how
                  they already work: one knowledge core feeding every campaign,
                  agent and report. For companies that need it, we build
                  self-hosted, custom-developed setups that fit your stack,
                  your security requirements and your scale.
                </p>
                <a
                  href="#waitlist"
                  className="mt-8 inline-flex min-h-12 items-center rounded-full bg-foreground px-7 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-accent"
                >
                  Get Free Early Access
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
