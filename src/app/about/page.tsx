'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { Shield, Clock, Award, Users, Phone } from 'lucide-react';

const values = [
  { icon: '🎯', title: 'Excellence', description: 'We deliver the highest quality pest control services every time.' },
  { icon: '🤝', title: 'Integrity', description: 'Honest pricing, transparent service, and no hidden costs.' },
  { icon: '⚡', title: 'Speed', description: '24/7 availability with rapid response times for emergencies.' },
  { icon: '🌿', title: 'Safety', description: 'Eco-friendly solutions that are safe for your family and pets.' },
];

const timeline = [
  { year: 'Nov 2025', title: 'Company Founded', description: 'F & F Pest Control Trading FZE established in Ajman Free Zone.' },
  { year: 'Dec 2025', title: 'MAGIC Product Launch', description: 'Launched our proprietary MAGIC pest control product line.' },
  { year: 'Jan 2026', title: '500 Customers', description: 'Reached milestone of serving 500 satisfied customers.' },
  { year: 'Feb 2026', title: '1000+ Happy Customers', description: 'Growing to serve over 1000 homes and businesses across UAE.' },
];

const stats = [
  { value: '1000+', label: 'Customers Served' },
  { value: '24/7', label: 'Service Available' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '48487', label: 'License No.' },
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#0d2615] to-[#0a1a0f]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1a0f]/50" />
        
        {/* Light rays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 left-[25%] w-[3px] h-full bg-gradient-to-b from-green-400/30 via-green-400/10 to-transparent"
            style={{ transform: 'rotate(12deg)', transformOrigin: 'top' }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-0 right-[35%] w-[4px] h-full bg-gradient-to-b from-yellow-400/40 via-yellow-400/10 to-transparent"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-xl border border-green-400/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Trusted<br />
              <span className="text-yellow-400">Pest Control</span> Partner
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              F & F Pest Control Trading FZE is a licensed and insured pest control company based in Ajman Free Zone, protecting homes and businesses across UAE since 2025.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0f] mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                F & F Pest Control Trading FZE (License No: 48487) is a Free Zone Establishment with Limited Liability, registered with the Ajman Free Zone Authority. We specialize in professional pest control services and wholesale trading of pest control equipment.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our flagship product line, MAGIC, includes powerful pest control solutions designed for instant results. Whether you're dealing with cockroaches, rats, bedbugs, termites, or any other pests, we have the expertise and products to eliminate them.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-[#0a1a0f] mb-4">Company Details</h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li><strong>Trade Name:</strong> F & F Pest Control Trading - F.Z.E</li>
                  <li><strong>License No:</strong> 48487</li>
                  <li><strong>Legal Form:</strong> Free Zone Establishment - LLC</li>
                  <li><strong>Established:</strong> November 8, 2025</li>
                  <li><strong>Location:</strong> Ajman Free Zone, UAE</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-green-500/10 to-yellow-500/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🛡️</div>
                  <h3 className="text-2xl font-bold text-[#0a1a0f] mb-2">F & F Pest Control</h3>
                  <p className="text-green-600 font-bold">Protecting UAE Since 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0f] mb-4">
              Our Core <span className="text-green-600">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do at F & F Pest Control.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#0a1a0f] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0a1a0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Journey</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From our founding to today, we've been growing and improving every day.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-green-600 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-yellow-400 font-bold text-sm">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free inspection and quote. We're here to protect your home and business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+971564999912" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call: +971 56 499 9912
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-green-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
