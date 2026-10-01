import assert from 'node:assert/strict';
import test from 'node:test';
import { shiftBenefits, shiftStepFromProgress } from '../src/lib/shiftStory.ts';

const COUNT = shiftBenefits.length;

test('all four approved metrics have a unique topic and complete readable copy', () => {
  assert.deepEqual(shiftBenefits.map(s => s.stat), ['8–25 hrs', '3–10%', '40–70%', 'Every result']);
  assert.equal(new Set(shiftBenefits.map(s => s.id)).size, 4);
  for (const benefit of shiftBenefits) {
    for (const field of ['title', 'description', 'label', 'body']) assert.ok(benefit[field].length > 10);
  }
});

test('pinned progress maps to equal chapter slices, forwards and backwards', () => {
  const sequence = [0, 0.1, 0.26, 0.49, 0.5, 0.74, 0.76, 0.99, 1, 0.6, 0.3, 0.2, 0];
  assert.deepEqual(sequence.map(p => shiftStepFromProgress(p, COUNT)), [0, 0, 1, 1, 2, 2, 3, 3, 3, 2, 1, 0, 0]);
});

test('progress outside the story holds the first and last chapter', () => {
  assert.equal(shiftStepFromProgress(-0.4, COUNT), 0);
  assert.equal(shiftStepFromProgress(1.7, COUNT), COUNT - 1);
  assert.equal(shiftStepFromProgress(Number.NaN, COUNT), 0);
  assert.equal(shiftStepFromProgress(0.5, 0), 0);
});
