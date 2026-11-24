import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { AiGlyph } from "@/components/AiGlyph";
import type { AiKind } from "@/lib/ai-glyph/glyphs";
import { LocalLink as Link } from "@/i18n/client";
import { getT } from "@/i18n/server";

/* the three roles in order; their copy is in the `home` dictionary
   (roles.items, keyed by id) */
const roles = [
  // The logo itself; its dots orbit like a thinking sphere.
  { id: "founders", glyph: "ask" as AiKind },
  // A picture frame; rows shuffle like work being produced.
  { id: "ops", glyph: "images" as AiKind },
  // Rising bars; dots connect like a loop being closed.
  { id: "growth", glyph: "analysis" as AiKind },
] as const;

export function Roles() {
  const t = getT("home").roles;
  return (
    <section className="py-24 md:py-32" id="who">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="text-label flex items-center gap-2.5 text-muted">
            {t.label}
          </p>
          <h2 className="text-h1 mt-6 text-balance">
            {t.title}
          </h2>
        </Reveal>
        <RevealStagger className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3" gap={0.1}>
          {roles.map((role, i) => {
            const r = t.items[role.id];
            return (
              <RevealItem key={r.who}>
                <article>
                  {/* Decorative: the role label and heading carry the meaning. */}
                  <AiGlyph kind={role.glyph} size={48} delay={i * 0.9} />
                  <p className="text-label mt-6 text-muted">{r.who}</p>
                  <h3 className="mt-3 text-xl font-semibold">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{r.body}</p>
                  <p className="mt-5 text-sm font-semibold">→ {r.win}</p>
                </article>
              </RevealItem>
            );
          })}
        </RevealStagger>

        {/* Enterprise: the tier above the three roles */}
        <Reveal delay={0.08}>
          <div className="mt-16 overflow-hidden rounded-card bg-surface ring-1 ring-line md:mt-20">
            <div className="grid md:grid-cols-[minmax(0,340px)_1fr] lg:grid-cols-[minmax(0,420px)_1fr]">
              <div className="relative min-h-64 md:min-h-full">
                <Image
                  src="/case-studies/bruno-ceo.avif"
                  alt={t.enterprise.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-8 md:p-12 lg:p-14">
                <p className="text-label flex items-center gap-2.5 text-muted">
                  {t.enterprise.label}
                </p>
                <h3 className="text-h2 mt-6 text-balance">
                  {t.enterprise.title}
                </h3>
                <p className="mt-6 max-w-xl leading-relaxed text-muted">
                  {t.enterprise.body}
                </p>
                <Link
                  href="/book-a-demo"
                  className="mt-8 inline-flex min-h-12 items-center rounded-full bg-foreground px-7 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-accent"
                >
                  {t.enterprise.bookDemo}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
