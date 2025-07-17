import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TrustElements = () => {
  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description: "Quality Management System",
      image: "https://images.pexels.com/photos/6913346/pexels-photo-6913346.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "KEBS Certification",
      description: "Kenya Bureau of Standards",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Safety Certified",
      description: "Workplace Safety Standards",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    }
  ];

  const stats = [
    {
      icon: "Calendar",
      value: "15+",
      label: "Years Experience",
      description: "Serving Nairobi businesses"
    },
    {
      icon: "Users",
      value: "500+",
      label: "Happy Clients",
      description: "Satisfied customers"
    },
    {
      icon: "CheckCircle",
      value: "2,000+",
      label: "Projects Completed",
      description: "Successful deliveries"
    },
    {
      icon: "Award",
      value: "99%",
      label: "Success Rate",
      description: "On-time delivery"
    }
  ];

  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Shield" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-semibold text-foreground">
            Why Choose Us
          </h3>
          <p className="text-sm text-muted-foreground">
            Trusted by businesses across Nairobi
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name={stat.icon} size={24} color="var(--color-primary)" />
            </div>
            <div className="text-2xl font-heading font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-foreground mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-muted-foreground">
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div>
        <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
          Certifications & Standards
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex items-center space-x-3 p-3 border border-border rounded-lg">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-foreground text-sm">
                  {cert.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {cert.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantees */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
          Our Guarantees
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
              <Icon name="Check" size={14} color="var(--color-success)" />
            </div>
            <div>
              <div className="font-medium text-foreground">Quality Assurance</div>
              <div className="text-sm text-muted-foreground">
                100% quality guarantee on all work
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
              <Icon name="Check" size={14} color="var(--color-success)" />
            </div>
            <div>
              <div className="font-medium text-foreground">On-Time Delivery</div>
              <div className="text-sm text-muted-foreground">
                Committed to meeting deadlines
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
              <Icon name="Check" size={14} color="var(--color-success)" />
            </div>
            <div>
              <div className="font-medium text-foreground">Competitive Pricing</div>
              <div className="text-sm text-muted-foreground">
                Best value for money in Nairobi
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
              <Icon name="Check" size={14} color="var(--color-success)" />
            </div>
            <div>
              <div className="font-medium text-foreground">24/7 Support</div>
              <div className="text-sm text-muted-foreground">
                Always available for assistance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustElements;