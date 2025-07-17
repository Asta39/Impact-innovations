import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState(new Set());

  const categories = [
    { id: 'all', label: 'All Questions', count: 24 },
    { id: 'services', label: 'Services', count: 8 },
    { id: 'pricing', label: 'Pricing', count: 6 },
    { id: 'timeline', label: 'Timeline', count: 5 },
    { id: 'materials', label: 'Materials', count: 5 }
  ];

  const faqData = [
    {
      id: 1,
      category: 'services',
      question: 'What laser cutting services do you offer?',
      answer: `We provide comprehensive laser cutting services including:\n\n• Precision cutting of metals (steel, aluminum, stainless steel)\n• Acrylic and plastic cutting\n• Custom signage and lettering\n• Architectural metalwork\n• Industrial component fabrication\n• Prototyping and small batch production\n\nOur state-of-the-art laser cutting equipment ensures accuracy within ±0.1mm tolerance for all projects.`
    },
    {
      id: 2,
      category: 'pricing',
      question: 'How do you calculate pricing for laser cutting projects?',
      answer: `Our pricing is based on several factors:\n\n• Material type and thickness\n• Cutting complexity and design intricacy\n• Project quantity and batch size\n• Finishing requirements\n• Delivery timeline\n\nWe offer competitive rates starting from KES 50 per linear meter for basic steel cutting. Contact us for a detailed quote tailored to your specific project requirements.`
    },
    {
      id: 3,
      category: 'timeline',
      question: 'What is your typical turnaround time?',
      answer: `Standard turnaround times:\n\n• Simple cutting projects: 1-2 business days\n• Complex fabrication: 3-5 business days\n• Large volume orders: 5-10 business days\n• Custom design projects: 7-14 business days\n\nRush orders available with 24-48 hour delivery for urgent projects (additional charges apply).`
    },
    {
      id: 4,
      category: 'materials',
      question: 'What materials can you work with?',
      answer: `We work with a wide range of materials:\n\n**Metals:**\n• Mild steel (up to 20mm thickness)\n• Stainless steel (up to 15mm thickness)\n• Aluminum (up to 12mm thickness)\n• Brass and copper (up to 8mm thickness)\n\n**Non-metals:**\n• Acrylic and PMMA\n• Wood and plywood\n• Cardboard and paper\n• Fabric and leather\n\nAll materials are sourced from certified suppliers to ensure quality and consistency.`
    },
    {
      id: 5,
      category: 'services',
      question: 'Do you provide design services?',
      answer: `Yes, we offer comprehensive design services:\n\n• CAD drawing and technical drawings\n• Design optimization for laser cutting\n• 3D modeling and visualization\n• File format conversion (DXF, AI, PDF)\n• Design consultation and recommendations\n\nOur experienced designers work closely with clients to ensure optimal results while minimizing material waste and production costs.`
    },
    {
      id: 6,
      category: 'pricing',
      question: 'Do you offer discounts for bulk orders?',
      answer: `Yes, we provide attractive bulk pricing:\n\n• 10-50 pieces: 10% discount\n• 51-100 pieces: 15% discount\n• 101-500 pieces: 20% discount\n• 500+ pieces: Custom pricing (up to 30% discount)\n\nAdditional discounts available for repeat customers and long-term partnerships. Contact us to discuss volume pricing for your specific requirements.`
    },
    {
      id: 7,
      category: 'timeline',
      question: 'Can you handle urgent or rush orders?',
      answer: `Absolutely! We understand that some projects have tight deadlines:\n\n• Same-day service: Available for simple cuts (50% rush charge)\n• Next-day delivery: For most standard projects (25% rush charge)\n• Weekend service: Available by appointment\n• 24/7 emergency service: For critical industrial needs\n\nContact us immediately for urgent requirements, and we'll do our best to accommodate your timeline.`
    },
    {
      id: 8,
      category: 'materials',question: 'What file formats do you accept?',
      answer: `We accept various file formats:\n\n**Preferred formats:**\n• DXF (AutoCAD Drawing Exchange Format)\n• AI (Adobe Illustrator)\n• EPS (Encapsulated PostScript)\n\n**Also accepted:**\n• PDF (with vector graphics)\n• SVG (Scalable Vector Graphics)\n• CDR (CorelDRAW)\n• DWG (AutoCAD Drawing)\n\nFor best results, provide vector files with proper dimensions and cut lines clearly marked. Our team can also convert raster images to vector format if needed.`
    }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const formatAnswer = (answer) => {
    return answer.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < answer.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our laser cutting services, 
            pricing, and processes.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <Input
            type="search"
            placeholder="Search questions and answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white' :'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-sm"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                >
                  <h3 className="text-lg font-medium text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <Icon
                    name={openItems.has(faq.id) ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    color="var(--color-muted-foreground)"
                    className="flex-shrink-0 transition-transform duration-300"
                  />
                </button>
                
                {openItems.has(faq.id) && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {formatAnswer(faq.answer)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Icon name="Search" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                No questions found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or browse different categories.
              </p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our expert team is ready to help you with any specific inquiries about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = 'tel:+254700123456'}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all duration-300 hover:bg-primary/90"
              >
                <Icon name="Phone" size={16} color="white" className="mr-2" />
                Call Us Now
              </button>
              <button
                onClick={() => window.open('https://wa.me/254700123456', '_blank')}
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-green-700"
              >
                <Icon name="MessageCircle" size={16} color="white" className="mr-2" />
                WhatsApp Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;