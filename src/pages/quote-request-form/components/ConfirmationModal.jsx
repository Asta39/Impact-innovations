import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConfirmationModal = ({ isOpen, onClose, quoteData }) => {
  if (!isOpen) return null;

  const quoteReference = `QR-${Date.now().toString().slice(-6)}`;
  const expectedResponse = new Date(Date.now() + 4 * 60 * 60 * 1000).toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const handleWhatsAppShare = () => {
    const message = `Hi Impact Innovations! I just submitted a quote request (Ref: ${quoteReference}) for ${quoteData.selectedService}. Looking forward to your response!`;
    window.open(`https://wa.me/254700123456?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmailSupport = () => {
    const subject = `Quote Request Follow-up - ${quoteReference}`;
    const body = `Hello,\n\nI have submitted a quote request with reference ${quoteReference}.\n\nService: ${quoteData.selectedService}\nContact: ${quoteData.contactDetails.email}\n\nPlease let me know if you need any additional information.\n\nBest regards,\n${quoteData.contactDetails.firstName} ${quoteData.contactDetails.lastName}`;
    window.location.href = `mailto:quotes@impactinnovations.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="CheckCircle" size={24} color="white" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold">Quote Request Submitted!</h2>
                <p className="text-white/90">We've received your request successfully</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Icon name="X" size={20} color="white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quote Reference */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">Quote Reference Number</h3>
                <p className="text-2xl font-mono font-bold text-primary">{quoteReference}</p>
                <p className="text-sm text-muted-foreground">Save this reference for future communication</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                iconName="Copy"
                onClick={() => navigator.clipboard.writeText(quoteReference)}
              >
                Copy
              </Button>
            </div>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Icon name="Clock" size={20} color="var(--color-primary)" />
                <h4 className="font-medium text-foreground">Expected Response</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-1">We'll send your detailed quote by:</p>
              <p className="font-semibold text-foreground">{expectedResponse}</p>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Icon name="Mail" size={20} color="var(--color-success)" />
                <h4 className="font-medium text-foreground">Delivery Method</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-1">Quote will be sent to:</p>
              <p className="font-semibold text-foreground">{quoteData.contactDetails.email}</p>
            </div>
          </div>

          {/* Request Summary */}
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3 flex items-center">
              <Icon name="FileText" size={16} className="mr-2" />
              Request Summary
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground">Service:</span>
                <span className="ml-2 font-medium text-foreground">{quoteData.selectedService}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Material:</span>
                <span className="ml-2 font-medium text-foreground">{quoteData.projectDetails.material || 'Not specified'}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Quantity:</span>
                <span className="ml-2 font-medium text-foreground">{quoteData.projectDetails.quantity || 'Not specified'}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Timeline:</span>
                <span className="ml-2 font-medium text-foreground">{quoteData.projectDetails.timeline || 'Not specified'}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Files:</span>
                <span className="ml-2 font-medium text-foreground">{quoteData.files.length} uploaded</span>
              </div>
              <div>
                <span className="text-muted-foreground">Contact:</span>
                <span className="ml-2 font-medium text-foreground">{quoteData.contactDetails.firstName} {quoteData.contactDetails.lastName}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-3 flex items-center">
              <Icon name="Info" size={16} className="mr-2" color="#1e40af" />
              What Happens Next?
            </h4>
            <ol className="text-sm text-blue-800 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="font-semibold">1.</span>
                <span>Our team will review your requirements and uploaded files</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold">2.</span>
                <span>We'll prepare a detailed quote with pricing and timeline</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold">3.</span>
                <span>You'll receive the quote via email within 2-4 business hours</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-semibold">4.</span>
                <span>Our team will follow up to discuss any questions or modifications</span>
              </li>
            </ol>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
              variant="outline"
              fullWidth
              iconName="MessageCircle"
              iconPosition="left"
              onClick={handleWhatsAppShare}
              className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
            >
              WhatsApp Us
            </Button>
            <Button
              variant="outline"
              fullWidth
              iconName="Mail"
              iconPosition="left"
              onClick={handleEmailSupport}
            >
              Email Support
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border">
            <Link to="/quote-request-form">
              <Button
                variant="outline"
                fullWidth
                iconName="Plus"
                iconPosition="left"
                onClick={onClose}
              >
                Request Another Quote
              </Button>
            </Link>
            <Link to="/portfolio-gallery">
              <Button
                variant="default"
                fullWidth
                iconName="Eye"
                iconPosition="left"
                onClick={onClose}
              >
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;