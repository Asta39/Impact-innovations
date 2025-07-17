import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ProjectDetailsStep = ({ 
  selectedService, 
  projectDetails, 
  onProjectDetailsChange, 
  onNext, 
  onPrevious 
}) => {
  const [measurementUnit, setMeasurementUnit] = useState('metric');

  const materialOptions = {
    'laser-cutting': [
      { value: 'mild-steel', label: 'Mild Steel', description: '1-20mm thickness' },
      { value: 'stainless-steel', label: 'Stainless Steel', description: '1-15mm thickness' },
      { value: 'aluminum', label: 'Aluminum', description: '1-25mm thickness' },
      { value: 'acrylic', label: 'Acrylic', description: '3-50mm thickness' },
      { value: 'wood', label: 'Wood/MDF', description: '3-30mm thickness' },
      { value: 'other', label: 'Other Material', description: 'Specify in requirements' }
    ],
    'metal-fabrication': [
      { value: 'mild-steel', label: 'Mild Steel', description: 'Most common choice' },
      { value: 'stainless-steel', label: 'Stainless Steel', description: 'Corrosion resistant' },
      { value: 'aluminum', label: 'Aluminum', description: 'Lightweight option' },
      { value: 'brass', label: 'Brass', description: 'Decorative applications' },
      { value: 'copper', label: 'Copper', description: 'Electrical applications' }
    ],
    'cnc-machining': [
      { value: 'aluminum', label: 'Aluminum', description: 'Easy to machine' },
      { value: 'steel', label: 'Steel', description: 'High strength' },
      { value: 'brass', label: 'Brass', description: 'Good machinability' },
      { value: 'plastic', label: 'Engineering Plastics', description: 'Various types available' }
    ],
    'sheet-metal': [
      { value: 'galvanized', label: 'Galvanized Steel', description: 'Rust resistant' },
      { value: 'mild-steel', label: 'Mild Steel', description: 'Cost effective' },
      { value: 'stainless', label: 'Stainless Steel', description: 'Premium finish' },
      { value: 'aluminum', label: 'Aluminum Sheet', description: 'Lightweight' }
    ],
    'signage': [
      { value: 'acrylic', label: 'Acrylic', description: 'Clear or colored' },
      { value: 'aluminum', label: 'Aluminum Composite', description: 'Weather resistant' },
      { value: 'steel', label: 'Steel', description: 'Durable outdoor use' },
      { value: 'wood', label: 'Wood', description: 'Natural appearance' }
    ],
    'prototyping': [
      { value: 'pla', label: 'PLA Plastic', description: '3D printing material' },
      { value: 'abs', label: 'ABS Plastic', description: 'Stronger than PLA' },
      { value: 'aluminum', label: 'Aluminum', description: 'Metal prototypes' },
      { value: 'resin', label: 'Resin', description: 'High detail printing' }
    ]
  };

  const quantityOptions = [
    { value: '1', label: '1 piece' },
    { value: '2-5', label: '2-5 pieces' },
    { value: '6-10', label: '6-10 pieces' },
    { value: '11-25', label: '11-25 pieces' },
    { value: '26-50', label: '26-50 pieces' },
    { value: '51-100', label: '51-100 pieces' },
    { value: '100+', label: '100+ pieces' }
  ];

  const timelineOptions = [
    { value: 'rush', label: 'Rush (1-2 days)', description: 'Additional charges apply' },
    { value: 'standard', label: 'Standard (3-5 days)', description: 'Most popular option' },
    { value: 'economy', label: 'Economy (1-2 weeks)', description: 'Best value pricing' },
    { value: 'flexible', label: 'Flexible timing', description: 'No specific deadline' }
  ];

  const handleInputChange = (field, value) => {
    onProjectDetailsChange({
      ...projectDetails,
      [field]: value
    });
  };

  const toggleMeasurementUnit = () => {
    const newUnit = measurementUnit === 'metric' ? 'imperial' : 'metric';
    setMeasurementUnit(newUnit);
    
    // Clear dimension values when switching units
    onProjectDetailsChange({
      ...projectDetails,
      dimensions: {
        length: '',
        width: '',
        height: '',
        unit: newUnit
      }
    });
  };

  const currentMaterials = materialOptions[selectedService] || [];
  
  const isNextDisabled = !projectDetails.material || !projectDetails.quantity;

  return (
    <div className="space-y-6">
      {/* Step Header */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2">
          Project Details
        </h2>
        <p className="text-muted-foreground">
          Tell us more about your project requirements
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Material Selection */}
        <div className="lg:col-span-2">
          <Select
            label="Material Type"
            description="Select the material for your project"
            options={currentMaterials}
            value={projectDetails.material || ''}
            onChange={(value) => handleInputChange('material', value)}
            required
            searchable
            placeholder="Choose material..."
          />
        </div>

        {/* Quantity */}
        <Select
          label="Quantity"
          description="How many pieces do you need?"
          options={quantityOptions}
          value={projectDetails.quantity || ''}
          onChange={(value) => handleInputChange('quantity', value)}
          required
          placeholder="Select quantity..."
        />

        {/* Timeline */}
        <Select
          label="Timeline"
          description="When do you need this completed?"
          options={timelineOptions}
          value={projectDetails.timeline || ''}
          onChange={(value) => handleInputChange('timeline', value)}
          placeholder="Select timeline..."
        />

        {/* Dimensions Section */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-foreground">
                  Dimensions (Optional)
                </label>
                <p className="text-xs text-muted-foreground">
                  Provide approximate dimensions if known
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleMeasurementUnit}
                iconName="RotateCcw"
                iconPosition="left"
              >
                {measurementUnit === 'metric' ? 'mm' : 'inches'}
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input
                label="Length"
                type="number"
                placeholder={measurementUnit === 'metric' ? 'mm' : 'inches'}
                value={projectDetails.dimensions?.length || ''}
                onChange={(e) => handleInputChange('dimensions', {
                  ...projectDetails.dimensions,
                  length: e.target.value,
                  unit: measurementUnit
                })}
              />
              <Input
                label="Width"
                type="number"
                placeholder={measurementUnit === 'metric' ? 'mm' : 'inches'}
                value={projectDetails.dimensions?.width || ''}
                onChange={(e) => handleInputChange('dimensions', {
                  ...projectDetails.dimensions,
                  width: e.target.value,
                  unit: measurementUnit
                })}
              />
              <Input
                label="Height/Thickness"
                type="number"
                placeholder={measurementUnit === 'metric' ? 'mm' : 'inches'}
                value={projectDetails.dimensions?.height || ''}
                onChange={(e) => handleInputChange('dimensions', {
                  ...projectDetails.dimensions,
                  height: e.target.value,
                  unit: measurementUnit
                })}
              />
            </div>
          </div>
        </div>

        {/* Special Requirements */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">
            Special Requirements (Optional)
          </label>
          <textarea
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            rows={4}
            placeholder="Describe any special requirements, finishes, tolerances, or additional details..."
            value={projectDetails.requirements || ''}
            onChange={(e) => handleInputChange('requirements', e.target.value)}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Include details about surface finish, tolerances, assembly requirements, etc.
          </p>
        </div>
      </div>

      {/* Project Summary */}
      {(projectDetails.material || projectDetails.quantity) && (
        <div className="bg-muted rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-3 flex items-center">
            <Icon name="FileText" size={16} className="mr-2" />
            Project Summary
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            {projectDetails.material && (
              <div>
                <span className="text-muted-foreground">Material:</span>
                <span className="ml-2 font-medium text-foreground">
                  {currentMaterials.find(m => m.value === projectDetails.material)?.label}
                </span>
              </div>
            )}
            {projectDetails.quantity && (
              <div>
                <span className="text-muted-foreground">Quantity:</span>
                <span className="ml-2 font-medium text-foreground">
                  {quantityOptions.find(q => q.value === projectDetails.quantity)?.label}
                </span>
              </div>
            )}
            {projectDetails.timeline && (
              <div>
                <span className="text-muted-foreground">Timeline:</span>
                <span className="ml-2 font-medium text-foreground">
                  {timelineOptions.find(t => t.value === projectDetails.timeline)?.label}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          size="lg"
          iconName="ArrowLeft"
          iconPosition="left"
          onClick={onPrevious}
          className="min-w-32"
        >
          Previous
        </Button>
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

export default ProjectDetailsStep;