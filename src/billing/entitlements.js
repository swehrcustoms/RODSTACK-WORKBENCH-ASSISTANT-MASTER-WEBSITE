/**
 * Mirrors src/lib/auth/roles.ts in RodStack_AI_Workbench_Assistant.
 * Do not replace the backend map. This copy is for marketing display and tests.
 */
export const SUBSCRIPTION_TIERS = ["free", "pro", "enterprise"];

export const TIER_FEATURES = {
  free: ["bench", "vault", "forms"],
  pro: ["bench", "vault", "forms", "crm", "inventory", "analytics", "photos"],
  enterprise: [
    "bench",
    "vault",
    "forms",
    "crm",
    "inventory",
    "analytics",
    "photos",
    "api",
    "sso",
    "priority_support",
  ],
};

export const ORG_ROLES = ["owner", "admin", "builder", "viewer"];
export const PLATFORM_ROLES = ["platform_owner", "support_admin", "read_only_support"];

const RANK = { free: 0, pro: 1, enterprise: 2 };

export function tierRank(tier) {
  return RANK[tier] ?? 0;
}

export function tierIncludes(tier, featureKey) {
  return (TIER_FEATURES[tier] || []).includes(featureKey);
}

export function requiredTierFor(featureKey) {
  if (TIER_FEATURES.free.includes(featureKey)) return "free";
  if (TIER_FEATURES.pro.includes(featureKey)) return "pro";
  if (TIER_FEATURES.enterprise.includes(featureKey)) return "enterprise";
  return null;
}

export const FEATURE_LABELS = {
  bench: "Production Bench",
  vault: "Build Vault",
  forms: "Support and feature forms",
  crm: "Customer CRM",
  inventory: "Inventory",
  analytics: "Profitability analytics",
  photos: "Build photo log",
  api: "API access",
  sso: "Single sign-on",
  priority_support: "Priority support",
};

export const PLANNED_ENTERPRISE_KEYS = ["api", "sso", "priority_support"];
