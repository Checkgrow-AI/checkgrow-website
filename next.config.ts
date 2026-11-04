import type { NextConfig } from "next";
import { contentSecurityPolicy } from "./src/lib/contentSecurityPolicy";

const isProd = process.env.NODE_ENV === "production";

/* CSP only ships in production so dev HMR keeps working. Verify tracking
   against a production build: a tag firing is not proof its SDK or beacon
   passed CSP. Vendor allowlists live in one regression-tested module. */

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  ...(isProd ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }] : []),
];

const nextConfig: NextConfig = {
  /* self-contained server bundle for the Docker deploy */
  output: "standalone",
  poweredByHeader: false,

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  /* Markdown for AI assistants (src/lib/markdown.ts): every key page at
     its URL plus ".md" (/index.md for the homepage), and the same markdown
     for requests that ask for it with Accept: text/markdown. Runs before
     the pages so content negotiation can take over a page URL. */
  async rewrites() {
    const wantsMarkdown = [{ type: "header" as const, key: "accept", value: "(.*)text/markdown(.*)" }];
    return {
      beforeFiles: [
        { source: "/index.md", destination: "/markdown" },
        { source: "/:path(.+)\\.md", destination: "/markdown/:path" },
        { source: "/", has: wantsMarkdown, destination: "/markdown" },
        ...["/pricing", "/features", "/use-cases", "/use-cases/:slug", "/news", "/news/:slug"].map((source) => ({
          source,
          has: wantsMarkdown,
          destination: `/markdown${source}`,
        })),
      ],
      afterFiles: [],
      fallback: [],
    };
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
