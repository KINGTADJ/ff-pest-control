'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Leaf, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Shield, text: 'Licensed & Insured', desc: 'License No: 48487' },
  { icon: Clock, text: '24/7 Emergency', desc: 'Always Available' },
  { icon: Leaf, text: 'Eco-Friendly', desc: 'Safe Products' },
  { icon: Award, text: 'Free Estimates', desc: 'No Hidden Fees' },
];

const stats = [
  { value: '1000+', label: 'Happy Customers' },
  { value: '24/7', label: 'Service' },
  { value: '100%', label: 'Satisfaction' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a1a0f] to-[#0d2615] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-500/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-green-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="about-content max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">About Us</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Your Trusted<br />
            <span className="text-yellow-400">Pest Control Partner</span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            F & F Pest Control Trading FZE is a licensed pest control company based in 
            Ajman Free Zone, UAE. Since our establishment in November 2025, we have 
            helped over 1,000 customers protect their homes and businesses with our 
            professional-grade services and MAGIC product line.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 md:gap-16 mb-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-green-500/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{feature.text}</h3>
                <p className="text-white/40 text-xs">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all hover:-translate-y-1 shadow-xl shadow-green-600/25"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
