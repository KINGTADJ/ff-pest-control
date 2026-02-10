'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { 
    num: '01', 
    title: 'Cockroach Control', 
    titleAr: 'مكافحة الصراصير',
    desc: 'Complete elimination of roaches from your property using professional-grade treatments.',
    descAr: 'القضاء التام على الصراصير باستخدام علاجات احترافية.',
    icon: '🪳', 
    slug: 'cockroach-control',
    features: ['Gel Bait Treatment', 'Spray Application', 'Crack & Crevice Treatment', '30-Day Guarantee'],
    featuresAr: ['علاج الطُعم الهلامي', 'رش المبيدات', 'معالجة الشقوق', 'ضمان 30 يوم'],
    price: 'From AED 150'
  },
  { 
    num: '02', 
    title: 'Ant Treatment', 
    titleAr: 'مكافحة النمل',
    desc: 'Professional ant colony elimination with targeted treatments that stop infestations at the source.',
    descAr: 'القضاء على مستعمرات النمل بعلاجات موجهة تقضي على المشكلة من جذورها.',
    icon: '🐜', 
    slug: 'ant-treatment',
    features: ['Colony Elimination', 'Barrier Protection', 'Indoor & Outdoor', 'Pet-Safe Options'],
    featuresAr: ['القضاء على المستعمرة', 'حماية حاجزة', 'داخلي وخارجي', 'آمن للحيوانات'],
    price: 'From AED 120'
  },
  { 
    num: '03', 
    title: 'Bed Bug Removal', 
    titleAr: 'إزالة بق الفراش',
    desc: 'Thorough bed bug detection and complete extermination using heat and chemical treatments.',
    descAr: 'كشف شامل لبق الفراش والقضاء الكامل عليه باستخدام المعالجة الحرارية والكيميائية.',
    icon: '🛏️', 
    slug: 'bed-bug-removal',
    features: ['Heat Treatment', 'Mattress Treatment', 'Full Room Service', 'Follow-up Inspection'],
    featuresAr: ['معالجة حرارية', 'معالجة المراتب', 'خدمة كاملة للغرفة', 'فحص متابعة'],
    price: 'From AED 300'
  },
  { 
    num: '04', 
    title: 'Rodent Control', 
    titleAr: 'مكافحة القوارض',
    desc: 'Safe and effective mouse and rat removal with exclusion services to prevent re-entry.',
    descAr: 'إزالة آمنة وفعالة للفئران والجرذان مع خدمات الإغلاق لمنع عودتها.',
    icon: '🐀', 
    slug: 'rodent-control',
    features: ['Trapping & Removal', 'Entry Point Sealing', 'Sanitation Service', 'Monitoring'],
    featuresAr: ['الاصطياد والإزالة', 'إغلاق نقاط الدخول', 'خدمة التعقيم', 'المراقبة'],
    price: 'From AED 200'
  },
  { 
    num: '05', 
    title: 'Termite Treatment', 
    titleAr: 'معالجة النمل الأبيض',
    desc: 'Protect your property from costly termite damage with pre and post-construction solutions.',
    descAr: 'احمِ ممتلكاتك من أضرار النمل الأبيض المكلفة بحلول ما قبل وبعد البناء.',
    icon: '🏠', 
    slug: 'termite-treatment',
    features: ['Soil Treatment', 'Wood Treatment', 'Baiting Systems', '5-Year Warranty'],
    featuresAr: ['معالجة التربة', 'معالجة الخشب', 'أنظمة الطُعم', 'ضمان 5 سنوات'],
    price: 'From AED 500'
  },
  { 
    num: '06', 
    title: 'Mosquito Control', 
    titleAr: 'مكافحة البعوض',
    desc: 'Reduce mosquito populations and enjoy your outdoor spaces without the nuisance of bites.',
    descAr: 'قلل من أعداد البعوض واستمتع بمساحاتك الخارجية بدون إزعاج اللدغات.',
    icon: '🦟', 
    slug: 'mosquito-control',
    features: ['Larvicide Treatment', 'Fogging Service', 'Breeding Site Removal', 'Monthly Plans'],
    featuresAr: ['معالجة اليرقات', 'خدمة التضبيب', 'إزالة مواقع التكاثر', 'خطط شهرية'],
    price: 'From AED 180'
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
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
        <div ref={containerRef} className={`flex gap-4 md:gap-6 px-4 md:px-12 lg:px-24 ${isRTL ? 'flex-row-reverse' : ''}`}>
          
          {/* Title Card */}
          <div className={`flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[400px] flex flex-col justify-center ${isRTL ? 'pl-4 md:pl-12 text-right' : 'pr-4 md:pr-12'}`}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-green-600 text-xs md:text-sm tracking-[0.2em] uppercase mb-2 md:mb-4"
            >
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1a0f] leading-tight mb-4 md:mb-6">
              {language === 'ar' ? 'حلول' : 'Pest'}<br />
              <span className="text-green-600">{language === 'ar' ? 'مكافحة الحشرات' : 'Solutions'}</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-4 md:mb-6">
              {language === 'ar' 
                ? 'خدمات مكافحة حشرات شاملة. مرر للاستكشاف.' 
                : 'Comprehensive pest control services for homes and businesses. Scroll to explore our solutions.'}
            </p>
            <div className={`flex items-center gap-3 md:gap-4 text-green-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-xs md:text-sm uppercase tracking-wider">{language === 'ar' ? 'مرر' : 'Swipe'}</span>
              <div className="w-8 md:w-12 h-[2px] bg-green-600" />
              <span className={`text-xl md:text-2xl ${isRTL ? 'rotate-180' : ''}`}>→</span>
            </div>
          </div>

          {/* Service Cards */}
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services`}
              className="service-card flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] group block"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`h-full p-5 md:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl border border-gray-100 hover:border-green-500/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${isRTL ? 'text-right' : ''}`}>
                  
                  {/* Number */}
                  <div className={`absolute top-4 md:top-6 text-5xl md:text-6xl font-bold text-gray-100 group-hover:text-green-500/10 transition-colors ${isRTL ? 'left-4 md:left-6' : 'right-4 md:right-6'}`}>
                    {service.num}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-green-500/10 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-green-500 transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="relative z-10 text-lg md:text-xl font-bold text-[#0a1a0f] mb-2 group-hover:text-green-600 transition-colors">
                    {language === 'ar' ? service.titleAr : service.title}
                  </h3>
                  <p className="relative z-10 text-gray-500 text-sm mb-4">
                    {language === 'ar' ? service.descAr : service.desc}
                  </p>

                  {/* Features List */}
                  <ul className="relative z-10 space-y-2 mb-4">
                    {(language === 'ar' ? service.featuresAr : service.features).map((feature, i) => (
                      <li key={i} className={`flex items-center gap-2 text-sm text-gray-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price Tag */}
                  <div className="relative z-10 inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full mb-4">
                    {service.price}
                  </div>

                  {/* Learn More */}
                  <div className={`relative z-10 flex items-center gap-2 text-green-600 font-medium text-sm group-hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>{language === 'ar' ? 'اعرف المزيد' : 'Learn More'}</span>
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </Link>
          ))}

          {/* CTA Card */}
          <div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] flex items-center">
            <div className={`w-full p-5 md:p-6 lg:p-8 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl md:rounded-3xl text-white relative overflow-hidden ${isRTL ? 'text-right' : ''}`}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl" />
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="relative z-10 text-xl md:text-2xl font-bold mb-3">
                {language === 'ar' ? 'تحتاج خدمة طوارئ؟' : 'Need Emergency Service?'}
              </h3>
              <p className="relative z-10 text-white/80 text-sm mb-4">
                {language === 'ar' 
                  ? 'متاحون على مدار الساعة لمشاكل الحشرات العاجلة. اتصل الآن للاستجابة الفورية.'
                  : "We're available 24/7 for urgent pest problems. Call now for immediate response."}
              </p>
              <ul className="relative z-10 space-y-2 mb-6">
                <li className={`flex items-center gap-2 text-white/90 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  {language === 'ar' ? 'خدمة طوارئ 24/7' : '24/7 Emergency Service'}
                </li>
                <li className={`flex items-center gap-2 text-white/90 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  {language === 'ar' ? 'استجابة سريعة' : 'Fast Response Time'}
                </li>
                <li className={`flex items-center gap-2 text-white/90 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  {language === 'ar' ? 'فنيون محترفون' : 'Professional Technicians'}
                </li>
              </ul>
              <a
                href="tel:+971564999912"
                className={`relative z-10 inline-flex items-center gap-2 px-5 py-3 bg-yellow-500 text-black font-bold text-sm rounded-full hover:bg-yellow-400 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <Phone className="w-4 h-4" />
                <span>{language === 'ar' ? 'اتصل الآن' : 'Call Now'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
