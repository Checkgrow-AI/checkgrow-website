import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { FeatureStory } from "@/components/features/FeatureStory";
import { features, homeFeatures, featurePath } from "@/lib/features";

export function UseCases() {
  return (
    <section className="border-t border-line bg-surface py-24 md:py-32" id="use-cases">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="text-label text-muted">In practice</p>
          <h2 className="text-h1 mt-6 text-balance">
            What a week inside Checkgrow looks like.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Six features, one shared brain. Watch each one work in three
            steps, grounded in your knowledge and feeding the next.
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
            See all features <span aria-hidden>→</span>
          </Link>
          <p className="text-sm text-muted">
            {features.length} features, from Content and Social Media to Sales.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
