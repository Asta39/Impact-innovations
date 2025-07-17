import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onContactMethodSelect }) => {
  const contactMethods = [
    {
      id: 'phone',
      title: 'Call Us Now',
      description: 'Speak directly with our experts',
      icon: 'Phone',
      action: 'Call +254 700 123 456',
      color: 'bg-primary',
      hoverColor: 'hover:bg-primary/90',
      onClick: () => window.location.href = 'tel:+254700123456'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Chat',
      description: 'Quick responses via messaging',
      icon: 'MessageCircle',
      action: 'Start WhatsApp Chat',
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      onClick: () => window.open('https://wa.me/254700123456', '_blank')
    },
    {
      id: 'email',
      title: 'Email Form',
      description: 'Send detailed inquiries',
      icon: 'Mail',
      action: 'Open Contact Form',
      color: 'bg-accent',
      hoverColor: 'hover:bg-accent/90',
      onClick: () => onContactMethodSelect('email')
    },
    {
      id: 'location',
      title: 'Visit Our Workshop',
      description: 'See our facilities in person',
      icon: 'MapPin',
      action: 'Get Directions',
      color: 'bg-secondary',
      hoverColor: 'hover:bg-secondary/90',
      onClick: () => onContactMethodSelect('location')
    }
  ];

  return (
    <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Contact & Support Hub
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get in touch with Impact Innovations for all your laser cutting and fabrication needs. 
            We're here to help you bring your projects to life with precision and quality.
          </p>
          
          {/* Business Hours */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
            <Icon name="Clock" size={16} color="var(--color-primary)" />
            <span className="text-sm font-medium text-foreground">
              Open: Mon-Fri 8:00 AM - 6:00 PM, Sat 9:00 AM - 4:00 PM
            </span>
          </div>
        </div>

        {/* Contact Method Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="group bg-white rounded-xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${method.color} text-white rounded-full mb-4 transition-all duration-300 group-hover:scale-110`}>
                  <Icon name={method.icon} size={24} color="white" strokeWidth={2} />
                </div>
                
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6">
                  {method.description}
                </p>
                
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={method.onClick}
                  className={`transition-all duration-300 ${method.hoverColor} hover:text-white hover:border-transparent`}
                >
                  {method.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">
              &lt; 2 Hours
            </div>
            <div className="text-sm text-muted-foreground">
              Average Response Time
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">
              WhatsApp Support
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-primary mb-2">
              100%
            </div>
            <div className="text-sm text-muted-foreground">
              Customer Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;