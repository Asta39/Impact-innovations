import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254708071047', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Precision laser cutting and fabrication workshop"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            Nairobi's Premier Laser Cutting Service
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Precision Manufacturing
            <span className="block text-primary">That Delivers Results</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we provide world-class laser cutting, fabrication, and custom manufacturing services. 
            Trusted by 500+ businesses across Kenya for quality that exceeds expectations.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-10 text-white">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-600 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">250+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-gray-600 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">24hr</div>
              <div className="text-sm text-gray-300">Turnaround Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/quote-request-form">
              <Button
                variant="default"
                size="lg"
                iconName="FileText"
                iconPosition="left"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Quote
              </Button>
            </Link>
            
            <Link to="/portfolio-gallery">
              <Button
                variant="outline"
                size="lg"
                iconName="Eye"
                iconPosition="left"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Quick Contact */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300">
            <span className="text-sm">Need immediate assistance?</span>
            <div className="flex items-center gap-4">
              <a
                href="tel:+254708071047"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <span className="text-sm font-medium">+254 708 071047</span>
              </a>
              <span className="text-gray-500">or</span>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <span className="text-sm font-medium">WhatsApp Chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;