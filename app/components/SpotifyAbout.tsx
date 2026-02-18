'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export default function SpotifyAbout() {
  const techStack = [
    { name: 'React/Next.js', level: 95, color: '#61dafb' },
    { name: 'Python', level: 90, color: '#3776ab' },
    { name: 'TypeScript', level: 88, color: '#3178c6' },
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'MongoDB', level: 82, color: '#47a248' },
    { name: 'PostgreSQL', level: 80, color: '#336791' },
    { name: 'TensorFlow', level: 75, color: '#ff6f00' },
    { name: 'Firebase', level: 85, color: '#ffca28' },
  ];

  const equipment = [
    { icon: '💻', label: 'MacBook Air M1', detail: 'Primary workstation' },
    { icon: '⚡', label: 'VS Code', detail: 'Code editor of choice' },
    { icon: '🎨', label: 'Figma', detail: 'Design & prototyping' },
    { icon: '🔧', label: 'GitHub', detail: 'Version control' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black">
      
      {/* Header with photo */}
      <div className="relative h-96 bg-gradient-to-b from-blue-900/50 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        
        <div className="relative z-10 container mx-auto px-8 h-full flex items-end pb-8">
          <div className="flex items-end gap-6">
            
            {/* Real Photo */}
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-60 h-60 rounded-lg overflow-hidden shadow-2xl border-4 border-white/10"
              >
                <Image
                  src="/images/me.jpg"
                  alt="Sansita Malhotra"
                  width={240}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </Tilt>

            {/* Title */}
            <div className="pb-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm font-semibold text-white/80 mb-2"
              >
                DEVELOPER • ENGINEER • BUILDER
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-7xl font-bold text-white mb-2"
              >
                About
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/60"
              >
                Behind the code
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-12">
        
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">The Origin Story</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Here's the thing about coding: it's the only field that connects <span className="text-green-400 font-semibold">everything</span>. 
              Health? Finance? Art? Social impact? Code touches it all.
            </p>
            <p>
              I'm a second-year Computer Engineering student at UofT who started coding in 2022 
              and hasn't looked back since. I've won hackathons (shoutout NewHacks 2025 🏆), 
              built production systems serving 250+ daily users at my family's company, and 
              honestly? I just love making things that <span className="text-blue-400 font-semibold">actually work</span> and help people.
            </p>
            <p>
              When I'm not debugging at 2am, I'm either performing Bharatnatyam (classical Indian dance), 
              hitting the gym, reading Percy Jackson for the millionth time, or talking my friends' ears 
              off about whatever new tech I'm learning. I'm a people person who happens to love code—not 
              the other way around.
            </p>
          </div>
        </motion.div>

        {/* Tech Stack - Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{tech.name}</span>
                  <span className="text-gray-400 text-sm">{tech.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ delay: 1 + index * 0.1, duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Equipment/Setup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">My Setup</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 text-center border border-gray-700 hover:border-green-500 transition-colors"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                <p className="text-gray-400 text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 rounded-lg p-6 border border-green-500/20">
              <div className="text-5xl font-bold text-green-400 mb-2">3+</div>
              <div className="text-gray-300">Years Coding</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-lg p-6 border border-blue-500/20">
              <div className="text-5xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-gray-300">Major Projects</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-lg p-6 border border-purple-500/20">
              <div className="text-5xl font-bold text-purple-400 mb-2">250+</div>
              <div className="text-gray-300">Daily Users</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/10 rounded-lg p-6 border border-yellow-500/20">
              <div className="text-5xl font-bold text-yellow-400 mb-2">3</div>
              <div className="text-gray-300">Hackathon Wins</div>
            </div>
          </div>
        </motion.div>

        {/* Currently Playing - Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="mt-16 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Currently Listening To</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
            <div>
              <span className="text-green-400">▶</span> Summer 2026 internship search
            </div>
            <div>
              <span className="text-green-400">▶</span> Azure certification prep
            </div>
            <div>
              <span className="text-green-400">▶</span> Next.js + AI integration
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}