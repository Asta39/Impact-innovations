import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const RelatedServices = ({ currentService, allServices }) => {
  const relatedServices = allServices.filter(service => 
    service.id !== currentService.id
  ).slice(0, 3);

  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Grid3x3" size={20} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-xl font-heading font-semibold text-foreground">
            Related Services
          </h3>
          <p className="text-sm text-muted-foreground">
            Other services you might be interested in
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedServices.map((service) => (
          <div key={service.id} className="group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-medium text-lg mb-1">
                  {service.name}
                </h4>
                <p className="text-white/80 text-sm line-clamp-2">
                  {service.shortDescription}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={14} color="var(--color-muted-foreground)" />
                <span className="text-sm text-muted-foreground">
                  {service.turnaroundTime}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Icon name="DollarSign" size={14} color="var(--color-muted-foreground)" />
                <span className="text-sm text-muted-foreground">
                  Starting from KES {service.startingPrice.toLocaleString()}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Link
                  to={`/service-detail-pages?service=${service.id}`}
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="Eye"
                    iconPosition="left"
                  >
                    View Details
                  </Button>
                </Link>
                <Link
                  to="/quote-request-form"
                  state={{ 
                    prefilledData: { service: service.name },
                    fromService: service.name 
                  }}
                  className="flex-1"
                >
                  <Button
                    variant="default"
                    size="sm"
                    fullWidth
                    iconName="FileText"
                    iconPosition="left"
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Services */}
      <div className="mt-8 text-center">
        <Link to="/service-detail-pages">
          <Button
            variant="outline"
            iconName="ArrowRight"
            iconPosition="right"
          >
            View All Services
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RelatedServices;