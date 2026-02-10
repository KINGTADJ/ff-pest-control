import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAGIC Pest Control Products | F & F Pest Control UAE",
  description: "Shop MAGIC pest control products. Cockroach killer spray, instant kill formula. Professional-grade pest control products available for wholesale in UAE.",
  keywords: "MAGIC pest control, cockroach killer spray, pest control products UAE, wholesale pest control, pest killer Ajman",
};

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "MAGIC Cockroach Killer Spray (Arabic)",
      nameAr: "MAGIC قاتل الصراصير",
      description: "قوة قاتلة وسريعة - Powerful and fast killing formula",
      size: "250ml",
      features: [
        "فعالية قوية - Powerful Effectiveness",
        "لحماية المنزل - Home Protection", 
        "يقضي فوراً - Instant Kill"
      ],
      image: "/images/product-arabic.jpg",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "MAGIC Cockroach Killer Spray (English)",
      nameAr: "MAGIC Cockroach Killer",
      description: "Instant Kill - Powerful Formula that Kills on Contact",
      size: "250ml",
      features: [
        "Powerful Formula",
        "Kills on Contact",
        "Eliminates Cockroaches"
      ],
      image: "/images/product-english.jpg",
      badge: "Popular"
    }
  ];

  const wholesaleInfo = [
    {
      icon: "📦",
      title: "Bulk Orders",
      description: "Special pricing for bulk orders. Contact us for wholesale rates."
    },
    {
      icon: "🚚",
      title: "UAE Delivery",
      description: "Fast delivery across all Emirates. Same-day delivery in Ajman."
    },
    {
      icon: "💳",
      title: "Flexible Payment",
      description: "Multiple payment options including cash, bank transfer, and credit."
    },
    {
      icon: "🤝",
      title: "Retailer Program",
      description: "Partner with us to sell MAGIC products in your store."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#FFD700] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-bold mb-6">
                Our Products
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                MAGIC Pest Control Products
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Professional-grade pest control products designed for instant results. 
                Our MAGIC formula kills pests on contact and provides long-lasting protection.
              </p>
              <a href="tel:+971564999912" className="btn-secondary inline-flex items-center gap-2">
                📞 Order Now: +971 56 499 9912
              </a>
            </div>
            <div className="hidden lg:flex justify-center gap-4">
              <div className="relative w-48 h-96">
                <Image
                  src="/images/product-arabic.jpg"
                  alt="MAGIC Product Arabic"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-48 h-96 mt-12">
                <Image
                  src="/images/product-english.jpg"
                  alt="MAGIC Product English"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Our Product Range
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-quality pest control products available for retail and wholesale purchase.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                {product.badge && (
                  <div className="bg-[#FFD700] text-[#1a1a1a] text-sm font-bold px-4 py-2 text-center">
                    {product.badge}
                  </div>
                )}
                <div className="p-8">
                  <div className="relative h-80 mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{product.name}</h3>
                  <p className="text-[#2D5A27] font-semibold mb-2">{product.nameAr}</p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-sm text-gray-500 mb-4">Size: {product.size}</p>
                  
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <h4 className="font-semibold text-[#1a1a1a] mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <span className="w-5 h-5 bg-[#2D5A27] rounded-full flex items-center justify-center text-white text-xs">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4">
                    <a href="tel:+971564999912" className="btn-primary flex-1 text-center text-sm py-3">
                      Order Now
                    </a>
                    <a href="https://wa.me/971564999912?text=Hi, I'm interested in ordering MAGIC products" className="btn-outline flex-1 text-center text-sm py-3 border-[#2D5A27] text-[#2D5A27] hover:bg-[#2D5A27] hover:text-white">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#FFD700] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-bold mb-4">
              Wholesale
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Wholesale & Bulk Orders
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              F & F Pest Control Trading FZE specializes in wholesale distribution of 
              pest control equipment and products. Partner with us for competitive rates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wholesaleInfo.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-[#2D5A27] rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Become a Distributor</h3>
              <p className="text-gray-200 mb-6">
                Interested in selling MAGIC products? Contact us to learn about our 
                distributor program and wholesale pricing.
              </p>
              <a href="mailto:hr.sbh@hotmail.com" className="btn-secondary inline-flex items-center gap-2">
                📧 hr.sbh@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
            Need Our Products?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to order MAGIC pest control products. Available for 
            retail purchase and wholesale distribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971564999912" className="btn-primary flex items-center justify-center gap-2">
              📞 Call: +971 56 499 9912
            </a>
            <a href="https://wa.me/971564999912" className="btn-secondary flex items-center justify-center gap-2">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
