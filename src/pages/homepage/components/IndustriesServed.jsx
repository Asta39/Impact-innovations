import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IndustriesServed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const industries = [
    {
      id: 1,
      name: "Automotive",
      description: "Precision parts for vehicle manufacturing and repair services across Kenya.",
      image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      icon: "Car",
      projects: "350+ Projects",
      specialties: ["Engine Components", "Body Parts", "Custom Modifications"]
    },
    {
      id: 2,
      name: "Construction",
      description: "Structural steel, architectural elements, and custom building components.",
      image: "https://images.pexels.com/photos/162539/architecture-building-construction-work-162539.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      icon: "Building",
      projects: "500+ Projects",
      specialties: ["Structural Steel", "Railings", "Architectural Features"]
    },
    {
      id: 3,
      name: "Retail & Signage",
      description: "Eye-catching displays, signage, and retail fixtures that drive business.",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      icon: "Store",
      projects: "800+ Projects",
      specialties: ["LED Signage", "Display Stands", "Branding Solutions"]
    },
    {
      id: 4,
      name: "Manufacturing",
      description: "Industrial equipment, machinery parts, and production line components.",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      icon: "Factory",
      projects: "400+ Projects",
      specialties: ["Machine Parts", "Tooling", "Production Equipment"]
    },
    {
      id: 5,
      name: "Agriculture",
      description: "Farm equipment, irrigation systems, and agricultural machinery components.",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      icon: "Wheat",
      projects: "200+ Projects",
      specialties: ["Farm Equipment", "Irrigation Parts", "Storage Solutions"]
    },
    {
      id: 6,
      name: "Healthcare",
      description: "Medical equipment components and healthcare facility infrastructure.",
      image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      icon: "Heart",
      projects: "150+ Projects",
      specialties: ["Medical Devices", "Hospital Equipment", "Sterilization Systems"]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.children[0]?.offsetWidth || 0;
      const gap = 32; // 2rem gap
      container.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Icon name="Building2" size={16} className="mr-2" />
            Industries We Serve
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Serving Diverse
            <span className="block text-primary">Industries</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From automotive to healthcare, we provide specialized manufacturing solutions 
            tailored to meet the unique requirements of each industry.
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="flex-shrink-0 w-80 bg-white rounded-2xl card-shadow hover:shadow-lg transition-all duration-300"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    src={industry.image}
                    alt={`${industry.name} industry`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-2">
                      <Icon name={industry.icon} size={20} color="white" />
                    </div>
                    <div className="text-sm font-medium">{industry.projects}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-2">
                    {industry.specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" size={14} color="var(--color-primary)" className="mr-2 flex-shrink-0" />
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center mt-6 gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            
            <div className="flex gap-2">
              {industries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group bg-white rounded-2xl card-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={`${industry.name} industry`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={industry.icon} size={24} color="white" />
                  </div>
                  <div className="text-sm font-medium">{industry.projects}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="space-y-2">
                  {industry.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Check" size={16} color="var(--color-primary)" className="mr-2 flex-shrink-0" />
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We work with businesses across all sectors. Contact us to discuss how we can 
              support your specific industry requirements.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Icon name="Phone" size={20} />
              <span className="font-medium">+254 700 123 456</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;