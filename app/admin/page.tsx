'use client';

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [books, setBooks] = useState([]);
  const [ideas, setIdeas] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('/api/books').then(r => r.json()).then(setBooks);
    fetch('/api/ideas').then(r => r.json()).then(setIdeas);
  }, []);

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">📊 Submissions Dashboard</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">📚 Book/Show Recs ({books.length})</h2>
        <div className="grid gap-4">
          {books.map((book: any) => (
            <div key={book._id} className="bg-gray-800 p-4 rounded-lg">
              <p className="font-bold text-lg">{book.title}</p>
              <p className="text-sm text-gray-400">{book.author}</p>
              <p className="mt-2">{book.description}</p>
              <div className="flex justify-between mt-3 text-xs text-gray-500">
                <span>By: {book.submittedBy}</span>
                <span>{new Date(book.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">💡 Project Ideas ({ideas.length})</h2>
        <div className="grid gap-4">
          {ideas.map((idea: any) => (
            <div key={idea._id} className="bg-gray-800 p-4 rounded-lg">
              <p className="font-bold text-lg">{idea.title}</p>
              <p className="mt-2">{idea.description}</p>
              <p className="text-sm text-blue-400 mt-2">Tech: {idea.techStack}</p>
              <div className="flex justify-between mt-3 text-xs text-gray-500">
                <span>By: {idea.submittedBy}</span>
                <span>{new Date(idea.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}   