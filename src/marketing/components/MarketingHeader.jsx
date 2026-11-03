import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { WORKBENCH_LINKS } from "../../lib/site";
import { track } from "../../lib/analytics";

const LINKS = [
  { to: "/features", label: "Features" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/workbench-demo", label: "Demo" },
  { to: "/resources", label: "Resources" },
];

const SOLUTIONS = [
  { to: "/for-hobbyists", label: "Hobbyists" },
  { to: "/for-builders", label: "Independent builders" },
  { to: "/for-shops", label: "Professional shops" },
];

function navClass({ isActive }) {
  return `rounded-lg px-3 py-2 text-sm ${isActive ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800/70 hover:text-white"}`;
}

export default function MarketingHeader() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0b111e]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-page items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/RS%20Logo.png" alt="" className="logo-mark h-8 w-auto sm:hidden" />
          <img src="/RodStack%20Logo%20V2.png" alt="RodStack" className="logo-mark hidden h-9 w-auto sm:block" />
          <span className="sr-only">RodStack Workbench Assistant home</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {LINKS.slice(0, 3).map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800/70 hover:text-white"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
              onClick={() => setSolutionsOpen((value) => !value)}
            >
              Solutions
            </button>
            {solutionsOpen ? (
              <div className="absolute left-0 top-full z-20 min-w-56 rounded-xl border border-slate-700 bg-workbench p-2 shadow-card">
                {SOLUTIONS.map((link) => (
                  <NavLink key={link.to} to={link.to} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-800">
                    {link.label}
                  </NavLink>
                ))}
              </div>
            ) : null}
          </div>
          {LINKS.slice(3).map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={WORKBENCH_LINKS.signIn} className="hidden text-sm text-slate-300 hover:text-white sm:inline">
            Sign in
          </a>
          <a
            href={WORKBENCH_LINKS.signIn}
            className="rounded-lg bg-cyan-400 px-3 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300"
            onClick={() => track("signup_intent", { place: "header" })}
          >
            Start Free Bench
          </a>
          <button
            type="button"
            className="rounded-lg border border-slate-700 p-2 text-slate-200 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-slate-800 bg-navy px-4 py-4 lg:hidden" aria-label="Mobile">
          <div className="grid gap-1">
            {[...LINKS, ...SOLUTIONS, { to: "/about", label: "About" }, { to: "/contact", label: "Contact" }, { to: "/faq", label: "FAQ" }].map(
              (link) => (
                <NavLink key={link.to} to={link.to} className={navClass} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              )
            )}
            <a href={WORKBENCH_LINKS.signIn} className="rounded-lg px-3 py-2 text-sm text-cyan-200">
              Sign in on the Workbench
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
