import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync, statSync } from 'node:fs';
import { tutorials, getTutorial, tutorialPath, videoDuration, tutorialDate } from '../src/lib/tutorials.ts';

const asset = path => new URL(`../public${path}`, import.meta.url);
const seconds = timestamp => timestamp.split(':').reduce((total, part) => total * 60 + Number(part), 0);

test('tutorial routes are unique, URL-safe and resolve only known records', () => {
  assert.equal(new Set(tutorials.map(tutorial => tutorial.slug)).size, tutorials.length);
  for (const tutorial of tutorials) {
    assert.match(tutorial.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(getTutorial(tutorial.slug), tutorial);
    assert.equal(tutorialPath(tutorial.slug), `/tutorials/${tutorial.slug}`);
  }
  assert.equal(getTutorial('missing-tutorial'), undefined);
  assert.equal(getTutorial('../sales-outreach'), undefined);
});

test('display helpers format British dates and padded video durations', () => {
  assert.equal(tutorialDate('2026-10-01'), '1 October 2026');
  assert.equal(videoDuration(396), '6:36');
  assert.equal(videoDuration(857), '14:17');
  assert.equal(videoDuration(60), '1:00');
  assert.equal(videoDuration(9), '0:09');
});

for (const tutorial of tutorials) {
  test(`${tutorial.slug}: complete content and unique article anchors`, () => {
    for (const field of ['title', 'description', 'introduction', 'prerequisites', 'takeaway']) {
      assert.ok(tutorial[field].length > 15, field);
    }
    const ids = ['step-by-step', ...tutorial.steps.map(step => step.id), ...tutorial.videos.map(video => video.id)];
    assert.equal(new Set(ids).size, ids.length);
    assert.equal(tutorial.videos.length, 2);
    assert.ok(tutorial.videos[0].durationSeconds < tutorial.videos[1].durationSeconds);
    assert.ok(statSync(asset(tutorial.cover)).size < 100_000);
    assert.ok(statSync(asset(`/tutorials/${tutorial.slug}/social.webp`)).size < 100_000);
  });

  for (const video of tutorial.videos) {
    test(`${video.id}: media exists and is below the 15 MB limit`, () => {
      const size = statSync(asset(video.src)).size;
      assert.ok(size > 1_000_000 && size < 15_000_000, `Unexpected video size: ${size}`);
      assert.equal(video.type, video.src.endsWith('.webm') ? 'video/webm' : 'video/mp4');
      assert.ok(statSync(asset(video.poster)).size < 150_000);
      assert.ok(video.width > video.height && video.height > 0);
    });

    test(`${video.id}: captions are ordered, timed and cover the recording`, () => {
      const text = readFileSync(asset(video.captions), 'utf8');
      assert.ok(text.startsWith('WEBVTT\n'));
      const cues = [...text.matchAll(/(\d{2}:\d{2}:\d{2}\.\d{3}) --> (\d{2}:\d{2}:\d{2}\.\d{3})/g)];
      assert.ok(cues.length > 30);
      let previousEnd = 0;
      for (const cue of cues) {
        const start = seconds(cue[1]);
        const end = seconds(cue[2]);
        assert.ok(start >= previousEnd, `Overlapping cue at ${cue[1]}`);
        assert.ok(end > start && end <= video.durationSeconds + 1);
        previousEnd = end;
      }
      assert.ok(previousEnd >= video.durationSeconds - 10);
    });
  }
}

test('Sales guide distinguishes practice drafts from real sending', () => {
  const tutorial = getTutorial('sales-outreach');
  assert.match(tutorial.steps.find(step => step.id === 'teach-the-brain').body, /practice drafts/);
  assert.match(tutorial.steps.find(step => step.id === 'review-outreach').body, /approving a comment or message sends it/);
});
