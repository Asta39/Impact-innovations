import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';

import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import TrustIndicators from './components/TrustIndicators';
import IndustriesServed from './components/IndustriesServed';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners for smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  // Structured data for local SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Impact Innovations",
    "description": "Nairobi\'s premier laser cutting and fabrication service provider. Precision manufacturing solutions since 2009.",
    "url": "https://impactinnovations.co.ke",
    "telephone": "+254700123456",
    "email": "info@impactinnovations.co.ke",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Industrial Area",
      "addressLocality": "Nairobi",
      "postalCode": "00100",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.3032,
      "longitude": 36.8856
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-16:00"
    ],
    "priceRange": "$$",
    "image": "https://impactinnovations.co.ke/images/workshop.jpg",
    "sameAs": [
      "https://facebook.com/impactinnovations",
      "https://twitter.com/impactinnovations",
      "https://linkedin.com/company/impactinnovations"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Manufacturing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Laser Cutting",
            "description": "Precision laser cutting for metals, plastics, and composites"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Metal Fabrication",
            "description": "Complete metal fabrication services including welding and assembly"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CNC Machining",
            "description": "High-precision CNC machining for complex parts and components"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  return (
    <>
      <Helmet>
        <title>Impact Innovations - Premier Laser Cutting & Fabrication Services in Nairobi, Kenya</title>
        <meta 
          name="description" 
          content="Leading laser cutting, metal fabrication, and CNC machining services in Nairobi. 15+ years experience, 2500+ projects completed. Get your free quote today!" 
        />
        <meta 
          name="keywords" 
          content="laser cutting Nairobi, metal fabrication Kenya, CNC machining, custom signage, precision manufacturing, industrial solutions, steel cutting, welding services" 
        />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Impact Innovations - Premier Manufacturing Services in Nairobi" />
        <meta property="og:description" content="Precision laser cutting, metal fabrication, and CNC machining services. Trusted by 500+ businesses across Kenya." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://impactinnovations.co.ke" />
        <meta property="og:image" content="https://impactinnovations.co.ke/images/og-image.jpg" />
        <meta property="og:locale" content="en_KE" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Impact Innovations - Premier Manufacturing Services" />
        <meta name="twitter:description" content="Precision laser cutting, metal fabrication, and CNC machining services in Nairobi, Kenya." />
        <meta name="twitter:image" content="https://impactinnovations.co.ke/images/twitter-image.jpg" />
        
        {/* Local SEO Tags */}
        <meta name="geo.region" content="KE-30" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.3032;36.8856" />
        <meta name="ICBM" content="-1.3032, 36.8856" />
        
        {/* Business Tags */}
        <meta name="business:contact_data:street_address" content="Industrial Area, Nairobi" />
        <meta name="business:contact_data:locality" content="Nairobi" />
        <meta name="business:contact_data:region" content="Nairobi County" />
        <meta name="business:contact_data:postal_code" content="00100" />
        <meta name="business:contact_data:country_name" content="Kenya" />
        <meta name="business:contact_data:phone_number" content="+254700123456" />
        <meta name="business:contact_data:email" content="info@impactinnovations.co.ke" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://impactinnovations.co.ke" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Impact Innovations" />
        <meta name="copyright" content="Impact Innovations" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Impact Innovations" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#FF8C00" />
        <meta name="msapplication-navbutton-color" content="#FF8C00" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#FF8C00" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <HeroSection />
          
          {/* Services Overview */}
          <ServicesOverview />
          
          {/* Trust Indicators */}
          <TrustIndicators />
          
          {/* Industries Served */}
          <IndustriesServed />
          
          {/* Testimonials Carousel */}
          <TestimonialsCarousel />
          
          {/* Newsletter Signup */}
          <NewsletterSignup />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Homepage;