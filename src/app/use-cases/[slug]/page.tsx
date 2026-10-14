import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getUseCase, pathToUseCase, useCases } from "@/lib/useCases";
import { getSuccessStory } from "@/lib/successStories";
import { newsPath } from "@/lib/news";
import { SITE_URL } from "@/lib/seo";
import { UseCaseStage } from "@/components/use-cases/UseCaseStage";
import styles from "@/components/use-cases/UseCases.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return useCases.map(({ slug }) => ({ slug })); }
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getUseCase((await params).slug);
  if (!item) return {};
  const title = `${item.metaTitle} | Checkgrow`;
  const url = pathToUseCase(item.slug);
  return {
    title, description: item.description, keywords: item.keywords,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description: item.description, url, siteName: "Checkgrow", modifiedTime: item.updatedAt, section: item.feature, images: [{ url: item.socialImage, width: 1200, height: 630, alt: `${item.title} Checkgrow ${item.feature} product screen.` }] },
    twitter: { card: "summary_large_image", title, description: item.description, images: [item.socialImage] },
  };
}

const longDate = (iso: string) => new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T12:00:00Z`));

export default async function UseCasePage({ params }: Props) {
  const item = getUseCase((await params).slug);
  if (!item) notFound();
  const url = `${SITE_URL}${pathToUseCase(item.slug)}`;
  const proof = item.proof.filter((p) => getSuccessStory(p.slug));
  const related = item.related.map((slug) => getUseCase(slug)).filter((r) => r !== undefined);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article", "@id": `${url}#article`, headline: item.title, description: item.description,
        url, mainEntityOfPage: url, dateModified: item.updatedAt, inLanguage: "en-GB",
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
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Use Cases", item: `${SITE_URL}/use-cases` },
        { "@type": "ListItem", position: 3, name: item.feature, item: url },
      ] },
    ],
  };

  const toc = [
    ["in-short", "In short"], ["problem", "The problem"], ["how-it-works", "How it works"], ["see-it-work", "See it work"],
    ["what-you-get", "What you get"], ...(proof.length ? [["in-practice", "In practice"]] : []), ["faq", "FAQ"],
  ];

  return (
    <article className={`wrap ${styles.page}`}>
      <nav aria-label="Breadcrumb">
        <Link href="/use-cases" className={styles.back}><span aria-hidden>←</span> All use cases</Link>
      </nav>

      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Use case · {item.feature}</p>
          <h1>{item.title}</h1>
          <p className={styles.lede}>{item.lede}</p>
          <div className={styles.builtFor}>
            <span>Built for</span>
            {item.builtFor.map((b) => <span key={b} className={styles.pill}>{b}</span>)}
          </div>
          <div className={styles.ctaRow}>
            <Link href="/book-a-demo" className={styles.primary}>Book a demo</Link>
            <a href="#how-it-works" className={styles.secondary}>See how it works <span aria-hidden>↓</span></a>
          </div>
        </div>
        <UseCaseStage id={`hero-${item.slug}`} name={item.feature} mockups={[...item.hero.mockups]} steps={item.hero.steps} background={item.hero.background} backgroundColor={item.hero.backgroundColor} />
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
          <nav aria-label="On this page">
            <p>On this page</p>
            <ul>{toc.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
          </nav>
        </aside>

        <div className={styles.body}>
          <section id="in-short" className={styles.inShort} aria-labelledby="in-short-title">
            <h2 id="in-short-title">In short</h2>
            <ul>{item.inShort.map((line) => <li key={line}>{line}</li>)}</ul>
          </section>

          <section id="problem" className={styles.section} aria-labelledby="problem-title">
            <p className={styles.label}>The problem</p>
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
              <p className={styles.label}>How it works</p>
              <h2 id="how-title">Four steps, all inside Checkgrow.</h2>
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
              <p className={styles.label}>See it work</p>
              <h2 id="see-title">{item.see.title}</h2>
              <p>{item.see.body}</p>
            </div>
            <div className={styles.showcase}>
              <UseCaseStage id={`${item.slug}-see`} name={item.see.title} mockups={[item.see.mockup]} steps={[{ label: item.see.title, caption: item.see.tag }]} background={item.see.background} backgroundColor={item.see.backgroundColor} />
            </div>
          </section>

          <section id="what-you-get" className={styles.section} aria-labelledby="get-title">
            <p className={styles.label}>What you get</p>
            <h2 id="get-title">What changes for your team.</h2>
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
              <p className={styles.label}>In practice</p>
              <h2 id="practice-title">Teams already doing this.</h2>
              <div className={styles.proof}>
                {proof.map((p) => (
                  <Link key={p.slug} href={newsPath(p.slug)}>
                    <strong>{p.company}</strong>
                    <span>{p.line}</span>
                    <em>Read the success story →</em>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section id="faq" className={styles.section} aria-labelledby="faq-title">
            <p className={styles.label}>FAQ</p>
            <h2 id="faq-title">Questions teams ask before they start.</h2>
            <div className={styles.faq}>
              {item.faq.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
            </div>
          </section>

          {related.length > 0 && (
            <section className={styles.section} aria-labelledby="related-title">
              <p className={styles.label}>Related use cases</p>
              <h2 id="related-title">Keep exploring.</h2>
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
            <h2>See what Checkgrow would show for your business.</h2>
            <Link href="/book-a-demo" className={styles.primary}>Book a demo</Link>
          </div>
          <p className={styles.updated}>Last updated {longDate(item.updatedAt)}. Product screens are illustrations of Checkgrow; figures are examples.</p>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </article>
  );
}
