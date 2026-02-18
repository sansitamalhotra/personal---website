'use client';

import { useState } from 'react';
import SpotifyLayout from './components/SpotifyLayout';
import SpotifyHome from './components/SpotifyHome';
import SpotifyProjects from './components/SpotifyProjects';
import SpotifyAbout from './components/SpotifyAbout';
import SpotifyContact from './components/SpotifyContact';
import SpotifyExperience from './components/SpotifyExperience';
//import HorizontalProjects from './components/HorizontalProjects';

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
      case 'contact':
        return <SpotifyContact />;    
        case 'experience':
  return <SpotifyExperience />; 
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