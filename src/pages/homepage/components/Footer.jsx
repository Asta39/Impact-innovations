import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/homepage' },
    { label: 'Services', path: '/service-detail-pages' },
    { label: 'Portfolio', path: '/portfolio-gallery' },
    { label: 'About Us', path: '/about-team-pages' },
    { label: 'Contact', path: '/contact-support-hub' },
    { label: 'Get Quote', path: '/quote-request-form' }
  ];

  const services = [
    { label: 'Laser Cutting', path: '/service-detail-pages' },
    { label: 'Metal Fabrication', path: '/service-detail-pages' },
    { label: 'CNC Machining', path: '/service-detail-pages' },
    { label: 'Custom Signage', path: '/service-detail-pages' },
    { label: 'Prototyping', path: '/service-detail-pages' },
    { label: 'Industrial Solutions', path: '/service-detail-pages' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/impactinnovations' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/impactinnovations' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/impactinnovations' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/impactinnovations' },
    { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com/impactinnovations' }
  ];

  const handlePhoneClick = () => {
    window.location.href = 'tel:+254700123456';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@impactinnovations.co.ke';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254700123456', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/homepage" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">
                  Impact Innovations
                </h3>
                <p className="text-sm text-gray-400 font-caption">
                  Manufacturing Excellence
                </p>
              </div>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Nairobi's premier laser cutting and fabrication service provider. 
              Delivering precision manufacturing solutions since 2009.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <button
                onClick={handlePhoneClick}
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={18} />
                <span>+254 700 123 456</span>
              </button>
              
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Icon name="Mail" size={18} />
                <span>info@impactinnovations.co.ke</span>
              </button>
              
              <div className="flex items-start gap-3 text-gray-300">
                <Icon name="MapPin" size={18} className="mt-1 flex-shrink-0" />
                <span>Industrial Area, Nairobi<br />P.O. Box 12345-00100<br />Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Icon name="ChevronRight" size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Icon name="ChevronRight" size={14} />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Business Hours</h4>
            <div className="space-y-3 mb-8">
              <div className="flex justify-between text-gray-300">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
              <div className="flex justify-between text-primary font-medium">
                <span>Emergency:</span>
                <span>24/7 Available</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-8">
          <h4 className="text-lg font-heading font-semibold mb-4 text-center">Visit Our Workshop</h4>
          <div className="bg-gray-800 rounded-lg overflow-hidden" style={{ height: '300px' }}>
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Impact Innovations Location"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=-1.3032,36.8856&z=14&output=embed"
              className="border-0"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Impact Innovations. All rights reserved. | 
              <span className="ml-1">Precision Manufacturing Since 2009</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <span className="text-gray-400 text-sm">Need immediate assistance?</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  <Icon name="Phone" size={16} />
                  Call Now
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  <Icon name="MessageCircle" size={16} />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;