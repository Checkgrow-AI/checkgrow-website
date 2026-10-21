import Link from "next/link";
import { Reveal } from "@/components/Reveal";

/* Why Checkgrow: what sets it apart from generic AI tools and point
   solutions. Three differentiators, kept in lib so the FAQ, comparison and
   llms.txt say the same thing. */
export const differentiators = [
  {
    id: "growth-brain",
    label: "Company brain for growth",
    title: "A brain built for marketing and growth, not a pile of files and prompts.",
    body: "Your brand, products, audiences, results and decisions live in one company brain, structured and strategised for marketing and growth. Not random documents in a drive, or prompts scattered across a dozen chats. Every campaign, agent and report reads from it, and every result feeds back in.",
  },
  {
    id: "learning",
    label: "Human connection",
    title: "Your team gets better at marketing by using it.",
    body: "Checkgrow runs on your own marketing and growth data, so working in it teaches the craft. Interactive features take your team through every stage of the funnel, from first touch to conversion, and explain why a number moved, not just that it did. People stay in the loop and grow with the system.",
  },
  {
    id: "self-host",
    label: "Self-hosted and sovereign",
    title: "Run it on your own infrastructure. Keep your data sovereign.",
    body: "Enterprises and scale-ups are asking to self-host Checkgrow, and we build for it. Your company knowledge stays structured and ready for any AI model you choose, inside your own security perimeter and under your own data-sovereignty rules. No lock-in to a vendor or a model.",
  },
] as const;

export function Difference() {
  return (
    <section id="why-checkgrow" aria-labelledby="why-checkgrow-title" className="border-t border-line py-24 md:py-32">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="text-label text-muted">Why Checkgrow</p>
          <h2 id="why-checkgrow-title" className="text-h1 mt-6 text-balance">
            Not another AI tool. A growth brain your team learns with.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Generic AI and single-purpose tools start from zero and stay outside
            your business. Checkgrow is different in three ways that matter.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal key={d.id} delay={0.06 * i} className="h-full">
              <article className="flex h-full flex-col rounded-card bg-surface p-7 ring-1 ring-line">
                <p className="text-label text-accent">{d.label}</p>
                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-balance">{d.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{d.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/book-a-demo"
            className="inline-flex min-h-12 items-center rounded-full bg-foreground px-7 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-accent"
          >
            Book a demo
          </Link>
          <a href="#pricing" className="text-sm text-muted transition-colors duration-200 hover:text-foreground">
            Compare Checkgrow with the typical growth stack <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
