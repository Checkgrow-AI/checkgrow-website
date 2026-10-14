import Image from "next/image";
import { storySectionId, type StoryBlock, type StoryStat, type SuccessStory } from "@/lib/successStories";
import editorial from "@/components/tutorials/Tutorials.module.css";
import styles from "./SuccessStory.module.css";

/* Body of a success story inside the News article shell: the lead, the
   client facts, four labelled sections (challenge, solution, findings,
   results), the closing statement and the FAQ. The hero image and headline
   stats sit above the article layout (SuccessStoryHero). */

function Stats({ items, className = "" }: { items: StoryStat[]; className?: string }) {
  return (
    <dl className={`${styles.stats} ${className}`}>
      {items.map(stat => (
        <div key={stat.value + stat.label} className={stat.big ? styles.statBig : styles.stat}>
          <dt>{stat.value}</dt>
          <dd>{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}

function Block({ block }: { block: StoryBlock }) {
  switch (block.type) {
    case "p":
      return <p className={styles.paragraph}>{block.text}</p>;
    case "stats":
      return <Stats items={block.items} />;
    case "callout":
      return (
        <blockquote className={styles.callout}>
          <p>{block.text}</p>
          <cite>{block.cite}</cite>
        </blockquote>
      );
    case "gallery":
      return (
        <figure className={styles.figure}>
          <div className={styles.gallery}>
            {block.images.map(image => (
              <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 767px) 50vw, 200px" />
            ))}
          </div>
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case "figure":
      return (
        <figure className={styles.figure}>
          {block.variant === "card" ? (
            <div className={styles.figCard}>
              <div className={styles.shot}>
                <Image src={block.image.src} alt={block.image.alt} width={block.image.width} height={block.image.height} sizes="(max-width: 767px) 100vw, 320px" />
              </div>
              <Stats items={block.stats} className={styles.figFacts} />
            </div>
          ) : (
            <div className={block.variant === "narrow" ? `${styles.shot} ${styles.narrow}` : styles.shot}>
              <Image
                src={block.image.src}
                alt={block.image.alt}
                width={block.image.width}
                height={block.image.height}
                sizes={block.variant === "narrow" ? "(max-width: 767px) 100vw, 440px" : "(max-width: 767px) 100vw, 760px"}
              />
            </div>
          )}
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
  }
}

export function SuccessStoryHero({ story }: { story: SuccessStory }) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImage}>
        <Image src={story.hero.src} alt={story.hero.alt} width={story.hero.width} height={story.hero.height} priority sizes="(max-width: 1199px) 100vw, 1120px" />
      </div>
      <Stats items={story.heroStats} className={styles.heroStats} />
    </div>
  );
}

export function SuccessStoryArticle({ story }: { story: SuccessStory }) {
  return (
    <>
      <p className={editorial.intro}>{story.lead}</p>

      {story.takeaways?.length ? (
        <section className={styles.takeaways} aria-labelledby="key-takeaways">
          <h2 id="key-takeaways">Key takeaways</h2>
          <ul>{story.takeaways.map(item => <li key={item}>{item}</li>)}</ul>
        </section>
      ) : null}

      <section className={styles.about} aria-labelledby="about-client">
        <h2 id="about-client">About {story.company}</h2>
        <p>{story.about.summary}</p>
        <dl>
          {story.about.facts.map(fact => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <div className={styles.features}>
          <h3>Checkgrow features used</h3>
          <ul>{story.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
        </div>
      </section>

      {story.sections.map(section => {
        const id = storySectionId(section.label);
        return (
          <section key={id} id={id} className={styles.section} aria-labelledby={`${id}-title`}>
            <h2 id={`${id}-title`}>
              <span className={styles.label}>{section.label}<span className="sr-only">: </span></span>
              {section.title}
            </h2>
            {section.blocks.map((block, index) => <Block key={index} block={block} />)}
          </section>
        );
      })}

      {story.statement && (
        <blockquote className={styles.statement}>
          <p>{story.statement.text}</p>
          <cite>{story.statement.cite}</cite>
        </blockquote>
      )}

      <section id="faq" className={styles.faq} aria-labelledby="faq-title">
        <h2 id="faq-title">Frequently asked questions</h2>
        {story.faq.map(item => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>

      <p className={styles.footnote}>{story.footnote}</p>
    </>
  );
}
