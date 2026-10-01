import assert from 'node:assert/strict';
import test from 'node:test';
import { existsSync } from 'node:fs';
import { features, homeFeatures, featurePath } from '../src/lib/features.ts';
import { featureScreens } from '../src/lib/featureScreens.ts';

const asset = path => new URL(`../public${path}`, import.meta.url);

test('feature slugs are unique, URL-safe anchors with matching paths', () => {
  assert.equal(new Set(features.map(feature => feature.slug)).size, features.length);
  for (const feature of features) {
    assert.match(feature.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(featurePath(feature.slug), `/features#${feature.slug}`);
  }
  assert.equal(featurePath(), '/features');
});

test('homepage shows the six approved features in order', () => {
  assert.deepEqual(homeFeatures.map(feature => feature.slug), [
    'knowledge-centre', 'insights', 'campaigns', 'creative-studio', 'competitors', 'ai-assistant',
  ]);
  assert.equal(features.length, 9);
});

for (const feature of features) {
  test(`${feature.slug}: complete copy, three steps and three screens`, () => {
    for (const field of ['name', 'title', 'scenario', 'body']) assert.ok(feature[field].trim().length > 10 || field === 'name');
    assert.equal(feature.points.length, 3);
    assert.equal(feature.steps.length, 3);
    assert.equal(new Set(feature.steps.map(step => step.label)).size, 3);
    for (const step of feature.steps) assert.ok(step.label && step.caption);
    assert.equal(feature.screens.length, 3);
    for (const key of feature.screens) assert.ok(featureScreens[key], `missing screen ${key}`);
    assert.ok(existsSync(asset(feature.background)), `missing ${feature.background}`);
  });
}

test('screens are self-contained: local assets only, no scripts or legacy blob links', () => {
  for (const [key, html] of Object.entries(featureScreens)) {
    assert.doesNotMatch(html, /<script|\/_blob\/|on[a-z]+="/i, key);
    assert.doesNotMatch(html, /#4F5BD5/i, `${key} uses the retired primary colour`);
    for (const [, path] of html.matchAll(/(?:src="|url\()(\/[^")]+)/g)) {
      assert.match(path, /^\/features\//, `${key} links outside /features: ${path}`);
      assert.ok(existsSync(asset(path)), `${key} missing asset ${path}`);
    }
  }
});

test('features page social image exists', () => {
  assert.ok(existsSync(asset('/features/social.webp')));
});
