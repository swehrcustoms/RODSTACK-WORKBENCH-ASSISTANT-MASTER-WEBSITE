export const FAQ = [
  {
    q: "What is RodStack Workbench Assistant?",
    a: "It is workshop management software for custom fishing rod builders. You can keep build records, production notes, component data, customer details, and cost information in one workspace. It is not a tackle shop.",
  },
  {
    q: "Who is it designed for?",
    a: "Hobbyists organizing personal builds, independent builders who sell custom rods, and professional shops that need clearer production records. Shared-shop invitations are not a self-service feature yet. A new account creates a personal organization.",
  },
  {
    q: "Is there a free version?",
    a: "Yes. Free Bench includes the Production Bench, Build Vault, and forms. The older marketing page also mentions a three-model limit. That limit is not confirmed in the entitlement map, so do not treat it as a guaranteed cutoff until it is verified in the app.",
  },
  {
    q: "Does it work on tablets?",
    a: "Yes. The Workbench is a responsive web app with a dedicated Bench Mode meant for larger touch targets beside a wrapping station. Use a current phone, tablet, or desktop browser.",
  },
  {
    q: "Can I manage multiple rod builds?",
    a: "Yes. The Build Vault and bench workflows are built to hold more than one project. Any numeric plan limit still needs to be confirmed in the live account before it is promised.",
  },
  {
    q: "Can I track inventory?",
    a: "Inventory is a Production Pro and Commercial Workshop entitlement. You can record component categories, SKUs, quantities, low-stock thresholds, supplier fields, and unit costs, and use CSV import and export. RodStack does not sync supplier catalogs or place purchase orders.",
  },
  {
    q: "Does it include customer management?",
    a: "Customer records, requirements, quotes, order notes, and related builds are included with Production Pro and Commercial Workshop. Shopify and QuickBooks connections are not available.",
  },
  {
    q: "Can I print build sheets?",
    a: "Yes. The Workbench can open a build sheet and export a PDF for the bench. Measurements on marketing illustrations are samples, not specifications for a real blank.",
  },
  {
    q: "Does it work without internet?",
    a: "The app can save locally and queue a cloud sync. That is not a guaranteed full offline mode. If sync does not finish, treat the change as still on that device.",
  },
  {
    q: "Are build photos backed up to the cloud?",
    a: "No. Build photos currently live in IndexedDB on the device that captured them. They do not automatically appear on your other devices.",
  },
  {
    q: "Does it integrate with Shopify?",
    a: "No. A Shopify connection is a possible future integration. There is no live connection button.",
  },
  {
    q: "Does it integrate with QuickBooks?",
    a: "No. QuickBooks Online is not connected. Analytics show costs and sales you record in RodStack. They do not reconcile an accounting system.",
  },
  {
    q: "What AI features are available?",
    a: "The product name includes AI, and the repository has a server-side Claude function for authorized administrators. The public extraction screen uses simulated behavior. Component research, compatibility explanations, and build-sheet review are planned. They are not customer features you can rely on today.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "When a real Stripe subscription exists, cancellation belongs in the Stripe Customer Portal after the server creates a portal session. This marketing site cannot cancel, upgrade, or charge a subscription by itself.",
  },
];

export const MODULES = [
  {
    id: "bench",
    title: "Production Bench",
    benefit: "Keep the active build in front of you.",
    copy: "Large bench controls, the current build, and measurement entry for work beside the wrapping station.",
    image: "/marketing/feature-illustrations/02-bench-mode.webp",
    alt: "Illustrative Bench Mode screen showing a sample walleye jig rod and a 29.75 inch measurement.",
    href: "/features#production",
    status: "available",
  },
  {
    id: "vault",
    title: "Build Vault",
    benefit: "Every rod specification has a home.",
    copy: "Store build records, project status, and the technical notes you would otherwise leave in a notebook.",
    image: "/marketing/feature-illustrations/03-build-vault.webp",
    alt: "Illustrative Build Vault with sample rod projects and status labels.",
    href: "/features#production",
    status: "available",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    benefit: "Know what is actually on the shelf.",
    copy: "SKUs, categories, quantities, unit costs, and low-stock thresholds for blanks, guides, grips, seats, thread, and epoxy.",
    image: "/marketing/feature-illustrations/04-inventory.webp",
    alt: "Illustrative inventory table with sample component SKUs and low-stock markers.",
    href: "/features#inventory",
    status: "available",
  },
  {
    id: "crm",
    title: "Customer CRM",
    benefit: "Keep each customer build together.",
    copy: "Customer records, requirements, quote notes, order stage, and the builds attached to that request.",
    image: "/marketing/feature-illustrations/05-customer-crm.webp",
    alt: "Illustrative customer list with sample contacts and order stages.",
    href: "/features#customers",
    status: "available",
  },
  {
    id: "tools",
    title: "Technical Build Tools",
    benefit: "Document the details that change the rod.",
    copy: "Spine notes, flex profiling, guide spacing, cure tracking, photos, and printable build sheets.",
    image: "/marketing/feature-illustrations/08-spine-finder.webp",
    alt: "Illustrative spine and flex profile with sample degree marks, not a measured blank.",
    href: "/features#technical",
    status: "available",
  },
  {
    id: "analytics",
    title: "Profitability Analytics",
    benefit: "See the numbers you recorded.",
    copy: "Material cost, recorded sales, gross margin, and build comparisons from workshop entries. Not an accounting reconciliation.",
    image: "/marketing/feature-illustrations/06-profit-analytics.webp",
    alt: "Illustrative profitability chart using sample dollar amounts, not a real shop report.",
    href: "/features#business",
    status: "available",
  },
];

export const FEATURE_GROUPS = [
  {
    id: "production",
    kicker: "Production management",
    title: "Active builds, stages, and the vault.",
    statusNote: "Available in the Workbench.",
    items: [
      ["Active rod builds", "available", "Open the builds you are working on now."],
      ["Build-stage tracking", "available", "Record where a rod sits in production."],
      ["Production Bench", "available", "A focused bench view for touch entry."],
      ["Build Vault", "available", "A library of rod projects and specifications."],
      ["Technical build records", "available", "Blank, guide, and component notes stored with the build."],
    ],
    image: "/marketing/feature-illustrations/03-build-vault.webp",
    alt: "Illustrative Build Vault with sample project cards.",
  },
  {
    id: "inventory",
    kicker: "Inventory",
    title: "Components, quantities, and costs you enter.",
    statusNote: "Available on Production Pro and Commercial Workshop.",
    items: [
      ["Component categories", "available", "Blanks, guides, grips, reel seats, thread, epoxy, and your own categories."],
      ["SKU tracking", "available", "A record for each component you stock."],
      ["Quantity tracking", "available", "On-hand counts you update."],
      ["Cost records", "available", "Unit costs stored with the component."],
      ["Low-stock alerts", "available", "Thresholds you set. Not automatic purchasing."],
      ["CSV import and export", "available", "Move lists in and out. Not a live supplier feed."],
    ],
    image: "/marketing/feature-illustrations/04-inventory.webp",
    alt: "Illustrative component inventory with sample SKUs.",
  },
  {
    id: "customers",
    kicker: "Customer management",
    title: "Requests, quotes, and the rod they belong to.",
    statusNote: "Available on Production Pro and Commercial Workshop.",
    items: [
      ["Customer profiles", "available", "Name and contact details you record."],
      ["Open orders", "available", "Work that is still in the shop."],
      ["Quotes", "available", "Quote notes stored with the customer. Not an invoicing system."],
      ["Order notes", "available", "Preferences, deadlines, and build requests."],
      ["Customer-related builds", "available", "Jump from the person to the rod record."],
    ],
    image: "/marketing/feature-illustrations/05-customer-crm.webp",
    alt: "Illustrative CRM with sample customers and quotes.",
  },
  {
    id: "technical",
    kicker: "Technical workbench",
    title: "Measurements for planning. Not a substitute for a flex test.",
    statusNote: "Tools exist in the app. They provide planning notes and do not replace physical testing.",
    items: [
      ["Spine Finder", "available", "Record spine observations for a blank."],
      ["Flex profiling", "available", "Log flex notes you measure."],
      ["Guide-spacing measurements", "available", "Enter a spacing plan you intend to check on the blank."],
      ["Cure Tracker", "available", "Track a cure window you set. Not a resin manufacturer's instruction."],
      ["Build documentation", "available", "Notes and stage history kept with the rod."],
    ],
    image: "/marketing/feature-illustrations/09-cure-tracker.webp",
    alt: "Illustrative epoxy cure tracker with sample timers.",
  },
  {
    id: "business",
    kicker: "Business intelligence",
    title: "Numbers from the costs and sales you enter.",
    statusNote: "Available on Production Pro and Commercial Workshop. Not an accounting platform.",
    items: [
      ["Recorded material costs", "available", "Costs attached to components and builds."],
      ["Sales summaries", "available", "Sales amounts you record."],
      ["Gross margin", "available", "Calculated from those recorded figures."],
      ["Build profitability", "available", "Compare builds using the numbers on file."],
      ["Production history", "available", "A record of work you logged."],
    ],
    image: "/marketing/feature-illustrations/06-profit-analytics.webp",
    alt: "Illustrative margin dashboard with sample figures.",
  },
  {
    id: "documentation",
    kicker: "Documentation",
    title: "Sheets, exports, and photos that stay honest about where they live.",
    statusNote: "Build sheets are available. Photos stay on the device that took them.",
    items: [
      ["Build sheets", "available", "A printable sheet for the bench."],
      ["PDF export", "available", "Download a build sheet PDF from the Workbench."],
      ["Build-stage photo log", "partial", "Photos are stored locally in the browser, not synced across devices."],
      ["Gallery export", "partial", "Export depends on what is stored on that device."],
    ],
    image: "/marketing/feature-illustrations/07-build-sheet.webp",
    alt: "Illustrative printable build sheet with sample guide positions.",
  },
];

export const PLANNED = [
  ["Customer AI assistance", "Admin-only Claude exists. Public extraction is simulated."],
  ["Shopify", "Not connected."],
  ["QuickBooks Online", "Not connected."],
  ["Supplier catalog sync", "Not connected. No automated purchasing."],
  ["Cloud photo library", "Photos remain on the capturing device."],
  ["Self-service team invites", "Shared membership is an admin task today."],
  ["API, SSO, and priority support", "Entitlement keys only. Not ready customer services."],
];

export const STEPS = [
  {
    n: "01",
    title: "Set up your workshop",
    copy: "Create an account in the existing Workbench and add the builder or shop name. Signup creates a personal organization.",
  },
  {
    n: "02",
    title: "Add builds and components",
    copy: "Start a rod record, list the parts you use, and add customers when you are ready for that workflow.",
  },
  {
    n: "03",
    title: "Manage production",
    copy: "Update the stage, enter measurements, track a cure window, and print a build sheet while the rod is on the bench.",
  },
  {
    n: "04",
    title: "Review the workshop",
    copy: "Look at open work, component levels, and the costs and sales you recorded. The figures are only as complete as the entries.",
  },
];

export const PROBLEMS = [
  "Builds scattered across notebooks",
  "Customer requests left in email",
  "Inventory kept in a spreadsheet",
  "Material costs forgotten after the wrap",
  "Specification records that never get filed",
  "Build status that lives in someone's head",
];

export const SOLUTIONS = [
  "A build record for each rod",
  "Customer notes attached to the job",
  "Component quantities and costs in one list",
  "Stage updates from the bench",
  "Measurements stored with the specification",
  "A workshop view of what is open",
];

export const RESOURCES = [
  {
    title: "Record a rod before you forget the blank",
    body: "Start a build record when the blank is chosen. Log the model, length, and the notes you would otherwise write on tape. The vault is there so the next session starts from the record, not from memory.",
  },
  {
    title: "Enter guide spacing as a plan, then check the blank",
    body: "Spacing tools help you write down a train. They do not prove the guide will sit correctly under load. Measure on the blank and correct the record after you test it.",
  },
  {
    title: "Track epoxy by the window you choose",
    body: "The cure tracker stores a timer and notes for a cure you start. Follow the resin maker's instructions. The sample times in marketing art are not recommendations.",
  },
  {
    title: "Keep photos with the stage, on that device",
    body: "Photograph a wrap, a seat, or a finish and attach it to the build on the device you are using. Copy important photos out of the browser if you need them on another computer. RodStack does not sync that library for you.",
  },
  {
    title: "Read margin from recorded costs",
    body: "Profit views add up material costs and sales you entered. Missing receipts stay missing. The dashboard does not pull a bank account or QuickBooks file.",
  },
  {
    title: "Print the sheet and take it to the bench",
    body: "A build sheet is a working document: blank, components, spacing, and notes. Reprint it when the record changes.",
  },
];

export const DEMO_STAGES = [
  "Request logged",
  "Blank selected",
  "Components staged",
  "Wrapping",
  "Epoxy cure",
  "Finish review",
  "Ready for pickup",
];

export const DEMO = {
  customer: {
    name: "Sample — Harborline Anglers",
    contact: "demo.builder@example.com",
    phone: "(555) 010-0142",
    request:
      "Custom walleye jigging rod for vertical presentations. Prefers a fast tip, a short rear grip, and a durable guide train for braided line.",
    quote: "Sample quote note: $240 recorded sale. Not an invoice.",
  },
  build: {
    name: "Sample — Walleye jig 6'6\"",
    blank: "Sample blank — medium-fast casting, 6 ft 6 in",
    power: "Medium",
    action: "Fast",
    line: "Sample note: 10 lb braid",
    lure: "Sample note: 1/4–5/8 oz jigs",
  },
  components: [
    { sku: "SAMPLE-BLANK-66", name: "Casting blank 6'6\"", qty: 1, cost: 48 },
    { sku: "SAMPLE-GUIDE-SET", name: "Guide set", qty: 1, cost: 22.5 },
    { sku: "SAMPLE-CORK", name: "Cork grip kit", qty: 1, cost: 9.4 },
    { sku: "SAMPLE-SEAT", name: "Reel seat", qty: 1, cost: 6.5 },
    { sku: "SAMPLE-THREAD", name: "Thread", qty: 1, cost: 3.2 },
    { sku: "SAMPLE-EPOXY", name: "Finish epoxy", qty: 1, cost: 4.8 },
  ],
  spacing: [
    { guide: "Stripper", inches: "29.75", note: "Sample plan" },
    { guide: "2", inches: "36.10", note: "Sample plan" },
    { guide: "3", inches: "41.40", note: "Sample plan" },
    { guide: "4", inches: "45.80", note: "Sample plan" },
    { guide: "Tip", inches: "66.00", note: "Sample plan" },
  ],
  sale: 240,
};
