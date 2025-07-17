import React from 'react';
import Icon from '../../../components/AppIcon';

const FilterChips = ({ 
  filters, 
  activeFilters, 
  onFilterChange, 
  onClearAll,
  isMobile = false 
}) => {
  const filterCategories = [
    {
      key: 'service',
      label: 'Service Type',
      options: [
        { value: 'laser-cutting', label: 'Laser Cutting' },
        { value: 'metal-fabrication', label: 'Metal Fabrication' },
        { value: 'welding', label: 'Welding Services' },
        { value: 'cnc-machining', label: 'CNC Machining' },
        { value: 'sheet-metal', label: 'Sheet Metal Work' },
        { value: 'custom-signage', label: 'Custom Signage' }
      ]
    },
    {
      key: 'industry',
      label: 'Industry',
      options: [
        { value: 'automotive', label: 'Automotive' },
        { value: 'construction', label: 'Construction' },
        { value: 'retail', label: 'Retail & Hospitality' },
        { value: 'manufacturing', label: 'Manufacturing' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'education', label: 'Education' }
      ]
    },
    {
      key: 'material',
      label: 'Material',
      options: [
        { value: 'steel', label: 'Steel' },
        { value: 'aluminum', label: 'Aluminum' },
        { value: 'stainless-steel', label: 'Stainless Steel' },
        { value: 'brass', label: 'Brass' },
        { value: 'copper', label: 'Copper' },
        { value: 'acrylic', label: 'Acrylic' }
      ]
    },
    {
      key: 'size',
      label: 'Project Size',
      options: [
        { value: 'small', label: 'Small (< KES 50K)' },
        { value: 'medium', label: 'Medium (KES 50K - 200K)' },
        { value: 'large', label: 'Large (KES 200K - 500K)' },
        { value: 'enterprise', label: 'Enterprise (> KES 500K)' }
      ]
    }
  ];

  const handleFilterToggle = (category, value) => {
    const currentFilters = activeFilters[category] || [];
    const newFilters = currentFilters.includes(value)
      ? currentFilters.filter(f => f !== value)
      : [...currentFilters, value];
    
    onFilterChange(category, newFilters);
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).reduce((count, filters) => count + filters.length, 0);
  };

  if (isMobile) {
    return (
      <div className="bg-white border-b border-border sticky top-16 z-30">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-foreground">Filters</h3>
            {getActiveFilterCount() > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-primary hover:text-primary/80 transition-fast"
              >
                Clear All ({getActiveFilterCount()})
              </button>
            )}
          </div>
          
          <div className="space-y-3">
            {filterCategories.map((category) => (
              <div key={category.key}>
                <h4 className="text-xs font-medium text-muted-foreground mb-2">
                  {category.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.options.map((option) => {
                    const isActive = (activeFilters[category.key] || []).includes(option.value);
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleFilterToggle(category.key, option.value)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-fast ${
                          isActive
                            ? 'bg-primary text-white' :'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-heading font-semibold text-foreground">
          Filter Projects
        </h3>
        {getActiveFilterCount() > 0 && (
          <button
            onClick={onClearAll}
            className="flex items-center space-x-1 text-sm text-primary hover:text-primary/80 transition-fast"
          >
            <Icon name="X" size={16} />
            <span>Clear All</span>
          </button>
        )}
      </div>

      <div className="space-y-6">
        {filterCategories.map((category) => (
          <div key={category.key}>
            <h4 className="text-sm font-medium text-foreground mb-3">
              {category.label}
            </h4>
            <div className="space-y-2">
              {category.options.map((option) => {
                const isActive = (activeFilters[category.key] || []).includes(option.value);
                return (
                  <label
                    key={option.value}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={isActive}
                      onChange={() => handleFilterToggle(category.key, option.value)}
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                    />
                    <span className="text-sm text-foreground group-hover:text-primary transition-fast">
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterChips;