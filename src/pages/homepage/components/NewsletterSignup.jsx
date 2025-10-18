import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email address is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      id: 1,
      icon: "Zap",
      title: "Industry Updates",
      description: "Latest manufacturing trends and technologies"
    },
    {
      id: 2,
      icon: "Tag",
      title: "Exclusive Offers",
      description: "Special discounts and promotional deals"
    },
    {
      id: 3,
      icon: "BookOpen",
      title: "Expert Tips",
      description: "Manufacturing insights and best practices"
    },
    {
      id: 4,
      icon: "Calendar",
      title: "Project Showcases",
      description: "Featured projects and case studies"
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} color="#10B981" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Welcome to Our Community!
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Thank you for subscribing to our newsletter. You'll receive the latest updates, 
              exclusive offers, and manufacturing insights directly in your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => window.location.href = '/portfolio-gallery'}
              >
                Explore Our Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageSquare"
                iconPosition="left"
                onClick={() => window.location.href = '/contact-support-hub'}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <Icon name="Mail" size={16} className="mr-2" />
                Stay Updated
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Get Manufacturing
                <span className="block text-primary">Insights & Updates</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join 2,000+ manufacturing professionals who receive our monthly newsletter 
                with industry insights, project showcases, and exclusive offers.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name={benefit.icon} size={16} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} />
                  <span>200+ Subscribers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} />
                  <span>No Spam</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="X" size={16} />
                  <span>Unsubscribe Anytime</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                      Subscribe Now
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Enter your email to get started with our newsletter.
                    </p>
                  </div>

                  <div>
                    <Input
                      type="email"
                      label="Email Address"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={error}
                      required
                      className="mb-4"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    iconName="Send"
                    iconPosition="right"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    By subscribing, you agree to our{' '}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and consent to receive updates from Impact Innovations. 
                    You can unsubscribe at any time.
                  </p>
                </form>

                {/* Social Proof */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Join industry leaders who trust our insights
                    </p>
                    <div className="flex justify-center items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
                          >
                            {String.fromCharCode(64 + i)}
                          </div>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">200+</span> professionals
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;