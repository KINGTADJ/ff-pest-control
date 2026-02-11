'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { Clock, User, ArrowLeft, Phone, MessageCircle, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../posts';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <section className="py-32 text-center">
          <h1 className="text-4xl font-bold text-[#0a1a0f] mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="text-green-600 font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </section>
      </PageLayout>
    );
  }

  // Get related posts (same category, exclude current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      const trimmed = line.trim();
      
      // Headings
      if (trimmed.startsWith('# ')) {
        return <h1 key={i} className="text-3xl font-bold text-[#0a1a0f] mt-8 mb-4">{trimmed.slice(2)}</h1>;
      }
      if (trimmed.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold text-[#0a1a0f] mt-6 mb-3">{trimmed.slice(3)}</h2>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-bold text-[#0a1a0f] mt-4 mb-2">{trimmed.slice(4)}</h3>;
      }
      
      // List items
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        return <li key={i} className="ml-6 text-gray-700 mb-1">{trimmed.slice(2)}</li>;
      }
      if (/^\d+\.\s/.test(trimmed)) {
        return <li key={i} className="ml-6 text-gray-700 mb-1 list-decimal">{trimmed.replace(/^\d+\.\s/, '')}</li>;
      }
      
      // Bold text - simple replacement
      if (trimmed.includes('**')) {
        const parts = trimmed.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={i} className="text-gray-700 mb-4 leading-relaxed">
            {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
          </p>
        );
      }
      
      // Links - convert [text](/url) to links
      if (trimmed.includes('[') && trimmed.includes('](/')) {
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts = [];
        let lastIndex = 0;
        let match;
        
        while ((match = linkRegex.exec(trimmed)) !== null) {
          if (match.index > lastIndex) {
            parts.push(trimmed.slice(lastIndex, match.index));
          }
          const href = match[2];
          const isInternal = href.startsWith('/');
          if (isInternal) {
            parts.push(<Link key={match.index} href={href} className="text-green-600 hover:underline">{match[1]}</Link>);
          } else {
            parts.push(<a key={match.index} href={href} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">{match[1]}</a>);
          }
          lastIndex = match.index + match[0].length;
        }
        if (lastIndex < trimmed.length) {
          parts.push(trimmed.slice(lastIndex));
        }
        
        return <p key={i} className="text-gray-700 mb-4 leading-relaxed">{parts}</p>;
      }
      
      // Empty line
      if (!trimmed) {
        return <div key={i} className="h-2" />;
      }
      
      // Regular paragraph
      return <p key={i} className="text-gray-700 mb-4 leading-relaxed">{trimmed}</p>;
    });
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#0d2615] to-[#0a1a0f]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-semibold rounded-full mb-4">
              {post.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-white/60">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span>{post.date}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <div className="prose-content">
                {renderContent(post.content)}
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-[#0a1a0f] mb-4">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-[#0a1a0f] mb-4">Share this article:</h4>
                <div className="flex gap-3">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://ff-pest-control.vercel.app/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://ff-pest-control.vercel.app/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://ff-pest-control.vercel.app/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </article>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* CTA Box */}
                <div className="bg-green-600 text-white rounded-2xl p-6">
                  <h3 className="font-bold text-lg mb-3">Need Pest Control?</h3>
                  <p className="text-white/80 text-sm mb-4">Get a free inspection and quote today.</p>
                  <a href="tel:+971522141349" className="flex items-center justify-center gap-2 w-full py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors text-sm">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a href="https://wa.me/971522141349" className="flex items-center justify-center gap-2 w-full py-3 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm mt-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
                
                {/* Quick Links */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-[#0a1a0f] mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><Link href="/services" className="text-gray-600 hover:text-green-600 text-sm">Our Services</Link></li>
                    <li><Link href="/products" className="text-gray-600 hover:text-green-600 text-sm">MAGIC Products</Link></li>
                    <li><Link href="/wholesale" className="text-gray-600 hover:text-green-600 text-sm">Wholesale</Link></li>
                    <li><Link href="/faq" className="text-gray-600 hover:text-green-600 text-sm">FAQ</Link></li>
                    <li><Link href="/contact" className="text-gray-600 hover:text-green-600 text-sm">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-bold text-[#0a1a0f] mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, i) => (
                <Link key={i} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                    <div className="h-40 bg-gradient-to-br from-green-500/20 to-yellow-500/20 flex items-center justify-center">
                      <span className="text-5xl">📝</span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-[#0a1a0f] group-hover:text-green-600 transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Rid of Pests?</h2>
          <p className="text-white/80 mb-8">Contact F & F Pest Control for professional service.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971522141349" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5" />
              +971 52 214 1349
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-colors">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
