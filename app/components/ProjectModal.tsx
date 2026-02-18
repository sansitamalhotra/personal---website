'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

interface Project {
  title: string;
  description: string;
  tech: string[];
  plays: string;
  duration: string;
  color: string;
  cover?: string;
  longDescription?: string;
  screenshots?: string[];
  github?: string;
  demo?: string;
  achievements?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { theme } = useTheme();

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            onClick={onClose}
          >
            <div className="min-h-screen px-4 py-8 flex items-center justify-center">
              <div
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                }`}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    theme === 'dark'
                      ? 'bg-black/50 hover:bg-black/70 text-white'
                      : 'bg-white/80 hover:bg-white text-gray-900'
                  }`}
                >
                  ✕
                </button>

                {/* Header with Cover */}
                <div
                  className="relative h-80 bg-gradient-to-b from-transparent to-black/50"
                  style={{ backgroundColor: project.color }}
                >
                  {project.cover && (
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-cover opacity-40"
                    />
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-end gap-6">
                      {/* Album Cover */}
                      {project.cover && (
                        <div className="w-48 h-48 rounded-lg overflow-hidden shadow-2xl flex-shrink-0">
                          <Image
                            src={project.cover}
                            alt={project.title}
                            width={192}
                            height={192}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                      
                      {/* Title Info */}
                      <div className="pb-4">
                        <p className="text-sm font-semibold text-white/80 mb-2">PROJECT</p>
                        <h1 className="text-6xl font-bold text-white mb-2">{project.title}</h1>
                        <div className="flex items-center gap-2 text-sm text-white/80">
                          <span>{project.tech.length} technologies</span>
                          <span>•</span>
                          <span>{project.plays} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mb-8">
                    <button className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                      <span className="text-2xl text-black">▶</span>
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 rounded-full border-2 font-semibold transition-colors ${
                          theme === 'dark'
                            ? 'border-white/20 text-white hover:border-white'
                            : 'border-gray-300 text-gray-900 hover:border-gray-900'
                        }`}
                      >
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 rounded-full border-2 font-semibold transition-colors ${
                          theme === 'dark'
                            ? 'border-white/20 text-white hover:border-white'
                            : 'border-gray-300 text-gray-900 hover:border-gray-900'
                        }`}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      About this project
                    </h2>
                    <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  {project.achievements && project.achievements.length > 0 && (
                    <div className="mb-8">
                      <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Key Achievements
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-3 p-4 rounded-lg ${
                              theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
                            }`}
                          >
                            <span className="text-green-500 text-xl">✓</span>
                            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-4 py-2 rounded-full font-medium ${
                            theme === 'dark'
                              ? 'bg-white/10 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Screenshots */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div>
                      <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Screenshots
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.screenshots.map((screenshot, i) => (
                          <div
                            key={i}
                            className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
                          >
                            <Image
                              src={screenshot}
                              alt={`${project.title} screenshot ${i + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}