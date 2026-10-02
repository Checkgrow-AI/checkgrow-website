import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTutorial, tutorialDate } from "@/lib/tutorials";
import { newsPosts, getNewsPost, newsPath, categoryLabel, securitySections } from "@/lib/news";
import { SITE_URL } from "@/lib/seo";
import { TutorialVideo } from "@/components/tutorials/TutorialVideo";
import { SecurityArticle } from "@/components/news/SecurityArticle";
import styles from "@/components/tutorials/Tutorials.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return newsPosts.map(({ slug }) => ({ slug })); }
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getNewsPost((await params).slug);
  if (!post) return {};
  const title = `${post.title} | Checkgrow News`;
  const image = post.social;
  return {
    title, description: post.description,
    alternates: { canonical: newsPath(post.slug) },
    openGraph: {
      type: "article", title, description: post.description, url: newsPath(post.slug), siteName: "Checkgrow",
      publishedTime: post.publishedAt, authors: ["Checkgrow"], section: categoryLabel(post.category),
      images: [{ url: image, alt: post.title }],
    },
    twitter: { card: "summary_large_image", title, description: post.description, images: [image] },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const post = getNewsPost((await params).slug);
  if (!post) notFound();
  const tutorial = post.category === "tutorials" ? getTutorial(post.slug) : undefined;
  const url = `${SITE_URL}${newsPath(post.slug)}`;
  const videos = (tutorial?.videos ?? []).map(video => ({
    "@type": "VideoObject", "@id": `${url}#${video.id}`,
    name: video.title, description: video.description, contentUrl: `${SITE_URL}${video.src}`,
    thumbnailUrl: `${SITE_URL}${video.poster}`, duration: `PT${video.durationSeconds}S`,
    uploadDate: `${post.publishedAt}T12:00:00Z`, inLanguage: "en",
  }));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", headline: post.title, description: post.description,
        mainEntityOfPage: url, url, datePublished: post.publishedAt,
        author: { "@type": "Organization", name: "Checkgrow", url: SITE_URL },
        publisher: { "@id": `${SITE_URL}/#organization` },
        image: `${SITE_URL}${post.social}`,
        articleSection: categoryLabel(post.category), inLanguage: "en-GB",
        ...(videos.length ? { video: videos.map(video => ({ "@id": video["@id"] })) } : {}),
      },
      ...videos,
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "News", item: `${SITE_URL}/news` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ] },
    ],
  };
  return (
    <article className={`wrap ${styles.article}`}>
      <nav aria-label="Breadcrumb">
        <Link href="/news" className={styles.back}><span aria-hidden>←</span> All news</Link>
      </nav>
      <header className={styles.articleHeader}>
        <div className={styles.meta}><strong>{categoryLabel(post.category)}</strong><time dateTime={post.publishedAt}>{tutorialDate(post.publishedAt)}</time></div>
        <h1>{post.title}</h1>
        <p className={styles.subtitle}>{post.description}</p>
        <p className={styles.author}>By Checkgrow · {tutorial ? "2 guided videos" : "Security update"}</p>
      </header>
      <div className={styles.articleLayout}>
        <aside className={styles.contents}>
          <nav aria-label="On this page">
            <p>On this page</p>
            <ul>
              {tutorial ? <>
              <li><a href={`#${tutorial.videos[0].id}`}>Short walkthrough</a></li>
              <li><a href="#step-by-step">Step by step</a></li>
              <li><a href={`#${tutorial.videos[1].id}`}>Full walkthrough</a></li>
              </> : <>
                {securitySections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.shortTitle}</a></li>)}
                <li><a href="#assessment-scope">Assessment scope</a></li>
                <li><a href="#security-review">Your security review</a></li>
              </>}
            </ul>
          </nav>
        </aside>
        <div className={styles.reading}>
          {tutorial ? <>
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
          </> : <SecurityArticle />}
          <div className={styles.cta}>
            <Link href="/#waitlist">Get Free Early Access</Link>
            <Link href="/news">All news <span aria-hidden>→</span></Link>
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </article>
  );
}
