import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ServiceTestimonials = ({ service }) => {
  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-semibold text-foreground">
            Client Testimonials
          </h3>
          <p className="text-sm text-muted-foreground">
            What our clients say about {service.name.toLowerCase()}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {service.testimonials.map((testimonial, index) => (
          <div key={index} className="border border-border rounded-lg p-6">
            {/* Rating */}
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, starIndex) => (
                <Icon
                  key={starIndex}
                  name="Star"
                  size={16}
                  color={starIndex < testimonial.rating ? "var(--color-secondary)" : "var(--color-muted)"}
                  className={starIndex < testimonial.rating ? "fill-current" : ""}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2">
                {testimonial.rating}/5
              </span>
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-foreground mb-4 leading-relaxed">
              "{testimonial.content}"
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.clientAvatar}
                  alt={testimonial.clientName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-foreground">
                  {testimonial.clientName}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.clientTitle} • {testimonial.company}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.projectType}
                </div>
              </div>
            </div>

            {/* Project Details */}
            {testimonial.projectDetails && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Project Value:</span>
                    <span className="ml-2 font-medium text-foreground">
                      KES {testimonial.projectDetails.value.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Completion:</span>
                    <span className="ml-2 font-medium text-foreground">
                      {testimonial.projectDetails.timeline}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 pt-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Ready to join our satisfied clients?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.href = 'tel:+254700123456'}
            className="flex items-center justify-center space-x-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-fast"
          >
            <Icon name="Phone" size={16} color="white" />
            <span>Call Now</span>
          </button>
          <button
            onClick={() => window.open('https://wa.me/254700123456', '_blank')}
            className="flex items-center justify-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-fast"
          >
            <Icon name="MessageCircle" size={16} color="white" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceTestimonials;