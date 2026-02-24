import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import AIConsultant from './components/AIConsultant';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NavItem } from './types';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<NavItem>(NavItem.HOME);

  const scrollToSection = (sectionId: NavItem) => {
    setActiveSection(sectionId);
    if (sectionId === NavItem.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500/30">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <div id={NavItem.HOME}>
          <Hero scrollToSection={scrollToSection} />
        </div>
        <Services />
        <Products />
        <AIConsultant />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;