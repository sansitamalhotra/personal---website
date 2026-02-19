'use client';

import { useState } from 'react';
import SpotifyLayout from './components/SpotifyLayout';
import SpotifyHome from './components/SpotifyHome';
import SpotifyProjects from './components/SpotifyProjects';
import SpotifyAbout from './components/SpotifyAbout';
import SpotifyContact from './components/SpotifyContact';
import SpotifyExperience from './components/SpotifyExperience';
import BooksModal from './components/BooksModal';
import GoalsModal from './components/GoalsModal';
import IdeasModal from './components/IdeasModal';
import MusicModal from './components/MusicModal';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleSectionChange = (section: string) => {
    // Check if it's a modal section
    if (['books', 'goals', 'ideas', 'music'].includes(section)) {
      setActiveModal(section);
    } else {
      setCurrentSection(section);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <SpotifyHome onSectionChange={handleSectionChange} />;
      case 'projects':
        return <SpotifyProjects />;
      case 'about':
        return <SpotifyAbout />;
      case 'experience':
        return <SpotifyExperience />;
      case 'contact':
        return <SpotifyContact />;
      default:
        return <SpotifyHome onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <>
      <SpotifyLayout 
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
      >
        {renderSection()}
      </SpotifyLayout>

      {/* Modals */}
      <BooksModal 
        isOpen={activeModal === 'books'} 
        onClose={() => setActiveModal(null)} 
      />
      <GoalsModal 
        isOpen={activeModal === 'goals'} 
        onClose={() => setActiveModal(null)} 
      />
      <IdeasModal 
        isOpen={activeModal === 'ideas'} 
        onClose={() => setActiveModal(null)} 
      />
      <MusicModal 
        isOpen={activeModal === 'music'} 
        onClose={() => setActiveModal(null)} 
      />
    </>
  );
}