'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

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
  cover: "/images/pillpal-cover.png", // you'll need to save the loading screen image here
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
  return (
    <div className="px-8 py-12 bg-gradient-to-b from-black to-gray-900 min-h-screen">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Projects</h1>
        <p className="text-gray-400">My discography of building cool stuff 🚀</p>
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
              className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-all cursor-pointer group"
            >
              {/* Album Cover - placeholder for now */}
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
              <h3 className="text-white font-semibold mb-1 truncate">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{project.duration}</p>

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
        <h2 className="text-2xl font-bold text-white mb-6">By Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-white text-xl font-bold mb-2">🏆 Hackathon Wins</h3>
            <p className="text-white/80 text-sm">GigIT, SafetyNet HER</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-white text-xl font-bold mb-2">🤖 AI/ML Projects</h3>
            <p className="text-white/80 text-sm">Schema Sync, SafetyNet HER</p>
          </div>
        </div>
      </div>
    </div>
  );
}