import { Plus, Minus, Heart } from 'lucide-react';
import { useState, ReactNode } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { motion } from 'framer-motion';

// Helper function to parse link markers and render them as JSX
function parseLinks(text: string, t: (key: string) => string): ReactNode[] {
  const linkRegex = /\[LINK:([^\]]+)\]([^\[]+)\[\/LINK\]/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const linkKey = match[1];
    const linkText = match[2];
    const linkUrl = t(`links.${linkKey}`);

    // Add the link
    parts.push(
      <a
        key={`link-${match.index}`}
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#ff6b9d] font-bold hover:underline"
      >
        {linkText}
      </a>
    );

    lastIndex = linkRegex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

export function Safety() {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section id="safety" className="py-20 px-4 scroll-mt-16 md:scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl mb-16 text-[#ff6b9d] retro-title neon-text">
            {t('safety.title')}
          </h2>
        </motion.div>

        {/* Main Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* General Guidelines */}
          <div className="flex flex-col gap-6 items-start bg-[#16213e] border-4 border-[#ff6b9d] p-4 sm:p-6 md:p-10 neon-box">
            <h3 className="text-xl md:text-2xl font-bold text-[#ff6b9d] tracking-wider">
              {t('safety.guidelinesTitle')}
            </h3>
            <p className="text-white text-base md:text-lg leading-relaxed text-lg">
              {parseLinks(t('safety.intro'), t)}
            </p>

            

            <ul className="text-white space-y-5">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <li key={num} className="flex gap-4 items-start">
                  <span className="text-[#ff6b9d] font-bold flex-shrink-0 mt-0.75">•</span>
                  <span className="text-lg leading-relaxed flex-1">{parseLinks(t(`safety.guidelines.${num}`), t)}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Accordion Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="multiple" className="space-y-8" onValueChange={setOpenItems}>
            {[
              { id: 'action', titleKey: 'safety.actionTitle', contentKey: 'safety.action' },
              { id: 'ifEncounter', titleKey: 'safety.ifEncounterTitle', contentKey: 'safety.ifEncounter' },
              { id: 'hcp', titleKey: 'safety.hcpTitle', contentKey: 'safety.hcp' },
            ].map(({ id, titleKey, contentKey }) => (
              <AccordionItem
                key={id}
                value={id}
                className="flex flex-col gap-6 border-l-4 border-r-4 border-b-4 border-[#ff6b9d] bg-[#16213e] rounded-lg neon-box p-4 sm:p-6 md:p-10"
              >
                <AccordionTrigger className="text-white font-bold text-xl md:text-2xl hover:bg-[#0f3460] hover:no-underline transition-colors group [&_svg]:hidden justify-between">
                  <div className="flex items-start text-xl md:text-2xl font-bold text-[#ff6b9d] tracking-wider flex-1 min-w-0">
                    <Heart className="w-8 h-8 text-[#ff6b9d] group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span 
                      className="tracking-wider text-left px-4"
                      style={{
                        hyphens: 'auto',
                        WebkitHyphens: 'auto',
                        msHyphens: 'auto',
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                      }}
                    >
                      {t(titleKey)}
                    </span>
                  </div>
                  {openItems.includes(id) ? (
                    <Minus className="w-8 h-8 text-[#ff6b9d] group-hover:scale-110 transition-transform flex-shrink-0 ml-4" />
                  ) : (
                    <Plus className="w-8 h-8 text-[#ff6b9d] group-hover:scale-110 transition-transform flex-shrink-0 ml-4" />
                  )}
                </AccordionTrigger>
                <AccordionContent className="text-white border-t-2 border-[#ff6b9d]/30 bg-[#16213e]">
                  <div className="flex flex-col gap-6">
                    {t(contentKey)
                      .split('\n\n')
                      .map((paragraph, idx) => (
                        <p key={idx} className="leading-relaxed text-lg md:text-lg" style={{ overflowWrap: 'break-word', hyphens: 'auto', WebkitHyphens: 'auto' } as any}>
                          {parseLinks(paragraph, t)}
                        </p>
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
