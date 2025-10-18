import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <Icon name="Award" size={16} color="var(--color-primary)" className="mr-2" />
                <span className="text-sm font-medium text-primary">7+ Years of Excellence</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                Crafting Excellence in 
                <span className="text-primary"> Manufacturing</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2018, Impact Innovations has been Nairobi's premier laser cutting and fabrication specialist, transforming raw materials into precision-engineered solutions that drive business success across Kenya.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">250+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-heading font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="flex-1 sm:flex-none"
              >
                Get Free Quote
              </Button>
             
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden card-shadow">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Impact Innovations manufacturing facility"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 card-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground">Impact Innovations</div>
                    <div className="text-sm text-muted-foreground">Manufacturing Excellence</div>
                  </div>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="absolute bottom-6 right-6 bg-success/95 backdrop-blur-sm rounded-lg p-3 text-white">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} color="white" />
                  <span className="text-sm font-medium">ISO 9001 Certified</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;