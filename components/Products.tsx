import React from 'react';
import { ArrowRight, Box } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductLink {
  label: string;
  url: string;
}

interface Product {
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  color: string;
  links: ProductLink[];
}

const Products: React.FC = () => {
  const { t } = useLanguage();

  const products: Product[] = [
    {
      title: "Nur Vakti",
      category: t.products.items.nurvakti.category,
      description: t.products.items.nurvakti.desc,
      image: "/nurvakt.png",
      features: t.products.items.nurvakti.features,
      color: "cyan",
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.thracian.nurvakti" },
        { label: "App Store", url: "https://apps.apple.com/us/app/nur-vakti/id6759111151" }
      ]
    },
    {
      title: "Opinion",
      category: t.products.items.opinion.category,
      description: t.products.items.opinion.desc,
      image: "/opinion.png",
      features: t.products.items.opinion.features,
      color: "purple",
      links: [
        { label: t.products.comingSoon, url: "#" }
      ]
    },
    {
      title: "Futbol API",
      category: t.products.items.futbolapi.category,
      description: t.products.items.futbolapi.desc,
      image: "/thracian.png",
      features: t.products.items.futbolapi.features,
      color: "emerald",
      links: [
        { label: t.products.viewDocs, url: "https://futbol.thraciansoft.xyz/docs" }
      ]
    }
  ];

  return (
    <section id="products" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold mb-3 bg-cyan-950/30 px-4 py-1.5 rounded-full border border-cyan-900">
            <Box className="w-4 h-4" />
            <span>{t.products.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t.products.titlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{t.products.titleHighlight}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t.products.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-colors">
                  <img src={product.image} alt={product.title} className="w-12 h-12 rounded-lg" />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-slate-400 uppercase tracking-wide">
                  {product.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {product.title}
              </h3>
              
              <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                {product.description}
              </p>

              <div className="space-y-6">
                <div className="space-y-2">
                  {product.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  {product.links.map((link, linkIdx) => (
                    <a key={linkIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-all flex items-center justify-center gap-2 group/btn">
                      {link.label}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;