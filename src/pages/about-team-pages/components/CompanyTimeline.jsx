import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const timelineData = [
    {
      year: 2009,
      title: "Foundation & First Steps",
      description: "Impact Innovations was founded with a vision to revolutionize manufacturing in Kenya. Started with basic cutting services in a small workshop.",
      achievements: ["First laser cutting machine installed", "5 initial clients secured", "Team of 3 skilled technicians"],
      icon: "Rocket"
    },
    {
      year: 2012,
      title: "Expansion & Growth",
      description: "Expanded operations with advanced fabrication equipment and moved to a larger facility to meet growing demand.",
      achievements: ["New 2,000 sq ft facility", "Advanced welding equipment", "50+ completed projects"],
      icon: "TrendingUp"
    },
    {
      year: 2015,
      title: "Technology Advancement",
      description: "Invested in cutting-edge laser technology and CNC machines, establishing ourselves as a premium service provider.",
      achievements: ["High-precision laser systems", "CNC machining capabilities", "ISO 9001 certification"],
      icon: "Cog"
    },
    {
      year: 2018,
      title: "Market Leadership",
      description: "Became the go-to fabrication partner for major Kenyan businesses, handling complex industrial projects.",
      achievements: ["500+ projects completed", "20+ team members", "Major corporate clients"],
      icon: "Award"
    },
    {
      year: 2021,
      title: "Digital Transformation",
      description: "Embraced digital workflows and online customer engagement, making our services more accessible.",
      achievements: ["Digital design platform", "Online quote system", "Remote consultation services"],
      icon: "Smartphone"
    },
    {
      year: 2024,
      title: "Innovation & Future",
      description: "Leading Kenya\'s manufacturing sector with sustainable practices and cutting-edge technology solutions.",
      achievements: ["2,500+ projects delivered", "150+ satisfied clients", "Green manufacturing initiatives"],
      icon: "Zap"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Clock" size={16} color="var(--color-primary)" className="mr-2" />
            <span className="text-sm font-medium text-primary">Our Journey</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            15 Years of Manufacturing Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to industry leadership, discover the milestones that shaped Impact Innovations into Kenya's premier fabrication specialist.
          </p>
        </div>

        {/* Timeline Navigation - Mobile */}
        <div className="lg:hidden mb-8">
          <div className="flex overflow-x-auto pb-4 space-x-4">
            {timelineData.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeYear === item.year
                    ? 'bg-primary text-white' :'bg-white text-muted-foreground hover:bg-primary/10'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>
          
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div key={item.year} className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                  <Icon name={item.icon} size={20} color="white" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 card-shadow">
                    <div className="text-2xl font-heading font-bold text-primary mb-2">{item.year}</div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    <div className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                          <span className="text-sm text-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline Content */}
        <div className="lg:hidden">
          {timelineData
            .filter(item => item.year === activeYear)
            .map((item) => (
              <div key={item.year} className="bg-white rounded-xl p-6 card-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Icon name={item.icon} size={18} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xl font-heading font-bold text-primary">{item.year}</div>
                    <h3 className="text-lg font-heading font-semibold text-foreground">{item.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{item.description}</p>
                
                <div className="space-y-2">
                  {item.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                      <span className="text-sm text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;