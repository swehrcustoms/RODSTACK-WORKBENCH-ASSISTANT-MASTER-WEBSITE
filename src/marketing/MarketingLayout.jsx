import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MarketingHeader from "./components/MarketingHeader";
import MarketingFooter from "./components/MarketingFooter";
import { track } from "../lib/analytics";

export default function MarketingLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    track("landing_view", { path: location.pathname });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <MarketingHeader />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <MarketingFooter />
    </div>
  );
}
