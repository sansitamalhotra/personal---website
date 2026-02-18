'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    title: "GigIT",
    description: "KYC verification platform using Face++ API with 85% accuracy. Won 1st place at NewHacks 2025.",
    tech: ["React", "Node.js", "MongoDB", "Face++"],
    plays: "85,234",
    duration: "3 tracks",
    color: "#1DB954",
    cover: "/images/gigit-cover.png",
  },
  {
    title: "SafetyNet HER",
    description: "AI-powered crisis response system for women built at DeltaHacks 12.",
    tech: ["React Native", "OpenAI", "Firebase"],
    plays: "42,891",
    duration: "4 tracks",
    color: "#ff6b9d",
    cover: "/images/safetynet-cover.png",
  },
  {
    title: "Schema Sync",
    description: "AI data integration tool achieving 92% field match accuracy.",
    tech: ["Python", "TensorFlow", "PostgreSQL"],
    plays: "38,456",
    duration: "5 tracks",
    color: "#ffd93d",
    cover: "/images/schemasync-cover.png",
  },
  {
    title: "CodeCrush",
    description: "Gamified coding interview preparation platform.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    plays: "29,123",
    duration: "6 tracks",
    color: "#6bcf7f",
    cover: "/images/codecrush-cover.png",
  },
  {
    title: "PillPal",
    description: "Smart Medication Management System.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    plays: "18,456",
    duration: "4 tracks",
    color: "#89CFF0",
    cover: "/images/pillpal-cover.png",
  },
  {
    title: "Bharatnatyam",
    description: "Classical Indian dance performances.",
    tech: ["Dance", "Performance", "Cultural Arts"],
    plays: "15,678",
    duration: "8 performances",
    color: "#c06c84",
    cover: "/images/dance-cover.png",
  },
];

export default function SpotifyProjects() {
  const { theme } = useTheme();

  return (
    <div className={`px-8 py-12 min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-black to-gray-900' 
        : 'bg-gradient-to-b from-blue-50 to-white'
    }`}>
      
      {/* Header */}
      <div className="mb-8">
        <h1 className={`text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Projects
        </h1>
        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
          My discography of building cool stuff 🚀
        </p>
      </div>

      {/* Album Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {projects.map((project, index) => (
          <Tilt
            key={project.title}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={2000}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-4 rounded-lg transition-all cursor-pointer group ${
                theme === 'dark'
                  ? 'bg-gray-800/50 hover:bg-gray-800'
                  : 'bg-white hover:bg-blue-50 shadow-md hover:shadow-lg'
              }`}
            >
              {/* Album Cover */}
              <div className="w-full aspect-square rounded-lg mb-4 shadow-xl overflow-hidden relative">
                {project.cover ? (
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center text-6xl"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.title === "Bharatnatyam" ? "💃" : "💿"}
                  </div>
                )}
              </div>

              {/* Album Info */}
              <h3 className={`font-semibold mb-1 truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.duration}
              </p>

              {/* Play Button - appears on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <span className="text-black text-xl">▶</span>
                </button>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Add more sections */}
      <div className="mt-16">
        <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          By Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-green-900 to-green-700'
              : 'bg-gradient-to-r from-green-100 to-green-200'
          }`}>
            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-green-900'}`}>
              🏆 Hackathon Wins
            </h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-green-800'}`}>
              GigIT, SafetyNet HER
            </p>
          </div>
          
          <div className={`rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-purple-900 to-purple-700'
              : 'bg-gradient-to-r from-purple-100 to-purple-200'
          }`}>
            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-purple-900'}`}>
              🤖 AI/ML Projects
            </h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-purple-800'}`}>
              Schema Sync, SafetyNet HER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}