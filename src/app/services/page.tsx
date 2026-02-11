'use client';

import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Phone, CheckCircle, Clock, Shield, Star, Zap, Users, Award, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const services = [
  { 
    num: '01', 
    title: 'Cockroach Control', 
    titleAr: 'مكافحة الصراصير',
    icon: '🪳', 
    slug: 'cockroach-control', 
    description: 'Cockroaches are one of the most common and resilient pests in UAE homes and businesses. Our comprehensive cockroach control service uses the powerful MAGIC formula to eliminate infestations at their source. We target all species including German, American, and Oriental cockroaches.',
    descriptionAr: 'الصراصير من أكثر الآفات شيوعاً في المنازل والشركات الإماراتية. خدمتنا الشاملة تستخدم تركيبة ماجيك القوية للقضاء على الإصابات من مصدرها.',
    features: [
      'Gel Bait Treatment - Attracts and kills entire colonies',
      'Spray Application - Professional-grade insecticides',
      'Crack & Crevice Treatment - Targets hidden nesting areas',
      'Preventive Barrier - Stops re-infestation',
      'Egg Elimination - Destroys eggs to break breeding cycle',
      'Kitchen Deep Treatment - Special focus on food areas'
    ],
    process: ['Inspection & Assessment', 'Treatment Plan', 'Application', 'Follow-up Visit'],
    warranty: '30-Day Guarantee',
    price: 'From AED 150',
    duration: '1-2 Hours',
    bestFor: 'Homes, Restaurants, Hotels, Warehouses'
  },
  { 
    num: '02', 
    title: 'Rat & Mouse Control', 
    titleAr: 'مكافحة الفئران والجرذان',
    icon: '🐀', 
    slug: 'rat-mouse-control', 
    description: 'Rodents pose serious health risks and can cause significant property damage. Our professional rodent control service includes thorough inspection, strategic baiting, humane trapping, and exclusion work to seal entry points and prevent future infestations.',
    descriptionAr: 'القوارض تشكل مخاطر صحية خطيرة ويمكن أن تسبب أضراراً كبيرة للممتلكات. خدمتنا المهنية تشمل الفحص الشامل والطُعم الاستراتيجي.',
    features: [
      'Complete Property Inspection - Identify all entry points',
      'Professional Bait Stations - Tamper-resistant and safe',
      'Snap & Live Trapping - Multiple capture methods',
      'Entry Point Sealing - Prevent re-entry permanently',
      'Sanitation Guidance - Reduce attractants',
      'Monitoring & Follow-up - Ensure complete elimination'
    ],
    process: ['Inspection', 'Baiting & Trapping', 'Exclusion Work', 'Monitoring'],
    warranty: '60-Day Guarantee',
    price: 'From AED 250',
    duration: '2-3 Hours',
    bestFor: 'Homes, Warehouses, Restaurants, Offices'
  },
  { 
    num: '03', 
    title: 'Bedbug Treatment', 
    titleAr: 'علاج بق الفراش',
    icon: '🛏️', 
    slug: 'bedbug-treatment', 
    description: 'Bed bugs are notoriously difficult to eliminate and can cause sleepless nights and skin irritation. Our comprehensive bedbug treatment combines heat treatment and chemical application for 100% elimination. We treat mattresses, furniture, and all hiding spots.',
    descriptionAr: 'بق الفراش من أصعب الآفات في القضاء عليها ويمكن أن تسبب ليالٍ بلا نوم. علاجنا الشامل يجمع بين المعالجة الحرارية والكيميائية للقضاء 100%.',
    features: [
      'Heat Treatment - Kills all life stages instantly',
      'Chemical Application - Residual protection',
      'Mattress & Box Spring Treatment - Deep cleaning',
      'Furniture Treatment - All upholstered items',
      'Crack & Crevice Application - Hidden areas',
      'Encasement Recommendation - Long-term prevention'
    ],
    process: ['Inspection', 'Preparation Guide', 'Treatment Day', 'Follow-up (14 days)'],
    warranty: '90-Day Guarantee',
    price: 'From AED 400',
    duration: '3-4 Hours',
    bestFor: 'Homes, Hotels, Hostels, Dormitories'
  },
  { 
    num: '04', 
    title: 'Termite Control', 
    titleAr: 'مكافحة النمل الأبيض',
    icon: '🪵', 
    slug: 'termite-control', 
    description: 'Termites cause billions in damage worldwide. Protect your property investment with our professional termite control service. We offer both pre-construction and post-construction treatments using advanced soil treatment and baiting systems.',
    descriptionAr: 'النمل الأبيض يسبب أضراراً بالمليارات عالمياً. احمِ استثمارك العقاري بخدمتنا المهنية لمكافحة النمل الأبيض.',
    features: [
      'Pre-Construction Treatment - New building protection',
      'Post-Construction Treatment - Existing structures',
      'Soil Treatment - Chemical barrier in foundation',
      'Wood Treatment - Direct application to affected areas',
      'Baiting Systems - Colony elimination technology',
      'Annual Inspection - Ongoing monitoring'
    ],
    process: ['Property Assessment', 'Treatment Design', 'Application', 'Annual Monitoring'],
    warranty: '5-Year Warranty',
    price: 'From AED 800',
    duration: '4-6 Hours',
    bestFor: 'Villas, Buildings, Warehouses, Construction Sites'
  },
  { 
    num: '05', 
    title: 'Ant Control', 
    titleAr: 'مكافحة النمل',
    icon: '🐜', 
    slug: 'ant-control', 
    description: 'Ant infestations can quickly get out of control as colonies can contain thousands of individuals. Our ant control service targets the entire colony, not just visible ants. We use specialized baits that workers carry back to eliminate the queen and entire nest.',
    descriptionAr: 'إصابات النمل يمكن أن تخرج عن السيطرة بسرعة حيث يمكن أن تحتوي المستعمرات على آلاف الأفراد. خدمتنا تستهدف المستعمرة بأكملها.',
    features: [
      'Colony Identification - Determine ant species',
      'Bait Application - Targets entire colony',
      'Perimeter Treatment - Outdoor barrier',
      'Indoor Treatment - Safe for families',
      'Entry Point Sealing - Physical barriers',
      'Follow-up Service - Ensure elimination'
    ],
    process: ['Species ID', 'Treatment Plan', 'Application', 'Follow-up'],
    warranty: '30-Day Guarantee',
    price: 'From AED 150',
    duration: '1-2 Hours',
    bestFor: 'Homes, Gardens, Restaurants, Food Storage'
  },
  { 
    num: '06', 
    title: 'Mosquito Control', 
    titleAr: 'مكافحة البعوض',
    icon: '🦟', 
    slug: 'mosquito-control', 
    description: 'Mosquitoes are not just annoying - they can transmit diseases. Our mosquito control service reduces populations around your property so you can enjoy outdoor spaces. We target breeding sites and adult mosquitoes with professional-grade treatments.',
    descriptionAr: 'البعوض ليس مزعجاً فحسب - بل يمكنه نقل الأمراض. خدمتنا تقلل أعداد البعوض حول ممتلكاتك حتى تستمتع بالمساحات الخارجية.',
    features: [
      'Larvicide Treatment - Target breeding water',
      'Fogging Service - Immediate knockdown',
      'Barrier Treatment - Residual protection',
      'Breeding Site Elimination - Remove standing water',
      'Garden Treatment - Plants & shrubs',
      'Monthly Maintenance Plans - Ongoing protection'
    ],
    process: ['Site Survey', 'Breeding Site ID', 'Treatment', 'Monthly Service'],
    warranty: 'Monthly Protection',
    price: 'From AED 200',
    duration: '1-2 Hours',
    bestFor: 'Villas, Gardens, Pools, Outdoor Events'
  },
  { 
    num: '07', 
    title: 'Fly Control', 
    titleAr: 'مكافحة الذباب',
    icon: '🪰', 
    slug: 'fly-control', 
    description: 'Flies spread disease and are unacceptable in food establishments. Our commercial fly control service includes UV fly traps, baiting systems, and sanitation recommendations to meet health department standards and protect your business reputation.',
    descriptionAr: 'الذباب ينشر الأمراض وغير مقبول في منشآت الأغذية. خدمتنا التجارية تشمل مصائد الأشعة فوق البنفسجية وأنظمة الطُعم.',
    features: [
      'UV Fly Traps - Discreet capture systems',
      'Fly Baiting - Effective elimination',
      'Exclusion Advice - Keep flies out',
      'Sanitation Audit - Reduce breeding',
      'Drain Treatment - Eliminate drain flies',
      'Regular Servicing - Maintain protection'
    ],
    process: ['Assessment', 'Trap Installation', 'Treatment', 'Regular Service'],
    warranty: 'Service Agreement',
    price: 'From AED 300',
    duration: '2-3 Hours',
    bestFor: 'Restaurants, Cafes, Food Processing, Hotels'
  },
  { 
    num: '08', 
    title: 'General Pest Control', 
    titleAr: 'مكافحة الآفات العامة',
    icon: '🛡️', 
    slug: 'general-pest-control', 
    description: 'Our comprehensive general pest control service protects your property from all common pests including cockroaches, ants, spiders, silverfish, and more. Perfect for regular maintenance to keep your home or business pest-free year-round.',
    descriptionAr: 'خدمتنا الشاملة تحمي ممتلكاتك من جميع الآفات الشائعة بما في ذلك الصراصير والنمل والعناكب. مثالية للصيانة المنتظمة.',
    features: [
      'Multi-Pest Treatment - All common pests',
      'Interior Treatment - All rooms covered',
      'Exterior Perimeter - Barrier protection',
      'Kitchen Focus - Food safety areas',
      'Bathroom Treatment - Moisture areas',
      'Flexible Plans - Monthly/Quarterly/Annual'
    ],
    process: ['Full Inspection', 'Treatment Plan', 'Application', 'Regular Visits'],
    warranty: 'Ongoing Guarantee',
    price: 'From AED 200/visit',
    duration: '1-2 Hours',
    bestFor: 'Homes, Offices, Shops, All Properties'
  },
];

const stats = [
  { icon: Users, value: '1000+', label: 'Happy Customers' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Star, value: '4.9', label: 'Customer Rating' },
  { icon: Zap, value: '24/7', label: 'Emergency Service' },
];

export default function ServicesPage() {
  const { language, isRTL } = useLanguage();

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#0d2615] to-[#0a1a0f]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1a0f]/50" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 left-[20%] w-[3px] h-full bg-gradient-to-b from-yellow-400/30 via-yellow-400/10 to-transparent"
            style={{ transform: 'rotate(15deg)', transformOrigin: 'top' }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-0 right-[30%] w-[4px] h-full bg-gradient-to-b from-green-400/40 via-green-400/10 to-transparent"
            style={{ transform: 'rotate(-10deg)', transformOrigin: 'top' }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`max-w-3xl ${isRTL ? 'mr-0 ml-auto text-right' : ''}`}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 backdrop-blur-xl border border-yellow-400/20 rounded-full mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-400 text-sm">{language === 'ar' ? 'خدماتنا' : 'Our Services'}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {language === 'ar' ? 'خدمات مكافحة' : 'Professional'}<br />
              <span className="text-yellow-400">{language === 'ar' ? 'الحشرات الاحترافية' : 'Pest Control'}</span> {language === 'ar' ? '' : 'Services'}
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-8">
              {language === 'ar' 
                ? 'حلول شاملة لمكافحة الآفات للمنازل والشركات في جميع أنحاء الإمارات. فنيونا المدربون يستخدمون منتجات ماجيك لنتائج مضمونة.'
                : 'Comprehensive pest control solutions for homes and businesses across UAE. Our trained technicians use MAGIC products for guaranteed results.'}
            </p>
            
            {/* Stats Row */}
            <div className={`flex flex-wrap gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {stats.map((stat, i) => (
                <div key={i} className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <stat.icon className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-bold">{stat.value}</span>
                  <span className="text-white/50 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 hover:border-green-500/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  
                  {/* Number Badge - Now in top corner, smaller */}
                  <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center`}>
                    <span className="text-green-600 font-bold text-lg">{service.num}</span>
                  </div>

                  {/* Header Row */}
                  <div className={`flex items-start gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-green-500/10 flex items-center justify-center text-3xl md:text-4xl flex-shrink-0 group-hover:scale-110 group-hover:bg-green-500 transition-all duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0a1a0f] group-hover:text-green-600 transition-colors mb-2">
                        {language === 'ar' ? service.titleAr : service.title}
                      </h3>
                      <div className={`flex flex-wrap gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full">
                          💰 {service.price}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                          <Clock className="w-3 h-3" /> {service.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                          <Shield className="w-3 h-3" /> {service.warranty}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                    {language === 'ar' ? service.descriptionAr : service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="mb-6">
                    <h4 className="font-bold text-[#0a1a0f] mb-3">{language === 'ar' ? 'ما يشمله العلاج:' : 'What\'s Included:'}</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className={`flex items-start gap-2 text-sm text-gray-600 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-2xl">
                    <h4 className="font-bold text-[#0a1a0f] mb-3">{language === 'ar' ? 'عمليتنا:' : 'Our Process:'}</h4>
                    <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {service.process.map((step, i) => (
                        <div key={i} className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <span className="w-6 h-6 rounded-full bg-green-600 text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
                          <span className="text-sm text-gray-700">{step}</span>
                          {i < service.process.length - 1 && <span className={`text-gray-300 mx-1 ${isRTL ? 'rotate-180' : ''}`}>→</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="mb-6">
                    <span className="text-sm text-gray-500">
                      <strong>{language === 'ar' ? 'الأفضل لـ:' : 'Best For:'}</strong> {service.bestFor}
                    </span>
                  </div>

                  {/* CTAs */}
                  <div className={`flex flex-wrap gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <a 
                      href="tel:+971522141349" 
                      className={`flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <Phone className="w-5 h-5" />
                      {language === 'ar' ? 'احصل على عرض سعر' : 'Get Free Quote'}
                    </a>
                    <a 
                      href="https://wa.me/971522141349" 
                      className={`flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#1da851] transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                    <a 
                      href="tel:+971522141349" 
                      className={`flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-full hover:border-green-600 hover:text-green-600 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <Phone className="w-5 h-5" />
                      +971 52 214 1349
                    </a>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🚨</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === 'ar' ? 'تحتاج خدمة طوارئ؟ اتصل الآن!' : 'Need Emergency Service? Call Now!'}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'احصل على فحص وعرض سعر مجاني اليوم. فريقنا جاهز لمساعدتك على مدار الساعة.'
                : 'Get a free inspection and quote today. Our team is ready to help you 24/7.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+971522141349" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors text-lg"
              >
                <Phone className="w-6 h-6" />
                +971 52 214 1349
              </a>
              <a 
                href="https://wa.me/971522141349" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-colors text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
