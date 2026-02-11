'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bug, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const { t, isRTL, language } = useLanguage();

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/services', label: t('nav.services') },
    { href: '/products', label: t('nav.products') },
    { href: '/wholesale', label: 'Wholesale' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: t('nav.contact') },
  ];

  const services = [
    { href: '/services', label: t('service.cockroach') },
    { href: '/services', label: t('service.rodent') },
    { href: '/services', label: t('service.bedbugs') },
    { href: '/services', label: t('service.termite') },
  ];

  return (
    <footer className="relative bg-[#050d08] pt-20 pb-8 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
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
            <Link href="/" className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-xl shadow-green-500/20">
                <Bug className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <span className="text-white font-bold text-xl">F & F</span>
                <span className={`text-yellow-400 font-bold text-xl ${isRTL ? 'mr-1' : 'ml-1'}`}>
                  {language === 'ar' ? 'مكافحة الحشرات' : 'Pest Control'}
                </span>
              </div>
            </Link>
            
            <p className="text-white/50 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Socials */}
            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
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
            <h4 className="text-white font-bold text-lg mb-6">{t('footer.quickLinks')}</h4>
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
            <h4 className="text-white font-bold text-lg mb-6">{t('footer.services')}</h4>
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
            <h4 className="text-white font-bold text-lg mb-6">{t('footer.contactUs')}</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+971522141349" className={`flex items-center gap-3 text-white/50 hover:text-white transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Phone className="w-5 h-5 text-green-400" />
                  +971 52 214 1349
                </a>
              </li>
              <li>
                <a href="mailto:ffpestcontrol@gmail.com" className={`flex items-center gap-3 text-white/50 hover:text-white transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Mail className="w-5 h-5 text-green-400" />
                  ffpestcontrol@gmail.com
                </a>
              </li>
              <li>
                <div className={`flex items-start gap-3 text-white/50 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="w-5 h-5 text-green-400 mt-0.5" />
                  {t('contact.address.value')}
                </div>
              </li>
            </ul>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/971522141349"
              className={`mt-6 inline-flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              {language === 'ar' ? 'واتساب' : 'WhatsApp'}
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <p className="text-white/40 text-sm">
            © 2025 F & F Pest Control Trading FZE. {t('footer.rights')}
          </p>
          <div className={`flex gap-6 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <motion.a
        href="https://wa.me/971522141349"
        className={`fixed bottom-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 ${isRTL ? 'left-6' : 'right-6'}`}
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
