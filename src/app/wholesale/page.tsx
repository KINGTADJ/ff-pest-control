'use client';

import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Phone, MessageCircle, Package, Truck, Globe, Shield, CheckCircle, Building, Store, Factory } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const productCategories = [
  {
    title: 'Pest Control Products',
    icon: '🪳',
    items: [
      'Cockroach Killer Sprays (MAGIC Brand)',
      'Rodent Baits & Traps',
      'Bed Bug Treatment Solutions',
      'Termite Control Chemicals',
      'Mosquito Foggers & Larvicides',
      'Ant Baits & Granules',
      'Fly Traps & Baits',
      'General Insecticides',
    ]
  },
  {
    title: 'Cleaning Substances',
    icon: '🧴',
    items: [
      'Industrial Disinfectants',
      'Floor Cleaners (Commercial Grade)',
      'Glass & Surface Cleaners',
      'Bathroom Sanitizers',
      'Kitchen Degreasers',
      'Multi-Purpose Cleaners',
      'Air Fresheners',
      'Hand Sanitizers',
    ]
  },
  {
    title: 'Equipment & Supplies',
    icon: '🔧',
    items: [
      'Sprayers (Manual & Electric)',
      'Fogging Machines',
      'Bait Stations',
      'Rodent Traps',
      'UV Fly Traps',
      'Protective Equipment (PPE)',
      'Measuring Equipment',
      'Storage Containers',
    ]
  },
];

const benefits = [
  { icon: Package, title: 'Bulk Pricing', desc: 'Competitive wholesale rates for large orders' },
  { icon: Truck, title: 'UAE Delivery', desc: 'Fast delivery to all Emirates' },
  { icon: Globe, title: 'Export Services', desc: 'International shipping to GCC & beyond' },
  { icon: Shield, title: 'Quality Assured', desc: 'All products meet UAE standards' },
];

const customerTypes = [
  { icon: Store, title: 'Retailers', desc: 'Stock MAGIC products in your store with attractive margins' },
  { icon: Building, title: 'Hotels & Restaurants', desc: 'Bulk orders for hospitality industry with regular supply' },
  { icon: Factory, title: 'Industries', desc: 'Large-scale supply for factories and warehouses' },
];

export default function WholesalePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#0d2615] to-[#0a1a0f]" />
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-400/20 rounded-full mb-6">
              <Globe className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm">Import & Export • Wholesale Distribution</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Wholesale & <span className="text-yellow-400">Export</span><br />
              Pest Control Products
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-8">
              F & F Pest Control Trading FZE is your trusted partner for wholesale distribution and international export of premium pest control and cleaning products.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+971522141349"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Request Wholesale Quote
              </a>
              <a
                href="https://wa.me/971522141349?text=Hi, I'm interested in wholesale/bulk orders"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp for Bulk Orders
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-bold text-[#0a1a0f] mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0f] mb-4">
              Products Available for <span className="text-green-600">Wholesale & Export</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We supply a comprehensive range of pest control and cleaning products in bulk quantities for retailers, distributors, and commercial clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:border-green-500/30 transition-all"
              >
                <div className="text-5xl mb-6">{category.icon}</div>
                <h3 className="text-xl font-bold text-[#0a1a0f] mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAGIC Products Highlight */}
      <section className="py-20 bg-[#0a1a0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                MAGIC Brand <span className="text-yellow-400">Pest Control Products</span>
              </h2>
              <p className="text-white/60 text-lg mb-6">
                Our proprietary MAGIC brand is known for its powerful formula and instant results. Available in Arabic and English labels to serve diverse markets.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Instant Kill Formula - Fast acting results',
                  'Professional Grade - Commercial quality',
                  'Safe When Dry - Family & pet friendly',
                  'Long-lasting Protection - Residual effect',
                  'Dual Language Labels - Arabic & English',
                  'Attractive Retail Margins - For resellers',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors"
              >
                View Product Range
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-green-500/20 to-yellow-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🧴</div>
                  <p className="text-white font-bold text-xl">MAGIC Products</p>
                  <p className="text-white/60">Available for Wholesale</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0f] mb-4">
              Who We <span className="text-green-600">Serve</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with businesses of all sizes to supply quality pest control and cleaning products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1a0f] mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0f] mb-6">
                International <span className="text-green-600">Export Services</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Based in Ajman Free Zone, we are strategically positioned to export pest control and cleaning products to markets across the GCC and beyond.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  'Saudi Arabia',
                  'Kuwait',
                  'Bahrain',
                  'Oman',
                  'Qatar',
                  'Jordan',
                  'Egypt',
                  'East Africa',
                ].map((country, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <Globe className="w-4 h-4 text-green-500" />
                    {country}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mb-6">
                * We can arrange export to other countries on request. Contact us for international shipping quotes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#0a1a0f] mb-6">Export Process</h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Inquiry', desc: 'Contact us with your product requirements and destination' },
                  { step: '02', title: 'Quotation', desc: 'Receive competitive pricing including shipping costs' },
                  { step: '03', title: 'Documentation', desc: 'We handle all export documentation and compliance' },
                  { step: '04', title: 'Shipping', desc: 'Products shipped via sea or air freight' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0a1a0f]">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Place a Wholesale Order?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for wholesale pricing, bulk orders, or export inquiries. Our team is ready to serve you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+971522141349"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +971 52 214 1349
              </a>
              <a
                href="mailto:ffpestcontrol@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                📧 ffpestcontrol@gmail.com
              </a>
            </div>
            <p className="text-white/60 mt-6 text-sm">
              Ajman Free Zone, UAE • Licensed Wholesaler & Exporter
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
