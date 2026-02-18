'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PixelMe() {
  return (
    <motion.div
      className="fixed top-24 right-8 z-40 pointer-events-none"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/images/jukebox-removed.png"
        alt="Pixel Sansita"
        width={100}
        height={100}
        sizes="100px"
        className="object-contain drop-shadow-lg"
        priority
      />
    </motion.div>
  );
}