'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const links = ['About', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6"
      style={{ 
  background: 'rgba(240, 240, 240, 0.95)',  // Changed to light gray instead of white
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid #7eb8d4'  // Changed border to baby blue so you can see it
}}
    >
      <Link href="/" className="text-lg font-bold tracking-tight" style={{ color: '#0a1628' }}>
        sm.
      </Link>

      <div className="flex items-center gap-10">
        {links.map((link, index) => (
          <motion.div
            key={link}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          >
            <Link
              href={`#${link.toLowerCase()}`}
              className="text-sm tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors duration-300"
            >
              {link}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}