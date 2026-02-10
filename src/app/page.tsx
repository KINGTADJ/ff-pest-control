'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <CustomCursor />
      <main className={`min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Products />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
