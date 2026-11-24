import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findTutorial, tutorialDate } from "@/lib/tutorials";
import { buildNewsPosts, findNewsPost, newsPath } from "@/lib/news";
import { SITE_URL, jsonLdLanguage } from "@/lib/seo";
import { TutorialVideo } from "@/components/tutorials/TutorialVideo";
import { SecurityArticle } from "@/components/news/SecurityArticle";
import { SuccessStoryArticle, SuccessStoryHero } from "@/components/news/SuccessStoryArticle";
import { findStory, storySectionId, contentsLabel } from "@/lib/successStories";
import { newsCategoryHref } from "@/lib/newsCategories";
import { getDictionary } from "@/i18n/dictionaries";
import { langOf, pageMetadata } from "@/i18n/metadata";
import { setRequestLang } from "@/i18n/server";
import { localeInfo, localePath } from "@/i18n/config";
import { fmt, plural } from "@/i18n/format";
import { LocalLink as Link, Messages } from "@/i18n/client";
import styles from "@/components/tutorials/Tutorials.module.css";

export const dynamicParams = false;
/* every post exists in every language: slugs never translate */
export function generateStaticParams({ params }: { params: { lang: string } }) {
  return buildNewsPosts(getDictionary(langOf(params.lang))).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/news/[slug]">): Promise<Metadata> {
  const { lang: segment, slug } = await params;
  const lang = langOf(segment);
  const dict = getDictionary(lang);
  const post = findNewsPost(buildNewsPosts(dict), slug);
  if (!post) return {};
  const path = newsPath(post.slug);
  const image = post.social;
  return pageMetadata(lang, {
    path,
    title: fmt(dict.news.article.metaTitle, { title: post.title }),
    description: post.description,
    markdown: `${path}.md`,
    extra: {
      openGraph: {
        type: "article", publishedTime: post.publishedAt, authors: ["Checkgrow"], section: dict.news.categoryLabels[post.category],
        images: [{ url: image, alt: post.title }],
      },
      twitter: { images: [image] },
    },
  });
}

export default async function NewsArticlePage({ params }: PageProps<"/[lang]/news/[slug]">) {
  const { lang: segment, slug } = await params;
  const lang = langOf(segment);
  setRequestLang(lang);
  const dict = getDictionary(lang);
  const t = dict.news;
  const post = findNewsPost(buildNewsPosts(dict), slug);
  if (!post) notFound();
  const tutorial = post.category === "tutorials" ? findTutorial(dict.tutorials.items, post.slug) : undefined;
  const story = post.category === "success-stories" ? findStory(dict.stories.items, post.slug) : undefined;
  const categoryLabel = t.categoryLabels[post.category];
  /* absolute URL of a page in this language (the homepage stays SITE_URL) */
  const absolute = (path: string) => {
    const local = localePath(lang, path);
    return local === "/" ? SITE_URL : `${SITE_URL}${local}`;
  };
  const url = absolute(newsPath(post.slug));
  const videos = (tutorial?.videos ?? []).map(video => ({
    "@type": "VideoObject", "@id": `${url}#${video.id}`,
    name: video.title, description: video.description, contentUrl: `${SITE_URL}${video.src}`,
    // i18n-allow: ISO 8601 duration, not copy
    thumbnailUrl: `${SITE_URL}${video.poster}`, duration: `PT${video.durationSeconds}S`,
    /* the recordings are in English in every language */
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
        articleSection: categoryLabel, inLanguage: jsonLdLanguage(lang),
        ...(story ? {
          about: { "@type": "Organization", name: story.company },
          ...(story.keywords?.length ? { keywords: story.keywords.join(", ") } : {}),
          ...(story.takeaways?.length ? { abstract: story.takeaways.join(" ") } : {}),
        } : {}),
        ...(videos.length ? { video: videos.map(video => ({ "@id": video["@id"] })) } : {}),
      },
      ...videos,
      ...(story ? [{
        "@type": "FAQPage", "@id": `${url}#faq`,
        mainEntity: story.faq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
      }] : []),
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: t.article.breadcrumbHome, item: absolute("/") },
        { "@type": "ListItem", position: 2, name: t.article.breadcrumbNews, item: absolute("/news") },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ] },
    ],
  };
  const byline = tutorial
    ? plural(lang, tutorial.videos.length, t.article.guidedVideos)
    : story ? story.kicker : t.article.securityByline;
  return (
    <article className={`wrap ${styles.article}`}>
      <nav aria-label={t.article.breadcrumbLabel}>
        {story
          ? <Link href={newsCategoryHref("success-stories")} className={styles.back}><span aria-hidden>←</span> {t.article.allStories}</Link>
          : <Link href="/news" className={styles.back}><span aria-hidden>←</span> {t.article.allNews}</Link>}
      </nav>
      <header className={styles.articleHeader}>
        <div className={styles.meta}><strong>{categoryLabel}</strong><time dateTime={post.publishedAt}>{tutorialDate(post.publishedAt, localeInfo[lang].tag)}</time></div>
        <h1>{post.title}</h1>
        <p className={styles.subtitle}>{post.description}</p>
        <p className={styles.author}>{fmt(t.article.byline, { detail: byline })}</p>
      </header>
      {story && <SuccessStoryHero story={story} />}
      <div className={styles.articleLayout}>
        <aside className={styles.contents}>
          <nav aria-label={t.article.contentsLabel}>
            <p>{t.article.contentsLabel}</p>
            <ul>
              {story ? <>
                {story.sections.map(section => <li key={section.label}><a href={`#${storySectionId(section.label)}`}>{contentsLabel(section.label, lang)}</a></li>)}
                <li><a href="#faq">{t.article.faqLink}</a></li>
              </> : tutorial ? <>
              <li><a href={`#${tutorial.videos[0].id}`}>{t.tutorial.contents.shortVideo}</a></li>
              <li><a href="#step-by-step">{t.tutorial.contents.steps}</a></li>
              <li><a href={`#${tutorial.videos[1].id}`}>{t.tutorial.contents.fullVideo}</a></li>
              </> : <>
                {t.security.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.shortTitle}</a></li>)}
                <li><a href="#assessment-scope">{t.security.contents.scope}</a></li>
                <li><a href="#security-review">{t.security.contents.review}</a></li>
              </>}
            </ul>
          </nav>
        </aside>
        <div className={styles.reading}>
          {story ? <SuccessStoryArticle story={story} /> : tutorial ? <Messages messages={{ news: t }}>
          <p className={styles.intro}>{tutorial.introduction}</p>
          <p className={styles.prerequisites}><strong>{t.tutorial.beforeYouBegin}{" "}</strong>{tutorial.prerequisites}</p>
          <TutorialVideo video={tutorial.videos[0]} />
          <section className={styles.steps} id="step-by-step" aria-labelledby="steps-title">
            <h2 id="steps-title">{t.tutorial.stepsTitle}</h2>
            <ol>{tutorial.steps.map(step => (
              <li key={step.id} id={step.id}><h3>{step.title}</h3><p>{step.body}</p></li>
            ))}</ol>
          </section>
          <TutorialVideo video={tutorial.videos[1]} />
          <p className={styles.recordingNote}>{t.tutorial.recordingNote}</p>
          <section className={styles.takeaway}>
            <h2>{t.tutorial.takeawayTitle}</h2>
            <p>{tutorial.takeaway}</p>
          </section>
          </Messages> : <SecurityArticle publishedAt={post.publishedAt} />}
          <div className={styles.cta}>
            <Link href="/book-a-demo">{t.article.bookDemo}</Link>
            {story
              ? <Link href={newsCategoryHref("success-stories")}>{t.article.allStories} <span aria-hidden>→</span></Link>
              : <Link href="/news">{t.article.allNews} <span aria-hidden>→</span></Link>}
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </article>
  );
}
