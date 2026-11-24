import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { fmt } from "@/i18n/format";
import { getT } from "@/i18n/server";

/* the integrations in display order; what each one brings is copy
   (`home` dictionary: integrations.roles, keyed by id) */
export const integrations = [
  {
    id: "google-analytics",
    name: "Google Analytics",
    icon: "/brand-icons/google-analytics.svg",
  },
  {
    id: "google-ads",
    name: "Google Ads",
    icon: "/brand-icons/google-ads.svg",
  },
  {
    id: "meta-ads",
    // i18n-allow: brand name
    name: "Meta Ads",
    icon: "/brand-icons/meta-ads.svg",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "/brand-icons/linkedin.svg",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "/brand-icons/instagram.svg",
  },
  {
    id: "n8n",
    name: "N8N",
    icon: "/brand-icons/n8n.svg",
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: "/brand-icons/tiktok.svg",
  },
  {
    id: "notion",
    name: "Notion",
    icon: "/brand-icons/notion.svg",
  },
  {
    id: "slack",
    name: "Slack",
    icon: "/brand-icons/slack.svg",
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: "/brand-icons/supabase.svg",
  },
  {
    id: "webhook",
    name: "Webhook",
    icon: "/brand-icons/webhook.svg",
  },
] as const;

export function Integrations() {
  const t = getT("home").integrations;
  return (
    <section className="py-24 md:py-32" id="integrations">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="text-label flex items-center gap-2.5 text-muted">
            {t.label}
          </p>
          <h2 className="text-h1 mt-6 text-balance">
            {t.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {t.body}
          </p>
        </Reveal>
        <RevealStagger className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3" gap={0.06}>
          {integrations.map((i) => (
            <RevealItem key={i.name}>
              <article className="flex h-full flex-col items-start gap-3 rounded-card bg-raised p-4 ring-1 ring-line sm:flex-row sm:gap-4 sm:p-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={i.icon}
                  alt={fmt(t.logoAlt, { name: i.name })}
                  width={36}
                  height={36}
                  loading="lazy"
                  className="size-9 shrink-0"
                />
                <div>
                  <h3 className="text-sm font-semibold">{i.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted max-sm:hidden">
                    {t.roles[i.id]}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal delay={0.1}>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            {t.research}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
