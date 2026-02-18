'use client';

import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

export default function EqualizerBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 h-64">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`w-2 rounded-t-sm ${
              theme === 'dark' ? 'bg-green-400' : 'bg-blue-500'
            }`}
            style={{
              height: '20%',
              animation: `equalizerPulse ${0.5 + Math.random() * 1}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}