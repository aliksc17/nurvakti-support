import React from 'react';
import { Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-2">
            <img src="/thracian.png" alt="Thracian Soft" className="w-10 h-10" />
            <span className="text-lg font-bold text-slate-300">
              Thracian<span className="text-cyan-600">Soft</span>
            </span>
          </div>

          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Thracian Soft. {t.footer.rights}
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/thraciansoft" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://x.com/thraciansoft" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;