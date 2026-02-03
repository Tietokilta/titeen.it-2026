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
    'nav.safety': 'Turvallisuus',
    
    // Hero
    'hero.date': '13.-15.3.2026',
    'hero.location': 'Otaniemi',
    'hero.startGame': 'ALOITA PELI',
    'hero.closeGame': 'SULJE PELI',
    
    // Countdown
    'countdown.title': 'TAPAHTUMA ALKAA',
    'countdown.days': 'PÄIVÄÄ',
    'countdown.hours': 'TUNTIA',
    'countdown.minutes': 'MINUUTTIA',
    'countdown.seconds': 'SEKUNTIA',
    
    // Event Details
    'event.title': 'TAPAHTUMA',
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
    'locations.heymo': 'Hotelli Heymo',
    'locations.forenom': 'Forenom Hostel',
    'locations.kandidaattikeskus': 'Kandidaattikeskus',
    'locations.smokki': 'Smökki',
    'locations.rantasauna': 'Rantasauna',
    'locations.otakaari20': 'Otakaari 20',
    'locations.tietotekniikantalo': 'Tietotekniikantalo',
    
    // Safety
    'safety.title': "TURVALLISUUS",
    'safety.intro': 'Titeeneillä noudatetaan Tietokillan [LINK:codeOfConduct]eettistä ohjesääntöä[/LINK] ja [LINK:saferSpace]AYY:n turvallisemman tilan periaatteita[/LINK]. Jokaisen osallistujan, järjestäjän ja sidosryhmän edustajan odotetaan noudattavan näitä säännöksiä, sekä seuraavia yleisiä linjauksia:',
    'safety.guidelinesTitle': 'Titeenien yleiset linjaukset',
    'safety.guidelines.1': 'Häirintä, väkivalta, rasistinen tai seksistinen käytös sekä muu syrjivä toiminta on kiellettyä.',
    'safety.guidelines.2': 'Vihapuhe sekä vihamieliset eleet ja symbolit eivät ole sallittuja.',
    'safety.guidelines.3': 'Saunassa ja paljussa käydään uima-asu päällä.',
    'safety.guidelines.4': 'Tapahtumaan osallistumalla sitoudut kunnioittamaan toisia osallistujia, järjestäjiä ja tapahtumatiloja.',
    'safety.guidelines.5': 'Epäasiallisesta käytöksestä pyydetään ilmoittamaan viipymättä häirintäyhdyshenkilölle, järjestäjälle tai Tietokillan [LINK:reportForm]anonyymiin häirintätilanteiden ilmoituslomakkeeseen[/LINK].',
    'safety.guidelines.6': 'Sääntöjen rikkominen johtaa tilanteen edellyttämiin jatkoseuraamuksiin, kuten osallistujan poistamiseen tapahtumasta tai joukkueen ulossulkemiseen.',
    
    'safety.actionTitle': 'Toimintaohjeet',
    'safety.action': 'Kunnioita toisen henkilökohtaista fyysistä ja psyykkistä tilaa. Kunnioita itsemääräämisoikeutta. Älä koske toista kysymättä lupaa. Muista, ettet voi tietää toisen rajoja kysymättä niitä. Pyydä tilaa myös itsellesi tarvittaessa.\n\nNoudata ehdotonta nollatoleranssia kaikenlaista väkivaltaa kohtaan. Älä loukkaa toisen fyysistä koskemattomuutta äläkä käytä henkistä väkivaltaa, kuten pelottelua, uhkailua tai ahdistelua. Vältä aggressiivista käytöstä ja valtarakenteiden väärinkäyttöä kaikissa tilanteissa.\n\nÄlä syrji, käytä vihapuhetta tai käyttäydy halventavasti. Pitäydy kielellisistä ilmaisuista, eleistä ja symboleista, jotka välittävät syrjivää, vihamielistä tai sortavaa sanomaa. Varmista, ettei viestintäsi luo turvatonta tai poissulkevaa ilmapiiriä.\n\nÄlä pilkkaa, ivaa, halvenna, sysää syrjään tai nolaa ketään puheillasi, käytökselläsi tai teoillasi. Pitäydy ulkonäön arvostelusta, juoruilusta ja stereotypioiden ylläpitämisestä.\n\nÄlä tee oletuksia ulkonäköön tai toimintaan perustuen. Älä tee oletuksia kenenkään seksuaalisuudesta, sukupuolesta, kansallisuudesta, etnisyydestä, uskonnosta, arvoista, sosioekonomisesta taustasta, terveydestä tai toimintakyvystä.\n\nAnna tilaa. Pyri huolehtimaan siitä, että kaikilla on mahdollisuus osallistua keskusteluun. Älä jyrää muiden mielipiteitä ja anna puheenvuoro. Kunnioita myös toisten yksityisyyttä ja käsittele arkoja aiheita kunnioittavasti.\n\nKuuntele ja opi. Ota vastaan uudet aiheet, henkilöt ja näkökulmat ennakkoluulottomasti. Suhtaudu jokaiseen vastaantulevaan asiaan ja tilanteeseen mahdollisuutena oppia uutta ja kehittyä. Pyydä anteeksi, jos olet loukannut tahallisesti tai tahattomasti muita.',
    
    'safety.ifEncounterTitle': 'Häirintätilanteen kohdatessasi',
    'safety.ifEncounter': 'Ota yhteyttä Titeeneillä päivystäviin häirintäyhdyshenkilöihin, tapahtuman järjestäjiin tai jätä häirintäyhdyshenkilöille viesti Tietokillan [LINK:reportForm]anonyymiin ilmoituslomakkeeseen[/LINK]. Häirintäyhdyshenkilöiden yhteystiedot löydät tämän sivun alusta, tapahtumatilojen seiniltä ja vessoista, sekä Titeenien Telegram-tiedotuksesta.\n\nHäirintäyhdyshenkilöihin voi ottaa yhteyttä erittäin matalalla kynnyksellä ja häirintätilanteista voi ilmoittaa myös anonyymisti tai toisen henkilön puolesta.',
    
    'safety.hcpTitle': 'Häirintäyhdyshenkilöt',
    'safety.hcp': 'Titeeneillä päivystää häirintäyhdyshenkilöitä. Häryihin voivat olla yhteydessä kaikki osallistujat, vapaaehtoiset ja esiintyjät matalalla kynnyksellä.\n\nTietokillan häirintäyhdyshenkilöt ovat aina alkoholittomia. Heidän tehtävänä on olla puolueettomana tukijana kaikille, jotka ovat kokeneet minkäänlaista syrjintää, häirintää, ahdistelua tai epäasiallista kohtelua.\n\nTietokillan häirintäyhdyshenkilöt tunnistaa pinkeistä huomioliiveistä.\n\nTiteeneiden häirintäyhdyshenkilöinä toimivat Tietokillan vapaaehtoiset, jotka ovat käyneet AYY:n häirintäyhdyshenkilökoulutuksen ja toimineet häryinä killan tapahtumissa aiemminkin.\n\nHäirintätilanteet pyritään hoitamaan ensisijaisesti ratkaisukeskeisesti ja tarvittaessa osapuolet voidaan ohjata saamaan apua sopivan tuen piiriin. Häirintäyhdyshenkilö voi myös auttaa tilanteiden selvittelyssä yhdessä muiden tapahtuman häirintäyhdyshenkilöiden ja järjestäjien kanssa.\n\nFyysinen ja psyykkinen koskemattomuus on kaikkien oikeus ja Titeeneillä täytyy voida saada tuntea olonsa turvalliseksi ilman pelkoa minkäänlaisesta syrjinnästä tai häirinnästä, seksuaalisesta tai verbaalisesta ahdistelusta tai muutoin epäasiallisesta kohtelusta ja käytöksestä.\n\nTälle sivulle päivittyy häirintäyhdyshenkilöiden tiedot lähempänä tapahtumaa.',
    
    // Link URLs for Safety component
    'links.codeOfConduct': 'https://tietokilta.fi/fi/kilta/eettinenohjesaanto',
    'links.saferSpace': 'https://www.ayy.fi/system/files/2025-01/Virallinen-Turvallisemman%20tilan%20periaatteet%20fi.pdf',
    'links.reportForm': 'https://tietokilta.fi/fi/yhdenvertaisuus/hairintalomake',

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
    'nav.safety': 'Safety',
    
    // Hero
    'hero.date': '13.-15.3.2026',
    'hero.location': 'Otaniemi',
    'hero.startGame': 'START GAME',
    'hero.closeGame': 'CLOSE GAME',
    
    // Countdown
    'countdown.title': 'EVENT STARTS IN',
    'countdown.days': 'DAYS',
    'countdown.hours': 'HOURS',
    'countdown.minutes': 'MINUTES',
    'countdown.seconds': 'SECONDS',
    
    // Event Details
    'event.title': 'EVENT',
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
    'locations.heymo': 'Hotel Heymo',
    'locations.forenom': 'Forenom Hostel',
    'locations.kandidaattikeskus': 'Undergraduate Center',
    'locations.smokki': 'Smökki',
    'locations.rantasauna': 'Rantasauna',
    'locations.otakaari20': 'Otakaari 20',
    'locations.tietotekniikantalo': 'Computer Science Building',
    
    // Safety
    'safety.title': 'SAFETY',
    'safety.intro': 'At the Clash of the Titens, Tietokilta\'s [LINK:codeOfConduct]Code of Conduct[/LINK] and [LINK:saferSpace]AYY\'s Safer Space Principles[/LINK] are followed. All participants, organizers, and representatives of partner organizations are expected to comply with these rules, as well as the following general guidelines:',
    'safety.guidelinesTitle': 'Clash of the Titens – General Guidelines',
    'safety.guidelines.1': 'Harassment, violence, racist or sexist behavior, and all other forms of discriminatory conduct are prohibited.',
    'safety.guidelines.2': 'Hate speech, hostile gestures, and/or symbols are not allowed.',
    'safety.guidelines.3': 'In the sauna and hot tub, swimwear must be worn.',
    'safety.guidelines.4': 'By participating in the event, you commit to respecting other participants, the organizers, and the event facilities.',
    'safety.guidelines.5': 'Inappropriate behavior should be reported without delay to a harassment contact person, an organizer, or via Tietokilta\'s [LINK:reportForm]harassment report form[/LINK].',
    'safety.guidelines.6': 'Violations of the rules will result in consequences appropriate to the situation, such as removal of a participant from the event or exclusion of a team.',
    
    'safety.actionTitle': 'Act accordinly',
    'safety.action': 'Respect others\' personal physical and psychological space. Respect self-determination. Do not touch others without asking for consent. Remember that you cannot know another person\'s boundaries without asking. Ask for space for yourself when needed.\n\nMaintain zero tolerance for all forms of violence. Do not violate others\' physical integrity and do not use psychological violence such as intimidation, threats, or harassment. Avoid aggressive behavior and the misuse of power structures in all situations.\n\nDo not discriminate, use hate speech, or behave in a demeaning manner. Refrain from language, gestures, and symbols that convey discriminatory, hostile, or oppressive messages. Ensure that your communication does not create an unsafe or exclusionary atmosphere.\n\nDo not mock, ridicule, belittle, exclude, or embarrass anyone through your speech, behavior, or actions. Refrain from commenting on appearance, gossiping, and perpetuating stereotypes.\n\nDo not make assumptions based on appearance or behavior. Do not assume anyone\'s sexuality, gender, nationality, ethnicity, religion, values, socioeconomic background, health, or ability.\n\nGive space. Strive to ensure that everyone has the opportunity to participate in discussions. Do not talk over others; give others the floor. Also respect others\' privacy and handle sensitive topics with respect.\n\nListen and learn. Approach new topics, people, and perspectives with an open mind. Treat every encounter and situation as an opportunity to learn and develop. Apologize if you have intentionally or unintentionally hurt others.',
    
    'safety.ifEncounterTitle': 'If you encounter harassment',
    'safety.ifEncounter': 'Contact the harassment contact persons on duty at Titeenit, the event organizers, or leave a message for the harassment contact persons via Tietokilta\'s [LINK:reportForm]anonymous reporting form[/LINK]. You can find the contact details of the harassment contact persons at the top of this page, on the walls and in the restrooms of the event venues, and in Titeenit\'s Telegram communications.\n\nYou can contact the harassment contact persons with a very low threshold, and incidents can also be reported anonymously or on behalf of another person.',
    
    'safety.hcpTitle': 'Harassment contact persons',
    'safety.hcp': 'Harassment contact persons are on duty at Titeenit. All event guests, volunteers, and performers can contact them with a low threshold.\n\nTietokilta\'s harassment contact persons can be recognized by pink high-visibility vests.\n\nThe harassment contact persons at Titeenit are Tietokilta volunteers who have completed AYY\'s harassment contact person training and have previously served in this role at guild events. Harassment contact persons are always sober, and their role is to act as an impartial support for anyone who has experienced any form of discrimination, harassment, intimidation, or inappropriate treatment.\n\nHarassment situations are primarily handled in a solution-oriented manner, and if necessary, the parties involved may be guided to appropriate support services. A harassment contact person can also assist in resolving situations together with other harassment contact persons and the event organizers.\n\nPhysical and psychological integrity is everyone\'s right, and at Titeenit everyone must be able to feel safe without fear of any form of discrimination or harassment, sexual or verbal harassment, or other inappropriate treatment or behavior.\n\nThe details of the harassment contact persons will be updated on this page closer to the event.',
    
    // Link URLs for Safety component
    'links.codeOfConduct': 'https://tietokilta.fi/en/guild/codeofconduct',
    'links.saferSpace': 'https://www.ayy.fi/system/files/2025-01/Virallinen-Turvallisemman%20tilan%20periaatteet%20eng.pdf',
    'links.reportForm': 'https://tietokilta.fi/en/equity/harassment-form',
    
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