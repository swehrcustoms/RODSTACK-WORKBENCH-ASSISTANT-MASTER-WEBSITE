import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MarketingLayout from "./marketing/MarketingLayout";
import HomePage from "./marketing/pages/HomePage";
import FeaturesPage from "./marketing/pages/FeaturesPage";
import PricingPage from "./marketing/pages/PricingPage";
import HowItWorksPage from "./marketing/pages/HowItWorksPage";
import { BuildersPage, HobbyistsPage, ShopsPage } from "./marketing/pages/AudiencePages";
import DemoPage from "./marketing/pages/DemoPage";
import { AboutPage, FaqPage, PrivacyPage, ResourcesPage, TermsPage } from "./marketing/pages/InfoPages";
import ContactPage from "./marketing/pages/ContactPage";
import BillingPage from "./billing/BillingPage";
import NotFoundPage from "./NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="for-hobbyists" element={<HobbyistsPage />} />
          <Route path="for-builders" element={<BuildersPage />} />
          <Route path="for-shops" element={<ShopsPage />} />
          <Route path="workbench-demo" element={<DemoPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="account" element={<Navigate to="/account/billing" replace />} />
          <Route path="account/billing" element={<BillingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
