import { Reveal } from "@/components/Reveal";
import { FeatureStage } from "@/components/features/FeatureStage";
import { LocalLink as Link } from "@/i18n/client";
import { fmt } from "@/i18n/format";
import { getLang, getT } from "@/i18n/server";
import { translateMockup } from "@/i18n/mockups";
import { getMockupTable } from "@/i18n/dictionaries/mockupTables";
import { featureScreens } from "@/lib/featureScreens";
import { featurePath, type Feature } from "@/lib/features";
import styles from "./Features.module.css";

/* One feature: the animated three-step stage beside its story. Screens are
   static, trusted markup generated from the approved design canvas, rendered
   on the server so their HTML never ships in the client bundle. */
export function FeatureStory({
  feature,
  reverse = false,
  heading = "h3",
  learnMore = false,
}: {
  feature: Feature;
  reverse?: boolean;
  heading?: "h2" | "h3";
  learnMore?: boolean;
}) {
  const Heading = heading;
  const t = getT("features");
  /* mockup text in the page's language (src/i18n/mockups.ts), on the server */
  const table = getMockupTable(getLang(), "features");
  const screens = feature.screens.map((key) => (
    <div key={key} dangerouslySetInnerHTML={{ __html: translateMockup(featureScreens[key], table) }} />
  ));

  return (
    <article id={feature.slug} className={styles.story} data-reverse={reverse ? "true" : "false"} aria-labelledby={`${feature.slug}-title`}>
      <Reveal className={styles.media}>
        <FeatureStage
          id={`feature-${feature.slug}`}
          name={feature.name}
          background={feature.background}
          backgroundColor={feature.backgroundColor}
          steps={feature.steps}
          screens={screens}
          labels={t.stage}
        />
      </Reveal>
      <Reveal delay={0.08} className={styles.copy}>
        <p className={`text-label ${styles.eyebrow}`}>{feature.name}</p>
        <Heading id={`${feature.slug}-title`} className={`text-h2 ${styles.title}`}>{feature.title}</Heading>
        <p className={styles.scenario}>{feature.scenario}</p>
        <p className={styles.body}>{feature.body}</p>
        <ul className={styles.points}>
          {feature.points.map((point) => (
            <li key={point}>
              <span className={styles.dot} aria-hidden />
              {point}
            </li>
          ))}
        </ul>
        {learnMore && (
          <Link href={featurePath(feature.slug)} className={styles.more}>
            {fmt(t.story.more, { name: feature.name })} <span aria-hidden>→</span>
          </Link>
        )}
      </Reveal>
    </article>
  );
}
