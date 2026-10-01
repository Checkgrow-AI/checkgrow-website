import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { tutorials, tutorialPath, tutorialDate } from "@/lib/tutorials";
import { SITE_URL } from "@/lib/seo";
import styles from "@/components/tutorials/Tutorials.module.css";

const title = "Checkgrow Tutorials | Practical video guides";
const description = "Learn to use Checkgrow with practical video tutorials. Follow guided workflows for company research, sales outreach and your connected growth platform.";
export const metadata: Metadata = {
  title, description, alternates: { canonical: "/tutorials" },
  openGraph: { title, description, type: "website", url: "/tutorials", siteName: "Checkgrow", images: [{ url: "/tutorials/sales-outreach/social.webp", width: 1200, height: 630, alt: "Checkgrow Tutorials" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/tutorials/sales-outreach/social.webp"] },
};

export default function TutorialsPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "Checkgrow Tutorials", description, url: `${SITE_URL}/tutorials`,
    mainEntity: { "@type": "ItemList", itemListElement: tutorials.map((tutorial, index) => ({
      "@type": "ListItem", position: index + 1, url: `${SITE_URL}${tutorialPath(tutorial.slug)}`, name: tutorial.title,
    })) },
  };
  return (
    <div className={`wrap ${styles.index}`}>
      <header className={styles.indexHeader}>
        <h1>Tutorials</h1>
        <p>Practical guides to put Checkgrow to work.<br />Watch the workflow. Make it your own.</p>
      </header>
      <section aria-labelledby="all-tutorials-title">
        <div className={styles.listHeading}>
          <h2 id="all-tutorials-title">All tutorials</h2>
          <p>{tutorials.length} {tutorials.length === 1 ? "tutorial" : "tutorials"}</p>
        </div>
        <div className={styles.grid}>
          {tutorials.map((tutorial, index) => (
            <article key={tutorial.slug}>
              <Link href={tutorialPath(tutorial.slug)} className={styles.card}>
                <div className={styles.cover}>
                  <Image src={tutorial.cover} alt="" fill loading={index === 0 ? "eager" : "lazy"} sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 400px" />
                </div>
                <h3>{tutorial.title}</h3>
                <div className={styles.meta}>
                  <strong>{tutorial.category}</strong>
                  <time dateTime={tutorial.publishedAt}>{tutorialDate(tutorial.publishedAt)}</time>
                </div>
                <p className={styles.cardDescription}>{tutorial.description}</p>
                <span className={styles.readLink}>Watch tutorial <span aria-hidden>↗</span></span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
