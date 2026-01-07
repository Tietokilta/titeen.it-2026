import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fi: {
    // Navigation
    'nav.main': 'Etusivu',
    'nav.info': 'Info',
    'nav.timetable': 'Aikataulu',
    'nav.map': 'Kartta',
    
    // Hero
    'hero.date': '13.-15.3.2026',
    'hero.location': 'Otaniemi, Espoo',
    'hero.startGame': 'ALOITA PELI',
    'hero.closeGame': 'SULJE PELI',
    
    // Countdown
    'countdown.title': 'TAPAHTUMA ALKAA',
    'countdown.days': 'PÄIVÄÄ',
    'countdown.hours': 'TUNTIA',
    'countdown.minutes': 'MINUUTTIA',
    'countdown.seconds': 'SEKUNTIA',
    
    // Event Details
    'event.title': 'TAPAHTUMAN TIEDOT',
    'event.date': 'Päivämäärä',
    'event.location': 'Sijainti',
    'event.description': 'Valmistaudu eeppiseen elämykseen Otaniemessä!',
    'event.telegram.title': 'Pysy ajan tasalla!',
    'event.telegram.text': 'Muista liittyä',
    'event.telegram.channel': 'Telegram-infokanavalle',
    'event.telegram.rest': 'saadaksesi viimeisimmät päivitykset, ilmoitukset ja tapahtumatiedot.',
    
    // Timetable
    'timetable.title': 'AIKATAULU',
    'timetable.placeholder.friday': 'Kenties jotain',
    'timetable.placeholder.saturday': 'Eiköhän me pari juttua keksitä',
    'timetable.placeholder.sunday': 'Hyvästit :(',
    'timetable.friday': 'Perjantai 13.3.',
    'timetable.friday.gala': 'Titeenigaala',
    'timetable.friday.afterparty': 'Jatkot',
    'timetable.saturday': 'Lauantai 14.3.',
    'timetable.saturday.breakfast': 'Aamiainen',
    'timetable.saturday.games1': 'Lajeja',
    'timetable.saturday.lunch': 'Lounas',
    'timetable.saturday.games2': 'Lajeja',
    'timetable.saturday.afterparty': 'Jatkot',
    'timetable.sunday': 'Sunnuntai 15.3.',
    'timetable.sunday.leaving': 'Lähtö',
    
    // Locations
    'locations.title': 'SIJAINNIT',
    'locations.viewMap': 'Näytä kartalla →',
    'locations.kandidaattikeskus': 'Kandidaattikeskus',
    'locations.smokki': 'Smökki',
    'locations.rantasauna': 'Rantasauna',
    'locations.otakaari20': 'Otakaari 20',
    'locations.tietotekniikantalo': 'Tietotekniikantalo',
    
    // Footer
    'footer.sponsors': 'YHTEISTYÖKUMPPANIT',
    'footer.text': '© 2026 Titeenit. All rights reserved.',
    'footer.title': 'Titeenit 2026',
  },
  en: {
    // Navigation
    'nav.main': 'Main',
    'nav.info': 'Info',
    'nav.timetable': 'Timetable',
    'nav.map': 'Map',
    
    // Hero
    'hero.date': '13.-15.3.2026',
    'hero.location': 'Otaniemi, Espoo',
    'hero.startGame': 'START GAME',
    'hero.closeGame': 'CLOSE GAME',
    
    // Countdown
    'countdown.title': 'EVENT STARTS IN',
    'countdown.days': 'DAYS',
    'countdown.hours': 'HOURS',
    'countdown.minutes': 'MINUTES',
    'countdown.seconds': 'SECONDS',
    
    // Event Details
    'event.title': 'EVENT INFO',
    'event.date': 'Date',
    'event.location': 'Location',
    'event.description': 'Get ready for an epic experience in Otaniemi!',
    'event.telegram.title': 'Stay Updated!',
    'event.telegram.text': 'Remember to join the',
    'event.telegram.channel': 'Telegram info channel',
    'event.telegram.rest': 'for latest updates, announcements, and event details.',
    
    // Timetable
    'timetable.title': 'TIMETABLE',
    'timetable.placeholder.friday': 'Perhaps something',
    'timetable.placeholder.saturday': 'We\'ll figure out a thing or two',
    'timetable.placeholder.sunday': 'Goodbyes :(',
    'timetable.friday': 'Friday 13.3.',
    'timetable.friday.gala': 'Titeeni Gala',
    'timetable.friday.afterparty': 'Afterparty',
    'timetable.saturday': 'Saturday 14.3.',
    'timetable.saturday.breakfast': 'Breakfast',
    'timetable.saturday.games1': 'Games',
    'timetable.saturday.lunch': 'Lunch',
    'timetable.saturday.games2': 'Games',
    'timetable.saturday.afterparty': 'Afterparty',
    'timetable.sunday': 'Sunday 15.3.',
    'timetable.sunday.leaving': 'Departure',
    
    // Locations
    'locations.title': 'LOCATIONS',
    'locations.viewMap': 'View on Map →',
    'locations.kandidaattikeskus': 'Undergraduate Center',
    'locations.smokki': 'Smökki',
    'locations.rantasauna': 'Rantasauna',
    'locations.otakaari20': 'Otakaari 20',
    'locations.tietotekniikantalo': 'Computer Science Building',
    
    // Footer
    'footer.sponsors': 'SPONSORS',
    'footer.text': '© 2026 Titeenit. All rights reserved.',
    'footer.title': 'Titeenit 2026',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fi']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}