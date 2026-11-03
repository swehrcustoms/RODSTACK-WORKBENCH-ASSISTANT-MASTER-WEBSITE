import { useId, useState } from "react";

export function FAQAccordion({ items, heading = "Common questions" }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight">{heading}</h2>
      <div className="mt-6 divide-y divide-slate-800 overflow-hidden rounded-2xl border border-slate-800 bg-workbench/80">
        {items.map((item, index) => {
          const expanded = open === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;
          return (
            <div key={item.q}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-white hover:bg-slate-900/60"
                  onClick={() => setOpen(expanded ? -1 : index)}
                >
                  {item.q}
                  <span aria-hidden className="font-mono text-cyan-300">
                    {expanded ? "–" : "+"}
                  </span>
                </button>
              </h3>
              <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!expanded} className="px-5 pb-5 text-sm leading-relaxed text-slate-300">
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
