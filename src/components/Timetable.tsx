import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Timetable() {
  const { t } = useLanguage();

  const schedule = {
    friday: [
      { time: 'xx:xx', event: t('timetable.placeholder.friday') },
    ],
    saturday: [
      { time: 'yy:yy', event: t('timetable.placeholder.saturday') },
    ],
    sunday: [
      { time: 'zz:zz', event: t('timetable.placeholder.sunday') },
    ],
    /*
    friday: [
      { time: '18:00', event: t('timetable.friday.gala') },
      { time: '23:00', event: t('timetable.friday.afterparty') },
    ],
    saturday: [
      { time: '09:00', event: t('timetable.saturday.breakfast') },
      { time: '10:00', event: t('timetable.saturday.games1') },
      { time: '12:00', event: t('timetable.saturday.lunch') },
      { time: '13:00', event: t('timetable.saturday.games2') },
      { time: '22:00', event: t('timetable.saturday.afterparty') },
    ],
    sunday: [
      { time: '12:00', event: t('timetable.sunday.leaving') },
    ],
    */
  };

  return (
    <section id="timetable" className="py-20 px-4 scroll-mt-16 md:scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl mb-16 text-[#4ecdc4] retro-title neon-text-cyan">
            {t('timetable.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Friday */}
            <div className="bg-[#16213e]/80 backdrop-blur-sm border-4 border-[#4ecdc4] p-6">
              <h4 className="text-lg sm:text-xl md:text-2xl text-[#4ecdc4] mb-6 text-center tracking-wider">
                {t('timetable.friday')}
              </h4>
              <div className="space-y-4">
                {schedule.friday.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="text-[#4ecdc4] min-w-[60px]">{item.time}</span>
                    <span className="text-white">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-[#16213e]/80 backdrop-blur-sm border-4 border-[#4ecdc4] p-6">
              <h4 className="text-lg sm:text-xl md:text-2xl text-[#4ecdc4] mb-6 text-center tracking-wider">
                {t('timetable.saturday')}
              </h4>
              <div className="space-y-4">
                {schedule.saturday.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="text-[#4ecdc4] min-w-[60px]">{item.time}</span>
                    <span className="text-white">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sunday */}
            <div className="bg-[#16213e]/80 backdrop-blur-sm border-4 border-[#4ecdc4] p-6">
              <h4 className="text-lg sm:text-xl md:text-2xl text-[#4ecdc4] mb-6 text-center tracking-wider">
                {t('timetable.sunday')}
              </h4>
              <div className="space-y-4">
                {schedule.sunday.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="text-[#4ecdc4] min-w-[60px]">{item.time}</span>
                    <span className="text-white">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}