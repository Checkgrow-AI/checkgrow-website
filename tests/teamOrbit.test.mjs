import assert from 'node:assert/strict';
import test from 'node:test';
import { createTeamOrbit, teamOrbitPoint, TEAM_PORTRAIT_GAP } from '../src/lib/teamOrbit.ts';

const viewports = [
  [320, 568], [320, 740], [375, 812], [390, 844], [400, 480],
  [768, 1024], [1024, 600], [1280, 464], [1280, 720], [1440, 900], [1920, 400],
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
          assert.ok(p.y - diameter / 2 >= 72 - 0.001);
          assert.ok(p.y + diameter / 2 <= height - 72 + 0.001);
          for (const q of points.slice(i + 1)) {
            assert.ok(Math.hypot(p.x - q.x, p.y - q.y) >= diameter + TEAM_PORTRAIT_GAP - 0.001);
          }
        }
      }
    }
  });
}

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
  }
});
