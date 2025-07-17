import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import FAQSection from './components/FAQSection';
import LocationMap from './components/LocationMap';
import SupportTicket from './components/SupportTicket';
import LiveChat from './components/LiveChat';

const ContactSupportHub = () => {
  const [activeSection, setActiveSection] = useState('contact');

  const handleContactMethodSelect = (method) => {
    if (method === 'email') {
      setActiveSection('contact');
      // Scroll to contact form
      document.getElementById('contact-form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else if (method === 'location') {
      setActiveSection('location');
      // Scroll to location section
      document.getElementById('location-map')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Contact & Support', path: '/contact-support-hub', isActive: true }
  ];

  return (
    <>
      <Helmet>
        <title>Contact & Support Hub - Impact Innovations | Laser Cutting Services Nairobi</title>
        <meta 
          name="description" 
          content="Get in touch with Impact Innovations for laser cutting services in Nairobi. Multiple contact options, FAQ support, live chat, and location details. Fast response guaranteed." 
        />
        <meta 
          name="keywords" 
          content="contact impact innovations, laser cutting support, nairobi fabrication contact, steel cutting inquiry, custom metalwork support" 
        />
        <meta property="og:title" content="Contact & Support Hub - Impact Innovations" />
        <meta property="og:description" content="Multiple ways to reach Impact Innovations for your laser cutting and fabrication needs in Nairobi, Kenya." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://impactinnovations.co.ke/contact-support-hub" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Breadcrumb Navigation */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb customItems={breadcrumbItems} />
          </div>

          {/* Hero Section */}
          <ContactHero onContactMethodSelect={handleContactMethodSelect} />

          {/* Contact Form Section */}
          <section id="contact-form" className="py-16 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Fill out our detailed contact form and we'll get back to you within 2 hours 
                  during business hours with personalized assistance.
                </p>
              </div>
              <ContactForm />
            </div>
          </section>

          {/* Support Ticket Section */}
          <SupportTicket />

          {/* FAQ Section */}
          <FAQSection />

          {/* Location & Map Section */}
          <div id="location-map">
            <LocationMap />
          </div>

          {/* Emergency Contact Banner */}
          <section className="py-12 bg-gradient-to-r from-primary to-accent">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                Need Urgent Assistance?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                For time-sensitive projects or emergency support, contact us directly. 
                Our team is available for urgent inquiries and rush orders.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = 'tel:+254700123456'}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold transition-all duration-300 hover:bg-white/90 hover:scale-105"
                >
                  <span className="mr-2">📞</span>
                  Call Emergency Line
                </button>
                
                <button
                  onClick={() => window.open('https://wa.me/254700123456?text=URGENT:%20I%20need%20immediate%20assistance%20with%20my%20laser%20cutting%20project', '_blank')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-green-700 hover:scale-105"
                >
                  <span className="mr-2">💬</span>
                  WhatsApp Urgent
                </button>
              </div>
              
              <p className="text-sm text-white/80 mt-4">
                Emergency support available 24/7 for existing customers
              </p>
            </div>
          </section>
        </main>

        {/* Live Chat Component */}
        <LiveChat />

        {/* Footer */}
        <footer className="bg-foreground text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-heading font-bold mb-4">Impact Innovations</h3>
                <p className="text-white/80 mb-4 max-w-md">
                  Leading laser cutting and fabrication services in Nairobi, Kenya. 
                  Precision manufacturing with quality guaranteed.
                </p>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => window.location.href = 'tel:+254700123456'}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    📞 +254 700 123 456
                  </button>
                  <button
                    onClick={() => window.location.href = 'mailto:info@impactinnovations.co.ke'}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    ✉️ info@impactinnovations.co.ke
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-white/80">
                  <li><a href="/homepage" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="/service-detail-pages" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="/portfolio-gallery" className="hover:text-white transition-colors">Portfolio</a></li>
                  <li><a href="/quote-request-form" className="hover:text-white transition-colors">Get Quote</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-white/80">
                  <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#support-ticket" className="hover:text-white transition-colors">Track Ticket</a></li>
                  <li><a href="/about-team-pages" className="hover:text-white transition-colors">About Us</a></li>
                  <li>
                    <button
                      onClick={() => window.open('https://wa.me/254700123456', '_blank')}
                      className="hover:text-white transition-colors"
                    >
                      WhatsApp Support
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
              <p>&copy; {new Date().getFullYear()} Impact Innovations. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactSupportHub;