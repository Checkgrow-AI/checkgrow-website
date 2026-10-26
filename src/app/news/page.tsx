import type { Metadata } from "next";
import { newsPosts, newsPath } from "@/lib/news";
import { SITE_URL } from "@/lib/seo";
import { Suspense } from "react";
import { NewsGrid, NewsListing } from "@/components/news/NewsListing";
import styles from "@/components/tutorials/Tutorials.module.css";

const title = "Checkgrow News | Success stories, tutorials and security releases";
const description = "Success stories, practical tutorials and security updates from Checkgrow. See how teams grow with the platform and the workflows behind it.";
const image = "/features/backgrounds/13-brand-indigo-bloom.webp";
export const metadata: Metadata = {
  title, description, alternates: { canonical: "/news", types: { "text/markdown": "/news.md" } },
  openGraph: { title, description, type: "website", url: "/news", siteName: "Checkgrow", images: [{ url: image, alt: "Checkgrow News" }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function NewsPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: "Checkgrow News", description, url: `${SITE_URL}/news`,
    mainEntity: { "@type": "ItemList", itemListElement: newsPosts.map((post, index) => ({
      "@type": "ListItem", position: index + 1, url: `${SITE_URL}${newsPath(post.slug)}`, name: post.title,
    })) },
  };
  return (
    <div className={`wrap ${styles.index}`}>
      <header className={styles.indexHeader}>
        <h1>News</h1>
        <p>Inside Checkgrow.<br />Practical guides, platform progress and the work behind your workspace.</p>
      </header>
      <Suspense fallback={<NewsGrid posts={newsPosts} category="all" />}>
        <NewsListing posts={newsPosts} />
      </Suspense>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
