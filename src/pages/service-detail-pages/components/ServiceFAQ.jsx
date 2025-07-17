import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceFAQ = ({ service }) => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="HelpCircle" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-semibold text-foreground">
            Frequently Asked Questions
          </h3>
          <p className="text-sm text-muted-foreground">
            Common questions about {service.name.toLowerCase()}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {service.faqs.map((faq, index) => (
          <div key={index} className="border border-border rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-fast"
            >
              <h4 className="font-medium text-foreground pr-4">{faq.question}</h4>
              <Icon 
                name={expandedFAQ === index ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                color="currentColor"
                className="flex-shrink-0"
              />
            </button>
            {expandedFAQ === index && (
              <div className="px-4 pb-4 border-t border-border">
                <div className="pt-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact for More Questions */}
      <div className="mt-6 pt-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground mb-3">
          Have more questions about {service.name.toLowerCase()}?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.href = 'tel:+254700123456'}
            className="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-fast"
          >
            <Icon name="Phone" size={16} color="currentColor" />
            <span>Call Us</span>
          </button>
          <button
            onClick={() => window.open('https://wa.me/254700123456', '_blank')}
            className="flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 transition-fast"
          >
            <Icon name="MessageCircle" size={16} color="currentColor" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQ;