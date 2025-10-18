import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mwangi",
      position: "Operations Manager",
      company: "Nairobi Steel Works",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c3e8e2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: `Impact Innovations transformed our production capabilities. Their laser cutting precision is unmatched, and the turnaround time is incredible. We've been working with them for 3 years and they never disappoint.`,
      project: "Custom Steel Components",
      location: "Nairobi, Kenya"
    },
    {
      id: 2,
      name: "David Kimani",
      position: "Procurement Director",
      company: "East Africa Manufacturing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: `The quality of work is exceptional. From initial consultation to final delivery, their team demonstrates professionalism and expertise. They've helped us reduce costs by 30% while improving quality.`,
      project: "Industrial Equipment Parts",
      location: "Mombasa, Kenya"
    },
    {
      id: 3,
      name: "Grace Wanjiku",
      position: "Creative Director",
      company: "Urban Signage Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: `Their signage work is outstanding! The attention to detail and creative input they provide goes beyond expectations. Our clients are always impressed with the final results.`,
      project: "LED Signage Installation",
      location: "Kisumu, Kenya"
    },
    {
      id: 4,
      name: "Michael Ochieng",
      position: "Plant Manager",
      company: "Kenya Automotive Parts",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: `Reliable, efficient, and cost-effective. Impact Innovations has been our go-to partner for precision manufacturing. Their CNC machining capabilities are world-class.`,
      project: "Automotive Components",
      location: "Thika, Kenya"
    },
    {
      id: 5,
      name: "Jennifer Akinyi",
      position: "Project Manager",
      company: "Nairobi Construction Ltd",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: `Working with Impact Innovations has been a game-changer for our construction projects. Their structural steel work is precise and delivered on time, every time.`,
      project: "Structural Steel Fabrication",
      location: "Nairobi, Kenya"
    },
    {
      id: 6,
      name: "Robert Mutua",
      position: "Technical Director",
      company: "Precision Engineering Kenya",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: `The technical expertise and problem-solving capabilities of their team are impressive. They've helped us overcome complex manufacturing challenges with innovative solutions.`,
      project: "Custom Machinery Parts",
      location: "Eldoret, Kenya"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? "#FFD700" : "#E5E5E5"}
        className={index < rating ? "fill-current" : ""}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Icon name="MessageSquare" size={16} className="mr-2" />
            Client Testimonials
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            What Our Clients
            <span className="block text-primary">Say About Us</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients across Kenya 
            have to say about our manufacturing services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow max-w-4xl mx-auto">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Quote" size={32} color="var(--color-primary)" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      <div className="flex gap-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>

                    {/* Content */}
                    <blockquote className="text-lg md:text-xl text-foreground text-center mb-8 leading-relaxed font-medium">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                      <div className="flex items-center gap-4">
                        <Image
                          src={testimonial.avatar}
                          alt={`${testimonial.name} avatar`}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="text-center md:text-left">
                          <div className="font-semibold text-foreground text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {testimonial.position}
                          </div>
                          <div className="text-primary text-sm font-medium">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>

                      <div className="hidden md:block w-px h-16 bg-border" />

                      <div className="text-center md:text-left">
                        <div className="text-sm text-muted-foreground mb-1">
                          Project Type
                        </div>
                        <div className="font-medium text-foreground">
                          {testimonial.project}
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center justify-center md:justify-start mt-1">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-border hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name={isAutoPlaying ? "Play" : "Pause"} size={16} />
            <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the same quality and service that our clients rave about. 
              Let's discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254700123456"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Icon name="Phone" size={20} />
                Call +254 708 071 047
              </a>
              <button
                onClick={() => window.open('https://wa.me/254708071047', '_blank')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <Icon name="MessageCircle" size={20} />
                WhatsApp Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;