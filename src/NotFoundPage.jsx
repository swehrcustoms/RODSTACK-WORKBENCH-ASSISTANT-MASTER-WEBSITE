import { Link } from "react-router-dom";
import Seo from "./marketing/components/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found | RodStack" description="That page is not on the RodStack marketing site." path="/404" />
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="text-4xl font-semibold">That page is not on this site.</h1>
        <p className="mt-3 text-slate-300">Workshop screens stay on the Workbench. Marketing pages are linked from the menu.</p>
        <Link to="/" className="mt-6 inline-flex rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">
          Back to the homepage
        </Link>
      </div>
    </>
  );
}
