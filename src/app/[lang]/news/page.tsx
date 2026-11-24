import { buildNewsPosts, newsPath } from "@/lib/news";
import { SITE_URL } from "@/lib/seo";
import { Suspense } from "react";
import { NewsGrid, NewsListing } from "@/components/news/NewsListing";
import { getDictionary } from "@/i18n/dictionaries";
import { langOf, pageMetadata } from "@/i18n/metadata";
import { setRequestLang } from "@/i18n/server";
import { localePath } from "@/i18n/config";
import { Messages } from "@/i18n/client";
import styles from "@/components/tutorials/Tutorials.module.css";

const image = "/features/backgrounds/13-brand-indigo-bloom.webp";

export async function generateMetadata({ params }: PageProps<"/[lang]/news">) {
  const lang = langOf((await params).lang);
  const t = getDictionary(lang).news.listing;
  return pageMetadata(lang, {
    path: "/news",
    title: t.meta.title,
    description: t.meta.description,
    markdown: "/news.md",
    extra: {
      openGraph: { type: "website", images: [{ url: image, alt: t.name }] },
      twitter: { images: [image] },
    },
  });
}

export default async function NewsPage({ params }: PageProps<"/[lang]/news">) {
  const lang = langOf((await params).lang);
  setRequestLang(lang);
  const dict = getDictionary(lang);
  const t = dict.news.listing;
  /* the cards only need each post's card fields, not the articles */
  const posts = buildNewsPosts(dict);
  const schema = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: t.name, description: t.meta.description, url: `${SITE_URL}${localePath(lang, "/news")}`,
    mainEntity: { "@type": "ItemList", itemListElement: posts.map((post, index) => ({
      "@type": "ListItem", position: index + 1, url: `${SITE_URL}${localePath(lang, newsPath(post.slug))}`, name: post.title,
    })) },
  };
  return (
    <div className={`wrap ${styles.index}`}>
      <header className={styles.indexHeader}>
        <h1>{t.heading}</h1>
        <p>{t.introLead}<br />{t.introBody}</p>
      </header>
      <Messages messages={{ news: dict.news }}>
        <Suspense fallback={<NewsGrid posts={posts} category="all" />}>
          <NewsListing posts={posts} />
        </Suspense>
      </Messages>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
