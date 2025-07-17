import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const EquipmentShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('laser');

  const equipmentData = {
    laser: [
      {
        id: 1,
        name: "High-Precision Fiber Laser",
        model: "TruLaser 3030 L20",
        image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
        specifications: {
          "Cutting Capacity": "20mm Steel, 12mm Stainless",
          "Bed Size": "3000 x 1500mm",
          "Precision": "±0.1mm",
          "Speed": "Up to 100m/min"
        },
        capabilities: ["Complex geometries", "Minimal heat distortion", "Smooth edge finish", "High-speed processing"]
      },
      {
        id: 2,
        name: "CO2 Laser Cutter",
        model: "LaserMax Pro 150W",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
        specifications: {
          "Power": "150W CO2 Laser",
          "Bed Size": "1300 x 900mm",
          "Material Thickness": "Up to 25mm",
          "Accuracy": "±0.05mm"
        },
        capabilities: ["Acrylic cutting", "Wood engraving", "Fabric processing", "Detailed etching"]
      }
    ],
    cnc: [
      {
        id: 3,
        name: "CNC Milling Machine",
        model: "Haas VF-4SS",
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop",
        specifications: {
          "Travel": "1270 x 660 x 635mm",
          "Spindle Speed": "8,100 RPM",
          "Tool Capacity": "24 Tools",
          "Accuracy": "±0.0025mm"
        },
        capabilities: ["Complex 3D machining", "High-precision parts", "Multiple material support", "Automated tool changing"]
      },
      {
        id: 4,
        name: "CNC Plasma Cutter",
        model: "PlasmaCAM DHC2",
        image: "https://images.unsplash.com/photo-1609205264511-b5e0c8b8e8b4?w=600&h=400&fit=crop",
        specifications: {
          "Cutting Thickness": "Up to 50mm",
          "Bed Size": "2400 x 1200mm",
          "Plasma Power": "65A",
          "Speed": "Up to 12m/min"
        },
        capabilities: ["Thick metal cutting", "Large format processing", "Bevel cutting", "Shape nesting optimization"]
      }
    ],
    welding: [
      {
        id: 5,
        name: "TIG Welding Station",
        model: "Lincoln Electric Precision TIG 275",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
        specifications: {
          "Output": "5-275 Amps",
          "Duty Cycle": "60% at 275A",
          "Materials": "Steel, Stainless, Aluminum",
          "Precision": "High-quality joints"
        },
        capabilities: ["Precision welding", "Clean finishes", "Multiple materials", "Automated settings"]
      },
      {
        id: 6,
        name: "MIG Welding System",
        model: "Miller Millermatic 350P",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
        specifications: {
          "Wire Feed Speed": "50-700 IPM",
          "Output": "40-350 Amps",
          "Wire Diameter": "0.8-1.6mm",
          "Duty Cycle": "60% at 350A"
        },
        capabilities: ["High-speed welding", "Thick material joining", "Production welding", "Consistent quality"]
      }
    ]
  };

  const categories = [
    { id: 'laser', label: 'Laser Cutting', icon: 'Zap', count: equipmentData.laser.length },
    { id: 'cnc', label: 'CNC Machining', icon: 'Cog', count: equipmentData.cnc.length },
    { id: 'welding', label: 'Welding', icon: 'Flame', count: equipmentData.welding.length }
  ];

  const currentEquipment = equipmentData[activeCategory] || [];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Settings" size={16} color="var(--color-primary)" className="mr-2" />
            <span className="text-sm font-medium text-primary">Our Equipment</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            State-of-the-Art Manufacturing Equipment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our investment in cutting-edge technology ensures precision, efficiency, and superior quality in every project we undertake.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={category.icon} size={20} color="currentColor" />
              <span>{category.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white' :'bg-muted text-muted-foreground'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentEquipment.map((equipment) => (
            <div key={equipment.id} className="bg-white rounded-xl card-shadow overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Equipment Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={equipment.image}
                  alt={equipment.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {categories.find(cat => cat.id === activeCategory)?.label}
                </div>
              </div>

              {/* Equipment Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                    {equipment.name}
                  </h3>
                  <p className="text-primary font-medium">{equipment.model}</p>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(equipment.specifications).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-xs text-muted-foreground font-medium">{key}</span>
                        <span className="text-sm text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {equipment.capabilities.map((capability, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={14} color="var(--color-success)" />
                        <span className="text-sm text-foreground">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 card-shadow">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} color="var(--color-primary)" />
              </div>
              <div className="text-3xl font-heading font-bold text-foreground mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Advanced Machines</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} color="var(--color-primary)" />
              </div>
              <div className="text-3xl font-heading font-bold text-foreground mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Production Capacity</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={24} color="var(--color-primary)" />
              </div>
              <div className="text-3xl font-heading font-bold text-foreground mb-2">±0.05mm</div>
              <div className="text-sm text-muted-foreground">Precision Accuracy</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} color="var(--color-primary)" />
              </div>
              <div className="text-3xl font-heading font-bold text-foreground mb-2">ISO</div>
              <div className="text-sm text-muted-foreground">Certified Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentShowcase;