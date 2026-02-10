import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Services | F & F Pest Control UAE",
  description: "Professional pest control services in UAE. Cockroach, rat, bedbug, termite, spider control and more. 24/7 emergency service. Call +971564999912 for free quote.",
  keywords: "pest control services UAE, cockroach control, rat control, bedbug treatment, termite control, spider removal, pest extermination Ajman",
};

export default function ServicesPage() {
  const services = [
    {
      slug: "cockroach-control",
      icon: "🪳",
      title: "Cockroach Control",
      shortDesc: "Complete elimination using our powerful MAGIC formula.",
      description: "Cockroaches are not just disgusting - they carry diseases and contaminate food. Our professional cockroach control service uses our proprietary MAGIC formula to eliminate cockroaches at their source. We target breeding sites, apply residual treatments, and provide ongoing protection.",
      features: ["Instant Kill Formula", "Long-lasting Protection", "Safe for Families", "Kills Eggs & Adults"],
      image: "/images/product-english.jpg"
    },
    {
      slug: "rat-mouse-control",
      icon: "🐀",
      title: "Rat & Mouse Control",
      shortDesc: "Professional rodent elimination and prevention.",
      description: "Rats and mice can cause serious damage to your property and health. They chew through wires, contaminate food, and spread diseases. Our rodent control program includes inspection, baiting, trapping, and exclusion to ensure complete elimination.",
      features: ["Complete Inspection", "Professional Baiting", "Entry Point Sealing", "Follow-up Visits"],
      image: "/images/product-arabic.jpg"
    },
    {
      slug: "bedbug-treatment",
      icon: "🛏️",
      title: "Bedbug Treatment",
      shortDesc: "Thorough bedbug extermination for peaceful sleep.",
      description: "Bedbugs are master hitchhikers that can infest any home or hotel. Their bites cause itching and discomfort, and they reproduce rapidly. Our bedbug treatment includes heat treatment, chemical application, and mattress encasements for complete elimination.",
      features: ["Heat Treatment", "Chemical Application", "Mattress Protection", "100% Elimination"],
      image: "/images/product-english.jpg"
    },
    {
      slug: "termite-control",
      icon: "🪵",
      title: "Termite Control",
      shortDesc: "Protect your property from termite damage.",
      description: "Termites cause billions in property damage every year. They silently destroy wood structures from the inside out. Our termite control service includes thorough inspection, soil treatment, and barrier systems to protect your property for years.",
      features: ["Pre-construction Treatment", "Post-construction Treatment", "Soil Treatment", "Warranty Included"],
      image: "/images/product-arabic.jpg"
    },
    {
      slug: "spider-control",
      icon: "🕷️",
      title: "Spider Control",
      shortDesc: "Safe and effective spider removal.",
      description: "While most spiders are harmless, some species can be dangerous. Our spider control service removes existing spiders, eliminates webs, and applies treatments to prevent future infestations in your home or business.",
      features: ["Web Removal", "Targeted Treatment", "Indoor & Outdoor", "Prevention Program"],
      image: "/images/product-english.jpg"
    },
    {
      slug: "bees-wasps-removal",
      icon: "🐝",
      title: "Bees & Wasps Removal",
      shortDesc: "Safe removal of bee hives and wasp nests.",
      description: "Bee and wasp stings can be painful and dangerous, especially for those with allergies. Our trained technicians safely remove hives and nests from your property, including hard-to-reach areas like roof spaces and wall cavities.",
      features: ["Safe Removal", "Protective Equipment", "Hive Relocation", "Emergency Service"],
      image: "/images/product-arabic.jpg"
    },
    {
      slug: "flea-treatment",
      icon: "🐕",
      title: "Flea Treatment",
      shortDesc: "Complete flea elimination for pet owners.",
      description: "Fleas can make life miserable for pets and their owners. Our flea treatment targets all life stages - eggs, larvae, and adults - to break the breeding cycle and provide lasting relief.",
      features: ["All Life Stages", "Pet-Safe Products", "Carpet Treatment", "Yard Treatment"],
      image: "/images/product-english.jpg"
    },
    {
      slug: "general-pest-control",
      icon: "🛡️",
      title: "General Pest Control",
      shortDesc: "Comprehensive protection for all common pests.",
      description: "Our general pest control service provides protection against a wide range of common pests including ants, flies, mosquitoes, and more. Perfect for regular maintenance to keep your property pest-free year-round.",
      features: ["Monthly Service", "All Common Pests", "Interior & Exterior", "Guaranteed Results"],
      image: "/images/product-arabic.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#FFD700] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-bold mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Pest Control Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We offer comprehensive pest control solutions for homes and businesses 
              across the UAE. Our trained technicians use the latest techniques and 
              our powerful MAGIC products for guaranteed results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl">{service.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-[#1a1a1a] group-hover:text-[#2D5A27] transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-[#2D5A27] font-semibold">{service.shortDesc}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-5 h-5 bg-[#2D5A27] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="tel:+971564999912" className="btn-primary text-sm py-3 px-6">
                      Get Quote
                    </a>
                    <a href="https://wa.me/971564999912" className="btn-outline text-sm py-3 px-6 border-[#2D5A27] text-[#2D5A27] hover:bg-[#2D5A27] hover:text-white">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Why Choose F & F Pest Control?
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D5A27] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🏆
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">Licensed & Certified</h3>
              <p className="text-gray-600 text-sm">Fully licensed by Ajman Free Zone Authority</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D5A27] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                ⏰
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">24/7 Available</h3>
              <p className="text-gray-600 text-sm">Emergency service available anytime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D5A27] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                ✅
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">Guaranteed Results</h3>
              <p className="text-gray-600 text-sm">100% satisfaction or we return free</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D5A27] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                💰
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">Fair Pricing</h3>
              <p className="text-gray-600 text-sm">Competitive rates with no hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Pest Control? Call Us Now!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free inspection and quote today. Our team is ready to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971564999912" className="btn-secondary flex items-center justify-center gap-2">
              📞 +971 56 499 9912
            </a>
            <a href="tel:+971522141349" className="btn-outline flex items-center justify-center gap-2">
              📞 +971 52 214 1349
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
