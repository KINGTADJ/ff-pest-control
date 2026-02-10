'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const founders = [
  {
    name: 'Sheikh Mohammed',
    role: 'Co-Founder & Chairman',
    image: '/images/team-1.jpg',
    bio: 'A visionary entrepreneur with deep roots in the UAE business community. Sheikh Mohammed brings extensive experience in strategic partnerships and business development, ensuring F & F Pest Control maintains the highest standards of service excellence across the Emirates.',
  },
  {
    name: 'Paul Ibegbuna',
    role: 'Co-Founder & General Manager',
    image: '/images/team-2.jpg',
    bio: 'With years of experience in pest control operations and management, Paul leads our day-to-day operations with dedication and expertise. His commitment to customer satisfaction and innovative pest control solutions has been instrumental in building F & F Pest Control\'s reputation.',
  },
];

interface FoundersProps {
  variant?: 'home' | 'about';
}

export default function Founders({ variant = 'home' }: FoundersProps) {
  const isHome = variant === 'home';
  
  return (
    <section className={`py-20 ${isHome ? 'bg-[#0a1a0f]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${isHome ? 'bg-yellow-500/10 border-yellow-400/20' : 'bg-green-500/10 border-green-400/20'} backdrop-blur-xl border rounded-full mb-4`}>
            <span className={`w-2 h-2 ${isHome ? 'bg-yellow-400' : 'bg-green-400'} rounded-full animate-pulse`} />
            <span className={`${isHome ? 'text-yellow-400' : 'text-green-600'} text-sm`}>Leadership</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold ${isHome ? 'text-white' : 'text-[#0a1a0f]'} mb-4`}>
            Meet Our <span className={isHome ? 'text-yellow-400' : 'text-green-600'}>Founders</span>
          </h2>
          <p className={`${isHome ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            The visionary leaders behind F & F Pest Control, committed to protecting homes and businesses across the UAE.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className={`h-full rounded-3xl overflow-hidden ${isHome ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-100'} hover:shadow-2xl transition-all duration-500`}>
                {/* Image - Full visible, no crop */}
                <div className={`relative ${isHome ? 'bg-gradient-to-b from-white/5 to-transparent' : 'bg-gray-100'} flex items-center justify-center p-4`}>
                  <div className="relative w-full aspect-[3/4] max-h-[400px]">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-3">
                    {founder.role}
                  </span>
                  <h3 className={`text-2xl font-bold ${isHome ? 'text-white' : 'text-[#0a1a0f]'} mb-3`}>
                    {founder.name}
                  </h3>
                  <p className={`${isHome ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>
                    {founder.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
