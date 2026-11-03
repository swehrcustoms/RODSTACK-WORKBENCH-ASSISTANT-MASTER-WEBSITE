import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { PageIntro, ProductPreview, StatusPill } from "../components/Media";
import ConversionCTA from "../components/ConversionCTA";
import { FEATURE_GROUPS, PLANNED } from "../../content/catalog";

export default function FeaturesPage() {
  return (
    <>
      <Seo
        title="Fishing Rod Workshop Features | RodStack Workbench"
        description="Production bench, build vault, inventory, customer records, guide spacing, cure tracking, build sheets, and profitability tools for custom rod builders."
        path="/features"
      />
      <PageIntro
        kicker="Platform"
        title="Everything the workshop can do today."
        lede="Each section is marked available, partial, or planned. Illustrations are samples. They are not screenshots of a customer shop and they are not verified measurements."
      >
        <Link to="/workbench-demo" className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">
          Try the sample workflow
        </Link>
        <Link to="/pricing" className="rounded-xl border border-slate-600 px-4 py-2 text-sm">
          See which plan includes what
        </Link>
      </PageIntro>

      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <img
          src="/marketing/site-graphics/15-platform-features.webp"
          alt="Illustrated map of Workbench areas: bench, vault, inventory, customers, tools, and analytics."
          width="1440"
          height="864"
          className="w-full rounded-3xl border border-slate-800"
        />
      </div>

      {FEATURE_GROUPS.map((group, index) => (
        <section key={group.id} id={group.id} className="mx-auto grid max-w-page items-start gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className={index % 2 ? "lg:order-2" : ""}>
            <p className="section-kicker">{group.kicker}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">{group.title}</h2>
            <p className="mt-3 text-sm text-slate-400">{group.statusNote}</p>
            <ul className="mt-6 space-y-4">
              {group.items.map(([name, status, copy]) => (
                <li key={name}>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{name}</h3>
                    <StatusPill status={status} />
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{copy}</p>
                </li>
              ))}
            </ul>
          </div>
          <ProductPreview src={group.image} alt={group.alt} />
        </section>
      ))}

      <section className="mx-auto max-w-page px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Planned, and labeled that way</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {PLANNED.map(([name, copy]) => (
            <li key={name} className="rounded-2xl border border-violet-400/30 bg-violet-500/5 p-4">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{name}</h3>
                <StatusPill status="planned" />
              </div>
              <p className="mt-2 text-sm text-slate-300">{copy}</p>
            </li>
          ))}
        </ul>
      </section>
      <ConversionCTA secondary="See how a build moves through the shop" secondaryTo="/how-it-works" />
    </>
  );
}
