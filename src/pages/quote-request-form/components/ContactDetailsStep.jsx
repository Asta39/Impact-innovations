import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactDetailsStep = ({ 
  contactDetails, 
  onContactDetailsChange, 
  onSubmit, 
  onPrevious,
  isSubmitting 
}) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!contactDetails.firstName?.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!contactDetails.lastName?.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!contactDetails.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!contactDetails.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^(\+254|0)[17]\d{8}$/.test(contactDetails.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid Kenyan phone number';
    }

    if (!contactDetails.company?.trim()) {
      newErrors.company = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    onContactDetailsChange({
      ...contactDetails,
      [field]: value
    });

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit();
    }
  };

  const formatPhoneNumber = (value) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format based on length
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
    if (digits.length <= 9) return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    handleInputChange('phone', formatted);
  };

  return (
    <div className="space-y-6">
      {/* Step Header */}
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2">
          Contact Information
        </h2>
        <p className="text-muted-foreground">
          We'll use this information to send you the quote and follow up
        </p>
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground flex items-center">
            <Icon name="User" size={20} className="mr-2" />
            Personal Details
          </h3>

          <Input
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            value={contactDetails.firstName || ''}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            error={errors.firstName}
            required
          />

          <Input
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
            value={contactDetails.lastName || ''}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            error={errors.lastName}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@company.com"
            value={contactDetails.email || ''}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={errors.email}
            required
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="0712 345 678 or +254 712 345 678"
            value={contactDetails.phone || ''}
            onChange={handlePhoneChange}
            error={errors.phone}
            required
          />
        </div>

        {/* Business Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground flex items-center">
            <Icon name="Building" size={20} className="mr-2" />
            Business Details
          </h3>

          <Input
            label="Company Name"
            type="text"
            placeholder="Your company name"
            value={contactDetails.company || ''}
            onChange={(e) => handleInputChange('company', e.target.value)}
            error={errors.company}
            required
          />

          <Input
            label="Job Title"
            type="text"
            placeholder="Your position (optional)"
            value={contactDetails.jobTitle || ''}
            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
          />

          <Input
            label="Industry"
            type="text"
            placeholder="e.g., Manufacturing, Retail, Construction"
            value={contactDetails.industry || ''}
            onChange={(e) => handleInputChange('industry', e.target.value)}
          />

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Company Address (Optional)
            </label>
            <textarea
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              rows={3}
              placeholder="Street address, city, postal code"
              value={contactDetails.address || ''}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-foreground flex items-center">
          <Icon name="Settings" size={20} className="mr-2" />
          Communication Preferences
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-3">
            <Checkbox
              label="Email notifications"
              description="Receive quote updates via email"
              checked={contactDetails.emailNotifications || false}
              onChange={(e) => handleInputChange('emailNotifications', e.target.checked)}
            />
            
            <Checkbox
              label="SMS notifications"
              description="Get quick updates via text message"
              checked={contactDetails.smsNotifications || false}
              onChange={(e) => handleInputChange('smsNotifications', e.target.checked)}
            />
          </div>

          <div className="space-y-3">
            <Checkbox
              label="WhatsApp updates"
              description="Receive updates on WhatsApp"
              checked={contactDetails.whatsappNotifications || false}
              onChange={(e) => handleInputChange('whatsappNotifications', e.target.checked)}
            />
            
            <Checkbox
              label="Marketing communications"
              description="Receive newsletters and promotions"
              checked={contactDetails.marketingEmails || false}
              onChange={(e) => handleInputChange('marketingEmails', e.target.checked)}
            />
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-muted rounded-lg p-4">
        <Checkbox
          label="I agree to the Terms of Service and Privacy Policy"
          description="Required to submit your quote request"
          checked={contactDetails.agreeToTerms || false}
          onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
          required
        />
      </div>

      {/* Contact Summary */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <h4 className="font-medium text-foreground mb-3 flex items-center">
          <Icon name="CheckCircle" size={16} className="mr-2" />
          Quote Delivery Information
        </h4>
        <div className="text-sm space-y-2">
          <p className="text-muted-foreground">
            Your detailed quote will be sent to:
          </p>
          {contactDetails.email && (
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={14} color="var(--color-primary)" />
              <span className="font-medium text-foreground">{contactDetails.email}</span>
            </div>
          )}
          {contactDetails.phone && (
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={14} color="var(--color-primary)" />
              <span className="font-medium text-foreground">{contactDetails.phone}</span>
            </div>
          )}
          <p className="text-xs text-muted-foreground mt-2">
            Expected response time: 2-4 business hours
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          size="lg"
          iconName="ArrowLeft"
          iconPosition="left"
          onClick={onPrevious}
          disabled={isSubmitting}
          className="min-w-32"
        >
          Previous
        </Button>
        <Button
          variant="default"
          size="lg"
          iconName="Send"
          iconPosition="right"
          onClick={handleSubmit}
          loading={isSubmitting}
          disabled={!contactDetails.agreeToTerms}
          className="min-w-40"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
        </Button>
      </div>
    </div>
  );
};

export default ContactDetailsStep;