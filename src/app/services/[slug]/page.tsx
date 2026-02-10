'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { Phone, MessageCircle, CheckCircle, Shield, Clock, Award, ArrowLeft } from 'lucide-react';

const servicesData: Record<string, {
  title: string;
  icon: string;
  description: string;
  longDescription: string;
  features: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}> = {
  'cockroach-control': {
    title: 'Cockroach Control',
    icon: '🪳',
    description: 'Complete elimination using our powerful MAGIC formula.',
    longDescription: 'Cockroaches are not just disgusting - they carry diseases and contaminate food. Our professional cockroach control service uses our proprietary MAGIC formula to eliminate cockroaches at their source. We target breeding sites, apply residual treatments, and provide ongoing protection.',
    features: ['Instant Kill Formula', 'Long-lasting Protection', 'Safe for Families', 'Kills Eggs & Adults', 'Targets Breeding Sites', 'Residual Treatment'],
    process: [
      { step: '1', title: 'Inspection', desc: 'Thorough inspection to identify infestation level and entry points.' },
      { step: '2', title: 'Treatment', desc: 'Apply MAGIC formula to target areas including cracks and crevices.' },
      { step: '3', title: 'Prevention', desc: 'Seal entry points and apply barrier treatments.' },
      { step: '4', title: 'Follow-up', desc: 'Monitor and re-treat if necessary for complete elimination.' },
    ],
    faqs: [
      { q: 'How long does the treatment last?', a: 'Our treatment provides protection for 2-3 months. We recommend quarterly treatments for ongoing protection.' },
      { q: 'Is it safe for children and pets?', a: 'Yes, once the treatment has dried (usually 1-2 hours), it is safe for children and pets.' },
      { q: 'Do I need to leave my home during treatment?', a: 'For most treatments, you can stay home. We recommend staying out of treated areas for 1-2 hours.' },
    ]
  },
  'rat-mouse-control': {
    title: 'Rat & Mouse Control',
    icon: '🐀',
    description: 'Professional rodent elimination and prevention.',
    longDescription: 'Rats and mice can cause serious damage to your property and health. They chew through wires, contaminate food, and spread diseases. Our rodent control program includes inspection, baiting, trapping, and exclusion to ensure complete elimination.',
    features: ['Complete Inspection', 'Professional Baiting', 'Entry Point Sealing', 'Follow-up Visits', 'Humane Options', 'Prevention Program'],
    process: [
      { step: '1', title: 'Assessment', desc: 'Identify rodent species, population size, and entry points.' },
      { step: '2', title: 'Baiting & Trapping', desc: 'Strategic placement of bait stations and traps.' },
      { step: '3', title: 'Exclusion', desc: 'Seal all entry points to prevent re-infestation.' },
      { step: '4', title: 'Monitoring', desc: 'Regular checks and maintenance of bait stations.' },
    ],
    faqs: [
      { q: 'How long does it take to eliminate rodents?', a: 'Most infestations are resolved within 2-4 weeks depending on severity.' },
      { q: 'Will dead rodents cause a smell?', a: 'We use techniques to minimize this risk and can remove any carcasses found.' },
      { q: 'How do you prevent them from coming back?', a: 'We seal entry points and provide recommendations for ongoing prevention.' },
    ]
  },
  'bedbug-treatment': {
    title: 'Bedbug Treatment',
    icon: '🛏️',
    description: 'Thorough bedbug extermination for peaceful sleep.',
    longDescription: 'Bedbugs are master hitchhikers that can infest any home or hotel. Their bites cause itching and discomfort, and they reproduce rapidly. Our bedbug treatment includes heat treatment, chemical application, and mattress encasements for complete elimination.',
    features: ['Heat Treatment', 'Chemical Application', 'Mattress Protection', '100% Elimination', 'Crack & Crevice Treatment', 'Follow-up Inspection'],
    process: [
      { step: '1', title: 'Inspection', desc: 'Thorough inspection of mattresses, furniture, and hiding spots.' },
      { step: '2', title: 'Preparation', desc: 'Client preparation including laundering bedding.' },
      { step: '3', title: 'Treatment', desc: 'Heat and/or chemical treatment of all affected areas.' },
      { step: '4', title: 'Prevention', desc: 'Install mattress encasements and provide prevention tips.' },
    ],
    faqs: [
      { q: 'How do I know if I have bedbugs?', a: 'Look for small blood spots on sheets, tiny dark droppings, and itchy bite marks.' },
      { q: 'Do I need to throw away my mattress?', a: 'Usually not. Our treatment can eliminate bedbugs from mattresses.' },
      { q: 'How many treatments are needed?', a: 'Most cases require 2-3 treatments spaced 10-14 days apart.' },
    ]
  },
  'termite-control': {
    title: 'Termite Control',
    icon: '🪵',
    description: 'Protect your property from termite damage.',
    longDescription: 'Termites cause billions in property damage every year. They silently destroy wood structures from the inside out. Our termite control service includes thorough inspection, soil treatment, and barrier systems to protect your property for years.',
    features: ['Pre-construction Treatment', 'Post-construction Treatment', 'Soil Treatment', 'Warranty Included', 'Barrier Systems', 'Annual Inspections'],
    process: [
      { step: '1', title: 'Inspection', desc: 'Complete property inspection using moisture meters and thermal imaging.' },
      { step: '2', title: 'Assessment', desc: 'Determine termite species and extent of damage.' },
      { step: '3', title: 'Treatment', desc: 'Apply soil treatment and install barrier systems.' },
      { step: '4', title: 'Warranty', desc: 'Provide warranty and schedule annual inspections.' },
    ],
    faqs: [
      { q: 'How do I know if I have termites?', a: 'Look for mud tubes, hollow-sounding wood, and discarded wings near windows.' },
      { q: 'How long does the treatment last?', a: 'Our treatment provides 5+ years of protection with annual inspections.' },
      { q: 'Can termite damage be repaired?', a: 'Yes, but treatment must be done first. We can refer you to contractors for repairs.' },
    ]
  },
};

const defaultService = {
  title: 'Pest Control Service',
  icon: '🛡️',
  description: 'Professional pest control service.',
  longDescription: 'Our professional pest control services are designed to eliminate pests and prevent future infestations. Contact us for a free inspection and quote.',
  features: ['Professional Service', 'Safe Products', 'Guaranteed Results', 'Follow-up Visits'],
  process: [
    { step: '1', title: 'Inspection', desc: 'Thorough inspection of your property.' },
    { step: '2', title: 'Treatment', desc: 'Professional treatment application.' },
    { step: '3', title: 'Prevention', desc: 'Preventive measures applied.' },
    { step: '4', title: 'Follow-up', desc: 'Follow-up visit to ensure success.' },
  ],
  faqs: [
    { q: 'How long does treatment take?', a: 'Most treatments take 1-2 hours depending on the size of your property.' },
    { q: 'Is it safe?', a: 'Yes, we use products that are safe for families and pets once dried.' },
  ]
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug] || defaultService;

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#0d2615] to-[#0a1a0f]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1a0f]/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-8xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+971564999912" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Get Free Quote
              </a>
              <a 
                href="https://wa.me/971564999912" 
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#0a1a0f] mb-6">About This Service</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.longDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-8 h-8 text-green-500" />
                  <h3 className="text-xl font-bold text-[#0a1a0f]">Licensed & Insured</h3>
                </div>
                <p className="text-gray-600">Fully licensed by Ajman Free Zone Authority. Your property is protected.</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-8 h-8 text-yellow-500" />
                  <h3 className="text-xl font-bold text-[#0a1a0f]">24/7 Emergency</h3>
                </div>
                <p className="text-gray-600">Available around the clock for urgent pest problems.</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="w-8 h-8 text-green-500" />
                  <h3 className="text-xl font-bold text-[#0a1a0f]">Satisfaction Guaranteed</h3>
                </div>
                <p className="text-gray-600">Not satisfied? We'll return and fix it at no extra cost.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0f] mb-4">
              Our <span className="text-green-600">Process</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 text-white text-2xl font-bold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#0a1a0f] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a0f] mb-4">
              Frequently Asked <span className="text-green-600">Questions</span>
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-[#0a1a0f] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
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
              Ready to Get Rid of Pests?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free inspection and quote. We're available 24/7!
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
                href="https://wa.me/971564999912" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1da851] transition-colors"
              >
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
