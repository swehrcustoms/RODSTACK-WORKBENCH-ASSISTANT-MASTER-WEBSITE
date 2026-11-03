import { useState } from "react";
import { Link } from "react-router-dom";
import { FEATURE_LABELS, PLANNED_ENTERPRISE_KEYS, tierIncludes } from "./entitlements";
import { planById } from "./plans";
import { track } from "../lib/analytics";
import { WORKBENCH_LINKS } from "../lib/site";

export function SubscriptionBadge({ tier }) {
  const plan = planById(tier);
  return (
    <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-100">
      {plan.name}
    </span>
  );
}

export function RequiredTierNotice({ featureKey }) {
  const label = FEATURE_LABELS[featureKey] || featureKey;
  const planned = PLANNED_ENTERPRISE_KEYS.includes(featureKey);
  return (
    <p className="text-sm text-slate-300">
      {label} {planned ? "is an entitlement key, not a ready service." : "is included with a higher plan in the current entitlement map."}{" "}
      <Link to="/pricing" className="text-cyan-300 underline">
        Compare plans
      </Link>
    </p>
  );
}

export function LockedFeaturePreview({ featureKey, children }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-700">
      <div className="pointer-events-none select-none opacity-40" aria-hidden>
        {children}
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy via-navy/80 to-transparent p-4">
        <RequiredTierNotice featureKey={featureKey} />
      </div>
    </div>
  );
}

export function FeatureGate({ tier, featureKey, children }) {
  if (tierIncludes(tier, featureKey) && !PLANNED_ENTERPRISE_KEYS.includes(featureKey)) {
    return children;
  }
  if (tierIncludes(tier, featureKey) && PLANNED_ENTERPRISE_KEYS.includes(featureKey)) {
    return (
      <div className="rounded-2xl border border-violet-400/30 bg-violet-500/10 p-4">
        <p className="text-sm text-violet-100">
          {FEATURE_LABELS[featureKey]} is on the enterprise key list. It is not shown as a working feature.
        </p>
      </div>
    );
  }
  return <LockedFeaturePreview featureKey={featureKey}>{children}</LockedFeaturePreview>;
}

export function CurrentPlan({ tier, status = "preview" }) {
  const plan = planById(tier);
  return (
    <div className="rounded-2xl border border-slate-700 bg-workbench p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Current plan preview</p>
      <div className="mt-2 flex items-center gap-2">
        <p className="text-lg font-semibold">{plan.name}</p>
        <SubscriptionBadge tier={tier} />
      </div>
      <p className="mt-2 text-sm text-slate-400">Status: {status}. This control does not read or change a live subscription.</p>
    </div>
  );
}

export function UpgradeModal({ planId, onClose }) {
  const plan = planById(planId);
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 sm:items-center" role="presentation">
      <div role="dialog" aria-modal="true" aria-labelledby="upgrade-title" className="w-full max-w-lg rounded-2xl border border-slate-700 bg-navy p-6 shadow-card">
        <p className="sample-chip">No payment started</p>
        <h2 id="upgrade-title" className="mt-3 text-2xl font-semibold">
          {plan.name} checkout is not open on this site
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          A paid subscription can start only after you sign in, the server checks the organization, and an Edge Function creates a Stripe Checkout session for an approved price. The browser does not choose a price. Nothing was charged.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/account/billing" className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950" onClick={onClose}>
            View billing status
          </Link>
          <Link to="/contact" className="rounded-xl border border-slate-600 px-4 py-2 text-sm" onClick={onClose}>
            Contact sales
          </Link>
          <button type="button" className="rounded-xl px-4 py-2 text-sm text-slate-300" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function CheckoutButton({ planId, children, className }) {
  const [open, setOpen] = useState(false);
  const plan = planById(planId);

  if (planId === "free") {
    return (
      <a href={WORKBENCH_LINKS.signIn} className={className} onClick={() => track("signup_intent", { plan: "free" })}>
        {children || plan.cta}
      </a>
    );
  }

  if (planId === "enterprise") {
    return (
      <Link to="/contact?topic=sales" className={className} onClick={() => track("plan_select", { plan: "enterprise" })}>
        {children || plan.cta}
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          track("checkout_attempt", { plan: planId });
          setOpen(true);
        }}
      >
        {children || plan.cta}
      </button>
      {open ? <UpgradeModal planId={planId} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
