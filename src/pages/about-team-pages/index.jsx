import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSection from './components/HeroSection';
import CompanyTimeline from './components/CompanyTimeline';
import TeamSection from './components/TeamSection';
import EquipmentShowcase from './components/EquipmentShowcase';
import ValuesSection from './components/ValuesSection';
import CertificationsSection from './components/CertificationsSection';
import FacilityTour from './components/FacilityTour';
import CallToAction from './components/CallToAction';

const AboutTeamPages = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'About Us', path: '/about-team-pages', isActive: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us - Impact Innovations | Leading Manufacturing Company in Kenya</title>
        <meta name="description" content="Learn about Impact Innovations, Kenya's premier laser cutting and fabrication specialist. Meet our expert team, explore our state-of-the-art facility, and discover 15+ years of manufacturing excellence." />
        <meta name="keywords" content="about impact innovations, manufacturing company kenya, laser cutting nairobi, fabrication team, manufacturing facility, ISO certified" />
        <meta property="og:title" content="About Impact Innovations - Manufacturing Excellence in Kenya" />
        <meta property="og:description" content="Discover the story behind Kenya's leading manufacturing company. Meet our expert team and explore our cutting-edge facility." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://impactinnovations.co.ke/about-team-pages" />
      </Helmet>

      <Header />
      
      <main>
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb customItems={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <HeroSection />

        {/* Company Timeline */}
        <CompanyTimeline />

        {/* Values Section */}
        <ValuesSection />

        {/* Team Section */}
        <TeamSection />

        {/* Equipment Showcase */}
        <EquipmentShowcase />

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Facility Tour */}
        <FacilityTour />

        {/* Call to Action */}
        <CallToAction />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">I</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">Impact Innovations</h3>
                  <p className="text-sm text-white/70">Manufacturing Excellence</p>
                </div>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Kenya's premier laser cutting and fabrication specialist, delivering precision-engineered solutions for 15+ years.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-sm">f</span>
                  </div>
                </a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-sm">in</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/homepage" className="text-white/70 hover:text-primary transition-colors">Home</a></li>
                <li><a href="/service-detail-pages" className="text-white/70 hover:text-primary transition-colors">Services</a></li>
                <li><a href="/portfolio-gallery" className="text-white/70 hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="/about-team-pages" className="text-white/70 hover:text-primary transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>Industrial Area, Nairobi</p>
                <p>+254 700 123 456</p>
                <p>info@impactinnovations.co.ke</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Impact Innovations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutTeamPages;