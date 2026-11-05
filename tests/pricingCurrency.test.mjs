import assert from 'node:assert/strict';
import test from 'node:test';
import { currencies, displayPrice, isCurrency, isExchangeRateSnapshot, rateDateLabel, RATE_REFRESH_MS } from '../src/lib/pricingCurrency.ts';
import { createExchangeRateLoader, exchangeRateResponse, EXCHANGE_RATE_URL, parseEcbRates } from '../src/lib/pricingExchangeRates.ts';
import { plans, planPrice } from '../src/lib/pricing.ts';

const now = Date.parse('2026-11-05T12:00:00Z');
const rows = [
  { date: '2026-11-04', base: 'EUR', quote: 'CHF', rate: 0.9188 },
  { date: '2026-11-04', base: 'EUR', quote: 'USD', rate: 1.1267 },
  { date: '2026-11-04', base: 'EUR', quote: 'BRL', rate: 6.1579 },
];
const snapshot = () => parseEcbRates(rows, now);

test('four explicitly named currencies, with EUR as the sole source', () => {
  assert.deepEqual(currencies.map(c => c.code), ['EUR', 'CHF', 'USD', 'BRL']);
  assert.equal(isCurrency('GBP'), false);
  assert.equal(isCurrency('USD'), true);
  assert.equal(isCurrency(null), false);
  assert.equal(snapshot().rates.EUR, 1);
  assert.equal(rateDateLabel('2026-11-04'), '4 Nov 2026');
});

test('display removes decimals rather than rounding up, including near-integer fractions', () => {
  assert.equal(displayPrice(499.93, 'EUR'), '€499');
  assert.equal(displayPrice(499.999999999, 'EUR'), '€499');
  assert.equal(displayPrice(499, 'CHF', 0.9188), 'CHF 458');
  assert.equal(displayPrice(499, 'USD', 1.1267), 'US$562');
  assert.equal(displayPrice(499, 'BRL', 6.1579), 'R$ 3,072');
  assert.equal(displayPrice(0, 'EUR'), '€0');
  assert.equal(displayPrice(100, 'USD', 1.13), 'US$113');
  for (const bad of [NaN, Infinity, -1]) assert.throws(() => displayPrice(bad, 'EUR'));
  for (const bad of [NaN, Infinity, -1, 0]) assert.throws(() => displayPrice(499, 'USD', bad));
});

test('every plan and billing mode converts from unrounded EUR; yearly totals are not 12 rounded months', () => {
  for (const billing of ['monthly', 'annual']) {
    for (const plan of plans) {
      const euros = planPrice(plan, billing);
      if (euros === null) { assert.equal(plan.id, 'enterprise'); continue; }
      for (const { code, symbol } of currencies) {
        const rate = snapshot().rates[code];
        for (const multiplier of [1, 12]) {
          const expected = Math.floor(euros * multiplier * rate).toLocaleString('en-GB');
          assert.equal(displayPrice(euros * multiplier, code, rate), `${symbol}${expected}`);
        }
      }
    }
  }
  const price = planPrice(plans[0], 'annual');
  assert.equal(displayPrice(price, 'EUR'), '€449');
  assert.equal(displayPrice(price * 12, 'EUR'), '€5,389');
  assert.equal(plans[0].monthly, 499);
});

test('validates complete, same-day ECB observations and tolerates weekends', () => {
  assert.ok(isExchangeRateSnapshot(snapshot(), now));
  assert.ok(isExchangeRateSnapshot(snapshot(), now + 3 * 24 * RATE_REFRESH_MS));
  assert.equal(isExchangeRateSnapshot(snapshot(), now + 8 * 24 * RATE_REFRESH_MS), false);
  assert.equal(isExchangeRateSnapshot({ ...snapshot(), base: 'USD' }, now), false);
  assert.equal(isExchangeRateSnapshot({ ...snapshot(), date: '2026-11-30' }, now), false);
  assert.equal(isExchangeRateSnapshot({ ...snapshot(), date: '2026-02-30' }, now), false);
  assert.equal(isExchangeRateSnapshot({ ...snapshot(), rates: { EUR: 1 } }, now), false);
  for (const bad of [NaN, Infinity, 0, -1, 1000, '1.2', null]) {
    assert.equal(isExchangeRateSnapshot({ ...snapshot(), rates: { ...snapshot().rates, USD: bad } }, now), false);
  }
  for (const bad of [null, {}, [], rows.slice(1), [...rows, rows[0]], [rows[0], rows[0], rows[2]],
    rows.map(r => ({ ...r, base: 'USD' })), [rows[0], { ...rows[1], date: '2026-11-03' }, rows[2]]]) {
    assert.throws(() => parseEcbRates(bad, now));
  }
});

test('one fixed server request, finite timeout, no cookies; shared in-flight and hourly cache', async () => {
  let clock = now;
  let calls = 0;
  const load = createExchangeRateLoader(async (url, options) => {
    calls++;
    assert.equal(url, EXCHANGE_RATE_URL);
    assert.equal(new URL(url).searchParams.get('base'), 'EUR');
    assert.equal(new URL(url).searchParams.get('providers'), 'ecb');
    assert.equal(options.cache, 'no-store');
    assert.equal(options.redirect, 'error');
    assert.deepEqual(options.headers, { Accept: 'application/json' });
    assert.ok(options.signal instanceof AbortSignal);
    return Response.json(rows);
  }, () => clock);
  const values = await Promise.all([load(), load(), load()]);
  assert.equal(calls, 1);
  assert.deepEqual(values[0], snapshot());
  clock += RATE_REFRESH_MS - 1;
  await load();
  assert.equal(calls, 1);
  clock += 2;
  await load();
  assert.equal(calls, 2);
});

test('provider errors, malformed data and timeouts do not become successful responses or stale rates', async () => {
  for (const failure of [
    async () => new Response('unavailable', { status: 503 }),
    async () => new Response('not json'),
    async () => Response.json({ rates: {} }),
    () => { throw new DOMException('timeout', 'TimeoutError'); },
  ]) {
    let clock = now;
    let calls = 0;
    const load = createExchangeRateLoader((...args) => { calls++; return failure(...args); }, () => clock);
    await assert.rejects(load());
    await assert.rejects(load());
    assert.equal(calls, 1, 'back off on failed requests');
    clock += 60_001;
    await assert.rejects(load());
    assert.equal(calls, 2, 'allow retry after backoff');
  }
  let clock = now;
  const load = createExchangeRateLoader(async () => {
    if (clock !== now) throw new Error('offline');
    return Response.json(rows);
  }, () => clock);
  await load();
  clock += RATE_REFRESH_MS + 1;
  await assert.rejects(load(), /offline/);
});

test('API returns only public rates on 200 and a non-cacheable 503 on failure', async () => {
  const success = await exchangeRateResponse(async () => snapshot());
  assert.equal(success.status, 200);
  assert.equal(success.headers.get('cache-control'), 'public, max-age=300');
  assert.deepEqual(await success.json(), snapshot());
  const failure = await exchangeRateResponse(async () => { throw new Error('private provider details'); });
  assert.equal(failure.status, 503);
  assert.equal(failure.headers.get('cache-control'), 'no-store');
  assert.equal(failure.headers.get('retry-after'), '60');
  assert.deepEqual(await failure.json(), { error: 'Exchange rates temporarily unavailable' });
});
