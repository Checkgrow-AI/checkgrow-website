/* Markdown versions of the key pages, for AI assistants and answer engines.
   Every page is also served as markdown at its own URL plus ".md"
   (/features.md, /use-cases/marketing-operations.md, /index.md for the
   homepage), and to any request that sends Accept: text/markdown (see the
   rewrites in next.config.ts). /llms.txt is the short map of these pages and
   /llms-full.txt is all of them in one file.

   Everything is built from the same data the pages render, so the markdown
   cannot drift from the site. */

import { features } from "./features";
import { useCases, pathToUseCase } from "./useCases";
import { successStories, type StoryBlock } from "./successStories";
import { tutorials, videoDuration } from "./tutorials";
import { newsPosts, newsPath, securityRelease, securitySections, categoryLabel } from "./news";
import { ANNUAL_DISCOUNT, comparisonRows, growthTeam, plans, SALES_CALENDAR } from "./pricing";
import { differentiators } from "./differentiators";
import { testimonials } from "./testimonials";
import { problemTools } from "./problemCards";
import { shiftBenefits } from "./shiftStory";
import { faqItems, SITE_URL } from "./seo";
import { integrations } from "@/components/sections/Integrations";

export type MarkdownPage = {
  /* the HTML page this mirrors, e.g. "/features" ("/" for the homepage) */
  path: string;
  title: string;
  description: string;
  body: () => string;
};

const url = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;
/* the markdown URL of a page: /index.md for the homepage, else path + .md */
export const markdownPath = (path: string) => (path === "/" ? "/index.md" : `${path}.md`);
/* link labels drop a headline's closing full stop */
const label = (text: string) => text.replace(/\.$/, "");
const mdLink = (text: string, path: string) => `[${label(text)}](${url(markdownPath(path))})`;

const longDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T12:00:00Z`));
const euro = (value: number) =>
  `€${new Intl.NumberFormat("en-GB", { minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 2 }).format(value)}`;
const list = (items: readonly string[]) => items.map((item) => `- ${item}`).join("\n");
const join = (...parts: (string | false | null | undefined)[]) => parts.filter(Boolean).join("\n\n");
const faq = (items: readonly { q: string; a: string }[]) => items.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n");

const BOOK_DEMO = `${SITE_URL}/book-a-demo`;

const contact = () =>
  join(
    "## Contact",
    list([
      `Book a demo: ${BOOK_DEMO}`,
      `Talk to our team (Growth and Enterprise plans): ${SALES_CALENDAR}`,
      "Email: bruno@checkgrow.com",
      `Trustpilot reviews: https://www.trustpilot.com/review/checkgrow.com`,
    ]),
  );

/* ---------- Pricing ---------- */

function pricingBody() {
  const plan = (p: (typeof plans)[number]) =>
    join(
      `### ${p.name}: ${p.monthly === null ? "custom pricing" : `${euro(p.monthly)} per month`}`,
      `${p.audience}. ${p.description}`,
      p.monthly !== null && `Billed annually: ${euro(p.monthly * (1 - ANNUAL_DISCOUNT))} per month (${euro(p.monthly * 12 * (1 - ANNUAL_DISCOUNT))} a year).`,
      list(p.specs.map((s) => `${s.label}: ${s.value}${s.note ? ` (${s.note})` : ""}`)),
      `Service: ${p.service.title}.${p.service.body ? ` ${p.service.body}` : ""}${p.service.team ? ` Roles: ${growthTeam.map((m) => m.role).join(", ")}.` : ""}`,
      `${p.inheritance}:\n\n${list(p.includes)}`,
      `Get started: ${p.cta.label} (${p.cta.href.startsWith("/") ? url(p.cta.href) : p.cta.href}). ${p.ctaNote}.`,
    );
  return join(
    "Four plans, from one brand to a growth team and a platform built around your organisation. Prices exclude VAT; annual billing saves 10%. Growth Credits can be topped up anytime on any plan.",
    "## Plans",
    ...plans.map(plan),
    "## What Checkgrow replaces",
    "A typical growth stack spans eleven subscriptions, about €1,199 per month before seats and overages. Third-party tools are category examples at typical list prices.",
    [
      "| Category | Typical tools | Typical price | In Checkgrow |",
      "| --- | --- | --- | --- |",
      ...comparisonRows.map((r) => `| ${r.cat} | ${r.tools} | ${r.price} | ${r.cg}: ${r.cgNote} |`),
    ].join("\n"),
  );
}

/* ---------- Homepage ---------- */

function homeBody() {
  return join(
    "The go-to-market engine that learns your product, buyers, market and channels. Growth shouldn't depend on who's in the room. Checkgrow keeps everything your company knows in one growth operating system: learning, improving, and working for every team. It turns knowledge into customers and recognition.",
    "Positioning: AI Native Growth Marketing. Built for CMOs, enterprise marketing teams, marketing and sales operations, growth and analytics teams, and founders. Works across OpenAI, Google Gemini, Anthropic Claude and Perplexity, with no model lock-in. Rated 4.4 (Excellent) on Trustpilot from 12 reviews.",
    "## The problem: every marketing tool starts from zero",
    "Five tools means explaining your business five times, then again for every new campaign, hire and AI prompt. Nothing carries forward. Nothing remembers what actually worked. You shouldn't need a data analyst to read your own funnel.",
    problemTools.map((t) => `- **${t.name}** (${t.state}): ${t.bullets.join("; ")}.`).join("\n"),
    "## What changes with Checkgrow",
    shiftBenefits.map((b) => `- **${b.title}** ${b.description} ${b.label}: ${b.stat} ${b.body}`).join("\n"),
    "## Why Checkgrow: not another AI tool",
    differentiators.map((d) => `### ${d.label}\n\n**${d.title}** ${d.body}`).join("\n\n"),
    "## Features in practice",
    features.map((f) => `- **${f.name}: ${f.title}** ${f.scenario}`).join("\n"),
    `Every feature, step by step: ${mdLink("Features", "/features")}`,
    "## What customers say",
    testimonials
      .map((t) => `> ${t.quote}\n>\n> ${t.person}, ${t.attribution ?? `${t.role}, ${t.company}`}${t.metrics?.length ? ` (${t.metrics.join(", ")})` : ""}`)
      .join("\n\n"),
    `Customer case studies: ${mdLink("Success stories", "/news")}`,
    "## Use cases",
    useCases.map((u) => `- ${mdLink(u.title, pathToUseCase(u.slug))}: ${u.description}`).join("\n"),
    "## Integrations",
    list(integrations.map((i) => `${i.name}: ${i.role}`)),
    "## Who it's for",
    list([
      "Founders and CMOs: set direction once. Define the brand, the offer and the target buyer a single time; everything produced downstream stays on message.",
      "Marketing and sales ops: execute at real speed. Specialist agents produce content, ads, outreach and creative that already know your product, audience and tone.",
      "Growth and analytics: close the loop. See what converted and why, with fixes ranked and routed into the next campaign as tracked work.",
      "Enterprises: custom AI systems that drive growth, including self-hosted and custom-developed setups that fit your stack, security requirements and data sovereignty.",
    ]),
    "## Pricing",
    plans.map((p) => `- **${p.name}** (${p.monthly === null ? "custom" : `${euro(p.monthly)}/month`}): ${p.description}`).join("\n"),
    `Full plan details: ${mdLink("Pricing", "/pricing")}`,
    "## FAQ",
    faq(faqItems),
    contact(),
  );
}

/* ---------- Features ---------- */

function featuresBody() {
  return join(
    "Every Checkgrow feature in three steps. All features read from one Knowledge Centre, so each one already knows your brand, products and buyers.",
    features
      .map((f) =>
        join(
          `## ${f.name}: ${f.title}`,
          f.scenario,
          f.body,
          list(f.points),
          f.steps.map((s, i) => `${i + 1}. **${s.label}.** ${s.caption}`).join("\n"),
        ),
      )
      .join("\n\n"),
    contact(),
  );
}

/* ---------- Use cases ---------- */

function useCasesBody() {
  return join(
    "The jobs marketing teams bring to Checkgrow, end to end: the problem, four steps inside the platform, the outcome and an honest FAQ that also says what Checkgrow does not do.",
    useCases.map((u) => `- ${mdLink(u.title, pathToUseCase(u.slug))} (${u.feature}) ${u.description}`).join("\n"),
  );
}

function caseBody(u: (typeof useCases)[number]) {
  const proof = u.proof.filter((p) => successStories.some((s) => s.slug === p.slug));
  const related = u.related.map((slug) => useCases.find((r) => r.slug === slug)).filter((r) => r !== undefined);
  return join(
    `Use case: ${u.feature}. Updated ${longDate(u.updatedAt)}.`,
    u.lede,
    "## In short",
    list(u.inShort),
    `Built for: ${u.builtFor.join(", ")}. ${u.worksWithLabel}: ${u.worksWith.map((w) => w.name).join(", ")}.`,
    `## The problem: ${u.problem.title}`,
    u.problem.body,
    `> ${u.problem.quote.text}\n>\n> ${u.problem.quote.author}`,
    "## How it works in Checkgrow",
    u.steps.map((s, i) => `### ${i + 1}. ${s.title}\n\n${s.body}`).join("\n\n"),
    `### ${u.see.title}\n\n${u.see.body}`,
    "## The outcome",
    u.outcomes.map((o) => `- **${o.title}:** ${o.body}`).join("\n"),
    `> ${u.testimonial.text}\n>\n> ${u.testimonial.author}`,
    proof.length > 0 && join("## Proof from customers", proof.map((p) => `- ${mdLink(p.company, newsPath(p.slug))}: ${p.line}`).join("\n")),
    "## FAQ",
    faq(u.faq),
    related.length > 0 && join("## Related use cases", related.map((r) => `- ${mdLink(r.title, pathToUseCase(r.slug))}`).join("\n")),
    contact(),
  );
}

/* ---------- News ---------- */

function newsBody() {
  return join(
    "Success stories, practical tutorials and security releases from Checkgrow.",
    newsPosts.map((p) => `- ${mdLink(p.title, newsPath(p.slug))} (${categoryLabel(p.category)}, ${longDate(p.publishedAt)}) ${p.description}`).join("\n"),
  );
}

function storyBlock(block: StoryBlock): string {
  switch (block.type) {
    case "p":
      return block.text;
    case "callout":
      return `> ${block.text}\n>\n> ${block.cite}`;
    case "stats":
      return list(block.items.map((s) => `**${s.value}** ${s.label}`));
    case "figure":
      return join(
        `![${block.image.alt}](${url(block.image.src)})`,
        block.variant === "card" && list(block.stats.map((s) => `**${s.value}** ${s.label}`)),
        `*${block.caption}*`,
      );
    case "gallery":
      return join(...block.images.map((image) => `![${image.alt}](${url(image.src)})`), `*${block.caption}*`);
  }
}

function storyBody(s: (typeof successStories)[number]) {
  return join(
    `Success story · ${s.kicker} · Published ${longDate(s.publishedAt)}`,
    list(s.heroStats.map((stat) => `**${stat.value}** ${stat.label}`)),
    !!s.takeaways?.length && join("## Key takeaways", list(s.takeaways)),
    `## About ${s.company}`,
    s.about.summary,
    list(s.about.facts.map((f) => `${f.label}: ${f.value}`)),
    `Checkgrow features used: ${s.features.join(", ")}.`,
    s.lead,
    ...s.sections.map((section) => join(`## ${section.label}: ${section.title}`, ...section.blocks.map(storyBlock))),
    s.statement && `> ${s.statement.text}\n>\n> ${s.statement.cite}`,
    s.faq.length > 0 && join("## FAQ", faq(s.faq)),
    s.footnote && `*${s.footnote}*`,
    contact(),
  );
}

function tutorialBody(t: (typeof tutorials)[number]) {
  return join(
    `Tutorial · ${t.category} · Published ${longDate(t.publishedAt)}`,
    t.introduction,
    `**Before you start:** ${t.prerequisites}`,
    "## Videos",
    list(t.videos.map((v) => `[${v.title}](${url(v.src)}) (${videoDuration(v.durationSeconds)}): ${v.description}`)),
    "## Step by step",
    t.steps.map((s, i) => `### ${i + 1}. ${s.title}\n\n${s.body}`).join("\n\n"),
    "## Takeaway",
    t.takeaway,
    contact(),
  );
}

function securityBody() {
  return join(
    `Security release · Published ${longDate(securityRelease.publishedAt)}`,
    ...securitySections.map((section) =>
      join(
        `## ${section.title}`,
        section.introduction,
        list(section.changes.map((c) => `**${c.label}.** ${c.detail}`)),
        section.table &&
          join(
            `*${section.table.caption}*`,
            [`| ${section.table.columns.join(" | ")} |`, "| --- | --- |", ...section.table.rows.map((r) => `| ${r.join(" | ")} |`)].join("\n"),
          ),
        section.note && `*${section.note}*`,
      ),
    ),
    "*Based on internal review and release evidence; not an independent penetration-test attestation or compliance certification.*",
  );
}

/* ---------- Registry ---------- */

export const markdownPages: MarkdownPage[] = [
  {
    path: "/",
    title: "Checkgrow: AI Native Growth Marketing",
    description: "The go-to-market engine that learns your product, buyers, market and channels: one company brain for strategy, content, campaigns, sales intelligence and reporting.",
    body: homeBody,
  },
  {
    path: "/pricing",
    title: "Checkgrow pricing",
    description: "Business €499/month for one brand, Agency €997/month for unlimited brands, Growth €4,997/month with a dedicated growth team, and custom Enterprise plans.",
    body: pricingBody,
  },
  {
    path: "/features",
    title: "Checkgrow features",
    description: "Every platform feature in three steps: Knowledge Centre, Insights, Campaigns, Creative Studio, Content, Social Media, Competitors, Sales and the AI Assistant.",
    body: featuresBody,
  },
  {
    path: "/use-cases",
    title: "Checkgrow use cases",
    description: "How marketing teams run marketing operations, brand-aware AI and board reporting with Checkgrow.",
    body: useCasesBody,
  },
  ...useCases.map((u) => ({ path: pathToUseCase(u.slug), title: u.title, description: u.description, body: () => caseBody(u) })),
  {
    path: "/news",
    title: "Checkgrow news",
    description: "Success stories, practical tutorials and security releases from Checkgrow.",
    body: newsBody,
  },
  ...successStories.map((s) => ({ path: newsPath(s.slug), title: s.title, description: s.description, body: () => storyBody(s) })),
  ...tutorials.map((t) => ({ path: newsPath(t.slug), title: t.title, description: t.description, body: () => tutorialBody(t) })),
  { path: newsPath(securityRelease.slug), title: securityRelease.title, description: securityRelease.description, body: securityBody },
];

export const getMarkdownPage = (path: string) => markdownPages.find((page) => page.path === path);

/* The full markdown document for one page */
export function renderMarkdown(page: MarkdownPage) {
  const html = page.path === "/pricing" ? `${SITE_URL}/#pricing` : url(page.path);
  return `# ${page.title}\n\n> ${page.description}\n\nSource: ${html}\n\n${page.body()}\n`;
}

/* /llms.txt: the short map (https://llmstxt.org) */
export function renderLlmsTxt() {
  const link = (page: MarkdownPage) => `- ${mdLink(page.title, page.path)}: ${page.description}`;
  const byPrefix = (prefix: string) => markdownPages.filter((p) => p.path.startsWith(prefix) && p.path !== prefix.replace(/\/$/, ""));
  return join(
    "# Checkgrow",
    "> Checkgrow is an AI native growth marketing platform: a go-to-market engine that learns your product, buyers, market and channels. One company brain, structured for marketing and growth, feeds strategy, content, campaigns, sales intelligence and reporting, and every result feeds back in. Plans from €499 per month.",
    list([
      "Built for CMOs, enterprise marketing teams, marketing and sales operations, growth teams, agencies and founders.",
      "Plans: Business €499/month (1 brand), Agency €997/month (unlimited brands), Growth €4,997/month (dedicated growth team, up to 3 ad accounts), Enterprise custom (white-label, self-hosted). Prices exclude VAT.",
      "Integrates GA4, Google Ads, Meta Ads, Instagram, LinkedIn, Notion, n8n and webhooks; works across OpenAI, Google Gemini, Anthropic Claude and Perplexity with no model lock-in.",
      "Customers own their data; enterprises can self-host for data sovereignty.",
      "Every link below is markdown: each page is available at its URL plus .md (/index.md for the homepage), or by requesting the page with Accept: text/markdown.",
    ]),
    "## Key pages",
    ["/", "/pricing", "/features", "/use-cases", "/news"].map((p) => link(getMarkdownPage(p)!)).join("\n"),
    "## Use cases",
    byPrefix("/use-cases/").map(link).join("\n"),
    "## Success stories",
    successStories.map((s) => link(getMarkdownPage(newsPath(s.slug))!)).join("\n"),
    "## Tutorials and security",
    [...tutorials.map((t) => newsPath(t.slug)), newsPath(securityRelease.slug)].map((p) => link(getMarkdownPage(p)!)).join("\n"),
    "## Optional",
    list([
      `[Full site content in one file](${SITE_URL}/llms-full.txt): every page above in markdown.`,
      `[Book a demo](${BOOK_DEMO})`,
      `[Sitemap](${SITE_URL}/sitemap.xml)`,
    ]),
  ) + "\n";
}

/* /llms-full.txt: every page, in order, in one document */
export function renderLlmsFull() {
  return markdownPages.map(renderMarkdown).join("\n---\n\n");
}
