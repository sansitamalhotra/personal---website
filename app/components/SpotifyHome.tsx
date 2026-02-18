'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SpotifyHome() {
  return (
    <div className="relative min-h-screen">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-900/50 to-black"
        style={{ height: '400px' }}
      />

      {/* Content */}
      <div className="relative z-10 px-8 pt-20">
        
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-end gap-6 mb-8"
        >
          {/* Pixel Profile Pic */}
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl bg-gray-800 flex-shrink-0">
            <Image
              src="/images/jukebox-removed.png"
              alt="Pixel Sansita"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="pb-4">
            <p className="text-sm font-semibold text-white mb-2">PORTFOLIO</p>
            <h1 className="text-7xl font-bold text-white mb-4">Sansita Malhotra</h1>
            <div className="flex items-center gap-2 text-sm text-white">
              <span className="font-semibold">5 projects</span>
              <span>•</span>
              <span>Computer Engineering @ UofT</span>
              <span>•</span>
              <span>Second Year</span>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-4 mb-12"
        >
          <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-xl">
            <span className="text-2xl text-black">▶</span>
          </button>
          <button className="px-6 py-2 border border-gray-600 text-white rounded-full hover:border-white transition-colors">
            View Resume
          </button>
          <button className="text-gray-400 hover:text-white text-2xl">⋯</button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-4 gap-4 mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-colors">
            <p className="text-3xl font-bold text-white mb-1">🏆</p>
            <p className="text-2xl font-bold text-white">3</p>
            <p className="text-sm text-gray-400">Hackathon Wins</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-colors">
            <p className="text-3xl font-bold text-white mb-1">⚡</p>
            <p className="text-2xl font-bold text-white">250+</p>
            <p className="text-sm text-gray-400">Daily Users</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-colors">
            <p className="text-3xl font-bold text-white mb-1">💃</p>
            <p className="text-2xl font-bold text-white">10+</p>
            <p className="text-sm text-gray-400">Dance Performances</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-colors">
            <p className="text-3xl font-bold text-white mb-1">💼</p>
            <p className="text-2xl font-bold text-white">3+</p>
            <p className="text-sm text-gray-400">Years Coding</p>
          </div>
        </motion.div>

        {/* Popular Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Popular</h2>
          <div className="space-y-2">
            {[
              { name: 'GigIT', detail: 'KYC Verification Platform • NewHacks Winner', plays: '85K' },
              { name: 'SafetyNet HER', detail: 'AI Crisis Response System • DeltaHacks 12', plays: '42K' },
              { name: 'Schema Sync', detail: 'AI Data Integration • 92% Accuracy', plays: '38K' },
              { name: 'CodeCrush', detail: 'Gamified Interview Prep', plays: '29K' },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 px-4 py-3 rounded hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <span className="text-gray-400 w-4">{index + 1}</span>
                <div className="flex-1">
                  <p className="text-white font-medium">{project.name}</p>
                  <p className="text-sm text-gray-400">{project.detail}</p>
                </div>
                <span className="text-gray-400 text-sm">{project.plays}</span>
                <span className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}