'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // We'll add email functionality later - for now just show success
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="min-h-screen bg-white py-20 px-10 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#0a1628' }}>
            Let's Connect
          </h2>
          <p className="text-gray-500 text-lg">
            Open to Summer 2026 internship opportunities! 🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#0a1628' }}>
                Get in Touch
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'd love to hear about internship opportunities, interesting projects, or just chat about tech!
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                   style={{ backgroundColor: '#7eb8d4' }}>
                <span className="text-white text-xl">📧</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1" style={{ color: '#0a1628' }}>Email</h4>
                <a href="mailto:malhotrasansita@gmail.com" 
                   className="text-gray-600 hover:underline"
                   style={{ color: '#7eb8d4' }}>
                  malhotrasansita@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: '#7eb8d4' }}>
                <span className="text-white text-xl">💼</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1" style={{ color: '#0a1628' }}>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/sansitamalhotra/" 
                   target="_blank"
                   className="text-gray-600 hover:underline"
                   style={{ color: '#7eb8d4' }}>
                  linkedin.com/in/sansitamalhotra
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: '#7eb8d4' }}>
                <span className="text-white text-xl">💻</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1" style={{ color: '#0a1628' }}>GitHub</h4>
                <a href="https://github.com/sansitamalhotra" 
                   target="_blank"
                   className="text-gray-600 hover:underline"
                   style={{ color: '#7eb8d4' }}>
                  github.com/sansitamalhotra
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#0a1628' }}>
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#0a1628' }}>
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#0a1628' }}>
                Message
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about the opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg disabled:opacity-50"
              style={{ backgroundColor: '#7eb8d4' }}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent! ✓' : 'Send Message'}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}