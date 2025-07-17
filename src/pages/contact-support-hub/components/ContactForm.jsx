import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    inquiryType: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    urgency: '',
    preferredContact: '',
    newsletter: false,
    terms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { value: 'service', label: 'Service Inquiry', description: 'Questions about our services' },
    { value: 'quote', label: 'Quote Request', description: 'Get pricing for your project' },
    { value: 'support', label: 'Technical Support', description: 'Help with existing projects' },
    { value: 'partnership', label: 'Partnership', description: 'Business collaboration opportunities' },
    { value: 'general', label: 'General Question', description: 'Other inquiries' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - Within a week' },
    { value: 'medium', label: 'Medium - Within 2-3 days' },
    { value: 'high', label: 'High - Within 24 hours' },
    { value: 'urgent', label: 'Urgent - Same day response needed' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'any', label: 'Any method is fine' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    }

    if (step === 2) {
      if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
      if (!formData.message.trim()) newErrors.message = 'Message is required';
      else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
      if (!formData.urgency) newErrors.urgency = 'Please select urgency level';
    }

    if (step === 3) {
      if (!formData.terms) newErrors.terms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Contact Information';
      case 2: return 'Your Inquiry';
      case 3: return 'Review & Submit';
      default: return 'Contact Form';
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl border border-border p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} color="var(--color-success)" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for contacting Impact Innovations. We've received your inquiry and will respond within 2 hours during business hours.
        </p>
        <div className="bg-muted/50 rounded-lg p-4 mb-6">
          <p className="text-sm text-foreground">
            <strong>Reference ID:</strong> II-{Date.now().toString().slice(-6)}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Save this reference for tracking your inquiry
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
            setFormData({
              inquiryType: '',
              name: '',
              email: '',
              phone: '',
              company: '',
              subject: '',
              message: '',
              urgency: '',
              preferredContact: '',
              newsletter: false,
              terms: false
            });
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-heading font-semibold text-foreground">
              {getStepTitle()}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Step {currentStep} of 3
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  step < currentStep
                    ? 'bg-success text-white'
                    : step === currentStep
                    ? 'bg-primary text-white' :'bg-muted text-muted-foreground'
                }`}
              >
                {step < currentStep ? (
                  <Icon name="Check" size={16} color="white" />
                ) : (
                  step
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6">
        {/* Step 1: Contact Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <Select
              label="Type of Inquiry"
              description="Help us route your message to the right team"
              options={inquiryTypes}
              value={formData.inquiryType}
              onChange={(value) => handleInputChange('inquiryType', value)}
              error={errors.inquiryType}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                error={errors.name}
                required
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                error={errors.email}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+254 700 123 456"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                description="Optional - for urgent inquiries"
              />

              <Input
                label="Company Name"
                type="text"
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                description="Optional"
              />
            </div>
          </div>
        )}

        {/* Step 2: Inquiry Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <Input
              label="Subject"
              type="text"
              placeholder="Brief description of your inquiry"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              error={errors.subject}
              required
            />

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message <span className="text-error">*</span>
              </label>
              <textarea
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                rows={6}
                placeholder="Please provide detailed information about your inquiry..."
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
              {errors.message && (
                <p className="text-sm text-error mt-1">{errors.message}</p>
              )}
              <p className="text-xs text-muted-foreground mt-1">
                {formData.message.length}/500 characters
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Urgency Level"
                options={urgencyLevels}
                value={formData.urgency}
                onChange={(value) => handleInputChange('urgency', value)}
                error={errors.urgency}
                required
              />

              <Select
                label="Preferred Contact Method"
                options={contactMethods}
                value={formData.preferredContact}
                onChange={(value) => handleInputChange('preferredContact', value)}
                description="How would you like us to respond?"
              />
            </div>
          </div>
        )}

        {/* Step 3: Review & Submit */}
        {currentStep === 3 && (
          <div className="space-y-6">
            {/* Review Information */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                Review Your Information
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-foreground">Inquiry Type:</span>
                  <p className="text-muted-foreground">
                    {inquiryTypes.find(t => t.value === formData.inquiryType)?.label}
                  </p>
                </div>
                
                <div>
                  <span className="font-medium text-foreground">Name:</span>
                  <p className="text-muted-foreground">{formData.name}</p>
                </div>
                
                <div>
                  <span className="font-medium text-foreground">Email:</span>
                  <p className="text-muted-foreground">{formData.email}</p>
                </div>
                
                <div>
                  <span className="font-medium text-foreground">Urgency:</span>
                  <p className="text-muted-foreground">
                    {urgencyLevels.find(u => u.value === formData.urgency)?.label}
                  </p>
                </div>
                
                <div className="md:col-span-2">
                  <span className="font-medium text-foreground">Subject:</span>
                  <p className="text-muted-foreground">{formData.subject}</p>
                </div>
              </div>
            </div>

            {/* Agreements */}
            <div className="space-y-4">
              <Checkbox
                label="Subscribe to our newsletter for updates and offers"
                checked={formData.newsletter}
                onChange={(e) => handleInputChange('newsletter', e.target.checked)}
              />

              <Checkbox
                label="I agree to the Terms of Service and Privacy Policy"
                description="Required to process your inquiry"
                checked={formData.terms}
                onChange={(e) => handleInputChange('terms', e.target.checked)}
                error={errors.terms}
                required
              />
            </div>
          </div>
        )}

        {/* Form Actions */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <div>
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Previous
              </Button>
            )}
          </div>

          <div>
            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={handleNext}
                iconName="ChevronRight"
                iconPosition="right"
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="left"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;