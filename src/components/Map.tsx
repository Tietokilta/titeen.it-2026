import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Map() {
  const { t } = useLanguage();

  const locations = [
    { 
      nameKey: 'locations.kandidaattikeskus',
      address: 'Otakaari 1',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kandidaattikeskus+Otaniemi'
    },
    { 
      nameKey: 'locations.smokki',
      address: 'Jämeräntaival 3',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Smökki+Otaniemi'
    },
    { 
      nameKey: 'locations.rantasauna',
      address: 'Otaranta 2',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rantasauna+Otaniemi'
    },
    { 
      nameKey: 'locations.otakaari20',
      address: 'Otakaari 20',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Otakaari+20+Espoo'
    },
    { 
      nameKey: 'locations.tietotekniikantalo',
      address: 'Konemiehentie 2',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tietotekniikantalo+Otaniemi'
    },
  ];

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {locations.map((location, index) => (
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
                    <h3 className="text-base sm:text-lg md:text-xl text-[#ffd700] mb-2 break-words">{t(location.nameKey)}</h3>
                    <p className="text-white/70">{location.address}</p>
                  </div>
                </div>
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#ffd700] hover:text-[#ff6b9d] transition-colors"
                >
                  {t('locations.viewMap')}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <div className="relative border-4 border-[#ffd700] neon-box overflow-hidden bg-[#0f3460]">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15901.846739285593!2d24.81745!3d60.18622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df5859ce52be7%3A0x400b551554bc8f0!2sOtaniemi%2C%20Espoo%2C%20Finland!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}