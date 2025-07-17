import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceHero = ({ service, onGetQuote }) => {
  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg mb-8">
      <Image
        src={service.heroImage}
        alt={`${service.name} service hero`}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              {service.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="FileText"
                iconPosition="left"
                onClick={onGetQuote}
                className="bg-primary hover:bg-primary/90"
              >
                Get Quote for This Service
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-foreground"
                onClick={() => window.location.href = 'tel:+254700123456'}
              >
                Call for Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;