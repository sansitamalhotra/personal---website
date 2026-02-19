'use client';

import { useTheme } from '../context/ThemeContext';

interface MusicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MusicModal({ isOpen, onClose }: MusicModalProps) {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`w-full max-w-2xl rounded-2xl overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        {/* Header */}
        <div className={`border-b ${
          theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center justify-between p-6">
            <div>
              <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                🎵 current vibe
              </h2>
              <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                what i'm listening to right now
              </p>
            </div>
            <button
              onClick={onClose}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            >
              <span className="text-2xl">×</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-6xl shadow-2xl animate-pulse">
              🎵
            </div>
          </div>
          
          <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Check the bottom bar! 👇
          </h3>
          <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            I've connected my real Spotify account, so you can see what I'm listening to in real-time on the player at the bottom of the screen.
          </p>
          
          
          <a
            href="https://open.spotify.com/user/YOUR_SPOTIFY_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-500 text-black font-bold rounded-full hover:bg-green-600 transition-colors"
          >
            Follow me on Spotify
          </a>
        </div>
      </div>
    </div>
  );
}