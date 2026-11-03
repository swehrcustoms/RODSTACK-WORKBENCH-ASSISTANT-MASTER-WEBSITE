import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { PageIntro, ProductPreview } from "../components/Media";
import ConversionCTA from "../components/ConversionCTA";
import { STEPS } from "../../content/catalog";
import { WORKBENCH_LINKS } from "../../lib/site";

const TABS = {
  beginner: {
    label: "New to workshop software",
    points: [
      "You do not need a shop name to start. A personal organization is created with the account.",
      "Add one rod you already understand. Fill in the blank, the guides you used, and a note about how it fished.",
      "Print the build sheet when you want the notes off the screen.",
      "Inventory and customer tools can wait until you sell rods or stock parts.",
    ],
  },
  builder: {
    label: "Already building for customers",
    points: [
      "Put the request on the customer record before the blank is cut.",
      "Attach components and costs as you pull them, not after the season.",
      "Update the stage from the bench so the office view matches the rod on the dryer.",
      "Use recorded costs when you review a quote. The app will not invent missing receipts.",
    ],
  },
};

export default function HowItWorksPage() {
  const [tab, setTab] = useState("beginner");
  const active = TABS[tab];

  return (
    <>
      <Seo
        title="How Custom Rod Workshop Software Works | RodStack"
        description="Create an account, add a build, track components, update production, and review the costs you recorded in RodStack Workbench Assistant."
        path="/how-it-works"
      />
      <PageIntro
        kicker="Workflow"
        title="From the first account to a build you can find later."
        lede="RodStack is a record of the work. It does not wrap the guides for you, and it does not replace a flex test on the bench."
      >
        <a href={WORKBENCH_LINKS.signIn} className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">
          Get Started with Free Bench
        </a>
      </PageIntro>

      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <ProductPreview
          src="/marketing/feature-illustrations/12-workflow-overview.webp"
          alt="Illustrated four-step path from setting up a workshop to reviewing recorded activity."
        />
      </div>

      <ol className="mx-auto mt-10 grid max-w-page gap-4 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {STEPS.map((step) => (
          <li key={step.n} className="rounded-3xl border border-slate-800 bg-workbench/70 p-5">
            <p className="font-mono text-cyan-300">{step.n}</p>
            <h2 className="mt-2 text-xl font-semibold">{step.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.copy}</p>
          </li>
        ))}
      </ol>

      <section className="mx-auto max-w-page px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Audience">
          {Object.entries(TABS).map(([id, item]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              className={`rounded-full px-4 py-2 text-sm ${tab === id ? "bg-cyan-400 text-slate-950" : "border border-slate-700"}`}
              onClick={() => setTab(id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div role="tabpanel" className="mt-4 rounded-3xl border border-slate-800 p-5">
          <ul className="space-y-3 text-slate-200">
            {active.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ProductPreview
            src="/marketing/feature-illustrations/07-build-sheet.webp"
            alt="Illustrative build sheet with sample guide positions."
          />
          <ProductPreview
            src="/marketing/feature-illustrations/11-mobile-workshop.webp"
            alt="Illustrative phone screens for a bench measurement."
          />
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Want the click-through version? <Link to="/workbench-demo" className="text-cyan-300">Open the sample walleye job</Link>.
        </p>
      </section>
      <ConversionCTA title="Start with one rod record." secondary="See Free Bench" />
    </>
  );
}
