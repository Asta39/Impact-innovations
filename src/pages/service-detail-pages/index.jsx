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
  id: "uv-printing",
  name: "UV Printing",
  shortDescription: "High-quality, durable direct-to-surface printing on a vast range of materials.",
  heroDescription: "Unlock vibrant, lasting prints on virtually any surface. From custom promotional items and acrylic signage to personalized glass and wood products, our UV printing technology brings your designs to life with stunning detail and durability.",
  detailedDescription: "UV (Ultraviolet) printing is a state-of-the-art digital printing process that utilizes UV light to instantly cure ink on a wide variety of substrates, both rigid and flexible. Unlike conventional printing, the ink dries immediately when exposed to the UV light, creating a durable, vibrant, and high-resolution finish that sits on top of the material's surface.\n\nThis technology allows for printing on materials like acrylic, glass, wood, metal, PVC, and leather. With the ability to print white ink as a base on dark or clear materials and a clear varnish for textured or glossy effects, the creative possibilities are nearly limitless. It's the perfect solution for high-value promotional products, custom signage, and unique personalized items.",
  heroImage: "https://images.pexels.com/photos/7989352/pexels-photo-7989352.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  image: "https://images.pexels.com/photos/8431873/pexels-photo-8431873.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  turnaroundTime: "2-5 business days",
  startingPrice: 2500,
  features: [
    {
      title: "Multi-Substrate Versatility",
      description: "Direct printing on acrylic, glass, wood, metal, plastic, and more"
    },
    {
      title: "Vibrant & Crisp Colors",
      description: "High-fidelity color reproduction for photorealistic images"
    },
    {
      title: "Instant-Cure Durability",
      description: "Scratch, fade, and water-resistant prints ideal for long-term use"
    },
    {
      title: "Textured & 3D Effects",
      description: "Build up layers of clear varnish for tactile, embossed finishes"
    },
    {
      title: "White Ink & Varnish Options",
      description: "Print on dark or clear surfaces and add selective gloss highlights"
    },
    {
      title: "High-Resolution Output",
      description: "Fine details and sharp text for professional-grade results"
    }
  ],
  specifications: [
    {
      category: "Printing Technology",
      summary: "Core printing system capabilities and resolution",
      details: [
        { parameter: "Max Resolution", value: "Up to 1440 DPI" },
        { parameter: "Ink System", value: "CMYK + White + Clear Varnish" },
        { parameter: "Curing Method", value: "LED UV Lamp Instant Curing" },
        { parameter: "Color Profile", value: "Custom ICC profiles for accuracy" }
      ]
    },
    {
      category: "Material Capabilities",
      summary: "Print size and material compatibility",
      details: [
        { parameter: "Max Print Area", value: "8ft x 4ft (2440mm x 1220mm)" },
        { parameter: "Max Material Thickness", value: "Up to 50mm (2 inches)" },
        { parameter: "Supported Substrates", value: "Acrylic, Glass, Wood, PVC, Metal, Canvas, Leather" },
        { parameter: "Surface Type", value: "Rigid Flat and Semi-Flexible Materials" }
      ]
    }
  ],
  process: [
    {
      title: "Design & Pre-flight",
      description: "We review your artwork, ensuring it's optimized for high-resolution UV printing and check for color accuracy.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      title: "Material Preparation",
      description: "The substrate surface is cleaned and, if necessary, treated with a primer to ensure optimal ink adhesion.",
      image: "https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      title: "UV Printing & Curing",
      description: "Your design is printed directly onto the material while UV lamps instantly cure the ink, layer by layer.",
      image: "https://images.pexels.com/photos/7989352/pexels-photo-7989352.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      title: "Finishing & Quality Check",
      description: "We perform a final quality inspection, apply any finishing touches, and carefully package for delivery.",
      image: "https://images.pexels.com/photos/6625032/pexels-photo-6625032.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    }
  ],
  equipment: [
    {
      name: "Large Format UV Flatbed Printer",
      description: "Our industrial-grade flatbed printer handles large, rigid sheets with precision, enabling high-quality prints on a massive scale.",
      image: "https://images.pexels.com/photos/7989352/pexels-photo-7989352.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      capabilities: [
        "2.5m x 1.3m print bed",
        "8-channel ink system (CMYK, Lc, Lm, W, V)",
        "Automatic height detection for materials",
        "Vacuum bed for secure material hold"
      ]
    }
  ],
  faqs: [
    {
      question: "What materials can you UV print on?",
      answer: "We can print on an extensive range of rigid and semi-rigid materials, including acrylic (Perspex), glass, wood, MDF, aluminum composite panels (Dibond), PVC foam board, canvas, leather, and even metal sheets."
    },
    {
      question: "How durable are UV prints for outdoor use?",
      answer: "UV prints are highly durable and resistant to fading from sunlight, making them suitable for many outdoor applications like signage. For maximum longevity, we can apply an additional protective laminate."
    },
    {
      question: "Can you print white color on a clear material like glass or acrylic?",
      answer: "Yes, absolutely. Our printer has dedicated white ink channels. We can print a white base layer behind your color design to make it opaque and vibrant, or print white as a color itself."
    },
    {
      question: "What file format is best for my artwork?",
      answer: "For the best results, we recommend high-resolution vector files such as AI, EPS, or PDF. We also accept high-quality raster images like PSD, TIFF, or JPEG at 300 DPI."
    }
  ],
  testimonials: [
    {
      clientName: "Aisha Juma",
      clientTitle: "Marketing Director",
      company: "Brand Spark Promotions",
      clientAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
      content: "The custom acrylic awards we ordered were simply stunning. The colors were incredibly vibrant, and the raised gloss effect on our logo was a fantastic touch. Impact Innovations delivered exceptional quality and speed.",
      projectType: "Branded Acrylic Awards",
      projectDetails: {
        value: 85000,
        timeline: "4 days"
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
  "id": "custom-signage",
  "name": "Custom Signage",
  "shortDescription": "Expert design and fabrication of 2D & 3D signs for branding and wayfinding.",
  "heroDescription": "Transform your brand's presence with striking custom signage. We specialize in crafting everything from illuminated 3D channel letters and logos to elegant flat-panel signs, ensuring your business makes a memorable first impression.",
  "detailedDescription": "Your sign is often the first point of contact with a customer. Our custom signage service is dedicated to creating high-impact visual identities that are not only beautiful but also built to last. We combine creative design with expert fabrication, using a wide range of materials and techniques to bring your vision to life.\n\nWe produce both 2D and 3D signs. 3D signs, like fabricated channel letters or dimensional logos, add depth and a premium feel, especially when illuminated with LEDs. 2D signs, such as printed aluminum composite or engraved acrylic panels, are perfect for informational, directional, and cost-effective branding solutions. From concept to installation, we manage the entire process to deliver a sign that perfectly represents your brand.",
  "heroImage": "https://images.pexels.com/photos/1963082/pexels-photo-1963082.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "image": "https://images.pexels.com/photos/2249962/pexels-photo-2249962.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  "turnaroundTime": "1-2 weeks",
  "startingPrice": 10000,
  "features": [
    {
      "title": "3D Fabricated Letters & Logos",
      "description": "Create depth and impact with custom dimensional signage."
    },
    {
      "title": "LED Illumination Options",
      "description": "Front-lit, back-lit (halo), and edge-lit signs for 24/7 visibility."
    },
    {
      "title": "Versatile Material Selection",
      "description": "Working with acrylic, aluminum, stainless steel, wood, and PVC."
    },
    {
      "title": "2D & Flat-Panel Signs",
      "description": "Cost-effective solutions for wayfinding, informational, and office signs."
    },
    {
      "title": "Professional Installation",
      "description": "Safe and secure installation services for all sign types."
    },
    {
      "title": "In-house Design & Consultation",
      "description": "We help you design a sign that is effective, compliant, and on-brand."
    }
  ],
  "specifications": [
    {
      "category": "Sign Types & Illumination",
      "summary": "Common sign styles and lighting techniques",
      "details": [
        { "parameter": "3D Channel Letters", "value": "Fabricated letters with internal LED lighting" },
        { "parameter": "Halo-Lit Signs", "value": "Backlit letters creating a glow effect" },
        { "parameter": "Flat Cut-Out Letters", "value": "Solid letters cut from acrylic, metal, or PVC" },
        { "parameter": "Lightbox Signs", "value": "Internally illuminated box with a translucent face" }
      ]
    },
    {
      "category": "Common Materials",
      "summary": "Materials used for durability and aesthetics",
      "details": [
        { "parameter": "Acrylic (Perspex)", "value": "Versatile for faces, letters, and backings" },
        { "parameter": "Aluminum Composite", "value": "Lightweight and rigid for flat-panel signs" },
        { "parameter": "Stainless Steel", "value": "For premium, highly durable lettering and logos" },
        { "parameter": "PVC Foam Board", "value": "Cost-effective for indoor dimensional letters" }
      ]
    }
  ],
  "process": [
    {
      "title": "Consultation & Design",
      "description": "We discuss your goals, location, and brand to develop a compelling sign concept and provide a visual mockup.",
      "image": "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      "title": "Fabrication",
      "description": "Using CNC routers and laser cutters, we precisely cut and shape all components from the selected materials.",
      "image": "https://images.pexels.com/photos/8947605/pexels-photo-8947605.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      "title": "Assembly & Wiring",
      "description": "Our skilled team assembles the sign, installs high-efficiency LEDs, and performs a full quality and lighting check.",
      "image": "https://images.pexels.com/photos/576831/pexels-photo-576831.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      "title": "Installation",
      "description": "Our professional crew installs your sign securely and safely, ensuring it looks perfect and functions correctly.",
      "image": "https://images.pexels.com/photos/9974474/pexels-photo-9974474.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    }
  ],
  "equipment": [
    {
      "name": "CNC Router",
      "description": "A computer-controlled cutting machine for precisely shaping thick materials like wood, PVC, and aluminum composite.",
      "image": "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      "capabilities": [
        "8ft x 4ft bed size",
        "High-speed spindle",
        "3-axis cutting and engraving",
        "Automatic tool changing"
      ]
    },
    {
      "name": "CO2 Laser Cutter",
      "description": "Used for cutting and engraving acrylic with a highly polished edge, essential for high-end sign faces and letters.",
      "image": "https://images.pexels.com/photos/8947605/pexels-photo-8947605.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      "capabilities": [
        "Flame-polished edge quality",
        "Intricate detail cutting",
        "Engraving capabilities",
        "Large format cutting bed"
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is the difference between 2D and 3D signs?",
      "answer": "A 2D sign is flat, like a printed panel or vinyl lettering on a surface. A 3D sign has physical depth; the letters and logos are raised from the background, creating shadows and a more premium, substantial look."
    },
    {
      "question": "Do I need a permit for my outdoor sign?",
      "answer": "It depends on your local county or city regulations. We can advise you on common requirements and provide the necessary drawings and specifications to help you with your permit application process."
    },
    {
      "question": "How long do LED signs last?",
      "answer": "The high-quality LEDs we use are rated for 50,000 hours or more of continuous use. With typical business hours, your sign's illumination can last for many years with minimal maintenance."
    },
    {
      "question": "What information do you need to give me a quote?",
      "answer": "To provide an accurate quote, we need your logo/artwork, the desired size of the sign, the installation address (or a photo of the location), and an idea of whether you want it illuminated or non-illuminated."
    }
  ],
  "testimonials": [
    {
      "clientName": "James Kamau",
      "clientTitle": "Owner",
      "company": "The Urban Bean Cafe",
      "clientAvatar": "https://randomuser.me/api/portraits/men/55.jpg",
      "rating": 5,
      "content": "The halo-lit 3D sign created for our cafe is absolutely magnificent. It has completely transformed our storefront and we get compliments on it daily. The entire process from design to installation was seamless and professional.",
      "projectType": "Halo-Lit 3D Channel Letter Sign",
      "projectDetails": {
        "value": 150000,
        "timeline": "10 days"
      }
    }
  ]
},
{
  "id": "versa-laser-engraving",
  "name": "Versa Laser Engraving & Cutting",
  "shortDescription": "High-precision CO2 laser services for intricate engraving and cutting on non-metals.",
  "heroDescription": "Unlock unparalleled detail and personalization with our Versa Laser system. Ideal for engraving wood, acrylic, leather, and fabric, we transform ordinary items into bespoke products, awards, and artistic pieces with stunning precision.",
  "detailedDescription": "Our Versa Laser technology utilizes a high-precision CO2 laser, a system renowned for its exceptional performance on a vast range of organic and polymer materials. Unlike fibre lasers that are optimized for metal, the CO2 laser excels at etching, engraving, and cutting materials like wood, acrylic, leather, glass, and fabric with incredible detail and a smooth finish.\n\nThis versatility makes it the perfect choice for a wide array of applications, from creating custom corporate gifts and intricate architectural models to personalizing consumer products and cutting detailed fabric patterns. With the ability to produce photo-realistic engravings and clean, flame-polished edges on acrylic, the Versa Laser brings a touch of sophistication and quality to every project.",
  "heroImage": "https://images.pexels.com/photos/7130649/pexels-photo-7130649.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "image": "https://images.pexels.com/photos/7130653/pexels-photo-7130653.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  "turnaroundTime": "1-4 business days",
  "startingPrice": 1800,
  "features": [
    {
      "title": "Intricate Engraving Detail",
      "description": "Achieve fine lines, sharp text, and complex patterns with high precision."
    },
    {
      "title": "Wide Material Range (Non-Metals)",
      "description": "Perfect for wood, acrylic, leather, fabric, paper, and glass."
    },
    {
      "title": "Photo-Realistic Engraving",
      "description": "Replicate detailed photographs on materials like wood, slate, and acrylic."
    },
    {
      "title": "Clean, Polished Edges",
      "description": "Produces a smooth, flame-polished edge when cutting acrylic."
    },
    {
      "title": "Marking on Coated Metals",
      "description": "Capable of etching away coatings on items like anodized aluminum."
    },
    {
      "title": "Prototyping & Personalization",
      "description": "Ideal for creating one-off custom items and detailed product prototypes."
    }
  ],
  "specifications": [
    {
      "category": "Engraving & Cutting Capabilities",
      "summary": "Material thickness limits and precision specifications",
      "details": [
        { "parameter": "Acrylic (Cutting)", "value": "Up to 12mm" },
        { "parameter": "Wood/MDF (Cutting)", "value": "Up to 10mm" },
        { "parameter": "Leather & Fabric", "value": "All types" },
        { "parameter": "Engraving Area", "value": "800mm x 450mm" },
        { "parameter": "Engraving Resolution", "value": "Up to 1000 DPI" }
      ]
    },
    {
      "category": "System & Materials",
      "summary": "Machine specifications and file compatibility",
      "details": [
        { "parameter": "Laser Type", "value": "Sealed CO2 Laser Tube" },
        { "parameter": "Laser Power", "value": "60 Watts" },
        { "parameter": "Assist System", "value": "Compressed Air Assist for clean cuts" },
        { "parameter": "Accepted Formats", "value": "AI, PDF, SVG, DXF, JPG, PNG" }
      ]
    }
  ],
  "process": [
    {
      "title": "Artwork & File Setup",
      "description": "We receive your design file, whether it's a vector for cutting or a raster image for engraving, and prepare it for the laser.",
      "image": "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      "title": "Material Fixturing",
      "description": "The chosen material or product is carefully placed and secured within the laser system's work area.",
      "image": "https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      "title": "Laser Processing",
      "description": "The CO2 laser precisely traces the design path to either engrave the surface or cut through the material.",
      "image": "https://images.pexels.com/photos/7130653/pexels-photo-7130653.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      "title": "Cleaning & Final Inspection",
      "description": "The finished item is cleaned of any residue, inspected for quality, and prepared for the client.",
      "image": "https://images.pexels.com/photos/7147040/pexels-photo-7147040.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    }
  ],
  "equipment": [
    {
      "name": "Universal Laser Systems (ULS) VersaLaser",
      "description": "A versatile CO2 laser platform known for its precision optics and reliability, making it an industry standard for detailed engraving and non-metal cutting.",
      "image": "https://images.pexels.com/photos/7130653/pexels-photo-7130653.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      "capabilities": [
        "High-resolution optics",
        "Air-assist system for smoke and flame reduction",
        "Red dot pointer for accurate positioning",
        "Adjustable Z-axis for various object heights"
      ]
    }
  ],
  "faqs": [
    {
      "question": "What's the main difference between Versa Laser (CO2) and Fibre Laser?",
      "answer": "The main difference is the material they work best with. Our Versa (CO2) laser is perfect for non-metals like wood, acrylic, leather, and glass. The Fibre Laser is specifically for cutting metals like steel and aluminum with high speed."
    },
    {
      "question": "Can you engrave a photograph onto wood?",
      "answer": "Yes, absolutely. Photo engraving is one of the key strengths of this machine. We can process high-quality raster images (like JPG or PNG) to create detailed and permanent photographic engravings on wood and other materials."
    },
    {
      "question": "Can the Versa Laser cut through metal?",
      "answer": "No, CO2 lasers are not suitable for cutting metals. For any metal cutting needs, you should use our Fibre Laser Cutting service."
    },
    {
      "question": "What kind of detail can you achieve?",
      "answer": "The laser beam is extremely fine, allowing us to achieve very intricate details, including small text, complex logos, and fine-line patterns that would be difficult or impossible with other methods."
    }
  ],
  "testimonials": [
    {
      "clientName": "Zoe Mwangi",
      "clientTitle": "Founder",
      "company": "Artisan Crafts KE",
      "clientAvatar": "https://randomuser.me/api/portraits/women/58.jpg",
      "rating": 5,
      "content": "The detail on the leather patches engraved for our new handbag line was incredible. The consistency across the entire batch was perfect, and it has become a real signature feature for our brand. A game-changer for us!",
      "projectType": "Custom Leather Patch Engraving",
      "projectDetails": {
        "value": 25000,
        "timeline": "3 days"
      }
    }
  ]
},
{
  "id": "large-format-printing",
  "name": "Large Format Printing",
  "shortDescription": "Vibrant, high-impact printing for banners, posters, signage, and vehicle wraps.",
  "heroDescription": "Make a big impression with our Large Format Printing services. We produce stunning, high-resolution prints on a wide variety of media for indoor and outdoor use, perfect for advertising, branding, events, and architectural graphics.",
  "detailedDescription": "Large Format Printing, also known as wide-format printing, is the ideal solution for projects that need to be seen from a distance. Using state-of-the-art inkjet technology and durable, weather-resistant inks, we create graphics that are not only large in scale but also rich in color and detail.\n\nFrom massive vinyl banners and pull-up displays for trade shows to adhesive window graphics and full vehicle wraps, our capabilities are extensive. We help businesses and individuals bring their boldest ideas to life, ensuring every print is vibrant, durable, and perfectly finished for its intended application.",
  "heroImage": "https://images.pexels.com/photos/7249187/pexels-photo-7249187.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "image": "https://images.pexels.com/photos/7249187/pexels-photo-7249187.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  "turnaroundTime": "1-3 days",
  "startingPrice": 2000,
  "features": [
    {
      "title": "Stunning Visual Impact",
      "description": "Create eye-catching displays that grab attention."
    },
    {
      "title": "Wide Media Variety",
      "description": "Printing on vinyl, canvas, fabric, backlit film, and adhesive materials."
    },
    {
      "title": "Indoor & Outdoor Durability",
      "description": "Weather-resistant, UV-stable inks for long-lasting performance."
    },
    {
      "title": "High-Resolution Output",
      "description": "Photorealistic quality with sharp details, even at large sizes."
    },
    {
      "title": "Custom Sizes & Finishing",
      "description": "Any size you need with hemming, grommets, and lamination options."
    },
    {
      "title": "Full-Service Solution",
      "description": "From design assistance to professional installation services."
    }
  ],
  "specifications": [
    {
      "category": "Printing Capabilities",
      "summary": "Maximum print size and resolution details",
      "details": [
        { "parameter": "Max Print Width", "value": "Up to 3.2 meters (10.5 feet)" },
        { "parameter": "Printing Technology", "value": "Eco-Solvent & Latex Inkjet" },
        { "parameter": "Resolution", "value": "Up to 1440 x 1440 DPI" },
        { "parameter": "Color Space", "value": "CMYK with expanded gamut options" }
      ]
    },
    {
      "category": "Popular Materials",
      "summary": "A selection of our most-used media",
      "details": [
        { "parameter": "Vinyl Banners", "value": "Durable PVC for indoor/outdoor use" },
        { "parameter": "Adhesive Vinyl", "value": "For windows, walls, and vehicle wraps" },
        { "parameter": "Canvas", "value": "Artistic reproductions and fine art prints" },
        { "parameter": "Backlit Film", "value": "For vibrant lightbox displays" },
        { "parameter": "Fabric Prints", "value": "Soft signage and trade show backdrops" }
      ]
    }
  ],
  "process": [
    {
      "title": "Consultation & Design",
      "description": "We assess your project's needs and review your artwork, or help create a design from scratch.",
      "image": "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      "title": "File Pre-press & Setup",
      "description": "Our team prepares your high-resolution file for printing, ensuring color accuracy and correct scaling.",
      "image": "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      "title": "Wide-Format Printing",
      "description": "Your design is printed on the chosen material using our state-of-the-art large format printers.",
      "image": "https://images.pexels.com/photos/7249187/pexels-photo-7249187.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      "title": "Finishing & Installation",
      "description": "We add final touches like lamination, grommets, or hemming, then package for pickup or provide professional installation.",
      "image": "https://images.pexels.com/photos/9974474/pexels-photo-9974474.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    }
  ],
  "equipment": [
    {
      "name": "Roland Eco-Solvent Printer",
      "description": "A versatile high-resolution printer ideal for vinyl banners, vehicle wraps, and detailed adhesive graphics.",
      "image": "https://images.pexels.com/photos/7249187/pexels-photo-7249187.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      "capabilities": [
        "1.6m print width",
        "Print & Cut functionality",
        "High-density eco-solvent inks",
        "Variable dot technology for smooth gradients"
      ]
    },
    {
      "name": "HP Latex Printer",
      "description": "Perfect for indoor applications like wallpaper, canvas, and fabric prints, using water-based, odorless inks.",
      "image": "https://images.pexels.com/photos/7643770/pexels-photo-7643770.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      "capabilities": [
        "3.2m print width",
        "Instant-dry prints",
        "Scratch-resistant inks",
        "Environmentally friendly"
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is the largest size you can print?",
      "answer": "We can print up to 3.2 meters (10.5 feet) wide by virtually any length. For projects larger than this, we can print in panels and seam them together seamlessly during installation."
    },
    {
      "question": "How long will my outdoor banner last?",
      "answer": "With our UV-stable eco-solvent inks and durable banner material, you can expect an outdoor banner to last 3-5 years or more, depending on environmental conditions like direct sun exposure and wind."
    },
    {
      "question": "Do you offer design services?",
      "answer": "Yes, we have a team of graphic designers who can help you. Whether you need a simple banner layout or a complex vehicle wrap design, we can work with you to create an effective and professional-looking graphic."
    },
    {
      "question": "What is the difference between your printers?",
      "answer": "Our Eco-Solvent printer is a workhorse for vinyl and outdoor signage, offering fantastic durability. Our Latex printer uses water-based inks that are odorless and environmentally friendly, making it ideal for indoor applications like wallpapers, textiles, and office graphics."
    }
  ],
  "testimonials": [
    {
      "clientName": "Susan Wanjiru",
      "clientTitle": "Event Coordinator",
      "company": "Nairobi Events Expo",
      "clientAvatar": "https://randomuser.me/api/portraits/women/38.jpg",
      "rating": 5,
      "content": "The event backdrops and banners were phenomenal! The colors were so vibrant and true to our brand, and the print quality was top-notch. Impact Innovations delivered everything on a tight deadline.",
      "projectType": "Event Branding & Signage",
      "projectDetails": {
        "value": 120000,
        "timeline": "3 days"
      }
    }
  ]
},
{
  "id": "fibre-laser-cutting",
  "name": "Fibre Laser Cutting",
  "shortDescription": "High-speed, precision metal cutting with exceptional accuracy and edge quality.",
  "heroDescription": "Experience unparalleled speed and precision with our advanced Fibre Laser Cutting services. Perfect for cutting steel, stainless steel, aluminum, brass, and copper with a flawless, clean edge for everything from prototypes to large-scale production runs.",
  "detailedDescription": "Fibre Laser cutting represents the pinnacle of metal cutting technology. It utilizes a high-power, solid-state laser source transmitted through a flexible optical fiber to deliver a highly focused beam. This results in incredibly fast cutting speeds, especially on thin to medium gauge metals, with minimal heat distortion and an exceptionally fine kerf (cut width).\n\nOur system excels at processing reflective metals like aluminum, brass, and copper, which are challenging for older CO2 laser technologies. Whether you need intricate artistic designs, precise machinery components, or rapid production of sheet metal parts, our fibre laser service provides superior quality, efficiency, and repeatability.",
  "heroImage": "https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
  "image": "https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  "turnaroundTime": "1-3 business days",
  "startingPrice": 3000,
  "features": [
    {
      "title": "Rapid Cutting Speed",
      "description": "Significantly faster than conventional cutting methods, reducing lead times."
    },
    {
      "title": "Exceptional Precision",
      "description": "Achieves extremely tight tolerances for complex and intricate parts."
    },
    {
      "title": "Superior Edge Quality",
      "description": "Produces a smooth, clean-cut edge, often eliminating the need for secondary finishing."
    },
    {
      "title": "Broad Metal Compatibility",
      "description": "Excels at cutting steel, stainless, aluminum, brass, and copper."
    },
    {
      "title": "Material Efficiency",
      "description": "Advanced nesting software minimizes waste, reducing material costs."
    },
    {
      "title": "Low Heat Distortion",
      "description": "A small heat-affected zone (HAZ) preserves material integrity."
    }
  ],
  "specifications": [
    {
      "category": "Cutting Capabilities",
      "summary": "Maximum thickness and precision specifications",
      "details": [
        { "parameter": "Mild Steel", "value": "Up to 20mm" },
        { "parameter": "Stainless Steel", "value": "Up to 12mm" },
        { "parameter": "Aluminum", "value": "Up to 10mm" },
        { "parameter": "Brass & Copper", "value": "Up to 5mm" },
        { "parameter": "Positioning Accuracy", "value": "±0.05mm" }
      ]
    },
    {
      "category": "System & Materials",
      "summary": "Machine specifications and material formats",
      "details": [
        { "parameter": "Max Sheet Size", "value": "3000mm x 1500mm" },
        { "parameter": "Laser Power", "value": "6kW" },
        { "parameter": "Assist Gas", "value": "Nitrogen, Oxygen, Compressed Air" },
        { "parameter": "Accepted Formats", "value": "DXF, DWG, STEP" }
      ]
    }
  ],
  "process": [
    {
      "title": "CAD File Submission & Nesting",
      "description": "We receive your digital design file (DXF/DWG) and use nesting software to arrange parts for maximum material yield.",
      "image": "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      "title": "Material Loading",
      "description": "The appropriate metal sheet is selected and loaded onto the automated shuttle table of the laser cutter.",
      "image": "https://images.pexels.com/photos/7137452/pexels-photo-7137452.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      "title": "Automated Laser Cutting",
      "description": "The fibre laser precisely follows the programmed toolpath, cutting out the parts with incredible speed and accuracy.",
      "image": "https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    },
    {
      "title": "Part De-nesting & Inspection",
      "description": "Finished parts are removed from the sheet, inspected for quality, and prepared for dispatch or further processing.",
      "image": "https://images.pexels.com/photos/8346039/pexels-photo-8346039.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
    }
  ],
  "equipment": [
    {
      "name": "6kW CNC Fibre Laser Cutter",
      "description": "A high-power, industrial-grade laser cutting system designed for speed, precision, and reliability across a wide range of metals.",
      "image": "https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      "capabilities": [
        "6000W laser source",
        "3m x 1.5m shuttle table",
        "Auto-focus cutting head",
        "High-pressure gas assist"
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is the main advantage of Fibre Laser over CO2 Laser?",
      "answer": "The main advantages are speed and efficiency, especially on thinner metals. Fibre lasers are also much better at cutting reflective materials like brass, copper, and aluminum without risk of back-reflection damage to the machine."
    },
    {
      "question": "What file format do I need to provide for a quote?",
      "answer": "We require 2D vector files for cutting. The most common and preferred formats are DXF and DWG. Please ensure your drawing is scaled 1:1."
    },
    {
      "question": "Can you cut materials other than metal?",
      "answer": "Fibre lasers are specifically optimized for metal. For other materials like wood, acrylic, or plastic, we use our CO2 laser cutting services, which are better suited for those applications."
    },
    {
      "question": "What is 'nesting' and how does it affect my price?",
      "answer": "Nesting is the process of arranging your parts on a raw sheet of metal in the most efficient way possible to minimize waste. Better nesting means less wasted material, which lowers the overall cost of your project."
    }
  ],
  "testimonials": [
    {
      "clientName": "David Mwangi",
      "clientTitle": "Lead Product Engineer",
      "company": "Innovatech Solutions",
      "clientAvatar": "https://randomuser.me/api/portraits/men/32.jpg",
      "rating": 5,
      "content": "The precision of the cuts on our aluminum enclosures was incredible. The edge finish was so clean it required no deburring, saving us a full day of post-processing. The turnaround time was phenomenal.",
      "projectType": "Custom Machinery Components",
      "projectDetails": {
        "value": 75000,
        "timeline": "2 days"
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