import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function CoinSlot() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:block"
    >
      <div className="bg-[#0a0e27] border-4 border-[#ffd700] p-4 relative"
           style={{
             boxShadow: '0 0 20px rgba(255, 215, 0, 0.3), inset 0 0 10px rgba(255, 215, 0, 0.1)'
           }}>
        {/* Coin Slot Icon */}
        <div className="mb-4">
          <svg width="60" height="80" viewBox="0 0 60 80" className="mx-auto">
            {/* Slot machine body */}
            <rect x="5" y="0" width="50" height="70" fill="#1a1a2e" stroke="#ffd700" strokeWidth="2"/>
            {/* Coin slot */}
            <rect x="15" y="20" width="30" height="4" fill="#ffd700"/>
            {/* Display */}
            <rect x="12" y="30" width="36" height="20" fill="#0a0e27" stroke="#4ecdc4" strokeWidth="2"/>
            <text x="30" y="44" fontSize="12" fill="#4ecdc4" textAnchor="middle" fontFamily="monospace">∞</text>
            {/* Coin return */}
            <rect x="20" y="55" width="20" height="8" fill="#ff6b9d" opacity="0.6"/>
          </svg>
        </div>

        {/* Blinking Text */}
        <motion.div
          animate={{
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-[#ffd700] text-xs text-center tracking-wider"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            textShadow: '0 0 10px rgba(255, 215, 0, 0.8)',
          }}
        >
          FREE
          <br />
          PLAY
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ScoreDisplay() {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:block"
    >
      <div className="bg-[#0a0e27] border-4 border-[#4ecdc4] p-4 min-w-[150px]"
           style={{
             boxShadow: '0 0 20px rgba(78, 205, 196, 0.3), inset 0 0 10px rgba(78, 205, 196, 0.1)'
           }}>
        {/* High Score Label */}
        <div className="text-[#ff6b9d] text-xs mb-2 text-center tracking-wider"
             style={{
               fontFamily: "'Press Start 2P', monospace",
               textShadow: '0 0 10px rgba(255, 107, 157, 0.8)',
             }}>
          HIGH
        </div>
        
        {/* Score Display */}
        <div className="text-[#ffd700] text-2xl text-center mb-4 tabular-nums"
             style={{
               fontFamily: "'Press Start 2P', monospace",
               textShadow: '0 0 15px rgba(255, 215, 0, 0.8)',
             }}>
          2026
        </div>

        {/* Player Label */}
        <div className="text-[#4ecdc4] text-xs text-center tracking-wider"
             style={{
               fontFamily: "'Press Start 2P', monospace",
               textShadow: '0 0 10px rgba(78, 205, 196, 0.8)',
             }}>
          1UP
        </div>
      </div>
    </motion.div>
  );
}

export function InsertCoinBanner() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none lg:hidden">
      <motion.div
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="bg-[#0a0e27] border-4 border-[#ffd700] px-6 py-3"
        style={{
          boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
        }}
      >
        <div className="text-[#ffd700] text-sm sm:text-base text-center tracking-wider"
             style={{
               fontFamily: "'Press Start 2P', monospace",
               textShadow: '0 0 15px rgba(255, 215, 0, 1)',
             }}>
          ★ GAME START ★
        </div>
      </motion.div>
    </div>
  );
}

export function PixelDivider({ color = 'pink' }: { color?: 'pink' | 'cyan' | 'gold' }) {
  const colors = {
    pink: '#ff6b9d',
    cyan: '#4ecdc4',
    gold: '#ffd700',
  };

  const dividerColor = colors[color];

  return (
    <div className="flex items-center justify-center gap-2 my-8">
      <div className="w-4 h-4" style={{ backgroundColor: dividerColor }} />
      <div className="w-4 h-4" style={{ backgroundColor: dividerColor }} />
      <div className="flex-1 h-1" style={{ backgroundColor: dividerColor, opacity: 0.3 }} />
      <div className="w-4 h-4" style={{ backgroundColor: dividerColor }} />
      <div className="w-4 h-4" style={{ backgroundColor: dividerColor }} />
      <div className="flex-1 h-1" style={{ backgroundColor: dividerColor, opacity: 0.3 }} />
      <div className="w-4 h-4" style={{ backgroundColor: dividerColor }} />
      <div className="w-4 h-4" style={{ backgroundColor: dividerColor }} />
    </div>
  );
}
