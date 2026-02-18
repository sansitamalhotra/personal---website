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
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-0 overflow-hidden opacity-30">
      <div className="flex items-end justify-center gap-3 h-80 px-8">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t ${
              theme === 'dark' ? 'bg-green-500' : 'bg-blue-400'
            }`}
            style={{
              height: '30%',
              animation: `equalizerPulse ${0.5 + Math.random() * 1}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}