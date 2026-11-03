import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const origin = process.env.SITE_ORIGIN || "https://rod-stack-ai-workbench-assistant.vercel.app";
const paths = [
  ["/", "weekly", "1.0"],
  ["/features", "weekly", "0.9"],
  ["/how-it-works", "monthly", "0.8"],
  ["/pricing", "weekly", "0.9"],
  ["/for-hobbyists", "monthly", "0.7"],
  ["/for-builders", "monthly", "0.7"],
  ["/for-shops", "monthly", "0.7"],
  ["/workbench-demo", "monthly", "0.8"],
  ["/resources", "monthly", "0.6"],
  ["/about", "monthly", "0.5"],
  ["/contact", "monthly", "0.6"],
  ["/faq", "monthly", "0.6"],
  ["/privacy", "yearly", "0.3"],
  ["/terms", "yearly", "0.3"],
];

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
mkdirSync(root, { recursive: true });

const urls = paths
  .map(
    ([path, freq, priority]) => `  <url>
    <loc>${origin}${path}</loc>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n");

writeFileSync(
  join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
);

writeFileSync(
  join(root, "robots.txt"),
  `User-agent: *
Allow: /
Disallow: /account
Disallow: /account/

Sitemap: ${origin}/sitemap.xml
`
);

console.log(`Wrote sitemap and robots for ${origin}`);
