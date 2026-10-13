/* Campaign attribution, consent-aware: a first-party cookie pair that is
   only written once the visitor has consented.

     cg_attr_ft · first touch, written once and never overwritten
     cg_attr_lt · last non-direct touch, replaced by every new campaign
                  click (utm_* or ad click id) or external referral

   A touch holds the five standard utm_* values plus utm_id, the ad click
   ids (Google, Meta, LinkedIn, Microsoft, TikTok), the landing page, the
   referrer and a timestamp. Without utm_source, a Google or Microsoft
   click id implies source/medium, and an external referrer becomes
   "<site> / organic | social | referral", as in GA4. Direct visits and
   internal navigation never create a touch.

   The <head> script reads the landing URL before GTM loads and keeps the
   result in memory (window.__cgAttr), which survives the site's
   client-side navigation, so the demo form gets the campaign even before
   or without consent. Nothing is stored in the browser until
   Usercentrics reports an explicit consent (consent_status, type
   EXPLICIT) for the service "Checkgrow Campaign Attribution", or for the
   Marketing category while that service is not configured; an implicit
   default never counts, whatever the CMP settings say. Then both cookies are written (90 days,
   .checkgrow.com, so ai.checkgrow.com can read them too); when consent is
   refused or withdrawn they are deleted. They carry no personal data.

   The values are also pushed to the dataLayer (attribution_*), so GTM tags
   can use them on the first page view. */

export const ATTRIBUTION_SERVICE = "Checkgrow Campaign Attribution";
export const FIRST_TOUCH_COOKIE = "cg_attr_ft";
export const LAST_TOUCH_COOKIE = "cg_attr_lt";

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
] as const;

export const CLICK_ID_KEYS = ["gclid", "gbraid", "wbraid", "fbclid", "li_fat_id", "msclkid", "ttclid"] as const;

type Key = (typeof UTM_KEYS)[number] | (typeof CLICK_ID_KEYS)[number] | "landing_page" | "referrer";
export type Touch = Partial<Record<Key, string>> & { ts?: number };
export type Attribution = { first: Touch | null; last: Touch | null };

export const ATTRIBUTION_FIELDS: readonly Key[] = [...UTM_KEYS, ...CLICK_ID_KEYS, "landing_page", "referrer"];

/* Inline <head> script, before the GTM loader. Plain ES5 so it runs
   anywhere and never throws into the page. */
export const ATTRIBUTION_SCRIPT = `(function(){try{
var FT=${JSON.stringify(FIRST_TOUCH_COOKIE)},LT=${JSON.stringify(LAST_TOUCH_COOKIE)},SVC=${JSON.stringify(ATTRIBUTION_SERVICE)};
var UTM=${JSON.stringify(UTM_KEYS)},CID=${JSON.stringify(CLICK_ID_KEYS)};
var MAX=90*24*3600,h=location.hostname;
var dom=/(^|\\.)checkgrow\\.com$/.test(h)?";domain=.checkgrow.com":"";
var sec=location.protocol==="https:"?";Secure":"";
function get(n){var m=document.cookie.match(new RegExp("(?:^|; )"+n+"=([^;]*)"));if(!m)return null;try{return JSON.parse(decodeURIComponent(m[1]))}catch(e){return null}}
function set(n,v){document.cookie=n+"="+encodeURIComponent(JSON.stringify(v))+";path=/;max-age="+MAX+";SameSite=Lax"+dom+sec}
function del(n){document.cookie=n+"=;path=/;max-age=0;SameSite=Lax"+dom+sec;document.cookie=n+"=;path=/;max-age=0"}
function cut(v,n){return String(v).slice(0,n)}
var q=new URLSearchParams(location.search),t={},hit=false,i,k,v;
for(i=0;i<UTM.length;i++){k=UTM[i];v=q.get(k)||q.get(k.toUpperCase());if(v){t[k]=cut(v.trim(),200);hit=true}}
for(i=0;i<CID.length;i++){k=CID[i];v=q.get(k);if(v){t[k]=cut(v.trim(),300);hit=true}}
var ref=document.referrer,rh="";
try{rh=ref?new URL(ref).hostname.replace(/^www\\./,""):""}catch(e){}
var ext=rh&&!/(^|\\.)checkgrow\\.com$/.test(rh)&&rh!==h.replace(/^www\\./,"");
if(hit&&!t.utm_source){
 if(t.gclid||t.gbraid||t.wbraid){t.utm_source="google";t.utm_medium=t.utm_medium||"cpc"}
 else if(t.msclkid){t.utm_source="bing";t.utm_medium=t.utm_medium||"cpc"}
}
if(!hit&&ext){
 var src=rh,med="referral";
 if(/(^|\\.)(google|bing|duckduckgo|yahoo|yandex|ecosia|baidu|search\\.brave|startpage)\\./.test(rh)){src=rh.split(".").filter(function(p){return !/^(com|co|org|net|search|[a-z]{2})$/.test(p)})[0]||rh;med="organic"}
 else if(/(^|\\.)(facebook\\.com|fb\\.com|instagram\\.com|linkedin\\.com|lnkd\\.in|t\\.co|x\\.com|twitter\\.com|youtube\\.com|tiktok\\.com|reddit\\.com)$/.test(rh)){src=rh.replace(/^(l|lm|m)\\./,"").replace(/\\.(com|in|co)$/,"").replace(/^lnkd$/,"linkedin").replace(/^t$/,"twitter");med="social"}
 t={utm_source:src,utm_medium:med};hit=true;
}
if(hit){
 t.landing_page=cut(location.origin+location.pathname+location.search,500);
 if(ref)t.referrer=cut(ref,500);
 t.ts=Date.now();
}
/* in memory: consented cookies from earlier visits, updated by this landing */
var cf=get(FT),cl=get(LT);
var A=window.__cgAttr={first:cf||(hit?t:null),last:hit?t:cl,consent:null};
/* storage only with consent */
function apply(ok){
 if(ok===A.consent)return;A.consent=ok;
 if(ok){if(A.last&&(hit||!get(LT)))set(LT,A.last);if(A.first&&!get(FT))set(FT,A.first)}
 else{del(FT);del(LT)}
}
var seen=0;
function scan(){
 var dl=window.dataLayer||[];
 for(;seen<dl.length;seen++){var e=dl[seen];
  if(e&&e.event==="consent_status"){var s=e[SVC],on=typeof s==="boolean"?s:!!(e.ucCategory&&e.ucCategory.marketing);
   /* only a choice the visitor made counts; an implicit default never stores */
   apply(on&&e.type==="EXPLICIT")}}
}
window.addEventListener("UC_CONSENT",function(){setTimeout(scan,0);setTimeout(scan,300)});
var n=0,iv=setInterval(function(){scan();if(++n>40)clearInterval(iv)},250);
var last=A.last||{},first=A.first||{};
window.dataLayer=window.dataLayer||[];
window.dataLayer.push({
 attribution_source:last.utm_source||"(direct)",attribution_medium:last.utm_medium||"(none)",
 attribution_campaign:last.utm_campaign||"",attribution_term:last.utm_term||"",attribution_content:last.utm_content||"",
 attribution_first_source:first.utm_source||"(direct)",attribution_first_medium:first.utm_medium||"(none)",attribution_first_campaign:first.utm_campaign||""
});
}catch(e){}})();`;

function readCookie(name: string): Touch | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  if (!m) return null;
  try {
    const v = JSON.parse(decodeURIComponent(m[1]));
    return v && typeof v === "object" ? v : null;
  } catch {
    return null;
  }
}

declare global {
  interface Window {
    __cgAttr?: Attribution & { consent: boolean | null };
  }
}

/* the <head> script's in-memory result; cookies only as a fallback */
export function readAttribution(): Attribution {
  if (typeof window !== "undefined" && window.__cgAttr) {
    return { first: window.__cgAttr.first, last: window.__cgAttr.last };
  }
  return { first: readCookie(FIRST_TOUCH_COOKIE), last: readCookie(LAST_TOUCH_COOKIE) };
}

/* Server side: keep only known keys, as short strings. */
export function cleanTouch(v: unknown): Touch | null {
  if (!v || typeof v !== "object") return null;
  const src = v as Record<string, unknown>;
  const out: Touch = {};
  for (const k of ATTRIBUTION_FIELDS) {
    const val = src[k];
    if (typeof val === "string" && val.trim()) out[k] = val.trim().slice(0, k === "landing_page" || k === "referrer" ? 500 : 300);
  }
  if (typeof src.ts === "number" && Number.isFinite(src.ts)) out.ts = src.ts;
  return Object.keys(out).length ? out : null;
}
