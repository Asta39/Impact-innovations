import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FacilityTour = () => {
  const [activeArea, setActiveArea] = useState('production');

  const facilityAreas = {
    production: {
      title: "Production Floor",
      description: "Our main manufacturing area featuring state-of-the-art laser cutting and fabrication equipment.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
          alt: "Main production floor with laser cutting machines",
          caption: "High-precision laser cutting stations"
        },
        {
          src: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop",
          alt: "CNC machining area",
          caption: "Advanced CNC machining center"
        },
        {
          src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop",
          alt: "Welding stations",
          caption: "Professional welding workstations"
        }
      ],
      features: [
        "15,000 sq ft production space",
        "Climate-controlled environment",
        "Advanced ventilation systems",
        "24/7 security monitoring"
      ]
    },
    quality: {
      title: "Quality Control Lab",
      description: "Dedicated quality assurance facility with precision measurement and testing equipment.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
          alt: "Quality control laboratory",
          caption: "Precision measurement equipment"
        },
        {
          src: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop",
          alt: "Testing equipment",
          caption: "Material testing and analysis"
        }
      ],
      features: [
        "Coordinate measuring machines",
        "Material testing equipment",
        "Surface finish analysis",
        "Dimensional inspection tools"
      ]
    },
    storage: {
      title: "Material Storage",
      description: "Organized storage facility for raw materials and finished products with inventory management systems.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop",
          alt: "Material storage warehouse",
          caption: "Organized material storage systems"
        },
        {
          src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
          alt: "Inventory management",
          caption: "Digital inventory tracking"
        }
      ],
      features: [
        "5,000 sq ft storage capacity",
        "Digital inventory management",
        "Climate-controlled sections",
        "Automated retrieval systems"
      ]
    },
    office: {
      title: "Design & Administration",
      description: "Modern office spaces for design, engineering, and administrative operations.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
          alt: "Design office with CAD workstations",
          caption: "CAD design workstations"
        },
        {
          src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
          alt: "Meeting room",
          caption: "Client consultation areas"
        }
      ],
      features: [
        "CAD design workstations",
        "Client meeting rooms",
        "Project management center",
        "Customer service desk"
      ]
    }
  };

  const facilityStats = [
    {
      icon: "Building",
      value: "25,000",
      unit: "sq ft",
      label: "Total Facility Space"
    },
    {
      icon: "Zap",
      value: "15+",
      unit: "machines",
      label: "Advanced Equipment"
    },
    {
      icon: "Users",
      value: "50+",
      unit: "employees",
      label: "Skilled Workforce"
    },
    {
      icon: "Clock",
      value: "24/7",
      unit: "operation",
      label: "Production Capacity"
    }
  ];

  const areas = [
    { id: 'production', label: 'Production Floor', icon: 'Cog' },
    { id: 'quality', label: 'Quality Control', icon: 'CheckCircle' },
    { id: 'storage', label: 'Storage & Inventory', icon: 'Package' },
    { id: 'office', label: 'Design & Admin', icon: 'Monitor' }
  ];

  const currentArea = facilityAreas[activeArea];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Building" size={16} color="var(--color-primary)" className="mr-2" />
            <span className="text-sm font-medium text-primary">Facility Tour</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Take a Virtual Tour of Our Facility
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our state-of-the-art manufacturing facility and see where precision meets innovation in every corner of our operations.
          </p>
        </div>

        {/* Facility Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilityStats.map((stat, index) => (
            <div key={index} className="text-center bg-muted/30 rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={20} color="var(--color-primary)" />
              </div>
              <div className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-1">
                {stat.value}
                <span className="text-lg text-primary ml-1">{stat.unit}</span>
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Area Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {areas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveArea(area.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeArea === area.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={area.icon} size={18} color="currentColor" />
              <span>{area.label}</span>
            </button>
          ))}
        </div>

        {/* Area Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Area Info */}
          <div className="lg:col-span-1">
            <div className="bg-muted/30 rounded-xl p-6 sticky top-24">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {currentArea.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {currentArea.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Key Features:</h4>
                {currentArea.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentArea.images.map((image, index) => (
                <div key={index} className="group">
                  <div className="relative rounded-xl overflow-hidden card-shadow">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Virtual Tour CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 text-center">
          <Icon name="Video" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
            Schedule a Personal Facility Tour
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience our facility firsthand and see our manufacturing capabilities in action. Our team will be happy to show you around and discuss your project requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
              <Icon name="Calendar" size={18} color="white" />
              <span>Schedule Tour</span>
            </button>
            <button className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors flex items-center justify-center space-x-2">
              <Icon name="Play" size={18} color="currentColor" />
              <span>Watch Video Tour</span>
            </button>
          </div>
        </div>

        {/* Location Map */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
            Visit Our Facility
          </h3>
          <div className="bg-white rounded-xl card-shadow overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Map */}
              <div className="h-80 lg:h-96">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Impact Innovations Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=-1.3194,36.8441&z=14&output=embed"
                  className="border-0"
                />
              </div>
              
              {/* Contact Info */}
              <div className="p-8 lg:p-12">
                <h4 className="text-xl font-heading font-semibold text-foreground mb-6">
                  Impact Innovations Manufacturing
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={20} color="var(--color-primary)" className="mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">Industrial Area, Nairobi<br />P.O. Box 12345-00100, Kenya</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" size={20} color="var(--color-primary)" className="mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Operating Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Icon name="Phone" size={20} color="var(--color-primary)" className="mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Contact</p>
                      <p className="text-muted-foreground">+254 700 123 456<br />info@impactinnovations.co.ke</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityTour;