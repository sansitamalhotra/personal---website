'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function MusicNotes() {
  const { theme } = useTheme();
  const [notes, setNotes] = useState<Array<{ id: number; left: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const noteArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      size: 20 + Math.random() * 30,
    }));
    setNotes(noteArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {notes.map((note) => (
       <div
  key={note.id}
  className={`absolute ${theme === 'dark' ? 'text-green-400' : 'text-blue-400'}`}
  style={{
  left: `${note.left}%`,
  bottom: '-50px',
  fontSize: `${note.size}px`,
  animationName: 'floatNote',
  animationDuration: `${10 + Math.random() * 8}s`,
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  animationDelay: `${note.delay}s`,
}}
>
  ♪
</div>
      ))}
    </div>
  );
}