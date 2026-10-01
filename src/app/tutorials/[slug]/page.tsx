import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tutorials, getTutorial, tutorialPath, tutorialDate } from "@/lib/tutorials";
import { SITE_URL } from "@/lib/seo";
import { TutorialVideo } from "@/components/tutorials/TutorialVideo";
import styles from "@/components/tutorials/Tutorials.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return tutorials.map(({ slug }) => ({ slug })); }
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tutorial = getTutorial((await params).slug);
  if (!tutorial) return {};
  const title = `${tutorial.title} | Checkgrow Tutorials`;
  const image = `/tutorials/${tutorial.slug}/social.webp`;
  return {
    title, description: tutorial.description,
    alternates: { canonical: tutorialPath(tutorial.slug) },
    openGraph: {
      type: "article", title, description: tutorial.description, url: tutorialPath(tutorial.slug), siteName: "Checkgrow",
      publishedTime: tutorial.publishedAt, authors: ["Checkgrow"], section: tutorial.category,
      images: [{ url: image, width: 1200, height: 630, alt: tutorial.title }],
    },
    twitter: { card: "summary_large_image", title, description: tutorial.description, images: [image] },
  };
}

export default async function TutorialPage({ params }: Props) {
  const tutorial = getTutorial((await params).slug);
  if (!tutorial) notFound();
  const url = `${SITE_URL}${tutorialPath(tutorial.slug)}`;
  const videos = tutorial.videos.map(video => ({
    "@type": "VideoObject", "@id": `${url}#${video.id}`,
    name: video.title, description: video.description, contentUrl: `${SITE_URL}${video.src}`,
    thumbnailUrl: `${SITE_URL}${video.poster}`, duration: `PT${video.durationSeconds}S`,
    uploadDate: `${tutorial.publishedAt}T12:00:00Z`, inLanguage: "en",
  }));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", headline: tutorial.title, description: tutorial.description,
        mainEntityOfPage: url, url, datePublished: tutorial.publishedAt,
        author: { "@type": "Organization", name: "Checkgrow", url: SITE_URL },
        publisher: { "@id": `${SITE_URL}/#organization` },
        image: `${SITE_URL}/tutorials/${tutorial.slug}/social.webp`,
        articleSection: tutorial.category, inLanguage: "en-GB",
        video: videos.map(video => ({ "@id": video["@id"] })),
      },
      ...videos,
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Tutorials", item: `${SITE_URL}/tutorials` },
        { "@type": "ListItem", position: 3, name: tutorial.title, item: url },
      ] },
    ],
  };
  return (
    <article className={`wrap ${styles.article}`}>
      <nav aria-label="Breadcrumb">
        <Link href="/tutorials" className={styles.back}><span aria-hidden>←</span> All tutorials</Link>
      </nav>
      <header className={styles.articleHeader}>
        <div className={styles.meta}><strong>{tutorial.category}</strong><time dateTime={tutorial.publishedAt}>{tutorialDate(tutorial.publishedAt)}</time></div>
        <h1>{tutorial.title}</h1>
        <p className={styles.subtitle}>{tutorial.description}</p>
        <p className={styles.author}>By Checkgrow · 2 guided videos</p>
      </header>
      <div className={styles.articleLayout}>
        <aside className={styles.contents}>
          <nav aria-label="On this page">
            <p>On this page</p>
            <ul>
              <li><a href={`#${tutorial.videos[0].id}`}>Short walkthrough</a></li>
              <li><a href="#step-by-step">Step by step</a></li>
              <li><a href={`#${tutorial.videos[1].id}`}>Full walkthrough</a></li>
            </ul>
          </nav>
        </aside>
        <div className={styles.reading}>
          <p className={styles.intro}>{tutorial.introduction}</p>
          <p className={styles.prerequisites}><strong>Before you begin. </strong>{tutorial.prerequisites}</p>
          <TutorialVideo video={tutorial.videos[0]} />
          <section className={styles.steps} id="step-by-step" aria-labelledby="steps-title">
            <h2 id="steps-title">The workflow, step by step</h2>
            <ol>{tutorial.steps.map(step => (
              <li key={step.id} id={step.id}><h3>{step.title}</h3><p>{step.body}</p></li>
            ))}</ol>
          </section>
          <TutorialVideo video={tutorial.videos[1]} />
          <p className={styles.recordingNote}>Recorded in the Drooms workspace. Your screens may look a little different as Checkgrow evolves.</p>
          <section className={styles.takeaway}>
            <h2>Build on what you learn</h2>
            <p>{tutorial.takeaway}</p>
          </section>
          <div className={styles.cta}>
            <Link href="/#waitlist">Get Free Early Access</Link>
            <Link href="/tutorials">All tutorials <span aria-hidden>→</span></Link>
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </article>
  );
}
