import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ServiceHero from './components/ServiceHero';
import ServiceContent from './components/ServiceContent';
import QuickQuoteForm from './components/QuickQuoteForm';
import ServiceFAQ from './components/ServiceFAQ';
import RelatedServices from './components/RelatedServices';
import ServiceTestimonials from './components/ServiceTestimonials';
import TrustElements from './components/TrustElements';
import Icon from '../../components/AppIcon';

const ServiceDetailPages = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock services data
  const services = [
    {
      id: 'laser-cutting',
      name: 'Laser Cutting Services',
      shortDescription: 'Precision laser cutting for metal, acrylic, and wood materials',
      heroDescription: 'Professional laser cutting services with precision accuracy up to 0.1mm tolerance. Perfect for industrial components, signage, and custom fabrication projects.',
      detailedDescription: `Our state-of-the-art laser cutting services provide unmatched precision and quality for a wide range of materials. Using advanced fiber laser technology, we can cut through various thicknesses of metal, acrylic, wood, and other materials with exceptional accuracy.\n\nWhether you need industrial components, architectural elements, signage, or custom fabrication, our laser cutting services deliver consistent results with clean edges and minimal material waste. Our experienced team works with you from design to delivery, ensuring your project meets exact specifications.`,
      heroImage: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      turnaroundTime: '2-5 days',
      startingPrice: 5000,
      features: [
        {
          title: 'High Precision Cutting',
          description: 'Accuracy up to 0.1mm tolerance for perfect results'
        },
        {
          title: 'Multiple Material Support',
          description: 'Metal, acrylic, wood, and composite materials'
        },
        {
          title: 'Clean Edge Finish',
          description: 'Minimal post-processing required'
        },
        {
          title: 'Custom Designs',
          description: 'Work from your CAD files or our design service'
        },
        {
          title: 'Fast Turnaround',
          description: 'Quick delivery without compromising quality'
        },
        {
          title: 'Cost Effective',
          description: 'Competitive pricing with minimal material waste'
        }
      ],
      specifications: [
        {
          category: 'Cutting Capabilities',
          summary: 'Maximum cutting dimensions and material thickness',
          details: [
            { parameter: 'Maximum Sheet Size', value: '3000mm x 1500mm' },
            { parameter: 'Steel Thickness', value: 'Up to 25mm' },
            { parameter: 'Stainless Steel', value: 'Up to 20mm' },
            { parameter: 'Aluminum', value: 'Up to 15mm' },
            { parameter: 'Acrylic', value: 'Up to 30mm' },
            { parameter: 'Wood', value: 'Up to 20mm' }
          ]
        },
        {
          category: 'Precision & Quality',
          summary: 'Accuracy and finish specifications',
          details: [
            { parameter: 'Cutting Tolerance', value: '±0.1mm' },
            { parameter: 'Edge Quality', value: 'Smooth, minimal burr' },
            { parameter: 'Kerf Width', value: '0.1-0.3mm' },
            { parameter: 'Repeatability', value: '±0.05mm' }
          ]
        },
        {
          category: 'File Formats',
          summary: 'Supported design file types',
          details: [
            { parameter: 'CAD Files', value: 'DWG, DXF, STEP' },
            { parameter: 'Vector Files', value: 'AI, EPS, SVG' },
            { parameter: 'Image Files', value: 'PDF, PNG, JPG' }
          ]
        }
      ],
      process: [
        {
          title: 'Design Consultation',
          description: 'We review your requirements and provide technical guidance on design optimization for laser cutting.',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'File Preparation',
          description: 'Our team prepares your design files, optimizes cutting paths, and sets up the laser parameters.',
          image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Precision Cutting',
          description: 'Using our advanced laser cutting equipment, we execute the cutting process with high precision.',
          image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Quality Control',
          description: 'Each piece is inspected for accuracy, edge quality, and dimensional compliance before delivery.',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        }
      ],
      equipment: [
        {
          name: 'Fiber Laser Cutter',
          description: 'High-power fiber laser system for metal cutting with exceptional speed and precision.',
          image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          capabilities: [
            '6kW laser power',
            'Automatic material handling',
            'Nitrogen assist gas',
            'CNC precision control'
          ]
        },
        {
          name: 'CO2 Laser System',
          description: 'Versatile CO2 laser for cutting acrylic, wood, and non-metal materials.',
          image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          capabilities: [
            '150W CO2 laser',
            'Multi-material capability',
            'Engraving function',
            'Precision positioning'
          ]
        }
      ],
      faqs: [
        {
          question: 'What materials can you laser cut?',
          answer: 'We can laser cut a wide variety of materials including mild steel, stainless steel, aluminum, brass, copper, acrylic, wood, and many composite materials. Each material has specific thickness limitations which we can discuss during consultation.'
        },
        {
          question: 'What file formats do you accept?',
          answer: 'We accept various file formats including DWG, DXF, AI, EPS, SVG, PDF, and common image formats. CAD files are preferred for the best results. If you need help with file preparation, our design team can assist.'
        },
        {
          question: 'How accurate is laser cutting?',
          answer: 'Our laser cutting services achieve tolerances of ±0.1mm, making it ideal for precision components and detailed work. The actual tolerance may vary slightly depending on material type and thickness.'
        },
        {
          question: 'What is the typical turnaround time?',
          answer: 'Standard turnaround time is 2-5 business days depending on project complexity and current workload. Rush orders can often be accommodated for an additional fee. We provide accurate timelines during the quote process.'
        },
        {
          question: 'Do you provide design services?',
          answer: 'Yes, we offer design consultation and can help optimize your designs for laser cutting. Our team can also create designs from sketches or concepts if you need complete design services.'
        }
      ],
      testimonials: [
        {
          clientName: 'James Mwangi',
          clientTitle: 'Production Manager',
          company: 'Nairobi Manufacturing Ltd',
          clientAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          rating: 5,
          content: 'Impact Innovations delivered exceptional laser cutting services for our industrial components. The precision and quality exceeded our expectations, and they met our tight deadline perfectly.',
          projectType: 'Industrial Components',
          projectDetails: {
            value: 150000,
            timeline: '3 days'
          }
        },
        {
          clientName: 'Sarah Kimani',
          clientTitle: 'Creative Director',
          company: 'Design Studio Kenya',
          clientAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          rating: 5,
          content: 'The laser cutting quality for our architectural signage project was outstanding. Clean edges, perfect dimensions, and professional service throughout the process.',
          projectType: 'Architectural Signage',
          projectDetails: {
            value: 85000,
            timeline: '4 days'
          }
        }
      ]
    },
    {
      id: 'metal-fabrication',
      name: 'Metal Fabrication',
      shortDescription: 'Custom metal fabrication and welding services for industrial applications',
      heroDescription: 'Complete metal fabrication services from design to delivery. Specializing in structural steel, custom components, and industrial equipment manufacturing.',
      detailedDescription: `Our comprehensive metal fabrication services cover everything from simple brackets to complex structural assemblies. With decades of experience in the industry, we provide end-to-end solutions including design consultation, material sourcing, fabrication, and finishing.\n\nOur skilled craftsmen use modern equipment and traditional techniques to deliver high-quality results. Whether you need one-off prototypes or large production runs, we have the capability and expertise to meet your requirements on time and within budget.`,
      heroImage: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      turnaroundTime: '1-3 weeks',
      startingPrice: 15000,
      features: [
        {
          title: 'Custom Design Solutions',
          description: 'Tailored fabrication to meet your specific requirements'
        },
        {
          title: 'Structural Steel Work',
          description: 'Heavy-duty structural fabrication and installation'
        },
        {
          title: 'Precision Welding',
          description: 'Certified welders using MIG, TIG, and arc welding'
        },
        {
          title: 'Surface Finishing',
          description: 'Painting, powder coating, and galvanizing services'
        },
        {
          title: 'Quality Assurance',
          description: 'Rigorous testing and inspection processes'
        },
        {
          title: 'Installation Support',
          description: 'On-site installation and technical support'
        }
      ],
      specifications: [
        {
          category: 'Welding Capabilities',
          summary: 'Welding processes and material compatibility',
          details: [
            { parameter: 'MIG Welding', value: 'Up to 25mm thickness' },
            { parameter: 'TIG Welding', value: 'Precision work, all positions' },
            { parameter: 'Arc Welding', value: 'Heavy structural work' },
            { parameter: 'Materials', value: 'Steel, Stainless, Aluminum' }
          ]
        },
        {
          category: 'Fabrication Capacity',
          summary: 'Size and weight limitations',
          details: [
            { parameter: 'Maximum Length', value: '12 meters' },
            { parameter: 'Maximum Width', value: '3 meters' },
            { parameter: 'Maximum Weight', value: '5 tons' },
            { parameter: 'Crane Capacity', value: '10 tons overhead' }
          ]
        }
      ],
      process: [
        {
          title: 'Design & Engineering',
          description: 'We work with your specifications to create detailed fabrication drawings and material lists.',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Material Preparation',
          description: 'Cutting, shaping, and preparing all materials according to specifications.',
          image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Fabrication & Welding',
          description: 'Skilled craftsmen assemble and weld components with precision and quality.',
          image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Finishing & Delivery',
          description: 'Surface treatment, quality inspection, and delivery or installation.',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        }
      ],
      equipment: [
        {
          name: 'MIG Welding Station',
          description: 'Professional MIG welding equipment for high-quality joints and fast production.',
          image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          capabilities: [
            '400A welding capacity',
            'Multi-process capability',
            'Automatic wire feed',
            'Gas shielding system'
          ]
        }
      ],
      faqs: [
        {
          question: 'What types of metal fabrication do you offer?',
          answer: 'We offer comprehensive metal fabrication services including structural steel work, custom brackets, frames, enclosures, stairs, railings, and complex assemblies. Our capabilities cover both light and heavy fabrication work.'
        },
        {
          question: 'Do you provide design and engineering services?',
          answer: 'Yes, we have experienced engineers who can help with design optimization, structural calculations, and technical drawings. We can work from your concepts or provide complete design solutions.'
        },
        {
          question: 'What materials do you work with?',
          answer: 'We work with various metals including mild steel, stainless steel, aluminum, brass, and specialty alloys. We can source materials or work with customer-supplied materials.'
        },
        {
          question: 'Do you offer installation services?',
          answer: 'Yes, we provide installation services for structural work and complex assemblies. Our team can handle on-site installation and provide technical support during commissioning.'
        }
      ],
      testimonials: [
        {
          clientName: 'Peter Ochieng',
          clientTitle: 'Project Manager',
          company: 'Construction Plus Kenya',
          clientAvatar: 'https://randomuser.me/api/portraits/men/45.jpg',
          rating: 5,
          content: 'Outstanding structural steel fabrication work. The team delivered complex building framework components with perfect precision and ahead of schedule.',
          projectType: 'Structural Steel Framework',
          projectDetails: {
            value: 450000,
            timeline: '2 weeks'
          }
        }
      ]
    },
    {
      id: 'cnc-machining',
      name: 'CNC Machining',
      shortDescription: 'Precision CNC machining for complex components and prototypes',
      heroDescription: 'Advanced CNC machining services for precision components. From prototypes to production runs, we deliver exceptional accuracy and surface finish.',
      detailedDescription: `Our CNC machining services provide the highest level of precision for complex components and parts. Using state-of-the-art CNC mills and lathes, we can machine a wide variety of materials to tight tolerances.\n\nWhether you need prototypes, small batch production, or large volume manufacturing, our experienced machinists and programmers ensure consistent quality and on-time delivery. We work with various materials including metals, plastics, and composites.`,
      heroImage: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      turnaroundTime: '3-7 days',
      startingPrice: 8000,
      features: [
        {
          title: 'High Precision Machining',
          description: 'Tolerances up to ±0.01mm for critical components'
        },
        {
          title: 'Multi-Axis Capability',
          description: '3, 4, and 5-axis machining for complex geometries'
        },
        {
          title: 'Material Versatility',
          description: 'Metals, plastics, composites, and exotic materials'
        },
        {
          title: 'Prototype to Production',
          description: 'From single prototypes to large production runs'
        },
        {
          title: 'Quality Control',
          description: 'CMM inspection and detailed quality reports'
        },
        {
          title: 'Fast Turnaround',
          description: 'Quick delivery for urgent projects'
        }
      ],
      specifications: [
        {
          category: 'Machining Capabilities',
          summary: 'CNC machine specifications and capacities',
          details: [
            { parameter: 'Maximum Part Size', value: '1000mm x 600mm x 500mm' },
            { parameter: 'Minimum Feature Size', value: '0.1mm' },
            { parameter: 'Surface Finish', value: 'Ra 0.1μm achievable' },
            { parameter: 'Tolerance', value: '±0.01mm standard' }
          ]
        },
        {
          category: 'Material Compatibility',
          summary: 'Supported materials and specifications',
          details: [
            { parameter: 'Aluminum Alloys', value: '6061, 7075, 2024' },
            { parameter: 'Steel Grades', value: 'Mild steel, tool steel, stainless' },
            { parameter: 'Plastics', value: 'ABS, Nylon, PEEK, Delrin' },
            { parameter: 'Exotic Materials', value: 'Titanium, Inconel, Hastelloy' }
          ]
        }
      ],
      process: [
        {
          title: 'Design Analysis',
          description: 'Review of part drawings and manufacturability analysis to optimize machining strategy.',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Programming & Setup',
          description: 'CAM programming and machine setup with appropriate tooling and fixtures.',
          image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Precision Machining',
          description: 'Execution of machining operations with continuous monitoring and quality checks.',
          image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Inspection & Delivery',
          description: 'Final inspection using CMM and delivery with detailed quality documentation.',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        }
      ],
      equipment: [
        {
          name: '5-Axis CNC Mill',
          description: 'Advanced 5-axis machining center for complex geometries and high precision work.',
          image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          capabilities: [
            '5-axis simultaneous machining',
            'High-speed spindle',
            'Automatic tool changer',
            'In-process measurement'
          ]
        }
      ],
      faqs: [
        {
          question: 'What tolerances can you achieve with CNC machining?',
          answer: 'We routinely achieve tolerances of ±0.01mm for critical dimensions. Even tighter tolerances are possible depending on the part geometry and material. We discuss tolerance requirements during the quote process.'
        },
        {
          question: 'What materials can you machine?',
          answer: 'We machine a wide variety of materials including aluminum alloys, steel, stainless steel, brass, copper, various plastics, and exotic materials like titanium and Inconel. Material selection depends on your application requirements.'
        },
        {
          question: 'Do you provide prototyping services?',
          answer: 'Yes, we specialize in rapid prototyping with quick turnaround times. We can work from your CAD files to produce functional prototypes for testing and validation.'
        },
        {
          question: 'What file formats do you accept?',
          answer: 'We accept various CAD formats including STEP, IGES, SolidWorks, AutoCAD, and others. We can also work from 2D drawings if 3D models are not available.'
        }
      ],
      testimonials: [
        {
          clientName: 'Mary Wanjiku',
          clientTitle: 'Engineering Manager',
          company: 'Precision Parts Kenya',
          clientAvatar: 'https://randomuser.me/api/portraits/women/28.jpg',
          rating: 5,
          content: 'Exceptional CNC machining quality for our precision components. The attention to detail and accuracy is exactly what we needed for our aerospace application.',
          projectType: 'Precision Components',
          projectDetails: {
            value: 120000,
            timeline: '5 days'
          }
        }
      ]
    },
    {
      id: 'sheet-metal',
      name: 'Sheet Metal Work',
      shortDescription: 'Professional sheet metal fabrication and forming services',
      heroDescription: 'Expert sheet metal fabrication services including bending, forming, and assembly. Perfect for enclosures, brackets, and custom components.',
      detailedDescription: `Our sheet metal fabrication services combine traditional craftsmanship with modern equipment to deliver high-quality results. We specialize in precision bending, forming, and assembly of sheet metal components for various industries.\n\nFrom simple brackets to complex enclosures, our experienced team can handle projects of any size and complexity. We work with various materials and thicknesses, providing complete solutions from design to finishing.`,
      heroImage: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      turnaroundTime: '2-7 days',
      startingPrice: 3000,
      features: [
        {
          title: 'Precision Bending',
          description: 'Accurate bends with tight tolerances using press brakes'
        },
        {
          title: 'Custom Forming',
          description: 'Complex shapes and forms for specialized applications'
        },
        {
          title: 'Assembly Services',
          description: 'Complete assembly with hardware and finishing'
        },
        {
          title: 'Multiple Materials',
          description: 'Steel, aluminum, stainless steel, and specialty metals'
        },
        {
          title: 'Surface Finishing',
          description: 'Powder coating, painting, and plating options'
        },
        {
          title: 'Quick Turnaround',
          description: 'Fast delivery for standard and custom work'
        }
      ],
      specifications: [
        {
          category: 'Bending Capabilities',
          summary: 'Press brake specifications and bending limits',
          details: [
            { parameter: 'Maximum Length', value: '3000mm' },
            { parameter: 'Maximum Thickness', value: '10mm steel' },
            { parameter: 'Minimum Bend Radius', value: '0.5mm' },
            { parameter: 'Bend Accuracy', value: '±0.5 degrees' }
          ]
        },
        {
          category: 'Material Specifications',
          summary: 'Supported materials and thickness ranges',
          details: [
            { parameter: 'Mild Steel', value: '0.5mm - 10mm' },
            { parameter: 'Stainless Steel', value: '0.5mm - 6mm' },
            { parameter: 'Aluminum', value: '0.5mm - 8mm' },
            { parameter: 'Galvanized Steel', value: '0.5mm - 5mm' }
          ]
        }
      ],
      process: [
        {
          title: 'Design Review',
          description: 'Analysis of part design for manufacturability and optimization suggestions.',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Material Cutting',
          description: 'Precision cutting of sheet metal using laser cutting or shearing.',
          image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Forming & Bending',
          description: 'Precision bending and forming operations using press brakes and forming tools.',
          image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Assembly & Finishing',
          description: 'Final assembly, welding if required, and surface finishing operations.',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        }
      ],
      equipment: [
        {
          name: 'CNC Press Brake',
          description: 'Computer-controlled press brake for precise and repeatable bending operations.',
          image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          capabilities: [
            '100-ton bending force',
            '3-meter working length',
            'CNC back gauge system',
            'Multiple tooling options'
          ]
        }
      ],
      faqs: [
        {
          question: 'What thickness of sheet metal can you work with?',
          answer: 'We can work with sheet metal from 0.5mm up to 10mm thickness depending on the material. Steel can be processed up to 10mm, while aluminum and stainless steel have slightly different limits.'
        },
        {
          question: 'Do you provide design assistance for sheet metal parts?',
          answer: 'Yes, our engineers can help optimize your designs for sheet metal fabrication. We can suggest design modifications to improve manufacturability and reduce costs.'
        },
        {
          question: 'What finishing options are available?',
          answer: 'We offer various finishing options including powder coating, wet painting, galvanizing, anodizing (for aluminum), and plating. The choice depends on your application requirements.'
        },
        {
          question: 'Can you handle both prototypes and production runs?',
          answer: 'Absolutely. We handle everything from single prototypes to large production runs. Our flexible setup allows us to be cost-effective for both small and large quantities.'
        }
      ],
      testimonials: [
        {
          clientName: 'David Mutua',
          clientTitle: 'Production Supervisor',
          company: 'Electronics Kenya Ltd',
          clientAvatar: 'https://randomuser.me/api/portraits/men/52.jpg',
          rating: 5,
          content: 'Perfect sheet metal enclosures for our electronic equipment. The precision and finish quality exceeded our expectations, and delivery was right on time.',
          projectType: 'Electronic Enclosures',
          projectDetails: {
            value: 75000,
            timeline: '4 days'
          }
        }
      ]
    },
    {
      id: 'welding-services',
      name: 'Welding Services',
      shortDescription: 'Professional welding services for all types of metal joining applications',
      heroDescription: 'Expert welding services with certified welders. Specializing in MIG, TIG, and arc welding for structural, decorative, and repair applications.',
      detailedDescription: `Our professional welding services cover all aspects of metal joining from structural work to precision repairs. Our certified welders have extensive experience with various welding processes and materials.\n\nWhether you need structural welding for construction, decorative welding for artistic projects, or repair welding for maintenance, we provide high-quality results with proper certification and documentation when required.`,
      heroImage: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      turnaroundTime: '1-5 days',
      startingPrice: 2000,
      features: [
        {
          title: 'Certified Welders',
          description: 'All welders certified to international standards'
        },
        {
          title: 'Multiple Processes',
          description: 'MIG, TIG, arc welding, and specialty processes'
        },
        {
          title: 'All Materials',
          description: 'Steel, stainless steel, aluminum, and exotic alloys'
        },
        {
          title: 'Structural Welding',
          description: 'Heavy-duty structural and construction welding'
        },
        {
          title: 'Repair Services',
          description: 'Equipment repair and maintenance welding'
        },
        {
          title: 'Mobile Service',
          description: 'On-site welding for large or immovable items'
        }
      ],
      specifications: [
        {
          category: 'Welding Processes',
          summary: 'Available welding methods and capabilities',
          details: [
            { parameter: 'MIG Welding', value: 'Up to 25mm thickness' },
            { parameter: 'TIG Welding', value: 'Precision work, all positions' },
            { parameter: 'Arc Welding', value: 'Heavy structural applications' },
            { parameter: 'Spot Welding', value: 'Sheet metal applications' }
          ]
        },
        {
          category: 'Material Compatibility',
          summary: 'Weldable materials and thickness ranges',
          details: [
            { parameter: 'Mild Steel', value: '1mm - 50mm' },
            { parameter: 'Stainless Steel', value: '0.5mm - 25mm' },
            { parameter: 'Aluminum', value: '1mm - 20mm' },
            { parameter: 'Cast Iron', value: 'Repair welding available' }
          ]
        }
      ],
      process: [
        {
          title: 'Assessment & Planning',
          description: 'Evaluation of welding requirements and selection of appropriate process and materials.',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Preparation',
          description: 'Proper cleaning, fitting, and setup of materials for optimal welding conditions.',
          image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Welding Execution',
          description: 'Professional welding by certified welders using appropriate techniques and parameters.',
          image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Quality Control',
          description: 'Inspection and testing of welds to ensure quality and compliance with standards.',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        }
      ],
      equipment: [
        {
          name: 'MIG Welding Station',
          description: 'Professional MIG welding equipment for production and repair work.',
          image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          capabilities: [
            '400A welding capacity',
            'Multi-process capability',
            'Wire feed system',
            'Gas regulation'
          ]
        },
        {
          name: 'TIG Welding System',
          description: 'Precision TIG welding equipment for high-quality joints and thin materials.',
          image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          capabilities: [
            'AC/DC capability',
            'Pulse welding',
            'Precision control',
            'Argon gas system'
          ]
        }
      ],
      faqs: [
        {
          question: 'What types of welding do you offer?',
          answer: 'We offer MIG welding for general fabrication, TIG welding for precision work, arc welding for heavy structural applications, and specialty welding processes as needed. Our welders are certified in multiple processes.'
        },
        {
          question: 'Can you weld different types of metals?',
          answer: 'Yes, we can weld various metals including mild steel, stainless steel, aluminum, brass, and specialty alloys. Each material requires specific techniques and filler materials which our welders are trained to use.'
        },
        {
          question: 'Do you provide mobile welding services?',
          answer: 'Yes, we offer on-site welding services for large items or situations where bringing the work to our shop is not practical. Our mobile units are fully equipped for most welding applications.'
        },
        {
          question: 'Are your welders certified?',
          answer: 'All our welders are certified to relevant standards including AWS (American Welding Society) and other international standards. We can provide certification documentation when required for structural work.'
        }
      ],
      testimonials: [
        {
          clientName: 'Robert Kiprotich',
          clientTitle: 'Maintenance Manager',
          company: 'Industrial Solutions Kenya',
          clientAvatar: 'https://randomuser.me/api/portraits/men/38.jpg',
          rating: 5,
          content: 'Excellent welding repair work on our industrial equipment. The welds are strong and clean, and the team completed the work quickly to minimize our downtime.',
          projectType: 'Equipment Repair',
          projectDetails: {
            value: 35000,
            timeline: '2 days'
          }
        }
      ]
    },
    {
      id: 'powder-coating',
      name: 'Powder Coating',
      shortDescription: 'Professional powder coating services for durable and attractive finishes',
      heroDescription: 'High-quality powder coating services providing durable, attractive finishes for metal components. Available in various colors and textures.',
      detailedDescription: `Our powder coating services provide superior protection and appearance for metal components. Using electrostatic application and high-temperature curing, we achieve durable finishes that resist corrosion, scratching, and fading.\n\nWith a wide range of colors, textures, and specialty finishes available, we can meet both functional and aesthetic requirements. Our process ensures even coverage and excellent adhesion for long-lasting results.`,
      heroImage: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      turnaroundTime: '3-5 days',
      startingPrice: 1500,
      features: [
        {
          title: 'Durable Finish',
          description: 'Superior resistance to corrosion, scratching, and fading'
        },
        {
          title: 'Color Options',
          description: 'Wide range of colors and custom color matching'
        },
        {
          title: 'Texture Varieties',
          description: 'Smooth, textured, and specialty finish options'
        },
        {
          title: 'Eco-Friendly',
          description: 'Environmentally safe process with no VOCs'
        },
        {
          title: 'Even Coverage',
          description: 'Consistent finish thickness and appearance'
        },
        {
          title: 'Quick Turnaround',
          description: 'Fast processing for standard colors'
        }
      ],
      specifications: [
        {
          category: 'Coating Capabilities',
          summary: 'Size limitations and coating specifications',
          details: [
            { parameter: 'Maximum Size', value: '2m x 1m x 1m' },
            { parameter: 'Coating Thickness', value: '50-100 microns' },
            { parameter: 'Curing Temperature', value: '180-200°C' },
            { parameter: 'Curing Time', value: '15-20 minutes' }
          ]
        },
        {
          category: 'Available Finishes',
          summary: 'Finish types and color options',
          details: [
            { parameter: 'Standard Colors', value: '50+ RAL colors' },
            { parameter: 'Custom Colors', value: 'Color matching available' },
            { parameter: 'Textures', value: 'Smooth, textured, wrinkle' },
            { parameter: 'Specialty', value: 'Metallic, fluorescent' }
          ]
        }
      ],
      process: [
        {
          title: 'Surface Preparation',
          description: 'Thorough cleaning and preparation of metal surfaces for optimal coating adhesion.',
          image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Powder Application',
          description: 'Electrostatic application of powder coating for even coverage and thickness.',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Curing Process',
          description: 'High-temperature curing in our oven to achieve final hardness and durability.',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        },
        {
          title: 'Quality Inspection',
          description: 'Final inspection for finish quality, thickness, and overall appearance.',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop'
        }
      ],
      equipment: [
        {
          name: 'Powder Coating Booth',
          description: 'Professional spray booth with electrostatic guns for even powder application.',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          capabilities: [
            'Electrostatic application',
            'Powder recovery system',
            'Color change capability',
            'Automated controls'
          ]
        },
        {
          name: 'Curing Oven',
          description: 'Industrial oven for proper curing of powder coated parts.',
          image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          capabilities: [
            'Precise temperature control',
            'Even heat distribution',
            'Conveyor system',
            'Energy efficient'
          ]
        }
      ],
      faqs: [
        {
          question: 'What materials can be powder coated?',
          answer: 'Powder coating works best on metal surfaces including steel, aluminum, stainless steel, and cast iron. The material must be able to withstand the curing temperature of 180-200°C.'
        },
        {
          question: 'How durable is powder coating compared to paint?',
          answer: 'Powder coating is significantly more durable than liquid paint. It provides better resistance to chipping, scratching, fading, and corrosion. It typically lasts 15-20 years in normal conditions.'
        },
        {
          question: 'Can you match specific colors?',
          answer: 'Yes, we can match custom colors. We have access to a wide range of standard RAL colors and can create custom color matches for specific requirements. Color matching may require additional time and cost.'
        },
        {
          question: 'What preparation is required before powder coating?',
          answer: 'Parts must be clean and free of oil, grease, rust, and old paint. We provide complete surface preparation including cleaning, sandblasting if needed, and chemical treatment for optimal adhesion.'
        }
      ],
      testimonials: [
        {
          clientName: 'Grace Njeri',
          clientTitle: 'Design Manager',
          company: 'Furniture Makers Kenya',
          clientAvatar: 'https://randomuser.me/api/portraits/women/35.jpg',
          rating: 5,
          content: 'Beautiful powder coating finish on our metal furniture frames. The color is exactly what we wanted and the durability is excellent for outdoor use.',
          projectType: 'Furniture Finishing',
          projectDetails: {
            value: 45000,
            timeline: '4 days'
          }
        }
      ]
    }
  ];

  useEffect(() => {
    const serviceId = searchParams.get('service') || 'laser-cutting';
    const service = services.find(s => s.id === serviceId);
    
    if (service) {
      setSelectedService(service);
    } else {
      // If service not found, default to first service
      setSelectedService(services[0]);
    }
    
    setLoading(false);
  }, [searchParams]);

  const handleGetQuote = () => {
    navigate('/quote-request-form', { 
      state: { 
        prefilledData: { service: selectedService.name },
        fromService: selectedService.name 
      } 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading service details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedService) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Icon name="AlertCircle" size={48} color="var(--color-error)" className="mx-auto mb-4" />
            <h1 className="text-2xl font-heading font-bold text-foreground mb-2">
              Service Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The requested service could not be found.
            </p>
            <button
              onClick={() => navigate('/service-detail-pages')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-fast"
            >
              <Icon name="ArrowLeft" size={16} color="white" />
              <span>Back to Services</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Services', path: '/service-detail-pages' },
    { label: selectedService.name, path: `/service-detail-pages?service=${selectedService.id}`, isActive: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb customItems={breadcrumbItems} />

        {/* Service Hero */}
        <ServiceHero service={selectedService} onGetQuote={handleGetQuote} />

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ServiceContent service={selectedService} />
            <ServiceFAQ service={selectedService} />
            <ServiceTestimonials service={selectedService} />
            <RelatedServices currentService={selectedService} allServices={services} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <QuickQuoteForm service={selectedService} />
            <TrustElements />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetailPages;