import type { MetadataRoute } from "next";
import { FAVICON_SVG, ICON_192, ICON_512 } from "@/lib/seo";

/* Web app manifest: lets Android, Chrome and Google pick up the current
   brand icon (same hashed files as the favicon, see lib/seo.ts). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Checkgrow",
    short_name: "Checkgrow",
    description: "The growth brain for scale-ups and enterprise: knowledge, campaigns, content and sales in one loop.",
    start_url: "/",
    display: "browser",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: FAVICON_SVG, type: "image/svg+xml", sizes: "any" },
      { src: ICON_192, type: "image/png", sizes: "192x192" },
      { src: ICON_512, type: "image/png", sizes: "512x512" },
    ],
  };
}
