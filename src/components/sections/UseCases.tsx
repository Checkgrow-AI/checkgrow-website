import { Reveal } from "@/components/Reveal";
import { FeatureStory } from "@/components/features/FeatureStory";
import { LocalLink as Link } from "@/i18n/client";
import { fmt } from "@/i18n/format";
import { getT } from "@/i18n/server";
import { featuresOf, homeFeaturesOf, featurePath } from "@/lib/features";

export function UseCases() {
  const copy = getT("features");
  const t = copy.home;
  const features = featuresOf(copy);
  const homeFeatures = homeFeaturesOf(features);
  return (
    <section className="border-t border-line bg-surface py-24 md:py-32" id="use-cases">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="text-label text-muted">{t.eyebrow}</p>
          <h2 className="text-h1 mt-6 text-balance">
            {t.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {t.intro}
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24 md:gap-32">
          {homeFeatures.map((feature, index) => (
            <FeatureStory key={feature.slug} feature={feature} reverse={index % 2 === 1} />
          ))}
        </div>

        <Reveal className="mt-20 flex flex-col items-center gap-4 text-center md:mt-28">
          <Link
            href={featurePath()}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-control-line px-7 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-muted hover:bg-raised"
          >
            {t.seeAll} <span aria-hidden>→</span>
          </Link>
          <p className="text-sm text-muted">
            {fmt(t.count, { n: features.length })}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
