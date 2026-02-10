'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.callNow': 'Call Now',
    'nav.call': 'Call',
    'nav.email': 'Email',
    'nav.visit': 'Visit',
    
    // Hero
    'hero.badge': 'Professional Pest Control',
    'hero.title1': 'F & F',
    'hero.title2': 'Pest Control',
    'hero.title3': 'Trading FZE',
    'hero.subtitle': 'Professional pest control services and wholesale distribution of premium pest control products across the UAE.',
    'hero.getQuote': 'Get Free Quote',
    'hero.callUs': 'Call Us',
    'hero.yearsExp': 'Years Experience',
    'hero.satisfaction': 'Satisfaction',
    'hero.available': 'Available',
    
    // Services
    'services.badge': 'Our Services',
    'services.title': 'Professional Pest Control',
    'services.title2': 'Services',
    'services.subtitle': 'Comprehensive pest management solutions for residential, commercial, and industrial properties across the UAE.',
    'services.viewAll': 'View All Services',
    'services.learnMore': 'Learn More',
    
    // Service Items
    'service.cockroach': 'Cockroach Control',
    'service.cockroach.desc': 'Complete elimination of cockroach infestations using professional-grade treatments.',
    'service.bedbugs': 'Bed Bug Treatment',
    'service.bedbugs.desc': 'Thorough bed bug extermination with heat treatment and chemical solutions.',
    'service.rodent': 'Rodent Control',
    'service.rodent.desc': 'Effective rat and mouse control for homes and businesses.',
    'service.termite': 'Termite Treatment',
    'service.termite.desc': 'Pre and post-construction termite protection services.',
    'service.ant': 'Ant Control',
    'service.ant.desc': 'Elimination of ant colonies and prevention of re-infestation.',
    'service.mosquito': 'Mosquito Control',
    'service.mosquito.desc': 'Comprehensive mosquito management for outdoor spaces.',
    'service.fly': 'Fly Control',
    'service.fly.desc': 'Commercial fly control solutions for food establishments.',
    'service.bird': 'Bird Control',
    'service.bird.desc': 'Humane bird deterrent and removal services.',
    
    // Products
    'products.badge': 'Our Products',
    'products.title': 'MAGIC Pest Control',
    'products.title2': 'Products',
    'products.subtitle': 'Professional-grade pest control products for instant results. Our MAGIC formula kills pests on contact.',
    'products.viewAll': 'View All Products',
    'products.viewProduct': 'View Product',
    'products.bestSeller': 'Best Seller',
    'products.popular': 'Popular',
    'products.orderNow': 'Order Now',
    'products.whatsapp': 'WhatsApp',
    
    // Product Names
    'product.arabic.name': 'MAGIC Cockroach Killer (Arabic Label)',
    'product.arabic.desc': 'Powerful & Fast Killing Formula - 250ml',
    'product.english.name': 'MAGIC Cockroach Killer',
    'product.english.desc': 'Instant Kill Formula - 250ml',
    'product.feature.powerful': 'Powerful Effectiveness',
    'product.feature.home': 'Home Protection',
    'product.feature.instant': 'Kills Instantly',
    'product.feature.formula': 'Powerful Formula',
    'product.feature.contact': 'Kills on Contact',
    'product.feature.eliminates': 'Eliminates Cockroaches',
    
    // About
    'about.badge': 'About Us',
    'about.title': 'F & F Pest Control',
    'about.title2': 'Trading FZE',
    'about.subtitle': 'Your trusted partner for professional pest control services and premium pest control products in the UAE.',
    'about.description': 'Based in Ajman Free Zone, we specialize in wholesale distribution of pest control equipment and products, as well as providing professional pest control services across all Emirates.',
    'about.whyChoose': 'Why Choose Us',
    'about.licensed': 'Licensed & Certified',
    'about.licensed.desc': 'Fully licensed by UAE authorities',
    'about.eco': 'Eco-Friendly Solutions',
    'about.eco.desc': 'Safe for your family and pets',
    'about.support': '24/7 Support',
    'about.support.desc': 'Always available when you need us',
    'about.guaranteed': 'Guaranteed Results',
    'about.guaranteed.desc': 'Satisfaction guaranteed or money back',
    
    // Contact
    'contact.badge': 'Contact Us',
    'contact.title': 'Get In Touch',
    'contact.title2': 'With Us',
    'contact.subtitle': 'Ready to eliminate pests? Contact us today for a free consultation and quote.',
    'contact.address': 'Address',
    'contact.address.value': 'Ajman Free Zone, Ajman, UAE',
    'contact.phone': 'Phone',
    'contact.emailLabel': 'Email',
    'contact.hours': 'Working Hours',
    'contact.hours.value': 'Saturday - Thursday: 8AM - 6PM',
    'contact.sendMessage': 'Send Message',
    'contact.name': 'Your Name',
    'contact.emailPlaceholder': 'Your Email',
    'contact.phonePlaceholder': 'Your Phone',
    'contact.message': 'Your Message',
    
    // Footer
    'footer.description': 'Professional pest control services and wholesale distribution of premium pest control products across the UAE.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contactUs': 'Contact Us',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // CTA
    'cta.title': 'Ready to Get Rid of Pests?',
    'cta.subtitle': 'Contact us today for a free consultation and quote. Our team is ready to help you.',
    'cta.getQuote': 'Get Free Quote',
    'cta.callNow': 'Call Now',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.viewMore': 'View More',
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.callNow': 'اتصل الآن',
    'nav.call': 'اتصال',
    'nav.email': 'البريد',
    'nav.visit': 'زيارة',
    
    // Hero
    'hero.badge': 'مكافحة حشرات احترافية',
    'hero.title1': 'إف آند إف',
    'hero.title2': 'مكافحة الحشرات',
    'hero.title3': 'للتجارة',
    'hero.subtitle': 'خدمات مكافحة حشرات احترافية وتوزيع جملة لمنتجات مكافحة الحشرات الممتازة في جميع أنحاء الإمارات.',
    'hero.getQuote': 'احصل على عرض مجاني',
    'hero.callUs': 'اتصل بنا',
    'hero.yearsExp': 'سنوات الخبرة',
    'hero.satisfaction': 'رضا العملاء',
    'hero.available': 'متاح',
    
    // Services
    'services.badge': 'خدماتنا',
    'services.title': 'خدمات مكافحة الحشرات',
    'services.title2': 'الاحترافية',
    'services.subtitle': 'حلول شاملة لإدارة الآفات للعقارات السكنية والتجارية والصناعية في جميع أنحاء الإمارات.',
    'services.viewAll': 'عرض جميع الخدمات',
    'services.learnMore': 'اعرف المزيد',
    
    // Service Items
    'service.cockroach': 'مكافحة الصراصير',
    'service.cockroach.desc': 'القضاء التام على الصراصير باستخدام علاجات احترافية.',
    'service.bedbugs': 'علاج بق الفراش',
    'service.bedbugs.desc': 'إبادة شاملة لبق الفراش بالمعالجة الحرارية والكيميائية.',
    'service.rodent': 'مكافحة القوارض',
    'service.rodent.desc': 'مكافحة فعالة للفئران والجرذان للمنازل والشركات.',
    'service.termite': 'معالجة النمل الأبيض',
    'service.termite.desc': 'خدمات الحماية من النمل الأبيض قبل وبعد البناء.',
    'service.ant': 'مكافحة النمل',
    'service.ant.desc': 'القضاء على مستعمرات النمل ومنع عودتها.',
    'service.mosquito': 'مكافحة البعوض',
    'service.mosquito.desc': 'إدارة شاملة للبعوض في المساحات الخارجية.',
    'service.fly': 'مكافحة الذباب',
    'service.fly.desc': 'حلول تجارية لمكافحة الذباب في المنشآت الغذائية.',
    'service.bird': 'مكافحة الطيور',
    'service.bird.desc': 'خدمات طرد وإزالة الطيور بطرق إنسانية.',
    
    // Products
    'products.badge': 'منتجاتنا',
    'products.title': 'منتجات ماجيك',
    'products.title2': 'لمكافحة الحشرات',
    'products.subtitle': 'منتجات مكافحة حشرات احترافية لنتائج فورية. تركيبة ماجيك تقتل الحشرات عند التلامس.',
    'products.viewAll': 'عرض جميع المنتجات',
    'products.viewProduct': 'عرض المنتج',
    'products.bestSeller': 'الأكثر مبيعاً',
    'products.popular': 'شائع',
    'products.orderNow': 'اطلب الآن',
    'products.whatsapp': 'واتساب',
    
    // Product Names
    'product.arabic.name': 'ماجيك قاتل الصراصير (عربي)',
    'product.arabic.desc': 'تركيبة قاتلة قوية وسريعة - 250 مل',
    'product.english.name': 'ماجيك قاتل الصراصير',
    'product.english.desc': 'تركيبة القتل الفوري - 250 مل',
    'product.feature.powerful': 'فعالية قوية',
    'product.feature.home': 'حماية المنزل',
    'product.feature.instant': 'يقتل فوراً',
    'product.feature.formula': 'تركيبة قوية',
    'product.feature.contact': 'يقتل عند التلامس',
    'product.feature.eliminates': 'يقضي على الصراصير',
    
    // About
    'about.badge': 'من نحن',
    'about.title': 'إف آند إف لمكافحة الحشرات',
    'about.title2': 'للتجارة',
    'about.subtitle': 'شريكك الموثوق لخدمات مكافحة الحشرات الاحترافية ومنتجات مكافحة الحشرات الممتازة في الإمارات.',
    'about.description': 'مقرنا في منطقة عجمان الحرة، نتخصص في توزيع الجملة لمعدات ومنتجات مكافحة الحشرات، بالإضافة إلى تقديم خدمات مكافحة حشرات احترافية في جميع الإمارات.',
    'about.whyChoose': 'لماذا تختارنا',
    'about.licensed': 'مرخص ومعتمد',
    'about.licensed.desc': 'مرخص بالكامل من السلطات الإماراتية',
    'about.eco': 'حلول صديقة للبيئة',
    'about.eco.desc': 'آمنة لعائلتك وحيواناتك الأليفة',
    'about.support': 'دعم على مدار الساعة',
    'about.support.desc': 'متاحون دائماً عندما تحتاجنا',
    'about.guaranteed': 'نتائج مضمونة',
    'about.guaranteed.desc': 'الرضا مضمون أو استرداد المال',
    
    // Contact
    'contact.badge': 'اتصل بنا',
    'contact.title': 'تواصل',
    'contact.title2': 'معنا',
    'contact.subtitle': 'مستعد للتخلص من الحشرات؟ اتصل بنا اليوم للحصول على استشارة وعرض سعر مجاني.',
    'contact.address': 'العنوان',
    'contact.address.value': 'منطقة عجمان الحرة، عجمان، الإمارات',
    'contact.phone': 'الهاتف',
    'contact.emailLabel': 'البريد الإلكتروني',
    'contact.hours': 'ساعات العمل',
    'contact.hours.value': 'السبت - الخميس: 8 صباحاً - 6 مساءً',
    'contact.sendMessage': 'إرسال رسالة',
    'contact.name': 'الاسم',
    'contact.emailPlaceholder': 'البريد الإلكتروني',
    'contact.phonePlaceholder': 'رقم الهاتف',
    'contact.message': 'رسالتك',
    
    // Footer
    'footer.description': 'خدمات مكافحة حشرات احترافية وتوزيع جملة لمنتجات مكافحة الحشرات الممتازة في جميع أنحاء الإمارات.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.contactUs': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    
    // CTA
    'cta.title': 'مستعد للتخلص من الحشرات؟',
    'cta.subtitle': 'اتصل بنا اليوم للحصول على استشارة وعرض سعر مجاني. فريقنا جاهز لمساعدتك.',
    'cta.getQuote': 'احصل على عرض مجاني',
    'cta.callNow': 'اتصل الآن',
    
    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.getStarted': 'ابدأ الآن',
    'common.viewMore': 'عرض المزيد',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check localStorage for saved language preference
    const saved = localStorage.getItem('ff-language') as Language;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    // Update document direction and lang
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('ff-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
