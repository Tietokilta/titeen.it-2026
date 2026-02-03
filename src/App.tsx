import { Hero } from './components/Hero';
import { EventDetails } from './components/EventDetails';
import { Timetable } from './components/Timetable';
import { Safety } from './components/Safety';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Map } from './components/Map';
import { LanguageProvider } from './contexts/LanguageContext';
import { FloatingPixels } from './components/ArcadeDecorations';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <div className="scanlines" />
        <FloatingPixels />
        <Navigation />
        <Hero />
        <EventDetails />
        <Timetable />
        <Map />
        <Safety />
        <Footer />
      </div>
    </LanguageProvider>
  );
}