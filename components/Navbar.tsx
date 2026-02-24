import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NavItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  activeSection: NavItem;
  scrollToSection: (section: NavItem) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: NavItem.HOME, label: t.nav.home },
    { id: NavItem.SERVICES, label: t.nav.services },
    { id: NavItem.PRODUCTS, label: t.nav.products },
    { id: NavItem.AI_CONSULTANT, label: t.nav.aiPlanner },
    { id: NavItem.ABOUT, label: t.nav.about },
    { id: NavItem.CONTACT, label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection(NavItem.HOME)}
          >
            <img src="/thracian.png" alt="Thracian Soft" className="w-12 h-12 group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-xl font-bold tracking-tight text-white">
              Thracian<span className="text-cyan-400">Soft</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="h-6 w-px bg-slate-700 mx-2"></div>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className={language === 'en' ? 'text-cyan-400' : ''}>EN</span>
              <span className="text-slate-600">/</span>
              <span className={language === 'tr' ? 'text-cyan-400' : ''}>TR</span>
            </button>

            <button
              onClick={() => scrollToSection(NavItem.CONTACT)}
              className="px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
            >
              {t.nav.startProject}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium text-slate-300"
            >
              <span className={language === 'en' ? 'text-cyan-400' : ''}>EN</span>
              <span className="text-slate-600">/</span>
              <span className={language === 'tr' ? 'text-cyan-400' : ''}>TR</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.id
                    ? 'bg-slate-900 text-cyan-400'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;