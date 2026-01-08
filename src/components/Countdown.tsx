import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Countdown() {
  const targetDate = new Date('2026-03-13T00:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { t } = useLanguage();

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: t('countdown.days'), value: timeLeft.days },
    { label: t('countdown.hours'), value: timeLeft.hours },
    { label: t('countdown.minutes'), value: timeLeft.minutes },
    { label: t('countdown.seconds'), value: timeLeft.seconds }
  ];

  return (
    // <div className="flex justify-center items-center gap-2 sm:gap-8 md:gap-12">
    <table className="table-fixed mx-auto">
      <col className="w-1/4" />
      <col className="w-1/4" />
      <col className="w-1/4" />
      <col className="w-1/4" />
      <tr>
        {timeUnits.map((unit, index) => (
          <td>
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-7xl sm:text-8xl md:text-8xl text-[#ffd700] px-2 sm:px-4 md:px-6 mb-1 sm:mb-2 retro-number">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-[#ff6b9d] tracking-widest text-md font-bold sm:text-md md:text-base">
                {unit.label}
              </div>
            </motion.div>
          </td>
        ))}
      </tr>
    </table>
    // </div>
  );
}