/* Book a demo: every option the qualification form offers and the goal
   suggestions it derives from the visitor's answers. Shared by the page
   and the API. Live availability is server-only: demoAvailability.ts. */

export const DEMO_TIME_ZONE = "Europe/Zagreb";
export const DEMO_MINUTES = 30;

export type ChallengeId =
  | "leads"
  | "conversion"
  | "cac"
  | "ads"
  | "outreach"
  | "creatives"
  | "content"
  | "geo"
  | "agents"
  | "compliance";

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

export type ChallengeGroupId = "growth" | "ai";

/* ids and icons only: labels come from the demo dictionary (demo.form.challenges) */
export const challengeGroups: {
  id: ChallengeGroupId;
  items: { id: ChallengeId; icon: ChallengeIcon }[];
}[] = [
  {
    id: "growth",
    items: [
      { id: "leads", icon: "magnet" },
      { id: "conversion", icon: "funnel" },
      { id: "cac", icon: "coins" },
      { id: "ads", icon: "meta" },
      { id: "outreach", icon: "send" },
      { id: "creatives", icon: "image" },
      { id: "content", icon: "pen" },
      { id: "geo", icon: "geo" },
    ],
  },
  {
    id: "ai",
    items: [
      { id: "agents", icon: "spark" },
      { id: "compliance", icon: "shield" },
    ],
  },
];

export const MAX_CHALLENGES = 3;

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

/* ids only: labels come from the demo dictionary (demo.form.team.options) */
export const aiTeamOptions = [
  { id: "1" },
  { id: "2-5" },
  { id: "6-20" },
  { id: "21-50" },
  { id: "51-100" },
  { id: "100+" },
] as const;
export type AiTeamId = (typeof aiTeamOptions)[number]["id"];

/* Goal suggestions follow the first answer: the visitor taps rather
   than types. Order matters; the first suggestions shown are the ones
   tied to the challenges picked, then the general ones. The goal texts
   are copy (demo.form.goals.suggestions); a picked goal is sent as the
   text the visitor saw. */
export type GoalSuggestions = {
  byChallenge: Readonly<Record<ChallengeId, readonly string[]>>;
  general: readonly string[];
};

export const MAX_GOALS = 5;

export function suggestGoals(challenges: string[], picked: string[], copy: GoalSuggestions) {
  const out: string[] = [];
  for (const id of challenges) {
    for (const goal of copy.byChallenge[id as ChallengeId] ?? []) {
      if (!out.includes(goal)) out.push(goal);
    }
  }
  for (const goal of copy.general) if (!out.includes(goal)) out.push(goal);
  return out.filter((g) => !picked.includes(g)).slice(0, 6);
}
