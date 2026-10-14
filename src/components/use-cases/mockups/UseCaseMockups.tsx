/* The use case mockups, one per section. Each is a 1200×900 Board in the
   Feature Illustrations style, modelled on the real platform screens.
   Figures are illustrative, from a Checkgrow demo workspace; no client data. */

import type { ReactNode } from "react";
import type { MockupKey } from "@/lib/useCases";
import { Avatar, Board, Btn, Card, Chip, Col, Dot, Float, Head, ICON, Logo, LogoBox, Progress, Row, s, Spark, Toggle } from "./kit";

const GA = ICON + "google-analytics.svg";
const META = ICON + "meta.webp";
const GADS = ICON + "google_ads_ai.svg";
const IG = ICON + "Instagram.svg";
const LI = ICON + "LinkedIN.svg";
const NOTION = ICON + "notion_ai_integration.svg";
const SLACK = ICON + "Slack.svg";
const TIKTOK = ICON + "tiktok.webp";
const BGI = (n: string) => `/features/backgrounds/${n}.webp`;

/* ---------------- Marketing operations ---------------- */

function MoCampaigns() {
  const rows: { name: string; period: string; ch: string[]; creatives: number; budget: string; spent: number; status: "Active" | "Paused" }[] = [
    { name: "Q4 Enterprise Launch", period: "Oct 1 – Dec 31", ch: [LI, META, GADS], creatives: 24, budget: "€24,000", spent: 41, status: "Active" },
    { name: "Growth Brain webinar", period: "Oct 6 – Oct 30", ch: [LI, META], creatives: 12, budget: "€6,500", spent: 68, status: "Active" },
    { name: "Agency partner programme", period: "Sep 15 – Nov 15", ch: [GADS, LI], creatives: 9, budget: "€8,000", spent: 55, status: "Active" },
    { name: "Retargeting · trial users", period: "Paused Oct 2", ch: [META, IG], creatives: 6, budget: "€3,000", spent: 92, status: "Paused" },
  ];
  return (
    <Board>
      <Card style={{ width: 840, gap: 20, display: "flex", flexDirection: "column", marginTop: -60 }} layer="list">
        <Head eyebrow="Campaigns" title="AI-powered campaign briefings" right={<Btn tone="dark">+ Create Campaign</Btn>} />
        <Row gap={8} layer="filters"><Chip tone="dark">All · 6</Chip><Chip>Active · 4</Chip><Chip>Paused · 2</Chip><Chip tone="outline">This quarter</Chip></Row>
        <table className={s.table}>
          <thead><tr><th>Campaign</th><th>Channels</th><th>Creatives</th><th style={{ width: 190 }}>Budget</th><th>Status</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} data-layer="row">
                <td><Col gap={2}><span className={s.m}>{r.name}</span><span className={`${s.small} ${s.muted}`}>{r.period}</span></Col></td>
                <td><Row gap={6}>{r.ch.map((c) => <Logo key={c} src={c} />)}</Row></td>
                <td className={s.muted}>{r.creatives}</td>
                <td><Col gap={6}><Row gap={6} className={s.between}><span className={s.m}>{r.budget}</span><span className={`${s.xs} ${s.muted}`}>{r.spent}% spent</span></Row><Progress value={r.spent} color={r.status === "Paused" ? "#CFC3D9" : undefined} /></Col></td>
                <td><Chip tone={r.status === "Active" ? "success" : "neutral"}>{r.status}</Chip></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Float layer="live" style={{ right: 150, bottom: 150, width: 290 }}>
        <Col gap={10}>
          <Row gap={8}><Dot color="#1F7A4D" /><span className={`${s.xs} ${s.muted}`}>LIVE · Q4 Enterprise Launch</span></Row>
          <Row gap={14} className={s.between}>
            <Col gap={2}><span className={s.xs + " " + s.muted}>Spend</span><span className={s.h3}>€9.8k</span></Col>
            <Col gap={2}><span className={s.xs + " " + s.muted}>Leads</span><span className={s.h3}>212</span></Col>
            <Col gap={2}><span className={s.xs + " " + s.muted}>CPA</span><span className={s.h3}>€46</span></Col>
          </Row>
          <span className={`${s.xs} ${s.up}`}>€12 under target</span>
        </Col>
      </Float>
    </Board>
  );
}

function Tile({ img, title, status, tone }: { img: string; title: string; status: string; tone: "success" | "warn" | "neutral" }) {
  return (
    <div data-layer="tile" className={s.inner} style={{ padding: 10, width: 190, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ position: "relative", height: 148, borderRadius: 10, overflow: "hidden", background: `url(${img}) center/cover` }}>
        <span style={{ position: "absolute", left: 10, top: 10 }}><Chip tone={tone}>{status}</Chip></span>
        <span style={{ position: "absolute", left: 12, right: 12, bottom: 12, color: "#fff", fontSize: 15, fontWeight: 600, lineHeight: 1.2, textShadow: "0 2px 12px rgba(0,0,0,.35)" }}>{title}</span>
      </div>
      <Row gap={6} className={s.between}><Row gap={6}><Logo src={META} size={16} /><span className={s.xs + " " + s.muted}>Feed · 4:5</span></Row><span className={s.xs + " " + s.muted}>3 copies</span></Row>
    </div>
  );
}

function MoCreatives() {
  return (
    <Board>
      <Card style={{ width: 880, display: "flex", flexDirection: "column", gap: 18 }} layer="panel">
        <Head eyebrow="Campaign · Creatives" title="Q4 Enterprise Launch" right={<Row gap={8}><Chip tone="outline">English</Chip><Btn>Generate visuals</Btn><Btn tone="primary">New Creative</Btn></Row>} />
        <Row gap={6} layer="tabs">
          <span className={`${s.small} ${s.muted}`}>Channels</span><Chip icon={GADS}>Google Ads</Chip><Chip tone="dark" icon={META}>Meta</Chip><Chip icon={LI}>LinkedIn</Chip><span className={s.grow} /><span className={`${s.small} ${s.muted}`}>24 creatives</span>
        </Row>
        <Col gap={10}>
          <Row gap={8}><Chip tone="primary">Awareness</Chip><span className={`${s.small} ${s.muted}`}>Reach new buyers</span></Row>
          <Row gap={14}>
            <Tile img={BGI("05-cobalt-sky")} title="Your growth brain, in one place" status="Approved" tone="success" />
            <Tile img={BGI("02-apricot-blush")} title="Plan, launch and report. Together." status="Approved" tone="success" />
            <Tile img={BGI("08-deep-teal-seafoam")} title="Five tools became one" status="Content" tone="warn" />
            <Tile img={BGI("10-ice-rose-lavender")} title="Free onboarding this month" status="Design" tone="neutral" />
          </Row>
        </Col>
        <Row gap={8} layer="next"><Chip tone="primary">Action</Chip><span className={`${s.small} ${s.muted}`}>6 creatives · Book a demo</span><span className={s.grow} /><span className={`${s.small} ${s.accent}`}>Open stage →</span></Row>
      </Card>
    </Board>
  );
}

function MoCalendar() {
  /* October 2026 starts on a Thursday: 5 weeks, Monday first */
  const first = -2;
  const weeks = Array.from({ length: 5 }, (_, w) => Array.from({ length: 7 }, (_, d) => first + w * 7 + d));
  const bars: { label: string; from: number; to: number; row: number; color: string; ink: string }[] = [
    { label: "Q4 Enterprise Launch", from: 1, to: 31, row: 0, color: "#6373FF", ink: "#fff" },
    { label: "Growth Brain webinar", from: 6, to: 30, row: 1, color: "#9BA6FF", ink: "#fff" },
    { label: "Agency partner programme", from: 15, to: 31, row: 2, color: "#CFC3D9", ink: "#2A2722" },
  ];
  const items: Record<number, { t: string; kind: "post" | "task" }> = {
    2: { t: "Teaser reel", kind: "post" }, 8: { t: "Review creatives", kind: "task" }, 9: { t: "Carousel · 4 offers", kind: "post" },
    14: { t: "Webinar invite", kind: "post" }, 17: { t: "Update ICPs", kind: "task" }, 21: { t: "Customer story", kind: "post" },
    23: { t: "Board report", kind: "task" }, 28: { t: "Launch post", kind: "post" },
  };
  const label = (n: number) => (n < 1 ? 30 + n : n > 31 ? n - 31 : n);
  return (
    <Board>
      <Card style={{ width: 880, display: "flex", flexDirection: "column", gap: 14 }} layer="cal">
        <Head eyebrow="Calendar" title="October 2026" right={<Row gap={6}><Chip tone="outline">Croatia</Chip><Chip tone="dark">Month</Chip><Chip>Week</Chip><Chip>List</Chip></Row>} />
        <Row gap={8} layer="legend" className={s.small}><Chip><Dot color="#6373FF" />Campaigns 3</Chip><Chip><Dot color="#22A06B" />Objectives 1</Chip><Chip><Dot color="#14B8A6" />Influencers 0</Chip><Chip><Dot color="#E1306C" />Social Media 6</Chip><Chip><Dot color="#F59E0B" />Tasks 3</Chip><Chip><Dot color="#8D8A84" />Moments 1</Chip></Row>
        <div style={{ border: "1px solid #ECECEA", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", background: "#F7F7F5", borderBottom: "1px solid #ECECEA" }}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => <div key={d} className={`${s.xs} ${s.muted}`} style={{ padding: "8px 10px" }}>{d}</div>)}
          </div>
          {weeks.map((week, w) => (
            <div key={w} style={{ position: "relative", height: 88, borderTop: w ? "1px solid #ECECEA" : 0 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", height: "100%" }}>
                {week.map((n, d) => (
                  <div key={d} style={{ borderLeft: d ? "1px solid #ECECEA" : 0, padding: "6px 8px", position: "relative" }}>
                    <span className={s.xs} style={{ color: n < 1 || n > 31 ? "#C4C2BC" : n === 14 ? "#fff" : "#5E5C57", background: n === 14 ? "#6373FF" : undefined, borderRadius: 999, padding: n === 14 ? "1px 6px" : 0 }}>{label(n)}</span>
                    {items[n] && (
                      <div data-layer="item" className={s.xs} style={{ position: "absolute", left: 6, right: 6, bottom: 4, display: "flex", alignItems: "center", gap: 4, background: items[n].kind === "post" ? "#FBEFF4" : "#F2F2EF", borderRadius: 6, padding: "2px 5px", whiteSpace: "nowrap", overflow: "hidden" }}>
                        {items[n].kind === "post" ? <Logo src={IG} size={10} /> : <span style={{ width: 8, height: 8, border: "1.2px solid #5E5C57", borderRadius: 2, flexShrink: 0 }} />}{items[n].t}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {bars.map((b) => {
                const start = Math.max(b.from, week[0]); const stop = Math.min(b.to, week[6]);
                if (start > stop) return null;
                const c0 = week.indexOf(start); const c1 = week.indexOf(stop);
                return (
                  <div key={b.label} data-layer="bar" style={{ position: "absolute", left: `calc(${(c0 / 7) * 100}% + 4px)`, width: `calc(${((c1 - c0 + 1) / 7) * 100}% - 8px)`, top: 24 + b.row * 15, height: 13, borderRadius: 5, background: b.color, color: b.ink, fontSize: 10, fontWeight: 500, padding: "0 7px", boxSizing: "border-box", whiteSpace: "nowrap", overflow: "hidden", lineHeight: "13px" }}>
                    {start === b.from || c0 === 0 ? b.label : ""}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </Card>
    </Board>
  );
}

function MoIntegrations() {
  const tiles: { n: string; d: string; i: string; on: boolean }[] = [
    { n: "Google Analytics", d: "GA4 · checkgrow.com", i: GA, on: true },
    { n: "Meta Ads", d: "2 ad accounts", i: META, on: true },
    { n: "Google Ads", d: "1 account · 6 campaigns", i: GADS, on: true },
    { n: "Instagram", d: "@checkgrow · 12.4K", i: IG, on: true },
    { n: "LinkedIn", d: "Outreach, posting and pages", i: LI, on: true },
    { n: "Notion", d: "Workspace and databases", i: NOTION, on: false },
  ];
  return (
    <Board>
      <Card style={{ width: 840, display: "flex", flexDirection: "column", gap: 18 }} layer="panel">
        <Head eyebrow="Integrations" title="Connect your tools" right={<Chip tone="success">5 connected</Chip>} />
        <span className={`${s.small} ${s.muted}`} style={{ marginTop: -8 }}>Connect the tools you already use. Your ads keep running where they are; Checkgrow reads their results.</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {tiles.map((t) => (
            <div key={t.n} data-layer="tile" className={s.inner} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Row gap={10} className={s.between}><LogoBox src={t.i} /><Toggle on={t.on} /></Row>
              <Col gap={2}><span className={s.m}>{t.n}</span><span className={`${s.xs} ${s.muted}`}>{t.d}</span></Col>
              {t.on ? <Chip tone="success">✓ Connected</Chip> : <Btn style={{ height: 30 }}>Connect</Btn>}
            </div>
          ))}
        </div>
        <Row gap={8} layer="more" className={s.wrap}>
          <span className={`${s.xs} ${s.muted}`}>ALSO</span><Chip tone="outline">n8n</Chip><Chip tone="outline">Webhooks</Chip><Chip tone="primary">Checkgrow MCP</Chip>
          <span className={`${s.xs} ${s.muted}`} style={{ marginLeft: 12 }}>COMING SOON</span><Chip icon={SLACK}>Slack</Chip><Chip icon={TIKTOK}>TikTok</Chip><Chip>Supabase</Chip>
        </Row>
      </Card>
    </Board>
  );
}

function MoHome() {
  const groups: [string, string[]][] = [
    ["Operations", ["Grow", "Tasks", "Calendar"]],
    ["Marketing", ["Campaigns", "Creative Studio", "Social Media", "Content", "Website"]],
    ["Sales", ["Target", "Outreach", "Leads"]],
    ["Research & report", ["Competitors", "Insights"]],
  ];
  return (
    <Board>
      <Card style={{ width: 880, height: 600, padding: 0, display: "flex", overflow: "hidden" }} layer="app">
        <div style={{ width: 196, background: "#F7F7F5", borderRight: "1px solid #ECECEA", padding: "20px 14px", display: "flex", flexDirection: "column", gap: 14 }}>
          <Row gap={8}><Spark size={18} /><span className={s.b}>Checkgrow</span></Row>
          {groups.map(([g, items]) => (
            <Col key={g} gap={2}>
              <span className={s.xs + " " + s.faint} style={{ letterSpacing: "0.08em", textTransform: "uppercase", padding: "0 8px 4px" }}>{g}</span>
              {items.map((it) => <span key={it} className={s.small} style={{ padding: "5px 8px", borderRadius: 8, background: it === "Grow" ? "#fff" : undefined, fontWeight: it === "Grow" ? 600 : 400, boxShadow: it === "Grow" ? "0 1px 3px rgba(0,0,0,.06)" : undefined }}>{it}</span>)}
            </Col>
          ))}
        </div>
        <div style={{ flex: 1, padding: "36px 36px", display: "flex", flexDirection: "column", gap: 20 }}>
          <Col gap={6} layer="greet"><span className={s.eyebrow}>AI Assistant · Grow</span><span style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em" }}>Hello, Ana.</span><span className={s.muted}>To grow <b style={{ color: "#2A2722" }}>Checkgrow</b>, start chatting or engage with our features below:</span></Col>
          <div data-layer="input" className={s.inner} style={{ padding: "16px 18px", boxShadow: "0 8px 24px rgba(42,39,34,.08)" }}>
            <span className={s.muted}>Ask Grow anything about your company…</span>
            <Row gap={8} style={{ marginTop: 14 }}><Chip tone="outline">+</Chip><span className={s.grow} /><Chip tone="outline">American English</Chip><Chip tone="outline">GPT-5.6 Luna</Chip><span style={{ width: 32, height: 32, borderRadius: 999, background: "#6373FF", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>↑</span></Row>
          </div>
          <Row gap={8} className={s.wrap} layer="actions">
            {["Create and manage Campaigns", "Insights from your data", "Study your Competitors", "Update your Knowledge", "Explore your Knowledge Graph"].map((a) => <Chip key={a} tone="outline">{a}</Chip>)}
          </Row>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: "auto" }}>
            <div data-layer="w" className={s.inner}><span className={`${s.xs} ${s.muted}`}>Knowledge</span><div className={s.big}>77%</div><Progress value={77} /></div>
            <div data-layer="w" className={s.inner}><span className={`${s.xs} ${s.muted}`}>Funnel · last 30 days</span><Row gap={10} style={{ marginTop: 6 }}><Col gap={0}><span className={s.h3}>21.9K</span><span className={s.xs + " " + s.faint}>TOFU</span></Col><Col gap={0}><span className={s.h3}>971</span><span className={s.xs + " " + s.faint}>MOFU</span></Col><Col gap={0}><span className={s.h3}>178</span><span className={s.xs + " " + s.faint}>BOFU</span></Col></Row></div>
            <div data-layer="w" className={s.inner}><span className={`${s.xs} ${s.muted}`}>Active campaigns</span><div className={s.big}>4</div><Row gap={6}><Logo src={META} size={14} /><Logo src={GADS} size={14} /><Logo src={LI} size={14} /></Row></div>
          </div>
        </div>
      </Card>
    </Board>
  );
}

/* ---------------- Knowledge Center ---------------- */

function Ring({ value, size = 92 }: { value: number; size?: number }) {
  const r = size / 2 - 7; const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#F2F2EF" strokeWidth={8} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#6373FF" strokeWidth={8} strokeLinecap="round" strokeDasharray={`${(c * value) / 100} ${c}`} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      <text x="50%" y="54%" textAnchor="middle" fontSize={20} fontWeight={600} fill="#2A2722">{value}%</text>
    </svg>
  );
}

function KcCompleteness() {
  const sections: [string, number, string?][] = [
    ["Company Profile", 100], ["Brand", 92], ["Products", 86], ["Buyer Personas", 74], ["Ideal Customer Profiles", 66], ["Use Cases", 40, "Add 2 use cases"],
  ];
  return (
    <Board>
      <Card style={{ width: 740, display: "flex", flexDirection: "column", gap: 18, marginTop: -50 }} layer="panel">
        <Row gap={18}>
          <Ring value={77} />
          <Col gap={4} className={s.grow}><span className={s.eyebrow}>Knowledge Center</span><span className={s.title}>Your company knowledge</span><span className={`${s.small} ${s.muted}`}>77% · Expert Knowledge. Everything Checkgrow writes reads from here.</span></Col>
          <Btn>Upload Knowledge</Btn>
        </Row>
        <div className={s.divider} />
        <Col gap={12}>
          {sections.map(([n, v, hint]) => (
            <div key={n} data-layer="row" style={{ display: "grid", gridTemplateColumns: "210px 1fr 54px", alignItems: "center", gap: 16 }}>
              <span className={s.m}>{n}</span>
              <Col gap={4}><Progress value={v} color={v < 50 ? "#E8A23B" : undefined} />{hint && <span className={`${s.xs} ${s.warn}`} style={{ color: "#9A6200" }}>{hint}</span>}</Col>
              <span className={`${s.small} ${s.muted}`} style={{ textAlign: "right" }}>{v}%</span>
            </div>
          ))}
        </Col>
      </Card>
      <Float layer="upload" style={{ right: 150, bottom: 120, width: 290 }}>
        <Col gap={10}>
          <Row gap={8}><Spark size={14} /><span className={`${s.small} ${s.m}`}>Drafting from your files</span></Row>
          <Row gap={6} className={s.wrap}><Chip tone="outline">brand-guide.pdf</Chip><Chip tone="outline">checkgrow.com</Chip><Chip tone="outline">pricing.docx</Chip></Row>
          <span className={`${s.xs} ${s.muted}`}>3 sections ready for your review</span>
        </Col>
      </Float>
    </Board>
  );
}

function KcBrand() {
  return (
    <Board>
      <Card style={{ width: 780, display: "flex", flexDirection: "column", gap: 18, marginTop: 40 }} layer="panel">
        <Head eyebrow="Knowledge Center · Brand" title="Tone of voice" right={<Btn><Spark size={14} />Edit with Grow</Btn>} />
        <Row gap={8} layer="tone" className={s.wrap}><Chip tone="primary">Clear</Chip><Chip tone="primary">Confident</Chip><Chip tone="primary">Warm, never casual</Chip><Chip tone="primary">Evidence over hype</Chip></Row>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div data-layer="say" className={s.soft}><span className={`${s.xs} ${s.up} ${s.b}`}>WE SAY</span><Col gap={6} style={{ marginTop: 8 }} className={s.small}><span>“One place for your marketing”</span><span>“Your data, connected”</span><span>“Approve, then publish”</span></Col></div>
          <div data-layer="avoid" className={s.soft}><span className={`${s.xs} ${s.down} ${s.b}`}>WE AVOID</span><Col gap={6} style={{ marginTop: 8 }} className={s.small}><span>“Revolutionary”, “game-changer”</span><span>Promises we can&apos;t measure</span><span>Jargon without a reason</span></Col></div>
        </div>
        <div data-layer="message" className={s.inner} style={{ background: "#EEF0FF", border: 0 }}>
          <span className={`${s.xs} ${s.muted}`}>BRAND MESSAGE</span>
          <div style={{ fontSize: 17, fontWeight: 500, marginTop: 6, letterSpacing: "-0.01em" }}>The growth brain for scale-ups and enterprise: knowledge, campaigns, content and sales in one loop.</div>
        </div>
      </Card>
      <Float layer="used" style={{ right: 150, top: 150, width: 236 }}>
        <Row gap={10}><Spark size={16} /><Col gap={0}><span className={`${s.small} ${s.m}`}>Used in every draft</span><span className={`${s.xs} ${s.muted}`}>Campaigns · Content · Creatives</span></Col></Row>
      </Float>
    </Board>
  );
}

function KcPersona() {
  const block = (t: string, items: string[], tone: string) => (
    <div data-layer="block" className={s.soft} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span className={`${s.xs} ${s.b}`} style={{ color: tone }}>{t}</span>
      {items.map((i) => <span key={i} className={s.small}>• {i}</span>)}
    </div>
  );
  return (
    <Board>
      <Card style={{ width: 800, display: "flex", flexDirection: "column", gap: 18, marginTop: -60 }} layer="panel">
        <Row gap={14}>
          <Avatar n={4} size={64} />
          <Col gap={3} className={s.grow}><span className={s.eyebrow}>Buyer persona</span><span className={s.title}>Maya, data-driven marketing lead</span><span className={`${s.small} ${s.muted}`}>Head of Growth · B2B SaaS, 50–200 people · Berlin</span></Col>
          <Chip tone="success">Primary</Chip>
        </Row>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {block("GOALS", ["Prove what marketing returns", "Ship campaigns without an agency"], "#1F7A4D")}
          {block("PAIN POINTS", ["Five tools, five versions of the truth", "Weekly reports built from exports"], "#B3261E")}
          {block("OBJECTIONS", ["Another tool to learn", "Will the AI sound like us?"], "#9A6200")}
          {block("WHERE THEY LOOK", ["LinkedIn, peer communities", "Webinars and case studies"], "#3D4BD6")}
        </div>
      </Card>
      <Float layer="usage" style={{ left: 170, bottom: 130, width: 270 }}>
        <Col gap={6}><span className={`${s.xs} ${s.muted}`}>USED BY</span><Row gap={6} className={s.wrap}><Chip>3 campaigns</Chip><Chip>12 posts</Chip><Chip>Sales brain</Chip></Row></Col>
      </Float>
    </Board>
  );
}

function KcGraph() {
  /* the real Knowledge Graph (Checkgrow's own workspace), not a redrawing */
  return (
    <Board>
      <div data-layer="graph" className={s.card} style={{ width: 880, height: 640, padding: 0, background: "#1B1B1B", border: "1px solid rgba(255,255,255,.08)", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- inside an inert, scaled decorative artboard */}
        <img src="/use-cases/checkgrow-knowledge-graph-company-brain.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <Row gap={8} style={{ position: "absolute", left: 22, top: 20, color: "#fff" }}><span className={s.h3}>Knowledge Graph</span></Row>
      </div>
    </Board>
  );
}

function KcDraft() {
  return (
    <Board>
      <Card style={{ width: 880, padding: 0, display: "flex", overflow: "hidden" }} layer="panel">
        <div style={{ flex: 1.15, padding: 26, display: "flex", flexDirection: "column", gap: 14, borderRight: "1px solid #ECECEA" }}>
          <Row gap={8}><Chip tone="warn">Draft · waiting for approval</Chip><span className={s.grow} /><Logo src={LI} /><span className={`${s.small} ${s.muted}`}>LinkedIn post</span></Row>
          <div data-layer="post" className={s.inner} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Row gap={10}><span style={{ width: 36, height: 36, borderRadius: 10, background: "#16151A", display: "flex", alignItems: "center", justifyContent: "center" }}><Spark size={18} color="#fff" /></span><Col gap={0}><span className={`${s.small} ${s.b}`}>Checkgrow</span><span className={`${s.xs} ${s.muted}`}>Promoted · 1st draft</span></Col></Row>
            <span className={s.small} style={{ lineHeight: 1.55 }}>Five tools, five versions of the truth. Sound familiar?<br /><br />Most teams rebuild the same weekly report from exports. We built Checkgrow so the plan and the results finally live in one place: campaigns, creatives, calendar and live data from GA4, Meta and Google Ads.<br /><br />Free onboarding this month. 👇</span>
            <div style={{ height: 150, borderRadius: 10, background: `url(${BGI("13-brand-indigo-bloom")}) center/cover` }} />
          </div>
        </div>
        <div style={{ width: 330, padding: 22, background: "#F7F7F5", display: "flex", flexDirection: "column", gap: 12 }}>
          <Row gap={8}><Spark size={16} /><span className={`${s.small} ${s.b}`}>Edit with Grow</span></Row>
          <div data-layer="msg" style={{ alignSelf: "flex-end", background: "#2A2722", color: "#fff", borderRadius: "14px 14px 4px 14px", padding: "10px 12px", fontSize: 13, maxWidth: 270 }}>Make it shorter and mention the free onboarding in the first line.</div>
          <div data-layer="msg" style={{ background: "#fff", border: "1px solid #ECECEA", borderRadius: "14px 14px 14px 4px", padding: "10px 12px", fontSize: 13, lineHeight: 1.5 }}>Done. Shorter by 38 words, offer in the opening line, same tone of voice from your Brand.<Row gap={6} style={{ marginTop: 10 }}><Chip tone="success">+ offer first</Chip><Chip tone="danger">− 38 words</Chip></Row></div>
          <span className={`${s.xs} ${s.muted}`} style={{ marginTop: "auto" }}>The saved version changes only after you approve.</span>
          <Row gap={8} layer="cta"><Btn>Discard</Btn><Btn tone="primary" style={{ flex: 1 }}>Approve changes</Btn></Row>
        </div>
      </Card>
    </Board>
  );
}

/* ---------------- Insights ---------------- */

function InFunnel() {
  const stage = (t: string, label: string, total: string, color: string, events: [string, string][], sources: [string, string][]) => (
    <div data-layer="stage" className={s.inner} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
      <Row gap={8}><Chip style={{ background: color + "22", color }}>{t}</Chip><span className={`${s.xs} ${s.muted}`}>{label}</span></Row>
      <Row gap={6} style={{ alignItems: "baseline" }}><span style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.04em", color }}>{total}</span><span className={`${s.small} ${s.muted}`}>events</span></Row>
      <span className={`${s.xs} ${s.faint}`}>TOP EVENTS</span>
      {events.map(([e, v], i) => <Row key={e} gap={8} className={s.small}><span className={s.grow}>{e}</span><div style={{ width: 54 }}><Progress value={90 - i * 25} color={color} height={5} /></div><span style={{ width: 52, textAlign: "right" }}>{v}</span></Row>)}
      <span className={`${s.xs} ${s.faint}`} style={{ marginTop: 4 }}>TOP SOURCES</span>
      {sources.map(([e, v]) => <Row key={e} gap={8} className={s.small}><span className={`${s.grow} ${s.muted}`}>{e}</span><span>{v}</span></Row>)}
    </div>
  );
  return (
    <Board>
      <Card style={{ width: 880, display: "flex", flexDirection: "column", gap: 16 }} layer="panel">
        <Head eyebrow="Insights" title="Funnel reporting" right={<Row gap={6}><Chip tone="outline">Last 30 days</Chip><Btn>Set up funnel</Btn></Row>} />
        <Row gap={10} layer="rates" className={s.small} style={{ background: "#F7F7F5", borderRadius: 12, padding: "8px 14px" }}>
          <Chip style={{ background: "#1F7A4D22", color: "#1F7A4D" }}>TOFU</Chip><span className={s.grow} /><span className={s.accent}>4.6% →</span><span className={s.grow} />
          <Chip style={{ background: "#3D4BD622", color: "#3D4BD6" }}>MOFU</Chip><span className={s.grow} /><span className={s.accent}>21.4% →</span><span className={s.grow} />
          <Chip style={{ background: "#7B3FD622", color: "#7B3FD6" }}>BOFU</Chip>
        </Row>
        <Row gap={12} style={{ alignItems: "stretch" }}>
          {stage("TOFU", "Reach", "48,210", "#1F7A4D", [["Page view", "24,880"], ["Session start", "14,302"], ["First visit", "9,028"]], [["Paid · Google", "16,940"], ["Organic · Google", "11,210"]])}
          {stage("MOFU", "Engage", "2,214", "#3D4BD6", [["Demo page view", "1,120"], ["Pricing view", "702"], ["Form start", "392"]], [["Paid · LinkedIn", "804"], ["Organic · Google", "611"]])}
          {stage("BOFU", "Convert", "474", "#7B3FD6", [["Demo booked", "262"], ["Form submit", "212"]], [["Paid · Google", "188"], ["Direct", "97"]])}
        </Row>
      </Card>
    </Board>
  );
}

function Spark5({ d, color = "#6373FF", w = 520, h = 150 }: { d: number[]; color?: string; w?: number; h?: number }) {
  const max = Math.max(...d); const min = Math.min(...d);
  const pts = d.map((v, i) => `${(i / (d.length - 1)) * w},${h - ((v - min) / (max - min || 1)) * (h - 16) - 8}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden style={{ overflow: "visible" }}>
      <polyline points={`0,${h} ${pts} ${w},${h}`} fill={color} opacity={0.08} />
      <polyline data-layer="line" points={pts} fill="none" stroke={color} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function InAdReport() {
  const kpi = (l: string, v: string, d: string, up: boolean) => (
    <div data-layer="kpi" className={s.inner} style={{ flex: 1 }}><span className={`${s.xs} ${s.muted}`}>{l}</span><div style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.03em", marginTop: 2 }}>{v}</div><span className={`${s.xs} ${up ? s.up : s.down}`}>{d}</span></div>
  );
  return (
    <Board>
      <Card style={{ width: 860, display: "flex", flexDirection: "column", gap: 16 }} layer="panel">
        <Head eyebrow="Insights · Advertising" title="Smart Report" right={<Row gap={6}><Chip icon={META}>Meta</Chip><Chip icon={GADS}>Google Ads</Chip><Chip tone="outline">Last 30 days</Chip></Row>} />
        <Row gap={10}>{kpi("Spend", "€18,240", "+6% vs previous", false)}{kpi("CTR", "1.42%", "+0.31 pts", true)}{kpi("Cost per click", "€0.61", "−14%", true)}{kpi("Cost per result", "€38.40", "−18%", true)}</Row>
        <div data-layer="chart" className={s.inner} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Row gap={14} className={s.small}><Row gap={6}><Dot color="#6373FF" />Results</Row><Row gap={6}><Dot color="#CFC3D9" />Spend</Row><span className={s.grow} /><span className={s.muted}>Daily</span></Row>
          <div style={{ position: "relative", height: 150 }}>
            <div style={{ position: "absolute", inset: 0 }}><Spark5 w={800} d={[30, 34, 31, 38, 36, 42, 40, 47, 45, 52, 50, 58, 55, 62, 66, 64, 71, 75]} /></div>
            <div style={{ position: "absolute", inset: 0 }}><Spark5 w={800} color="#CFC3D9" d={[60, 61, 63, 62, 64, 63, 65, 64, 66, 65, 67, 66, 68, 67, 69, 68, 70, 69]} /></div>
          </div>
        </div>
        <Row gap={12} layer="summary" className={s.soft} style={{ alignItems: "flex-start" }}>
          <Spark size={18} />
          <span className={s.small} style={{ lineHeight: 1.55 }}><span className={s.b}>What changed: </span>cost per result fell 18% as budget moved to Meta remarketing, which now brings 41% of results on 29% of spend. Google search is steady; the broad prospecting set is the one to review.</span>
        </Row>
      </Card>
    </Board>
  );
}

function Winner({ rank, name, campaign, img, spend, conv, cpa, ctr, share, best }: { rank: number; name: string; campaign: string; img: string; spend: string; conv: string; cpa: string; ctr: string; share: number; best?: boolean }) {
  const cell = (l: string, v: string) => <div className={s.soft} style={{ padding: "10px 12px" }}><span className={`${s.xs} ${s.muted}`}>{l}</span><div className={s.h3}>{v}</div></div>;
  return (
    <div data-layer="winner" className={s.inner} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, border: best ? "1.5px solid #6373FF" : undefined, boxShadow: best ? "0 0 0 4px #EEF0FF" : undefined }}>
      <Row gap={12}>
        <div style={{ width: 76, height: 76, borderRadius: 12, background: `url(${img}) center/cover`, flexShrink: 0 }} />
        <Col gap={3} className={s.grow}><span className={`${s.small} ${s.accent} ${s.b}`}>🏆 #{rank} winner</span><span className={s.h3}>{name}</span><span className={`${s.xs} ${s.muted}`}>{campaign}</span></Col>
      </Row>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>{cell("Spend", spend)}{cell("Conversions", conv)}{cell("Cost per result", cpa)}{cell("CTR", ctr)}</div>
      <Row gap={8}><Chip tone="primary">{share}% of conversions</Chip></Row>
      <span className={`${s.xs} ${s.muted}`} style={{ lineHeight: 1.45 }}><b style={{ color: "#2A2722" }}>Measured result</b> · #{rank} by attributed conversions: {conv} results at {cpa} per result. Volume ranking, not a profitability verdict.</span>
      <Row gap={8}><Btn style={{ height: 32 }}>Open creative</Btn><Btn tone="primary" style={{ height: 32 }}><Spark size={12} color="#fff" />Generate another like it</Btn></Row>
    </div>
  );
}

function InWinning() {
  return (
    <Board>
      <Card style={{ width: 880, display: "flex", flexDirection: "column", gap: 16 }} layer="panel">
        <Head eyebrow="Insights · Advertising" title="🏆 Winning ads" right={<Btn tone="primary">Refresh analysis</Btn>} />
        <span className={`${s.small} ${s.muted}`} style={{ marginTop: -8 }}>Most attributed conversions in the period, explained against every other ad that delivered.</span>
        <Row gap={12} style={{ alignItems: "stretch" }}>
          <Winner best rank={1} name="Five tools became one" campaign="Q4 Enterprise Launch · Meta · Remarketing" img={BGI("08-deep-teal-seafoam")} spend="€2,140" conv="58" cpa="€36.90" ctr="1.86%" share={44} />
          <Winner rank={2} name="Your growth brain" campaign="Q4 Enterprise Launch · Google · Search" img={BGI("05-cobalt-sky")} spend="€1,980" conv="31" cpa="€63.87" ctr="4.10%" share={23} />
        </Row>
        <Col gap={8} layer="share">
          <Row gap={10} className={s.small}><span style={{ width: 150 }} className={s.muted}>Share of spend</span><div className={s.grow} style={{ display: "flex", height: 10, borderRadius: 999, overflow: "hidden", gap: 2 }}><div style={{ width: "29%", background: "#6373FF" }} /><div style={{ width: "27%", background: "#9BA6FF" }} /><div style={{ flex: 1, background: "#ECECEA" }} /></div></Row>
          <Row gap={10} className={s.small}><span style={{ width: 150 }} className={s.muted}>Share of results</span><div className={s.grow} style={{ display: "flex", height: 10, borderRadius: 999, overflow: "hidden", gap: 2 }}><div data-layer="progress" style={{ width: "44%", background: "#6373FF" }} /><div style={{ width: "23%", background: "#9BA6FF" }} /><div style={{ flex: 1, background: "#ECECEA" }} /></div></Row>
        </Col>
      </Card>
    </Board>
  );
}

function InUtm() {
  const rows: [string, string, string, string][] = [
    ["google", "cpc", "q4-enterprise", "6,912"], ["linkedin", "paid_social", "growth-brain-webinar", "3,204"], ["facebook", "paid_social", "remarketing", "2,766"], ["newsletter", "email", "october", "1,118"],
  ];
  return (
    <Board>
      <Card style={{ width: 860, display: "flex", flexDirection: "column", gap: 16 }} layer="panel">
        <Head eyebrow="Insights" title="UTM Reporting" right={<Row gap={6}><Chip tone="outline">Sep 15 – Oct 14</Chip><Chip>Compare</Chip></Row>} />
        <div data-layer="chart" className={s.inner}>
          <Row gap={14} className={s.small}><span className={s.big} style={{ fontSize: 26 }}>14,000</span><span className={s.up}>+23% sessions</span></Row>
          <div style={{ marginTop: 10 }}><Spark5 w={800} h={140} d={[310, 330, 300, 360, 410, 390, 380, 440, 470, 430, 460, 520, 500, 560, 610, 580, 600, 650]} /></div>
        </div>
        <table className={s.table}>
          <thead><tr><th>Source</th><th>Medium</th><th>Campaign</th><th>Sessions</th></tr></thead>
          <tbody>{rows.map((r) => <tr key={r[2]} data-layer="row"><td className={s.m}>{r[0]}</td><td className={s.muted}>{r[1]}</td><td><Chip tone="outline">{r[2]}</Chip></td><td className={s.m}>{r[3]}</td></tr>)}</tbody>
        </table>
      </Card>
    </Board>
  );
}

function InLive() {
  return (
    <Board>
      <Card style={{ width: 840, display: "flex", flexDirection: "column", gap: 16, marginLeft: -60 }} layer="panel">
        <Head eyebrow="Insights · Advertising" title="Q4 board report" right={<Row gap={8}><Chip tone="outline">Last 30 days</Chip><Btn>🌐 Report live</Btn></Row>} />
        <Row gap={10}>
          {[["Spend", "€18,240"], ["Results", "475"], ["Cost per result", "€38.40"], ["ROAS", "3.4×"]].map(([l, v]) => <div key={l} className={s.inner} style={{ flex: 1 }}><span className={`${s.xs} ${s.muted}`}>{l}</span><div style={{ fontSize: 22, fontWeight: 600 }}>{v}</div></div>)}
        </Row>
        <div className={s.inner} style={{ height: 190 }}><Spark5 w={780} h={160} d={[30, 34, 31, 38, 36, 42, 40, 47, 45, 52, 50, 58, 55, 62, 66, 64, 71, 75]} /></div>
      </Card>
      <Float layer="share" style={{ right: 170, top: 300, width: 370, padding: 20 }}>
        <Col gap={14}>
          <Row gap={8}><span className={s.h3}>Public link</span></Row>
          <Row gap={8} className={s.soft} style={{ padding: "10px 12px" }}><span className={`${s.small} ${s.grow}`}>ai.checkgrow.com/public/report/q4…</span><Btn tone="primary" style={{ height: 30 }}>Copy</Btn></Row>
          <span className={`${s.xs} ${s.muted}`} style={{ lineHeight: 1.5 }}>Live report: opens on your current date range. Viewers can change the live range.</span>
          <Row gap={8} className={s.small}><Chip tone="success">Always current</Chip><Chip>No login needed</Chip></Row>
          <span className={`${s.xs}`} style={{ color: "#B3261E" }}>Disable public link</span>
        </Col>
      </Float>
    </Board>
  );
}

const registry: Record<MockupKey, () => ReactNode> = {
  "mo-campaigns": MoCampaigns, "mo-creatives": MoCreatives, "mo-calendar": MoCalendar, "mo-integrations": MoIntegrations, "mo-home": MoHome,
  "kc-completeness": KcCompleteness, "kc-brand": KcBrand, "kc-persona": KcPersona, "kc-graph": KcGraph, "kc-draft": KcDraft,
  "in-funnel": InFunnel, "in-adreport": InAdReport, "in-winning": InWinning, "in-utm": InUtm, "in-live": InLive,
};

export function UseCaseMockup({ id }: { id: MockupKey }) {
  const Mockup = registry[id];
  return <Mockup />;
}
