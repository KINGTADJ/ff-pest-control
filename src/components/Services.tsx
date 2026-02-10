'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { num: '01', title: 'Cockroach Control', desc: 'Complete elimination of roaches from your property', icon: '🪳', slug: 'cockroach-control' },
  { num: '02', title: 'Ant Treatment', desc: 'Professional ant colony elimination and prevention', icon: '🐜', slug: 'ant-treatment' },
  { num: '03', title: 'Bed Bug Removal', desc: 'Thorough bed bug detection and extermination', icon: '🛏️', slug: 'bed-bug-removal' },
  { num: '04', title: 'Rodent Control', desc: 'Safe and effective mouse and rat removal', icon: '🐀', slug: 'rodent-control' },
  { num: '05', title: 'Termite Treatment', desc: 'Protect your property from termite damage', icon: '🏠', slug: 'termite-treatment' },
  { num: '06', title: 'Mosquito Control', desc: 'Reduce mosquito populations around your home', icon: '🦟', slug: 'mosquito-control' },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll for services
      const container = containerRef.current;
      if (!container) return;

      gsap.to(container, {
        x: () => -(container.scrollWidth - window.innerWidth + 100),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${container.scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Staggered reveal for items
      gsap.fromTo('.service-card',
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative bg-white overflow-hidden">
      <div className="h-screen flex items-center">
        <div ref={containerRef} className="flex gap-4 md:gap-8 px-4 md:px-12 lg:px-24">
          
          {/* Title Card */}
          <div className="flex-shrink-0 w-[280px] sm:w-[350px] lg:w-[500px] flex flex-col justify-center pr-4 md:pr-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-green-600 text-xs md:text-sm tracking-[0.2em] uppercase mb-2 md:mb-4"
            >
              Our Services
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0a1a0f] leading-tight mb-4 md:mb-6">
              Pest<br />
              <span className="text-green-600">Solutions</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-lg mb-4 md:mb-8">
              Comprehensive pest control services. Scroll to explore.
            </p>
            <div className="flex items-center gap-3 md:gap-4 text-green-600">
              <span className="text-xs md:text-sm uppercase tracking-wider">Swipe</span>
              <div className="w-8 md:w-12 h-[2px] bg-green-600" />
              <span className="text-xl md:text-2xl">→</span>
            </div>
          </div>

          {/* Service Cards */}
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="service-card flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[400px] group block"
            >
              <motion.div
                whileHover={{ y: -20 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="h-full p-5 md:p-8 lg:p-10 bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl border border-gray-100 hover:border-green-500/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  
                  {/* Number */}
                  <div className="absolute top-4 md:top-6 right-4 md:right-6 text-5xl md:text-7xl font-bold text-gray-100 group-hover:text-green-500/10 transition-colors">
                    {service.num}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-green-500/10 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-8 group-hover:scale-110 group-hover:bg-green-500 transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="relative z-10 text-lg md:text-2xl font-bold text-[#0a1a0f] mb-2 md:mb-4 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="relative z-10 text-gray-500 text-sm md:text-base mb-4 md:mb-8">
                    {service.desc}
                  </p>

                  {/* Learn More - hidden on mobile */}
                  <div className="hidden md:flex relative z-10 items-center gap-2 text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </Link>
          ))}

          {/* CTA Card */}
          <div className="flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[400px] flex items-center">
            <div className="w-full p-5 md:p-8 lg:p-10 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl md:rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl" />
              <h3 className="relative z-10 text-xl md:text-3xl font-bold mb-3 md:mb-4">
                Need Emergency Service?
              </h3>
              <p className="relative z-10 text-white/80 text-sm md:text-base mb-4 md:mb-8">
                We're available 24/7 for urgent pest problems.
              </p>
              <a
                href="tel:+971564999912"
                className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-4 bg-yellow-500 text-black font-bold text-sm md:text-base rounded-full hover:bg-yellow-400 transition-colors"
              >
                <span>Call Now</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
