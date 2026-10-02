export type TutorialVideo = {
  id: string;
  title: string;
  description: string;
  src: string;
  type: "video/mp4" | "video/webm";
  poster: string;
  captions?: string;
  durationSeconds: number;
  width: number;
  height: number;
};

export type Tutorial = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  cover: string;
  introduction: string;
  prerequisites: string;
  steps: { id: string; title: string; body: string }[];
  videos: [TutorialVideo, TutorialVideo];
  takeaway: string;
};

export const tutorials: Tutorial[] = [
  {
    slug: "sales-outreach",
    title: "From company research to LinkedIn outreach",
    description: "Learn how to find relevant companies, identify decision-makers and prepare personalised outreach with Checkgrow’s Sales suite.",
    category: "Sales",
    publishedAt: "2026-10-01",
    cover: "/tutorials/sales-outreach/cover.webp",
    introduction: "Good outreach starts before the first message. In this tutorial, follow a real workflow in the Drooms workspace: use your company knowledge to find relevant accounts, assign them to your team and shape messages around the people you want to reach.",
    prerequisites: "Review your ideal customer profiles in the Knowledge Centre and connect each sales representative’s LinkedIn account in Integrations.",
    steps: [
      {
        id: "define-your-audience",
        title: "Start with the right audience",
        body: "Open your ideal customer profiles (ICPs) in the Knowledge Centre. Check the industries, regions, company size and target job titles. These details guide which companies and decision-makers Checkgrow looks for, so get them right before you build a list.",
      },
      {
        id: "find-and-track",
        title: "Find and track relevant companies",
        body: "In Targets, open Search and choose an ICP. Review the company information, website and LinkedIn profile, then select the accounts you want and choose Track. Use the tracked list to filter accounts and open a company’s research and decision-makers.",
      },
      {
        id: "assign-your-team",
        title: "Give each representative a focus",
        body: "Use Mission Control to configure auto-assignment by industry and region. Open a tracked company to review its decision-makers. If a role is missing, adjust the positions and use Find people. Your representatives can then work from their assigned targets in Outreach.",
      },
      {
        id: "teach-the-brain",
        title: "Teach the Brain how you communicate",
        body: "Open the representative’s profile in Outreach. Add useful lessons and examples of successful conversations, then set the personality, language and style. Try comments, first messages and follow-ups in the Message playground. These are practice drafts: edit them and give feedback to show the Brain what sounds right.",
      },
      {
        id: "review-outreach",
        title: "Review your outreach before it goes out",
        body: "Check your connection limits, warm-outreach settings and approval rules. The recording shows a sequence from connection request to relevant post comment and then a message. Keep approval on while you refine your approach. In the live outreach queue, approving a comment or message sends it, unlike the practice drafts in the playground.",
      },
      {
        id: "daily-routine",
        title: "Make review part of the daily routine",
        body: "Return to Outreach to review drafts, edit the wording or give feedback when a message misses the mark. Check target activity to see what has happened, and use the Sales Force overview to see the team’s assigned targets and activity. Keep teaching the Brain as you learn what works for your audience.",
      },
    ],
    videos: [
      {
        id: "quick-walkthrough",
        title: "The short walkthrough",
        description: "See the complete flow at a glance: ICPs, company tracking, the Brain and your daily outreach review.",
        src: "/tutorials/sales-outreach/sales-overview.mp4",
        type: "video/mp4",
        poster: "/tutorials/sales-outreach/overview-poster.webp",
        captions: "/tutorials/sales-outreach/overview.en.vtt",
        durationSeconds: 396,
        width: 1280,
        height: 746,
      },
      {
        id: "full-walkthrough",
        title: "The full walkthrough",
        description: "Follow the longer screen-by-screen explanation, with more time spent on setup, targeting and outreach settings.",
        src: "/tutorials/sales-outreach/sales-full.webm",
        type: "video/webm",
        poster: "/tutorials/sales-outreach/full-poster.webp",
        captions: "/tutorials/sales-outreach/full.en.vtt",
        durationSeconds: 857,
        width: 1280,
        height: 746,
      },
    ],
    takeaway: "Define the audience once, give each representative a clear focus and review the message before you send it. The aim is a repeatable sales workflow grounded in your company’s knowledge, not a fresh brief for every conversation.",
  },
];

export const getTutorial = (slug: string) => tutorials.find(tutorial => tutorial.slug === slug);
export const tutorialPath = (slug: string) => `/news/${slug}`;
export function videoDuration(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
export function tutorialDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}
