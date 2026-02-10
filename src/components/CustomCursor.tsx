'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    // Hide on mobile
    if (window.innerWidth < 768) {
      cursor.style.display = 'none';
      cursorDot.style.display = 'none';
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out',
      });
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 2, opacity: 0.5, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-yellow-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
