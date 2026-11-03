import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { PhotoFrame, ProductPreview } from "../components/Media";
import { FAQAccordion } from "../components/FAQAccordion";
import ConversionCTA from "../components/ConversionCTA";
import { FAQ, MODULES, PROBLEMS, SOLUTIONS, STEPS } from "../../content/catalog";
import { PLANS, displayPrice } from "../../billing/plans";
import { WORKBENCH_LINKS, SITE_ORIGIN } from "../../lib/site";
import { track } from "../../lib/analytics";

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RodStack AI Workbench Assistant",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Workshop management software for custom fishing rod builders. Manage builds, inventory, customers, production, and recorded costs.",
  url: SITE_ORIGIN,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free Bench. Paid prices on the site are displayed marketing values pending Stripe confirmation.",
  },
};

export default function HomePage() {
  return (
    <>
      <Seo
        title="Run Your Rod Shop | RodStack Workbench Assistant"
        description="Manage custom rod builds, customers, components, production, and profitability in one professional digital workbench."
        path="/"
        jsonLd={softwareJsonLd}
      />
      <Hero />
      <Problem />
      <Modules />
      <Dashboard />
      <Bench />
      <Inventory />
      <Crm />
      <Tools />
      <Profit />
      <How />
      <Plans />
      <Pilot />
      <FAQAccordion items={FAQ.slice(0, 6)} />
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <Link to="/faq" className="text-sm text-cyan-300">
          Read all questions
        </Link>
      </div>
      <ConversionCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-page items-center gap-10 px-4 pb-8 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-16">
      <div>
        <img src="/RodStack%20Logo%20V1.png" alt="" className="logo-mark mb-6 h-14 w-auto sm:h-16" />
        <p className="section-kicker">Workshop software for custom rod builders</p>
        <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Run Your Rod Shop. Not Your Spreadsheets.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
          Manage custom rod builds, customers, components, production, and profitability in one professional digital workbench.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={WORKBENCH_LINKS.signIn}
            className="rounded-xl bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-slate-950 hover:bg-cyan-300"
            onClick={() => track("cta_click", { id: "start-free", place: "hero" })}
          >
            Start Free Bench
          </a>
          <Link
            to="/workbench-demo"
            className="rounded-xl border border-slate-600 px-5 py-3 text-center text-sm font-semibold text-white hover:border-cyan-300"
            onClick={() => track("cta_click", { id: "watch-demo", place: "hero" })}
          >
            Watch the Workbench Demo
          </Link>
        </div>
        <ul className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
          {["Build records in one vault", "Bench-side stage updates", "Costs you actually entered"].map((item) => (
            <li key={item} className="rounded-xl border border-slate-800 bg-workbench/70 px-3 py-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <picture>
          <source media="(max-width: 767px)" srcSet="/marketing/photos/hero-mobile-portrait.webp" />
          <img
            src="/marketing/photos/hero-workshop-wide.webp"
            alt="Illustrated wrapping bench with a fishing rod, thread spools, and guide rings."
            width="2000"
            height="1125"
            className="h-56 w-full rounded-3xl border border-slate-800 object-cover sm:h-64 lg:hidden"
          />
        </picture>
        <ProductPreview
          eager
          src="/marketing/feature-illustrations/01-workshop-dashboard.webp"
          alt="Illustrative workshop dashboard with sample build counts and sample margin figures."
          caption="Illustrative product preview. Not a screenshot of a live shop."
        />
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="mx-auto grid max-w-page gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-workbench/70 p-6 sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight">Your workshop has enough moving parts.</h2>
        <ul className="mt-6 space-y-3 text-slate-300">
          {PROBLEMS.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl border border-cyan-500/30 bg-cyan-400/5 p-6 sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight">Bring every part of your workshop together.</h2>
        <ul className="mt-6 space-y-3 text-slate-200">
          {SOLUTIONS.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate-400">
          Spend more time building exceptional fishing rods and less time managing disconnected spreadsheets, paperwork, and customer information.
        </p>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className="mx-auto max-w-page px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight">The workspace, in six parts.</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {MODULES.map((item) => (
          <article key={item.id} className="flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-workbench/80">
            <img src={item.image} alt={item.alt} width="1440" height="864" loading="lazy" className="h-44 w-full object-cover object-top" />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-xl font-semibold">{item.benefit}</h3>
              <p className="mt-1 text-sm text-cyan-200">{item.title}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{item.copy}</p>
              <Link to={item.href} className="mt-4 text-sm font-semibold text-cyan-300">
                Learn more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <section className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight">See the work that matters.</h2>
      <p className="mt-3 max-w-2xl text-slate-300">
        A workshop summary can show active builds, open customer work, low-stock components, the current stage, and margin from recorded costs. The picture below is a labeled sample, not a customer dashboard.
      </p>
      <div className="mt-8">
        <ProductPreview
          src="/marketing/feature-illustrations/01-workshop-dashboard.webp"
          alt="Sample workshop command center with illustrative counts and a sample margin."
        />
      </div>
      <div className="mt-4 grid gap-3 sm:hidden">
        {["Active builds", "Open orders", "Low stock", "Current stage", "Recorded margin"].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-800 bg-elevated/60 px-4 py-3 text-sm">
            {item}
            <span className="mt-1 block text-xs text-amber-200">Sample card</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Split({ title, copy, image, alt, reverse = false, children }) {
  return (
    <section className="mx-auto grid max-w-page items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div className={reverse ? "lg:order-2" : ""}>
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-4 text-slate-300 leading-relaxed">{copy}</p>
        {children}
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <ProductPreview src={image} alt={alt} />
      </div>
    </section>
  );
}

function Bench() {
  return (
    <Split
      title="Built for the bench. Not just the office."
      copy="Bench Mode keeps the active build, large controls, and measurement entry on the screen while you wrap. It is meant for a tablet next to the station as well as a laptop in the office."
      image="/marketing/feature-illustrations/02-bench-mode.webp"
      alt="Illustrative Bench Mode with a large sample measurement."
    >
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        <li>Large touch targets for stage updates</li>
        <li>Active build name and specification in view</li>
        <li>Guide-spacing entry you still verify on the blank</li>
        <li>A sync reminder: local saves are not a guaranteed offline backup</li>
      </ul>
    </Split>
  );
}

function Inventory() {
  return (
    <Split
      reverse
      title="Know what is on your shelf."
      copy="Record blanks, guides, grips, reel seats, thread, and epoxy with a SKU, category, quantity, low-stock threshold, supplier field, and unit cost. Import or export a CSV. RodStack does not order parts for you."
      image="/marketing/feature-illustrations/04-inventory.webp"
      alt="Illustrative inventory list with sample component rows."
    />
  );
}

function Crm() {
  return (
    <Split
      title="Keep every customer build organized."
      copy="Save the person, how to reach them, what they asked for, the quote note, the order stage, and the rod record attached to the job. Shopify and QuickBooks are not connected."
      image="/marketing/feature-illustrations/05-customer-crm.webp"
      alt="Illustrative customer records with sample names and stages."
    />
  );
}

function Tools() {
  return (
    <section className="mx-auto max-w-page px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight">The details that make every build different.</h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Spine notes, flex profiles, guide spacing, cure windows, stage photos, and printable build sheets are for craftsmanship and repeatable records. Calculations and timers are planning aids. They do not replace a physical test or a resin maker&apos;s instructions.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          ["/marketing/feature-illustrations/08-spine-finder.webp", "Spine and flex notes"],
          ["/marketing/feature-illustrations/09-cure-tracker.webp", "Cure window you set"],
          ["/marketing/feature-illustrations/10-photo-log.webp", "Photos stored on this device"],
        ].map(([src, label]) => (
          <figure key={label} className="overflow-hidden rounded-2xl border border-slate-800">
            <img src={src} alt={`${label}. Illustrative sample.`} width="1440" height="864" loading="lazy" className="h-40 w-full object-cover object-top" />
            <figcaption className="px-3 py-2 text-sm text-slate-300">{label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Profit() {
  return (
    <Split
      reverse
      title="Understand the numbers behind every build."
      copy="Review material costs, recorded sales, gross margin, monthly summaries, and build comparisons from the figures in the workshop. Analytics do not reconcile an accounting platform."
      image="/marketing/feature-illustrations/06-profit-analytics.webp"
      alt="Illustrative profit chart. Dollar amounts are samples."
    />
  );
}

function How() {
  return (
    <section className="mx-auto max-w-page px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight">How RodStack works</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {STEPS.map((step) => (
          <article key={step.n} className="rounded-2xl border border-slate-800 bg-workbench/80 p-4">
            <p className="font-mono text-sm text-cyan-300">{step.n}</p>
            <h3 className="mt-2 font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.copy}</p>
          </article>
        ))}
      </div>
      <img
        src="/marketing/feature-illustrations/12-workflow-overview.webp"
        alt="Four-step illustration from account setup to workshop review. Sample labels."
        width="1440"
        height="864"
        loading="lazy"
        className="mt-6 w-full rounded-2xl border border-slate-800"
      />
      <a href={WORKBENCH_LINKS.bench} className="mt-6 inline-flex rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950">
        Open Your Workbench
      </a>
    </section>
  );
}

function Plans() {
  return (
    <section className="mx-auto max-w-page px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight">Three plans. Checkout waits for a confirmed price.</h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <article key={plan.id} className={`rounded-3xl border p-5 ${plan.highlighted ? "border-cyan-400/50 shadow-glow" : "border-slate-800"} bg-workbench/80`}>
            {plan.highlightLabel ? <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">{plan.highlightLabel}</p> : null}
            <h3 className="mt-2 text-xl font-semibold">{plan.name}</h3>
            <p className="mt-2 font-mono text-2xl">{displayPrice(plan, plan.id === "enterprise" ? "year" : "month")}</p>
            <p className="mt-2 text-sm text-slate-400">{plan.positioning}</p>
            <Link to="/pricing" className="mt-4 inline-block text-sm font-semibold text-cyan-300">
              Compare plans
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pilot() {
  return (
    <section className="mx-auto grid max-w-page items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight">Looking for a small group of pilot shops.</h2>
        <p className="mt-4 text-slate-300">
          Approved customer stories are not on file, so this page does not invent shop owners, logos, or review scores. If you build custom rods and want to try the Workbench, tell us what you need from the bench.
        </p>
        <Link to="/contact?topic=pilot" className="mt-5 inline-flex rounded-xl border border-cyan-400/50 px-4 py-2 text-sm font-semibold text-cyan-100">
          Ask about a pilot
        </Link>
      </div>
      <PhotoFrame
        src="/marketing/photos/feature-guides-and-wraps.webp"
        alt="Close illustrated view of guide rings and thread on a rod wrapping jig."
        width="1100"
        height="750"
      />
    </section>
  );
}
