'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

export default function SpotifyNowPlaying() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const res = await fetch('/api/spotify');
      const nowPlaying = await res.json();
      setData(nowPlaying);
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 h-24 border-t flex items-center px-4 z-50 transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-black border-gray-800'
        : 'bg-white border-gray-200'
    }`}>
      
      {/* Left - Song Info */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {data?.albumImageUrl ? (
          <div className="relative w-14 h-14 rounded overflow-hidden flex-shrink-0">
            <Image
              src={data.albumImageUrl}
              alt={data.album || 'Album cover'}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className={`w-14 h-14 rounded flex items-center justify-center ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <span className="text-2xl">🎵</span>
          </div>
        )}
        
        <div className="min-w-0 flex-1">
          {data?.isPlaying ? (
            <>
              <p className={`text-sm font-medium truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {data.title}
              </p>
              <p className={`text-xs truncate ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {data.artist}
              </p>
            </>
          ) : (
            <>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Not Playing
              </p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Spotify
              </p>
            </>
          )}
        </div>

        <button className={theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}>
          <span className="text-xl">♡</span>
        </button>
      </div>

      {/* Center - Playback Controls */}
      <div className="flex-1 flex flex-col items-center gap-2 max-w-2xl">
        <div className="flex items-center gap-4">
          <button className={theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}>
            ⏮
          </button>
          <button className={`w-8 h-8 rounded-full flex items-center justify-center hover:scale-105 transition-transform ${
            theme === 'dark' ? 'bg-white' : 'bg-gray-900'
          }`}>
            <span className={theme === 'dark' ? 'text-black' : 'text-white'}>⏸</span>
          </button>
          <button className={theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}>
            ⏭
          </button>
        </div>
        
        <div className="w-full flex items-center gap-2">
          <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            0:00
          </span>
          <div className={`flex-1 h-1 rounded-full ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}>
            <div className={`h-full w-1/3 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'}`}></div>
          </div>
          <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            3:25
          </span>
        </div>
      </div>

      {/* Right - Volume & Controls */}
      <div className="flex-1 flex items-center justify-end gap-2">
        <button className={`text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
          🔊
        </button>
        <div className={`w-24 h-1 rounded-full ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}>
          <div className={`h-full w-2/3 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'}`}></div>
        </div>
      </div>
    </div>
  );
}   