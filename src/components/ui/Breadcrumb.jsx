import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = ({ customItems = null }) => {
  const location = useLocation();
  
  const routeMap = {
    '/homepage': 'Home',
    '/service-detail-pages': 'Services',
    '/quote-request-form': 'Get Quote',
    '/portfolio-gallery': 'Portfolio',
    '/contact-support-hub': 'Contact',
    '/about-team-pages': 'About',
  };

  const generateBreadcrumbs = () => {
    if (customItems) {
      return customItems;
    }

    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [{ label: 'Home', path: '/homepage' }];

    if (location.pathname !== '/homepage') {
      const currentRoute = routeMap[location.pathname];
      if (currentRoute) {
        breadcrumbs.push({
          label: currentRoute,
          path: location.pathname,
          isActive: true
        });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1 && location.pathname === '/homepage') {
    return null;
  }

  return (
    <nav 
      className="flex items-center space-x-2 text-sm text-muted-foreground py-4"
      aria-label="Breadcrumb navigation"
    >
      <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.path || index}>
            {index > 0 && (
              <Icon 
                name="ChevronRight" 
                size={16} 
                color="currentColor" 
                className="flex-shrink-0"
              />
            )}
            {crumb.isActive ? (
              <span className="text-foreground font-medium whitespace-nowrap">
                {crumb.label}
              </span>
            ) : (
              <Link
                to={crumb.path}
                className="transition-fast hover:text-primary whitespace-nowrap"
              >
                {crumb.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;