import sleepIconUrl from 'icon:asset/krooh_mimimi.png';
import uniIconUrl from 'icon:asset/lipasto.png';
import partyIconUrl from 'icon:asset/party.png';

import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const sleepIcon = { url: sleepIconUrl, bgColor: '#4ecdc4' };
const uniIcon = { url: uniIconUrl, bgColor: '#ffd700' };
const partyIcon = { url: partyIconUrl, bgColor: '#ff6b9d' };

const sleeping_locations = [
  { 
    nameKey: 'locations.otakaari20',
    address: 'Otakaari 20',
    coords: [60.1869446, 24.8337694],
    // mapUrl: 'https://www.google.com/maps/search/?api=1&query=Otakaari+20+Espoo',
    icon: sleepIcon
  },
  { 
    nameKey: 'locations.rantasauna',
    address: 'Vastaranta 1',
    coords: [60.1882126, 24.8392378],
    // mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rantasauna+Otaniemi',
    icon: sleepIcon
  },
  { 
    nameKey: 'locations.heymo',
    address: 'Miestentie 5',
    coords: [60.1788997, 24.830096],
    // mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotelli+Heymo+1+Espoo',
    icon: sleepIcon
  },
  { 
    nameKey: 'locations.forenom',
    address: 'Miestentie 5',
    coords: [60.1794569, 24.8284948],
    // mapUrl: 'https://www.google.com/maps/search/?api=1&query=Forenom+Hostel+Otaniemi',
    icon: sleepIcon
  },
];

const important_locations = [
  { 
    nameKey: 'locations.kandidaattikeskus',
    address: 'Otakaari 1',
    coords: [60.1859838, 24.8271078],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kandidaattikeskus+Otaniemi',
    icon: uniIcon
  },
  { 
    nameKey: 'locations.smokki',
    address: 'Jämeräntaival 4',
    coords: [60.1883511, 24.8365035],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Smökki+Otaniemi',
    icon: partyIcon
  },
  {
    nameKey: 'BMK',
    address: 'Betonimiehenkuja 3',
    coords: [60.1805879, 24.8323172],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Betonimiehenkuja+3+Otaniemi',
    icon: partyIcon
  },
  { 
    nameKey: 'locations.tietotekniikantalo',
    address: 'Konemiehentie 2',
    coords: [60.1869638, 24.8213831],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Konemiehentie+2+Espoo',
    icon: uniIcon
  },
];

const createIcon = (iconUrl: string, bgColor: string) => L.divIcon({
  className: '',
  html: `
    <div style="
      width: 40px;
      height: 40px;
      background: ${bgColor};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <img src="${iconUrl}" style="width: 24px; height: auto;" />
    </div>
  `,
  iconSize: [32, 32],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

export function Map() {
  const { t, language } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ marker: L.Marker; nameKey: string }[]>([]);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current);
    mapInstanceRef.current = map;
    const bounds = L.latLngBounds([]);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    [...sleeping_locations, ...important_locations].forEach(loc => {
      const marker = L.marker(loc.coords as L.LatLngExpression, { icon: createIcon(loc.icon.url, loc.icon.bgColor) })
        .addTo(map)
        .bindPopup(t(loc.nameKey));

      markersRef.current.push({ marker, nameKey: loc.nameKey });
      bounds.extend(loc.coords as L.LatLngExpression);
    });

    map.fitBounds(bounds, { padding: [50, 50] });


    return () => {
      map.remove();
      mapInstanceRef.current = null;
      markersRef.current = [];
    };
  }, []);

  // Update popup content when language changes
  useEffect(() => {
    markersRef.current.forEach(({ marker, nameKey }) => {
      marker.setPopupContent(t(nameKey));
    });
  }, [t]);

  return (
    <section id="map" className="py-20 px-4 scroll-mt-16 md:scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl mb-16 text-[#ffd700] retro-title neon-text-gold">
            {t('locations.title')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 max-w-2xl mx-auto">
            {important_locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#16213e]/80 backdrop-blur-sm border-4 border-[#ffd700] p-4 sm:p-6 hover:border-[#ff6b9d] transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-[#ffd700]/20 rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#ffd700]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      lang={language}
                      className="text-base sm:text-lg md:text-xl text-[#ffd700] mb-2"
                      style={{
                        hyphens: 'auto',
                        WebkitHyphens: 'auto',
                        msHyphens: 'auto',
                        overflowWrap: 'break-word', // fallback if hyphenation dictionary missing
                        wordBreak: 'break-word',
                      }}
                    >
                      {t(location.nameKey)}
                    </h3>
                    <p className="text-white/70">{location.address}</p>
                  </div>
                </div>
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#ffd700] font-bold hover:text-[#ff6b9d] transition-colors"
                >
                  {t('locations.viewMap')}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <div className="relative border-4 border-[#ffd700] neon-box overflow-hidden bg-[#0f3460]">
            <div className="aspect-square sm:aspect-video w-full">
              <div ref={mapRef} className="w-full h-full z-0" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}