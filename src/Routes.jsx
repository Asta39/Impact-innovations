import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import QuoteRequestForm from "pages/quote-request-form";
import PortfolioGallery from "pages/portfolio-gallery";
import ContactSupportHub from "pages/contact-support-hub";
import AboutTeamPages from "pages/about-team-pages";
import ServiceDetailPages from "pages/service-detail-pages";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/quote-request-form" element={<QuoteRequestForm />} />
        <Route path="/portfolio-gallery" element={<PortfolioGallery />} />
        <Route path="/contact-support-hub" element={<ContactSupportHub />} />
        <Route path="/about-team-pages" element={<AboutTeamPages />} />
        <Route path="/service-detail-pages" element={<ServiceDetailPages />} />
        
        {/* Individual service routes */}
        <Route path="/services/laser-cutting" element={<ServiceDetailPages />} />
        <Route path="/services/cnc-machining" element={<ServiceDetailPages />} />
        <Route path="/services/sheet-metal" element={<ServiceDetailPages />} />
        <Route path="/services/powder-coating" element={<ServiceDetailPages />} />
        <Route path="/services/welding-services" element={<ServiceDetailPages />} />
        <Route path="/services/metal-fabrication" element={<ServiceDetailPages />} />
        
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;