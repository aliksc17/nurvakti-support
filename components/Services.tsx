import React from 'react';
import { Smartphone, Monitor, Brain, Cloud, Database, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-cyan-400" />,
      title: t.services.items.web.title,
      description: t.services.items.web.desc
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: t.services.items.mobile.title,
      description: t.services.items.mobile.desc
    },
    {
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      title: t.services.items.ai.title,
      description: t.services.items.ai.desc
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: t.services.items.cloud.title,
      description: t.services.items.cloud.desc
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      title: t.services.items.data.title,
      description: t.services.items.data.desc
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: t.services.items.security.title,
      description: t.services.items.security.desc
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.services.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="w-14 h-14 rounded-lg bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-cyan-500/30">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;