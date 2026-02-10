'use client';

import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const contactInfo = [
  { icon: Phone, title: 'Phone Numbers', details: ['+971 56 499 9912', '+971 52 214 1349'], action: 'tel:+971564999912', actionText: 'Call Now', color: 'bg-green-500' },
  { icon: MessageCircle, title: 'WhatsApp', details: ['+971 56 499 9912'], action: 'https://wa.me/971564999912', actionText: 'Chat Now', color: 'bg-[#25D366]' },
  { icon: Mail, title: 'Email', details: ['ffpestcontrol@gmail.com'], action: 'mailto:ffpestcontrol@gmail.com', actionText: 'Send Email', color: 'bg-blue-500' },
  { icon: MapPin, title: 'Address', details: ['Office C1-1F-SF14425', 'Ajman Free Zone, UAE'], action: 'https://maps.google.com/?q=Ajman+Free+Zone', actionText: 'Get Directions', color: 'bg-red-500' },
];

const workingHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Sunday', hours: '10:00 AM - 4:00 PM' },
  { day: 'Emergency Service', hours: '24/7 Available', highlight: true },
];

export default function ContactPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#0d2615] to-[#0a1a0f]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1a0f]/50" />
        
        {/* Light rays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 left-[30%] w-[3px] h-full bg-gradient-to-b from-yellow-400/30 via-yellow-400/10 to-transparent"
            style={{ transform: 'rotate(10deg)', transformOrigin: 'top' }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-0 right-[25%] w-[4px] h-full bg-gradient-to-b from-green-400/40 via-green-400/10 to-transparent"
            style={{ transform: 'rotate(-12deg)', transformOrigin: 'top' }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 backdrop-blur-xl border border-yellow-400/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-400 text-sm">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Get In Touch<br />
              <span className="text-yellow-400">With Us</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Have a pest problem? We're here to help! Contact us 24/7 for emergency pest control services or to schedule a free inspection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1a0f] mb-3">{item.title}</h3>
                <div className="text-gray-600 mb-4 space-y-1">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-sm">{detail}</p>
                  ))}
                </div>
                <a 
                  href={item.action}
                  target={item.action.startsWith('http') ? '_blank' : undefined}
                  rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-block bg-[#0a1a0f] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
                >
                  {item.actionText}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Working Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#0a1a0f] mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-gray-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-gray-50"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-gray-50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Required *</label>
                  <select 
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-gray-50"
                  >
                    <option value="">Select a service</option>
                    <option value="cockroach">Cockroach Control</option>
                    <option value="rat">Rat & Mouse Control</option>
                    <option value="bedbug">Bedbug Treatment</option>
                    <option value="termite">Termite Control</option>
                    <option value="spider">Spider Control</option>
                    <option value="bees">Bees & Wasps Removal</option>
                    <option value="flea">Flea Treatment</option>
                    <option value="general">General Pest Control</option>
                    <option value="products">Product Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none bg-gray-50"
                    placeholder="Describe your pest problem or inquiry..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map & Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.0!2d55.5136!3d25.4052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI0JzE4LjciTiA1NcKwMzAnNDkuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="F & F Pest Control Location"
                ></iframe>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#0a1a0f] mb-6 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-green-500" />
                  Working Hours
                </h3>
                <div className="space-y-4">
                  {workingHours.map((item, index) => (
                    <div key={index} className={`flex justify-between items-center pb-4 ${index !== workingHours.length - 1 ? 'border-b border-gray-100' : ''}`}>
                      <span className={`font-medium ${item.highlight ? 'text-green-600' : 'text-gray-700'}`}>
                        {item.day}
                      </span>
                      <span className={item.highlight ? 'bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold' : 'text-gray-600'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-white/80 mb-6">
                  For emergency pest control services, call us now. We're available 24/7!
                </p>
                <div className="space-y-3">
                  <a href="tel:+971564999912" className="flex items-center gap-3 text-yellow-400 font-bold hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                    +971 56 499 9912
                  </a>
                  <a href="https://wa.me/971564999912" className="flex items-center gap-3 text-[#25D366] font-bold hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-gray-50 rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold text-[#0a1a0f] mb-4">F & F Pest Control Trading - F.Z.E</h3>
            <p className="text-gray-600 mb-2">License No: 48487 | Ajman Free Zone Authority</p>
            <p className="text-gray-600">Makani No: 4442612247</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
