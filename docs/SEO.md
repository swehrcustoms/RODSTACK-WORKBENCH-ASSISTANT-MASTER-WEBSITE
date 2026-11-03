# SEO package

## Primary phrases

Use these in titles and headings that already match the page. Do not stuff them into unrelated sentences.

- Fishing rod workshop software
- Custom rod building management
- Custom fishing rod business software
- Rod building inventory management
- Fishing rod build tracking
- Rod building CRM
- Custom fishing rod quoting software
- Digital rod build sheets
- Fishing rod guide-spacing tools
- Epoxy cure tracking
- Rod building profitability
- Custom rod shop management

## On-page

- One `h1` per page, then `h2` sections
- `Seo` sets title, description, canonical, and Open Graph tags after load
- Homepage JSON-LD is `SoftwareApplication` with the free offer only. No review markup and no invented rating
- Image `alt` text describes the scene and, for UI art, that the data is a sample
- Footer and feature pages link across solutions, pricing, demo, and FAQ
- `public/robots.txt` allows marketing pages and disallows `/account`
- `public/sitemap.xml` lists public routes only
- `index.html` includes a noscript summary for browsers with JavaScript off

## SPA limit

Google can render the Vite bundle, but the HTML shell is the homepage metadata until JavaScript runs. Before a production domain is indexed, prerender the public routes with a Vite-compatible prerender step. Do not migrate the Workbench to Next.js for this.

Set `SITE_ORIGIN` to the real host and rerun `npm run sitemap` so canonicals, the sitemap, and robots agree. The default origin is the current Workbench Vercel host, which is correct only if these routes are served from that host.

## Private routes

Do not add workshop, customer, organization, or `/admin` URLs to the sitemap. The account billing preview is disallowed.
