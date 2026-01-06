import { motion } from 'motion/react';

export function ArcadeCorners() {
  return (
    <>
      {/* Top Left Corner */}
      <div className="fixed top-0 left-0 z-40 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-60">
          {/* Outer border */}
          <path d="M 0 0 L 120 0 L 120 20 L 20 20 L 20 120 L 0 120 Z" fill="#ff6b9d" opacity="0.3"/>
          {/* Inner accent */}
          <path d="M 5 5 L 115 5 L 115 15 L 15 15 L 15 115 L 5 115 Z" fill="#ffd700" opacity="0.5"/>
          {/* Pixel decorations */}
          <rect x="30" y="8" width="8" height="8" fill="#4ecdc4"/>
          <rect x="42" y="8" width="8" height="8" fill="#4ecdc4"/>
          <rect x="8" y="30" width="8" height="8" fill="#4ecdc4"/>
          <rect x="8" y="42" width="8" height="8" fill="#4ecdc4"/>
        </svg>
      </div>

      {/* Top Right Corner */}
      <div className="fixed top-0 right-0 z-40 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-60">
          <path d="M 120 0 L 0 0 L 0 20 L 100 20 L 100 120 L 120 120 Z" fill="#ff6b9d" opacity="0.3"/>
          <path d="M 115 5 L 5 5 L 5 15 L 105 15 L 105 115 L 115 115 Z" fill="#ffd700" opacity="0.5"/>
          <rect x="82" y="8" width="8" height="8" fill="#4ecdc4"/>
          <rect x="70" y="8" width="8" height="8" fill="#4ecdc4"/>
          <rect x="104" y="30" width="8" height="8" fill="#4ecdc4"/>
          <rect x="104" y="42" width="8" height="8" fill="#4ecdc4"/>
        </svg>
      </div>

      {/* Bottom Left Corner */}
      <div className="fixed bottom-0 left-0 z-40 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-60">
          <path d="M 0 120 L 120 120 L 120 100 L 20 100 L 20 0 L 0 0 Z" fill="#ff6b9d" opacity="0.3"/>
          <path d="M 5 115 L 115 115 L 115 105 L 15 105 L 15 5 L 5 5 Z" fill="#ffd700" opacity="0.5"/>
          <rect x="30" y="104" width="8" height="8" fill="#4ecdc4"/>
          <rect x="42" y="104" width="8" height="8" fill="#4ecdc4"/>
          <rect x="8" y="78" width="8" height="8" fill="#4ecdc4"/>
          <rect x="8" y="66" width="8" height="8" fill="#4ecdc4"/>
        </svg>
      </div>

      {/* Bottom Right Corner */}
      <div className="fixed bottom-0 right-0 z-40 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-60">
          <path d="M 120 120 L 0 120 L 0 100 L 100 100 L 100 0 L 120 0 Z" fill="#ff6b9d" opacity="0.3"/>
          <path d="M 115 115 L 5 115 L 5 105 L 105 105 L 105 5 L 115 5 Z" fill="#ffd700" opacity="0.5"/>
          <rect x="82" y="104" width="8" height="8" fill="#4ecdc4"/>
          <rect x="70" y="104" width="8" height="8" fill="#4ecdc4"/>
          <rect x="104" y="78" width="8" height="8" fill="#4ecdc4"/>
          <rect x="104" y="66" width="8" height="8" fill="#4ecdc4"/>
        </svg>
      </div>
    </>
  );
}

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

export function ArcadeBorder({ children, color = 'pink' }: { children: React.ReactNode; color?: 'pink' | 'cyan' | 'gold' }) {
  const colorMap = {
    pink: '#ff6b9d',
    cyan: '#4ecdc4',
    gold: '#ffd700',
  };

  const borderColor = colorMap[color];

  return (
    <div className="relative">
      {/* Corner Pixels */}
      <div className="absolute -top-2 -left-2 w-4 h-4" style={{ backgroundColor: borderColor }} />
      <div className="absolute -top-2 -right-2 w-4 h-4" style={{ backgroundColor: borderColor }} />
      <div className="absolute -bottom-2 -left-2 w-4 h-4" style={{ backgroundColor: borderColor }} />
      <div className="absolute -bottom-2 -right-2 w-4 h-4" style={{ backgroundColor: borderColor }} />
      
      {children}
    </div>
  );
}
