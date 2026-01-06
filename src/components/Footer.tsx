import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-12 px-4 bg-[#0f3460]/50">
      <div className="max-w-5xl mx-auto">
        {/* Footer Info */}
        <div className="text-center">
          <p className="text-[#4ecdc4] text-xl mb-4 tracking-widest">
            {t('footer.title')}
          </p>
        </div>
      </div>
    </footer>
  );
}