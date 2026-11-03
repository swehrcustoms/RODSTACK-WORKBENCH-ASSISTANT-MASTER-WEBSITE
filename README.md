# RodStack Workbench Assistant — marketing site

Vite + React marketing site for the existing Workbench application. It does not replace workshop modules, Supabase Auth, or Stripe webhooks.

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Where the real app lives

Sign-in, signup, bench, vault, inventory, CRM, analytics, and forms open the existing app:

https://rod-stack-ai-workbench-assistant.vercel.app/

Hash views such as `#view=profile` and `#view=bench` are preserved. Admin remains `/admin` on that app.

## What this site will not do

- Create a second account system
- Charge a card or mark a subscription active
- Call Stripe from the browser
- Advertise API, SSO, Shopify, QuickBooks, cloud photo sync, or customer AI as live features

Set `VITE_WORKBENCH_ORIGIN` if the Workbench moves. Set `VITE_SITE_ORIGIN` or `SITE_ORIGIN` before generating the sitemap for a real marketing domain. Set `VITE_FORMS_WEBHOOK_URL` only when a server accepts contact posts.

See `docs/INTEGRATION.md` and `docs/LAUNCH_READINESS.md`.
