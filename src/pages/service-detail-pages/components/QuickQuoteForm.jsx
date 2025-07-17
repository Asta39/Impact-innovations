import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const QuickQuoteForm = ({ service }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    service: service.name,
    material: '',
    quantity: '',
    timeline: '',
    description: '',
    files: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const materialOptions = [
    { value: 'mild-steel', label: 'Mild Steel' },
    { value: 'stainless-steel', label: 'Stainless Steel' },
    { value: 'aluminum', label: 'Aluminum' },
    { value: 'brass', label: 'Brass' },
    { value: 'copper', label: 'Copper' },
    { value: 'acrylic', label: 'Acrylic' },
    { value: 'wood', label: 'Wood' },
    { value: 'other', label: 'Other (Specify in description)' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (1-3 days)' },
    { value: 'standard', label: 'Standard (1-2 weeks)' },
    { value: 'flexible', label: 'Flexible (2-4 weeks)' },
    { value: 'not-sure', label: 'Not sure' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      files: e.target.files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Navigate to full quote form with pre-filled data
    navigate('/quote-request-form', { 
      state: { 
        prefilledData: formData,
        fromService: service.name 
      } 
    });
  };

  const handleFullQuoteForm = () => {
    navigate('/quote-request-form', { 
      state: { 
        prefilledData: { service: service.name },
        fromService: service.name 
      } 
    });
  };

  return (
    <div className="bg-white border border-border rounded-lg p-6 sticky top-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Calculator" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Quick Quote
          </h3>
          <p className="text-sm text-muted-foreground">
            Get instant pricing estimate
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Service (Pre-selected) */}
        <Input
          label="Service"
          type="text"
          value={formData.service}
          disabled
          className="bg-muted/50"
        />

        {/* Material Selection */}
        <Select
          label="Material Type"
          placeholder="Select material"
          options={materialOptions}
          value={formData.material}
          onChange={(value) => handleInputChange('material', value)}
          required
        />

        {/* Quantity */}
        <Input
          label="Quantity"
          type="number"
          placeholder="Enter quantity"
          value={formData.quantity}
          onChange={(e) => handleInputChange('quantity', e.target.value)}
          required
          min="1"
        />

        {/* Timeline */}
        <Select
          label="Timeline"
          placeholder="Select timeline"
          options={timelineOptions}
          value={formData.timeline}
          onChange={(value) => handleInputChange('timeline', value)}
          required
        />

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Project Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Describe your project requirements..."
            rows={3}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Upload Files (Optional)
          </label>
          <div className="relative">
            <input
              type="file"
              multiple
              accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex items-center justify-center w-full h-20 border-2 border-dashed border-border rounded-lg hover:border-primary/50 transition-fast">
              <div className="text-center">
                <Icon name="Upload" size={20} color="var(--color-muted-foreground)" className="mx-auto mb-1" />
                <p className="text-sm text-muted-foreground">
                  Drop files or click to upload
                </p>
                <p className="text-xs text-muted-foreground">
                  PDF, DWG, DXF, JPG, PNG
                </p>
              </div>
            </div>
          </div>
          {formData.files && formData.files.length > 0 && (
            <div className="mt-2 space-y-1">
              {Array.from(formData.files).map((file, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="File" size={14} color="currentColor" />
                  <span className="truncate">{file.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Buttons */}
        <div className="space-y-3 pt-4">
          <Button
            type="submit"
            variant="default"
            fullWidth
            loading={isSubmitting}
            iconName="Send"
            iconPosition="left"
          >
            Get Quick Quote
          </Button>
          
          <Button
            type="button"
            variant="outline"
            fullWidth
            iconName="FileText"
            iconPosition="left"
            onClick={handleFullQuoteForm}
          >
            Detailed Quote Form
          </Button>
        </div>
      </form>

      {/* Contact Info */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground mb-3">
          Need help? Contact us directly:
        </p>
        <div className="space-y-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="Phone"
            iconPosition="left"
            onClick={() => window.location.href = 'tel:+254700123456'}
            className="w-full justify-start"
          >
            +254 700 123 456
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => window.open('https://wa.me/254700123456', '_blank')}
            className="w-full justify-start text-green-600 hover:text-green-700"
          >
            WhatsApp Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickQuoteForm;