import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FilterChips from './components/FilterChips';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import SearchBar from './components/SearchBar';

const PortfolioGallery = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid, masonry
  const [sortBy, setSortBy] = useState('recent');
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Mock portfolio data
  const portfolioProjects = [
    {
      id: 1,
      title: "Custom Steel Staircase with Glass Railings",
      description: "Modern industrial staircase design featuring precision-cut steel framework with tempered glass panels for a contemporary office building in Westlands.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
      ],
      beforeImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      service: 'metal-fabrication',
      serviceLabel: 'Metal Fabrication',
      industry: 'construction',
      industryLabel: 'Construction',
      material: 'Stainless Steel',
      budget: 850000,
      duration: 21,
      location: 'Westlands, Nairobi',
      client: 'Westlands Corporate Center',
      featured: true,
      hasBeforeAfter: true,
      dimensions: "4.2m x 1.2m x 3.8m",
      thickness: "6mm frame, 12mm glass",
      finish: "Brushed stainless steel",
      quantity: "1 complete staircase",
      weight: "450kg",
      testimonial: {
        content: "Impact Innovations delivered exceptional quality work. The staircase became the centerpiece of our lobby and exceeded all expectations.",
        author: "Sarah Kimani",
        position: "Facilities Manager"
      }
    },
    {
      id: 2,
      title: "Precision Automotive Parts Manufacturing",
      description: "High-precision laser cutting and CNC machining of automotive components for local vehicle assembly plant, meeting strict quality standards.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop"
      ],
      beforeImage: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      service: 'cnc-machining',
      serviceLabel: 'CNC Machining',
      industry: 'automotive',
      industryLabel: 'Automotive',
      material: 'Aluminum',
      budget: 1200000,
      duration: 14,
      location: 'Industrial Area, Nairobi',
      client: 'Kenya Vehicle Assemblers',
      featured: false,
      hasBeforeAfter: true,
      dimensions: "Various sizes",
      thickness: "2-8mm",
      finish: "Anodized aluminum",
      quantity: "500 pieces",
      weight: "2.5kg average"
    },
    {
      id: 3,
      title: "Restaurant Kitchen Equipment Fabrication",
      description: "Custom stainless steel kitchen equipment including prep tables, shelving units, and ventilation hoods for upscale restaurant in Karen.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
      ],
      beforeImage: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      service: 'sheet-metal',
      serviceLabel: 'Sheet Metal Work',
      industry: 'retail',
      industryLabel: 'Retail & Hospitality',
      material: 'Stainless Steel',
      budget: 650000,
      duration: 18,
      location: 'Karen, Nairobi',
      client: 'Savannah Grill Restaurant',
      featured: false,
      hasBeforeAfter: true,
      dimensions: "Multiple units",
      thickness: "1.5-3mm",
      finish: "Food-grade stainless",
      quantity: "8 pieces",
      weight: "180kg total"
    },
    {
      id: 4,
      title: "Corporate Signage and Branding Elements",
      description: "Illuminated corporate signage with precision-cut acrylic letters and LED backlighting for multinational company headquarters.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
      ],
      beforeImage: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      service: 'custom-signage',
      serviceLabel: 'Custom Signage',
      industry: 'manufacturing',
      industryLabel: 'Manufacturing',
      material: 'Acrylic',
      budget: 320000,
      duration: 10,
      location: 'Upper Hill, Nairobi',
      client: 'TechCorp Kenya Ltd',
      featured: false,
      hasBeforeAfter: true,
      dimensions: "3.5m x 1.2m",
      thickness: "10mm acrylic",
      finish: "LED backlit",
      quantity: "1 main sign + 4 directional",
      weight: "45kg"
    },
    {
      id: 5,
      title: "Medical Equipment Housing and Brackets",
      description: "Sterile stainless steel housings and mounting brackets for medical equipment in private hospital, meeting healthcare industry standards.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
      ],
      beforeImage: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      service: 'laser-cutting',
      serviceLabel: 'Laser Cutting',
      industry: 'healthcare',
      industryLabel: 'Healthcare',
      material: 'Stainless Steel',
      budget: 480000,
      duration: 12,
      location: 'Kilimani, Nairobi',
      client: 'Nairobi Medical Center',
      featured: false,
      hasBeforeAfter: true,
      dimensions: "Various sizes",
      thickness: "2-4mm",
      finish: "Medical grade polish",
      quantity: "25 pieces",
      weight: "120kg total"
    },
    {
      id: 6,
      title: "School Laboratory Furniture and Fixtures",
      description: "Durable steel laboratory benches, storage cabinets, and safety equipment for secondary school science laboratories.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop"
      ],
      beforeImage: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?w=800&h=600&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      service: 'welding',
      serviceLabel: 'Welding Services',
      industry: 'education',
      industryLabel: 'Education',
      material: 'Steel',
      budget: 750000,
      duration: 25,
      location: 'Kiambu, Kenya',
      client: 'St. Mary\'s Secondary School',
      featured: true,
      hasBeforeAfter: true,
      dimensions: "12 benches, 2.4m x 0.8m each",
      thickness: "3mm steel frame",
      finish: "Powder coated",
      quantity: "Complete lab setup",
      weight: "2,400kg total"
    }
  ];

  // Search suggestions
  const searchSuggestions = [
    "laser cutting steel",
    "custom signage",
    "metal fabrication",
    "welding services",
    "CNC machining",
    "stainless steel",
    "automotive parts",
    "restaurant equipment",
    "medical equipment",
    "school furniture"
  ];

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = [...portfolioProjects];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.serviceLabel.toLowerCase().includes(query) ||
        project.industryLabel.toLowerCase().includes(query) ||
        project.material.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query)
      );
    }

    // Apply category filters
    Object.entries(activeFilters).forEach(([category, values]) => {
      if (values.length > 0) {
        filtered = filtered.filter(project => {
          if (category === 'service') return values.includes(project.service);
          if (category === 'industry') return values.includes(project.industry);
          if (category === 'material') return values.some(material => 
            project.material.toLowerCase().includes(material.toLowerCase())
          );
          if (category === 'size') {
            const budget = project.budget;
            return values.some(size => {
              switch (size) {
                case 'small': return budget < 50000;
                case 'medium': return budget >= 50000 && budget < 200000;
                case 'large': return budget >= 200000 && budget < 500000;
                case 'enterprise': return budget >= 500000;
                default: return true;
              }
            });
          }
          return true;
        });
      }
    });

    // Apply sorting
    switch (sortBy) {
      case 'recent':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'budget-high':
        filtered.sort((a, b) => b.budget - a.budget);
        break;
      case 'budget-low':
        filtered.sort((a, b) => a.budget - b.budget);
        break;
      case 'duration':
        filtered.sort((a, b) => a.duration - b.duration);
        break;
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, activeFilters, sortBy]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    // Add to recent searches logic here
  };

  const handleFilterChange = (category, values) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: values
    }));
  };

  const handleClearAllFilters = () => {
    setActiveFilters({});
    setSearchQuery('');
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleGetQuote = (project) => {
    // Navigate to quote form with pre-filled data
    navigate('/quote-request-form', {
      state: {
        prefilledData: {
          service: project.service,
          material: project.material,
          description: `Similar to: ${project.title}`,
          referenceProject: project.id
        }
      }
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Portfolio Gallery', path: '/portfolio-gallery', isActive: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-9xl mx-auto px-5 lg:px-10 py-6">
        <Breadcrumb customItems={breadcrumbItems} />
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Our Portfolio Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our extensive collection of precision fabrication projects. From custom metalwork to industrial solutions, 
              see how we've helped businesses across Kenya achieve their manufacturing goals.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              onSearchSubmit={handleSearchSubmit}
              suggestions={searchSuggestions}
            />
          </div>

          {/* Stats and Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>
                <strong className="text-foreground">{filteredProjects.length}</strong> projects found
              </span>
              <span>•</span>
              <span>
                <strong className="text-foreground">{portfolioProjects.filter(p => p.featured).length}</strong> featured
              </span>
              <span>•</span>
              <span>
                <strong className="text-foreground">{portfolioProjects.filter(p => p.hasBeforeAfter).length}</strong> with before/after
              </span>
            </div>

            <div className="flex items-center space-x-4">
              {/* Sort Dropdown */}
              <div className="flex items-center space-x-2">
                <Icon name="ArrowUpDown" size={16} color="var(--color-muted-foreground)" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-border rounded-lg px-3 py-2 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="recent">Most Recent</option>
                  <option value="featured">Featured First</option>
                  <option value="budget-high">Budget: High to Low</option>
                  <option value="budget-low">Budget: Low to High</option>
                  <option value="duration">Duration: Shortest First</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="hidden lg:flex items-center space-x-1 bg-muted rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-fast ${
                    viewMode === 'grid' ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name="Grid3X3" size={16} />
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded-lg transition-fast ${
                    viewMode === 'masonry' ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name="LayoutGrid" size={16} />
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-fast"
              >
                <Icon name="Filter" size={16} />
                <span>Filters</span>
                {Object.values(activeFilters).reduce((count, filters) => count + filters.length, 0) > 0 && (
                  <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-xs">
                    {Object.values(activeFilters).reduce((count, filters) => count + filters.length, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterChips
              filters={activeFilters}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearAll={handleClearAllFilters}
              isMobile={false}
            />
          </div>

          {/* Mobile Filters */}
          {showMobileFilters && (
            <div className="lg:hidden">
              <FilterChips
                filters={activeFilters}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearAll={handleClearAllFilters}
                isMobile={true}
              />
            </div>
          )}

          {/* Projects Grid */}
          <div className="flex-1">
            {isLoading ? (
              /* Loading Skeleton */
              <div className={`grid gap-6 ${
                viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' :'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-white border border-border rounded-lg overflow-hidden animate-pulse">
                    <div className="aspect-[4/3] bg-muted" />
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                      <div className="h-3 bg-muted rounded w-full" />
                      <div className="h-3 bg-muted rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProjects.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' :'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                    onGetQuote={handleGetQuote}
                  />
                ))}
              </div>
            ) : (
              /* No Results */
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} color="var(--color-muted-foreground)" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  No projects found
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We couldn't find any projects matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearAllFilters}
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Load More Button */}
            {filteredProjects.length > 0 && filteredProjects.length >= 6 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsLoading(true)}
                  iconName="Plus"
                  iconPosition="left"
                >
                  Load More Projects
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get inspired by our portfolio? Let's discuss how we can bring your vision to life with our precision fabrication services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/quote-request-form')}
              iconName="FileText"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
            >
              Get Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/contact-support-hub')}
              iconName="Phone"
              iconPosition="left"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </main>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onGetQuote={handleGetQuote}
      />
    </div>
  );
};

export default PortfolioGallery;