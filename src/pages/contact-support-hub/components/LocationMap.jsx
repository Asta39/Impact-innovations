import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationMap = () => {
  const [activeTab, setActiveTab] = useState('map');

  const businessInfo = {
    name: 'Impact Innovations',
    address: 'Industrial Area, Nairobi, Kenya',
    coordinates: { lat: -1.3197, lng: 36.8510 },
    phone: '+254 700 123 456',
    email: 'info@impactinnovations.co.ke',
    hours: {
      weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
      saturday: 'Saturday: 9:00 AM - 4:00 PM',
      sunday: 'Sunday: Closed'
    }
  };

  const directions = [
    {
      method: 'car',
      icon: 'Car',
      title: 'By Car',
      description: 'From Nairobi CBD, take Mombasa Road towards Industrial Area. Turn right at Enterprise Road, then left at Likoni Road. We are located in the blue building on your right.',
      duration: '15-20 minutes from CBD'
    },
    {
      method: 'public',
      icon: 'Bus',
      title: 'Public Transport',
      description: 'Take matatu route 46 or 125 from CBD to Industrial Area. Alight at Enterprise Road stage and walk 5 minutes to our location.',
      duration: '30-40 minutes from CBD'
    },
    {
      method: 'taxi',
      icon: 'Navigation',
      title: 'Taxi/Uber',
      description: 'Use our exact coordinates or search for "Impact Innovations Industrial Area" in your ride-hailing app.',
      duration: '15-25 minutes from CBD'
    }
  ];

  const handleGetDirections = () => {
    const { lat, lng } = businessInfo.coordinates;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  };

  const handleCallBusiness = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  const handleEmailBusiness = () => {
    window.location.href = `mailto:${businessInfo.email}`;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Visit Our Workshop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Come see our state-of-the-art laser cutting facility and discuss your project 
            requirements with our expert team in person.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map and Directions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-border overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex border-b border-border">
                <button
                  onClick={() => setActiveTab('map')}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'map' ?'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name="Map" size={16} className="inline mr-2" />
                  Location Map
                </button>
                <button
                  onClick={() => setActiveTab('directions')}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'directions' ?'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name="Navigation" size={16} className="inline mr-2" />
                  Directions
                </button>
              </div>

              {/* Map Tab */}
              {activeTab === 'map' && (
                <div className="relative">
                  <div className="h-96 bg-muted/50">
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      title="Impact Innovations Location"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${businessInfo.coordinates.lat},${businessInfo.coordinates.lng}&z=15&output=embed`}
                      className="border-0"
                    />
                  </div>
                  
                  {/* Map Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-foreground">{businessInfo.name}</h4>
                          <p className="text-sm text-muted-foreground">{businessInfo.address}</p>
                        </div>
                        <Button
                          size="sm"
                          onClick={handleGetDirections}
                          iconName="ExternalLink"
                          iconPosition="right"
                        >
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Directions Tab */}
              {activeTab === 'directions' && (
                <div className="p-6">
                  <div className="space-y-6">
                    {directions.map((direction) => (
                      <div key={direction.method} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={direction.icon} size={20} color="var(--color-primary)" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-1">
                            {direction.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {direction.description}
                          </p>
                          <div className="flex items-center text-xs text-primary">
                            <Icon name="Clock" size={14} className="mr-1" />
                            {direction.duration}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <Button
                      fullWidth
                      onClick={handleGetDirections}
                      iconName="Navigation"
                      iconPosition="left"
                    >
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Business Information */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={16} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">{businessInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={16} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <button
                      onClick={handleCallBusiness}
                      className="text-sm text-primary hover:underline"
                    >
                      {businessInfo.phone}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={16} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <button
                      onClick={handleEmailBusiness}
                      className="text-sm text-primary hover:underline"
                    >
                      {businessInfo.email}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                Business Hours
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Monday - Friday</span>
                  <span className="text-sm text-muted-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Saturday</span>
                  <span className="text-sm text-muted-foreground">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Sunday</span>
                  <span className="text-sm text-error">Closed</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-success font-medium">Open Now</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Closes at 6:00 PM today
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={handleCallBusiness}
                  iconName="Phone"
                  iconPosition="left"
                >
                  Call Now
                </Button>
                
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => window.open('https://wa.me/254700123456', '_blank')}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
                >
                  WhatsApp
                </Button>
                
                <Button
                  variant="outline"
                  fullWidth
                  onClick={handleGetDirections}
                  iconName="Navigation"
                  iconPosition="left"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;