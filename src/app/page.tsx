import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock, Star, Shield, Zap, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

export default function Home() {
  const services = [
    { icon: "🪳", title: "Cockroach Control", description: "Complete elimination using our powerful MAGIC formula. Fast-acting, long-lasting protection.", href: "/services/cockroach-control" },
    { icon: "🐀", title: "Rat & Mouse Control", description: "Professional rodent control solutions. We eliminate rats and mice and prevent future infestations.", href: "/services/rat-mouse-control" },
    { icon: "🛏️", title: "Bedbug Treatment", description: "Thorough bedbug extermination for homes and hotels. Sleep peacefully again.", href: "/services/bedbug-treatment" },
    { icon: "🪵", title: "Termite Control", description: "Protect your property from termite damage. Complete inspection and treatment.", href: "/services/termite-control" },
    { icon: "🕷️", title: "Spider Control", description: "Safe and effective spider removal for your home or business.", href: "/services/spider-control" },
    { icon: "🐝", title: "Bees & Wasps", description: "Safe removal of bee hives and wasp nests. Protect your family from stings.", href: "/services/bees-wasps-removal" },
  ];

  const stats = [
    { value: "1000+", label: "Happy Customers", icon: Star },
    { value: "24/7", label: "Service Available", icon: Clock },
    { value: "100%", label: "Satisfaction Rate", icon: Shield },
    { value: "2025", label: "Established", icon: Zap },
  ];

  const testimonials = [
    { name: "Ahmed Al Mansouri", role: "Homeowner, Ajman", content: "F & F Pest Control solved our cockroach problem completely. Their MAGIC spray is incredible!", rating: 5 },
    { name: "Sarah Johnson", role: "Restaurant Owner, Dubai", content: "Professional service, fair prices, and excellent results. Highly recommended!", rating: 5 },
    { name: "Mohammed Hassan", role: "Property Manager", content: "We use F & F for all our properties. Their 24/7 availability is unmatched.", rating: 5 },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute inset-0 noise-texture pointer-events-none" />
        
        {/* Animated Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up stagger-1">
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 text-sm px-4 py-2 rounded-full font-bold">
                  🏆 #1 Pest Control in Ajman
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight opacity-0 animate-fade-in-up stagger-2">
                Professional
                <span className="block text-yellow-400">Pest Control</span>
                <span className="block text-white/90">Services in UAE</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-3">
                Protect your home and business from pests with F & F Pest Control. 
                We offer 24/7 professional services with our powerful MAGIC product line.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up stagger-4">
                <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8 py-6 rounded-xl font-bold shadow-xl shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:-translate-y-1">
                  <a href="tel:+971564999912" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    +971 56 499 9912
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-green-800 text-lg px-8 py-6 rounded-xl backdrop-blur-sm">
                  <Link href="/services" className="flex items-center gap-2">
                    View Services
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-4 opacity-0 animate-fade-in-up stagger-5">
                <div className="flex items-center gap-2 text-white/60">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">24/7 Emergency</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 animate-float">
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/images/product-english.jpg"
                    alt="MAGIC Cockroach Killer Spray"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
                
                {/* Floating Card */}
                <Card className="absolute -bottom-4 -left-8 bg-white/95 backdrop-blur-xl border-0 shadow-2xl">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Instant Kill</p>
                      <p className="text-sm text-gray-500">Kills on Contact</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-800 py-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                    <stat.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50" id="services">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Pest Control Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer comprehensive pest control services to protect your home and business 
              with the latest techniques and products.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="service-card group cursor-pointer border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center text-green-700 font-semibold group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Images */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                About Us
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Your Trusted Pest Control Partner Since 2025
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                F & F Pest Control Trading FZE is a licensed pest control company based in 
                Ajman Free Zone, UAE. Since our establishment in November 2025, we have 
                helped over 1,000 customers protect their homes and businesses.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We specialize in professional-grade pest control equipment and our own 
                MAGIC product line. Our certified technicians are available 24/7.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "Licensed & Insured",
                  "24/7 Emergency",
                  "Eco-Friendly",
                  "Free Estimates"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-700" />
                    </div>
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild size="lg" className="mt-6 bg-green-700 hover:bg-green-800 text-lg px-8 py-6 rounded-xl">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/team-1.jpg" alt="Team Member" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/product-arabic.jpg" alt="MAGIC Product" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/team-2.jpg" alt="Team Member" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <Card className="bg-green-700 text-white border-0 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-bold text-yellow-400 mb-2">1000+</p>
                    <p className="text-white/80">Happy Customers Served</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
              Our Products
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              MAGIC Pest Control Products
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Professional-grade pest control products for instant results. 
              Our MAGIC formula kills pests on contact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { image: "/images/product-arabic.jpg", name: "MAGIC قاتل الصراصير", desc: "قوة قاتلة وسريعة - 250ml", features: ["فعالية قوية", "لحماية المنزل", "يقضي فوراً"] },
              { image: "/images/product-english.jpg", name: "MAGIC Cockroach Killer", desc: "Instant Kill - 250ml", features: ["Powerful Formula", "Kills on Contact", "Eliminates Cockroaches"] },
            ].map((product, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 transition-all">
                <CardContent className="p-8">
                  <div className="relative h-72 mb-6 rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent">
                    <Image src={product.image} alt={product.name} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-4">{product.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400 rounded-xl">
                    View Product
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Need Pest Control Services?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Don't let pests take over. Contact us today for a free inspection and quote. 
            We're available 24/7!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8 py-6 rounded-xl font-bold">
              <a href="tel:+971564999912" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call: +971 56 499 9912
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-green-800 text-lg px-8 py-6 rounded-xl">
              <a href="https://wa.me/971564999912" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a href="https://wa.me/971564999912" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
