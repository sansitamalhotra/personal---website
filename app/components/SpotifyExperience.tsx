'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function SpotifyExperience() {
  const { theme } = useTheme();

  const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'S M Software Solutions',
    period: 'June 2022 - Present',
    location: 'Toronto, ON',
    description: 'Family software consultancy building production systems',
    achievements: [
      '250+ daily active users across multiple production applications',
      'Built AI-powered ChatBot using FastAPI, Python, and React with OpenAI integration',
      'Developed FastAPI-based backend systems with RESTful architecture',
      'Built full-stack web applications using React, Next.js, and TypeScript',
      'Implemented authentication, database management, and API integrations',
      'Collaborated with clients to deliver custom software solutions'
    ],
    color: '#1DB954',
    projects: [
      {
        name: 'ChatBot',
        description: 'AI conversational chatbot with FastAPI',
        github: 'https://github.com/sansitamalhotra/ChatBot'
      }
    ]
  }
];

  return (
    <div className={`px-8 py-12 min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-black to-gray-900' 
        : 'bg-gradient-to-b from-blue-50 to-white'
    }`}>
      
      {/* Header */}
      <div className="mb-12">
        <h1 className={`text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Experience
        </h1>
        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
          My professional journey 💼
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative pl-8 pb-12"
          >
            {/* Timeline Line */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-1 rounded"
              style={{ backgroundColor: exp.color }}
            />
            
            {/* Timeline Dot */}
            <div 
              className="absolute left-0 top-2 w-4 h-4 rounded-full -ml-1.5 border-4"
              style={{ 
                backgroundColor: exp.color,
                borderColor: theme === 'dark' ? '#000' : '#fff'
              }}
            />

            {/* Content Card */}
            <div className={`rounded-xl p-6 backdrop-blur-xl border transition-all hover:scale-[1.02] ${
              theme === 'dark'
                ? 'bg-white/10 border-white/20 hover:bg-white/15'
                : 'bg-white/80 border-white/60 hover:bg-white shadow-xl'
            }`}>
              
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {exp.title}
                  </h2>
                  <p className="text-lg mb-1" style={{ color: exp.color }}>
                    {exp.company}
                  </p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.location}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  theme === 'dark' ? 'bg-white/10 text-gray-300' : 'bg-blue-100 text-blue-700'
                }`}>
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {exp.description}
              </p>

             {/* Achievements */}
<div className="space-y-2 mb-4">
  {exp.achievements.map((achievement, i) => (
    <div key={i} className="flex items-start gap-3">
      <span className="text-green-500 mt-1">✓</span>
      <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
        {achievement}
      </p>
    </div>
  ))}
</div>

{/* Projects */}
{exp.projects && (
  <div className="mt-4 pt-4 border-t border-white/10">
    <p className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
      Key Projects:
    </p>
    {exp.projects.map((project, i) => (
      <a
        key={i}
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 p-2 rounded hover:bg-white/5 transition-colors ${
          theme === 'dark' ? 'text-green-400' : 'text-blue-500'
        }`}
      >
        <span>🔗</span>
        <span className="font-medium">{project.name}</span>
        <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
          - {project.description}
        </span>
      </a>
    ))}
  </div>
)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}