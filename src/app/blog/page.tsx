'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { blogPosts, categories } from './posts';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#0d2615] to-[#0a1a0f]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Pest Control <span className="text-yellow-400">Blog</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Expert tips, guides, and insights about pest control in UAE. Learn how to protect your home and business from pests.
          </p>
          
          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-yellow-400"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-center text-gray-600 mb-8">Showing {filteredPosts.length} articles</p>
          
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-green-500/30 transition-all h-full flex flex-col">
                      {/* Image Placeholder */}
                      <div className="h-48 bg-gradient-to-br from-green-500/20 to-yellow-500/20 flex items-center justify-center">
                        <span className="text-6xl">📝</span>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Category */}
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3 w-fit">
                          {post.category}
                        </span>
                        
                        {/* Title */}
                        <h2 className="text-xl font-bold text-[#0a1a0f] mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        
                        {/* Excerpt */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        
                        {/* Meta */}
                        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>
                          <span className="flex items-center gap-1 text-green-600 font-medium group-hover:gap-2 transition-all">
                            Read More <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Professional Pest Control?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Our expert team is ready to help you with all your pest control needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
