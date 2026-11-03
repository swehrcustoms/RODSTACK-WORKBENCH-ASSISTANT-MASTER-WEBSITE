import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { PageIntro } from "../components/Media";
import { DEMO, DEMO_STAGES } from "../../content/catalog";
import { track } from "../../lib/analytics";
import { WORKBENCH_LINKS } from "../../lib/site";

const STEPS = [
  "Review the request",
  "Open the build",
  "Check components",
  "Update the stage",
  "Read guide spacing",
  "Inspect the build sheet",
  "Review sample cost",
];

export default function DemoPage() {
  const [step, setStep] = useState(0);
  const [stage, setStage] = useState(0);
  const [notice, setNotice] = useState("");
  const materials = DEMO.components.reduce((sum, item) => sum + item.cost, 0);
  const margin = DEMO.sale - materials;

  useEffect(() => {
    track("demo_start");
  }, []);

  const go = (next) => {
    setStep(next);
    track("demo_step", { step: next + 1 });
    if (next === STEPS.length - 1) track("demo_complete");
  };

  const updateStage = (value) => {
    setStage(Number(value));
    setNotice("Saved in this browser preview only. Nothing was written to a workshop.");
  };

  return (
    <>
      <Seo
        title="Interactive Workbench Demo | Sample Walleye Jig Rod"
        description="Click through a labeled sample job: customer request, rod build, components, production stage, guide spacing, build sheet, and sample margin."
        path="/workbench-demo"
      />
      <PageIntro
        kicker="Sample workflow"
        title="A walleye jig rod, from request to sample margin."
        lede="Every name, measurement, and dollar amount on this page is demonstration data. Edits stay in this browser tab and are discarded when you leave. They are not saved to a RodStack workshop."
      />

      <div className="mx-auto grid max-w-page gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8">
        <ol className="space-y-2">
          {STEPS.map((label, index) => (
            <li key={label}>
              <button
                type="button"
                className={`w-full rounded-xl border px-3 py-2 text-left text-sm ${step === index ? "border-cyan-400 bg-cyan-400/10" : "border-slate-800"}`}
                aria-current={step === index ? "step" : undefined}
                onClick={() => go(index)}
              >
                <span className="font-mono text-xs text-cyan-200">{index + 1}</span> {label}
              </button>
            </li>
          ))}
        </ol>

        <div className="rounded-3xl border border-slate-800 bg-workbench/80 p-5 sm:p-7" aria-live="polite">
          <p className="sample-chip">Sample data</p>
          {step === 0 && (
            <>
              <h2 className="mt-4 text-2xl font-semibold">Customer request</h2>
              <p className="mt-3 font-medium">{DEMO.customer.name}</p>
              <p className="text-sm text-slate-400">{DEMO.customer.contact} · {DEMO.customer.phone}</p>
              <p className="mt-4 text-slate-200">{DEMO.customer.request}</p>
              <p className="mt-3 text-sm text-amber-100">{DEMO.customer.quote}</p>
            </>
          )}
          {step === 1 && (
            <>
              <h2 className="mt-4 text-2xl font-semibold">Rod build</h2>
              <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                {Object.entries(DEMO.build).map(([key, value]) => (
                  <div key={key} className="rounded-xl border border-slate-800 px-3 py-2">
                    <dt className="text-xs uppercase tracking-wide text-slate-500">{key}</dt>
                    <dd className="mt-1 text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}
          {step === 2 && (
            <>
              <h2 className="mt-4 text-2xl font-semibold">Components and quantities</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="text-slate-400">
                    <tr>
                      <th className="py-2">SKU</th>
                      <th>Component</th>
                      <th>Qty</th>
                      <th>Unit cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEMO.components.map((item) => (
                      <tr key={item.sku} className="border-t border-slate-800">
                        <td className="py-2 font-mono text-xs text-cyan-100">{item.sku}</td>
                        <td>{item.name}</td>
                        <td className="font-mono">{item.qty}</td>
                        <td className="font-mono">${item.cost.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <h2 className="mt-4 text-2xl font-semibold">Production stage</h2>
              <p className="mt-2 text-sm text-slate-400">Current sample stage: {DEMO_STAGES[stage]}</p>
              <label className="mt-4 block text-sm">
                Update illustrative stage
                <select className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-base" value={stage} onChange={(event) => updateStage(event.target.value)}>
                  {DEMO_STAGES.map((label, index) => (
                    <option key={label} value={index}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              {notice ? <p className="mt-3 text-sm text-amber-200">{notice}</p> : null}
            </>
          )}
          {step === 4 && (
            <>
              <h2 className="mt-4 text-2xl font-semibold">Guide spacing plan</h2>
              <p className="mt-2 text-sm text-slate-400">These inches are a sample layout. Check them on the blank before you wrap.</p>
              <ul className="mt-4 space-y-2">
                {DEMO.spacing.map((row) => (
                  <li key={row.guide} className="flex items-center justify-between rounded-xl border border-slate-800 px-3 py-2">
                    <span>{row.guide}</span>
                    <span className="font-mono text-cyan-100">{row.inches} in</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {step === 5 && (
            <>
              <h2 className="mt-4 text-2xl font-semibold">Sample build sheet</h2>
              <div className="mt-4 rounded-2xl border border-slate-700 bg-white p-5 text-slate-900">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Sample sheet · not for the bench</p>
                <h3 className="mt-2 text-xl font-semibold">{DEMO.build.name}</h3>
                <p className="text-sm">{DEMO.build.blank}</p>
                <p className="mt-3 text-sm">Customer: {DEMO.customer.name}</p>
                <p className="text-sm">Stage: {DEMO_STAGES[stage]}</p>
                <p className="mt-3 text-sm">Stripper sample mark: {DEMO.spacing[0].inches} in from the sample plan.</p>
              </div>
              <p className="mt-3 text-sm text-slate-400">The live Workbench can export a PDF. This page only previews the sample.</p>
            </>
          )}
          {step === 6 && (
            <>
              <h2 className="mt-4 text-2xl font-semibold">Sample cost and margin</h2>
              <dl className="mt-4 grid gap-3 sm:grid-cols-3">
                <Stat label="Materials" value={`$${materials.toFixed(2)}`} />
                <Stat label="Recorded sale" value={`$${DEMO.sale.toFixed(2)}`} />
                <Stat label="Sample margin" value={`$${margin.toFixed(2)}`} />
              </dl>
              <p className="mt-4 text-sm text-amber-100">Illustrative arithmetic only. Not a shop report and not tax or accounting advice.</p>
              <a href={WORKBENCH_LINKS.signIn} className="mt-6 inline-flex rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950">
                Create Your Free Workbench
              </a>
            </>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" className="rounded-xl border border-slate-600 px-4 py-2 text-sm" disabled={step === 0} onClick={() => go(step - 1)}>
              Back
            </button>
            {step < STEPS.length - 1 ? (
              <button type="button" className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950" onClick={() => go(step + 1)}>
                Next step
              </button>
            ) : (
              <Link to="/pricing" className="rounded-xl border border-slate-600 px-4 py-2 text-sm">
                Compare plans
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-800 p-3">
      <dt className="text-xs uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="mt-1 font-mono text-xl">{value}</dd>
    </div>
  );
}
