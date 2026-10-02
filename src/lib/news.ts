import { tutorials } from "./tutorials.ts";

export const newsCategories = [
  { id: "all", label: "All news" },
  { id: "tutorials", label: "Tutorials" },
  { id: "security-releases", label: "Security Releases" },
] as const;

export type NewsFilter = typeof newsCategories[number]["id"];
export type NewsPost = {
  slug: string;
  title: string;
  description: string;
  category: Exclude<NewsFilter, "all">;
  publishedAt: string;
  cover: string;
  social: string;
};

export const securityRelease: NewsPost = {
  slug: "security-update-october-2026",
  title: "Stronger protection for your connected workspace",
  description: "An October security update on account access, company data, connected credentials and the checks behind our recent platform releases.",
  category: "security-releases",
  publishedAt: "2026-10-02",
  cover: "/features/backgrounds/13-brand-indigo-bloom.webp",
  social: "/features/backgrounds/13-brand-indigo-bloom.webp",
};

type SecuritySection = {
  id: string;
  title: string;
  shortTitle: string;
  introduction: string;
  changes: readonly { label: string; detail: string }[];
  table?: {
    caption: string;
    columns: readonly [string, string];
    rows: readonly (readonly [string, string])[];
  };
  note?: string;
};

export const securitySections: readonly SecuritySection[] = [
  {
    id: "account-access", title: "Authentication and session controls", shortTitle: "Account access",
    introduction: "Account protection combines identity verification, company policy and controls over active sessions.",
    changes: [
      { label: "Authenticator-based MFA", detail: "Time-based one-time passwords (TOTP) add a second verification step at sign-in, with recovery codes for account recovery." },
      { label: "Server-enforced company policy", detail: "Administrators can require MFA for their company. Protected actions check the required authentication level on the server, not just in the interface." },
      { label: "Stronger password validation", detail: "Password checks require at least 12 characters with uppercase, lowercase, numeric and special characters." },
    ],
    table: {
      caption: "Session controls included in these releases",
      columns: ["Control", "What it does"],
      rows: [
        ["Sign out everywhere", "Lets a user revoke their sessions across devices."],
        ["Member offboarding", "Revokes sessions when a member is removed."],
        ["Company session limits", "Lets a company set session restrictions, alongside short-lived access tokens and improved session-renewal handling."],
      ],
    },
    note: "MFA is available and company-configurable. It is not automatically enabled for every workspace.",
  },
  {
    id: "company-data", title: "Authorisation and company-data isolation", shortTitle: "Company data",
    introduction: "Being signed in is not enough to access company resources. The reviewed paths also check the caller’s permissions for the relevant workspace.",
    changes: [
      { label: "Verified caller identity", detail: "Protected application operations authenticate the caller before checking company membership and resource access." },
      { label: "Company-scoped permissions", detail: "Server-side and database-level access controls restrict the reviewed resources to authorised users in the relevant company." },
      { label: "Private file access", detail: "Task attachments are tied to task and company permissions. Temporary agent uploads are private to their uploader." },
      { label: "Restricted internal operations", detail: "Background operations have dedicated access requirements rather than relying on ordinary anonymous or end-user access." },
    ],
    note: "These changes strengthen the reviewed controls. The assessment sampled selected paths; it was not an exhaustive test of every platform operation.",
  },
  {
    id: "connected-services", title: "Credential encryption and integration safeguards", shortTitle: "Connected services",
    introduction: "Connected services need credentials to work. These releases strengthen how those credentials are stored, exposed and used.",
    changes: [
      { label: "Authenticated encryption at rest", detail: "AES-256-GCM protects stored integration credentials covered by this release, including Google Ads, Google Analytics, Meta, LinkedIn and Notion." },
      { label: "Reduced browser exposure", detail: "Sensitive connection credentials are kept out of normal browser-facing responses. Webhook secrets use protected secret storage." },
      { label: "Administrative destination control", detail: "CRM webhook destinations are managed through administrator-only controls." },
      { label: "Outbound address validation", detail: "Destination checks validate resolved addresses before webhook delivery, helping restrict requests to permitted external destinations." },
    ],
  },
  {
    id: "data-lifecycle", title: "Retention, deletion and AI response storage", shortTitle: "Data lifecycle",
    introduction: "Scheduled retention and deletion checks make the lifecycle of operational records more explicit.",
    changes: [
      { label: "Scheduled log clean-up", detail: "A recurring deletion process applies the retention periods below to the covered operational records." },
      { label: "Identity removal on account deletion", detail: "Identifying account details are removed from retained activity logs when an account is deleted." },
      { label: "Company-deletion evidence", detail: "Company deletion includes verification checks, a confirmation email and a Checkgrow-generated PDF certificate describing what was removed." },
      { label: "Provider response-state control", detail: "OpenAI Responses requests are configured not to store response state with the provider." },
    ],
    table: {
      caption: "Retention for the operational records covered by this update",
      columns: ["Record type", "Retention period"],
      rows: [
        ["Activity logs", "12 months, then scheduled deletion."],
        ["Error logs", "12 months, then scheduled deletion."],
        ["AI usage records", "24 months, then scheduled deletion."],
      ],
    },
    note: "These periods do not describe every category of customer data. The provider setting is not a claim of zero retention across every AI service; provider policies and applicable agreements still govern their processing. Our Privacy Policy and Terms have also been updated to describe our practices more accurately.",
  },
  {
    id: "ongoing-checks", title: "Application hardening and security verification", shortTitle: "Ongoing checks",
    introduction: "Preventive checks in the development workflow complement targeted testing and release verification.",
    changes: [
      { label: "Dependency monitoring and audit gates", detail: "Automated checks identify known package advisories and help prevent dependency-security regressions during development." },
      { label: "Static security analysis", detail: "Source-code checks look for security-relevant patterns before changes are released." },
      { label: "Browser security headers", detail: "HSTS, frame restrictions, MIME-sniffing protection, Referrer-Policy and Permissions-Policy strengthen browser-side handling of application responses." },
      { label: "Role and company-boundary testing", detail: "The staging assessment used source review, automated analysis and targeted tests across different user roles and workspaces. Findings informed follow-up changes and regression checks." },
      { label: "Production release verification", detail: "Release records confirm that the changes described here were shipped. Deployment success is not equivalent to an independent penetration test of every production path." },
    ],
  },
];

export const newsPosts: NewsPost[] = [
  securityRelease,
  ...tutorials.map(tutorial => ({
    slug: tutorial.slug, title: tutorial.title, description: tutorial.description,
    category: "tutorials" as const, publishedAt: tutorial.publishedAt,
    cover: tutorial.cover, social: `/tutorials/${tutorial.slug}/social.webp`,
  })),
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const getNewsPost = (slug: string) => newsPosts.find(post => post.slug === slug);
export const newsPath = (slug: string) => `/news/${slug}`;
export const categoryLabel = (id: NewsFilter) => newsCategories.find(category => category.id === id)!.label;
export const filterNews = (posts: NewsPost[], category: NewsFilter) => category === "all" ? posts : posts.filter(post => post.category === category);
