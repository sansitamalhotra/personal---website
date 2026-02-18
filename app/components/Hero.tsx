'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export default function Hero() {
  const name = "Sansita Malhotra";

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center relative pt-24">
      
      <div className="flex flex-col md:flex-row items-center gap-16">
        
        {/* Left - Name + subtitle */}
        <div className="flex flex-col">
          <div className="flex flex-wrap overflow-hidden">
            {name.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`text-6xl md:text-8xl font-bold tracking-tight ${letter === " " ? "mr-6" : ""}`}
                style={{ color: '#0a1628' }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 text-lg tracking-widest uppercase"
            style={{ color: '#7eb8d4' }}
          >
            Software Engineer · Builder · Hackathon Winner
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-3 text-gray-400 text-sm"
          >
            Computer Engineering @ UofT · Full Stack Dev · Toronto 🍁
          </motion.p>
        </div>

{/* Right - Photo */}
<Tilt
  tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  scale={1.05}
  transitionSpeed={2000}
>
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ rotate: 2, scale: 1.03 }}
    className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
    style={{ border: '3px solid #7eb8d4' }}
  >
    <Image
      src="/images/me.jpg"
      alt="Sansita Malhotra"
      fill
      sizes="(max-width: 768px) 256px, 320px"
      className="object-cover"
    />
  </motion.div>
</Tilt>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-gray-400">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gray-300"
        />
      </motion.div>

    </section>
  );
}