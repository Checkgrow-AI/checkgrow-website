/* Talk to us (/book-a-demo): every option the qualification step offers
   (main goal and monthly ad spend).
   Shared by the page and the API. Live availability is server-only:
   demoAvailability.ts. */

export const DEMO_TIME_ZONE = "Europe/Zagreb";
export const DEMO_MINUTES = 30;

/* What the visitor wants to fix first: one main goal, picked from a
   dropdown. The first option is the general one. Ids are what the APIs
   and the sales team receive; labels come from the demo dictionary
   (demo.form.challenges.labels). */
export const challengeIds = [
  "growth-ops",
  "leads",
  "ads",
  "conversion",
  "outreach",
  "content",
  "geo",
  "agents",
] as const;
export type ChallengeId = (typeof challengeIds)[number];

/* ids from the earlier ten-card form, merged into today's options; the
   API still accepts them from a page opened before the change */
export const LEGACY_CHALLENGES: Readonly<Record<string, ChallengeId>> = {
  cac: "ads",
  creatives: "content",
  compliance: "agents",
};

export const MAX_CHALLENGES = 1;

/* icon names the page's icon set accepts (DemoIcons) */
export type ChallengeIcon =
  | "magnet"
  | "funnel"
  | "coins"
  | "meta"
  | "send"
  | "image"
  | "pen"
  | "geo"
  | "spark"
  | "shield";

export const challengeLabel = (id: string, labels: Readonly<Record<ChallengeId, string>>) =>
  labels[id as ChallengeId] ?? id;

/* Monthly ad spend on a stepped scale: fine steps where budgets are
   small, wider ones as they grow, so every budget has a close stop
   (€15.000, €35.000, €150.000…). Values are read as "around". The last
   stop means "1M and above". */
export const spendStops = [
  0, 500, 1_000, 1_500, 2_000, 3_000, 4_000, 5_000, 6_000, 7_500, 10_000,
  12_500, 15_000, 20_000, 25_000, 30_000, 35_000, 40_000, 50_000, 60_000,
  75_000, 100_000, 125_000, 150_000, 200_000, 250_000, 300_000, 400_000,
  500_000, 750_000, 1_000_000,
];

const eur = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 });
export const formatSpend = (value: number) =>
  value >= 1_000_000 ? `€${eur.format(value)}+` : `€${eur.format(value)}`;

/* "Around €15.000", or a plain €0 / €1.000.000+ at the ends */
export const describeSpend = (value: number) =>
  value === 0 || value >= 1_000_000 ? formatSpend(value) : `~${formatSpend(value)}`;

/* Company size is no longer asked. A page opened before that change may
   still send one of these ids (as companySize, or aiTeam even earlier);
   the API accepts it and passes it on. */
export const companySizeOptions = [
  { id: "1" },
  { id: "2-5" },
  { id: "6-20" },
  { id: "21-50" },
  { id: "51-100" },
  { id: "100+" },
] as const;
export type CompanySizeId = (typeof companySizeOptions)[number]["id"];

/* goals are no longer asked; the API still accepts them from a page
   opened before the change */
export const MAX_GOALS = 5;
