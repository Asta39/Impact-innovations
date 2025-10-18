import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesOverview = () => {
  const services = [
{
      id: 1,
      title: "Laser Cutting & Engraving",
      description: "Precision laser cutting for metals, plastics, and composites with tolerances up to ±0.1mm. Perfect for intricate designs and high-volume production.",
      icon: "Zap",
      features: ["±0.1mm Precision", "Multiple Materials", "Complex Geometries"],
      color: "from-primary to-orange-600",
      serviceId: "laser-cutting"
    },
    {
      id: 2,
      title: "Versa Laser",
      description: "Advanced CO2 laser cutting and engraving with precision optics. Accommodates substrates up to 24x16 inches with microscale cut widths.",
      icon: "Wrench",
      features: ["CO2 Laser Technology", "Precision Optics", "Multi-Material Support"],
      color: "from-accent to-amber-700",
      serviceId: "versa-laser"
    },
    {
      id: 3,
      title: "CNC Routing",
      description: "High-precision CNC machining for complex parts and components. 3, 4, and 5-axis capabilities for any project requirement.",
      icon: "Settings",
      features: ["Multi-Axis Machining", "Tight Tolerances", "Production Ready"],
      color: "from-blue-600 to-blue-800",
      serviceId: "cnc-machining"
    },
    {
      id: 4,
      title: "Signage Solutions",
      description: "Eye-catching signage solutions for businesses. From concept design to installation, we create signs that make an impact.",
      icon: "Type",
      features: ["Design Services", "LED Integration", "Installation"],
      color: "from-green-600 to-green-800",
      serviceId: "sheet-metal"
    },
    {
      id: 5,
      title: "UV Printing",
      description: "Instant-curing UV printing on diverse materials including plastics, metals, ceramics, glass, and wood. Perfect for custom products and promotional items.",
      icon: "Lightbulb",
      features: ["Multiple Materials", "Instant Curing", "Custom Products"],
      color: "from-purple-600 to-purple-800",
      serviceId: "uv-printing"
    },
    {
      id: 6,
      title: "Large Format Printing",
      description: "High-impact wide format printing for banners, posters, and signage. Capable of printing up to 16' x 150' seamless with exceptional clarity.",
      icon: "Cog",
      features: ["Wide Format Capability", "High Resolution", "Durable Materials"],
      color: "from-red-600 to-red-800",
      serviceId: "large-format-printing"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Icon name="Star" size={16} className="mr-2" />
            Our Services
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive Manufacturing
            <span className="block text-primary">Solutions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From precision laser cutting to complete fabrication services, we deliver quality results 
            that meet your exact specifications and exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 card-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={service.icon} size={24} color="white" strokeWidth={2} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Check" size={16} color="var(--color-primary)" className="mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link to={`/service-detail-pages?service=${service.serviceId}`}>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Don't See What You Need?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We specialize in custom solutions. Tell us about your project and we'll work with you 
              to create exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote-request-form">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageSquare"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Discuss Your Project
                </Button>
              </Link>
              <Link to="/contact-support-hub">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Call Us Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;