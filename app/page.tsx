import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SpotifyNowPlaying from './components/SpotifyNowPlaying';
import Projects from './components/Projects';
export default function Home() {
  return (
    <main>
      <Navbar />
      <SpotifyNowPlaying />
      <Hero />
      <Projects />
    </main>
  );
}