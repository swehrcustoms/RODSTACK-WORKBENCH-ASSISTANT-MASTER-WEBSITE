import { Link } from "react-router-dom";
import { BUILDER_REPO, WORKBENCH_LINKS, WORKBENCH_REPO } from "../../lib/site";

export default function MarketingFooter() {
  return (
    <footer className="border-t border-slate-800 bg-[#080d18]">
      <div className="mx-auto grid max-w-page gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <img src="/RodStack%20Logo%20V2.png" alt="RodStack" className="logo-mark h-10 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Workshop software for custom fishing rod builders. A separate product from the RodStack Fishing Rod Builder.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Product</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/workbench-demo">Interactive demo</Link></li>
            <li><Link to="/how-it-works">How it works</Link></li>
            <li><a href={WORKBENCH_LINKS.bench}>Open the Workbench</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Workshops</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><Link to="/for-hobbyists">Hobbyists</Link></li>
            <li><Link to="/for-builders">Independent builders</Link></li>
            <li><Link to="/for-shops">Professional shops</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Account</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href={WORKBENCH_LINKS.signIn}>Sign in</a></li>
            <li><Link to="/account/billing">Billing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><a href={WORKBENCH_REPO}>Workbench source</a></li>
            <li><a href={BUILDER_REPO}>Rod builder repo</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">
        RodStack Workbench Assistant. Marketing illustrations use sample data. Photos are crops of one commissioned scene.
      </div>
    </footer>
  );
}
