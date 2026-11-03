import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { PageIntro } from "../components/Media";
import { FAQAccordion } from "../components/FAQAccordion";
import { PLANS, PRICE_VERIFICATION_NOTE, displayPrice } from "../../billing/plans";
import { FEATURE_LABELS, PLANNED_ENTERPRISE_KEYS, TIER_FEATURES } from "../../billing/entitlements";
import { CheckoutButton, CurrentPlan, FeatureGate } from "../../billing/billingUi";
import { track } from "../../lib/analytics";

const BILLING_FAQ = [
  {
    q: "Why do some prices say displayed, not confirmed?",
    a: "Free Bench at $0, Production Pro at $7.99 per month, and Commercial Workshop at $79 per year are the numbers on the current Workbench marketing screen. They have not been matched to live Stripe prices in this project. Missing intervals say Pricing pending.",
  },
  {
    q: "What happens when I choose Upgrade to Pro?",
    a: "This site explains that checkout is not open. It does not create a Stripe session, mark you as paid, or unlock a production workshop.",
  },
  {
    q: "Where will invoices live?",
    a: "After the server can create a Stripe Customer Portal session, invoices belong in that portal. There is no invoice list on this marketing site.",
  },
  {
    q: "Does Commercial Workshop include API or SSO?",
    a: "Those words exist as entitlement keys. They are not listed as included features because the services are not ready.",
  },
];

const MATRIX_KEYS = ["bench", "vault", "forms", "crm", "inventory", "analytics", "photos"];

export default function PricingPage() {
  const [interval, setInterval] = useState("month");
  const [previewTier, setPreviewTier] = useState("free");

  useEffect(() => {
    track("pricing_view");
  }, []);

  return (
    <>
      <Seo
        title="Workbench Pricing | Free Bench, Production Pro, Commercial Workshop"
        description="Compare Free Bench, Production Pro, and Commercial Workshop. Paid prices are displayed marketing values until Stripe prices are confirmed."
        path="/pricing"
      />
      <PageIntro
        kicker="Subscriptions"
        title="Choose a bench. Pay only after Stripe is confirmed."
        lede={PRICE_VERIFICATION_NOTE}
      />

      <div className="mx-auto flex max-w-page flex-wrap items-center gap-3 px-4 sm:px-6 lg:px-8">
        <div className="inline-flex rounded-full border border-slate-700 p-1" role="group" aria-label="Billing interval">
          {[
            ["month", "Monthly"],
            ["year", "Annual"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={interval === value}
              className={`rounded-full px-4 py-2 text-sm ${interval === value ? "bg-cyan-400 text-slate-950" : "text-slate-300"}`}
              onClick={() => setInterval(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="text-sm text-slate-400">No annual discount is advertised. Unpriced intervals stay pending.</p>
      </div>

      <div className="mx-auto mt-8 grid max-w-page gap-4 px-4 md:grid-cols-3 sm:px-6 lg:px-8">
        {PLANS.map((plan) => {
          const price = plan.prices[interval];
          return (
            <article
              key={plan.id}
              className={`flex flex-col rounded-3xl border p-5 ${plan.highlighted ? "border-cyan-400/60 bg-cyan-400/5 shadow-glow" : "border-slate-800 bg-workbench/80"}`}
            >
              {plan.highlightLabel ? <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">{plan.highlightLabel}</p> : <p className="text-xs text-slate-500">Plan</p>}
              <h2 className="mt-2 text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-1 text-sm text-slate-400">{plan.audience}</p>
              <p className="mt-4 font-mono text-3xl">{displayPrice(plan, interval)}</p>
              <p className="mt-2 text-xs leading-relaxed text-amber-100/90">{price.note}</p>
              <p className="mt-4 text-sm text-slate-200">{plan.positioning}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-300">
                {plan.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <CheckoutButton
                planId={plan.id}
                className="mt-6 rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-bold text-slate-950"
              />
            </article>
          );
        })}
      </div>

      <section className="mx-auto max-w-page px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Feature comparison from the entitlement map</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-800">
          <table className="min-w-[640px] w-full text-left text-sm">
            <thead className="bg-slate-900 text-slate-300">
              <tr>
                <th className="px-4 py-3 font-medium">Capability</th>
                <th className="px-4 py-3 font-medium">Free Bench</th>
                <th className="px-4 py-3 font-medium">Production Pro</th>
                <th className="px-4 py-3 font-medium">Commercial Workshop</th>
              </tr>
            </thead>
            <tbody>
              {MATRIX_KEYS.map((key) => (
                <tr key={key} className="border-t border-slate-800">
                  <th className="px-4 py-3 font-medium text-slate-100">{FEATURE_LABELS[key]}</th>
                  {["free", "pro", "enterprise"].map((tier) => (
                    <td key={tier} className="px-4 py-3 text-slate-300">
                      {TIER_FEATURES[tier].includes(key) ? "Included" : "—"}
                    </td>
                  ))}
                </tr>
              ))}
              {PLANNED_ENTERPRISE_KEYS.map((key) => (
                <tr key={key} className="border-t border-slate-800">
                  <th className="px-4 py-3 font-medium text-violet-200">{FEATURE_LABELS[key]}</th>
                  <td className="px-4 py-3 text-slate-500">—</td>
                  <td className="px-4 py-3 text-slate-500">—</td>
                  <td className="px-4 py-3 text-violet-200">Planned key only</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-slate-400">
          {PLANS.flatMap((plan) => plan.withheldClaims.map((claim) => <li key={claim}>{claim}</li>))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-page gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold">What a free bench sees</h2>
          <p className="mt-2 text-sm text-slate-400">
            This preview uses a local tier switch. It does not sign you in or change an organization.
          </p>
          <label className="mt-4 block text-sm text-slate-300">
            Preview tier
            <select
              className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2"
              value={previewTier}
              onChange={(event) => setPreviewTier(event.target.value)}
            >
              <option value="free">Free Bench</option>
              <option value="pro">Production Pro</option>
              <option value="enterprise">Commercial Workshop</option>
            </select>
          </label>
          <div className="mt-4">
            <CurrentPlan tier={previewTier} />
          </div>
        </div>
        <FeatureGate tier={previewTier} featureKey="crm">
          <div className="rounded-2xl border border-slate-700 bg-workbench p-4">
            <p className="font-semibold">Customer CRM</p>
            <p className="mt-2 text-sm text-slate-300">Sample customer list would appear here for a Pro workshop.</p>
          </div>
        </FeatureGate>
        <img
          src="/marketing/site-graphics/13-pricing-cards-preview.webp"
          alt="Abstract pricing card layout without dollar amounts."
          width="1440"
          height="864"
          loading="lazy"
          className="w-full rounded-3xl border border-slate-800 lg:col-span-2"
        />
      </section>

      <FAQAccordion items={BILLING_FAQ} heading="Billing questions" />
      <p className="mx-auto max-w-page px-4 pb-12 text-sm text-slate-400 sm:px-6 lg:px-8">
        Already subscribed in the Workbench? <Link to="/account/billing" className="text-cyan-300">Open the billing page</Link> to see status labels. Live invoices stay in Stripe after the portal is connected.
      </p>
    </>
  );
}
