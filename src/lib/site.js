/** Public marketing origin. Change when this site has its own domain. */
export const SITE_ORIGIN =
  import.meta.env.VITE_SITE_ORIGIN || "https://rod-stack-ai-workbench-assistant.vercel.app";

/** Existing Workbench SPA. Hash views and /admin stay on this host. */
export const WORKBENCH_ORIGIN =
  import.meta.env.VITE_WORKBENCH_ORIGIN || "https://rod-stack-ai-workbench-assistant.vercel.app";

export const BUILDER_REPO = "https://github.com/swehrcustoms/RodStack-Fishing-Rod-Builder.git";
export const WORKBENCH_REPO = "https://github.com/swehrcustoms/RodStack_AI_Workbench_Assistant.git";

export const MARKETING_ROUTES = [
  { path: "/", label: "Home", changefreq: "weekly", priority: "1.0" },
  { path: "/features", label: "Features", changefreq: "weekly", priority: "0.9" },
  { path: "/how-it-works", label: "How it works", changefreq: "monthly", priority: "0.8" },
  { path: "/pricing", label: "Pricing", changefreq: "weekly", priority: "0.9" },
  { path: "/for-hobbyists", label: "For hobbyists", changefreq: "monthly", priority: "0.7" },
  { path: "/for-builders", label: "For builders", changefreq: "monthly", priority: "0.7" },
  { path: "/for-shops", label: "For shops", changefreq: "monthly", priority: "0.7" },
  { path: "/workbench-demo", label: "Workbench demo", changefreq: "monthly", priority: "0.8" },
  { path: "/resources", label: "Resources", changefreq: "monthly", priority: "0.6" },
  { path: "/about", label: "About", changefreq: "monthly", priority: "0.5" },
  { path: "/contact", label: "Contact", changefreq: "monthly", priority: "0.6" },
  { path: "/faq", label: "FAQ", changefreq: "monthly", priority: "0.6" },
  { path: "/privacy", label: "Privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", label: "Terms", changefreq: "yearly", priority: "0.3" },
];

export function workbenchHref(view, params = {}) {
  const search = new URLSearchParams({ view, ...params });
  return `${WORKBENCH_ORIGIN}/#${search.toString()}`;
}

export const WORKBENCH_LINKS = {
  home: `${WORKBENCH_ORIGIN}/`,
  signIn: workbenchHref("profile"),
  bench: workbenchHref("bench"),
  vault: workbenchHref("vault"),
  crm: workbenchHref("crm"),
  inventory: workbenchHref("inventory"),
  analytics: workbenchHref("analytics"),
  forms: workbenchHref("forms"),
  support: workbenchHref("forms", { tab: "support" }),
  featureRequest: workbenchHref("forms", { tab: "feature" }),
  signup: workbenchHref("forms", { tab: "signup" }),
};
