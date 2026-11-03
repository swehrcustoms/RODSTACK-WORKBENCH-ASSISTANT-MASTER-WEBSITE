# Integration handoff

This repository is the marketing site. The workshop remains in [RodStack_AI_Workbench_Assistant](https://github.com/swehrcustoms/RodStack_AI_Workbench_Assistant.git).

## Architecture found before this site was built

- Vite 6, React 18, JSX with a TypeScript layer, Tailwind 3, React Router for `/admin/*`
- Workshop navigation is hash-based: `#view=marketing|landing|onboarding|bench|vault|crm|inventory|analytics|profile|scraper|forms`
- `src/main.jsx` sends `/admin` to `AdminApp` and everything else to the workshop providers
- Supabase Auth, organization roles (`owner`, `admin`, `builder`, `viewer`), platform roles (`platform_owner`, `support_admin`, `read_only_support`)
- Entitlements in `src/lib/auth/roles.ts`:

```
free: bench, vault, forms
pro: those plus crm, inventory, analytics, photos
enterprise: those plus api, sso, priority_support
```

- Stripe webhook and `src/lib/stripeSync.ts` already map price metadata to `free | pro | enterprise`
- No browser checkout session creator was found. Do not add a Stripe secret to Vite env
- Public AI extraction is simulated. Ask Claude is an admin Edge Function
- Photos use IndexedDB on the device. Sync is a queue, not guaranteed offline replication

Marketing prices on the current landing page are Free Bench $0, Production Pro $7.99/month, Commercial Workshop $79/year. Older Pro bullets (unlimited blueprints, version tracking, AI scraper, cure tracking as a paid extra) are not entitlement keys. This site does not repeat them as included features.

## How to merge later

1. Copy `src/marketing`, `src/billing`, `src/content`, `src/lib/site.js`, `src/lib/analytics.js`, and `public/marketing` into the Workbench repo.
2. Do not replace `src/modules`, `src/context`, `src/admin`, `src/forms`, or `supabase/functions/stripe-webhook`.
3. In Workbench `src/main.jsx`, keep the `/admin` branch first.
4. Add a path check for marketing routes (`/`, `/features`, `/pricing`, and the rest in `src/lib/site.js`). Render this site's `App` routes only for those paths.
5. Leave hash views untouched. A URL with `#view=` must still open the workshop, including on `/`.
6. Point header "Start Free Bench" at in-app `setCurrentView("profile")` once both trees share one origin. Until then the links use `VITE_WORKBENCH_ORIGIN`.
7. Add Edge Functions, not client code, for:
   - `create-checkout` — verify the user, organization membership, and billing permission; create a Checkout Session with a server-side price id; put `organization_id` in metadata
   - `create-portal` — create a Customer Portal session for that organization
   - `get-billing-summary` — read the subscription row for the caller's organization
8. Keep using `stripe-webhook` for create, update, delete, payment failure, cancel, and reactivate. Confirm dedupe before launch.
9. Gate paid modules with the existing server entitlements. The `FeatureGate` in this repo is a preview component only.

## Environment

| Name | Where | Purpose |
| --- | --- | --- |
| `VITE_WORKBENCH_ORIGIN` | Browser | Existing app origin |
| `VITE_SITE_ORIGIN` | Browser | Canonical origin for this site |
| `SITE_ORIGIN` | `npm run sitemap` | Absolute sitemap host |
| `VITE_FORMS_WEBHOOK_URL` | Browser | Optional contact POST. Empty means the form reports that it did not deliver |
| `VITE_SUPABASE_*` | Workbench only | Do not duplicate auth here |
| Stripe secret, webhook secret, service role, Anthropic | Edge Functions only | Never `VITE_` |

## Routing map

| Visitor intent | This site | Workbench |
| --- | --- | --- |
| Discover | `/` | — |
| Features | `/features` | — |
| Demo | `/workbench-demo` | local state only |
| Pricing | `/pricing` | — |
| Free signup | link | `/#view=profile` and forms signup tab |
| Open bench | link | `/#view=bench` |
| Billing | `/account/billing` preview | future portal function |
| Admin | not linked as a customer path | `/admin` |

Do not deploy this project onto the Workbench Vercel project until the route adapter is in place. `vercel.json` here rewrites every path to `index.html`, which would hide `/admin` if copied blindly.
