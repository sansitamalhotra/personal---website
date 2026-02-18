import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SpotifyNowPlaying from './components/SpotifyNowPlaying';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CursorTrail from './components/CursorTrail';
import PixelMe from './components/PixelMe';
import FloatingBlobs from './components/FloatingBlobs';
import About from './components/About';

export default function Home() {
  return (
    <main>
      <Navbar />
      <SpotifyNowPlaying />
      <Hero />
      <Projects />
      <Contact />
      <CursorTrail />
      <PixelMe />
      <About/>
      <FloatingBlobs />
    </main>
  );
} 