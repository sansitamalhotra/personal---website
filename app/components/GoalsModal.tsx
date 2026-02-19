'use client';

import { useTheme } from '../context/ThemeContext';

interface GoalsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GoalsModal({ isOpen, onClose }: GoalsModalProps) {
  const { theme } = useTheme();

  if (!isOpen) return null;

  const goals = [
    {
      category: 'Cloud Certifications',
      icon: '☁️',
      items: [
        { name: 'Azure Fundamentals (AZ-900)', status: 'in-progress', deadline: 'March 2026' },
        { name: 'Google Cloud Associate', status: 'planned', deadline: 'April 2026' },
        { name: 'AWS Solutions Architect', status: 'planned', deadline: 'Summer 2026' }
      ]
    },
    {
      category: 'PC Bank Prep',
      icon: '💼',
      items: [
        { name: 'Learn Docker & Kubernetes', status: 'in-progress', deadline: 'Before May' },
        { name: 'Practice CI/CD pipelines', status: 'in-progress', deadline: 'April 2026' },
        { name: 'Study multi-cloud architecture', status: 'planned', deadline: 'April 2026' }
      ]
    },
    {
      category: 'Build Something New',
      icon: '🚀',
      items: [
        { name: 'Pick a project from backlog', status: 'planned', deadline: 'March 2026' },
        { name: 'Deploy to production', status: 'planned', deadline: 'April 2026' },
        { name: 'Write case study', status: 'planned', deadline: 'April 2026' }
      ]
    },
    {
      category: 'UTMIST Infrastructure',
      icon: '🎓',
      items: [
        { name: 'Build compute platform tools', status: 'in-progress', deadline: 'Ongoing' },
        { name: 'Contribute to website', status: 'in-progress', deadline: 'March 2026' },
        { name: 'Support ML research team', status: 'in-progress', deadline: 'Ongoing' }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        {/* Header */}
        <div className={`sticky top-0 z-10 border-b ${
          theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center justify-between p-6">
            <div>
              <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                🎯 2026 goals
              </h2>
              <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                what i'm working towards
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
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-8" style={{ maxHeight: 'calc(90vh - 120px)' }}>
          {goals.map((goal, i) => (
            <div key={i}>
              <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <span>{goal.icon}</span>
                {goal.category}
              </h3>
              <div className="space-y-3">
                {goal.items.map((item, j) => (
                  <div
                    key={j}
                    className={`p-4 rounded-xl border transition-all ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800'
                        : 'bg-blue-50 border-blue-100 hover:bg-blue-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {item.name}
                        </p>
                        <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {item.deadline}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'in-progress'
                          ? 'bg-green-500 text-black'
                          : theme === 'dark'
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}