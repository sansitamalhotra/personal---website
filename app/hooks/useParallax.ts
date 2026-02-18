'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useParallax() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll('[data-speed]');
    
    elements.forEach((element) => {
      const speed = parseFloat(element.getAttribute('data-speed') || '1');
      
      gsap.to(element, {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          invalidateOnRefresh: true,
          scrub: 0,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ref;
}