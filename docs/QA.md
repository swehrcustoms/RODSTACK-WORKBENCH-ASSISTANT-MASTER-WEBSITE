# QA summary

Checked on October 16, 2026 in this marketing repository.

## Automated

| Check | Result |
| --- | --- |
| `npm run typecheck` | Passed |
| `npm run lint` | Passed |
| `npm run test` | Passed, 7 tests |
| `npm run build` | Passed |
| `npm run test:e2e` | Not run. Playwright is not installed here. Browser checks below were done in the Cursor browser instead. |

## Browser

- Homepage at 1440px: no horizontal overflow (`scrollWidth` matched the viewport). Headline, both hero actions, and the RodStack logo rendered.
- Homepage at 390px: no horizontal overflow. Headline wraps, actions stack, the RS mark and menu button stay on one row.
- Demo: stepped from the sample customer to a stage change. Setting the stage to Wrapping showed “Saved in this browser preview only.” The sample build sheet then read “Stage: Wrapping.”
- Pricing: monthly view shows Free Bench $0, Production Pro $7.99/month, and Commercial Workshop as pricing pending. Upgrade to Pro opened a dialog that says no payment started and nothing was charged.
- Contact: a completed form reported that the message was not delivered, and linked to the Workbench support form.

## Not verified here

- The live Workbench login, bench, vault, CRM, inventory, analytics, admin, and Stripe webhook. Those stay in the existing application and were not modified.
- Keyboard order was spot-checked through the demo steps and the pricing dialog. A full WCAG audit was not performed.
- Widths 360, 375, 768, 1024, and 1920 were not each screenshotted. 390 and 1440 were measured. The layout uses the same fluid grid at the other widths.
