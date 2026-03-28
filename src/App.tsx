import { Hero } from './components/Hero';
import { EventDetails } from './components/EventDetails';
import { Timetable } from './components/Timetable';
import { Scoreboard } from './components/Scoreboard';
import { Safety } from './components/Safety';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Map } from './components/Map';
import { LanguageProvider } from './contexts/LanguageContext';
import { FloatingPixels } from './components/ArcadeDecorations';
import {
  scoreboardColumnHeaders,
  scoreboardData,
  scoreboardGuildLogos,
} from './lib/scoreboardData';
import { useLanguage } from './contexts/LanguageContext';

function ScoreboardSection() {
  const { t } = useLanguage();

  return (
    <Scoreboard
      title={t('scoreboard.heading')}
      ariaLabel={t('scoreboard.ariaLabel')}
      guildLogos={scoreboardGuildLogos}
      columnHeaders={{
        ...scoreboardColumnHeaders,
        rowLabel: t('scoreboard.column.event'),
      }}
      data={{
        ...scoreboardData,
        rowLabels: [
          t('scoreboard.row.event1'),
          t('scoreboard.row.event2'),
          t('scoreboard.row.event3'),
          t('scoreboard.row.event4'),
          t('scoreboard.row.otaniemipeli'),
          t('scoreboard.row.titeeniParty'),
          t('scoreboard.row.judges'),
        ],
        totalsLabel: t('scoreboard.row.total'),
      }}
    />
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <div className="scanlines" />
        <FloatingPixels />
        <Navigation />
        <Hero />
        <ScoreboardSection />
        <EventDetails />
        <Timetable />
        <Map />
        <Safety />
        <Footer />
      </div>
    </LanguageProvider>
  );
}