import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { PageIntro, PhotoFrame, ProductPreview } from "../components/Media";
import ConversionCTA from "../components/ConversionCTA";

const PAGES = {
  hobbyists: {
    path: "/for-hobbyists",
    title: "Keep Every Rod Build in One Place.",
    seoTitle: "Rod Building Records for Hobbyists | RodStack",
    description: "Save rod specifications, notes, materials, and printable build sheets for personal custom fishing rod projects.",
    kicker: "Hobbyist builders",
    lede: "A better way to organize every rod you build. Start with the rods you already know, then add the next blank when you are ready.",
    photo: "/marketing/photos/feature-tools-and-thread.webp",
    photoAlt: "Illustrated thread spools and hand tools on a rod wrapping bench.",
    points: [
      ["Build records", "Blank, length, guides, and the note you would have written on masking tape."],
      ["Measurement logs", "Spacing and spine notes you can reopen next winter."],
      ["Build Vault", "Personal projects in one list instead of three notebooks."],
      ["Basic project tracking", "Mark a rod as in progress or finished."],
      ["Printable build sheets", "A sheet you can take to the bench."],
    ],
    image: "/marketing/feature-illustrations/03-build-vault.webp",
    imageAlt: "Illustrative build vault with sample personal projects.",
    cta: { href: "/pricing", label: "Start with Free Bench" },
    aside: "Free Bench includes the bench, the vault, and forms. Customer and inventory tools are on Production Pro.",
  },
  builders: {
    path: "/for-builders",
    title: "Less Admin Work. More Time at the Wrapping Bench.",
    seoTitle: "Custom Rod Builder Workflow | RodStack Production Pro",
    description: "Track customer requests, materials, build status, cure windows, photos, and recorded costs for an independent rod business.",
    kicker: "Independent builders",
    lede: "Take control of your custom rod workflow. Keep the request, the parts, the stage, and the cost with the rod.",
    photo: "/marketing/photos/feature-guides-and-wraps.webp",
    photoAlt: "Illustrated guide rings and thread wraps on a rod jig.",
    points: [
      ["Customer records", "Who asked, how to reach them, and what the rod must do."],
      ["Quotes", "A quote note stored with the job. Not an invoice or a tax form."],
      ["Materials", "The components you pulled and what they cost."],
      ["Build status", "A stage the bench and the inbox can agree on."],
      ["Cure tracking", "A window you set while epoxy is on the thread."],
      ["Photos", "Stage pictures kept on the device that took them."],
      ["Cost visibility", "Margin from the costs and sale you entered."],
    ],
    image: "/marketing/feature-illustrations/02-bench-mode.webp",
    imageAlt: "Illustrative bench mode for an independent builder.",
    cta: { href: "/pricing", label: "Explore Production Pro" },
    aside: "Production Pro adds CRM, inventory, analytics, and the on-device photo log.",
  },
  shops: {
    path: "/for-shops",
    title: "Bring Order to Your Entire Rod Shop.",
    seoTitle: "Custom Rod Shop Management | RodStack Commercial Workshop",
    description: "Organize builds, customer requests, inventory, production tracking, and recorded business numbers for a professional rod shop.",
    kicker: "Professional shops",
    lede: "One organized system for your rod workshop. Staff roles exist. Self-service invitations do not, yet.",
    photo: "/marketing/photos/feature-rod-cork-handle.webp",
    photoAlt: "Illustrated cork grip and reel seat hardware on a bench.",
    points: [
      ["Build workflow", "A shared picture of which rods are open. Membership is administered, not self-serve."],
      ["Active customer requests", "Orders and notes in the CRM, on Production Pro and Commercial Workshop."],
      ["Inventory management", "Counts and costs you maintain. No supplier sync."],
      ["Business analytics", "Recorded costs and sales. Not QuickBooks."],
      ["Production tracking", "Stages updated from the bench."],
      ["Standardized documentation", "Build sheets the shop can reprint."],
    ],
    image: "/marketing/feature-illustrations/04-inventory.webp",
    imageAlt: "Illustrative shop inventory with sample SKUs.",
    cta: { href: "/pricing", label: "Explore Commercial Workshop" },
    aside: "API access, SSO, and priority support are entitlement keys only. They are not included as working services.",
  },
};

export default function AudiencePage({ id }) {
  const page = PAGES[id];
  return (
    <>
      <Seo title={page.seoTitle} description={page.description} path={page.path} />
      <PageIntro kicker={page.kicker} title={page.title} lede={page.lede}>
        <Link to={page.cta.href} className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">
          {page.cta.label}
        </Link>
      </PageIntro>
      <div className="mx-auto grid max-w-page gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <PhotoFrame src={page.photo} alt={page.photoAlt} width="1100" height="750" />
        <ul className="space-y-4">
          {page.points.map(([title, copy]) => (
            <li key={title} className="rounded-2xl border border-slate-800 bg-workbench/70 p-4">
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-1 text-sm text-slate-300">{copy}</p>
            </li>
          ))}
        </ul>
        <div className="lg:col-span-2">
          <ProductPreview src={page.image} alt={page.imageAlt} />
          <p className="mt-4 text-sm text-slate-400">{page.aside}</p>
        </div>
      </div>
      <ConversionCTA />
    </>
  );
}

export function HobbyistsPage() {
  return <AudiencePage id="hobbyists" />;
}
export function BuildersPage() {
  return <AudiencePage id="builders" />;
}
export function ShopsPage() {
  return <AudiencePage id="shops" />;
}
