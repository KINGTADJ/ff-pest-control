'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+971 56 499 9912', href: 'tel:+971564999912' },
  { icon: Mail, label: 'Email', value: 'ffpestcontrol@gmail.com', href: 'mailto:ffpestcontrol@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Ajman Free Zone, UAE', href: '#' },
  { icon: Clock, label: 'Hours', value: '24/7 Available', href: '#' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 md:py-32 bg-[#0a1a0f] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #22c55e 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="contact-content">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6"
            >
              <span className="text-green-400 text-sm font-medium">Contact Us</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Get In Touch<br />
              <span className="text-yellow-400">Today</span>
            </h2>
            
            <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
              Ready to get rid of pests? Contact us now for a free consultation and quote. 
              We're available 24/7!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-green-500/30 transition-all group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/20">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{item.label}</p>
                    <p className="text-white font-bold text-lg group-hover:text-green-400 transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/971564999912"
                className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-xl shadow-green-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </motion.a>
            </div>

            {/* Contact Form */}
            <motion.form
              className="space-y-6 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-green-500/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+971 XX XXX XXXX"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-green-500/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-green-500/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-green-500/50 focus:outline-none transition-colors">
                  <option value="" className="bg-gray-900">Select a service</option>
                  <option value="cockroach" className="bg-gray-900">Cockroach Control</option>
                  <option value="rat" className="bg-gray-900">Rat & Mouse Control</option>
                  <option value="bedbug" className="bg-gray-900">Bedbug Treatment</option>
                  <option value="termite" className="bg-gray-900">Termite Control</option>
                  <option value="other" className="bg-gray-900">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your pest problem..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-green-500/50 focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition-colors shadow-xl shadow-yellow-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
