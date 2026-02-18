'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { useTheme } from '../context/ThemeContext';

export default function SpotifyAbout() {
  const { theme } = useTheme();

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
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-gray-900 via-black to-black'
        : 'bg-gradient-to-b from-blue-50 via-white to-white'
    }`}>
      
      {/* Header with photo */}
      <div className={`relative h-96 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-blue-900/50 to-transparent'
          : 'bg-gradient-to-b from-blue-200/30 to-transparent'
      }`}>
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-black via-transparent to-black'
            : 'bg-gradient-to-r from-white/50 via-transparent to-white/50'
        }`} />
        
        <div className="relative z-10 container mx-auto px-8 h-full flex items-end pb-8">
          <div className="flex items-end gap-6">
            
            {/* Real Photo */}
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className={`w-60 h-60 rounded-lg overflow-hidden shadow-2xl border-4 ${
                  theme === 'dark' ? 'border-white/10' : 'border-blue-100'
                }`}
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
                className={`text-sm font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white/80' : 'text-gray-600'
                }`}
              >
                DEVELOPER • ENGINEER • BUILDER
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-7xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              >
                About
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className={theme === 'dark' ? 'text-white/60' : 'text-gray-500'}
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
          <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            The Origin Story
          </h2>
          <div className={`space-y-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            <p className="text-lg">
              Here's the thing about coding: it's the only field that connects <span className={`font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-blue-600'}`}>everything</span>. 
              Health? Finance? Art? Social impact? Code touches it all.
            </p>
            <p>
              I'm a second-year Computer Engineering student at UofT who started coding in 2022 
              and hasn't looked back since. I've won hackathons (shoutout NewHacks 2025 🏆), 
              built production systems serving 250+ daily users at my family's company, and 
              honestly? I just love making things that <span className={`font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>actually work</span> and help people.
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
          <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
  key={tech.name}
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.9 + index * 0.1 }}
 className={`rounded-lg p-4 transition-all backdrop-blur-xl border ${
  theme === 'dark'
    ? 'bg-white/10 border-white/20 hover:bg-white/20 shadow-xl'
    : 'bg-blue-50/80 border-blue-100/60 hover:bg-blue-100/90 shadow-xl'
}`}
>
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {tech.name}
                  </span>
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {tech.level}%
                  </span>
                </div>
                <div className={`h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
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
          <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Setup
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`rounded-lg p-6 text-center border transition-colors backdrop-blur-sm ${
  theme === 'dark'
    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-green-500'
    : 'bg-blue-50/60 border-blue-100 hover:border-blue-400 shadow-lg'
}`}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {item.label}
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.detail}
                </p>
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
          <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            By The Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '3+', label: 'Years Coding', color: 'green' },
              { num: '6', label: 'Major Projects', color: 'blue' },
              { num: '250+', label: 'Daily Users', color: 'purple' },
              { num: '3', label: 'Hackathon Wins', color: 'yellow' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`rounded-lg p-6 border ${
                  theme === 'dark'
                    ? `bg-gradient-to-br from-${stat.color}-900/30 to-${stat.color}-800/10 border-${stat.color}-500/20`
                    : `bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 border-${stat.color}-200 shadow-md`
                }`}
              >
                <div className={`text-5xl font-bold mb-2 ${
                  theme === 'dark' ? `text-${stat.color}-400` : `text-${stat.color}-600`
                }`}>
                  {stat.num}
                </div>
                <div className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Currently Playing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className={`mt-16 rounded-lg p-8 border ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-green-900/20 to-blue-900/20 border-white/10'
              : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-md'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Currently Listening To
          </h3>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            <div>
              <span className={theme === 'dark' ? 'text-green-400' : 'text-blue-600'}>▶</span> Summer 2026 internship search
            </div>
            <div>
              <span className={theme === 'dark' ? 'text-green-400' : 'text-blue-600'}>▶</span> Azure certification prep
            </div>
            <div>
              <span className={theme === 'dark' ? 'text-green-400' : 'text-blue-600'}>▶</span> Next.js + AI integration
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}