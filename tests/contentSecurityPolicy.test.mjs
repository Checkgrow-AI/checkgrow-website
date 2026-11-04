import assert from 'node:assert/strict';
import test from 'node:test';
import { contentSecurityPolicy, googleMeasurementHosts } from '../src/lib/contentSecurityPolicy.ts';

const directives = Object.fromEntries(contentSecurityPolicy.split('; ').map(rule => {
  const [name, ...sources] = rule.split(' ');
  return [name, sources];
}));

test('production permits the actual Meta and LinkedIn SDKs, not just GTM', () => {
  for (const origin of ['https://connect.facebook.net', 'https://snap.licdn.com']) {
    assert.ok(directives['script-src'].includes(origin), origin);
  }
});

test('both image and connection transports allow social and Google conversion beacons', () => {
  const origins = [
    'https://www.facebook.com', 'https://px.ads.linkedin.com',
    'https://dc.ads.linkedin.com', 'https://www.linkedin.com',
    'https://www.googleadservices.com', 'https://googleads.g.doubleclick.net',
    'https://stats.g.doubleclick.net', 'https://ad.doubleclick.net',
    'https://pagead2.googlesyndication.com',
  ];
  for (const directive of ['img-src', 'connect-src']) {
    for (const origin of origins) assert.ok(directives[directive].includes(origin), `${directive}: ${origin}`);
    for (const host of googleMeasurementHosts) assert.ok(directives[directive].includes(host), host);
  }
});

test('Google regional hosts are explicit, measurement-only and bounded in header size', () => {
  assert.equal(new Set(googleMeasurementHosts).size, googleMeasurementHosts.length);
  assert.ok(googleMeasurementHosts.length > 180);
  for (const host of googleMeasurementHosts) {
    assert.match(host, /^www\.google\.[a-z.]+$/);
    assert.ok(!directives['script-src'].includes(host));
  }
  for (const host of ['www.google.de', 'www.google.co.uk', 'www.google.hr', 'www.google.com.br']) {
    assert.ok(googleMeasurementHosts.includes(host));
  }
  assert.ok(Buffer.byteLength(contentSecurityPolicy) < 7500, 'leave room for other response headers');
});

test('consent, conversion frames and Meta POST fallback are narrowly allowed', () => {
  assert.deepEqual(directives['frame-src'], ["'self'", 'https://web.cmp.usercentrics.eu', 'https://www.googletagmanager.com', 'https://www.facebook.com/tr/']);
  assert.deepEqual(directives['form-action'], ["'self'", 'https://www.facebook.com/tr/']);
});

test('security boundaries remain intact without broad schemes or unsafe eval', () => {
  for (const directive of ['default-src', 'base-uri']) {
    assert.deepEqual(directives[directive], ["'self'"]);
  }
  for (const directive of ['object-src', 'frame-ancestors']) assert.deepEqual(directives[directive], ["'none'"]);
  assert.ok('upgrade-insecure-requests' in directives);
  for (const sources of Object.values(directives)) {
    for (const source of sources) {
      assert.ok(!['*', 'https:', 'http:', "'unsafe-eval'", "'strict-dynamic'"].includes(source), source);
      assert.ok(!source.startsWith('http://'));
    }
    assert.equal(new Set(sources).size, sources.length);
  }
});

test('the application emits the tested policy only in production and preserves other headers', async () => {
  const original = process.env.NODE_ENV;
  try {
    process.env.NODE_ENV = 'production';
    const { default: production } = await import('../next.config.ts?csp-test-production');
    const [{ source, headers }] = await production.headers();
    assert.equal(source, '/:path*');
    assert.equal(headers.filter(h => h.key === 'Content-Security-Policy').length, 1);
    assert.equal(headers.find(h => h.key === 'Content-Security-Policy').value, contentSecurityPolicy);
    assert.equal(headers.find(h => h.key === 'X-Frame-Options').value, 'DENY');
    assert.equal(headers.find(h => h.key === 'X-Content-Type-Options').value, 'nosniff');
    process.env.NODE_ENV = 'development';
    const { default: development } = await import('../next.config.ts?csp-test-development');
    assert.ok(!(await development.headers())[0].headers.some(h => h.key === 'Content-Security-Policy'));
  } finally {
    if (original === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = original;
  }
});
