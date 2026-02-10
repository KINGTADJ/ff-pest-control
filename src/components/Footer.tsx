import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Cockroach Control", href: "/services/cockroach-control" },
    { name: "Rat & Mouse Control", href: "/services/rat-mouse-control" },
    { name: "Bedbug Treatment", href: "/services/bedbug-treatment" },
    { name: "Termite Control", href: "/services/termite-control" },
    { name: "Spider Control", href: "/services/spider-control" },
    { name: "Bees & Wasps Removal", href: "/services/bees-wasps-removal" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">F&F</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">F & F Pest Control</h3>
                <p className="text-xs text-gray-500">Trading FZE</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for professional pest control services in UAE. 
              Since November 2025, we have helped over 1,000 customers protect their 
              homes and businesses.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: MessageCircle, href: "https://wa.me/971564999912", label: "WhatsApp" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full group-hover:bg-yellow-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full group-hover:bg-yellow-400 transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    Office C1-1F-SF14425<br />
                    Ajman Free Zone C1 Building<br />
                    Ajman, UAE
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <a href="tel:+971564999912" className="text-gray-400 hover:text-white transition-colors block">
                    +971 56 499 9912
                  </a>
                  <a href="tel:+971522141349" className="text-gray-400 hover:text-white transition-colors block">
                    +971 52 214 1349
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-green-500" />
                </div>
                <a href="mailto:hr.sbh@hotmail.com" className="text-gray-400 hover:text-white transition-colors">
                  hr.sbh@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} F & F Pest Control Trading FZE. All rights reserved. License No: 48487
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
