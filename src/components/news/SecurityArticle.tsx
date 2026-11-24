import { LocalLink as Link } from "@/i18n/client";
import { localeInfo } from "@/i18n/config";
import { getLang, getT } from "@/i18n/server";
import type { SecuritySection } from "@/lib/news";
import { tutorialDate } from "@/lib/tutorials";
import editorial from "@/components/tutorials/Tutorials.module.css";
import styles from "./News.module.css";

export function SecurityArticle({ publishedAt }: { publishedAt: string }) {
  const t = getT("news").security;
  const lang = getLang();
  const sections: readonly SecuritySection[] = t.sections;
  return (
    <>
      <p className={editorial.intro}>{t.intro}</p>
      <section className={styles.summary} aria-labelledby="review-summary">
        <h2 id="review-summary">{t.summary.title}</h2>
        <dl>
          <div><dt>{t.summary.publishedLabel}</dt><dd>{tutorialDate(publishedAt, localeInfo[lang].tag)}</dd></div>
          {t.summary.items.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
        </dl>
      </section>
      {sections.map(section => (
        <section key={section.id} id={section.id} className={styles.section} aria-labelledby={`${section.id}-title`}>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          <p>{section.introduction}</p>
          <ul className={styles.changeList}>
            {section.changes.map(change => <li key={change.label}><strong>{change.label}.</strong> {change.detail}</li>)}
          </ul>
          {section.table && <div className={styles.tableFrame}>
            <table className={styles.controlTable}>
              <caption>{section.table.caption}</caption>
              <thead><tr>{section.table.columns.map(column => <th key={column} scope="col">{column}</th>)}</tr></thead>
              <tbody>{section.table.rows.map(([control, detail]) => <tr key={control}><th scope="row">{control}</th><td>{detail}</td></tr>)}</tbody>
            </table>
          </div>}
          {section.note && <p className={styles.note}>{section.note}</p>}
        </section>
      ))}
      <section id="assessment-scope" className={`${styles.section} ${styles.scope}`} aria-labelledby="assessment-scope-title">
        <h2 id="assessment-scope-title">{t.scope.title}</h2>
        <ul className={styles.changeList}>
          {t.scope.items.map(item => <li key={item.label}><strong>{item.label}</strong> {item.detail}</li>)}
        </ul>
      </section>
      <section id="security-review" className={styles.contact} aria-labelledby="security-review-title">
        <h2 id="security-review-title">{t.contact.title}</h2>
        <p>{t.contact.body}</p>
        <Link href="/book-a-demo">{t.contact.link} <span aria-hidden>↗</span></Link>
      </section>
    </>
  );
}
