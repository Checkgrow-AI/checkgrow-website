import assert from 'node:assert/strict';
import test from 'node:test';
import { heroStoryProgress, platformLocalProgress, platformWordFrame, platformDetailFrame, platformIconOpacity, HERO_SCROLL_SCREENS, PLATFORM_START, PLATFORM_END, OPENING_SCROLL_SCREENS, PLATFORM_SCROLL_SCREENS, ENDING_SCROLL_SCREENS } from '../src/lib/heroTimeline.ts';

test('the shorter story preserves the opening and final scene scroll pace', () => {
  assert.equal(heroStoryProgress(0), 0);
  assert.ok(Math.abs(heroStoryProgress(1) - 1) < 1e-10);
  assert.ok(Math.abs(OPENING_SCROLL_SCREENS - 7.2 * 0.39) < 1e-10);
  assert.ok(Math.abs(ENDING_SCROLL_SCREENS - 7.2 * 0.075) < 1e-10);
  assert.ok(PLATFORM_SCROLL_SCREENS < 7.2 * 0.535 * 0.42);
  assert.ok(HERO_SCROLL_SCREENS < 5);
  assert.ok(Math.abs(heroStoryProgress(OPENING_SCROLL_SCREENS / HERO_SCROLL_SCREENS) - PLATFORM_START) < 1e-10);
  assert.ok(Math.abs(heroStoryProgress((OPENING_SCROLL_SCREENS + PLATFORM_SCROLL_SCREENS) / HERO_SCROLL_SCREENS) - PLATFORM_END) < 1e-10);
  let previous = 0;
  for (let raw = 0; raw <= 1; raw += 0.001) {
    const next = heroStoryProgress(raw);
    assert.ok(next >= previous);
    assert.ok(next - previous < 0.002);
    previous = next;
  }
});

test('all five words share a still, fully visible reading beat', () => {
  for (let local = 0.27; local < 0.86; local += 0.01) {
    for (let index = 0; index < 5; index++) {
      assert.deepEqual(platformWordFrame(local, index), { opacity: 1, scale: 1 });
    }
  }
  assert.ok(platformWordFrame(0.1, 0).opacity > platformWordFrame(0.1, 4).opacity);
  for (let index = 0; index < 5; index++) {
    assert.equal(platformWordFrame(0, index).opacity, 0);
    assert.equal(platformWordFrame(1, index).opacity, 0);
  }
});

test('small labels arrive and disappear in waves before the shared exit', () => {
  for (let index = 0; index < 8; index++) {
    assert.equal(platformDetailFrame(0.1, index).opacity, 0);
    assert.equal(platformDetailFrame(0.5, index).opacity, 1);
    assert.equal(platformDetailFrame(0.86, index).opacity, 0);
  }
  assert.notEqual(platformDetailFrame(0.3, 0).opacity, platformDetailFrame(0.3, 2).opacity);
  assert.equal(platformIconOpacity(0), 0);
  assert.equal(platformIconOpacity(0.5), 1);
  assert.equal(platformIconOpacity(0.86), 0);
});

test('reverse scrolling is deterministic and nothing spills into the team', () => {
  const samples = [0, .15, .3, .5, .7, .9, 1];
  const frames = samples.map(p => platformWordFrame(platformLocalProgress(p), 2));
  assert.deepEqual([...samples].reverse().map(p => platformWordFrame(platformLocalProgress(p), 2)).reverse(), frames);
  assert.equal(platformLocalProgress(-1), 0);
  assert.equal(platformLocalProgress(2), 1);
  assert.equal(platformWordFrame(platformLocalProgress(0.925), 0).opacity, 0);
});
