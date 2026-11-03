# Launch readiness

## Done in this repository

- Marketing pages: home, features, how it works, pricing, hobbyists, builders, shops, interactive demo, resources, about, contact, FAQ, privacy draft, terms draft, billing preview, and a not-found page.
- Dark navy / cyan Workbench visual system, official RodStack logos, and the supplied photo and illustration pack.
- Honest plan cards using the existing tier ids `free`, `pro`, and `enterprise`.
- Feature gate, upgrade dialog, and billing status preview that cannot mark a subscription active.
- Links into the live Workbench hash views for sign-in, bench, vault, inventory, CRM, analytics, and forms.
- Sitemap, robots.txt, page titles, descriptions, canonical tags, and homepage software structured data.
- Unit tests for the headline, unpaid checkout, sample demo, undelivered contact form, and the entitlement map.

## Not done, and required before a public paid launch

- Confirm Stripe price ids for Production Pro and Commercial Workshop. Until then the site shows the old marketing numbers as unconfirmed, and it will not open Checkout.
- Add `create-checkout`, `create-portal`, and `get-billing-summary` Edge Functions on the Workbench. Reuse `stripe-webhook`. Never put the Stripe secret in the browser.
- Merge these routes into the Workbench Vite app without taking over `/admin` or `#view=` URLs. See `docs/INTEGRATION.md`.
- Point `SITE_ORIGIN` at the real host and regenerate the sitemap.
- Prerender public routes if search indexing matters on day one.
- Replace illustrative UI images with captured Workbench screens when you want production fidelity.
- Have counsel review `privacy` and `terms`. They are drafts.
- Decide whether the contact form should post to the existing forms webhook. Until `VITE_FORMS_WEBHOOK_URL` is set, the form tells the visitor the message was not delivered.

## Do not advertise yet

- A three-model cap, unlimited blueprints, version history, or an AI scraper.
- API access, SSO, or priority support as working services.
- Shopify, QuickBooks, supplier purchasing, cloud photo sync, or self-service shop invitations.
- Customer-facing AI. Admin Claude exists on the server. The public extraction screen is simulated.
- Revenue, time saved, customer counts, or testimonials. None are on file.

## Suggested release order

1. Keep this site on a preview host, separate from the production Workbench project.
2. Click every plan and confirm no Stripe session is created.
3. After the Edge Functions exist, test Checkout in Stripe test mode against a non-production Supabase project.
4. Only then merge the marketing routes into the Workbench repository.
