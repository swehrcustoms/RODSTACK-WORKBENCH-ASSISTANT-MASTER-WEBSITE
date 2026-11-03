import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../marketing/components/Seo";
import { PageIntro } from "../marketing/components/Media";
import { WORKBENCH_LINKS } from "../lib/site";
import { PLANS, displayPrice } from "./plans";
import { FEATURE_LABELS, TIER_FEATURES } from "./entitlements";

const STATUSES = [
  {
    id: "signed-out",
    label: "Not signed in",
    summary: "This browser is not connected to a Workbench session. Sign in on the Workbench to use the account that already exists.",
  },
  {
    id: "none",
    label: "Sample: no paid subscription",
    summary: "A Free Bench organization with no Stripe subscription. Sample state only.",
  },
  {
    id: "active",
    label: "Sample: active",
    summary: "Sample Production Pro subscription, renewing at period end. Not your account.",
  },
  {
    id: "past_due",
    label: "Sample: past due",
    summary: "Sample payment failed. Access rules follow the webhook status in the live app, not this preview.",
  },
  {
    id: "canceling",
    label: "Sample: cancels at period end",
    summary: "Sample subscription remains until the period ends, then returns toward Free Bench after reconciliation.",
  },
];

export default function BillingPage() {
  const [status, setStatus] = useState("signed-out");
  const [portalNote, setPortalNote] = useState("");
  const active = STATUSES.find((item) => item.id === status);
  const samplePlan = status === "active" || status === "past_due" || status === "canceling" ? PLANS[1] : PLANS[0];

  return (
    <>
      <Seo
        title="Billing | RodStack Workbench Assistant"
        description="Review how RodStack subscriptions will appear. This page does not read or change a live Stripe subscription."
        path="/account/billing"
      />
      <PageIntro
        kicker="Account"
        title="Subscription management"
        lede="Live billing belongs to the Workbench organization after Stripe webhooks reconcile it. This page cannot see that record from a separate marketing host."
      >
        <a href={WORKBENCH_LINKS.signIn} className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">
          Sign in on the Workbench
        </a>
        <Link to="/pricing" className="rounded-xl border border-slate-600 px-4 py-2 text-sm">
          Compare plans
        </Link>
      </PageIntro>

      <div className="mx-auto grid max-w-page gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
        <div className="rounded-3xl border border-slate-800 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Workbench destinations</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-cyan-200" href={WORKBENCH_LINKS.bench}>Open Workbench</a></li>
            <li><a className="text-cyan-200" href={WORKBENCH_LINKS.vault}>My Builds</a></li>
            <li><a className="text-cyan-200" href={WORKBENCH_LINKS.inventory}>Inventory</a></li>
            <li><a className="text-cyan-200" href={WORKBENCH_LINKS.crm}>Customers</a></li>
            <li><a className="text-cyan-200" href={WORKBENCH_LINKS.signIn}>Account</a></li>
            <li><Link className="text-cyan-200" to="/account/billing">Billing</Link></li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">Sign out stays on the Workbench session. This site has no second account system.</p>
        </div>

        <div className="space-y-4">
          <label className="block text-sm">
            Interface preview
            <select className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2" value={status} onChange={(event) => setStatus(event.target.value)}>
              {STATUSES.map((item) => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </label>
          <article className="rounded-3xl border border-amber-400/30 bg-amber-400/5 p-5">
            <p className="sample-chip">Not a live subscription</p>
            <h2 className="mt-3 text-2xl font-semibold">{status === "signed-out" ? "No subscription loaded" : samplePlan.name}</h2>
            <p className="mt-2 text-sm text-slate-200">{active.summary}</p>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <Item label="Displayed price" value={status === "signed-out" ? "Sign in to view" : displayPrice(samplePlan, "month")} />
              <Item label="Billing interval" value={status === "active" ? "Sample monthly" : "Not loaded"} />
              <Item label="Renewal" value={status === "active" ? "Sample date hidden" : "—"} />
              <Item label="Cancellation" value={status === "canceling" ? "Sample: cancel at period end" : "Not loaded"} />
            </dl>
            <button
              type="button"
              className="mt-5 rounded-xl border border-slate-600 px-4 py-2 text-sm"
              onClick={() =>
                setPortalNote(
                  "A Customer Portal session has to be created by a Supabase Edge Function after it verifies your organization. This site did not call Stripe."
                )
              }
            >
              Manage subscription
            </button>
            {portalNote ? <p className="mt-3 text-sm text-amber-100" role="status">{portalNote}</p> : null}
          </article>
          <article className="rounded-3xl border border-slate-800 p-5 text-sm text-slate-300">
            <h2 className="text-lg font-semibold text-white">What a connected account will show</h2>
            <ul className="mt-3 space-y-2">
              {TIER_FEATURES[samplePlan.id].map((key) => (
                <li key={key}>{FEATURE_LABELS[key]}</li>
              ))}
            </ul>
            <p className="mt-3 text-slate-400">Upgrade and downgrade choices stay on the pricing page until checkout exists. No plan change is applied here.</p>
          </article>
        </div>
      </div>
    </>
  );
}

function Item({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-800 px-3 py-2">
      <dt className="text-xs uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="mt-1">{value}</dd>
    </div>
  );
}
