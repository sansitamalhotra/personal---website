'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "GigIT",
    description: "KYC verification platform for gig economy workers using Face++ API.",
    longDescription: "GigIT revolutionizes identity verification for the gig economy by combining Face++ facial recognition with document validation. Built for gig workers who need fast, reliable KYC verification, the platform achieved 85% accuracy in identity validation while processing verification requests in under 60 seconds. Won 1st place at NewHacks 2025 out of 200+ competing teams.",
    tech: ["React", "Node.js", "MongoDB", "Face++ API", "Express.js", "JWT Auth"],
    plays: "85,234",
    duration: "3 tracks",
    color: "#1DB954",
    cover: "/images/gigit-cover.png",
    github: "https://github.com/sansitamalhotra/GigIT.git",
    achievements: [
      "🏆 1st Place Winner at NewHacks 2025",
      "85% accuracy in KYC verification",
      "Processed 1000+ test verifications",
      "60-second average verification time"
    ],
     screenshots: [
      "/screenshots-GigIT/landing.jpg",
      "/screenshots-GigIT/application.jpg",
      "/screenshots-GigIT/bank-login.jpg",
      "/screenshots-GigIT/risk-config.jpg"
    ],  
  },
  {
    title: "SafetyNet HER",
    description: "AI-powered crisis response system for women's safety with community-first approach.",
    longDescription: "SafetyNet HER is a comprehensive crisis response platform that puts community support before police escalation. Using Google Gemini AI for threat triage, the system analyzes incoming SMS messages to classify 12+ incident types, score urgency (1-10), and recommend appropriate response. Features include a production-ready fake call escape system with AI-generated voice scripts, real-time volunteer mesh network coordination, and predictive risk intelligence. Built at DeltaHacks 12 to address the gap in preventive safety tools for women.",
    tech: ["React", "TypeScript", "Node.js", "Google Gemini API", "MongoDB", "Twilio", "Socket.io"],
    plays: "42,891",
    duration: "4 tracks",
    color: "#ff6b9d",
    cover: "/images/safetynet-cover.png",
    github: "https://github.com/sansitamalhotra/SafetyNet-HER.git",
    achievements: [
      "92% accuracy in AI threat classification",
      "4.2 minute average response time (4x faster than 911)",
      "Real-time volunteer dispatch system",
      "Fake call escape feature with AI voice generation",
      "Built production-ready features in 36 hours"
    ],
    screenshots: [
  "/ss/landingpage.png",
  "/ss/fakecall.png",
  "/ss/fakecall_part2.PNG", 
  "/ss/ai-analysis.png",
  "/ss/volunteerscreen.png"
],
  },
  {
    title: "Schema Sync",
    description: "AI-powered data integration tool using SBERT embeddings for intelligent field matching.",
    longDescription: "Schema Sync solves the critical problem of data integration across disparate systems by using SBERT (Sentence-BERT) embeddings to intelligently match database fields. The system achieved 92% accuracy in field matching by analyzing semantic similarity rather than relying on exact name matches. Built with Python and TensorFlow, it dramatically reduces manual data mapping effort and enables seamless integration between legacy systems and modern databases. Won Top 10 at Hack the Valley X.",
    tech: ["Python", "TensorFlow", "PostgreSQL", "SBERT", "FastAPI", "NumPy"],
    plays: "38,456",
    duration: "5 tracks",
    color: "#ffd93d",
    cover: "/images/schemasync-cover.png",
    github: "https://github.com/sansitamalhotra/SchemaSync.git",
    achievements: [
      "92% field match accuracy using SBERT embeddings",
      "Top 10 finish at Hack the Valley X",
      "Semantic similarity analysis outperformed rule-based matching",
      "Reduced manual data mapping time by 75%"
    ],
    screenshots: [
      "/screenshots-SchemaSync/landing.jpg",
      "/screenshots-SchemaSync/mapping.jpg",
      "/screenshots-SchemaSync/analytic.jpg",
      "/screenshots-SchemaSync/unified.jpg"
    ],
  },
  {
    title: "CodeCrush",
    description: "Gamified coding interview preparation platform designed to reduce anxiety and build confidence.",
    longDescription: "CodeCrush reimagines technical interview preparation by focusing on learning psychology rather than just problem volume. Unlike traditional platforms that can feel intimidating, CodeCrush uses spaced repetition, guided learning paths, and encouraging feedback to help students build genuine confidence. The platform features 50+ curated DSA problems, progress tracking with visual streaks, and a non-judgmental environment that normalizes struggle as part of the learning process. Built with React and Firebase, it has helped 20+ beta users prepare for technical interviews with reduced anxiety.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Vercel"],
    plays: "29,123",
    duration: "6 tracks",
    color: "#6bcf7f",
    cover: "/images/codecrush-cover.png",
    github: "https://github.com/sansitamalhotra/codecrush.git",
    demo: "https://mycodecrush.vercel.app",
    achievements: [
      "50+ curated DSA problems with guided learning paths",
      "20+ beta users with positive feedback",
      "Spaced repetition system for long-term retention",
      "Anxiety-reducing UI design focused on encouragement"
    ],
     screenshots: [
      "/screenshots-codecrush/home.png",
      "/screenshots-codecrush/dashboard.png",
      "/screenshots-codecrush/problem.png",
      "/screenshots-codecrush/achievement.png",
      "/screenshots-codecrush/stats.png"
    ],
  },
  {
    title: "PillPal",
    description: "Smart medication management system with intelligent reminders and tracking.",
    longDescription: "PillPal is a comprehensive medication management platform designed to help users track prescriptions, set intelligent reminders, and maintain medication adherence. Built with Next.js and TypeScript, the system features an intuitive interface for managing multiple medications, dosage tracking, and refill notifications. The platform aims to reduce medication errors and improve health outcomes through smart automation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    plays: "18,456",
    duration: "4 tracks",
    color: "#89CFF0",
    cover: "/images/pillpal-cover.png",
    github: "https://github.com/sansitamalhotra/PillPal.git",
    demo: "https://youtu.be/IA-yJRzk594"    ,
    achievements: [
      "Smart reminder system with customizable schedules",
      "Multi-medication tracking interface",
      "Refill notifications to prevent gaps in medication"
    ],
    screenshots: [
    "/screenshots-PillPal/Screenshot 2026-02-15 at 10.01.58 AM.png",
    "/screenshots-PillPal/Screenshot 2026-02-15 at 10.02.19 AM.png",
    "/screenshots-PillPal/Screenshot 2026-02-15 at 10.04.17 AM.png",
    "/screenshots-PillPal/Screenshot 2026-02-15 at 10.05.19 AM.png",
    "/screenshots-PillPal/Screenshot 2026-02-15 at 10.05.42 AM.png",
    "/screenshots-PillPal/Screenshot 2026-02-15 at 10.05.51 AM.png",
    "/screenshots-PillPal/Screenshot 2026-02-15 at 10.06.11 AM.png",
    "/screenshots-PillPal/Screenshot 2026-02-15 at 10.06.19 AM.png",
    "/screenshots-PillPal/Screenshot 2026-02-15 at 10.06.43 AM.png",
    "/screenshots-PillPal/Screenshot 2026-02-15 at 10.07.20 AM.png",
    "/screenshots-PillPal/Screenshot 2026-02-15 at 10.07.35 AM.png",
    "/screenshots-PillPal/Screenshot 2026-02-15 at 10.07.46 AM.png"
      
    ],
  },
  {
    title: "Bharatnatyam",
    description: "Classical Indian dance performances exploring storytelling through movement and expression.",
    longDescription: "Over 10 years of training and performing Bharatnatyam, a classical Indian dance form that tells stories through intricate footwork, hand gestures (mudras), and facial expressions. My performances blend traditional techniques with contemporary interpretations, bringing ancient stories to modern audiences. Dance has taught me discipline, attention to detail, and the importance of practice—skills that directly translate to my approach to software engineering.",
    tech: ["Dance", "Performance", "Cultural Arts", "Storytelling"],
    plays: "15,678",
    duration: "8 performances",
    color: "#c06c84",
    cover: "/images/dance-cover.png",
    type: "performance",
    demo: "https://www.youtube.com/playlist?list=PLLimH7k5Uz4r76VnGrpFRlEk9ZFYXSsX3", 
    achievements: [
      "10+ years of classical training",
      "Multiple stage performances",
      "Blend of traditional and contemporary styles",
      "Storytelling through movement and expression"
    ],
  },
];

export default function SpotifyProjects() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
              onClick={() => handleProjectClick(project)}
              className={`p-4 rounded-lg transition-all cursor-pointer group ${
                theme === 'dark'
                  ? 'bg-gray-800/50 hover:bg-gray-800'
                  : 'bg-white hover:bg-blue-50 shadow-md hover:shadow-lg'
              }`}
            >
             {/* Album Cover */}
<div className="w-full aspect-square rounded-lg mb-4 shadow-xl overflow-hidden relative">
  {project.cover ? (
    <div className="relative w-full h-full group/album">
      <Image
        src={project.cover}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-all duration-500 group-hover/album:scale-105 group-hover/album:rotate-3"
      />
    </div>
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
              GigIT
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}