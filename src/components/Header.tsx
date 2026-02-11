"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, Clock, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <a href="tel:+971522141349" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+971 52 214 1349</span>
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <a href="tel:+971522141349" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <span className="hidden sm:inline">+971 52 214 1349</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:hr.sbh@hotmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden md:inline">hr.sbh@hotmail.com</span>
            </a>
            <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold">
              <Clock className="h-3 w-3 mr-1" />
              24/7 Service
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-800 rounded-xl flex items-center justify-center shadow-lg shadow-green-700/20 group-hover:shadow-green-700/40 transition-shadow">
                <span className="text-white font-bold text-lg">F&F</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-green-800 group-hover:text-green-700 transition-colors">F & F Pest Control</h1>
                <p className="text-xs text-gray-500">Professional Pest Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:text-green-700 font-medium transition-colors rounded-lg hover:bg-green-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button asChild className="bg-green-700 hover:bg-green-800 rounded-xl shadow-lg shadow-green-700/20 hover:shadow-green-700/40 transition-all">
                <a href="tel:+971522141349" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Get Free Quote
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="rounded-xl">
                  <Menu className="h-6 w-6 text-green-800" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="p-6 bg-green-800 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">F&F</span>
                        </div>
                        <span className="font-bold">F & F Pest Control</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Menu Links */}
                  <div className="flex-1 p-6">
                    <nav className="flex flex-col gap-2">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="px-4 py-3 text-gray-700 hover:text-green-700 font-medium transition-colors rounded-xl hover:bg-green-50"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>

                  {/* Mobile Menu Footer */}
                  <div className="p-6 bg-gray-50 border-t">
                    <Button asChild className="w-full bg-green-700 hover:bg-green-800 rounded-xl py-6">
                      <a href="tel:+971522141349" className="flex items-center justify-center gap-2">
                        <Phone className="h-5 w-5" />
                        Call: +971 52 214 1349
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
