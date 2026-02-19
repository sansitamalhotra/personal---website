'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function SpotifyContact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'malhotrasansita@gmail.com',
      link: 'mailto:malhotrasansita@gmail.com',
      color: '#1DB954'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/sansitamalhotra',
      link: 'https://linkedin.com/in/sansitamalhotra',
      color: '#0077b5'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/sansitamalhotra',
      link: 'https://github.com/sansitamalhotra',
      color: theme === 'dark' ? '#fff' : '#000'
    },
  ];

  return (
    <div className={`min-h-screen py-20 px-8 transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-black via-gray-900 to-black'
        : 'bg-gradient-to-b from-white via-blue-50 to-white'
    }`}>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className={`text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Let's Collaborate
          </h1>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Open to Summer 2026 internship opportunities 🚀
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-xl transition-all cursor-pointer backdrop-blur-sm border ${
                theme === 'dark'
                  ? 'bg-gray-800/30 hover:bg-gray-800/50 border-gray-700/50'
                  : 'bg-white/60 hover:bg-white/80 border-white/40 shadow-xl'
              }`}
            >
              <div className="text-5xl mb-4">{method.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {method.label}
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {method.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Drop me a message
              </h2>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Looking for a developer who can turn ideas into reality? I'm currently seeking 
                Summer 2026 software engineering internships where I can contribute to meaningful 
                projects and continue learning.
              </p>
            </div>

            <div className={`rounded-lg p-4 transition-all backdrop-blur-md border ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-white/60 border-white/40 hover:bg-white/80 shadow-lg'
            }`}>
              <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                What I'm looking for:
              </h3>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="flex items-start gap-2">
                  <span className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}>✓</span>
                  Full Stack or Backend development roles
                </li>
                <li className="flex items-start gap-2">
                  <span className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}>✓</span>
                  AI/ML integration projects
                </li>
                <li className="flex items-start gap-2">
                  <span className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}>✓</span>
                  Fintech or social impact companies
                </li>
                <li className="flex items-start gap-2">
                  <span className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}>✓</span>
                  Teams that value creativity and innovation
                </li>
              </ul>
            </div>

            <div className={`flex items-center gap-3 p-4 rounded-lg ${
              theme === 'dark' ? 'bg-white/5' : 'bg-blue-50'
            }`}>
              <span className="text-3xl">⚡</span>
              <div>
                <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Quick Response Time
                </p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className={`p-8 rounded-xl ${
              theme === 'dark'
                ? 'bg-gray-800/50 border border-gray-700'
                : 'bg-white shadow-xl border border-gray-200'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Send a Message
            </h3>

            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-700'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-900 border-gray-600 text-white focus:border-green-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-900 border-gray-600 text-white focus:border-green-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                    theme === 'dark'
                      ? 'bg-gray-900 border-gray-600 text-white focus:border-green-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none`}
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-4 rounded-lg font-bold text-white transition-all ${
                  status === 'sending' 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-green-500 hover:bg-green-600 hover:scale-105'
                } disabled:opacity-50 shadow-lg`}
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent! ✓' : status === 'error' ? 'Error!' : 'Send Message'}
              </button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-500 font-semibold"
                >
                  Message sent! I'll get back to you soon 🎉
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-500 font-semibold"
                >
                  Failed to send. Try emailing me directly!
                </motion.p>
              )}
            </div>
          </motion.form>

        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`mt-16 text-center p-6 rounded-lg ${
            theme === 'dark'
              ? 'bg-white/5'
              : 'bg-gray-50'
          }`}
        >
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            💡 <span className="font-semibold">Pro tip:</span> Mention which project caught your eye! 
            I love talking about my work.
          </p>
        </motion.div>

      </div>
    </div>
  );
}