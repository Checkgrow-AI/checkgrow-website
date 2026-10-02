import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync, statSync } from 'node:fs';
import { newsPosts, newsCategories, getNewsPost, newsPath, filterNews, categoryLabel, securityRelease, securitySections } from '../src/lib/news.ts';
import { tutorials } from '../src/lib/tutorials.ts';

test('News records have unique routes, newest first, and every tutorial is retained', () => {
  assert.equal(new Set(newsPosts.map(post => post.slug)).size, newsPosts.length);
  assert.equal(newsPosts[0], securityRelease);
  assert.deepEqual(newsPosts.map(post => post.publishedAt), newsPosts.map(post => post.publishedAt).sort().reverse());
  for (const post of newsPosts) {
    assert.match(post.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(getNewsPost(post.slug), post);
    assert.equal(newsPath(post.slug), `/news/${post.slug}`);
    assert.ok(categoryLabel(post.category));
    for (const path of [post.cover, post.social]) assert.ok(statSync(new URL(`../public${path}`, import.meta.url)).size > 0);
  }
  for (const tutorial of tutorials) assert.equal(getNewsPost(tutorial.slug).title, tutorial.title);
  assert.equal(getNewsPost('missing'), undefined);
  assert.equal(getNewsPost('../security-update-october-2026'), undefined);
});

test('categories filter immediately without changing the source collection', () => {
  assert.deepEqual(newsCategories.map(category => category.label), ['All news', 'Tutorials', 'Security Releases']);
  const before = JSON.stringify(newsPosts);
  assert.deepEqual(filterNews(newsPosts, 'all'), newsPosts);
  assert.equal(filterNews(newsPosts, 'tutorials').length, tutorials.length);
  assert.deepEqual(filterNews(newsPosts, 'security-releases'), [securityRelease]);
  assert.deepEqual(filterNews([], 'tutorials'), []);
  assert.equal(JSON.stringify(newsPosts), before);
});

test('security copy has stable anchors and bounded, non-certification language', () => {
  const content = readFileSync(new URL('../src/components/news/SecurityArticle.tsx', import.meta.url), 'utf8');
  const copy = `${JSON.stringify(securitySections)} ${content}`;
  assert.equal(new Set(securitySections.map(section => section.id)).size, securitySections.length);
  for (const section of securitySections) {
    assert.match(section.id, /^[a-z-]+$/);
    assert.ok(section.introduction.length > 30);
    assert.ok(section.changes.length >= 3);
    assert.equal(new Set(section.changes.map(change => change.label)).size, section.changes.length);
    for (const change of section.changes) assert.ok(change.label && change.detail.length > 30);
  }
  assert.match(copy, /not an independent penetration-test report/);
  assert.match(copy, /production penetration testing was outside its scope/);
  assert.match(copy, /not automatically enabled for every workspace/);
  assert.match(copy, /not a claim of zero retention/);
  assert.doesNotMatch(copy, /supabase|\/functions\/|service_role|enc1\.|BEGIN PRIVATE|api[_-]?key|Security Report\.pdf|CG-SEC-00/i);
  assert.doesNotMatch(copy, / — /);
});

test('security tables are short, labelled and use precise retention periods', () => {
  const tables = securitySections.filter(section => section.table).map(section => section.table);
  assert.equal(tables.length, 2);
  for (const table of tables) {
    assert.ok(table.caption.length > 10);
    assert.equal(table.columns.length, 2);
    assert.equal(table.rows.length, 3);
    for (const row of table.rows) assert.ok(row.length === 2 && row.every(cell => cell.length > 0));
  }
  assert.deepEqual(securitySections.find(section => section.id === 'data-lifecycle').table.rows, [
    ['Activity logs', '12 months, then scheduled deletion.'],
    ['Error logs', '12 months, then scheduled deletion.'],
    ['AI usage records', '24 months, then scheduled deletion.'],
  ]);
});

test('legacy page redirects leave tutorial media paths alone', () => {
  const config = readFileSync(new URL('../next.config.ts', import.meta.url), 'utf8');
  assert.match(config, /source: "\/tutorials", destination: "\/news", permanent: true/);
  assert.match(config, /source: "\/tutorials\/:slug", destination: "\/news\/:slug", permanent: true/);
  assert.doesNotMatch(config, /source: "\/tutorials\/:(?:slug|path)\*"/);
  const sitemap = readFileSync(new URL('../src/app/sitemap.ts', import.meta.url), 'utf8');
  assert.match(sitemap, /newsPosts\.map/);
  assert.doesNotMatch(sitemap, /\/tutorials/);
});
