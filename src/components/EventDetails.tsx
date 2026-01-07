import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function EventDetails() {
  const { t } = useLanguage();

  return (
    <section id="info" className="py-20 px-4 scroll-mt-16 md:scroll-mt-24 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl mb-16 text-[#ff6b9d] retro-title neon-text">
            {t('event.title')}
          </h2>
        </motion.div>

        {/* General Information with Date and Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-[#16213e] border-4 border-[#ff6b9d] p-12 neon-box">
            {/* Date and Location */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 pb-8 border-b-2 border-[#ff6b9d]/30">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-[#ff6b9d] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#ff6b9d] text-base sm:text-xl mb-2">
                    {t('event.date')}
                  </p>
                  <p className="text-white text-lg sm:text-2xl">
                    {t('hero.date')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-[#ff6b9d] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#ff6b9d] text-base sm:text-xl mb-2">
                    {t('event.location')}
                  </p>
                  <p className="text-white text-lg sm:text-2xl">
                    {t('hero.location')}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-2xl text-white mb-6 leading-relaxed">
              {t('event.description')}
            </p>
            
            {/* Telegram Info */}
            <div className="flex items-start gap-4">
              <MessageCircle className="w-8 h-8 text-[#ff6b9d] flex-shrink-0 mt-1" />
              <div>
                <p className="text-[#ff6b9d] text-xl mb-2">
                  {t('event.telegram.title')}
                </p>
                <p className="text-white">
                  {t('event.telegram.text')} <a 
                    href="https://t.me/titeenientaistot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ff6b9d] hover:underline"
                  >
                    {t('event.telegram.channel')}
                  </a> {t('event.telegram.rest')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sponsors Section 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl mb-8 text-[#ff6b9d] retro-title neon-text">
            {t('footer.sponsors')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center max-w-2xl mx-auto">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className={`text-4xl sm:text-5xl text-[#ff6b9d] tracking-wider opacity-50 hover:opacity-100 transition-opacity ${index === 3 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                LOGO
              </div>
            ))}
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}