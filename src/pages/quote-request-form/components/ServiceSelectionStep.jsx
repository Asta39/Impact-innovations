import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceSelectionStep = ({ selectedService, onServiceSelect, onNext }) => {
  const services = [
    {
      id: 'laser-cutting',
      name: 'Laser Cutting',
      icon: 'Zap',
      description: 'Precision cutting for metal, wood, and acrylic materials',
      features: ['High precision', 'Clean edges', 'Complex shapes'],
      popular: true
    },
    {
      id: 'metal-fabrication',
      name: 'Metal Fabrication',
      icon: 'Wrench',
      description: 'Custom metalwork including welding and assembly',
      features: ['Welding', 'Bending', 'Assembly'],
      popular: false
    },
    {
      id: 'cnc-machining',
      name: 'CNC Machining',
      icon: 'Settings',
      description: 'Computer-controlled precision machining services',
      features: ['3D machining', 'Tight tolerances', 'Prototyping'],
      popular: false
    },
    {
      id: 'sheet-metal',
      name: 'Sheet Metal Work',
      icon: 'Square',
      description: 'Forming, bending, and shaping of sheet metal',
      features: ['Forming', 'Punching', 'Rolling'],
      popular: true
    },
    {
      id: 'signage',
      name: 'Custom Signage',
      icon: 'Type',
      description: 'Business signs, displays, and promotional materials',
      features: ['LED integration', 'Weather resistant', 'Custom design'],
      popular: false
    },
    {
      id: 'prototyping',
      name: 'Rapid Prototyping',
      icon: 'Lightbulb',
      description: 'Quick turnaround for product development and testing',
      features: ['Fast delivery', 'Multiple materials', 'Iterative design'],
      popular: false
    }
  ];

  const handleServiceSelect = (serviceId) => {
    onServiceSelect(serviceId);
  };

  const isNextDisabled = !selectedService;

  return (
    <div className="space-y-6">
      {/* Step Header */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2">
          Select Your Service
        </h2>
        <p className="text-muted-foreground">
          Choose the manufacturing service you need for your project
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleServiceSelect(service.id)}
            className={`relative p-6 rounded-lg border-2 text-left transition-all duration-300 hover:shadow-lg ${
              selectedService === service.id
                ? 'border-primary bg-primary/5 shadow-md'
                : 'border-border bg-white hover:border-primary/50'
            }`}
          >
            {/* Popular Badge */}
            {service.popular && (
              <div className="absolute -top-2 -right-2 bg-secondary text-foreground text-xs font-semibold px-2 py-1 rounded-full">
                Popular
              </div>
            )}

            {/* Service Icon */}
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
              selectedService === service.id
                ? 'bg-primary text-white' :'bg-muted text-muted-foreground'
            }`}>
              <Icon 
                name={service.icon} 
                size={24} 
                color={selectedService === service.id ? 'white' : 'currentColor'} 
              />
            </div>

            {/* Service Info */}
            <div className="space-y-3">
              <h3 className={`text-lg font-heading font-semibold ${
                selectedService === service.id ? 'text-primary' : 'text-foreground'
              }`}>
                {service.name}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-1">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon 
                      name="Check" 
                      size={14} 
                      color={selectedService === service.id ? 'var(--color-primary)' : 'var(--color-success)'} 
                    />
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selection Indicator */}
            {selectedService === service.id && (
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Check" size={14} color="white" strokeWidth={2.5} />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Selected Service Summary */}
      {selectedService && (
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon 
                name={services.find(s => s.id === selectedService)?.icon || 'Check'} 
                size={16} 
                color="white" 
              />
            </div>
            <div>
              <h4 className="font-medium text-foreground">
                Selected: {services.find(s => s.id === selectedService)?.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {services.find(s => s.id === selectedService)?.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-end pt-6">
        <Button
          variant="default"
          size="lg"
          iconName="ArrowRight"
          iconPosition="right"
          onClick={onNext}
          disabled={isNextDisabled}
          className="min-w-32"
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default ServiceSelectionStep;