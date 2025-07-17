import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    { 
      label: 'Services', 
      path: '/service-detail-pages', 
      icon: 'Settings',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Laser Cutting & Engraving', path: '/service-detail-pages?service=laser-cutting', icon: 'Zap' },
        { label: 'CNC Routing', path: '/service-detail-pages?service=cnc-machining', icon: 'Settings' },
        { label: 'Signage Solutions', path: '/service-detail-pages?service=sheet-metal', icon: 'Type' },
        { label: 'Large Format Printing', path: '/service-detail-pages?service=powder-coating', icon: 'Printer' },
        { label: 'Custom Fabrication', path: '/service-detail-pages?service=welding-services', icon: 'Wrench' },
        { label: 'Metal Fabrication', path: '/service-detail-pages?service=metal-fabrication', icon: 'Hammer' }
      ]
    },
    { label: 'Portfolio', path: '/portfolio-gallery', icon: 'Image' },
    { label: 'Get Quote', path: '/quote-request-form', icon: 'FileText' },
    { label: 'About', path: '/about-team-pages', icon: 'Users' },
    { label: 'Contact', path: '/contact-support-hub', icon: 'Phone' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isServicesDropdownOpen && !event.target.closest('.services-dropdown')) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesDropdownOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const isServiceRoute = () => {
    return location.pathname === '/service-detail-pages';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+254700123456';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254700123456', '_blank');
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm card-shadow' : 'bg-white'
      }`}>
        <div className="max-w-9xl mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              to="/homepage" 
              className="flex items-center space-x-3 transition-fast hover:opacity-80"
              onClick={closeMobileMenu}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-heading font-bold text-foreground">
                  Impact Innovations
                </h1>
                <p className="text-xs text-muted-foreground font-caption">
                  Manufacturing Excellence
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.path} className="relative services-dropdown">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className={`flex items-center space-x-1 px-3 py-2 text-base font-medium transition-fast hover:text-primary ${
                          isServiceRoute() ? 'text-primary' : 'text-foreground'
                        }`}
                      >
                        <span>{item.label}</span>
                        <Icon 
                          name="ChevronDown" 
                          size={16} 
                          className={`transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isServiceRoute() && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                      )}
                      
                      {/* Dropdown Menu */}
                      {isServicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg card-shadow border border-border py-2 z-50">
                          <div className="px-4 py-2 border-b border-border">
                            <h3 className="text-sm font-semibold text-foreground">Our Services</h3>
                          </div>
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={() => setIsServicesDropdownOpen(false)}
                              className="flex items-center space-x-3 px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-fast"
                            >
                              <Icon name={dropdownItem.icon} size={16} />
                              <span>{dropdownItem.label}</span>
                            </Link>
                          ))}
                          <div className="border-t border-border mt-2 pt-2">
                            <Link
                              to="/service-detail-pages"
                              onClick={() => setIsServicesDropdownOpen(false)}
                              className="flex items-center space-x-3 px-4 py-3 text-sm text-primary hover:bg-primary/10 transition-fast"
                            >
                              <Icon name="ArrowRight" size={16} />
                              <span>View All Services</span>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`relative px-3 py-2 text-base font-medium transition-fast hover:text-primary ${
                        isActiveRoute(item.path) ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {item.label}
                      {isActiveRoute(item.path) && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Contact Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                iconName="Phone"
                iconPosition="left"
                onClick={handlePhoneClick}
                className="transition-fast hover:border-primary hover:text-primary"
              >
                Call Us
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg transition-fast hover:bg-muted"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
                color="currentColor" 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white animate-slide-in-right">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={16} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-lg font-heading font-semibold text-foreground">
                    Impact Innovations
                  </h2>
                </div>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg transition-fast hover:bg-muted"
                aria-label="Close menu"
              >
                <Icon name="X" size={20} color="currentColor" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col h-full">
              {/* Navigation Links */}
              <nav className="flex-1 px-5 py-6">
                <ul className="space-y-2">
                  {navigationItems.map((item) => (
                    <li key={item.path}>
                      {item.hasDropdown ? (
                        <div>
                          <Link
                            to={item.path}
                            onClick={closeMobileMenu}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-fast ${
                              isServiceRoute()
                                ? 'bg-primary/10 text-primary border-l-4 border-primary' :'text-foreground hover:bg-muted'
                            }`}
                          >
                            <Icon 
                              name={item.icon} 
                              size={20} 
                              color={isServiceRoute() ? 'var(--color-primary)' : 'currentColor'} 
                            />
                            <span className="font-medium">{item.label}</span>
                          </Link>
                          {/* Mobile Dropdown Items */}
                          <div className="ml-4 mt-2 space-y-1">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.path}
                                to={dropdownItem.path}
                                onClick={closeMobileMenu}
                                className="flex items-center space-x-3 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-fast"
                              >
                                <Icon name={dropdownItem.icon} size={16} />
                                <span>{dropdownItem.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={closeMobileMenu}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-fast ${
                            isActiveRoute(item.path)
                              ? 'bg-primary/10 text-primary border-l-4 border-primary' :'text-foreground hover:bg-muted'
                          }`}
                        >
                          <Icon 
                            name={item.icon} 
                            size={20} 
                            color={isActiveRoute(item.path) ? 'var(--color-primary)' : 'currentColor'} 
                          />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Contact Actions */}
              <div className="p-5 border-t border-border space-y-3">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => {
                    handlePhoneClick();
                    closeMobileMenu();
                  }}
                >
                  Call +254 700 123 456
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => {
                    handleWhatsAppClick();
                    closeMobileMenu();
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  WhatsApp Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Contact Bar - Desktop Only */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40">
        <div className="flex items-center space-x-3 bg-white card-shadow rounded-full p-2">
          <button
            onClick={handlePhoneClick}
            className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full transition-fast hover:bg-primary/90 hover:scale-105"
            aria-label="Call us"
          >
            <Icon name="Phone" size={20} color="white" />
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full transition-fast hover:bg-green-700 hover:scale-105"
            aria-label="WhatsApp chat"
          >
            <Icon name="MessageCircle" size={20} color="white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;