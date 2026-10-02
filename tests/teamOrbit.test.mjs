import assert from 'node:assert/strict';
import test from 'node:test';
import { createTeamOrbit, teamOrbitPoint, teamPortraitScale, TEAM_PORTRAIT_GAP, TEAM_CONTENT_GAP, TEAM_EDGE_GAP } from '../src/lib/teamOrbit.ts';

const viewports = [
  [320, 568], [320, 740], [375, 812], [390, 844], [400, 480],
  [565, 322], [768, 1024], [1024, 600], [1155, 586], [1280, 376], [1280, 720], [1440, 900], [1920, 312],
];

for (const [width, height] of viewports) {
  test(`portraits stay separated throughout the orbit at ${width}×${height}`, () => {
    const portraitSize = width < 375 ? 32 : width < 640 ? 44 : 48;
    for (const count of [8, 10, 12]) {
      const orbit = createTeamOrbit({ viewportWidth: width, contentWidth: width - 15, height, count, portraitSize });
      const diameter = (portraitSize + 4) * orbit.portraitScale;
      for (let time = 0; time < 200; time += 0.2) {
        const points = Array.from({ length: count }, (_, i) => teamOrbitPoint(orbit, i, time));
        for (const [i, p] of points.entries()) {
          assert.ok(p.x - diameter / 2 >= 12 - 0.001);
          assert.ok(p.x + diameter / 2 <= width - 15 - 12 + 0.001);
          // Height is the stage below the separately reserved header area.
          assert.ok(p.y - diameter / 2 >= TEAM_EDGE_GAP - 0.001);
          assert.ok(p.y + diameter / 2 <= height - TEAM_EDGE_GAP + 0.001);
          for (const q of points.slice(i + 1)) {
            assert.ok(Math.hypot(p.x - q.x, p.y - q.y) >= diameter + TEAM_PORTRAIT_GAP - 0.001);
          }
        }
      }
    }
  });
}

for (const [width, height] of viewports) {
  test(`portraits never enter the measured content at ${width}×${height}`, () => {
    const contentWidth = width - 15;
    const protectedWidth = Math.min(width * 0.6, 448);
    const protectedHeight = height < 400 ? (width < 640 ? 140 : 220) : width < 640 ? 230 : 310;
    const orbit = createTeamOrbit({ viewportWidth: width, contentWidth, height, count: 10, portraitSize: width < 375 ? 32 : 48, protectedWidth, protectedHeight });
    const radius = ((width < 375 ? 32 : 48) + 4) * orbit.portraitScale / 2;
    assert.ok(orbit.portraitScale > 0, 'portraits remain visible');
    for (let time = 0; time < 400; time += 0.1) {
      for (let i = 0; i < 10; i++) {
        const p = teamOrbitPoint(orbit, i, time);
        const dx = Math.max(0, Math.abs(p.x - orbit.centerX) - protectedWidth / 2);
        const dy = Math.max(0, Math.abs(p.y - orbit.centerY) - protectedHeight / 2);
        assert.ok(Math.hypot(dx, dy) >= radius + TEAM_CONTENT_GAP - 0.001, `portrait ${i} touches content at ${time}`);
        const next = teamOrbitPoint(orbit, (i + 1) % orbit.count, time);
        assert.ok(Math.hypot(p.x - next.x, p.y - next.y) >= radius * 2 + TEAM_PORTRAIT_GAP - 0.001);
      }
    }
  });
}

test('larger text or a taller CTA recalculates a safe rail', () => {
  const options = { viewportWidth: 565, contentWidth: 550, height: 322, count: 10, portraitSize: 48, protectedWidth: 320 };
  const regular = createTeamOrbit({ ...options, protectedHeight: 140 });
  const enlarged = createTeamOrbit({ ...options, protectedHeight: 210 });
  assert.ok(enlarged.portraitScale < regular.portraitScale);
});

test('a changed portrait count gets new slots, including during live updates', () => {
  const options = { viewportWidth: 1440, contentWidth: 1425, height: 900, portraitSize: 48 };
  const oldOrbit = createTeamOrbit({ ...options, count: 8 });
  const newOrbit = createTeamOrbit({ ...options, count: 10 });
  // The former overlapping pairs (0/8 and 1/9) must get distinct positions.
  for (const [a, b] of [[0, 8], [1, 9]]) {
    const p = teamOrbitPoint(newOrbit, a, 10);
    const q = teamOrbitPoint(newOrbit, b, 10);
    assert.ok(Math.hypot(p.x - q.x, p.y - q.y) > 70);
  }
  assert.notDeepEqual(teamOrbitPoint(oldOrbit, 1, 10), teamOrbitPoint(newOrbit, 1, 10));
});

test('reduced-motion positions are stationary', () => {
  const orbit = createTeamOrbit({ viewportWidth: 390, contentWidth: 375, height: 844, count: 10, portraitSize: 44 });
  for (let i = 0; i < orbit.count; i++) {
    assert.deepEqual(teamOrbitPoint(orbit, i, 0, true), teamOrbitPoint(orbit, i, 200, true));
    assert.equal(teamPortraitScale(orbit, i, 0, true), teamPortraitScale(orbit, i, 200, true));
  }
});

test('portrait depth varies smoothly with movement, inside the protected maximum size', () => {
  for (const [width, height] of viewports) {
    const orbit = createTeamOrbit({ viewportWidth: width, contentWidth: width - 15, height, count: 10, portraitSize: 48 });
    for (let time = 0; time < 200; time += 0.2) {
      const scales = Array.from({ length: orbit.count }, (_, i) => teamPortraitScale(orbit, i, time));
      assert.ok(Math.max(...scales) - Math.min(...scales) > orbit.portraitScale * 0.25, 'portraits must not all be the same size');
      scales.forEach((scale, i) => {
        assert.ok(scale >= orbit.portraitScale * 0.72 - 1e-10);
        assert.ok(scale <= orbit.portraitScale, 'must stay inside the existing collision envelope');
        assert.ok(Math.abs(scale - teamPortraitScale(orbit, i, time + 1 / 60)) < 0.0002, 'no per-frame size jumps');
      });
    }
  }
});

test('a portrait recedes at the back and returns to original size at the front', () => {
  const orbit = createTeamOrbit({ viewportWidth: 1440, contentWidth: 1425, height: 812, count: 10, portraitSize: 48 });
  assert.equal(teamPortraitScale(orbit, 0, 0), 0.72 * orbit.portraitScale);
  assert.equal(teamPortraitScale(orbit, 0, Math.PI / 0.07), orbit.portraitScale);
  assert.ok(Math.abs(teamPortraitScale(orbit, 0, Math.PI * 2 / 0.07) - 0.72 * orbit.portraitScale) < 1e-10);
});

test('desktop portraits form a compact ellipse, not a screen-sized perimeter', () => {
  const orbit = createTeamOrbit({ viewportWidth: 1440, contentWidth: 1425, height: 812, count: 10, portraitSize: 48, protectedWidth: 448, protectedHeight: 301 });
  assert.equal(orbit.portraitScale, 1);
  assert.ok(orbit.radiusX < 390);
  assert.ok(orbit.radiusY < 290);
  for (let time = 0; time < 100; time++) {
    const p = teamOrbitPoint(orbit, 0, time, true);
    assert.ok(Math.abs(((p.x - orbit.centerX) / orbit.radiusX) ** 2 + ((p.y - orbit.centerY) / orbit.radiusY) ** 2 - 1) < 0.00001);
  }
});

test('line-level protection keeps a phone orbit compact without shrinking faces', () => {
  const protectedRegions = [
    { left: -72, right: 72, top: -92, bottom: -57 },
    { left: -89, right: 89, top: -65, bottom: -30 },
    { left: -78, right: 78, top: -38, bottom: -4 },
    { left: -43, right: 43, top: -12, bottom: 23 },
    { left: -92, right: 92, top: 39, bottom: 88 },
  ];
  const orbit = createTeamOrbit({ viewportWidth: 390, contentWidth: 375, height: 756, count: 10, portraitSize: 44, protectedRegions });
  assert.equal(orbit.portraitScale, 1);
  assert.ok(orbit.radiusY < 280);
  for (let time = 0; time < 100; time += 0.1) {
    for (let i = 0; i < 10; i++) {
      const p = teamOrbitPoint(orbit, i, time);
      for (const rect of protectedRegions) {
        const x = p.x - orbit.centerX, y = p.y - orbit.centerY;
        const distance = Math.hypot(Math.max(rect.left - x, 0, x - rect.right), Math.max(rect.top - y, 0, y - rect.bottom));
        assert.ok(distance >= 24 + TEAM_CONTENT_GAP);
      }
    }
  }
});
