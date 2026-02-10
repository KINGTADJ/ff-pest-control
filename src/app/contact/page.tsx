import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | F & F Pest Control UAE",
  description: "Contact F & F Pest Control for professional pest control services in UAE. Call +971564999912 or +971522141349. 24/7 emergency service available. Free quotes.",
  keywords: "contact pest control UAE, pest control phone number, emergency pest control Ajman, F&F Pest Control contact",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: "📞",
      title: "Phone Numbers",
      details: ["+971 56 499 9912", "+971 52 214 1349"],
      action: "tel:+971564999912",
      actionText: "Call Now"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: ["+971 56 499 9912"],
      action: "https://wa.me/971564999912",
      actionText: "Chat Now"
    },
    {
      icon: "📧",
      title: "Email",
      details: ["hr.sbh@hotmail.com"],
      action: "mailto:hr.sbh@hotmail.com",
      actionText: "Send Email"
    },
    {
      icon: "📍",
      title: "Address",
      details: ["Office C1-1F-SF14425", "Ajman Free Zone C1 Building", "Ajman, UAE"],
      action: "https://maps.google.com/?q=Ajman+Free+Zone",
      actionText: "Get Directions"
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#FFD700] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-bold mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have a pest problem? We're here to help! Contact us 24/7 for emergency 
              pest control services or to schedule a free inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <div className="text-gray-600 mb-4 space-y-1">
                  {item.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
                <a 
                  href={item.action}
                  target={item.action.startsWith("http") ? "_blank" : undefined}
                  rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-block bg-[#2D5A27] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#1e3d1a] transition-colors"
                >
                  {item.actionText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent outline-none transition-all"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Required *</label>
                  <select 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent outline-none transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Describe your pest problem or inquiry..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Hours */}
            <div className="space-y-8">
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
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-2">
                  <span className="text-2xl">🕐</span> Working Hours
                </h3>
                <div className="space-y-4">
                  {workingHours.map((item, index) => (
                    <div key={index} className={`flex justify-between items-center pb-4 ${index !== workingHours.length - 1 ? 'border-b border-gray-200' : ''}`}>
                      <span className={`font-medium ${item.day === 'Emergency Service' ? 'text-[#2D5A27]' : 'text-gray-700'}`}>
                        {item.day}
                      </span>
                      <span className={`${item.day === 'Emergency Service' ? 'bg-[#2D5A27] text-white px-3 py-1 rounded-full text-sm font-bold' : 'text-gray-600'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-[#2D5A27] rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-gray-200 mb-6">
                  For emergency pest control services, call us now. We're available 24/7!
                </p>
                <div className="space-y-3">
                  <a href="tel:+971564999912" className="flex items-center gap-3 text-[#FFD700] font-bold hover:text-white transition-colors">
                    <span className="text-2xl">📞</span>
                    +971 56 499 9912
                  </a>
                  <a href="https://wa.me/971564999912" className="flex items-center gap-3 text-[#25D366] font-bold hover:text-white transition-colors">
                    <span className="text-2xl">💬</span>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gray-100 rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">F & F Pest Control Trading - F.Z.E</h3>
            <p className="text-gray-600 mb-2">License No: 48487 | Ajman Free Zone Authority</p>
            <p className="text-gray-600">Makani No: 4442612247</p>
          </div>
        </div>
      </section>
    </>
  );
}
