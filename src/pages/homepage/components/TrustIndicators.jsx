import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustIndicators = () => {
  const stats = [
    {
      id: 1,
      value: "10+",
      label: "Years Experience",
      description: "Serving Nairobi since 2009",
      icon: "Calendar"
    },
    {
      id: 2,
      value: "250+",
      label: "Projects Completed",
      description: "Successful deliveries",
      icon: "CheckCircle"
    },
    {
      id: 3,
      value: "300+",
      label: "Happy Clients",
      description: "Across Kenya",
      icon: "Users"
    },
    {
      id: 4,
      value: "24hr",
      label: "Average Turnaround",
      description: "Fast delivery guaranteed",
      icon: "Clock"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description: "Quality Management System",
      icon: "Award",
      color: "text-blue-600"
    },
    {
      id: 2,
      name: "KEBS Certified",
      description: "Kenya Bureau of Standards",
      icon: "Shield",
      color: "text-green-600"
    },
    {
      id: 3,
      name: "NEMA Compliant",
      description: "Environmental Standards",
      icon: "Leaf",
      color: "text-emerald-600"
    },
    {
      id: 4,
      name: "OSHA Certified",
      description: "Workplace Safety Standards",
      icon: "ShieldCheck",
      color: "text-orange-600"
    }
  ];

  const clientLogos = [
    {
      id: 1,
      name: "Safaricom",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Equity Bank",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Kenya Airways",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "Coca-Cola",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop&crop=center"
    },
    {
      id: 5,
      name: "Unilever",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center"
    },
    {
      id: 6,
      name: "Bamburi Cement",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Stats Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself. Here's what sets us apart in the manufacturing industry.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="text-center bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={24} color="var(--color-primary)" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Certified Excellence
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our certifications ensure that every project meets the highest standards of quality, safety, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 ${cert.color}`}>
                  <Icon name={cert.icon} size={28} color="currentColor" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Trusted by Leading Companies
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're proud to serve some of Kenya's most respected organizations across various industries.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 card-shadow">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clientLogos.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Trust Message */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10">
              <div className="flex items-center justify-center mb-4">
                <Icon name="ShieldCheck" size={32} color="var(--color-primary)" />
              </div>
              <h4 className="text-xl font-heading font-semibold text-foreground mb-2">
                Your Success is Our Priority
              </h4>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trust Impact Innovations for their manufacturing needs. 
                Quality guaranteed, deadlines met, every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;