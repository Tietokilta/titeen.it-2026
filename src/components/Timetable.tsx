import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function Timetable() {
  const { t } = useLanguage();

  const schedule = {
    friday: [
      {
        time: "15:00",
        event: t("timetable.friday.arrival"),
        location: null,
      },
      {
        time: "18:00",
        event: t("timetable.friday.sitsit"),
        location: t("locations.smokki"),
      },
      // { time: '19:00', event: t('timetable.friday.declaration'), location: t('locations.smokki') },
      {
        time: "22:00",
        event: t("timetable.friday.afterparty"),
        location: t("locations.smokki"),
      },
      {
        time: "01:00",
        event: t("timetable.friday.sleep"),
        location: null,
      },
    ],
    saturday: [
      {
        time: "08:00",
        event: t("timetable.saturday.wakeup"),
        location: null,
      },
      {
        time: "08:30",
        event: t("timetable.saturday.breakfast"),
        location: t("locations.u2"),
      },
      {
        time: "10:00",
        event: t("timetable.saturday.game1"),
        location: t("locations.tip"),
      },
      {
        time: "11:30",
        event: t("timetable.saturday.lunch"),
        location: t("locations.tf"),
      },
      {
        time: "13:30",
        event: t("timetable.saturday.game2"),
        location: t("locations.u2"),
      },
      {
        time: "15:00",
        event: t("timetable.saturday.game3"),
        location: t("locations.alvari"),
      },
      {
        time: "17:00",
        event: t("timetable.saturday.game4"),
        location: t("locations.u2"),
      },
      {
        time: "19:00",
        event: t("timetable.saturday.game5"),
        location: t("locations.bmk"),
      },
      {
        time: "22:00",
        event: t("timetable.saturday.results"),
        location: t("locations.bmk"),
      },
      {
        time: "22:15",
        event: t("timetable.saturday.afterparty"),
        location: t("locations.bmk"),
      },
      {
        time: "04:00",
        event: t("timetable.saturday.sleep"),
        location: null,
      },
    ],
    sunday: [
      {
        time: "08:00",
        event: t("timetable.sunday.wakeup"),
        location: null,
      },
      {
        time: "08:15",
        event: t("timetable.sunday.leaving"),
        location: t("locations.rantasauna"),
      },
      {
        time: "08:30",
        event: t("timetable.sunday.breakfast"),
        location: t("locations.ok20"),
      },
      {
        time: "11:00",
        event: t("timetable.sunday.leaving"),
        location: t("locations.forenom"),
      },
      {
        time: "11:00",
        event: t("timetable.sunday.leaving"),
        location: t("locations.ok20"),
      },
      {
        time: "12:00",
        event: t("timetable.sunday.leaving"),
        location: t("locations.heymo"),
      },
    ],
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
            {t("timetable.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 relative z-20">
            {/* Friday */}
            <div className="bg-[#16213e]/80 backdrop-blur-sm border-4 border-[#4ecdc4] p-6">
              <h4 className="text-lg sm:text-xl md:text-2xl text-[#4ecdc4] mb-6 text-center tracking-wider">
                {t("timetable.friday")}
              </h4>
              <div className="space-y-2">
                {schedule.friday.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="text-[#4ecdc4] font-bold min-w-[60px]">
                      {item.time}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-white">{item.event}</span>
                      {item.location && (
                        <span className="text-[#4ecdc4]">{item.location}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-[#16213e]/80 backdrop-blur-sm border-4 border-[#4ecdc4] p-6">
              <h4 className="text-lg sm:text-xl md:text-2xl text-[#4ecdc4] mb-6 text-center tracking-wider">
                {t("timetable.saturday")}
              </h4>
              <div className="space-y-2">
                {schedule.saturday.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="text-[#4ecdc4] font-bold min-w-[60px]">
                      {item.time}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-white">{item.event}</span>
                      {item.location && (
                        <span className="text-[#4ecdc4]">{item.location}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sunday */}
            <div className="bg-[#16213e]/80 backdrop-blur-sm border-4 border-[#4ecdc4] p-6">
              <h4 className="text-lg sm:text-xl md:text-2xl text-[#4ecdc4] mb-6 text-center tracking-wider">
                {t("timetable.sunday")}
              </h4>
              <div className="space-y-2">
                {schedule.sunday.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="text-[#4ecdc4] font-bold min-w-[60px]">
                      {item.time}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-white">{item.event}</span>
                      {item.location && (
                        <span className="text-[#4ecdc4]">{item.location}</span>
                      )}
                    </div>
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
