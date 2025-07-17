import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      category: "Quality Management",
      issuer: "Kenya Bureau of Standards",
      validUntil: "December 2025",
      description: "International standard for quality management systems, ensuring consistent quality in our manufacturing processes.",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=200&h=200&fit=crop",
      status: "active"
    },
    {
      id: 2,
      name: "KEBS Certification",
      category: "Product Standards",
      issuer: "Kenya Bureau of Standards",
      validUntil: "March 2025",
      description: "Certification ensuring our products meet Kenyan national standards for safety and quality.",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=200&h=200&fit=crop",
      status: "active"
    },
    {
      id: 3,
      name: "OSHA Compliance",
      category: "Safety Standards",
      issuer: "Directorate of Occupational Safety",
      validUntil: "June 2025",
      description: "Workplace safety certification ensuring our facility meets all occupational health and safety requirements.",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=200&h=200&fit=crop",
      status: "active"
    },
    {
      id: 4,
      name: "Environmental Compliance",
      category: "Environmental Standards",
      issuer: "National Environment Management Authority",
      validUntil: "September 2025",
      description: "Environmental impact assessment compliance for sustainable manufacturing practices.",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=200&h=200&fit=crop",
      status: "active"
    }
  ];

  const awards = [
    {
      id: 1,
      title: "Best Manufacturing Company 2023",
      organization: "Kenya Manufacturing Association",
      year: "2023",
      description: "Recognized for excellence in manufacturing processes and customer satisfaction.",
      icon: "Trophy"
    },
    {
      id: 2,
      title: "Innovation in Manufacturing Award",
      organization: "Kenya Association of Manufacturers",
      year: "2022",
      description: "Awarded for implementing cutting-edge technology in fabrication processes.",
      icon: "Lightbulb"
    },
    {
      id: 3,
      title: "Customer Service Excellence",
      organization: "Kenya Private Sector Alliance",
      year: "2022",
      description: "Recognition for outstanding customer service and client satisfaction.",
      icon: "Heart"
    },
    {
      id: 4,
      title: "Sustainable Manufacturing Leader",
      organization: "Green Manufacturing Initiative",
      year: "2021",
      description: "Acknowledged for implementing environmentally friendly manufacturing practices.",
      icon: "Leaf"
    }
  ];

  const partnerships = [
    {
      name: "Kenya Association of Manufacturers",
      logo: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=150&h=80&fit=crop",
      type: "Industry Association"
    },
    {
      name: "Kenya Bureau of Standards",
      logo: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=150&h=80&fit=crop",
      type: "Standards Body"
    },
    {
      name: "Nairobi Industrial Area Association",
      logo: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=150&h=80&fit=crop",
      type: "Business Association"
    },
    {
      name: "Kenya Private Sector Alliance",
      logo: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=150&h=80&fit=crop",
      type: "Private Sector"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Shield" size={16} color="var(--color-primary)" className="mr-2" />
            <span className="text-sm font-medium text-primary">Trust & Credibility</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Certifications & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence is validated through industry certifications, awards, and partnerships with leading organizations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
            Industry Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow">
                {/* Certification Badge */}
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                    <Image
                      src={cert.badge}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'active' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
                  }`}>
                    <Icon 
                      name={cert.status === 'active' ? 'CheckCircle' : 'Clock'} 
                      size={12} 
                      color="currentColor" 
                      className="mr-1" 
                    />
                    {cert.status === 'active' ? 'Active' : 'Renewal Due'}
                  </div>
                </div>

                {/* Certification Details */}
                <div className="text-center">
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-2">
                    {cert.category}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div>
                      <span className="font-medium">Issued by:</span> {cert.issuer}
                    </div>
                    <div>
                      <span className="font-medium">Valid until:</span> {cert.validUntil}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award) => (
              <div key={award.id} className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={award.icon} size={20} color="var(--color-primary)" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-heading font-semibold text-foreground">
                        {award.title}
                      </h4>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-sm text-primary font-medium mb-2">
                      {award.organization}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships Section */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
            Professional Partnerships
          </h3>
          <div className="bg-white rounded-2xl p-8 lg:p-12 card-shadow">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerships.map((partner, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-12 mx-auto mb-4 rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="text-sm font-medium text-foreground mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {partner.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Why Choose Impact Innovations?
            </h3>
            <p className="text-muted-foreground">
              Our certifications and partnerships demonstrate our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 card-shadow">
                <Icon name="Shield" size={24} color="var(--color-primary)" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">
                Certified Quality
              </h4>
              <p className="text-sm text-muted-foreground">
                ISO 9001:2015 certified quality management systems ensure consistent excellence
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 card-shadow">
                <Icon name="Users" size={24} color="var(--color-primary)" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">
                Industry Recognition
              </h4>
              <p className="text-sm text-muted-foreground">
                Multiple awards and recognition from leading industry organizations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 card-shadow">
                <Icon name="Handshake" size={24} color="var(--color-primary)" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">
                Trusted Partnerships
              </h4>
              <p className="text-sm text-muted-foreground">
                Strategic partnerships with leading organizations in Kenya's manufacturing sector
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;