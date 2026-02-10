'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Shield, Clock, Leaf, Award } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Clock, text: '24/7 Emergency' },
  { icon: Leaf, text: 'Eco-Friendly' },
  { icon: Award, text: 'Free Estimates' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo('.about-content',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
          }
        }
      );

      // Right images animation
      gsap.fromTo('.about-images',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.about-images',
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
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="about-content space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full"
            >
              <span className="text-green-400 text-sm font-medium">About Us</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Your Trusted<br />
              <span className="text-yellow-400">Pest Control Partner</span><br />
              Since 2025
            </h2>

            <p className="text-white/60 text-lg leading-relaxed">
              F & F Pest Control Trading FZE is a licensed pest control company based in 
              Ajman Free Zone, UAE. Since our establishment in November 2025, we have 
              helped over 1,000 customers protect their homes and businesses.
            </p>

            <p className="text-white/60 text-lg leading-relaxed">
              We specialize in professional-grade pest control equipment and our own 
              MAGIC product line. Our certified technicians are available 24/7.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-white/80 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
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

          {/* Images */}
          <div className="about-images grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.div 
                className="relative h-48 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/images/team-1.jpg" 
                  alt="Team Member" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
              
              <motion.div 
                className="relative h-64 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/images/product-arabic.jpg" 
                  alt="MAGIC Product" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </div>
            
            <div className="space-y-4 pt-8">
              <motion.div 
                className="relative h-64 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/images/team-2.jpg" 
                  alt="Team Member" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
              
              {/* Stats Card */}
              <motion.div 
                className="p-6 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-2xl text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-4xl font-bold text-yellow-400 mb-2">1000+</p>
                <p className="text-white/80">Happy Customers Served</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
