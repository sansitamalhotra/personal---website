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
    const interval = setInterval(fetchNowPlaying, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  if (!data || !data.isPlaying) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-lg p-4 border border-gray-200 z-50"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-2xl">🎵</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Not Playing</p>
            <p className="text-xs text-gray-500">Spotify</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-lg p-4 border border-gray-200 z-50"
      style={{ borderColor: '#7eb8d4' }}
    >
      <div className="flex items-center gap-4">
        {data.albumImageUrl && (
          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
           <Image
  src={data.albumImageUrl}
  alt={data.album || 'Album cover'}
  fill
  sizes="64px"
  className="object-cover"
/>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-500">Now Playing</span>
          </div>
          <p className="text-sm font-bold text-gray-900 truncate">{data.title}</p>
          <p className="text-xs text-gray-500 truncate">{data.artist}</p>
        </div>
      </div>
    </motion.a>
  );
}