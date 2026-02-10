'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { 
    name: 'Ahmed Al Mansouri', 
    role: 'Homeowner, Ajman', 
    content: 'F & F Pest Control solved our cockroach problem completely. Their MAGIC spray is incredible! The team was professional and the results were immediate.',
    rating: 5,
    avatar: 'A'
  },
  { 
    name: 'Sarah Johnson', 
    role: 'Restaurant Owner, Dubai', 
    content: 'Professional service, fair prices, and excellent results. They helped us maintain our hygiene standards and keep our customers safe. Highly recommended!',
    rating: 5,
    avatar: 'S'
  },
  { 
    name: 'Mohammed Hassan', 
    role: 'Property Manager', 
    content: 'We use F & F for all our properties. Their 24/7 availability is unmatched. Quick response time and thorough work every single time.',
    rating: 5,
    avatar: 'M'
  },
  { 
    name: 'Fatima Al Rashid', 
    role: 'Villa Owner, Sharjah', 
    content: 'Had a serious termite problem that other companies couldn\'t solve. F & F came in and completely eliminated them. Six months later, still pest-free!',
    rating: 5,
    avatar: 'F'
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonials-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.testimonials-content',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-gradient-to-b from-[#0d2615] to-[#0a1a0f] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="testimonials-content">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6"
            >
              <span className="text-green-400 text-sm font-medium">Testimonials</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What Our<br />
              <span className="text-yellow-400">Customers Say</span>
            </h2>
          </div>

          {/* Testimonial Slider */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Quote icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-xl shadow-yellow-500/30">
                  <Quote className="w-8 h-8 text-black" />
                </div>
              </div>

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 pt-16 md:p-12 md:pt-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 italic">
                      "{testimonials[currentIndex].content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {testimonials[currentIndex].avatar}
                      </div>
                      <div className="text-left">
                        <p className="text-white font-bold">{testimonials[currentIndex].name}</p>
                        <p className="text-white/50 text-sm">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentIndex ? 'w-8 bg-yellow-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
