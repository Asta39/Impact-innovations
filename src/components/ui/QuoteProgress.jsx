import React from 'react';
import Icon from '../AppIcon';

const QuoteProgress = ({ 
  currentStep = 1, 
  totalSteps = 4, 
  onStepClick = null,
  steps = [
    { id: 1, label: 'Service Details', description: 'Select your service' },
    { id: 2, label: 'Project Info', description: 'Provide project details' },
    { id: 3, label: 'Contact Details', description: 'Your information' },
    { id: 4, label: 'Review & Submit', description: 'Confirm your request' }
  ]
}) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const getStepStatus = (stepId) => {
    if (stepId < currentStep) return 'completed';
    if (stepId === currentStep) return 'active';
    return 'pending';
  };

  const handleStepClick = (stepId) => {
    if (onStepClick && stepId <= currentStep) {
      onStepClick(stepId);
    }
  };

  return (
    <div className="w-full bg-white border border-border rounded-lg p-6 mb-6">
      {/* Progress Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Quote Request Progress
          </h3>
          <p className="text-sm text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-heading font-bold text-primary">
            {Math.round(progressPercentage)}%
          </div>
          <div className="text-xs text-muted-foreground">Complete</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative mb-8">
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Desktop Steps */}
      <div className="hidden md:flex items-center justify-between">
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          const isClickable = onStepClick && step.id <= currentStep;
          
          return (
            <div key={step.id} className="flex-1 flex items-center">
              {/* Step Circle */}
              <button
                onClick={() => handleStepClick(step.id)}
                disabled={!isClickable}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  status === 'completed'
                    ? 'bg-primary border-primary text-white'
                    : status === 'active' ?'bg-white border-primary text-primary' :'bg-white border-muted text-muted-foreground'
                } ${isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-default'}`}
              >
                {status === 'completed' ? (
                  <Icon name="Check" size={16} color="white" strokeWidth={2.5} />
                ) : (
                  <span className="text-sm font-semibold">{step.id}</span>
                )}
              </button>

              {/* Step Info */}
              <div className="ml-4 flex-1">
                <div className={`text-sm font-medium ${
                  status === 'active' ? 'text-primary' : 
                  status === 'completed' ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {step.description}
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-px bg-muted mx-4" />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Steps */}
      <div className="md:hidden space-y-4">
        {steps.map((step) => {
          const status = getStepStatus(step.id);
          const isClickable = onStepClick && step.id <= currentStep;
          
          return (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              disabled={!isClickable}
              className={`w-full flex items-center p-3 rounded-lg border transition-all duration-300 ${
                status === 'active' ?'border-primary bg-primary/5'
                  : status === 'completed' ?'border-success bg-success/5' :'border-border bg-white'
              } ${isClickable ? 'hover:shadow-sm' : ''}`}
            >
              {/* Step Circle */}
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 mr-3 ${
                status === 'completed'
                  ? 'bg-success border-success text-white'
                  : status === 'active' ?'bg-white border-primary text-primary' :'bg-white border-muted text-muted-foreground'
              }`}>
                {status === 'completed' ? (
                  <Icon name="Check" size={14} color="white" strokeWidth={2.5} />
                ) : (
                  <span className="text-xs font-semibold">{step.id}</span>
                )}
              </div>

              {/* Step Info */}
              <div className="flex-1 text-left">
                <div className={`text-sm font-medium ${
                  status === 'active' ? 'text-primary' : 
                  status === 'completed' ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {step.description}
                </div>
              </div>

              {/* Status Icon */}
              {status === 'active' && (
                <Icon name="ArrowRight" size={16} color="var(--color-primary)" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuoteProgress;