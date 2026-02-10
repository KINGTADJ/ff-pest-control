'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    slug: 'how-to-prevent-cockroach-infestation',
    title: 'How to Prevent Cockroach Infestation in Your Home',
    excerpt: 'Learn the best practices to keep cockroaches away from your home. Our expert tips will help you maintain a pest-free environment.',
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    category: 'Prevention',
    icon: '🪳'
  },
  {
    slug: 'signs-of-termite-damage',
    title: 'Signs of Termite Damage You Shouldn\'t Ignore',
    excerpt: 'Termites can cause serious structural damage. Learn to identify the early warning signs before it\'s too late.',
    date: 'Feb 8, 2026',
    readTime: '4 min read',
    category: 'Termites',
    icon: '🏠'
  },
  {
    slug: 'bed-bug-travel-tips',
    title: 'How to Avoid Bringing Bed Bugs Home from Travel',
    excerpt: 'Traveling can expose you to bed bugs. Here\'s how to protect yourself and prevent an infestation.',
    date: 'Feb 5, 2026',
    readTime: '6 min read',
    category: 'Bed Bugs',
    icon: '🛏️'
  },
  {
    slug: 'pet-safe-pest-control',
    title: 'Pet-Safe Pest Control Solutions',
    excerpt: 'Keep your furry friends safe while eliminating pests. Discover pet-friendly pest control methods.',
    date: 'Feb 1, 2026',
    readTime: '4 min read',
    category: 'Safety',
    icon: '🐕'
  },
  {
    slug: 'why-diy-pest-control-fails',
    title: 'Why DIY Pest Control Often Fails',
    excerpt: 'Save time and money by understanding why professional pest control is often the better choice.',
    date: 'Jan 28, 2026',
    readTime: '5 min read',
    category: 'Tips',
    icon: '💡'
  },
  {
    slug: 'seasonal-pest-guide-uae',
    title: 'Seasonal Pest Guide for UAE Residents',
    excerpt: 'Different seasons bring different pests. Learn what to expect throughout the year in the UAE.',
    date: 'Jan 25, 2026',
    readTime: '7 min read',
    category: 'Guides',
    icon: '📅'
  },
];

export default function BlogPage() {
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
            style={{ transform: 'rotate(10deg)', transformOrigin: 'top' }}
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
              <span className="text-green-400 text-sm">Blog & Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Pest Control<br />
              <span className="text-yellow-400">Tips & Guides</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Expert advice and helpful tips to keep your home and business pest-free. Learn from the professionals at F & F Pest Control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Icon Header */}
                  <div className="h-48 bg-gradient-to-br from-green-500/10 to-yellow-500/10 flex items-center justify-center">
                    <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                      {post.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-green-500/10 text-green-600 text-xs font-bold rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold text-[#0a1a0f] mb-3 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-gray-400 text-xs">{post.date}</span>
                      <span className="flex items-center gap-1 text-green-600 text-sm font-medium group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#0a1a0f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Pest Control <span className="text-yellow-400">Tips</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Follow us on social media for the latest pest control tips, news, and special offers.
            </p>
            <a 
              href="https://wa.me/971564999912" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1da851] transition-colors"
            >
              Follow Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
