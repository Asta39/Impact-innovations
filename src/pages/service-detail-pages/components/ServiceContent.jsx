import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceContent = ({ service }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSpecs, setExpandedSpecs] = useState({});

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'specifications', label: 'Specifications', icon: 'Settings' },
    { id: 'process', label: 'Process', icon: 'Workflow' },
    { id: 'equipment', label: 'Equipment', icon: 'Wrench' }
  ];

  const toggleSpec = (specId) => {
    setExpandedSpecs(prev => ({
      ...prev,
      [specId]: !prev[specId]
    }));
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
          Service Description
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {service.detailedDescription}
        </p>
      </div>
      
      <div>
        <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                <Icon name="Check" size={14} color="var(--color-primary)" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSpecifications = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
        Technical Specifications
      </h3>
      {service.specifications.map((spec, index) => (
        <div key={index} className="border border-border rounded-lg">
          <button
            onClick={() => toggleSpec(index)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-fast"
          >
            <div>
              <h4 className="font-medium text-foreground">{spec.category}</h4>
              <p className="text-sm text-muted-foreground">{spec.summary}</p>
            </div>
            <Icon 
              name={expandedSpecs[index] ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              color="currentColor" 
            />
          </button>
          {expandedSpecs[index] && (
            <div className="px-4 pb-4 border-t border-border">
              <div className="pt-4 space-y-3">
                {spec.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{detail.parameter}</span>
                    <span className="text-sm font-medium text-foreground">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderProcess = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
        Our Process
      </h3>
      <div className="space-y-6">
        {service.process.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
              {index + 1}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-medium text-foreground mb-2">{step.title}</h4>
              <p className="text-muted-foreground mb-3">{step.description}</p>
              {step.image && (
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src={step.image}
                    alt={`${step.title} process step`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEquipment = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
        Equipment & Technology
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {service.equipment.map((item, index) => (
          <div key={index} className="bg-white border border-border rounded-lg p-4">
            <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-lg font-medium text-foreground mb-2">{item.name}</h4>
            <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
            <div className="space-y-2">
              {item.capabilities.map((capability, capIndex) => (
                <div key={capIndex} className="flex items-center space-x-2">
                  <Icon name="Zap" size={14} color="var(--color-primary)" />
                  <span className="text-sm text-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'specifications':
        return renderSpecifications();
      case 'process':
        return renderProcess();
      case 'equipment':
        return renderEquipment();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="bg-white border border-border rounded-lg">
      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-fast ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={tab.icon} size={16} color="currentColor" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ServiceContent;