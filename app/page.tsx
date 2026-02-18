'use client';

import { useState } from 'react';
import SpotifyLayout from './components/SpotifyLayout';
import SpotifyHome from './components/SpotifyHome';
import SpotifyProjects from './components/SpotifyProjects';
import SpotifyAbout from './components/SpotifyAbout';
import SpotifyContact from './components/SpotifyContact';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <SpotifyHome />;
      case 'projects':
        return <SpotifyProjects />;
      case 'about':
        return <SpotifyAbout />;
      case 'experience':
        return <div className="text-white p-8">Experience section coming soon...</div>;
      case 'contact':
        return <SpotifyContact />;    
      default:
        return <SpotifyHome />;
    }
  };

  return (
    <SpotifyLayout 
      currentSection={currentSection}
      onSectionChange={setCurrentSection}
    >
      {renderSection()}
    </SpotifyLayout>
  );
}