'use client';

import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';

export default function TermsPage() {
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
              Terms of <span className="text-yellow-400">Service</span>
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
                <h2 className="text-2xl font-bold text-[#0a1a0f] mb-4">1. Acceptance of Terms</h2>
                <p>By using F & F Pest Control Trading FZE services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a1a0f] mb-4">2. Services</h2>
                <p>F & F Pest Control provides professional pest control services including but not limited to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Cockroach control</li>
                  <li>Rodent control</li>
                  <li>Bedbug treatment</li>
                  <li>Termite control</li>
                  <li>General pest control</li>
                  <li>Sale of pest control products</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a1a0f] mb-4">3. Service Guarantee</h2>
                <p>We stand behind the quality of our work. If you are not satisfied with our service, we will return to address the issue at no additional cost within the guarantee period.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a1a0f] mb-4">4. Payment Terms</h2>
                <p>Payment is due upon completion of service unless otherwise agreed. We accept cash, bank transfer, and major credit cards. All prices are in AED.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a1a0f] mb-4">5. Cancellation Policy</h2>
                <p>Appointments can be cancelled or rescheduled with at least 24 hours notice without charge. Late cancellations may incur a fee.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a1a0f] mb-4">6. Limitation of Liability</h2>
                <p>F & F Pest Control shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0a1a0f] mb-4">7. Contact Information</h2>
                <p>For questions about these Terms of Service, please contact us:</p>
                <ul className="list-none mt-2 space-y-2">
                  <li><strong>Company:</strong> F & F Pest Control Trading - F.Z.E</li>
                  <li><strong>License No:</strong> 48487</li>
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
