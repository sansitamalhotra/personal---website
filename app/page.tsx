import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SpotifyNowPlaying from './components/SpotifyNowPlaying';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <SpotifyNowPlaying />
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}