import assert from 'node:assert/strict';
import test from 'node:test';
import { heroStoryProgress, verticalFrame, satelliteFrame, HERO_SCROLL_SCREENS, VERTICAL_START, VERTICAL_END } from '../src/lib/heroTimeline.ts';

test('the timeline stays continuous and preserves the opening pace', () => {
  assert.equal(heroStoryProgress(0), 0);
  assert.equal(heroStoryProgress(1), 1);
  let previous = 0;
  for (let raw = 0; raw <= 1; raw += 0.001) {
    const next = heroStoryProgress(raw);
    assert.ok(next >= previous);
    assert.ok(next - previous < 0.002);
    previous = next;
  }
  assert.ok(Math.abs(0.39 * HERO_SCROLL_SCREENS - 0.54 * 5.2) < 0.01);
});

for (let index = 0; index < 4; index++) {
  test(`chapter ${index + 1}: complete title holds still while details scroll`, () => {
    const duration = (VERTICAL_END - VERTICAL_START) / 4;
    const progress = local => VERTICAL_START + duration * (index + local);
    for (let local = 0.13; local < 0.92; local += 0.01) {
      const title = verticalFrame(progress(local), index, 4);
      assert.equal(title.opacity, 1);
      assert.equal(title.y, 0);
    }
    for (let detail = 0; detail < 6; detail++) {
      assert.equal(satelliteFrame(0.13, detail, 6).opacity, 0);
      assert.equal(satelliteFrame(0.55, detail, 6).opacity, 1);
      assert.equal(satelliteFrame(0.9, detail, 6).opacity, 0);
      assert.ok(satelliteFrame(0.3, detail, 6).y > satelliteFrame(0.85, detail, 6).y);
    }
    for (let other = 0; other < 4; other++) {
      if (other !== index) assert.equal(verticalFrame(progress(0.5), other, 4).opacity, 0);
    }
  });
}
