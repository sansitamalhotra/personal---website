'use client';

import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface BooksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BooksModal({ isOpen, onClose }: BooksModalProps) {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'recs' | 'submit'>('recs');

  if (!isOpen) return null;

  const books = [
    {
      title: "The Song of Achilles",
      author: "Madeline Miller",
      genre: "Historical Fiction / Mythology",
      vibe: "Heartbreaking, lyrical, greek mythology retelling",
      why: "If you want to cry and love beautiful prose"
    },
    {
      title: "Circe",
      author: "Madeline Miller",
      genre: "Historical Fiction / Mythology",
      vibe: "Empowering, witchy, feminist retelling",
      why: "Strong female lead, gorgeous writing, greek gods"
    },
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      genre: "Historical Fiction / Romance",
      vibe: "Hollywood glamour, LGBTQ+, emotional",
      why: "Page-turner, will make you feel things"
    },
    {
      title: "A Little Life",
      author: "Hanya Yanagihara",
      genre: "Contemporary Fiction",
      vibe: "Devastating, friendship, heavy themes",
      why: "WARNING: Very dark but incredibly written"
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      genre: "Mystery / Coming of Age",
      vibe: "Southern gothic, nature, mystery",
      why: "Beautiful imagery, gripping mystery"
    },
    {
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      genre: "Fantasy / Romance",
      vibe: "Time-spanning, romantic, bittersweet",
      why: "Unique concept, beautifully written"
    }
  ];

 const shows = [
  {
    title: "Modern Family",
    type: "Comedy",
    seasons: "11 seasons (250 episodes)",
    vibe: "Mockumentary, feel-good, family chaos",
    why: "Comfort show - always funny, easy to eat to"
  },
  {
    title: "Brooklyn Nine-Nine",
    type: "Comedy",
    seasons: "8 seasons (153 episodes)",
    vibe: "Wholesome, detective squad humor, found family",
    why: "Perfect meal companion - light and hilarious"
  },
  {
    title: "Grey's Anatomy",
    type: "Medical Drama",
    seasons: "21 seasons (ongoing)",
    vibe: "Emotional rollercoaster, medical cases, romance",
    why: "Endless content, dramatic but binge-able"
  },
  {
    title: "Anne with an E",
    type: "Period Drama",
    seasons: "3 seasons (27 episodes)",
    vibe: "Coming-of-age, beautiful cinematography, heartwarming",
    why: "Cozy vibes, emotional, stunning visuals"
  },
  {
    title: "How to Lose a Guy in 10 Days",
    type: "Rom-Com Movie",
    seasons: "Movie (2003)",
    vibe: "Bet gone wrong, enemies to lovers, hilarious",
    why: "Kate Hudson + Matthew McConaughey iconic chemistry"
  },
  {
    title: "Yeh Jawaani Hai Deewani",
    type: "Bollywood",
    seasons: "Movie",
    vibe: "Travel, friendship, romance, life goals",
    why: "Ultimate comfort Bollywood movie - rewatchable"
  },
  {
    title: "Kabhi Khushi Kabhie Gham",
    type: "Bollywood",
    seasons: "Movie",
    vibe: "Family drama, iconic songs, emotional",
    why: "Classic Bollywood - perfect for nostalgic eating"
  },
  {
    title: "10 Things I Hate About You",
    type: "Rom-Com Movie",
    seasons: "Movie (1999)",
    vibe: "High school Shakespeare retelling, 90s classic",
    why: "Heath Ledger singing on the bleachers - perfection"
  },
  {
    title: "Schitt's Creek",
    type: "Comedy",
    seasons: "6 seasons (80 episodes)",
    vibe: "Wealthy family loses everything, wholesome humor",
    why: "Hilarious character growth, feel-good ending"
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
                📚 reading & binging
              </h2>
              <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                fiction books + shows to watch while eating
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
              onClick={() => setActiveTab('recs')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeTab === 'recs'
                  ? 'bg-green-500 text-black'
                  : theme === 'dark'
                  ? 'bg-gray-800 text-gray-400 hover:text-white'
                  : 'bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
            >
              Sansa's Recs
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
              Recommend Something
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 180px)' }}>
          {activeTab === 'recs' ? (
            <div className="space-y-8">
              {/* Books Section */}
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Fiction Books
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {books.map((book, i) => (
                    <div
                      key={i}
                      className={`p-5 rounded-xl border transition-all hover:scale-[1.02] ${
                        theme === 'dark'
                          ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800'
                          : 'bg-blue-50 border-blue-100 hover:bg-blue-100'
                      }`}
                    >
                      <h4 className={`text-lg font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {book.title}
                      </h4>
                      <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        by {book.author}
                      </p>
                      <p className="text-xs text-green-500 font-semibold mb-2">{book.genre}</p>
                      <p className={`text-sm mb-2 italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        "{book.vibe}"
                      </p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        💡 {book.why}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shows Section */}
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Shows to Watch While Eating
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {shows.map((show, i) => (
                    <div
                      key={i}
                      className={`p-5 rounded-xl border transition-all hover:scale-[1.02] ${
                        theme === 'dark'
                          ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800'
                          : 'bg-blue-50 border-blue-100 hover:bg-blue-100'
                      }`}
                    >
                      <h4 className={`text-lg font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {show.title}
                      </h4>
                      <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {show.type} • {show.seasons}
                      </p>
                      <p className={`text-sm mb-2 italic ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        "{show.vibe}"
                      </p>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        💡 {show.why}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Got a rec for me?
              </h3>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Send me your favorite book or show! I'll add it to my list 📚
              </p>
              <form className="space-y-4">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Type
                  </label>
                  <div className="flex gap-4">
                    <button type="button" className="px-6 py-2 rounded-full bg-green-500 text-black font-semibold">
                      Book
                    </button>
                    <button type="button" className={`px-6 py-2 rounded-full font-semibold ${
                      theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                    }`}>
                      Show/Movie
                    </button>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Name of book or show"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Author/Creator
                  </label>
                  <input
                    type="text"
                    placeholder="Who made it?"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Why should I read/watch it?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Sell me on it! What's the vibe?"
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
                    placeholder="So I know who to thank!"
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
                  Send Recommendation
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}