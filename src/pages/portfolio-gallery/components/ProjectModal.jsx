import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose, onGetQuote }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBeforeAfterMode, setIsBeforeAfterMode] = useState(false);
  const [beforeAfterPosition, setBeforeAfterPosition] = useState(50);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  const handleBeforeAfterDrag = (e) => {
    if (!isBeforeAfterMode) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setBeforeAfterPosition(Math.max(0, Math.min(100, percentage)));
  };

  const specifications = [
    { label: 'Material', value: project.material },
    { label: 'Dimensions', value: project.dimensions },
    { label: 'Thickness', value: project.thickness },
    { label: 'Finish', value: project.finish },
    { label: 'Quantity', value: project.quantity },
    { label: 'Weight', value: project.weight }
  ];

  const challenges = [
    "Precision cutting requirements with ±0.1mm tolerance",
    "Complex geometry requiring advanced CAD programming",
    "Material optimization to reduce waste by 15%",
    "Custom finishing process for enhanced durability"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg max-w-6xl max-h-[90vh] w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">
              {project.title}
            </h2>
            <p className="text-muted-foreground mt-1">
              {project.client} • {project.location}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-fast"
          >
            <Icon name="X" size={24} color="currentColor" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)] overflow-hidden">
          {/* Image Gallery */}
          <div className="lg:w-2/3 relative">
            <div className="relative aspect-[4/3] bg-muted">
              {/* Main Image */}
              {!isBeforeAfterMode ? (
                <Image
                  src={project.gallery[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                /* Before/After Comparison */
                <div 
                  className="relative w-full h-full cursor-col-resize"
                  onMouseMove={handleBeforeAfterDrag}
                >
                  {/* Before Image */}
                  <Image
                    src={project.beforeImage}
                    alt={`${project.title} - Before`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* After Image with Clip */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - beforeAfterPosition}% 0 0)` }}
                  >
                    <Image
                      src={project.afterImage}
                      alt={`${project.title} - After`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Divider Line */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                    style={{ left: `${beforeAfterPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Icon name="ArrowLeftRight" size={16} color="var(--color-foreground)" />
                    </div>
                  </div>
                  
                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    After
                  </div>
                </div>
              )}

              {/* Navigation Arrows */}
              {!isBeforeAfterMode && project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-fast"
                  >
                    <Icon name="ChevronLeft" size={20} color="white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-fast"
                  >
                    <Icon name="ChevronRight" size={20} color="white" />
                  </button>
                </>
              )}

              {/* View Mode Toggle */}
              {project.hasBeforeAfter && (
                <div className="absolute bottom-4 left-4">
                  <button
                    onClick={() => setIsBeforeAfterMode(!isBeforeAfterMode)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-fast ${
                      isBeforeAfterMode
                        ? 'bg-primary text-white' :'bg-black/60 text-white hover:bg-black/80'
                    }`}
                  >
                    {isBeforeAfterMode ? 'Gallery View' : 'Before/After'}
                  </button>
                </div>
              )}

              {/* Image Counter */}
              {!isBeforeAfterMode && (
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {project.gallery.length}
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {!isBeforeAfterMode && project.gallery.length > 1 && (
              <div className="flex space-x-2 p-4 overflow-x-auto">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-fast ${
                      index === currentImageIndex
                        ? 'border-primary' :'border-transparent hover:border-border'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="lg:w-1/3 p-6 overflow-y-auto">
            {/* Project Info */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {project.serviceLabel}
                </span>
                <span className="text-2xl font-heading font-bold text-primary">
                  {formatCurrency(project.budget)}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} color="var(--color-muted-foreground)" />
                  <span>{project.duration} days</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} color="var(--color-muted-foreground)" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Building" size={16} color="var(--color-muted-foreground)" />
                  <span>{project.industryLabel}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                  <span>Completed</span>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mb-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                Technical Specifications
              </h3>
              <div className="space-y-2">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-border last:border-b-0">
                    <span className="text-muted-foreground">{spec.label}:</span>
                    <span className="font-medium text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges Overcome */}
            <div className="mb-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                Challenges Overcome
              </h3>
              <ul className="space-y-2">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Testimonial */}
            {project.testimonial && (
              <div className="mb-6 p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Quote" size={16} color="var(--color-primary)" />
                  <span className="text-sm font-medium text-foreground">Client Feedback</span>
                </div>
                <p className="text-sm text-muted-foreground italic mb-2">
                  "{project.testimonial.content}"
                </p>
                <div className="text-xs text-muted-foreground">
                  — {project.testimonial.author}, {project.testimonial.position}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                variant="default"
                fullWidth
                onClick={() => onGetQuote(project)}
                iconName="FileText"
                iconPosition="left"
              >
                Get Similar Quote
              </Button>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  iconName="Share2"
                  iconPosition="left"
                >
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;