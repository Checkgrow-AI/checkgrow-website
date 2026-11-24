/* Single source for the product feature stories: the homepage "In practice"
   section shows the features flagged `onHome`; /features shows all of them.
   Each feature plays three screens (src/lib/featureScreens.ts) on its own
   background, one per step. The copy (name, story, points, steps) lives in
   the features dictionary namespace, keyed by slug, and is merged in with
   featuresOf(). Copy describes what the product does and avoids invented
   results; numbers inside the mockups are illustrative. */

export type FeatureStep = { readonly label: string; readonly caption: string };

/* the copy one feature takes from the dictionary */
export type FeatureCopy = {
  readonly name: string;
  readonly title: string;
  readonly scenario: string;
  readonly body: string;
  readonly points: readonly [string, string, string];
  readonly steps: readonly [FeatureStep, FeatureStep, FeatureStep];
};

const FEATURE_DATA = [
  { slug: "knowledge-centre", screens: ["Knowledge-1", "Knowledge-2", "Knowledge-3"], background: "/features/backgrounds/03-moss-cream.webp", backgroundColor: "#8a8f74", onHome: true },
  { slug: "insights", screens: ["Insights-1", "Insights-2", "Insights-3"], background: "/features/backgrounds/05-cobalt-sky.webp", backgroundColor: "#3b6fe0", onHome: true },
  { slug: "campaigns", screens: ["Campaigns-1", "Campaigns-2", "Campaigns-3"], background: "/features/backgrounds/09-terracotta-sage.webp", backgroundColor: "#b9805a", onHome: true },
  { slug: "creative-studio", screens: ["Creative-1", "Creative-2", "Creative-3"], background: "/features/backgrounds/10-ice-rose-lavender.webp", backgroundColor: "#c3c4ef", onHome: true },
  { slug: "content", screens: ["Content-1", "Content-2", "Content-3"], background: "/features/backgrounds/02-apricot-blush.webp", backgroundColor: "#f2a37a", onHome: false },
  { slug: "social-media", screens: ["Social-1", "Social-2", "Social-3"], background: "/features/backgrounds/07-blush-butter.webp", backgroundColor: "#f4b9b4", onHome: false },
  { slug: "competitors", screens: ["Competitors-1", "Competitors-2", "Competitors-3"], background: "/features/backgrounds/08-deep-teal-seafoam.webp", backgroundColor: "#1f4f55", onHome: true },
  { slug: "sales", screens: ["Sales-1", "Sales-2", "Sales-3"], background: "/features/backgrounds/01-sage-peach-sky.webp", backgroundColor: "#a8a98a", onHome: false },
  { slug: "ai-assistant", screens: ["Assistant-1", "Assistant-2", "Assistant-3"], background: "/features/backgrounds/13-brand-indigo-bloom.webp", backgroundColor: "#6c7be8", onHome: true },
] as const;

export type FeatureSlug = (typeof FEATURE_DATA)[number]["slug"];

export type Feature = FeatureCopy & {
  slug: FeatureSlug;
  screens: readonly [string, string, string];
  background: string;
  backgroundColor: string;
  onHome: boolean;
};

export function featuresOf(copy: { readonly items: { readonly [K in FeatureSlug]: FeatureCopy } }): Feature[] {
  return FEATURE_DATA.map((data) => ({ ...copy.items[data.slug], ...data }));
}

export const homeFeaturesOf = (features: readonly Feature[]) => features.filter((feature) => feature.onHome);

export const featurePath = (slug?: string) =>
  slug ? `/features#${slug}` : "/features";
