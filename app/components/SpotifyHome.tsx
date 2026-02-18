'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

export default function SpotifyHome() {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen">
      {/* Gradient Background */}
      <div 
        className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-purple-900 via-purple-900/50 to-black'
            : 'bg-gradient-to-b from-blue-100 via-blue-50 to-white'
        } transition-colors duration-300`}
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
          <div className={`w-48 h-48 rounded-full overflow-hidden shadow-2xl flex-shrink-0 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
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
            <p className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              PORTFOLIO
            </p>
            <h1 className={`text-7xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Sansita Malhotra
            </h1>
            <div className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              <span className="font-semibold">6 projects</span>
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
          <button className={`px-6 py-2 border rounded-full transition-colors ${
            theme === 'dark'
              ? 'border-gray-600 text-white hover:border-white'
              : 'border-gray-300 text-gray-700 hover:border-gray-900'
          }`}>
            View Resume
          </button>
          <button className={`text-2xl ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
            ⋯
          </button>
        </motion.div>

       {/* Quick Stats */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="grid grid-cols-4 gap-4 mb-12"
>
  {[
    { emoji: '🏆', num: '3', label: 'Hackathon Wins' },
    { emoji: '⚡', num: '250+', label: 'Daily Users' },
    { emoji: '💃', num: '10+', label: 'Dance Performances' },
    { emoji: '💼', num: '3+', label: 'Years Coding' },
  ].map((stat, i) => (
    <div
      key={i}
      className={`rounded-lg p-4 transition-all backdrop-blur-md border ${
  theme === 'dark'
    ? 'bg-white/5 border-white/10 hover:bg-white/10'
    : 'bg-blue-50/70 border-blue-100/40 hover:bg-blue-100/80 shadow-lg'
}`}
    >
      <p className="text-3xl font-bold mb-1">{stat.emoji}</p>
      <p className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {stat.num}
      </p>
      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        {stat.label}
      </p>
    </div>
  ))}
</motion.div>

        {/* Popular Section */}
        <div className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Popular
          </h2>
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
                className={`flex items-center gap-4 px-4 py-3 rounded transition-colors group cursor-pointer ${
                  theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-blue-50'
                }`}
              >
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>{index + 1}</span>
                <div className="flex-1">
                  <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {project.name}
                  </p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.detail}
                  </p>
                </div>
                <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {project.plays}
                </span>
                <span className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  ▶
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}