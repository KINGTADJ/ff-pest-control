'use client';

import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';

export default function PrivacyPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0f] via-[#0d2615] to-[#0a1a0f]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy <span className="text-yellow-400">Policy</span>
            </h1>
            <p className="text-white/60">Last updated: February 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-gray-600">
              <div>
                <h2 className="text-2xl font-bold text-[#0a1a0f] mb-4">1. Information We Collect</h2>
                <p>F & F Pest Control Trading FZE collects information you provide directly to us, such as when you:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Request a quote or service</li>
                  <li>Contact us via phone, email, or WhatsApp</li>
                  <li>Fill out forms on our website</li>
                  <li>Subscribe to our communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a1a0f] mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Communicate with you about services, offers, and events</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a1a0f] mb-4">3. Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy or with your consent.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a1a0f] mb-4">4. Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a1a0f] mb-4">5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul className="list-none mt-2 space-y-2">
                  <li><strong>Phone:</strong> +971 52 214 1349</li>
                  <li><strong>Email:</strong> ffpestcontrol@gmail.com</li>
                  <li><strong>Address:</strong> Ajman Free Zone, UAE</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
