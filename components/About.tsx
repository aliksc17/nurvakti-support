import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <img 
              src="https://picsum.photos/600/600?grayscale" 
              alt="Thracian Soft Team" 
              className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-slate-700 z-10 relative"
            />
            {/* Decorative background box */}
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-cyan-500/20 rounded-2xl -z-0 hidden md:block"></div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
             <h2 className="text-3xl md:text-5xl font-bold text-white">
              {t.about.titleLine1} <br />
              <span className="text-cyan-400">{t.about.titleLine2}</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {t.about.p1} <span className="text-white font-semibold">Thracian Soft</span>.
            </p>
            <p className="text-slate-400 leading-relaxed">
              {t.about.p2}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">5+ Years</h4>
                <p className="text-sm text-slate-500">{t.about.stat1}</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">24/7</h4>
                <p className="text-sm text-slate-500">{t.about.stat2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;