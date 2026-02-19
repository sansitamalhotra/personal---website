'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface SpotifySidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function SpotifySidebar({ activeSection, onSectionChange }: SpotifySidebarProps) {
  const { theme } = useTheme();
  
  const navItems = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'projects', icon: '📚', label: 'Projects' },
    { id: 'about', icon: '👤', label: 'About' },
    { id: 'experience', icon: '💼', label: 'Experience' },
    { id: 'contact', icon: '✉️', label: 'Contact' },
  ];

  const playlists = [
  { 
    name: 'reading & binging', 
    icon: '📚', 
    image: '/images/reading.png',
    section: 'books'
  },
  { 
    name: '2026 goals', 
    icon: '🎯', 
    image: '/images/goal.png',
    section: 'goals'
  },
  { 
    name: 'build backlog', 
    icon: '💡', 
    image: '/images/ideas.png',
    section: 'ideas'
  },
  { 
    name: 'current vibe', 
    icon: '🎵', 
    image: '/images/current.png',
    section: 'music'
  },
];
  return (
    <div className={`fixed left-0 top-0 h-screen w-64 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-800 border-r border-gray-200'} flex flex-col transition-colors duration-300 z-30`}>
      
      {/* Logo */}
      <div className="p-6">
        <button 
          onClick={() => onSectionChange('home')}
          className="text-2xl font-bold transition-colors hover:opacity-80"
          style={{ color: theme === 'dark' ? '#1DB954' : '#60a5fa' }}
        >
          sansa
        </button>
      </div>

      {/* Main Nav */}
      <nav className="px-3 space-y-2">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            whileHover={{ scale: 1.02 }}
            className={`w-full flex items-center gap-4 px-3 py-2 rounded-md transition-colors ${
              activeSection === item.id
                ? theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-50 text-blue-600'
                : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="font-semibold">{item.label}</span>
          </motion.button>
        ))}
      </nav>

      {/* Library Section */}
      <div className="mt-8 px-3 flex-1 overflow-auto">
        <div className="flex items-center justify-between mb-4 px-3">
          <h2 className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm font-semibold`}>Your Library</h2>
          <button className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} text-xl`}>+</button>
        </div>

        <div className="space-y-2">
          {playlists.map((playlist, index) => (
            <motion.div
              key={index}
              onClick={() => onSectionChange(playlist.section)}
              whileHover={{ backgroundColor: theme === 'dark' ? '#282828' : '#f3f4f6' }}
              className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer"
            >
              <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
  <Image
    src={playlist.image}
    alt={playlist.name}
    width={48}
    height={48}
    className="object-cover"
  />
</div>
              <div className="flex-1 min-w-0">
                <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} text-sm font-medium truncate`}>{playlist.name}</p>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} text-xs`}>Playlist</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pixel character at bottom */}
      <div className={`p-4 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
        <img src="/images/jukebox-removed.png" alt="Pixel Sansita" className="w-16 h-16 mx-auto object-contain" style={{ width: 'auto', height: '64px' }} />
      </div>
    </div>
  );
}