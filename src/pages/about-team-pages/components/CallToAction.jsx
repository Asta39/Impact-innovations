import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254700123456', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+254700123456';
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          {/* Main CTA Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Join 150+ satisfied clients who trust Impact Innovations for their manufacturing needs. 
              Let's discuss how we can bring your vision to life with precision and excellence.
            </p>
            
            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/quote-request-form">
                <Button 
                  variant="secondary"
                  size="lg"
                  iconName="FileText"
                  iconPosition="left"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4"
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
                  className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} color="white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Call Us Now</h3>
              <p className="text-white/80 mb-4">Speak directly with our experts</p>
              <button
                onClick={handlePhoneClick}
                className="text-white font-medium hover:text-secondary transition-colors"
              >
                +254 700 123 456
              </button>
            </div>

            {/* WhatsApp */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} color="white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">WhatsApp Chat</h3>
              <p className="text-white/80 mb-4">Quick response guaranteed</p>
              <button
                onClick={handleWhatsAppClick}
                className="text-white font-medium hover:text-secondary transition-colors"
              >
                Start Chat
              </button>
            </div>

            {/* Visit */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} color="white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Visit Our Facility</h3>
              <p className="text-white/80 mb-4">See our capabilities firsthand</p>
              <Link 
                to="/contact-support-hub"
                className="text-white font-medium hover:text-secondary transition-colors"
              >
                Schedule Tour
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-white/20 pt-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl lg:text-3xl font-heading font-bold mb-1">2,500+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-heading font-bold mb-1">150+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-heading font-bold mb-1">15+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-heading font-bold mb-1">24/7</div>
                <div className="text-sm text-white/80">Support Available</div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-8 text-center">
            <p className="text-white/80 text-sm">
              Trusted by leading businesses across Kenya • ISO 9001:2015 Certified • Free consultations available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;