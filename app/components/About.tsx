'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white py-20 px-10 flex items-center">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#0a1628' }}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mb-8"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed text-lg">
  Hey! I'm Sansita, a second-year Computer Engineering at UofT. Here's the thing about 
  coding: it's literally the only field that can intersect with everything. Health? 
  Finance? Art? Social impact? Code touches it all, and that's what hooked me.
</p>

<p className="text-gray-700 leading-relaxed">
  I've won hackathons (shoutout NewHacks 2025 🏆), built real products at my family's 
  company since 2022, and honestly? I just love making things that actually work and 
  help people.
</p>

<p className="text-gray-700 leading-relaxed">
  When I'm not debugging at 2am, I'm either dancing Bharatnatyam, reading Percy Jackson 
  for the millionth time, or talking my friends' ears off about whatever new thing I'm 
  learning. I'm a people person who happens to love code—not the other way around.
</p>
          </motion.div>

          {/* Right - Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0a1628' }}>
                Quick Facts ⚡
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#0a1628' }}>Education</h4>
                    <p className="text-gray-600 text-sm">Computer Engineering @ UofT (2029)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#0a1628' }}>Currently</h4>
                    <p className="text-gray-600 text-sm">Full Stack Dev @ S M Software Solutions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#0a1628' }}>Achievements</h4>
                    <p className="text-gray-600 text-sm">1st @ NewHacks 2025 • Top 10 @ DeltaHacks 12</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">💃</span>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#0a1628' }}>Hobbies</h4>
                    <p className="text-gray-600 text-sm">Bharatnatyam • Gym • Reading • Hackathons</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#0a1628' }}>Location</h4>
                    <p className="text-gray-600 text-sm">Toronto, Canada 🍁</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}