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

export const challengeGroups: {
  label: string;
  tag: string;
  items: { id: ChallengeId; label: string; icon: ChallengeIcon }[];
}[] = [
  {
    label: "Growth",
    tag: "Pipeline",
    items: [
      { id: "leads", label: "Get more leads", icon: "magnet" },
      { id: "conversion", label: "A website that converts", icon: "funnel" },
      { id: "cac", label: "Reduce my CAC", icon: "coins" },
      { id: "ads", label: "Better Google, Meta or LinkedIn campaigns", icon: "meta" },
      { id: "outreach", label: "Improve my sales outreach", icon: "send" },
      { id: "creatives", label: "More and better creatives", icon: "image" },
      { id: "content", label: "Generate more content", icon: "pen" },
      { id: "geo", label: "Improve my GEO or SEO ranking", icon: "geo" },
    ],
  },
  {
    label: "AI operations",
    tag: "Team",
    items: [
      { id: "agents", label: "AI agentic force for my team", icon: "spark" },
      { id: "compliance", label: "Better compliance with AI", icon: "shield" },
    ],
  },
];

export const MAX_CHALLENGES = 3;

export const challengeLabel = (id: string) =>
  challengeGroups.flatMap((g) => g.items).find((i) => i.id === id)?.label ?? id;

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

export const aiTeamOptions = [
  { id: "1", label: "Just me" },
  { id: "2-5", label: "2–5 people" },
  { id: "6-20", label: "6–20 people" },
  { id: "21-50", label: "21–50 people" },
  { id: "51-100", label: "51–100 people" },
  { id: "100+", label: "100+ people" },
];

/* Goal suggestions follow the first answer: the visitor taps rather
   than types. Order matters; the first suggestions shown are the ones
   tied to the challenges picked, then the general ones. */
const goalsByChallenge: Record<ChallengeId, string[]> = {
  leads: ["Double qualified leads", "Build a predictable pipeline"],
  conversion: ["Lift website conversion rate", "Fix drop-offs in the funnel"],
  cac: ["Cut CAC by 30%", "Scale ads profitably"],
  ads: ["Scale ads profitably", "Reach decision-makers on LinkedIn"],
  outreach: ["Book more sales meetings", "Personalise outreach at scale"],
  content: ["Publish content every week", "Grow organic reach"],
  creatives: ["Ship fresh creatives every week", "Find winning ad creatives"],
  geo: ["Get cited in AI answers", "Rank on page one of Google"],
  agents: ["Run marketing with AI agents", "Automate weekly reporting"],
  compliance: ["AI governance and compliance", "Roll AI out to the whole team"],
};

const generalGoals = [
  "Launch in a new market",
  "Grow revenue this year",
  "Outpace our competitors",
  "Launch a new product",
];

export const MAX_GOALS = 5;

export function suggestGoals(challenges: string[], picked: string[]) {
  const out: string[] = [];
  for (const id of challenges) {
    for (const goal of goalsByChallenge[id as ChallengeId] ?? []) {
      if (!out.includes(goal)) out.push(goal);
    }
  }
  for (const goal of generalGoals) if (!out.includes(goal)) out.push(goal);
  return out.filter((g) => !picked.includes(g)).slice(0, 6);
}
