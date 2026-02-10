'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import { Phone, MessageCircle, Package, Truck, CreditCard, Users } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'MAGIC Cockroach Killer Spray (Arabic Label)',
    nameAr: 'Powerful & Fast Killing Formula',
    description: 'Professional-grade cockroach killer with Arabic packaging for local market',
    size: '250ml',
    features: ['Powerful Effectiveness', 'Home Protection', 'Kills Instantly'],
    image: '/images/product-arabic.jpg',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'MAGIC Cockroach Killer Spray (English Label)',
    nameAr: 'Instant Kill Formula',
    description: 'Powerful formula that kills cockroaches on contact',
    size: '250ml',
    features: ['Powerful Formula', 'Kills on Contact', 'Eliminates Cockroaches'],
    image: '/images/product-english.jpg',
    badge: 'Popular'
  }
];

const wholesaleInfo = [
  { icon: Package, title: 'Bulk Orders', description: 'Special pricing for bulk orders. Contact us for wholesale rates.' },
  { icon: Truck, title: 'UAE Delivery', description: 'Fast delivery across all Emirates. Same-day delivery in Ajman.' },
  { icon: CreditCard, title: 'Flexible Payment', description: 'Multiple payment options including cash, bank transfer, and credit.' },
  { icon: Users, title: 'Retailer Program', description: 'Partner with us to sell MAGIC products in your store.' },
];

export default function ProductsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#0d2615] to-[#0a1a0f]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1a0f]/50" />
        
        {/* Light rays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 left-[20%] w-[3px] h-full bg-gradient-to-b from-yellow-400/30 via-yellow-400/10 to-transparent"
            style={{ transform: 'rotate(12deg)', transformOrigin: 'top' }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-0 right-[30%] w-[4px] h-full bg-gradient-to-b from-green-400/40 via-green-400/10 to-transparent"
            style={{ transform: 'rotate(-8deg)', transformOrigin: 'top' }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 backdrop-blur-xl border border-yellow-400/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-400 text-sm">Our Products</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              MAGIC<br />
              <span className="text-yellow-400">Pest Control</span> Products
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-8">
              Professional-grade pest control products designed for instant results. Our MAGIC formula kills pests on contact and provides long-lasting protection.
            </p>
            <a 
              href="tel:+971564999912" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Order Now: +971 56 499 9912
            </a>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0f] mb-4">
              Our Product <span className="text-green-600">Range</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-quality pest control products available for retail and wholesale purchase.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                {product.badge && (
                  <div className="bg-yellow-400 text-black text-sm font-bold px-4 py-2 text-center">
                    {product.badge}
                  </div>
                )}
                <div className="p-8">
                  <div className="relative h-72 mb-6 group-hover:scale-105 transition-transform duration-300 bg-white rounded-2xl flex items-center justify-center">
                    <div className="text-8xl">🧴</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1a0f] mb-2">{product.name}</h3>
                  <p className="text-green-600 font-semibold mb-2">{product.nameAr}</p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-sm text-gray-500 mb-4">Size: {product.size}</p>
                  
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <h4 className="font-semibold text-[#0a1a0f] mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                          <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4">
                    <a href="tel:+971564999912" className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-green-600 text-white font-bold text-sm rounded-full hover:bg-green-700 transition-colors">
                      <Phone className="w-4 h-4" />
                      Order Now
                    </a>
                    <a href="https://wa.me/971564999912?text=Hi, I'm interested in ordering MAGIC products" className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border-2 border-green-600 text-green-600 font-bold text-sm rounded-full hover:bg-green-600 hover:text-white transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section className="py-20 bg-[#0a1a0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-400/20 rounded-full mb-4">
              <span className="text-yellow-400 text-sm">Wholesale</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Wholesale & <span className="text-yellow-400">Bulk Orders</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              F & F Pest Control Trading FZE specializes in wholesale distribution of pest control equipment and products. Partner with us for competitive rates.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wholesaleInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-green-500/30 transition-colors"
              >
                <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Become a Distributor</h3>
              <p className="text-white/80 mb-6">
                Interested in selling MAGIC products? Contact us to learn about our distributor program and wholesale pricing.
              </p>
              <a href="mailto:ffpestcontrol@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors">
                📧 ffpestcontrol@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0f] mb-6">
              Need Our Products?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to order MAGIC pest control products. Available for retail purchase and wholesale distribution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971564999912" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                <Phone className="w-5 h-5" />
                Call: +971 56 499 9912
              </a>
              <a href="https://wa.me/971564999912" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1da851] transition-colors">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
