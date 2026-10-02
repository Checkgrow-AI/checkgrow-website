import { securitySections } from "@/lib/news";
import editorial from "@/components/tutorials/Tutorials.module.css";
import styles from "./News.module.css";

export function SecurityArticle() {
  return (
    <>
      <p className={editorial.intro}>Your workspace connects company knowledge, files and business tools. This update explains the security controls strengthened in our recent releases, what each one does and the evidence behind it.</p>
      <section className={styles.summary} aria-labelledby="review-summary">
        <h2 id="review-summary">This update at a glance</h2>
        <dl>
          <div><dt>Published</dt><dd>2 October 2026</dd></div>
          <div><dt>Release period covered</dt><dd>28 September to 1 October 2026</dd></div>
          <div><dt>Evidence basis</dt><dd>Internal security review, targeted staging tests and production release records</dd></div>
          <div><dt>Purpose</dt><dd>A public overview for customers and proof-of-concept security reviews</dd></div>
        </dl>
      </section>
      {securitySections.map(section => (
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
        <h2 id="assessment-scope-title">What this assessment summary covers</h2>
        <ul className={styles.changeList}>
          <li><strong>Author and evidence.</strong> This is a Checkgrow-authored summary of internal security work, targeted tests and production release records, current to the period stated above.</li>
          <li><strong>Assessment scope.</strong> The underlying assessment reviewed staging on 28 September 2026. It sampled selected controls; production penetration testing was outside its scope.</li>
          <li><strong>Assurance limits.</strong> This is not an independent penetration-test report, a third-party attestation or a compliance certification. It does not establish SOC 2 or HIPAA certification or guarantee that every vulnerability has been eliminated.</li>
          <li><strong>Responsible disclosure.</strong> This overview describes implemented protections without exposing detailed findings, internal configuration or operational information.</li>
        </ul>
      </section>
      <section id="security-review" className={styles.contact} aria-labelledby="security-review-title">
        <h2 id="security-review-title">Planning a security review or POC?</h2>
        <p>Share your onboarding checklist and the assurance your organisation needs. Our team can clarify the controls relevant to your use case and discuss the scope and availability of supporting evidence. If you require an independent assessment, ask us to confirm that requirement separately.</p>
        <a href="mailto:bruno@checkgrow.com?subject=Checkgrow%20security%20review">Discuss your security requirements <span aria-hidden>↗</span></a>
      </section>
    </>
  );
}
