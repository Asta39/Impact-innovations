import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ValuesSection = () => {
  const values = [
    {
      id: 1,
      title: "Quality Excellence",
      description: "We never compromise on quality. Every project undergoes rigorous testing and inspection to ensure it meets our exacting standards.",
      icon: "Award",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      stats: { value: "99.8%", label: "Quality Rate" }
    },
    {
      id: 2,
      title: "Innovation Drive",
      description: "We continuously invest in cutting-edge technology and innovative processes to stay ahead of industry trends.",
      icon: "Lightbulb",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      stats: { value: "7+", label: "Tech Upgrades/Year" }
    },
    {
      id: 3,
      title: "Customer Focus",
      description: "Our clients\' success is our success. We build lasting partnerships through exceptional service and reliable delivery.",
      icon: "Heart",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
      stats: { value: "50+", label: "Happy Clients" }
    },
    {
      id: 4,
      title: "Sustainability",
      description: "We\'re committed to environmentally responsible manufacturing practices and sustainable business operations.",
      icon: "Leaf",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      stats: { value: "30%", label: "Waste Reduction" }
    }
  ];

  const achievements = [
    {
      icon: "Trophy",
      title: "ISO 9001:2015 Certified",
      description: "International quality management certification"
    },
    {
      icon: "Users",
      title: "50+ Satisfied Clients",
      description: "Trusted by businesses across Kenya"
    },
    {
      icon: "Clock",
      title: "7 Years Experience",
      description: "Proven track record in manufacturing"
    },
    {
      icon: "CheckCircle",
      title: "250+ Projects Completed",
      description: "Successfully delivered on time"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Heart" size={16} color="var(--color-primary)" className="mr-2" />
            <span className="text-sm font-medium text-primary">Our Values</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            The Principles That Drive Our Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our core values shape every decision we make and every project we undertake, ensuring consistent excellence in everything we do.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={value.id} className={`flex flex-col lg:flex-row items-center gap-6 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-xl overflow-hidden card-shadow">
                  <Image
                    src={value.image}
                    alt={value.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-heading font-bold text-primary mb-1">
                        {value.stats.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {value.stats.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={value.icon} size={24} color="var(--color-primary)" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground">
                    {value.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Our Achievements & Recognition
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These milestones reflect our commitment to excellence and the trust our clients place in us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 card-shadow group-hover:shadow-lg transition-shadow">
                  <Icon name={achievement.icon} size={24} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 card-shadow">
              <Icon name="Target" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6">
                Our Mission
              </h3>
              <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed italic mb-6">
                "To be Kenya's leading manufacturing partner, delivering precision-engineered solutions that empower businesses to achieve their goals through innovative fabrication, exceptional quality, and unwavering commitment to customer success."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={20} color="white" strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <div className="font-heading font-semibold text-foreground">Macharia Misheck</div>
                  <div className="text-sm text-muted-foreground">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;