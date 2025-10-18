// quote-request-form/index.jsx (Complete and Modified)
// Make sure to provide the whole completed code no trancuating or commenting out any code ok

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import QuoteProgress from '../../components/ui/QuoteProgress';
import ServiceSelectionStep from './components/ServiceSelectionStep';
import ProjectDetailsStep from './components/ProjectDetailsStep';
import FileUploadStep from './components/FileUploadStep';
import ContactDetailsStep from './components/ContactDetailsStep';
import ConfirmationModal from './components/ConfirmationModal';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const QuoteRequestForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [projectDetails, setProjectDetails] = useState({
    material: '',
    quantity: '',
    timeline: '',
    dimensions: {
      length: '',
      width: '',
      height: '',
      unit: 'metric'
    },
    requirements: ''
  });
  const [files, setFiles] = useState([]);
  const [contactDetails, setContactDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    industry: '',
    address: '',
    emailNotifications: true,
    smsNotifications: false,
    whatsappNotifications: true,
    marketingEmails: false,
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submissionError, setSubmissionError] = useState(null); // New state for error handling
  const [savedDraft, setSavedDraft] = useState(null);

  useEffect(() => {
    const draft = localStorage.getItem('quoteRequestDraft');
    if (draft) {
      try {
        const parsedDraft = JSON.parse(draft);
        setSavedDraft(parsedDraft);
      } catch (error) {
        console.error('Error loading draft:', error);
      }
    }
  }, []);

  useEffect(() => {
    const draftData = {
      currentStep,
      selectedService,
      projectDetails,
      contactDetails,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('quoteRequestDraft', JSON.stringify(draftData));
  }, [currentStep, selectedService, projectDetails, contactDetails]);

  const loadDraft = () => {
    if (savedDraft) {
      setCurrentStep(savedDraft.currentStep);
      setSelectedService(savedDraft.selectedService);
      setProjectDetails(savedDraft.projectDetails);
      setContactDetails(savedDraft.contactDetails);
      setSavedDraft(null);
    }
  };

  const clearDraft = () => {
    localStorage.removeItem('quoteRequestDraft');
    setSavedDraft(null);
  };

  const handleStepChange = (step) => {
    if (step <= currentStep || step === 1) {
      setCurrentStep(step);
    }
  };

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleProjectDetailsChange = (details) => {
    setProjectDetails(details);
  };

  const handleFilesChange = (newFiles) => {
    setFiles(newFiles);
  };

  const handleContactDetailsChange = (details) => {
    setContactDetails(details);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // --- THIS IS THE MODIFIED SUBMISSION FUNCTION ---
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmissionError(null);

    // 1. Create FormData to send files and data
    const data = new FormData();
    data.append('selectedService', selectedService);
    data.append('projectDetails', JSON.stringify(projectDetails));
    data.append('contactDetails', JSON.stringify(contactDetails));
    
    // The 'file' property of your file state object holds the actual File object
    files.forEach(fileItem => {
        data.append('quoteFiles', fileItem.file);
    });

    try {
      // 2. Send the data to your backend server
      const response = await fetch('http://localhost:4000/api/submit-quote', {
        method: 'POST',
        body: data,
        // NOTE: Do not set the 'Content-Type' header for multipart/form-data.
        // The browser sets it automatically with the correct boundary.
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'An unknown error occurred.');
      }
      
      // 3. Handle success
      localStorage.removeItem('quoteRequestDraft');
      setShowConfirmation(true);

    } catch (error) {
      // 4. Handle errors
      console.error('Submission error:', error);
      setSubmissionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    // Reset form
    setCurrentStep(1);
    setSelectedService('');
    setProjectDetails({
      material: '', quantity: '', timeline: '',
      dimensions: { length: '', width: '', height: '', unit: 'metric' },
      requirements: ''
    });
    setFiles([]);
    setContactDetails({
      firstName: '', lastName: '', email: '', phone: '', company: '',
      jobTitle: '', industry: '', address: '', emailNotifications: true,
      smsNotifications: false, whatsappNotifications: true, marketingEmails: false,
      agreeToTerms: false
    });
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return <ServiceSelectionStep selectedService={selectedService} onServiceSelect={handleServiceSelect} onNext={nextStep} />;
      case 2: return <ProjectDetailsStep selectedService={selectedService} projectDetails={projectDetails} onProjectDetailsChange={handleProjectDetailsChange} onNext={nextStep} onPrevious={previousStep} />;
      case 3: return <FileUploadStep files={files} onFilesChange={handleFilesChange} onNext={nextStep} onPrevious={previousStep} />;
      case 4: return <ContactDetailsStep contactDetails={contactDetails} onContactDetailsChange={handleContactDetailsChange} onSubmit={handleSubmit} onPrevious={previousStep} isSubmitting={isSubmitting} />;
      default: return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Request a Quote - Impact Innovations | Custom Manufacturing Services</title>
        <meta name="description" content="Get a detailed quote for your custom manufacturing project. Laser cutting, metal fabrication, CNC machining, and more. Fast response within 2-4 hours." />
        <meta name="keywords" content="manufacturing quote, laser cutting quote, metal fabrication pricing, CNC machining cost, custom manufacturing Nairobi" />
        <link rel="canonical" href="https://impactinnovations.co.ke/quote-request-form" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="max-w-6xl mx-auto px-5 lg:px-10 py-8">
          <Breadcrumb />
          
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">Request Your Custom Quote</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get a detailed quote for your manufacturing project in just a few steps. Our team will respond within 2-4 business hours.</p>
          </div>

          {savedDraft && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon name="Save" size={20} color="#2563eb" />
                  <div>
                    <h3 className="font-medium text-blue-900">Draft Found</h3>
                    <p className="text-sm text-blue-700">You have a saved draft from {new Date(savedDraft.timestamp).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={loadDraft} className="border-blue-300 text-blue-700 hover:bg-blue-100">Load Draft</Button>
                  <Button variant="ghost" size="sm" onClick={clearDraft} className="text-blue-600 hover:bg-blue-100">Dismiss</Button>
                </div>
              </div>
            </div>
          )}

          <QuoteProgress currentStep={currentStep} totalSteps={4} onStepClick={handleStepChange} />

          <div className="bg-white rounded-lg card-shadow p-6 lg:p-8">
            {submissionError && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
                <p className="font-bold">Submission Failed</p>
                <p>{submissionError}</p>
              </div>
            )}
            {renderCurrentStep()}
          </div>

          <div className="mt-8 bg-muted rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"><Icon name="HelpCircle" size={20} color="white" /></div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-3">Our team is here to assist you with your quote request. Contact us if you have any questions.</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" iconName="Phone" iconPosition="left" onClick={() => window.location.href = 'tel:+254700123456'}>Call +254 700 123 456</Button>
                  <Button variant="outline" size="sm" iconName="MessageCircle" iconPosition="left" onClick={() => window.open('https://wa.me/254700123456', '_blank')} className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100">WhatsApp Chat</Button>
                  <Button variant="outline" size="sm" iconName="Mail" iconPosition="left" onClick={() => window.location.href = 'mailto:quotes@impactinnovations.co.ke'}>Email Support</Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <ConfirmationModal isOpen={showConfirmation} onClose={handleConfirmationClose} quoteData={{ selectedService, projectDetails, files, contactDetails }} />
      </div>
    </>
  );
};

export default QuoteRequestForm;