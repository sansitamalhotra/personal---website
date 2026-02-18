'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: "GigIT",
    description: "KYC verification platform using Face++ API with 85% accuracy. Won 1st place at NewHacks 2025.",
    tech: ["React", "Node.js", "MongoDB", "Face++"],
    link: "https://github.com/sansitamalhotra/GigIT.git", // replace with real link
    color: "#7eb8d4"
  },
  {
    title: "SafetyNet HER",
    description: "AI-powered crisis response system for women built at DeltaHacks 12.",
    tech: ["React Native", "OpenAI", "Firebase"],
    link: "https://github.com/sansitamalhotra/SafetyNet-HER.git",
    color: "#ff6b9d"
  },
  {
    title: "Schema Sync",
    description: "AI data integration tool achieving 92% field match accuracy using SBERT embeddings.",
    tech: ["Python", "TensorFlow", "PostgreSQL", "SBERT"],
    link: "https://github.com/sansitamalhotra/SchemaSync.git",
    color: "#ffd93d"
  },
  {
    title: "PillPal",
    description: "Smart Medication Management System.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    link: "https://github.com/sansitamalhotra/PillPal.git",
    demo: "https://youtu.be/IA-yJRzk594?si=n7cpafMI1iVPYvk1",
    color: "#986bcf"
  },
  {
    title: "CodeCrush",
    description: "Gamified coding interview preparation platform to make learning fun.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    link: "https://github.com/sansitamalhotra/codecrush.git",
    demo: "https://mycodecrush.vercel.app/",
    color: "#6bcf7f"
  },
  {
  title: "Bharatnatyam",
  description: "Classical Indian dance performances exploring storytelling through movement and expression.",
  tech: ["Dance", "Performance", "Cultural Arts"],
  link: "https://www.youtube.com/playlist?list=PLLimH7k5Uz4r76VnGrpFRlEk9ZFYXSsX3", 
  type: "performance",
  color: "#ddaa03"
}
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-20 px-10">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-16"
      >
        <h2 className="text-5xl font-bold mb-4" style={{ color: '#0a1628' }}>
          Projects
        </h2>
        <p className="text-gray-500 text-lg">
          Things I've built to solve real problems 🚀
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
            
          <Tilt
  tiltMaxAngleX={5}
    key={project.title}
  tiltMaxAngleY={5}
  scale={1.02}
  transitionSpeed={2000}
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-l-4"
    style={{ borderLeftColor: project.color }}
  >
            {/* Title */}
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#0a1628' }}>
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

           {/* Links */}
<div className="flex gap-4">
  <Link
    href={project.link}
    target="_blank"
    className="text-sm font-medium hover:underline"
    style={{ color: project.color }}
  >
    {project.type === "performance" ? "View Performance" : "View Code"} →
  </Link>
  {project.demo && (
    <Link
      href={project.demo}
      target="_blank"
      className="text-sm font-medium hover:underline"
      style={{ color: project.color }}
    >
      Live Demo →
    </Link>
  )}
</div>
          </motion.div>
          </Tilt>
        ))}
      </div>

    </section>
  );
}