import Image from "next/image";
import { notFound } from "next/navigation";
import { findUseCase, localizeUseCases, pathToUseCase, useCaseSlugs } from "@/lib/useCases";
import { findStory } from "@/lib/successStories";
import { newsPath } from "@/lib/news";
import { SITE_URL, jsonLdLanguage } from "@/lib/seo";
import { UseCaseStage } from "@/components/use-cases/UseCaseStage";
import styles from "@/components/use-cases/UseCases.module.css";
import { localeInfo, localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { langOf, pageMetadata } from "@/i18n/metadata";
import { setRequestLang } from "@/i18n/server";
import { LocalLink as Link } from "@/i18n/client";
import { fmt } from "@/i18n/format";

type Props = PageProps<"/[lang]/use-cases/[slug]">;

export const dynamicParams = false;
/* the same slugs in every language (the [lang] layout supplies lang) */
export function generateStaticParams() { return useCaseSlugs.map((slug) => ({ slug })); }

const localizedUseCase = (lang: Locale, slug: string) => findUseCase(localizeUseCases(getDictionary(lang).useCases.items), slug);

export async function generateMetadata({ params }: Props) {
  const { lang: segment, slug } = await params;
  const lang = langOf(segment);
  const item = localizedUseCase(lang, slug);
  if (!item) return {};
  const t = getDictionary(lang).useCases.page;
  const path = pathToUseCase(item.slug);
  return pageMetadata(lang, {
    path,
    title: fmt(t.metaTitle, { title: item.metaTitle }),
    description: item.description,
    markdown: `${path}.md`,
    extra: {
      keywords: [...item.keywords],
      openGraph: {
        type: "article", modifiedTime: item.updatedAt, section: item.feature,
        images: [{ url: item.socialImage, width: 1200, height: 630, alt: fmt(t.socialImageAlt, { title: item.title, feature: item.feature }) }],
      },
      twitter: { images: [item.socialImage] },
    },
  });
}

/* dates in the reader's language; English keeps en-GB */
const intlTag = (lang: Locale) => (lang === "en" ? "en-GB" : localeInfo[lang].tag);
const longDate = (lang: Locale, iso: string) =>
  new Intl.DateTimeFormat(intlTag(lang), { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T12:00:00Z`));

/* table of contents: section id -> its label in the dictionary */
const sectionKeys = {
  "in-short": "inShort", problem: "problem", "how-it-works": "howItWorks", "see-it-work": "seeItWork",
  "what-you-get": "whatYouGet", "in-practice": "inPractice", faq: "faq",
} as const;

export default async function UseCasePage({ params }: Props) {
  const { lang: segment, slug } = await params;
  const lang = langOf(segment);
  setRequestLang(lang);
  const dict = getDictionary(lang);
  const t = dict.useCases.page;
  const all = localizeUseCases(dict.useCases.items);
  const item = findUseCase(all, slug);
  if (!item) notFound();
  const abs = (path: string) => `${SITE_URL}${localePath(lang, path)}`;
  const url = abs(pathToUseCase(item.slug));
  const proof = item.proof.filter((p) => findStory(dict.stories.items, p.slug));
  const related = item.related.map((s) => findUseCase(all, s)).filter((r) => r !== undefined);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article", "@id": `${url}#article`, headline: item.title, description: item.description,
        url, mainEntityOfPage: url, dateModified: item.updatedAt, inLanguage: jsonLdLanguage(lang),
        author: { "@type": "Organization", name: "Checkgrow", url: SITE_URL },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: { "@type": "SoftwareApplication", name: "Checkgrow", applicationCategory: "BusinessApplication" },
        articleSection: item.feature, keywords: item.keywords.join(", "),
        abstract: item.inShort.join(" "), image: `${SITE_URL}${item.socialImage}`,
      },
      {
        "@type": "HowTo", "@id": `${url}#how-it-works`, name: item.title, description: item.lede,
        step: item.steps.map((step, index) => ({ "@type": "HowToStep", position: index + 1, name: step.title, text: step.body, url: `${url}#step-${index + 1}` })),
      },
      {
        "@type": "FAQPage", "@id": `${url}#faq`,
        mainEntity: item.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: dict.useCases.breadcrumbs.home, item: lang === "en" ? SITE_URL : abs("/") },
        { "@type": "ListItem", position: 2, name: dict.useCases.breadcrumbs.useCases, item: abs("/use-cases") },
        { "@type": "ListItem", position: 3, name: item.feature, item: url },
      ] },
    ],
  };

  const toc = (["in-short", "problem", "how-it-works", "see-it-work", "what-you-get", ...(proof.length ? (["in-practice"] as const) : []), "faq"] as const)
    .map((id) => [id, t.sections[sectionKeys[id]]] as const);

  return (
    <article className={`wrap ${styles.page}`}>
      <nav aria-label={t.breadcrumb}>
        <Link href="/use-cases" className={styles.back}><span aria-hidden>←</span> {t.back}</Link>
      </nav>

      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>{fmt(t.eyebrow, { feature: item.feature })}</p>
          <h1>{item.title}</h1>
          <p className={styles.lede}>{item.lede}</p>
          <div className={styles.builtFor}>
            <span>{t.builtFor}</span>
            {item.builtFor.map((b) => <span key={b} className={styles.pill}>{b}</span>)}
          </div>
          <div className={styles.ctaRow}>
            <Link href="/book-a-demo" className={styles.primary}>{t.bookDemo}</Link>
            <a href="#how-it-works" className={styles.secondary}>{t.seeHow} <span aria-hidden>↓</span></a>
          </div>
        </div>
        <UseCaseStage id={`hero-${item.slug}`} name={item.feature} mockups={item.hero.mockups} steps={item.hero.steps} background={item.hero.background} backgroundColor={item.hero.backgroundColor} />
      </header>

      <div className={styles.worksWith}>
        <span>{item.worksWithLabel}</span>
        {item.worksWith.map((w) => (
          <span key={w.name} className={styles.pill}>
            {/* eslint-disable-next-line @next/next/no-img-element -- small decorative brand logo */}
            {w.icon && <img src={w.icon} alt="" />}
            {w.name}
          </span>
        ))}
      </div>

      <div className={styles.layout}>
        <aside className={styles.toc}>
          <nav aria-label={t.onThisPage}>
            <p>{t.onThisPage}</p>
            <ul>{toc.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
          </nav>
        </aside>

        <div className={styles.body}>
          <section id="in-short" className={styles.inShort} aria-labelledby="in-short-title">
            <h2 id="in-short-title">{t.sections.inShort}</h2>
            <ul>{item.inShort.map((line) => <li key={line}>{line}</li>)}</ul>
          </section>

          <section id="problem" className={styles.section} aria-labelledby="problem-title">
            <p className={styles.label}>{t.sections.problem}</p>
            <h2 id="problem-title">{item.problem.title}</h2>
            <div className={styles.problem}>
              <p>{item.problem.body}</p>
              <blockquote className={styles.quote}>
                <p>{item.problem.quote.text}</p>
                <cite>{item.problem.quote.author}</cite>
              </blockquote>
            </div>
          </section>

          <section id="how-it-works" className={styles.section} aria-labelledby="how-title">
            <div className={styles.sectionHead}>
              <p className={styles.label}>{t.sections.howItWorks}</p>
              <h2 id="how-title">{t.howTitle}</h2>
            </div>
            <ol className={styles.steps}>
              {item.steps.map((step, index) => (
                <li key={step.title} id={`step-${index + 1}`} className={styles.step} data-reverse={index % 2 === 1 ? "true" : "false"}>
                  <div className={styles.stepMedia}>
                    <UseCaseStage id={`${item.slug}-step-${index + 1}`} name={step.title} mockups={[step.mockup]} steps={[{ label: step.title, caption: step.tag }]} background={step.background} backgroundColor={step.backgroundColor} />
                  </div>
                  <div>
                    <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                    <span className={`${styles.pill} ${styles.tag}`}>{step.tag}</span>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="see-it-work" className={styles.section} aria-labelledby="see-title">
            <div className={styles.sectionHead}>
              <p className={styles.label}>{t.sections.seeItWork}</p>
              <h2 id="see-title">{item.see.title}</h2>
              <p>{item.see.body}</p>
            </div>
            <div className={styles.showcase}>
              <UseCaseStage id={`${item.slug}-see`} name={item.see.title} mockups={[item.see.mockup]} steps={[{ label: item.see.title, caption: item.see.tag }]} background={item.see.background} backgroundColor={item.see.backgroundColor} />
            </div>
          </section>

          <section id="what-you-get" className={styles.section} aria-labelledby="get-title">
            <p className={styles.label}>{t.sections.whatYouGet}</p>
            <h2 id="get-title">{t.getTitle}</h2>
            <div className={styles.outcomes}>
              {item.outcomes.map((o) => <div key={o.title} className={styles.outcome}><h3>{o.title}</h3><p>{o.body}</p></div>)}
            </div>
          </section>

          <figure className={styles.testimonial}>
            <blockquote><p>{item.testimonial.text}</p></blockquote>
            <figcaption><cite>{item.testimonial.author}</cite></figcaption>
          </figure>

          {proof.length > 0 && (
            <section id="in-practice" className={styles.section} aria-labelledby="practice-title">
              <p className={styles.label}>{t.sections.inPractice}</p>
              <h2 id="practice-title">{t.practiceTitle}</h2>
              <div className={styles.proof}>
                {proof.map((p) => (
                  <Link key={p.slug} href={newsPath(p.slug)}>
                    <strong>{p.company}</strong>
                    <span>{p.line}</span>
                    <em>{t.readStory}</em>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section id="faq" className={styles.section} aria-labelledby="faq-title">
            <p className={styles.label}>{t.sections.faq}</p>
            <h2 id="faq-title">{t.faqTitle}</h2>
            <div className={styles.faq}>
              {item.faq.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
            </div>
          </section>

          {related.length > 0 && (
            <section className={styles.section} aria-labelledby="related-title">
              <p className={styles.label}>{t.relatedLabel}</p>
              <h2 id="related-title">{t.relatedTitle}</h2>
              <div className={styles.related}>
                {related.map((r) => (
                  <Link key={r.slug} href={pathToUseCase(r.slug)}>
                    <em>{r.feature}</em>
                    <span>{r.title}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className={styles.band}>
            <Image src="/features/backgrounds/13-brand-indigo-bloom.webp" alt="" fill sizes="(max-width: 1199px) 100vw, 900px" />
            <h2>{t.bandTitle}</h2>
            <Link href="/book-a-demo" className={styles.primary}>{t.bookDemo}</Link>
          </div>
          <p className={styles.updated}>{fmt(t.updated, { date: longDate(lang, item.updatedAt) })}</p>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </article>
  );
}
