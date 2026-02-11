'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, X, Menu, Bug } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePopup, setActivePopup] = useState<number | null>(null);
  const { t, isRTL } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.products'), href: '/products' },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'Blog', href: '/blog' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const contactInfo = [
    { icon: Phone, label: t('nav.call'), value: '+971 52 214 1349', href: 'tel:+971522141349' },
    { icon: Mail, label: t('nav.email'), value: 'info@ffpestcontrol.ae', href: 'mailto:info@ffpestcontrol.ae' },
    { icon: MapPin, label: t('nav.visit'), value: 'Ajman, UAE', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className={`rounded-2xl transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl shadow-black/10' 
            : 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/5'
        }`}>
          <div className="px-6 lg:px-8">
            <div className={`flex items-center justify-between h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
            
            {/* Logo */}
            <Link href="/" className={`flex items-center gap-2 group ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <Bug className="w-4 h-4 text-yellow-400" />
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-[#0a1a0f]' : 'text-white drop-shadow-sm'}`}>
                F & F
              </span>
              <span className="px-2 py-1 bg-yellow-500 text-black text-[10px] tracking-wider uppercase rounded font-bold group-hover:bg-yellow-400 transition-colors">
                Pest Control
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className={`hidden lg:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-yellow-400 ${
                    isScrolled ? 'text-gray-600' : 'text-white/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Contact Buttons + Language Switcher */}
            <div className={`hidden lg:flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* Language Switcher */}
              <LanguageSwitcher isScrolled={isScrolled} />
              
              {contactInfo.map((info, i) => (
                <div key={i} className="relative">
                  <button
                    onMouseEnter={() => setActivePopup(i)}
                    onMouseLeave={() => setActivePopup(null)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isScrolled 
                        ? 'bg-gray-100/80 text-gray-600 hover:bg-green-500 hover:text-white' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <info.icon className="w-4 h-4" />
                  </button>

                  {/* Popup */}
                  <AnimatePresence>
                    {activePopup === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute top-full mt-2 p-4 bg-white rounded-xl shadow-2xl border border-gray-100 min-w-[180px] z-50 ${isRTL ? 'left-0' : 'right-0'}`}
                      >
                        <div className="text-[10px] text-green-600 uppercase tracking-widest mb-1">{info.label}</div>
                        <a href={info.href} className="text-[#0a1a0f] font-medium text-sm hover:text-green-600 transition-colors">
                          {info.value}
                        </a>
                        <div className={`absolute -top-2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45 ${isRTL ? 'left-4' : 'right-4'}`} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <a
                href="tel:+971522141349"
                className={`px-5 py-2 bg-yellow-500 text-black text-sm font-bold rounded-full hover:bg-yellow-400 transition-all hover:shadow-lg hover:shadow-yellow-500/25 ${isRTL ? 'mr-2' : 'ml-2'}`}
              >
                {t('nav.callNow')}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#0a1a0f]/95 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)} />
            <motion.div
              initial={{ x: isRTL ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '-100%' : '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={`absolute top-0 bottom-0 w-80 bg-[#0a1a0f] p-8 pt-24 ${isRTL ? 'left-0' : 'right-0'}`}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: isRTL ? -30 : 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-4 text-2xl text-white hover:text-yellow-400 border-b border-white/10 ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <LanguageSwitcher variant="mobile" />
              </motion.div>
              
              <motion.a
                href="tel:+971522141349"
                onClick={() => setIsMenuOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="block mt-4 py-4 bg-yellow-500 text-black font-bold text-center rounded-xl"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                +971 52 214 1349
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
