import { describe, expect, test } from "vitest";
import { displayPrice, PLANS } from "../src/billing/plans";
import { TIER_FEATURES } from "../src/billing/entitlements";

describe("displayed plans", () => {
  test("keeps backend tier ids and withholds unapproved intervals", () => {
    expect(PLANS.map((plan) => plan.id)).toEqual(["free", "pro", "enterprise"]);
    const pro = PLANS.find((plan) => plan.id === "pro");
    const commercial = PLANS.find((plan) => plan.id === "enterprise");
    if (!pro || !commercial) throw new Error("plans missing");
    expect(displayPrice(pro, "month")).toBe("$7.99/month");
    expect(displayPrice(pro, "year")).toBe("Pricing pending");
    expect(displayPrice(commercial, "year")).toBe("$79/year");
    expect(displayPrice(commercial, "month")).toBe("Pricing pending");
    expect(pro.prices.month.verified).toBe(false);
    expect(commercial.prices.year.verified).toBe(false);
  });

  test("mirrors the Workbench entitlement map", () => {
    expect(TIER_FEATURES.free).toEqual(["bench", "vault", "forms"]);
    expect(TIER_FEATURES.pro).toEqual(["bench", "vault", "forms", "crm", "inventory", "analytics", "photos"]);
    expect(TIER_FEATURES.enterprise).toContain("api");
    expect(TIER_FEATURES.enterprise).not.toContain("platform_owner");
  });
});
