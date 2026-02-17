import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SpotifyNowPlaying from './components/SpotifyNowPlaying';

export default function Home() {
  return (
    <main>
      <Navbar />
      <SpotifyNowPlaying />
      <Hero />
    </main>
  );
}