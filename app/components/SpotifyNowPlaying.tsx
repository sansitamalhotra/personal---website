'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-black border-t border-gray-800 flex items-center px-4 z-50">
      
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
          <div className="w-14 h-14 bg-gray-800 rounded flex items-center justify-center">
            <span className="text-2xl">🎵</span>
          </div>
        )}
        
        <div className="min-w-0 flex-1">
          {data?.isPlaying ? (
            <>
              <p className="text-white text-sm font-medium truncate">{data.title}</p>
              <p className="text-gray-400 text-xs truncate">{data.artist}</p>
            </>
          ) : (
            <>
              <p className="text-white text-sm font-medium">Not Playing</p>
              <p className="text-gray-400 text-xs">Spotify</p>
            </>
          )}
        </div>

        <button className="text-gray-400 hover:text-white">
          <span className="text-xl">♡</span>
        </button>
      </div>

      {/* Center - Playback Controls */}
      <div className="flex-1 flex flex-col items-center gap-2 max-w-2xl">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white">⏮</button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
            <span className="text-black">⏸</span>
          </button>
          <button className="text-gray-400 hover:text-white">⏭</button>
        </div>
        
        <div className="w-full flex items-center gap-2">
          <span className="text-xs text-gray-400">0:00</span>
          <div className="flex-1 h-1 bg-gray-600 rounded-full">
            <div className="h-full w-1/3 bg-white rounded-full"></div>
          </div>
          <span className="text-xs text-gray-400">3:25</span>
        </div>
      </div>

      {/* Right - Volume & Controls */}
      <div className="flex-1 flex items-center justify-end gap-2">
        <button className="text-gray-400 hover:text-white text-sm">🔊</button>
        <div className="w-24 h-1 bg-gray-600 rounded-full">
          <div className="h-full w-2/3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}