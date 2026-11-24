/* News: the listing page, the article chrome shared by every post
   (success stories, tutorials, the security release), the tutorial video
   player and the security release article. Story and tutorial content
   lives in stories.ts and tutorials.ts. */
export const news = {
  listing: {
    meta: {
      title: "Checkgrow News | Success stories, tutorials and security releases",
      description: "Success stories, practical tutorials and security updates from Checkgrow. See how teams grow with the platform and the workflows behind it.",
    },
    /* the collection's name: structured data and the share image's alt text */
    name: "Checkgrow News",
    heading: "News",
    /* two lines under the heading */
    introLead: "Inside Checkgrow.",
    introBody: "Practical guides, platform progress and the work behind your workspace.",
    filterLabel: "Filter news by category",
    count: { one: "{n} article", other: "{n} articles" },
  },
  article: {
    metaTitle: "{title} | Checkgrow News",
    breadcrumbLabel: "Breadcrumb",
    /* structured-data breadcrumb trail */
    breadcrumbHome: "Home",
    breadcrumbNews: "News",
    allNews: "All news",
    allStories: "All success stories",
    /* {detail}: the story's kicker, the tutorial's video count or securityByline */
    byline: "By Checkgrow · {detail}",
    guidedVideos: { one: "{n} guided video", other: "{n} guided videos" },
    securityByline: "Security update",
    contentsLabel: "On this page",
    faqLink: "FAQ",
    bookDemo: "Book a demo",
  },
  tutorial: {
    contents: { shortVideo: "Short walkthrough", steps: "Step by step", fullVideo: "Full walkthrough" },
    beforeYouBegin: "Before you begin.",
    stepsTitle: "The workflow, step by step",
    recordingNote: "Recorded in the Drooms workspace. Your screens may look a little different as Checkgrow evolves.",
    takeawayTitle: "Build on what you learn",
  },
  /* the tutorial video player; {title} is the video's title with a
     lower-case first letter, as it sits mid-sentence */
  video: {
    /* the caption files are English in every language */
    captionsLabel: "English (auto-generated)",
    unsupported: "Your browser does not support embedded video. Use the video link below.",
    play: "Play {title}",
    playVideo: "Play video",
    error: { before: "Playback could not start. Try the player controls, or ", link: "open the video directly", after: "." },
    watch: "Watch {title}",
  },
  story: {
    takeaways: "Key takeaways",
    about: "About {name}",
    featuresUsed: "Checkgrow features used",
    /* read by screen readers between a section's label and its title */
    labelSeparator: ": ",
    faq: "Frequently asked questions",
  },
  categoryLabels: {
    all: "All news",
    "success-stories": "Success Stories",
    tutorials: "Tutorials",
    "security-releases": "Security Releases",
  },
  readLink: {
    "success-stories": "Read success story",
    tutorials: "Watch tutorial",
    "security-releases": "Read security update",
  },
  security: {
    title: "Stronger protection for your connected workspace",
    description: "An October security update on account access, company data, connected credentials and the checks behind our recent platform releases.",
    intro: "Your workspace connects company knowledge, files and business tools. This update explains the security controls strengthened in our recent releases, what each one does and the evidence behind it.",
    summary: {
      title: "This update at a glance",
      /* followed by the article's publication date */
      publishedLabel: "Published",
      items: [
        { label: "Release period covered", value: "28 September to 1 October 2026" },
        { label: "Evidence basis", value: "Internal security review, targeted staging tests and production release records" },
        { label: "Purpose", value: "A public overview for customers and proof-of-concept security reviews" },
      ],
    },
    contents: { scope: "Assessment scope", review: "Your security review" },
    scope: {
      title: "What this assessment summary covers",
      items: [
        { label: "Author and evidence.", detail: "This is a Checkgrow-authored summary of internal security work, targeted tests and production release records, current to the period stated above." },
        { label: "Assessment scope.", detail: "The underlying assessment reviewed staging on 28 September 2026. It sampled selected controls; production penetration testing was outside its scope." },
        { label: "Assurance limits.", detail: "This is not an independent penetration-test report, a third-party attestation or a compliance certification. It does not establish SOC 2 or HIPAA certification or guarantee that every vulnerability has been eliminated." },
        { label: "Responsible disclosure.", detail: "This overview describes implemented protections without exposing detailed findings, internal configuration or operational information." },
      ],
    },
    contact: {
      title: "Planning a security review or POC?",
      body: "Share your onboarding checklist and the assurance your organisation needs. Our team can clarify the controls relevant to your use case and discuss the scope and availability of supporting evidence. If you require an independent assessment, ask us to confirm that requirement separately.",
      link: "Discuss your security requirements",
    },
    sections: [
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
    ],
  },
} as const;
