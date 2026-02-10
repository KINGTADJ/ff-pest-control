import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: "🪳",
      title: "Cockroach Control",
      description: "Complete elimination of cockroaches using our powerful MAGIC formula. Fast-acting, long-lasting protection.",
      href: "/services/cockroach-control"
    },
    {
      icon: "🐀",
      title: "Rat & Mouse Control",
      description: "Professional rodent control solutions. We eliminate rats and mice and prevent future infestations.",
      href: "/services/rat-mouse-control"
    },
    {
      icon: "🛏️",
      title: "Bedbug Treatment",
      description: "Thorough bedbug extermination for homes and hotels. Sleep peacefully again with our proven methods.",
      href: "/services/bedbug-treatment"
    },
    {
      icon: "🪵",
      title: "Termite Control",
      description: "Protect your property from termite damage. Complete inspection and treatment services.",
      href: "/services/termite-control"
    },
    {
      icon: "🕷️",
      title: "Spider Control",
      description: "Safe and effective spider removal for your home or business. Keep your spaces spider-free.",
      href: "/services/spider-control"
    },
    {
      icon: "🐝",
      title: "Bees & Wasps Removal",
      description: "Safe removal of bee hives and wasp nests. Protect your family from painful stings.",
      href: "/services/bees-wasps-removal"
    },
  ];

  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "24/7", label: "Service Available" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "2025", label: "Established" },
  ];

  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      role: "Homeowner, Ajman",
      content: "F & F Pest Control solved our cockroach problem completely. Their MAGIC spray is incredible - we haven't seen a single pest since!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Restaurant Owner, Dubai",
      content: "Professional service, fair prices, and excellent results. They helped us maintain a pest-free kitchen. Highly recommended!",
      rating: 5,
    },
    {
      name: "Mohammed Hassan",
      role: "Property Manager",
      content: "We use F & F for all our properties. Their 24/7 availability and quick response time is unmatched in the UAE.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFD700] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2D5A27] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block bg-[#FFD700] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-bold mb-6">
                🏆 #1 Pest Control in Ajman
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional<br />
                <span className="text-[#FFD700]">Pest Control</span><br />
                Services in UAE
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your home and business from pests with F & F Pest Control. 
                We offer 24/7 professional pest control services with our powerful 
                MAGIC product line. Fast, effective, and affordable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+971564999912" className="btn-secondary text-center flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: +971 56 499 9912
                </a>
                <Link href="/services" className="btn-outline text-center">
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px]">
                <Image
                  src="/images/product-english.jpg"
                  alt="MAGIC Cockroach Killer Spray"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-[#1a1a1a] p-4 rounded-xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2D5A27] rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold">Instant Kill</p>
                    <p className="text-sm text-gray-500">Kills on Contact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#2D5A27] py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">{stat.number}</p>
                <p className="text-white text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50" id="services">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#2D5A27]/10 text-[#2D5A27] px-4 py-2 rounded-full text-sm font-bold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Complete Pest Control Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive pest control services to protect your home and business. 
              Our trained professionals use the latest techniques and products.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="service-card group">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#2D5A27] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-[#2D5A27] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#2D5A27]/10 text-[#2D5A27] px-4 py-2 rounded-full text-sm font-bold mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
                Your Trusted Pest Control Partner Since 2025
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                F & F Pest Control Trading FZE is a licensed pest control company based in 
                Ajman Free Zone, UAE. Since our establishment in November 2025, we have 
                helped over 1,000 customers protect their homes and businesses from pests.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We specialize in the wholesale trading of professional-grade pest control 
                equipment and our own MAGIC product line. Our team of certified technicians 
                is available 24/7 to handle any pest emergency.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2D5A27] rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2D5A27] rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="font-semibold">24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2D5A27] rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="font-semibold">Eco-Friendly</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2D5A27] rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span className="font-semibold">Free Estimates</span>
                </div>
              </div>
              <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/team-1.jpg"
                    alt="F & F Pest Control Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/product-arabic.jpg"
                    alt="MAGIC Pest Control Product"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/team-2.jpg"
                    alt="F & F Pest Control Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#2D5A27] rounded-2xl p-6 text-white text-center">
                  <p className="text-4xl font-bold text-[#FFD700] mb-2">1000+</p>
                  <p className="text-sm">Happy Customers Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-[#1a1a1a]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#FFD700] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-bold mb-4">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              MAGIC Pest Control Products
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional-grade pest control products for instant results. 
              Our MAGIC formula kills pests on contact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="relative h-80 mb-6">
                <Image
                  src="/images/product-arabic.jpg"
                  alt="MAGIC Cockroach Killer - Arabic"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">MAGIC قاتل الصراصير</h3>
              <p className="text-gray-600 mb-4">قوة قاتلة وسريعة - 250ml</p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#2D5A27]">✓</span> فعالية قوية
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2D5A27]">✓</span> لحماية المنزل
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2D5A27]">✓</span> يقضي فوراً
                </li>
              </ul>
              <Link href="/products" className="btn-primary w-full justify-center">
                View Product
              </Link>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="relative h-80 mb-6">
                <Image
                  src="/images/product-english.jpg"
                  alt="MAGIC Cockroach Killer - English"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">MAGIC Cockroach Killer Spray</h3>
              <p className="text-gray-600 mb-4">Instant Kill - 250ml</p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#2D5A27]">✓</span> Powerful Formula
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2D5A27]">✓</span> Kills on Contact
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2D5A27]">✓</span> Eliminates Cockroaches
                </li>
              </ul>
              <Link href="/products" className="btn-primary w-full justify-center">
                View Product
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#2D5A27]/10 text-[#2D5A27] px-4 py-2 rounded-full text-sm font-bold mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FFD700] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2D5A27] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1a1a]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Pest Control Services?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let pests take over your home or business. Contact us today for a 
            free inspection and quote. We're available 24/7!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971564999912" className="btn-secondary flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: +971 56 499 9912
            </a>
            <a href="https://wa.me/971564999912" className="btn-outline flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a href="https://wa.me/971564999912" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
    </>
  );
}
