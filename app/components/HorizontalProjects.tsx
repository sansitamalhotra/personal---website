'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "GigIT",
    cover: "/images/gigit-cover.png",
    color: "#1DB954",
  },
  {
    title: "SafetyNet HER",
    cover: "/images/safetynet-cover.png",
    color: "#ff6b9d",
  },
  {
    title: "Schema Sync",
    cover: "/images/schemasync-cover.png",
    color: "#ffd93d",
  },
  {
    title: "CodeCrush",
    cover: "/images/codecrush-cover.png",
    color: "#6bcf7f",
  },
  {
    title: "PillPal",
    cover: "/images/pillpal-cover.png",
    color: "#89CFF0",
  },
  {
    title: "Bharatnatyam",
    cover: "/images/dance-cover.png",
    color: "#c06c84",
  },
];

export default function HorizontalProjects() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const scrollWidth = scrollRef.current.scrollWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(scrollRef.current, {
      x: () => -(scrollWidth - window.innerWidth),
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`h-screen ${theme === 'dark' ? 'bg-black' : 'bg-blue-50'}`}
    >
      <div 
        ref={scrollRef}
        className="flex items-center gap-8 h-full px-8"
        style={{ width: 'max-content' }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"
          >
            {/* Album Cover */}
            <div className="relative w-full h-full">
              {project.cover && (
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
              )}
            </div>

            {/* Vinyl Record - pops out on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
              <div 
                className="w-3/4 h-3/4 rounded-full border-4 border-gray-800 animate-spin-slow relative"
                style={{ 
                  backgroundColor: '#1a1a1a',
                  animation: 'spin 3s linear infinite'
                }}
              >
                {/* Vinyl grooves */}
                <div className="absolute inset-0 rounded-full border-8 border-gray-700 opacity-50"></div>
                <div className="absolute inset-4 rounded-full border-8 border-gray-700 opacity-30"></div>
                {/* Center label */}
                <div 
                  className="absolute inset-1/3 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: project.color }}
                >
                  {project.title}
                </div>
              </div>
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}