'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function FloatingBlobs() {
  const { scrollYProgress } = useScroll();
  
  // Change blob colors based on scroll position
  const blobColor1 = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [
      'radial-gradient(circle, #FFA17F 0%, #FF6B9D 100%)', // sunset
      'radial-gradient(circle, #667eea 0%, #764ba2 100%)', // purple
      'radial-gradient(circle, #4facfe 0%, #00f2fe 100%)', // blue
      'radial-gradient(circle, #4facfe 0%, #00f2fe 100%)', // blue
    ]
  );

  const blobs = [
    { size: 400, delay: 0, duration: 20, x: '10%', y: '20%' },
    { size: 500, delay: 2, duration: 25, x: '80%', y: '60%' },
    { size: 300, delay: 4, duration: 18, x: '50%', y: '80%' },
    { size: 350, delay: 1, duration: 22, x: '20%', y: '70%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: blobColor1,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}