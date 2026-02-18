'use client';

import { ReactNode, useState } from 'react';
import SpotifySidebar from './SpotifySidebar';
import SpotifyNowPlaying from './SpotifyNowPlaying';

interface SpotifyLayoutProps {
  children: ReactNode;
  onSectionChange?: (section: string) => void;
  currentSection?: string;
}

export default function SpotifyLayout({ children, onSectionChange, currentSection = 'home' }: SpotifyLayoutProps) {
  const handleSectionChange = (section: string) => {
    if (onSectionChange) {
      onSectionChange(section);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Sidebar */}
      <SpotifySidebar 
        activeSection={currentSection}
        onSectionChange={handleSectionChange}
      />

      {/* Main Content Area */}
      <div className="ml-64 pb-24">
        {/* Top Nav Bar */}
        <div className="fixed top-0 left-64 right-0 h-16 bg-gradient-to-b from-black to-transparent z-20 flex items-center px-6">
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70">
              ←
            </button>
            <button className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70">
              →
            </button>
          </div>
          
          {/* Search with suggestions */}
          <div className="flex-1 max-w-xl mx-8 relative">
            <div className="bg-white/10 rounded-full px-4 py-2 flex items-center gap-2">
              <span>🔍</span>
              <input 
                type="text" 
                placeholder="What do you want to see?"
                className="bg-transparent border-none outline-none text-white placeholder-gray-400 flex-1"
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
              <div className="hidden absolute top-full left-0 right-0 mt-2 bg-gray-900 rounded-lg shadow-xl overflow-hidden z-[100]">
                <button onClick={() => handleSectionChange('about')} className="w-full px-4 py-3 text-left hover:bg-gray-800 text-white">About me</button>
                <button onClick={() => handleSectionChange('projects')} className="w-full px-4 py-3 text-left hover:bg-gray-800 text-white">Projects</button>
                <button onClick={() => handleSectionChange('home')} className="w-full px-4 py-3 text-left hover:bg-gray-800 text-white">Achievements</button>
                <button onClick={() => handleSectionChange('experience')} className="w-full px-4 py-3 text-left hover:bg-gray-800 text-white">Experience</button>
                <button onClick={() => handleSectionChange('contact')} className="w-full px-4 py-3 text-left hover:bg-gray-800 text-white">Contact</button>
              </div>
            </div>
          </div>
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