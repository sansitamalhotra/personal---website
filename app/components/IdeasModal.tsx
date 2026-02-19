'use client';

import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface IdeasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IdeasModal({ isOpen, onClose }: IdeasModalProps) {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'ideas' | 'submit'>('ideas');

  if (!isOpen) return null;

  const ideas = [
    {
      title: 'Rate My Professor Chrome Extension',
      description: 'Auto-shows prof ratings while browsing UofT course selection',
      tech: ['Chrome API', 'Web Scraping', 'React'],
      difficulty: 'Easy',
      vibe: 'Useful for every UofT student'
    },
    {
      title: 'Gym Buddy Finder',
      description: 'Match with people at your gym who have similar fitness goals',
      tech: ['React Native', 'Firebase', 'Geolocation'],
      difficulty: 'Medium',
      vibe: 'Social + fitness'
    },
    {
      title: 'Recipe Generator from Fridge',
      description: 'Take photo of your fridge, AI suggests recipes with what you have',
      tech: ['Computer Vision', 'GPT-4', 'React'],
      difficulty: 'Medium',
      vibe: 'Practical + AI'
    },
    {
      title: 'Study Session Tracker',
      description: 'Track deep work sessions, Pomodoro timer, productivity analytics',
      tech: ['React', 'Firebase', 'Data Viz'],
      difficulty: 'Easy',
      vibe: 'Personal productivity'
    },
    {
      title: 'Outfit Weather Matcher',
      description: 'Suggests outfits based on weather, your wardrobe, and plans for the day',
      tech: ['Weather API', 'ML', 'React Native'],
      difficulty: 'Hard',
      vibe: 'Fashion + practical'
    },
    {
      title: 'Automated Interview Scheduler',
      description: 'Integrate with calendars, auto-schedule interviews based on availability',
      tech: ['Calendar APIs', 'Node.js', 'Email Integration'],
      difficulty: 'Medium',
      vibe: 'Job search tool'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        {/* Header */}
        <div className={`sticky top-0 z-10 border-b ${
          theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center justify-between p-6">
            <div>
              <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                💡 build backlog
              </h2>
              <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                projects i want to build
              </p>
            </div>
            <button
              onClick={onClose}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
            >
              <span className="text-2xl">×</span>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 px-6 pb-4">
            <button
              onClick={() => setActiveTab('ideas')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeTab === 'ideas'
                  ? 'bg-green-500 text-black'
                  : theme === 'dark'
                  ? 'bg-gray-800 text-gray-400 hover:text-white'
                  : 'bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              Ideas List
            </button>
            <button
              onClick={() => setActiveTab('submit')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeTab === 'submit'
                  ? 'bg-green-500 text-black'
                  : theme === 'dark'
                  ? 'bg-gray-800 text-gray-400 hover:text-white'
                  : 'bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              Suggest an Idea
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 180px)' }}>
          {activeTab === 'ideas' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ideas.map((idea, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-xl border transition-all hover:scale-[1.02] ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800'
                      : 'bg-blue-50 border-blue-100 hover:bg-blue-100'
                  }`}
                >
                  <h4 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {idea.title}
                  </h4>
                  <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {idea.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {idea.tech.map((tech, j) => (
                      <span
                        key={j}
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-blue-200 text-blue-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold ${
                      idea.difficulty === 'Easy' ? 'text-green-500' : 
                      idea.difficulty === 'Medium' ? 'text-yellow-500' : 'text-red-500'
                    }`}>
                      {idea.difficulty}
                    </span>
                    <p className={`text-xs italic ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {idea.vibe}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Got an idea for me?
              </h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Send me a project idea you think I should build! 💡
              </p>
              <form className="space-y-4">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Project Title
                  </label>
                  <input
                    type="text"
                    placeholder="What should I build?"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What does it do? Why would it be cool?"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Tech Stack (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="React, Python, etc."
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Your Name (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="So I can credit you!"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 transition-colors"
                >
                  Send Idea
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}