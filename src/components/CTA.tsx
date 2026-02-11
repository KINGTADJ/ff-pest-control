'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-700" />
      
      {/* Animated mesh */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">Limited Time Offer</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Ready for a<br />
            <span className="text-yellow-400">Pest-Free Home?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Book your free inspection today and take the first step towards a pest-free environment. 
            We're available 24/7!
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {['Free Consultation', 'No Hidden Fees', '1000+ Happy Customers'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="tel:+971522141349"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-full shadow-2xl shadow-yellow-500/30 hover:bg-yellow-400 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Call: +971 52 214 1349
            </motion.a>

            <motion.a
              href="https://wa.me/971522141349"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white hover:text-green-800 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
