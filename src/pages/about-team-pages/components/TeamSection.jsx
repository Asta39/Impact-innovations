import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: "David Kimani",
      role: "Founder & CEO",
      department: "leadership",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "With 20+ years in manufacturing, David founded Impact Innovations to bring world-class fabrication services to Kenya.",
      expertise: ["Strategic Leadership", "Manufacturing Operations", "Business Development"],
      email: "david@impactinnovations.co.ke",
      linkedin: "#"
    },
    {
      id: 2,
      name: "Sarah Wanjiku",
      role: "Operations Manager",
      department: "operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1c2?w=400&h=400&fit=crop&crop=face",
      bio: "Sarah ensures seamless operations and quality control across all manufacturing processes.",
      expertise: ["Operations Management", "Quality Assurance", "Process Optimization"],
      email: "sarah@impactinnovations.co.ke",
      linkedin: "#"
    },
    {
      id: 3,
      name: "Michael Ochieng",
      role: "Lead Engineer",
      department: "engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Michael leads our engineering team, specializing in complex fabrication projects and technical innovation.",
      expertise: ["Mechanical Engineering", "CAD Design", "Project Management"],
      email: "michael@impactinnovations.co.ke",
      linkedin: "#"
    },
    {
      id: 4,
      name: "Grace Mutua",
      role: "Quality Control Specialist",
      department: "operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Grace maintains our high-quality standards through rigorous testing and inspection processes.",
      expertise: ["Quality Control", "ISO Standards", "Testing Procedures"],
      email: "grace@impactinnovations.co.ke",
      linkedin: "#"
    },
    {
      id: 5,
      name: "James Mwangi",
      role: "Senior Fabricator",
      department: "production",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "James brings 15 years of hands-on fabrication experience, specializing in precision metalwork.",
      expertise: ["Metal Fabrication", "Welding", "Machine Operation"],
      email: "james@impactinnovations.co.ke",
      linkedin: "#"
    },
    {
      id: 6,
      name: "Lucy Akinyi",
      role: "Customer Relations Manager",
      department: "sales",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: "Lucy manages client relationships and ensures exceptional customer service throughout every project.",
      expertise: ["Customer Service", "Project Coordination", "Client Relations"],
      email: "lucy@impactinnovations.co.ke",
      linkedin: "#"
    }
  ];

  const departments = [
    { id: 'all', label: 'All Team', icon: 'Users' },
    { id: 'leadership', label: 'Leadership', icon: 'Crown' },
    { id: 'engineering', label: 'Engineering', icon: 'Cog' },
    { id: 'operations', label: 'Operations', icon: 'Settings' },
    { id: 'production', label: 'Production', icon: 'Wrench' },
    { id: 'sales', label: 'Sales', icon: 'Handshake' }
  ];

  const filteredMembers = selectedDepartment === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Users" size={16} color="var(--color-primary)" className="mr-2" />
            <span className="text-sm font-medium text-primary">Our Team</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Meet the Experts Behind Our Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of skilled professionals brings decades of combined experience in manufacturing, engineering, and customer service.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedDepartment === dept.id
                  ? 'bg-primary text-white' :'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={dept.icon} size={16} color="currentColor" />
              <span>{dept.label}</span>
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl card-shadow overflow-hidden hover:shadow-lg transition-all duration-300 group">
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Icon name="Mail" size={16} color="var(--color-foreground)" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Icon name="Linkedin" size={16} color="var(--color-foreground)" />
                  </a>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="space-y-2">
                  <div className="text-xs font-medium text-foreground uppercase tracking-wide">
                    Expertise
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
            <div className="max-w-2xl mx-auto">
              <Icon name="Users" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                Join Our Growing Team
              </h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals who share our passion for manufacturing excellence. Explore career opportunities with Impact Innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                  <Icon name="Briefcase" size={18} color="white" />
                  <span>View Open Positions</span>
                </button>
                <button className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors flex items-center justify-center space-x-2">
                  <Icon name="Send" size={18} color="currentColor" />
                  <span>Send Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;