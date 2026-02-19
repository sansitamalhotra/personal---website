'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

interface Track {
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  isPlaying: boolean;
}

export default function SpotifyNowPlaying() {
  const { theme } = useTheme();
  const [track, setTrack] = useState<Track | null>(null);
  const [volume, setVolume] = useState(80);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/spotify');
        const data = await response.json();
        
        if (data.isPlaying) {
          setTrack({
            name: data.title,
            artist: data.artist,
            album: data.album,
            albumArt: data.albumImageUrl,
            isPlaying: data.isPlaying,
          });
        } else {
          setTrack(null);
        }
      } catch (error) {
        console.error('Error fetching track:', error);
        setTrack(null);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 h-24 border-t backdrop-blur-xl transition-colors duration-300 z-50 ${
      theme === 'dark' 
        ? 'bg-black/95 border-gray-800' 
        : 'bg-white/95 border-gray-200'
    }`}>
      <div className="h-full px-4 flex items-center justify-between max-w-screen-2xl mx-auto">
        
        {/* Track Info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {track ? (
            <>
              <div className="relative w-14 h-14 flex-shrink-0 rounded overflow-hidden">
                {track.albumArt ? (
                  <Image
                    src={track.albumArt}
                    alt={track.album}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <span className="text-2xl">🎵</span>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className={`font-medium truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {track.name}
                  </p>
                  {/* LIVE indicator with tooltip */}
                  <div className="relative group">
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-green-500 text-black text-xs font-bold rounded-full flex-shrink-0 animate-pulse cursor-help">
                      <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                      LIVE
                    </span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      What Sansa is listening to RIGHT NOW
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-black rotate-45"></div>
                    </div>
                  </div>
                </div>
                <p className={`text-sm truncate ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {track.artist}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className={`w-14 h-14 rounded flex items-center justify-center flex-shrink-0 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              }`}>
                <span className="text-2xl">N</span>
              </div>
              <div>
                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Not Playing
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Spotify
                </p>
              </div>
            </>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 flex-1 justify-center">
          <button className={`transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            ⏮
          </button>
          <button className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
            theme === 'dark' ? 'bg-white text-black' : 'bg-gray-900 text-white'
          }`}>
            {track?.isPlaying ? '⏸' : '▶'}
          </button>
          <button className={`transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            ⏭
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          <button className={`transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            {volume === 0 ? '🔇' : volume < 50 ? '🔉' : '🔊'}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-24 h-1 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #1DB954 0%, #1DB954 ${volume}%, ${theme === 'dark' ? '#4b5563' : '#d1d5db'} ${volume}%, ${theme === 'dark' ? '#4b5563' : '#d1d5db'} 100%)`
            }}
          />
        </div>
      </div>
    </div>
  );
}