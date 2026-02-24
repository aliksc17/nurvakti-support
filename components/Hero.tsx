import React from 'react';
import { ArrowRight, Code2, Globe, Cpu } from 'lucide-react';
import { NavItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  scrollToSection: (section: NavItem) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        {/* Background Logo */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2">
          <img src="/thracian.png" alt="" className="w-[900px] h-[900px] opacity-[0.05] -rotate-12 select-none pointer-events-none" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              {t.hero.badge}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              {t.hero.titleLine1} <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 gradient-text text-transparent">
                {t.hero.titleLine2}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection(NavItem.AI_CONSULTANT)}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group"
              >
                {t.hero.planBtn}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection(NavItem.SERVICES)}
                className="px-8 py-4 rounded-lg bg-slate-800 text-white font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700"
              >
                {t.hero.servicesBtn}
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 border-t border-slate-800">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">98%</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">{t.hero.satisfaction}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">150+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">{t.hero.delivered}</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Abstract decorative circles */}
              <div className="absolute inset-0 border border-slate-700/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-8 border border-slate-700/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Cards floating */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                 {/* Center Icon */}
                 <div className="w-24 h-24 bg-slate-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/20 z-20 border border-slate-700">
                    <Code2 className="w-12 h-12 text-cyan-400" />
                 </div>

                 {/* Floating Element 1 */}
                 <div className="absolute -top-12 right-0 bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-700 animate-bounce delay-0 z-10">
                    <Globe className="w-8 h-8 text-purple-400 mb-2" />
                    <div className="h-2 w-24 bg-slate-700 rounded mb-1"></div>
                    <div className="h-2 w-16 bg-slate-700 rounded"></div>
                 </div>

                 {/* Floating Element 2 */}
                 <div className="absolute bottom-0 -left-8 bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-700 animate-bounce delay-700 z-10">
                    <Cpu className="w-8 h-8 text-green-400 mb-2" />
                    <div className="h-2 w-20 bg-slate-700 rounded mb-1"></div>
                    <div className="h-2 w-12 bg-slate-700 rounded"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;