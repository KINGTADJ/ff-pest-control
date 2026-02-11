'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowDown, Play, Phone, Shield, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

// Bug SVG Component
const BugIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
    <path d="M12 2C10.34 2 9 3.34 9 5V6H6V8H7.07C6.41 8.59 6 9.47 6 10.5V11H4V13H6V14.5C6 15.07 6.08 15.63 6.22 16.16L4.5 17.88L5.91 19.29L7.23 17.97C7.89 18.61 8.73 19.07 9.67 19.28L9 22H11V19.94C11.32 19.98 11.66 20 12 20C12.34 20 12.68 19.98 13 19.94V22H15L14.33 19.28C15.27 19.07 16.11 18.61 16.77 17.97L18.09 19.29L19.5 17.88L17.78 16.16C17.92 15.63 18 15.07 18 14.5V13H20V11H18V10.5C18 9.47 17.59 8.59 16.93 8H18V6H15V5C15 3.34 13.66 2 12 2M10 10H14V12H10V10M10 14H14V16H10V14Z"/>
  </svg>
);

// Bubble Component
const Bubble = ({ delay, size, left, duration, xOffset }: { delay: number; size: number; left: number; duration: number; xOffset: number }) => (
  <motion.div
    className="absolute rounded-full bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 shadow-lg"
    style={{ width: size, height: size, left: `${left}%`, bottom: -size }}
    animate={{ y: [0, -1200], x: [0, xOffset, -xOffset, 0], scale: [1, 1.2, 0.8, 1], opacity: [0, 0.7, 0.5, 0] }}
    transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

// Pre-generated bubbles
const staticBubbles = [
  { id: 0, delay: 0, size: 20, left: 5, duration: 12, xOffset: 15, mobile: true },
  { id: 1, delay: 1.5, size: 30, left: 15, duration: 14, xOffset: -12, mobile: true },
  { id: 2, delay: 0.8, size: 18, left: 85, duration: 11, xOffset: 18, mobile: true },
  { id: 3, delay: 2.5, size: 25, left: 70, duration: 15, xOffset: -15, mobile: true },
  { id: 4, delay: 3, size: 22, left: 45, duration: 13, xOffset: 12, mobile: true },
  { id: 5, delay: 4, size: 28, left: 92, duration: 16, xOffset: -18, mobile: true },
  { id: 6, delay: 0.3, size: 28, left: 35, duration: 13, xOffset: 18, mobile: false },
  { id: 7, delay: 1, size: 38, left: 50, duration: 12, xOffset: 15, mobile: false },
  { id: 8, delay: 2, size: 30, left: 58, duration: 14, xOffset: -18, mobile: false },
  { id: 9, delay: 4, size: 24, left: 65, duration: 15, xOffset: 20, mobile: false },
  { id: 10, delay: 3.5, size: 32, left: 72, duration: 11, xOffset: -25, mobile: false },
  { id: 11, delay: 5, size: 18, left: 80, duration: 13, xOffset: 22, mobile: false },
  { id: 12, delay: 6, size: 28, left: 25, duration: 16, xOffset: -15, mobile: false },
  { id: 13, delay: 4.5, size: 35, left: 95, duration: 12, xOffset: 18, mobile: false },
  { id: 14, delay: 7, size: 22, left: 8, duration: 14, xOffset: -20, mobile: false },
  { id: 15, delay: 5.5, size: 36, left: 18, duration: 15, xOffset: 20, mobile: false },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t, isRTL, language } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-bg', { scale: 1.2 }, { scale: 1, duration: 2, ease: 'power3.out', delay: 2.3 });
      gsap.fromTo('.hero-content > *', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 2.5 });
      gsap.to('.hero-bg', {
        yPercent: 30,
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 }
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="hero-bg absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#0d2615] to-[#0a1a0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a0f] via-[#0a1a0f]/80 to-[#0a1a0f]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f]/50 via-transparent to-[#0a1a0f]/30" />
      </div>

      {/* Light Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-0 left-[15%] w-[3px] h-full bg-gradient-to-b from-yellow-400/40 via-yellow-400/10 to-transparent" style={{ transform: 'rotate(15deg)', transformOrigin: 'top' }} animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-0 left-[35%] w-[4px] h-full bg-gradient-to-b from-green-400/50 via-green-400/15 to-transparent" style={{ transform: 'rotate(-8deg)', transformOrigin: 'top' }} animate={{ opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <motion.div className="absolute top-0 right-[25%] w-[2px] h-full bg-gradient-to-b from-yellow-400/30 via-yellow-400/5 to-transparent" style={{ transform: 'rotate(10deg)', transformOrigin: 'top' }} animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        <motion.div className="absolute top-0 right-[10%] w-[3px] h-full bg-gradient-to-b from-green-400/35 via-green-400/10 to-transparent" style={{ transform: 'rotate(-5deg)', transformOrigin: 'top' }} animate={{ opacity: [0.3, 0.55, 0.3] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
      </div>

      {/* Animated Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {staticBubbles.map((bubble) => (
          <div key={bubble.id} className={bubble.mobile ? '' : 'hidden md:block'}>
            <Bubble {...bubble} />
          </div>
        ))}
      </div>

      {/* Floating Bugs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[4]">
        {[
          { left: 75, top: 10, size: 'w-8 h-10', opacity: 'text-yellow-400/8', rotate: -10, duration: 5, delay: 0, mobile: true },
          { left: 85, top: 30, size: 'w-10 h-12', opacity: 'text-green-400/10', rotate: 8, duration: 6, delay: 1, mobile: true },
          { left: 80, top: 55, size: 'w-7 h-9', opacity: 'text-yellow-400/6', rotate: -5, duration: 5.5, delay: 0.5, mobile: true },
          { left: 90, top: 75, size: 'w-9 h-11', opacity: 'text-green-400/8', rotate: 12, duration: 4.5, delay: 2, mobile: true },
          { left: 5, top: 5, size: 'w-10 h-12', opacity: 'text-yellow-400/8', rotate: -10, duration: 5, delay: 0, mobile: false },
          { left: 15, top: 8, size: 'w-8 h-10', opacity: 'text-green-400/6', rotate: 15, duration: 6, delay: 1, mobile: false },
        ].map((bug, i) => (
          <motion.div key={i} className={`absolute ${bug.mobile ? '' : 'hidden md:block'}`} style={{ left: `${bug.left}%`, top: `${bug.top}%` }}
            animate={{ y: [0, -15, 0], rotate: [bug.rotate, bug.rotate + 10, bug.rotate] }}
            transition={{ duration: bug.duration, repeat: Infinity, ease: "easeInOut", delay: bug.delay }}>
            <BugIcon className={`${bug.size} ${bug.opacity}`} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className={`hero-content max-w-7xl mx-auto px-6 md:px-12 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className={`max-w-2xl ${isRTL ? 'mr-0 ml-auto' : ''}`}>
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.7, duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-yellow-500/10 backdrop-blur-xl border border-yellow-400/20 rounded-full mb-4 md:mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-400/80 text-xs md:text-sm">{t('hero.badge')}</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 md:mb-6">
              {language === 'ar' ? (
                <>
                  {t('hero.title2')}<br />
                  <span className="text-yellow-400">{t('hero.title1')}</span>
                </>
              ) : (
                <>
                  Professional<br />
                  <span className="text-yellow-400">Pest Control</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-white/60 text-sm md:text-lg max-w-lg mb-6 md:mb-8">
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className={`flex flex-wrap items-center gap-2 md:gap-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <motion.a
                href="tel:+971522141349"
                className={`group px-4 py-2.5 md:px-6 md:py-3 bg-yellow-500 text-black text-xs md:text-sm font-bold rounded-full relative overflow-hidden ${isRTL ? 'flex-row-reverse' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={`relative z-10 flex items-center gap-1.5 md:gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Phone className="w-4 h-4" />
                  {t('hero.callUs')}
                  <span className={`transition-transform ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`}>→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.a>

              <motion.a
                href="#services"
                className={`group flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-2.5 border border-white/20 text-white text-xs md:text-sm rounded-full hover:bg-white/10 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className={`w-2.5 h-2.5 md:w-3 md:h-3 ${isRTL ? 'mr-0.5' : 'ml-0.5'}`} fill="white" />
                </div>
                <span>{language === 'ar' ? 'استكشف' : 'Explore'}</span>
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className={`flex items-center gap-4 md:gap-6 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center gap-2 text-white/50 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                <span className="text-xs md:text-sm">{t('about.licensed')}</span>
              </div>
              <div className={`flex items-center gap-2 text-white/50 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                <span className="text-xs md:text-sm">{t('about.support')}</span>
              </div>
            </div>

            {/* Stats */}
            <div className={`flex items-center gap-4 md:gap-6 mt-6 md:mt-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {[
                { value: '1000+', label: language === 'ar' ? 'عميل' : 'Customers' },
                { value: '24/7', label: language === 'ar' ? 'خدمة' : 'Service' },
                { value: '100%', label: language === 'ar' ? 'مضمون' : 'Guaranteed' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">{stat.value}</div>
                  <div className="text-white/40 text-[10px] md:text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.a href="#services" className="flex flex-col items-center text-white/40 hover:text-white/80 transition-colors" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <span className="text-xs tracking-[0.2em] uppercase mb-2">{language === 'ar' ? 'مرر' : 'Scroll'}</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg className="w-full h-16" preserveAspectRatio="none" viewBox="0 0 1200 60">
          <motion.path d="M0,30 C200,50 400,10 600,30 C800,50 1000,10 1200,30 L1200,60 L0,60 Z" fill="rgba(234, 179, 8, 0.1)"
            animate={{ d: ["M0,30 C200,50 400,10 600,30 C800,50 1000,10 1200,30 L1200,60 L0,60 Z", "M0,30 C200,10 400,50 600,30 C800,10 1000,50 1200,30 L1200,60 L0,60 Z", "M0,30 C200,50 400,10 600,30 C800,50 1000,10 1200,30 L1200,60 L0,60 Z"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a1a0f] to-transparent" />
      </div>

      {/* Bottom Bug Row */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-[3]">
        <div className="absolute bottom-2 left-0 right-0 flex justify-around items-end px-8 opacity-60">
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0 }}>
            <BugIcon className="w-8 h-10 text-yellow-400/10 rotate-[-8deg]" />
          </motion.div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}>
            <BugIcon className="w-10 h-14 text-green-400/15 rotate-[5deg]" />
          </motion.div>
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}>
            <BugIcon className="w-6 h-8 text-yellow-400/8 rotate-[-5deg] hidden sm:block" />
          </motion.div>
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}>
            <BugIcon className="w-9 h-12 text-green-400/12 rotate-[8deg] hidden sm:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
