import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

test('scroll reset is installed once at the demo layout, not on every website page', () => {
  const layout = readFileSync(new URL('../src/app/book-a-demo/layout.tsx', import.meta.url), 'utf8');
  const root = readFileSync(new URL('../src/app/layout.tsx', import.meta.url), 'utf8');
  assert.equal(layout.match(/<DemoScrollReset\s*\/>/g).length, 1);
  assert.doesNotMatch(root, /DemoScrollReset/);
});

test('demo entry uses an instant one-shot reset, cleans up and preserves modified or anchored links', () => {
  const component = readFileSync(new URL('../src/components/demo/DemoScrollReset.tsx', import.meta.url), 'utf8');
  assert.match(component, /useLayoutEffect/);
  assert.match(component, /top: 0, left: 0, behavior: "instant"/);
  assert.match(component, /cancelAnimationFrame\(frame\)/);
  assert.match(component, /removeEventListener\("click", onClick\)/);
  assert.match(component, /event\.metaKey/);
  assert.match(component, /link\.hasAttribute\("download"\)/);
  assert.match(component, /target\.origin === window\.location\.origin/);
  assert.match(component, /!target\.hash/);
  assert.doesNotMatch(component, /addEventListener\("scroll"|setInterval|setTimeout|history\.scrollRestoration/);
});
