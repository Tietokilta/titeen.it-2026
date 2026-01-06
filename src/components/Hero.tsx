import logoImage from 'figma:asset/18f72a3c3f81baf462ffd5e46ada58dab2e98008.png';
import { motion } from 'motion/react';
import { Countdown } from './Countdown';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated grid background */}
      <div className="perspective-grid opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 logo-bounce"
        >
          <img 
            src={logoImage} 
            alt="TIITEENIT" 
            className="mx-auto max-w-2xl w-full h-auto pixel-perfect"
          />
        </motion.div>

        <Countdown />
      </div>
    </section>
  );
}