'use client';

import { ReactNode } from 'react';
import SpotifySidebar from './SpotifySidebar';
import SpotifyNowPlaying from './SpotifyNowPlaying';
import { useTheme } from '../context/ThemeContext';
import EqualizerBackground from './EqualizerBackground';

interface SpotifyLayoutProps {
  children: ReactNode;
  onSectionChange?: (section: string) => void;
  currentSection?: string;
}

export default function SpotifyLayout({ children, onSectionChange, currentSection = 'home' }: SpotifyLayoutProps) {
  const { theme, toggleTheme } = useTheme();
  
  const handleSectionChange = (section: string) => {
    if (onSectionChange) {
      onSectionChange(section);
    }
  };

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-gradient-to-br from-blue-50 to-white';
  const navBg = theme === 'dark' ? 'bg-gradient-to-b from-black to-transparent' : 'bg-gradient-to-b from-blue-50/80 to-transparent';

  return (
    <div className={`${bgColor} min-h-screen transition-colors duration-300 relative`}>
      {/* Equalizer Background */}
      <EqualizerBackground />
      
      {/* Sidebar */}
      <SpotifySidebar 
        activeSection={currentSection}
        onSectionChange={handleSectionChange}
      />

      {/* Rest of your code stays the same... */}
      {/* Main Content Area */}
      <div className="ml-64 pb-24">
        {/* Top Nav Bar */}
        <div className={`fixed top-0 left-64 right-0 h-16 ${navBg} z-20 flex items-center px-6 justify-between`}>
          <div className="flex items-center gap-4 flex-1">
            <button className={`w-8 h-8 rounded-full ${theme === 'dark' ? 'bg-black/50' : 'bg-white/80'} flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:${theme === 'dark' ? 'bg-black/70' : 'bg-white'}`}>
              ←
            </button>
            <button className={`w-8 h-8 rounded-full ${theme === 'dark' ? 'bg-black/50' : 'bg-white/80'} flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:${theme === 'dark' ? 'bg-black/70' : 'bg-white'}`}>
              →
            </button>
          
            {/* Search with suggestions */}
            <div className="flex-1 max-w-xl mx-8 relative">
              <div className={`${theme === 'dark' ? 'bg-white/10' : 'bg-white'} rounded-full px-4 py-2 flex items-center gap-2 ${theme === 'light' ? 'shadow-md' : ''}`}>
                <span>🔍</span>
                <input 
                  type="text" 
                  placeholder="What do you want to see?"
                  className={`bg-transparent border-none outline-none ${theme === 'dark' ? 'text-white placeholder-gray-400' : 'text-gray-800 placeholder-gray-500'} flex-1`}
                  onFocus={(e) => {
                    const suggestions = e.target.nextElementSibling;
                    if (suggestions) suggestions.classList.remove('hidden');
                  }}
                  onBlur={(e) => {
                    setTimeout(() => {
                      const suggestions = e.target.nextElementSibling;
                      if (suggestions) suggestions.classList.add('hidden');
                    }, 200);
                  }}
                />
                <div className={`hidden absolute top-full left-0 right-0 mt-2 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-xl overflow-hidden z-[100] border ${theme === 'light' ? 'border-gray-200' : 'border-transparent'}`}>
                  <button onClick={() => handleSectionChange('about')} className={`w-full px-4 py-3 text-left ${theme === 'dark' ? 'hover:bg-gray-800 text-white' : 'hover:bg-blue-50 text-gray-800'}`}>About me</button>
                  <button onClick={() => handleSectionChange('projects')} className={`w-full px-4 py-3 text-left ${theme === 'dark' ? 'hover:bg-gray-800 text-white' : 'hover:bg-blue-50 text-gray-800'}`}>Projects</button>
                  <button onClick={() => handleSectionChange('home')} className={`w-full px-4 py-3 text-left ${theme === 'dark' ? 'hover:bg-gray-800 text-white' : 'hover:bg-blue-50 text-gray-800'}`}>Achievements</button>
                  <button onClick={() => handleSectionChange('experience')} className={`w-full px-4 py-3 text-left ${theme === 'dark' ? 'hover:bg-gray-800 text-white' : 'hover:bg-blue-50 text-gray-800'}`}>Experience</button>
                  <button onClick={() => handleSectionChange('contact')} className={`w-full px-4 py-3 text-left ${theme === 'dark' ? 'hover:bg-gray-800 text-white' : 'hover:bg-blue-50 text-gray-800'}`}>Contact</button>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-blue-100 hover:bg-blue-200'} flex items-center justify-center transition-colors`}
          >
            <span className="text-xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
          </button>
        </div>

        {/* Content */}
        <div className="pt-16">
          {children}
        </div>
      </div>

      {/* Now Playing Bar at Bottom */}
      <SpotifyNowPlaying />
    </div>
  );
}