'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { ChevronDown, Phone, MessageCircle, Search } from 'lucide-react';
import Link from 'next/link';

const faqCategories = [
  {
    category: 'General Questions',
    categoryAr: 'أسئلة عامة',
    faqs: [
      {
        q: 'What areas do you serve?',
        a: 'F & F Pest Control serves all areas across the UAE including Ajman, Dubai, Sharjah, Abu Dhabi, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We are based in Ajman Free Zone and offer same-day service in Ajman and nearby areas.',
      },
      {
        q: 'Are your technicians licensed and trained?',
        a: 'Yes, all our technicians are fully licensed by UAE authorities and undergo extensive training in pest identification, treatment methods, and safety protocols. We are registered with Ajman Free Zone Authority.',
      },
      {
        q: 'Do you offer emergency pest control services?',
        a: 'Yes, we provide 24/7 emergency pest control services. Whether it\'s a severe infestation or an urgent pest problem, our team is ready to respond quickly. Call us anytime at +971 52 214 1349.',
      },
      {
        q: 'How quickly can you respond to a service request?',
        a: 'For Ajman, we typically respond within 2-4 hours. For other Emirates, we can usually schedule same-day or next-day service depending on availability.',
      },
      {
        q: 'Do you provide free inspections?',
        a: 'Yes, we offer free inspections for residential and commercial properties. Our technicians will assess your pest problem and provide a detailed quote with no obligation.',
      },
    ]
  },
  {
    category: 'Treatment & Safety',
    categoryAr: 'العلاج والسلامة',
    faqs: [
      {
        q: 'Are your pest control products safe for children and pets?',
        a: 'Yes, we use EPA-approved and family-safe products. Once the treatment has dried (usually 1-2 hours), the treated areas are safe for children and pets. We also offer organic and eco-friendly treatment options upon request.',
      },
      {
        q: 'Do I need to leave my home during treatment?',
        a: 'For most standard treatments, you don\'t need to leave your home. However, we recommend staying out of the treated areas for 1-2 hours until the products dry. For fumigation or severe infestations, temporary evacuation may be required.',
      },
      {
        q: 'How long does a typical treatment take?',
        a: 'A standard treatment takes 1-2 hours depending on the property size and type of pest. Termite treatments or severe infestations may take 4-6 hours or multiple visits.',
      },
      {
        q: 'What should I do to prepare for pest control treatment?',
        a: 'We recommend clearing countertops, storing food in sealed containers, moving furniture slightly away from walls, and ensuring access to problem areas. We\'ll provide specific instructions based on your treatment type.',
      },
      {
        q: 'Are there any side effects from the treatment?',
        a: 'Our products are designed to target pests specifically. Some people with sensitivities may notice a mild odor initially. Proper ventilation after treatment helps. If you have specific health concerns, let us know and we can use alternative products.',
      },
    ]
  },
  {
    category: 'Pricing & Warranty',
    categoryAr: 'الأسعار والضمان',
    faqs: [
      {
        q: 'How much does pest control cost?',
        a: 'Prices vary based on property size, pest type, and treatment required. Basic treatments start from AED 150. We provide free quotes after inspection. Contact us for accurate pricing for your specific situation.',
      },
      {
        q: 'Do you offer service contracts or packages?',
        a: 'Yes, we offer monthly, quarterly, and annual pest control maintenance packages at discounted rates. Regular service prevents infestations and keeps your property pest-free year-round.',
      },
      {
        q: 'What guarantee do you provide?',
        a: 'We offer a satisfaction guarantee on all our services. If pests return within the warranty period (30-90 days depending on service), we\'ll re-treat at no additional cost. Termite treatments include up to 5-year warranties.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept cash, credit/debit cards, bank transfers, and online payments. For commercial clients, we also offer invoice payment terms.',
      },
      {
        q: 'Are there any hidden fees?',
        a: 'No, we believe in transparent pricing. The quote we provide includes all costs. Any additional work needed will be discussed and approved before proceeding.',
      },
    ]
  },
  {
    category: 'Specific Pests',
    categoryAr: 'آفات محددة',
    faqs: [
      {
        q: 'How do I know if I have a cockroach infestation?',
        a: 'Signs include seeing live cockroaches (especially at night), finding droppings (small dark specks), discovering egg cases, noticing a musty odor, and seeing smear marks along walls. If you spot one cockroach, there are likely many more hiding.',
      },
      {
        q: 'How do you get rid of bed bugs?',
        a: 'We use a combination of heat treatment, chemical treatment, and physical methods. Heat treatment kills all life stages instantly. We also treat furniture, seal cracks, and provide mattress encasements. Multiple treatments may be needed 10-14 days apart.',
      },
      {
        q: 'What attracts rats and mice to my property?',
        a: 'Rodents are attracted by food sources (garbage, pet food, crumbs), water sources, and shelter opportunities. Gaps in walls, cluttered storage areas, and overgrown vegetation can all attract rodents.',
      },
      {
        q: 'How can I tell if I have termites?',
        a: 'Look for mud tubes on walls or foundations, hollow-sounding wood, discarded wings near windows, and small holes in wood. Termite damage is often hidden, so professional inspection is recommended for older properties.',
      },
      {
        q: 'Are mosquito treatments effective?',
        a: 'Yes, our mosquito treatments significantly reduce populations. We target breeding sites, apply larvicides, and use fogging for adult mosquitoes. Monthly treatments during peak season provide best results.',
      },
    ]
  },
  {
    category: 'Commercial Services',
    categoryAr: 'الخدمات التجارية',
    faqs: [
      {
        q: 'Do you provide pest control for restaurants and food businesses?',
        a: 'Yes, we specialize in commercial pest control for restaurants, cafes, food processing facilities, and hotels. We understand health department requirements and help you maintain compliance.',
      },
      {
        q: 'Can you provide documentation for health inspections?',
        a: 'Yes, we provide detailed service reports, treatment certificates, and pest sighting logs. These documents help you demonstrate compliance during health inspections.',
      },
      {
        q: 'Do you offer pest control for warehouses?',
        a: 'Yes, we provide comprehensive warehouse pest management including rodent control, stored product pest treatment, and perimeter protection. We understand the unique challenges of large commercial spaces.',
      },
      {
        q: 'What about pest control for construction sites?',
        a: 'We offer pre-construction termite treatment, soil treatment, and anti-termite barriers. Treating before construction is more effective and cost-efficient than post-construction treatment.',
      },
      {
        q: 'Do you have service level agreements for businesses?',
        a: 'Yes, we offer customized SLAs for commercial clients with guaranteed response times, regular scheduled visits, and priority emergency service.',
      },
    ]
  },
  {
    category: 'Products & Wholesale',
    categoryAr: 'المنتجات والجملة',
    faqs: [
      {
        q: 'What is MAGIC pest control product?',
        a: 'MAGIC is our proprietary brand of professional-grade pest control products. Our MAGIC Cockroach Killer Spray is highly effective with instant-kill formula. Available in Arabic and English labels.',
      },
      {
        q: 'Can I buy pest control products directly from you?',
        a: 'Yes, we sell MAGIC products for retail purchase. You can order through our website, WhatsApp, or visit us in Ajman. We also offer wholesale pricing for bulk orders.',
      },
      {
        q: 'Do you offer wholesale pricing for retailers?',
        a: 'Yes, F & F Pest Control Trading FZE specializes in wholesale distribution of pest control products. Contact us for distributor pricing and partnership opportunities.',
      },
      {
        q: 'Do you import and export pest control products?',
        a: 'Yes, we import high-quality pest control equipment and products, and export to regional markets. We handle bulk orders for businesses and distributors.',
      },
      {
        q: 'What cleaning products do you offer?',
        a: 'Beyond pest control, we supply industrial cleaning substances, sanitizers, and disinfectants for commercial and residential use. Available in bulk and retail quantities.',
      },
    ]
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    faqs: cat.faqs.filter(faq => 
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.faqs.length > 0);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#0d2615] to-[#0a1a0f]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              Find answers to common questions about our pest control services, products, and pricing.
            </p>
            
            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-yellow-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === null ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Questions
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat.category ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {filteredCategories
            .filter(cat => activeCategory === null || cat.category === activeCategory)
            .map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0a1a0f] mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-green-500 rounded-full" />
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, index) => {
                  const id = `${category.category}-${index}`;
                  const isOpen = openIndex === id;
                  
                  return (
                    <div
                      key={id}
                      className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <button
                        onClick={() => toggleFaq(id)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <span className="font-semibold text-[#0a1a0f] pr-4">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
          
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No questions found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Can't find what you're looking for? Our team is here to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971522141349"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a
              href="https://wa.me/971522141349"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-bold text-[#0a1a0f] mb-8 text-center">Related Pages</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/services" className="p-6 bg-gray-50 rounded-2xl hover:bg-green-50 hover:border-green-500 border border-transparent transition-all text-center">
              <span className="text-3xl mb-3 block">🛡️</span>
              <span className="font-semibold text-[#0a1a0f]">Our Services</span>
            </Link>
            <Link href="/products" className="p-6 bg-gray-50 rounded-2xl hover:bg-green-50 hover:border-green-500 border border-transparent transition-all text-center">
              <span className="text-3xl mb-3 block">🧴</span>
              <span className="font-semibold text-[#0a1a0f]">MAGIC Products</span>
            </Link>
            <Link href="/wholesale" className="p-6 bg-gray-50 rounded-2xl hover:bg-green-50 hover:border-green-500 border border-transparent transition-all text-center">
              <span className="text-3xl mb-3 block">📦</span>
              <span className="font-semibold text-[#0a1a0f]">Wholesale & Export</span>
            </Link>
            <Link href="/contact" className="p-6 bg-gray-50 rounded-2xl hover:bg-green-50 hover:border-green-500 border border-transparent transition-all text-center">
              <span className="text-3xl mb-3 block">📞</span>
              <span className="font-semibold text-[#0a1a0f]">Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
