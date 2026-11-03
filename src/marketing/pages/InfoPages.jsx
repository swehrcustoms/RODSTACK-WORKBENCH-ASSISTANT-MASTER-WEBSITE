import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { PageIntro, PhotoFrame } from "../components/Media";
import ConversionCTA from "../components/ConversionCTA";
import { FAQAccordion } from "../components/FAQAccordion";
import { FAQ, RESOURCES, PLANNED } from "../../content/catalog";
import { BUILDER_REPO, WORKBENCH_LINKS } from "../../lib/site";

export function ResourcesPage() {
  return (
    <>
      <Seo
        title="Rod Building Workshop Guides | RodStack Resources"
        description="Practical notes for recording builds, guide spacing, cure windows, device-local photos, and costs in RodStack Workbench Assistant."
        path="/resources"
      />
      <PageIntro
        kicker="Resources"
        title="Notes for the bench, written in plain language."
        lede="These guides describe how to use the Workbench. They are not blank recommendations, resin instructions, or promised business results."
      />
      <div className="mx-auto grid max-w-page gap-4 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        {RESOURCES.map((item) => (
          <article key={item.title} className="rounded-3xl border border-slate-800 bg-workbench/70 p-5">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.body}</p>
          </article>
        ))}
      </div>
      <section className="mx-auto max-w-page px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Search topics this site covers</h2>
        <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
          {[
            "Fishing rod workshop software",
            "Custom rod building management",
            "Custom fishing rod business software",
            "Rod building inventory management",
            "Fishing rod build tracking",
            "Rod building CRM",
            "Custom fishing rod quoting software",
            "Digital rod build sheets",
            "Fishing rod guide-spacing tools",
            "Epoxy cure tracking",
            "Rod building profitability",
            "Custom rod shop management",
          ].map((topic) => (
            <li key={topic} className="rounded-full border border-slate-700 px-3 py-1">
              {topic}
            </li>
          ))}
        </ul>
        <h2 className="mt-10 text-2xl font-semibold">Future connections</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {PLANNED.map(([name, copy]) => (
            <li key={name} className="rounded-2xl border border-violet-400/30 p-4 text-sm">
              <span className="font-semibold text-violet-100">{name}. </span>
              {copy}
            </li>
          ))}
        </ul>
      </section>
      <ConversionCTA secondary="Open the FAQ" secondaryTo="/faq" />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <Seo
        title="About RodStack Workbench Assistant"
        description="RodStack Workbench Assistant is workshop software for custom fishing rod builders, related to and separate from the RodStack Fishing Rod Builder."
        path="/about"
      />
      <PageIntro
        kicker="About"
        title="Software for people who build fishing rods."
        lede="RodStack Workbench Assistant keeps the technical record and the shop record together. The RodStack Fishing Rod Builder is a related product with its own lighter visual identity. Accounts are not shared between them."
      />
      <div className="mx-auto grid max-w-page gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <PhotoFrame
          src="/marketing/photos/shop-workbench-panorama.webp"
          alt="Wide illustrated view of a rod wrapping bench."
          width="1800"
          height="730"
        />
        <img
          src="/marketing/site-graphics/14-product-family.webp"
          alt="Diagram showing Workbench Assistant and Rod Builder as separate RodStack products."
          width="1440"
          height="864"
          className="w-full rounded-3xl border border-slate-800"
        />
        <div className="space-y-4 text-slate-300 lg:col-span-2">
          <p>
            The Workbench includes build records, a production bench, a vault, inventory, customer records, cost views, spine and flex notes, a cure tracker, device-local photos, printable build sheets, and support forms.
          </p>
          <p>
            Longer-term ideas include customer-facing technical guidance, component research, and supplier connections. Those are not current customer features. An administrator-only Claude tool exists on the server. The public extraction screen is simulated.
          </p>
          <p>
            <a className="text-cyan-300" href={BUILDER_REPO}>RodStack Fishing Rod Builder repository</a>
            {" · "}
            <Link className="text-cyan-300" to="/features">Workbench features</Link>
          </p>
        </div>
      </div>
      <ConversionCTA />
    </>
  );
}

export function FaqPage() {
  return (
    <>
      <Seo
        title="RodStack Workbench FAQ"
        description="Answers about Free Bench, tablets, inventory, customers, build sheets, offline limits, photos, Shopify, QuickBooks, AI, and cancellation."
        path="/faq"
      />
      <PageIntro
        kicker="FAQ"
        title="Questions from the bench and the office."
        lede="Answers follow the current Workbench: what the modules do, what the entitlement map includes, and what is still planned."
      />
      <FAQAccordion items={FAQ} heading="All questions" />
    </>
  );
}

export function PrivacyPage() {
  return (
    <Legal
      path="/privacy"
      title="Privacy policy draft"
      seo="Privacy Policy Draft | RodStack Workbench Assistant"
      lede="This is a product draft for review before production. It is not a substitute for counsel."
    >
      <p>The marketing site stores no customer workshop records. The interactive demo keeps edits in page memory and drops them when you leave.</p>
      <p>Account data, builds, customers, and inventory live in the existing Workbench Supabase project after you create an account there. Access is limited by organization membership and row level security.</p>
      <p>Build photos in the current app stay in IndexedDB on the device that captured them.</p>
      <p>This marketing site does not run a third-party analytics collector. Button events stay in the browser unless a future endpoint is configured. Do not send passwords through the contact form.</p>
      <p>Stripe receives billing details only after a server-side Checkout or Customer Portal session exists. This site does not create those sessions yet.</p>
      <p>Private workshop and admin routes on the Workbench should stay out of search indexes. This site asks crawlers not to index /account.</p>
    </Legal>
  );
}

export function TermsPage() {
  return (
    <Legal
      path="/terms"
      title="Terms of use draft"
      seo="Terms of Use Draft | RodStack Workbench Assistant"
      lede="This is a product draft for review before production. It is not a substitute for counsel."
    >
      <p>RodStack Workbench Assistant is workshop record software. Technical calculators, spacing plans, and cure timers are planning notes. You remain responsible for the rod, the materials, and the test on the bench.</p>
      <p>Displayed subscription prices are marketing figures until they are confirmed as live Stripe prices. A payment is valid only after Stripe and the Workbench webhook record it.</p>
      <p>Free, Pro, and enterprise entitlements follow the existing feature map. Enterprise membership is not platform administration.</p>
      <p>Do not upload another person&apos;s private customer data into the public demo. The demo is sample data only.</p>
      <p>
        The live application is at <a className="text-cyan-300" href={WORKBENCH_LINKS.home}>the Workbench</a>. Support requests already in that app use its forms.
      </p>
    </Legal>
  );
}

function Legal({ path, title, seo, lede, children }) {
  return (
    <>
      <Seo title={seo} description={lede} path={path} />
      <PageIntro kicker="Draft" title={title} lede={lede} />
      <div className="mx-auto max-w-3xl space-y-4 px-4 pb-16 text-slate-300 sm:px-6">{children}</div>
    </>
  );
}
