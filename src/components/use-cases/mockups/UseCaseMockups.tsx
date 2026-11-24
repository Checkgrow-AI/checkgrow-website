/* The use case mockups, one per section. Each is a 1200×900 Board in the
   Feature Illustrations style, modelled on the real platform screens.
   Figures are illustrative, from a Checkgrow demo workspace; no client data.
   Server components: the copy comes from the "useCaseMockups" dictionary
   (getT), which lines up one to one with the data kept here. */

import { Fragment, type ReactNode } from "react";
import type { MockupKey } from "@/lib/useCases";
import { getT } from "@/i18n/server";
import { fmt } from "@/i18n/format";
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

const copy = () => getT("useCaseMockups");

/* ---------------- Marketing operations ---------------- */

function MoCampaigns() {
  const t = copy().moCampaigns;
  /* one per t.rows */
  const rows: { ch: string[]; creatives: number; spent: number; active: boolean }[] = [
    { ch: [LI, META, GADS], creatives: 24, spent: 41, active: true },
    { ch: [LI, META], creatives: 12, spent: 68, active: true },
    { ch: [GADS, LI], creatives: 9, spent: 55, active: true },
    { ch: [META, IG], creatives: 6, spent: 92, active: false },
  ];
  return (
    <Board>
      <Card style={{ width: 840, gap: 20, display: "flex", flexDirection: "column", marginTop: -60 }} layer="list">
        <Head eyebrow={t.eyebrow} title={t.title} right={<Btn tone="dark">{t.create}</Btn>} />
        <Row gap={8} layer="filters"><Chip tone="dark">{t.filters[0]}</Chip><Chip>{t.filters[1]}</Chip><Chip>{t.filters[2]}</Chip><Chip tone="outline">{t.filters[3]}</Chip></Row>
        <table className={s.table}>
          <thead><tr><th>{t.columns[0]}</th><th>{t.columns[1]}</th><th>{t.columns[2]}</th><th style={{ width: 190 }}>{t.columns[3]}</th><th>{t.columns[4]}</th></tr></thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} data-layer="row">
                <td><Col gap={2}><span className={s.m}>{t.rows[i].name}</span><span className={`${s.small} ${s.muted}`}>{t.rows[i].period}</span></Col></td>
                <td><Row gap={6}>{r.ch.map((c) => <Logo key={c} src={c} />)}</Row></td>
                <td className={s.muted}>{r.creatives}</td>
                <td><Col gap={6}><Row gap={6} className={s.between}><span className={s.m}>{t.rows[i].budget}</span><span className={`${s.xs} ${s.muted}`}>{fmt(t.spent, { n: r.spent })}</span></Row><Progress value={r.spent} color={r.active ? undefined : "#CFC3D9"} /></Col></td>
                <td><Chip tone={r.active ? "success" : "neutral"}>{r.active ? t.active : t.paused}</Chip></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Float layer="live" style={{ right: 150, bottom: 150, width: 290 }}>
        <Col gap={10}>
          <Row gap={8}><Dot color="#1F7A4D" /><span className={`${s.xs} ${s.muted}`}>{t.live}</span></Row>
          <Row gap={14} className={s.between}>
            {t.stats.map((stat) => <Col key={stat.label} gap={2}><span className={s.xs + " " + s.muted}>{stat.label}</span><span className={s.h3}>{stat.value}</span></Col>)}
          </Row>
          <span className={`${s.xs} ${s.up}`}>{t.underTarget}</span>
        </Col>
      </Float>
    </Board>
  );
}

function Tile({ img, title, status, tone, format, copies }: { img: string; title: string; status: string; tone: "success" | "warn" | "neutral"; format: string; copies: string }) {
  return (
    <div data-layer="tile" className={s.inner} style={{ padding: 10, width: 190, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ position: "relative", height: 148, borderRadius: 10, overflow: "hidden", background: `url(${img}) center/cover` }}>
        <span style={{ position: "absolute", left: 10, top: 10 }}><Chip tone={tone}>{status}</Chip></span>
        <span style={{ position: "absolute", left: 12, right: 12, bottom: 12, color: "#fff", fontSize: 15, fontWeight: 600, lineHeight: 1.2, textShadow: "0 2px 12px rgba(0,0,0,.35)" }}>{title}</span>
      </div>
      <Row gap={6} className={s.between}><Row gap={6}><Logo src={META} size={16} /><span className={s.xs + " " + s.muted}>{format}</span></Row><span className={s.xs + " " + s.muted}>{copies}</span></Row>
    </div>
  );
}

function MoCreatives() {
  const t = copy().moCreatives;
  /* one per t.tiles */
  const tiles: { img: string; tone: "success" | "warn" | "neutral" }[] = [
    { img: BGI("05-cobalt-sky"), tone: "success" },
    { img: BGI("02-apricot-blush"), tone: "success" },
    { img: BGI("08-deep-teal-seafoam"), tone: "warn" },
    { img: BGI("10-ice-rose-lavender"), tone: "neutral" },
  ];
  return (
    <Board>
      <Card style={{ width: 880, display: "flex", flexDirection: "column", gap: 18 }} layer="panel">
        <Head eyebrow={t.eyebrow} title={t.title} right={<Row gap={8}><Chip tone="outline">{t.language}</Chip><Btn>{t.generate}</Btn><Btn tone="primary">{t.newCreative}</Btn></Row>} />
        <Row gap={6} layer="tabs">
          <span className={`${s.small} ${s.muted}`}>{t.channels}</span><Chip icon={GADS}>{t.channelNames[0]}</Chip><Chip tone="dark" icon={META}>{t.channelNames[1]}</Chip><Chip icon={LI}>{t.channelNames[2]}</Chip><span className={s.grow} /><span className={`${s.small} ${s.muted}`}>{t.count}</span>
        </Row>
        <Col gap={10}>
          <Row gap={8}><Chip tone="primary">{t.stage}</Chip><span className={`${s.small} ${s.muted}`}>{t.stageHint}</span></Row>
          <Row gap={14}>
            {tiles.map((tile, i) => <Tile key={i} img={tile.img} title={t.tiles[i].title} status={t.tiles[i].status} tone={tile.tone} format={t.format} copies={t.copies} />)}
          </Row>
        </Col>
        <Row gap={8} layer="next"><Chip tone="primary">{t.next}</Chip><span className={`${s.small} ${s.muted}`}>{t.nextHint}</span><span className={s.grow} /><span className={`${s.small} ${s.accent}`}>{t.open}</span></Row>
      </Card>
    </Board>
  );
}

function MoCalendar() {
  const t = copy().moCalendar;
  /* October 2026 starts on a Thursday: 5 weeks, Monday first */
  const first = -2;
  const weeks = Array.from({ length: 5 }, (_, w) => Array.from({ length: 7 }, (_, d) => first + w * 7 + d));
  /* one per t.bars */
  const bars: { from: number; to: number; row: number; color: string; ink: string }[] = [
    { from: 1, to: 31, row: 0, color: "#6373FF", ink: "#fff" },
    { from: 6, to: 30, row: 1, color: "#9BA6FF", ink: "#fff" },
    { from: 15, to: 31, row: 2, color: "#CFC3D9", ink: "#2A2722" },
  ];
  /* one per t.items: the day and what it is */
  const itemDays: [number, "post" | "task"][] = [[2, "post"], [8, "task"], [9, "post"], [14, "post"], [17, "task"], [21, "post"], [23, "task"], [28, "post"]];
  const items: Record<number, { t: string; kind: "post" | "task" }> = Object.fromEntries(itemDays.map(([day, kind], i) => [day, { t: t.items[i], kind }]));
  const legend = ["#6373FF", "#22A06B", "#14B8A6", "#E1306C", "#F59E0B", "#8D8A84"];
  const label = (n: number) => (n < 1 ? 30 + n : n > 31 ? n - 31 : n);
  return (
    <Board>
      <Card style={{ width: 880, display: "flex", flexDirection: "column", gap: 14 }} layer="cal">
        <Head eyebrow={t.eyebrow} title={t.title} right={<Row gap={6}><Chip tone="outline">{t.region}</Chip><Chip tone="dark">{t.views[0]}</Chip><Chip>{t.views[1]}</Chip><Chip>{t.views[2]}</Chip></Row>} />
        <Row gap={8} layer="legend" className={s.small}>{legend.map((color, i) => <Chip key={color}><Dot color={color} />{t.legend[i]}</Chip>)}</Row>
        <div style={{ border: "1px solid #ECECEA", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", background: "#F7F7F5", borderBottom: "1px solid #ECECEA" }}>
            {t.days.map((d, i) => <div key={i} className={`${s.xs} ${s.muted}`} style={{ padding: "8px 10px" }}>{d}</div>)}
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
              {bars.map((b, i) => {
                const start = Math.max(b.from, week[0]); const stop = Math.min(b.to, week[6]);
                if (start > stop) return null;
                const c0 = week.indexOf(start); const c1 = week.indexOf(stop);
                return (
                  <div key={i} data-layer="bar" style={{ position: "absolute", left: `calc(${(c0 / 7) * 100}% + 4px)`, width: `calc(${((c1 - c0 + 1) / 7) * 100}% - 8px)`, top: 24 + b.row * 15, height: 13, borderRadius: 5, background: b.color, color: b.ink, fontSize: 10, fontWeight: 500, padding: "0 7px", boxSizing: "border-box", whiteSpace: "nowrap", overflow: "hidden", lineHeight: "13px" }}>
                    {start === b.from || c0 === 0 ? t.bars[i] : ""}
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
  const t = copy().moIntegrations;
  /* one per t.tiles */
  const tiles: { i: string; on: boolean }[] = [
    { i: GA, on: true },
    { i: META, on: true },
    { i: GADS, on: true },
    { i: IG, on: true },
    { i: LI, on: true },
    { i: NOTION, on: false },
  ];
  return (
    <Board>
      <Card style={{ width: 840, display: "flex", flexDirection: "column", gap: 18 }} layer="panel">
        <Head eyebrow={t.eyebrow} title={t.title} right={<Chip tone="success">{t.connectedCount}</Chip>} />
        <span className={`${s.small} ${s.muted}`} style={{ marginTop: -8 }}>{t.intro}</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {tiles.map((tile, i) => (
            <div key={tile.i} data-layer="tile" className={s.inner} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Row gap={10} className={s.between}><LogoBox src={tile.i} /><Toggle on={tile.on} /></Row>
              <Col gap={2}><span className={s.m}>{t.tiles[i].name}</span><span className={`${s.xs} ${s.muted}`}>{t.tiles[i].detail}</span></Col>
              {tile.on ? <Chip tone="success">{t.connected}</Chip> : <Btn style={{ height: 30 }}>{t.connect}</Btn>}
            </div>
          ))}
        </div>
        <Row gap={8} layer="more" className={s.wrap}>
          <span className={`${s.xs} ${s.muted}`}>{t.also}</span><Chip tone="outline">{t.alsoItems[0]}</Chip><Chip tone="outline">{t.alsoItems[1]}</Chip><Chip tone="primary">{t.alsoItems[2]}</Chip>
          <span className={`${s.xs} ${s.muted}`} style={{ marginLeft: 12 }}>{t.soon}</span><Chip icon={SLACK}>{t.soonItems[0]}</Chip><Chip icon={TIKTOK}>{t.soonItems[1]}</Chip><Chip>{t.soonItems[2]}</Chip>
        </Row>
      </Card>
    </Board>
  );
}

function MoHome() {
  const t = copy().moHome;
  return (
    <Board>
      <Card style={{ width: 880, height: 600, padding: 0, display: "flex", overflow: "hidden" }} layer="app">
        <div style={{ width: 196, background: "#F7F7F5", borderRight: "1px solid #ECECEA", padding: "20px 14px", display: "flex", flexDirection: "column", gap: 14 }}>
          <Row gap={8}><Spark size={18} /><span className={s.b}>{t.brand}</span></Row>
          {t.groups.map((g, gi) => (
            <Col key={gi} gap={2}>
              <span className={s.xs + " " + s.faint} style={{ letterSpacing: "0.08em", textTransform: "uppercase", padding: "0 8px 4px" }}>{g.label}</span>
              {g.items.map((it, ii) => {
                /* Grow, the first item, is the open page */
                const current = gi === 0 && ii === 0;
                return <span key={ii} className={s.small} style={{ padding: "5px 8px", borderRadius: 8, background: current ? "#fff" : undefined, fontWeight: current ? 600 : 400, boxShadow: current ? "0 1px 3px rgba(0,0,0,.06)" : undefined }}>{it}</span>;
              })}
            </Col>
          ))}
        </div>
        <div style={{ flex: 1, padding: "36px 36px", display: "flex", flexDirection: "column", gap: 20 }}>
          <Col gap={6} layer="greet"><span className={s.eyebrow}>{t.eyebrow}</span><span style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em" }}>{t.hello}</span><span className={s.muted}>{t.intro.before}<b style={{ color: "#2A2722" }}>{t.intro.name}</b>{t.intro.after}</span></Col>
          <div data-layer="input" className={s.inner} style={{ padding: "16px 18px", boxShadow: "0 8px 24px rgba(42,39,34,.08)" }}>
            <span className={s.muted}>{t.placeholder}</span>
            <Row gap={8} style={{ marginTop: 14 }}><Chip tone="outline">+</Chip><span className={s.grow} /><Chip tone="outline">{t.language}</Chip><Chip tone="outline">{t.model}</Chip><span style={{ width: 32, height: 32, borderRadius: 999, background: "#6373FF", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>↑</span></Row>
          </div>
          <Row gap={8} className={s.wrap} layer="actions">
            {t.actions.map((a) => <Chip key={a} tone="outline">{a}</Chip>)}
          </Row>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: "auto" }}>
            <div data-layer="w" className={s.inner}><span className={`${s.xs} ${s.muted}`}>{t.knowledge}</span><div className={s.big}>{t.knowledgeValue}</div><Progress value={77} /></div>
            <div data-layer="w" className={s.inner}><span className={`${s.xs} ${s.muted}`}>{t.funnel}</span><Row gap={10} style={{ marginTop: 6 }}>{t.funnelStats.map((f) => <Col key={f.label} gap={0}><span className={s.h3}>{f.value}</span><span className={s.xs + " " + s.faint}>{f.label}</span></Col>)}</Row></div>
            <div data-layer="w" className={s.inner}><span className={`${s.xs} ${s.muted}`}>{t.activeCampaigns}</span><div className={s.big}>{t.activeValue}</div><Row gap={6}><Logo src={META} size={14} /><Logo src={GADS} size={14} /><Logo src={LI} size={14} /></Row></div>
          </div>
        </div>
      </Card>
    </Board>
  );
}

/* ---------------- Knowledge Center ---------------- */

function Ring({ value, label, size = 92 }: { value: number; label: string; size?: number }) {
  const r = size / 2 - 7; const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#F2F2EF" strokeWidth={8} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#6373FF" strokeWidth={8} strokeLinecap="round" strokeDasharray={`${(c * value) / 100} ${c}`} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      <text x="50%" y="54%" textAnchor="middle" fontSize={20} fontWeight={600} fill="#2A2722">{label}</text>
    </svg>
  );
}

function KcCompleteness() {
  const { percent, kcCompleteness: t } = copy();
  /* completeness of each of t.sections; the last one carries t.hint */
  const values = [100, 92, 86, 74, 66, 40];
  const files = ["brand-guide.pdf", "checkgrow.com", "pricing.docx"];
  return (
    <Board>
      <Card style={{ width: 740, display: "flex", flexDirection: "column", gap: 18, marginTop: -50 }} layer="panel">
        <Row gap={18}>
          <Ring value={77} label={fmt(percent, { n: 77 })} />
          <Col gap={4} className={s.grow}><span className={s.eyebrow}>{t.eyebrow}</span><span className={s.title}>{t.title}</span><span className={`${s.small} ${s.muted}`}>{t.summary}</span></Col>
          <Btn>{t.upload}</Btn>
        </Row>
        <div className={s.divider} />
        <Col gap={12}>
          {t.sections.map((n, i) => {
            const v = values[i];
            const hint = i === values.length - 1 ? t.hint : undefined;
            return (
              <div key={i} data-layer="row" style={{ display: "grid", gridTemplateColumns: "210px 1fr 54px", alignItems: "center", gap: 16 }}>
                <span className={s.m}>{n}</span>
                <Col gap={4}><Progress value={v} color={v < 50 ? "#E8A23B" : undefined} />{hint && <span className={`${s.xs} ${s.warn}`} style={{ color: "#9A6200" }}>{hint}</span>}</Col>
                <span className={`${s.small} ${s.muted}`} style={{ textAlign: "right" }}>{fmt(percent, { n: v })}</span>
              </div>
            );
          })}
        </Col>
      </Card>
      <Float layer="upload" style={{ right: 150, bottom: 120, width: 290 }}>
        <Col gap={10}>
          <Row gap={8}><Spark size={14} /><span className={`${s.small} ${s.m}`}>{t.drafting}</span></Row>
          <Row gap={6} className={s.wrap}>{files.map((f) => <Chip key={f} tone="outline">{f}</Chip>)}</Row>
          <span className={`${s.xs} ${s.muted}`}>{t.ready}</span>
        </Col>
      </Float>
    </Board>
  );
}

function KcBrand() {
  const t = copy().kcBrand;
  return (
    <Board>
      <Card style={{ width: 780, display: "flex", flexDirection: "column", gap: 18, marginTop: 40 }} layer="panel">
        <Head eyebrow={t.eyebrow} title={t.title} right={<Btn><Spark size={14} />{t.edit}</Btn>} />
        <Row gap={8} layer="tone" className={s.wrap}>{t.tones.map((tone) => <Chip key={tone} tone="primary">{tone}</Chip>)}</Row>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div data-layer="say" className={s.soft}><span className={`${s.xs} ${s.up} ${s.b}`}>{t.say}</span><Col gap={6} style={{ marginTop: 8 }} className={s.small}>{t.sayItems.map((x) => <span key={x}>{x}</span>)}</Col></div>
          <div data-layer="avoid" className={s.soft}><span className={`${s.xs} ${s.down} ${s.b}`}>{t.avoid}</span><Col gap={6} style={{ marginTop: 8 }} className={s.small}>{t.avoidItems.map((x) => <span key={x}>{x}</span>)}</Col></div>
        </div>
        <div data-layer="message" className={s.inner} style={{ background: "#EEF0FF", border: 0 }}>
          <span className={`${s.xs} ${s.muted}`}>{t.messageLabel}</span>
          <div style={{ fontSize: 17, fontWeight: 500, marginTop: 6, letterSpacing: "-0.01em" }}>{t.message}</div>
        </div>
      </Card>
      <Float layer="used" style={{ right: 150, top: 150, width: 236 }}>
        <Row gap={10}><Spark size={16} /><Col gap={0}><span className={`${s.small} ${s.m}`}>{t.used}</span><span className={`${s.xs} ${s.muted}`}>{t.usedIn}</span></Col></Row>
      </Float>
    </Board>
  );
}

function KcPersona() {
  const t = copy().kcPersona;
  /* heading colour of each of t.blocks */
  const tones = ["#1F7A4D", "#B3261E", "#9A6200", "#3D4BD6"];
  const block = (title: string, items: readonly string[], tone: string) => (
    <div key={title} data-layer="block" className={s.soft} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span className={`${s.xs} ${s.b}`} style={{ color: tone }}>{title}</span>
      {items.map((i) => <span key={i} className={s.small}>• {i}</span>)}
    </div>
  );
  return (
    <Board>
      <Card style={{ width: 800, display: "flex", flexDirection: "column", gap: 18, marginTop: -60 }} layer="panel">
        <Row gap={14}>
          <Avatar n={4} size={64} />
          <Col gap={3} className={s.grow}><span className={s.eyebrow}>{t.eyebrow}</span><span className={s.title}>{t.name}</span><span className={`${s.small} ${s.muted}`}>{t.role}</span></Col>
          <Chip tone="success">{t.primary}</Chip>
        </Row>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {t.blocks.map((b, i) => block(b.title, b.items, tones[i]))}
        </div>
      </Card>
      <Float layer="usage" style={{ left: 170, bottom: 130, width: 270 }}>
        <Col gap={6}><span className={`${s.xs} ${s.muted}`}>{t.usedBy}</span><Row gap={6} className={s.wrap}>{t.usage.map((u) => <Chip key={u}>{u}</Chip>)}</Row></Col>
      </Float>
    </Board>
  );
}

function KcGraph() {
  const t = copy().kcGraph;
  /* the real Knowledge Graph (Checkgrow's own workspace), not a redrawing */
  return (
    <Board>
      <div data-layer="graph" className={s.card} style={{ width: 880, height: 640, padding: 0, background: "#1B1B1B", border: "1px solid rgba(255,255,255,.08)", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- inside an inert, scaled decorative artboard */}
        <img src="/use-cases/checkgrow-knowledge-graph-company-brain.webp" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <Row gap={8} style={{ position: "absolute", left: 22, top: 20, color: "#fff" }}><span className={s.h3}>{t.title}</span></Row>
      </div>
    </Board>
  );
}

function KcDraft() {
  const t = copy().kcDraft;
  return (
    <Board>
      <Card style={{ width: 880, padding: 0, display: "flex", overflow: "hidden" }} layer="panel">
        <div style={{ flex: 1.15, padding: 26, display: "flex", flexDirection: "column", gap: 14, borderRight: "1px solid #ECECEA" }}>
          <Row gap={8}><Chip tone="warn">{t.status}</Chip><span className={s.grow} /><Logo src={LI} /><span className={`${s.small} ${s.muted}`}>{t.channel}</span></Row>
          <div data-layer="post" className={s.inner} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Row gap={10}><span style={{ width: 36, height: 36, borderRadius: 10, background: "#16151A", display: "flex", alignItems: "center", justifyContent: "center" }}><Spark size={18} color="#fff" /></span><Col gap={0}><span className={`${s.small} ${s.b}`}>{t.author}</span><span className={`${s.xs} ${s.muted}`}>{t.meta}</span></Col></Row>
            <span className={s.small} style={{ lineHeight: 1.55 }}>{t.post.map((p, i) => <Fragment key={i}>{i > 0 && <><br /><br /></>}{p}</Fragment>)}</span>
            <div style={{ height: 150, borderRadius: 10, background: `url(${BGI("13-brand-indigo-bloom")}) center/cover` }} />
          </div>
        </div>
        <div style={{ width: 330, padding: 22, background: "#F7F7F5", display: "flex", flexDirection: "column", gap: 12 }}>
          <Row gap={8}><Spark size={16} /><span className={`${s.small} ${s.b}`}>{t.edit}</span></Row>
          <div data-layer="msg" style={{ alignSelf: "flex-end", background: "#2A2722", color: "#fff", borderRadius: "14px 14px 4px 14px", padding: "10px 12px", fontSize: 13, maxWidth: 270 }}>{t.request}</div>
          <div data-layer="msg" style={{ background: "#fff", border: "1px solid #ECECEA", borderRadius: "14px 14px 14px 4px", padding: "10px 12px", fontSize: 13, lineHeight: 1.5 }}>{t.reply}<Row gap={6} style={{ marginTop: 10 }}><Chip tone="success">{t.changes[0]}</Chip><Chip tone="danger">{t.changes[1]}</Chip></Row></div>
          <span className={`${s.xs} ${s.muted}`} style={{ marginTop: "auto" }}>{t.note}</span>
          <Row gap={8} layer="cta"><Btn>{t.discard}</Btn><Btn tone="primary" style={{ flex: 1 }}>{t.approve}</Btn></Row>
        </div>
      </Card>
    </Board>
  );
}

/* ---------------- Insights ---------------- */

function InFunnel() {
  const t = copy().inFunnel;
  /* colour of each of t.stages */
  const colors = ["#1F7A4D", "#3D4BD6", "#7B3FD6"];
  type Stage = (typeof t.stages)[number];
  const stage = (st: Stage, color: string) => (
    <div key={st.name} data-layer="stage" className={s.inner} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
      <Row gap={8}><Chip style={{ background: color + "22", color }}>{st.name}</Chip><span className={`${s.xs} ${s.muted}`}>{st.label}</span></Row>
      <Row gap={6} style={{ alignItems: "baseline" }}><span style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.04em", color }}>{st.total}</span><span className={`${s.small} ${s.muted}`}>{t.events}</span></Row>
      <span className={`${s.xs} ${s.faint}`}>{t.topEvents}</span>
      {st.events.map((e, i) => <Row key={e.name} gap={8} className={s.small}><span className={s.grow}>{e.name}</span><div style={{ width: 54 }}><Progress value={90 - i * 25} color={color} height={5} /></div><span style={{ width: 52, textAlign: "right" }}>{e.value}</span></Row>)}
      <span className={`${s.xs} ${s.faint}`} style={{ marginTop: 4 }}>{t.topSources}</span>
      {st.sources.map((e) => <Row key={e.name} gap={8} className={s.small}><span className={`${s.grow} ${s.muted}`}>{e.name}</span><span>{e.value}</span></Row>)}
    </div>
  );
  return (
    <Board>
      <Card style={{ width: 880, display: "flex", flexDirection: "column", gap: 16 }} layer="panel">
        <Head eyebrow={t.eyebrow} title={t.title} right={<Row gap={6}><Chip tone="outline">{t.range}</Chip><Btn>{t.setup}</Btn></Row>} />
        <Row gap={10} layer="rates" className={s.small} style={{ background: "#F7F7F5", borderRadius: 12, padding: "8px 14px" }}>
          <Chip style={{ background: "#1F7A4D22", color: "#1F7A4D" }}>{t.stages[0].name}</Chip><span className={s.grow} /><span className={s.accent}>{t.rates[0]}</span><span className={s.grow} />
          <Chip style={{ background: "#3D4BD622", color: "#3D4BD6" }}>{t.stages[1].name}</Chip><span className={s.grow} /><span className={s.accent}>{t.rates[1]}</span><span className={s.grow} />
          <Chip style={{ background: "#7B3FD622", color: "#7B3FD6" }}>{t.stages[2].name}</Chip>
        </Row>
        <Row gap={12} style={{ alignItems: "stretch" }}>
          {t.stages.map((st, i) => stage(st, colors[i]))}
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
  const t = copy().inAdReport;
  /* whether each of t.kpis moved the right way */
  const up = [false, true, true, true];
  return (
    <Board>
      <Card style={{ width: 860, display: "flex", flexDirection: "column", gap: 16 }} layer="panel">
        <Head eyebrow={t.eyebrow} title={t.title} right={<Row gap={6}><Chip icon={META}>{t.channelNames[0]}</Chip><Chip icon={GADS}>{t.channelNames[1]}</Chip><Chip tone="outline">{t.range}</Chip></Row>} />
        <Row gap={10}>{t.kpis.map((k, i) => (
          <div key={k.label} data-layer="kpi" className={s.inner} style={{ flex: 1 }}><span className={`${s.xs} ${s.muted}`}>{k.label}</span><div style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.03em", marginTop: 2 }}>{k.value}</div><span className={`${s.xs} ${up[i] ? s.up : s.down}`}>{k.change}</span></div>
        ))}</Row>
        <div data-layer="chart" className={s.inner} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Row gap={14} className={s.small}><Row gap={6}><Dot color="#6373FF" />{t.results}</Row><Row gap={6}><Dot color="#CFC3D9" />{t.spend}</Row><span className={s.grow} /><span className={s.muted}>{t.daily}</span></Row>
          <div style={{ position: "relative", height: 150 }}>
            <div style={{ position: "absolute", inset: 0 }}><Spark5 w={800} d={[30, 34, 31, 38, 36, 42, 40, 47, 45, 52, 50, 58, 55, 62, 66, 64, 71, 75]} /></div>
            <div style={{ position: "absolute", inset: 0 }}><Spark5 w={800} color="#CFC3D9" d={[60, 61, 63, 62, 64, 63, 65, 64, 66, 65, 67, 66, 68, 67, 69, 68, 70, 69]} /></div>
          </div>
        </div>
        <Row gap={12} layer="summary" className={s.soft} style={{ alignItems: "flex-start" }}>
          <Spark size={18} />
          <span className={s.small} style={{ lineHeight: 1.55 }}><span className={s.b}>{t.summaryLead}</span>{t.summary}</span>
        </Row>
      </Card>
    </Board>
  );
}

type WinnerCopy = { name: string; campaign: string; spend: string; conversions: string; costPerResult: string; ctr: string };

function Winner({ rank, w, img, share, best }: { rank: number; w: WinnerCopy; img: string; share: number; best?: boolean }) {
  const t = copy().inWinning;
  const cell = (l: string, v: string) => <div className={s.soft} style={{ padding: "10px 12px" }}><span className={`${s.xs} ${s.muted}`}>{l}</span><div className={s.h3}>{v}</div></div>;
  return (
    <div data-layer="winner" className={s.inner} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, border: best ? "1.5px solid #6373FF" : undefined, boxShadow: best ? "0 0 0 4px #EEF0FF" : undefined }}>
      <Row gap={12}>
        <div style={{ width: 76, height: 76, borderRadius: 12, background: `url(${img}) center/cover`, flexShrink: 0 }} />
        <Col gap={3} className={s.grow}><span className={`${s.small} ${s.accent} ${s.b}`}>{fmt(t.rank, { rank })}</span><span className={s.h3}>{w.name}</span><span className={`${s.xs} ${s.muted}`}>{w.campaign}</span></Col>
      </Row>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>{cell(t.cells.spend, w.spend)}{cell(t.cells.conversions, w.conversions)}{cell(t.cells.costPerResult, w.costPerResult)}{cell(t.cells.ctr, w.ctr)}</div>
      <Row gap={8}><Chip tone="primary">{fmt(t.share, { share })}</Chip></Row>
      <span className={`${s.xs} ${s.muted}`} style={{ lineHeight: 1.45 }}><b style={{ color: "#2A2722" }}>{t.measured}</b>{fmt(t.measuredDetail, { rank, conversions: w.conversions, costPerResult: w.costPerResult })}</span>
      <Row gap={8}><Btn style={{ height: 32 }}>{t.open}</Btn><Btn tone="primary" style={{ height: 32 }}><Spark size={12} color="#fff" />{t.generate}</Btn></Row>
    </div>
  );
}

function InWinning() {
  const t = copy().inWinning;
  return (
    <Board>
      <Card style={{ width: 880, display: "flex", flexDirection: "column", gap: 16 }} layer="panel">
        <Head eyebrow={t.eyebrow} title={t.title} right={<Btn tone="primary">{t.refresh}</Btn>} />
        <span className={`${s.small} ${s.muted}`} style={{ marginTop: -8 }}>{t.intro}</span>
        <Row gap={12} style={{ alignItems: "stretch" }}>
          <Winner best rank={1} w={t.winners[0]} img={BGI("08-deep-teal-seafoam")} share={44} />
          <Winner rank={2} w={t.winners[1]} img={BGI("05-cobalt-sky")} share={23} />
        </Row>
        <Col gap={8} layer="share">
          <Row gap={10} className={s.small}><span style={{ width: 150 }} className={s.muted}>{t.shareOfSpend}</span><div className={s.grow} style={{ display: "flex", height: 10, borderRadius: 999, overflow: "hidden", gap: 2 }}><div style={{ width: "29%", background: "#6373FF" }} /><div style={{ width: "27%", background: "#9BA6FF" }} /><div style={{ flex: 1, background: "#ECECEA" }} /></div></Row>
          <Row gap={10} className={s.small}><span style={{ width: 150 }} className={s.muted}>{t.shareOfResults}</span><div className={s.grow} style={{ display: "flex", height: 10, borderRadius: 999, overflow: "hidden", gap: 2 }}><div data-layer="progress" style={{ width: "44%", background: "#6373FF" }} /><div style={{ width: "23%", background: "#9BA6FF" }} /><div style={{ flex: 1, background: "#ECECEA" }} /></div></Row>
        </Col>
      </Card>
    </Board>
  );
}

function InUtm() {
  const t = copy().inUtm;
  /* UTM source, medium and campaign: identifiers, the same in every language (sessions: t.sessions) */
  const rows: [string, string, string][] = [
    ["google", "cpc", "q4-enterprise"], ["linkedin", "paid_social", "growth-brain-webinar"], ["facebook", "paid_social", "remarketing"], ["newsletter", "email", "october"],
  ];
  return (
    <Board>
      <Card style={{ width: 860, display: "flex", flexDirection: "column", gap: 16 }} layer="panel">
        <Head eyebrow={t.eyebrow} title={t.title} right={<Row gap={6}><Chip tone="outline">{t.range}</Chip><Chip>{t.compare}</Chip></Row>} />
        <div data-layer="chart" className={s.inner}>
          <Row gap={14} className={s.small}><span className={s.big} style={{ fontSize: 26 }}>{t.total}</span><span className={s.up}>{t.change}</span></Row>
          <div style={{ marginTop: 10 }}><Spark5 w={800} h={140} d={[310, 330, 300, 360, 410, 390, 380, 440, 470, 430, 460, 520, 500, 560, 610, 580, 600, 650]} /></div>
        </div>
        <table className={s.table}>
          <thead><tr>{t.columns.map((c) => <th key={c}>{c}</th>)}</tr></thead>
          <tbody>{rows.map((r, i) => <tr key={r[2]} data-layer="row"><td className={s.m}>{r[0]}</td><td className={s.muted}>{r[1]}</td><td><Chip tone="outline">{r[2]}</Chip></td><td className={s.m}>{t.sessions[i]}</td></tr>)}</tbody>
        </table>
      </Card>
    </Board>
  );
}

/* a demo share link: an address, the same in every language */
const PUBLIC_LINK = "ai.checkgrow.com/public/report/q4…";

function InLive() {
  const t = copy().inLive;
  return (
    <Board>
      <Card style={{ width: 840, display: "flex", flexDirection: "column", gap: 16, marginLeft: -60 }} layer="panel">
        <Head eyebrow={t.eyebrow} title={t.title} right={<Row gap={8}><Chip tone="outline">{t.range}</Chip><Btn>{t.live}</Btn></Row>} />
        <Row gap={10}>
          {t.kpis.map((k) => <div key={k.label} className={s.inner} style={{ flex: 1 }}><span className={`${s.xs} ${s.muted}`}>{k.label}</span><div style={{ fontSize: 22, fontWeight: 600 }}>{k.value}</div></div>)}
        </Row>
        <div className={s.inner} style={{ height: 190 }}><Spark5 w={780} h={160} d={[30, 34, 31, 38, 36, 42, 40, 47, 45, 52, 50, 58, 55, 62, 66, 64, 71, 75]} /></div>
      </Card>
      <Float layer="share" style={{ right: 170, top: 300, width: 370, padding: 20 }}>
        <Col gap={14}>
          <Row gap={8}><span className={s.h3}>{t.publicLink}</span></Row>
          <Row gap={8} className={s.soft} style={{ padding: "10px 12px" }}><span className={`${s.small} ${s.grow}`}>{PUBLIC_LINK}</span><Btn tone="primary" style={{ height: 30 }}>{t.copy}</Btn></Row>
          <span className={`${s.xs} ${s.muted}`} style={{ lineHeight: 1.5 }}>{t.note}</span>
          <Row gap={8} className={s.small}><Chip tone="success">{t.badges[0]}</Chip><Chip>{t.badges[1]}</Chip></Row>
          <span className={`${s.xs}`} style={{ color: "#B3261E" }}>{t.disable}</span>
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
