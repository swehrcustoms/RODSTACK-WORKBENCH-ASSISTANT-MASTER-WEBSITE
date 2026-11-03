export type SubscriptionTier = "free" | "pro" | "enterprise";
export type BillingInterval = "month" | "year";

export interface DisplayPrice {
  /** Null when this interval has no approved or previously displayed price. */
  amount: string | null;
  cadence: string;
  /** True only after the product owner confirms a live Stripe price. */
  verified: boolean;
  note: string;
}

export interface MarketingPlan {
  id: SubscriptionTier;
  name: string;
  audience: string;
  positioning: string;
  cta: string;
  highlighted: boolean;
  highlightLabel?: string;
  prices: Record<BillingInterval, DisplayPrice>;
  included: string[];
  withheldClaims: string[];
}

export const PRICE_VERIFICATION_NOTE =
  "Prices shown here are the values already displayed on the Workbench marketing screen. They are not confirmed live Stripe prices. Checkout stays closed until a server-side price map is approved.";

export const PLANS: MarketingPlan[] = [
  {
    id: "free",
    name: "Free Bench",
    audience: "Hobbyists and new builders",
    positioning: "Get your workshop organized.",
    cta: "Start Free",
    highlighted: false,
    prices: {
      month: {
        amount: "$0",
        cadence: "forever",
        verified: false,
        note: "Free Bench does not require payment. The three-model limit on the older marketing page is not confirmed in the entitlement map.",
      },
      year: {
        amount: "$0",
        cadence: "forever",
        verified: false,
        note: "No annual charge is defined for Free Bench.",
      },
    },
    included: [
      "Production Bench",
      "Build Vault",
      "Support, signup, and feature-request forms",
    ],
    withheldClaims: [
      "A hard limit of three master rod models is marketing copy and is not confirmed as enforced.",
    ],
  },
  {
    id: "pro",
    name: "Production Pro",
    audience: "Independent commercial builders",
    positioning: "Take your workshop to the next level.",
    cta: "Upgrade to Pro",
    highlighted: true,
    highlightLabel: "Recommended for independent builders",
    prices: {
      month: {
        amount: "$7.99",
        cadence: "month",
        verified: false,
        note: "Displayed marketing price from the current Workbench page. Confirm the Stripe price before checkout.",
      },
      year: {
        amount: null,
        cadence: "year",
        verified: false,
        note: "No approved annual price is configured for Production Pro.",
      },
    },
    included: [
      "Everything in Free Bench",
      "Customer CRM",
      "Inventory and SKU records",
      "Profitability analytics from recorded costs and sales",
      "Build photo log stored on the capturing device",
    ],
    withheldClaims: [
      "Unlimited blueprints, version tracking, and AI web scraping are not entitlement keys.",
      "The public extraction screen is simulated. It is not customer AI assistance.",
      "Cure tracking exists as a workshop tool and is not a separate billed feature key.",
    ],
  },
  {
    id: "enterprise",
    name: "Commercial Workshop",
    audience: "Growing professional rod shops",
    positioning: "More control for your growing shop.",
    cta: "Contact Sales",
    highlighted: false,
    prices: {
      month: {
        amount: null,
        cadence: "month",
        verified: false,
        note: "No approved monthly price is configured for Commercial Workshop.",
      },
      year: {
        amount: "$79",
        cadence: "year",
        verified: false,
        note: "Displayed marketing price from the current Workbench page. Confirm the Stripe price before checkout.",
      },
    },
    included: [
      "Everything in Production Pro",
      "Same organization roles already in the Workbench: owner, admin, builder, viewer",
    ],
    withheldClaims: [
      "API, SSO, and priority support exist as entitlement keys only. They are not offered as ready services.",
      "An enterprise subscription does not grant platform administrator access.",
      "Self-service staff invitations are not available yet.",
    ],
  },
];

export function planById(id: SubscriptionTier): MarketingPlan {
  const plan = PLANS.find((item) => item.id === id);
  if (!plan) throw new Error(`Unknown plan ${id}`);
  return plan;
}

export function displayPrice(plan: MarketingPlan, interval: BillingInterval): string {
  const price = plan.prices[interval];
  if (!price.amount) return "Pricing pending";
  if (price.amount === "$0") return "$0 forever";
  return `${price.amount}/${price.cadence}`;
}
