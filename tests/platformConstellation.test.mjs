import assert from 'node:assert/strict';
import test from 'node:test';
import { createPlatformConstellation, PLATFORM_WORDS, PLATFORM_DETAILS } from '../src/lib/platformConstellation.ts';

const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
// Geist dimensions measured in the local browser; round up conservatively.
function sizes(width, height) {
  const compact = height + 88 <= 540;
  const font = clamp(width * (compact ? .033 : .041), 26.4, compact ? 40 : 56);
  const centre = clamp(width * (compact ? .06 : .072), 44.8, compact ? 64 : 100);
  const small = clamp(width * .013, 13, 16);
  return {
    words: [4.39, 4.68, 2.38, 4.04, 2.9].map((ratio, i) => ({ width: Math.ceil(ratio * (i ? font : centre)), height: Math.ceil((i ? font : centre) * 1.1) })),
    details: [84, 96, 61, 45, 92, 92, 72, 59].map(w => ({ width: Math.ceil(w * small / 16), height: Math.ceil(small * 1.4) })),
    icons: Array.from({ length: 11 }, () => ({ width: compact || width < 640 ? 32 : 48, height: compact || width < 640 ? 32 : 48 })),
  };
}

for (const [width, height] of [[320,652], [375,724], [390,756], [430,844], [639,650], [640,650], [768,936], [1024,512], [1155,586], [1280,376], [1280,592], [1440,812], [1920,992]]) {
  test(`constellation ${width}×${height}: all main words fit, decoration clears text and edges`, () => {
    const dimensions = sizes(width, height);
    const layout = createPlatformConstellation({ width, height, ...dimensions });
    assert.equal(layout.words.length, 5);
    assert.deepEqual(layout.words[0], { x: width / 2, y: height / 2, visible: true });
    const regions = ['words', 'details', 'icons'].flatMap(group => layout[group].map((p, i) => ({ ...p, ...dimensions[group][i], group, i })).filter(p => p.visible));
    for (const a of regions) {
      assert.ok(a.x - a.width / 2 >= 16 && a.x + a.width / 2 <= width - 16, `${a.group} ${a.i} crosses horizontal edge`);
      assert.ok(a.y - a.height / 2 >= 16 && a.y + a.height / 2 <= height - 16, `${a.group} ${a.i} crosses vertical edge`);
    }
    for (let i = 0; i < regions.length; i++) {
      for (const b of regions.slice(i + 1)) {
        const a = regions[i];
        // More than the maximum combined icon/detail motion (4 + 6px).
        assert.ok(Math.abs(a.x - b.x) >= (a.width + b.width) / 2 + 10 || Math.abs(a.y - b.y) >= (a.height + b.height) / 2 + 10,
          `${a.group} ${a.i} collides with ${b.group} ${b.i}`);
      }
    }
    assert.ok(layout.details.filter(p => p.visible).length >= 6);
    assert.ok(layout.icons.filter(p => p.visible).length >= 6);
    assert.ok(new Set(layout.icons.filter(p=>p.visible).map(p=>Math.round(p.y))).size >= 6, 'icons must not collapse into rows');
    assert.deepEqual(createPlatformConstellation({ width, height, ...dimensions }), layout, 'resizing back restores positions');
  });
}

test('the requested five capabilities and feature labels remain in the story', () => {
  assert.deepEqual(PLATFORM_WORDS, ['Marketing', 'Operations', 'Sales', 'Research', 'Report']);
  for (const label of ['Campaigns', 'Social Media', 'Conversions', 'Competitors', 'Leads', 'Website']) assert.ok(PLATFORM_DETAILS.includes(label));
});
