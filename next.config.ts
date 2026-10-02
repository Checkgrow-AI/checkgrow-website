import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

/* Everything on this site is self-hosted (fonts, images, videos) except the
   Usercentrics consent banner, so the CSP stays tight: 'self' plus the
   usercentrics.eu origins it loads its script, API calls and vendor logos
   from. 'unsafe-inline' for scripts/styles is required by Next's hydration
   payload and Tailwind's inline style attributes. CSP only ships in
   production so dev HMR (which needs eval) keeps working. */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://*.usercentrics.eu https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.usercentrics.eu https://*.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self' https://*.usercentrics.eu",
  "media-src 'self'",
  "connect-src 'self' https://*.usercentrics.eu https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  ...(isProd ? [{ key: "Content-Security-Policy", value: csp }] : []),
];

const nextConfig: NextConfig = {
  /* self-contained server bundle for the Docker deploy */
  output: "standalone",
  poweredByHeader: false,

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  /* one canonical host: www collapses onto the apex */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.checkgrow.com" }],
        destination: "https://checkgrow.com/:path*",
        permanent: true,
      },
      { source: "/tutorials", destination: "/news", permanent: true },
      // Only article routes redirect; /tutorials/<slug>/<asset> media URLs stay intact.
      { source: "/tutorials/:slug", destination: "/news/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
