'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { 
    image: '/images/product-arabic.jpg', 
    name: 'MAGIC قاتل الصراصير', 
    desc: 'قوة قاتلة وسريعة - 250ml', 
    features: ['فعالية قوية', 'لحماية المنزل', 'يقضي فوراً'] 
  },
  { 
    image: '/images/product-english.jpg', 
    name: 'MAGIC Cockroach Killer', 
    desc: 'Instant Kill - 250ml', 
    features: ['Powerful Formula', 'Kills on Contact', 'Eliminates Cockroaches'] 
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.product-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.products-grid',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-[#050d08] overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6"
          >
            <span className="text-yellow-400 text-sm font-medium">Our Products</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            MAGIC Pest Control<br />
            <span className="text-yellow-400">Products</span>
          </h2>
          
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            Professional-grade pest control products for instant results. 
            Our MAGIC formula kills pests on contact.
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product-card group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Product Image */}
                <div className="relative h-72 mb-6 rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white/50 mb-4">{product.desc}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition-colors">
                  <ShoppingBag className="w-5 h-5" />
                  View Product
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold rounded-full transition-all"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
