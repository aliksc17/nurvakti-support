import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.contact.title}</h2>
            <p className="text-slate-400 mb-12 text-lg">
              {t.contact.subtitle}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{t.contact.email}</h4>
                  <p className="text-slate-400">thraciansoft@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{t.contact.call}</h4>
                  <p className="text-slate-400">+90 539 200 3935</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{t.contact.visit}</h4>
                  <p className="text-slate-400">Talatpaşa Mah.<br/>Edirne Merkez, Türkiye</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;