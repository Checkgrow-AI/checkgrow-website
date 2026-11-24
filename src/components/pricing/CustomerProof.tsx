import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { LocalLink as Link } from "@/i18n/client";
import { fmt } from "@/i18n/format";
import { getT } from "@/i18n/server";
import { publishedStories } from "@/lib/successStories";
import type { Testimonial } from "@/lib/testimonials";

/* Published customer evidence only. Keep quotes, figures, context and
   attribution tied to the same records used by Real stories and News. */
const STORY_COMPANIES = ["Cuixmala", "Barner"];
const TESTIMONIAL_ID = "sophia-ahrel";
/* every story lists its facts as Industry, Location, Market, Period covered */
const PERIOD_FACT = 3;

export function CustomerProof() {
  const t = getT("pricing").proof;
  const stories = publishedStories(getT("stories").items).filter((story) => !story.draft && STORY_COMPANIES.includes(story.company));
  const testimonial: Testimonial = getT("testimonials").items.find((item) => item.id === TESTIMONIAL_ID)!;
  return (
    <section id="customer-results" className="py-16 md:py-24" aria-labelledby="pricing-proof-title">
      <div className="wrap">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-label text-muted">{t.eyebrow}</p>
            <h2 id="pricing-proof-title" className="text-h2 mt-6 text-balance">{t.title}</h2>
          </div>
          <Link href="/news?category=success-stories" className="inline-flex min-h-11 items-center gap-3 self-start whitespace-nowrap text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground md:self-auto">
            {t.explore} <span aria-hidden>↗</span>
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <figure className="flex h-full flex-col justify-between rounded-card bg-surface p-8 sm:p-10">
              <div>
                <span aria-hidden className="text-5xl leading-none text-accent">“</span>
                <blockquote className="mt-4 text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                  {testimonial.quote}
                </blockquote>
              </div>
              <figcaption className="mt-10 flex items-center gap-4">
                <Image src={testimonial.photo} alt={testimonial.person} width={64} height={64} className="size-16 shrink-0 rounded-full object-cover" />
                <div>
                  <p className="font-medium">{testimonial.person}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{testimonial.attribution ?? `${testimonial.role}, ${testimonial.company}`}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {stories.map((story) => (
              <Reveal key={story.slug}>
                <article className="h-full rounded-card bg-surface p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold">{story.company}</h3>
                    <p className="text-xs text-muted">{story.kicker}</p>
                  </div>
                  <p className="mt-5 text-h2 text-accent">{story.heroStats[0].value}</p>
                  <p className="mt-2 max-w-md text-base leading-relaxed text-muted">{story.heroStats[0].label}.</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{story.about.facts[PERIOD_FACT]?.value}</p>
                  <Link href={`/news/${story.slug}`} className="mt-4 inline-flex min-h-11 items-center gap-3 text-sm font-medium underline underline-offset-4 transition-colors hover:text-accent">
                    {fmt(t.readStory, { company: story.company })} <span aria-hidden>↗</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">{t.disclaimer}</p>
      </div>
    </section>
  );
}
