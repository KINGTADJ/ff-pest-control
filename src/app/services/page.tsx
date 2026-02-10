'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { Phone, Shield, Clock, CheckCircle } from 'lucide-react';

const services = [
  { num: '01', title: 'Cockroach Control', desc: 'Complete elimination using our powerful MAGIC formula. We target breeding sites and provide lasting protection.', icon: '🪳', slug: 'cockroach-control', features: ['Instant Kill Formula', 'Long-lasting Protection', 'Safe for Families', 'Kills Eggs & Adults'] },
  { num: '02', title: 'Rat & Mouse Control', desc: 'Professional rodent elimination and prevention. Complete inspection, baiting, trapping, and exclusion.', icon: '🐀', slug: 'rat-mouse-control', features: ['Complete Inspection', 'Professional Baiting', 'Entry Point Sealing', 'Follow-up Visits'] },
  { num: '03', title: 'Bedbug Treatment', desc: 'Thorough bedbug extermination including heat treatment and chemical application for peaceful sleep.', icon: '🛏️', slug: 'bedbug-treatment', features: ['Heat Treatment', 'Chemical Application', 'Mattress Protection', '100% Elimination'] },
  { num: '04', title: 'Termite Control', desc: 'Protect your property from termite damage with soil treatment and barrier systems.', icon: '🪵', slug: 'termite-control', features: ['Pre-construction Treatment', 'Post-construction Treatment', 'Soil Treatment', 'Warranty Included'] },
  { num: '05', title: 'Spider Control', desc: 'Safe and effective spider removal. Eliminate webs and prevent future infestations.', icon: '🕷️', slug: 'spider-control', features: ['Web Removal', 'Targeted Treatment', 'Indoor & Outdoor', 'Prevention Program'] },
  { num: '06', title: 'Bees & Wasps Removal', desc: 'Safe removal of bee hives and wasp nests from your property by trained technicians.', icon: '🐝', slug: 'bees-wasps-removal', features: ['Safe Removal', 'Protective Equipment', 'Hive Relocation', 'Emergency Service'] },
  { num: '07', title: 'Flea Treatment', desc: 'Complete flea elimination for pet owners. Targets all life stages for lasting relief.', icon: '🐕', slug: 'flea-treatment', features: ['All Life Stages', 'Pet-Safe Products', 'Carpet Treatment', 'Yard Treatment'] },
  { num: '08', title: 'General Pest Control', desc: 'Comprehensive protection against ants, flies, mosquitoes, and all common pests.', icon: '🛡️', slug: 'general-pest-control', features: ['Monthly Service', 'All Common Pests', 'Interior & Exterior', 'Guaranteed Results'] },
];

const benefits = [
  { icon: '🏆', title: 'Licensed & Certified', desc: 'Fully licensed by Ajman Free Zone Authority' },
  { icon: '⏰', title: '24/7 Available', desc: 'Emergency service available anytime' },
  { icon: '✅', title: 'Guaranteed Results', desc: '100% satisfaction or we return free' },
  { icon: '💰', title: 'Fair Pricing', desc: 'Competitive rates with no hidden fees' },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#0d2615] to-[#0a1a0f]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1a0f]/50" />
        
        {/* Light rays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 left-[20%] w-[3px] h-full bg-gradient-to-b from-yellow-400/30 via-yellow-400/10 to-transparent"
            style={{ transform: 'rotate(15deg)', transformOrigin: 'top' }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-0 right-[30%] w-[4px] h-full bg-gradient-to-b from-green-400/40 via-green-400/10 to-transparent"
            style={{ transform: 'rotate(-10deg)', transformOrigin: 'top' }}
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
              <span className="text-yellow-400 text-sm">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professional<br />
              <span className="text-yellow-400">Pest Control</span> Services
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Comprehensive pest control solutions for homes and businesses across UAE. Our trained technicians use MAGIC products for guaranteed results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 hover:border-green-500/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  {/* Number */}
                  <div className="absolute top-6 right-6 text-7xl font-bold text-gray-100 group-hover:text-green-500/10 transition-colors">
                    {service.num}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-green-500 transition-all duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0a1a0f] group-hover:text-green-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-500 mb-6">{service.desc}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-3">
                    <a 
                      href="tel:+971564999912" 
                      className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-bold text-sm rounded-full hover:bg-green-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Get Quote
                    </a>
                    <a 
                      href="https://wa.me/971564999912" 
                      className="px-5 py-2.5 border border-green-600 text-green-600 font-bold text-sm rounded-full hover:bg-green-600 hover:text-white transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0f] mb-4">
              Why Choose <span className="text-green-600">F & F</span>?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-[#0a1a0f] mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
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
              Need Pest Control? Call Us Now!
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free inspection and quote today. Our team is ready to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+971564999912" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +971 56 499 9912
              </a>
              <a 
                href="tel:+971522141349" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-green-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +971 52 214 1349
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
