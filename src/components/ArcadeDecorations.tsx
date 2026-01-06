import { motion } from 'motion/react';

export function FloatingPixels() {
  const pixels = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    color: ['#ff6b9d', '#ffd700', '#4ecdc4'][i % 3],
    delay: i * 0.5,
    duration: 10 + (i % 5),
    x: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {pixels.map((pixel) => (
        <motion.div
          key={pixel.id}
          className="absolute w-2 h-2 opacity-40"
          style={{
            backgroundColor: pixel.color,
            left: `${pixel.x}%`,
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: pixel.duration,
            delay: pixel.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
