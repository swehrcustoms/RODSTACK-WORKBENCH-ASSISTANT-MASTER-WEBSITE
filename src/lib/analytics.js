const QUEUE_KEY = "rodstack.marketing.analytics";

/**
 * Privacy-conscious event stub. Events stay in memory unless a future
 * analytics endpoint is configured. Do not send names, emails, or shop data.
 */
export function track(name, props = {}) {
  const event = {
    name,
    props,
    at: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    const queue = window[QUEUE_KEY] || [];
    queue.push(event);
    window[QUEUE_KEY] = queue.slice(-50);
    window.dispatchEvent(new CustomEvent("rodstack:analytics", { detail: event }));
  }

  return event;
}

export const ANALYTICS_EVENTS = [
  "landing_view",
  "cta_click",
  "demo_start",
  "demo_step",
  "demo_complete",
  "pricing_view",
  "plan_select",
  "signup_intent",
  "checkout_attempt",
  "contact_submit",
];
