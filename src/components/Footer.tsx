'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bug, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  { href: '/services/cockroach-control', label: 'Cockroach Control' },
  { href: '/services/rat-mouse-control', label: 'Rat & Mouse Control' },
  { href: '/services/bedbug-treatment', label: 'Bedbug Treatment' },
  { href: '/services/termite-control', label: 'Termite Control' },
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050d08] pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #22c55e 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-xl shadow-green-500/20">
                <Bug className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <span className="text-white font-bold text-xl">F & F</span>
                <span className="text-yellow-400 font-bold text-xl ml-1">Pest Control</span>
              </div>
            </Link>
            
            <p className="text-white/50 mb-6 leading-relaxed">
              Professional pest control services in UAE. Protecting your home and business since 2025.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:text-white hover:border-green-500/50 hover:bg-green-500/10 transition-all"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href}
                    className="text-white/50 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+971564999912" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                  +971 56 499 9912
                </a>
              </li>
              <li>
                <a href="mailto:ffpestcontrol@gmail.com" className="flex items-center gap-3 text-white/50 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-green-400" />
                  ffpestcontrol@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50">
                  <MapPin className="w-5 h-5 text-green-400 mt-0.5" />
                  Ajman Free Zone, UAE
                </div>
              </li>
            </ul>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/971564999912"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2025 F & F Pest Control Trading FZE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <motion.a
        href="https://wa.me/971564999912"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </footer>
  );
}
