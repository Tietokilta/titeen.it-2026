import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import logo from 'figma:asset/titeenit_logo.png';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavLogo, setShowNavLogo] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Show nav logo when scrolled past the hero section (approximately)
      setShowNavLogo(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: t('nav.main'), id: 'hero' },
    { label: t('nav.info'), id: 'info' },
    { label: t('nav.timetable'), id: 'timetable' },
    { label: t('nav.map'), id: 'map' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0f3460]/95 backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className={`hover:scale-105 transition-all duration-300 hidden md:block ${
              showNavLogo ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'
            }`}
          >
            <img src={logo} alt="Titeenit Logo" className="h-10 w-auto" />
          </button>

          {/* Mobile Menu Button - moved to the right */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#ff6b9d] p-2 neon-box ml-auto"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#4ecdc4] font-bold tracking-wider hover:text-[#ff6b9d] transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            {/* Desktop Language Toggle */}
            <div className="flex items-center gap-2 ml-16">
              <button
                onClick={() => setLanguage('fi')}
                className={`px-3 py-1 transition-colors font-bold ${
                  language === 'fi' 
                    ? 'text-[#ff6b9d]' 
                    : 'text-[#4ecdc4] hover:text-[#ff6b9d]'
                }`}
              >
                FI
              </button>
              <span className="text-[#4ecdc4]">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 transition-colors font-bold ${
                  language === 'en' 
                    ? 'text-[#ff6b9d]' 
                    : 'text-[#4ecdc4] hover:text-[#ff6b9d]'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-[#16213e] border-4 border-[#ff6b9d] neon-box"
            ref={mobileMenuRef}
          >
            {/* Mobile Language Toggle - moved to top */}
            <div className="flex items-center justify-center gap-2 px-6 py-4 border-b border-[#ff6b9d]/20">
              <button
                onClick={() => setLanguage('fi')}
                className={`px-4 py-2 transition-colors font-bold ${
                  language === 'fi' 
                    ? 'text-[#ff6b9d]' 
                    : 'text-[#4ecdc4] hover:text-[#ff6b9d]'
                }`}
              >
                FI
              </button>
              <span className="text-[#4ecdc4]">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 transition-colors font-bold ${
                  language === 'en' 
                    ? 'text-[#ff6b9d]' 
                    : 'text-[#4ecdc4] hover:text-[#ff6b9d]'
                }`}
              >
                EN
              </button>
            </div>

            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-4 text-[#4ecdc4] font-bold tracking-wider hover:bg-[#0f3460] hover:text-[#ff6b9d] transition-colors border-b border-[#ff6b9d]/20 last:border-b-0"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}