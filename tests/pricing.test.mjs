import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { ANNUAL_DISCOUNT, formatPrice, planPrice, plans, pricingDescription, pricingFaqItems } from '../src/lib/pricing.ts';

test('the dedicated page preserves the approved homepage plans', () => {
  assert.deepEqual(plans.map(({ id, monthly }) => [id, monthly]), [
    ['business', 499], ['agency', 997], ['growth', 4997], ['enterprise', null],
  ]);
  assert.equal(ANNUAL_DISCOUNT, 0.1);
  assert.equal(new Set(plans.map(plan => plan.id)).size, plans.length);
});

test('both billing modes use the same prices and exact formatted annual totals', () => {
  assert.deepEqual(plans.map(plan => planPrice(plan, 'monthly')), [499, 997, 4997, null]);
  const annual = plans.map(plan => planPrice(plan, 'annual'));
  assert.deepEqual(annual.map(price => price === null ? 'Custom' : formatPrice(price)), ['449.10', '897.30', '4,497.30', 'Custom']);
  assert.deepEqual(annual.filter(price => price !== null).map(price => formatPrice(price * 12)), ['5,389.20', '10,767.60', '53,967.60']);
});

test('pricing answers and metadata contain the shared plan facts', () => {
  const text = pricingFaqItems.map(item => item.a).join(' ');
  assert.equal(new Set(pricingFaqItems.map(item => item.q)).size, pricingFaqItems.length);
  for (const plan of plans) {
    assert.ok(text.includes(plan.name));
    assert.ok(text.includes(plan.specs[1].value.toLowerCase()));
    assert.ok(pricingDescription.includes(plan.monthly === null ? 'custom pricing' : formatPrice(plan.monthly)));
    assert.deepEqual(plan.specs.map(spec => spec.label), ['Brands', 'Growth Credits', 'Team seats', 'Managed accounts']);
    assert.ok(pricingFaqItems.every(item => item.q && item.a && !item.a.includes('undefined')));
  }
});

test('every plan uses the same internal demo booking destination', () => {
  for (const plan of plans) {
    assert.equal(plan.cta.href, '/book-a-demo');
    assert.ok(!plan.cta.external);
  }
  const component = readFileSync(new URL('../src/components/sections/Pricing.tsx', import.meta.url), 'utf8');
  assert.match(component, /<Link\s+href=\{plan\.cta\.href\}/);
  assert.doesNotMatch(component, /opens booking calendar/);
  assert.doesNotMatch(component, /<Link\s+href=\{plan\.cta\.href\}[^>]*target=/);
});

test('mobile booking shortcut and machine-readable contact use the demo flow', () => {
  const rail = readFileSync(new URL('../src/components/MobileScrollRail.tsx', import.meta.url), 'utf8');
  assert.match(rail, /label: "Book a demo", href: "\/book-a-demo"/);
  assert.match(rail, /router\.push\(s\.href\)/);
  const markdown = readFileSync(new URL('../src/lib/markdown.ts', import.meta.url), 'utf8');
  assert.match(markdown, /Book a demo or talk to our team \(all plans\): \$\{BOOK_DEMO\}/);
  assert.doesNotMatch(markdown, /SALES_CALENDAR|calendar\.app\.google/);
  const security = readFileSync(new URL('../src/components/news/SecurityArticle.tsx', import.meta.url), 'utf8');
  assert.match(security, /<Link href="\/book-a-demo">Discuss your security requirements/);
});

test('the standalone route reuses pricing and the shared FAQ rather than copying plans', () => {
  const page = readFileSync(new URL('../src/app/pricing/page.tsx', import.meta.url), 'utf8');
  const home = readFileSync(new URL('../src/app/page.tsx', import.meta.url), 'utf8');
  assert.match(page, /<Pricing standalone\s*\/>/);
  assert.match(home, /<Pricing\s*\/>/);
  assert.match(page, /items=\{pricingFaqItems\}/);
  assert.match(page, /canonical: "\/pricing"/);
  assert.doesNotMatch(page, /499|997|4997/);
});

test('the branded currency menu precedes billing in the shared pricing component', () => {
  const component = readFileSync(new URL('../src/components/sections/Pricing.tsx', import.meta.url), 'utf8');
  const currency = component.indexOf('<CurrencySelect ');
  assert.ok(currency > 0 && currency < component.indexOf('aria-label="Billing frequency"'));
  assert.doesNotMatch(component, /<select/);
  const menu = readFileSync(new URL('../src/components/pricing/CurrencySelect.tsx', import.meta.url), 'utf8');
  assert.match(menu, /role="combobox"/);
  assert.match(menu, /role="listbox"/);
  assert.match(menu, /aria-activedescendant=/);
  assert.match(menu, /aria-disabled=/);
  assert.match(menu, /rounded-card bg-raised/);
});

test('pricing keeps the table prominent and puts currency disclosures below the plans', () => {
  const component = readFileSync(new URL('../src/components/sections/Pricing.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(component, /href="#customer-results"|href="#pricing-questions"/);
  const plansEnd = component.indexOf('Need more Growth Credits?');
  assert.ok(plansEnd > 0 && component.indexOf('id="pricing-currency-note"') > plansEnd);
  assert.match(component, /id="pricing-currency-note"[^>]*role="status"/);
});
