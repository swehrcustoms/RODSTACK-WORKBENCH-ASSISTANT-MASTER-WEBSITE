import { Link } from "react-router-dom";
import { WORKBENCH_LINKS } from "../../lib/site";
import { track } from "../../lib/analytics";

export default function ConversionCTA({
  title = "Build great rods. Run a better-organized workshop.",
  primary = "Start Free Bench",
  secondary = "Compare plans",
  secondaryTo = "/pricing",
}) {
  return (
    <section className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-slate-700">
        <img
          src="/marketing/photos/cta-workshop-banner.webp"
          alt=""
          width="1900"
          height="700"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative px-6 py-14 sm:px-12">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-slate-200">
            Open a Free Bench in the existing Workbench. Paid plans stay on this page until Stripe checkout is confirmed.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WORKBENCH_LINKS.signIn}
              className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300"
              onClick={() => track("cta_click", { id: "start-free", place: "final-cta" })}
            >
              {primary}
            </a>
            <Link
              to={secondaryTo}
              className="rounded-xl border border-white/30 bg-slate-950/40 px-5 py-3 text-sm font-semibold text-white hover:border-white"
              onClick={() => track("cta_click", { id: "secondary", place: "final-cta" })}
            >
              {secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
