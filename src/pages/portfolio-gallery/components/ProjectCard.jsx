import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, onGetQuote }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getServiceIcon = (service) => {
    const iconMap = {
      'laser-cutting': 'Zap',
      'metal-fabrication': 'Wrench',
      'welding': 'Flame',
      'cnc-machining': 'Settings',
      'sheet-metal': 'Square',
      'custom-signage': 'Type'
    };
    return iconMap[service] || 'Tool';
  };

  const getIndustryColor = (industry) => {
    const colorMap = {
      'automotive': 'bg-blue-100 text-blue-800',
      'construction': 'bg-orange-100 text-orange-800',
      'retail': 'bg-purple-100 text-purple-800',
      'manufacturing': 'bg-green-100 text-green-800',
      'healthcare': 'bg-red-100 text-red-800',
      'education': 'bg-indigo-100 text-indigo-800'
    };
    return colorMap[industry] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin">
              <Icon name="Loader2" size={24} color="var(--color-muted-foreground)" />
            </div>
          </div>
        )}
        
        <Image
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon 
                  name={getServiceIcon(project.service)} 
                  size={16} 
                  color="white" 
                />
                <span className="text-white text-sm font-medium">
                  {project.serviceLabel}
                </span>
              </div>
              <button
                onClick={() => onViewDetails(project)}
                className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs hover:bg-white/30 transition-fast"
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          </div>
        )}

        {/* Before/After Badge */}
        {project.hasBeforeAfter && (
          <div className="absolute top-3 right-3">
            <span className="bg-secondary text-foreground px-2 py-1 rounded-full text-xs font-medium">
              Before/After
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Industry */}
        <div className="mb-3">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-1 line-clamp-2">
            {project.title}
          </h3>
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getIndustryColor(project.industry)}`}>
            {project.industryLabel}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Project Details */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={14} color="var(--color-muted-foreground)" />
            <span className="text-muted-foreground">
              {project.duration} days
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Package" size={14} color="var(--color-muted-foreground)" />
            <span className="text-muted-foreground">
              {project.material}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="DollarSign" size={14} color="var(--color-muted-foreground)" />
            <span className="text-muted-foreground">
              {formatCurrency(project.budget)}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={14} color="var(--color-muted-foreground)" />
            <span className="text-muted-foreground">
              {project.location}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            className="flex-1"
            iconName="Eye"
            iconPosition="left"
          >
            View Details
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => onGetQuote(project)}
            className="flex-1"
            iconName="FileText"
            iconPosition="left"
          >
            Get Quote
          </Button>
        </div>

        {/* Client Info */}
        {project.client && (
          <div className="mt-3 pt-3 border-t border-border">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Building" size={12} color="var(--color-primary)" />
              </div>
              <span className="text-xs text-muted-foreground">
                {project.client}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;