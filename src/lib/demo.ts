/* Book a demo: every option the qualification form offers and the goal
   suggestions it derives from the visitor's answers. Shared by the page
   and the API. Live availability is server-only: demoAvailability.ts. */

export const DEMO_TIME_ZONE = "Europe/Zagreb";
export const DEMO_MINUTES = 30;

export type ChallengeId =
  | "leads"
  | "conversion"
  | "cac"
  | "meta"
  | "google"
  | "linkedin"
  | "agents"
  | "workflows"
  | "team"
  | "compliance";

export type ChallengeIcon =
  | "magnet"
  | "funnel"
  | "coins"
  | "meta"
  | "search"
  | "linkedin"
  | "spark"
  | "flow"
  | "team"
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
      { id: "conversion", label: "Convert more website visits", icon: "funnel" },
      { id: "cac", label: "Reduce my CAC", icon: "coins" },
      { id: "meta", label: "Better Meta campaigns", icon: "meta" },
      { id: "google", label: "Better Google campaigns", icon: "search" },
      { id: "linkedin", label: "Better LinkedIn campaigns", icon: "linkedin" },
    ],
  },
  {
    label: "AI operations",
    tag: "Team",
    items: [
      { id: "agents", label: "Agentic AI operations", icon: "spark" },
      { id: "workflows", label: "Structured AI workflows", icon: "flow" },
      { id: "team", label: "Manage AI across my team", icon: "team" },
      { id: "compliance", label: "Fully compliant AI", icon: "shield" },
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
  meta: ["Profitable Meta campaigns", "Scale ads profitably"],
  google: ["Win high-intent Google searches", "Scale ads profitably"],
  linkedin: ["Reach decision-makers on LinkedIn", "Build a predictable pipeline"],
  agents: ["Run marketing with AI agents", "Automate weekly reporting"],
  workflows: ["Standardise AI workflows", "Automate weekly reporting"],
  team: ["Roll AI out to the whole team", "Save hours every week"],
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
