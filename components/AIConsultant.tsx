import React, { useState } from 'react';
import { analyzeProjectIdea } from '../services/geminiService';
import { ProjectAnalysis } from '../types';
import { Sparkles, Clock, Layers, FileText, ArrowRight, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AIConsultant: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [analysis, setAnalysis] = useState<ProjectAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { t, language } = useLanguage();

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setLoading(true);
    setError('');
    setAnalysis(null);

    try {
      const result = await analyzeProjectIdea(idea, language);
      setAnalysis(result);
    } catch (err) {
      setError(t.ai.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800/50"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                <Sparkles className="w-5 h-5" />
                <span>{t.ai.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t.ai.title}
              </h2>
              <p className="text-slate-400">
                {t.ai.description}
              </p>
            </div>

            <form onSubmit={handleAnalyze} className="space-y-4">
              <div className="relative">
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder={t.ai.placeholder}
                  className="w-full h-48 bg-slate-800 border border-slate-700 rounded-xl p-6 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none shadow-inner"
                />
              </div>
              <button
                type="submit"
                disabled={loading || !idea.trim()}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                  loading || !idea.trim()
                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1'
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t.ai.analyzing}
                  </>
                ) : (
                  <>
                    {t.ai.analyzeBtn}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
            
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="relative">
            {analysis ? (
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 h-full shadow-2xl animate-fade-in">
                <div className="space-y-8">
                  <div className="border-b border-slate-700 pb-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-cyan-400" />
                      {t.ai.summary}
                    </h3>
                    <p className="text-slate-300 leading-relaxed italic">
                      "{analysis.summary}"
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        {t.ai.stack}
                      </h4>
                      <ul className="space-y-2">
                        {analysis.techStack.map((tech, i) => (
                          <li key={i} className="flex items-center gap-2 text-white bg-slate-700/50 px-3 py-2 rounded-lg text-sm border border-slate-600/50">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {t.ai.timeline}
                      </h4>
                      <div className="bg-slate-700/50 px-4 py-3 rounded-lg border border-slate-600/50">
                        <span className="text-xl font-bold text-white">{analysis.estimatedDuration}</span>
                      </div>
                      
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-3">{t.ai.features}</h4>
                       <ul className="space-y-2">
                        {analysis.keyFeatures.slice(0, 3).map((feat, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-cyan-500 mt-1">✓</span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Empty State / Placeholder
              <div className="h-full min-h-[400px] border-2 border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center text-center p-8 bg-slate-800/20">
                 <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <Sparkles className="w-10 h-10 text-slate-600" />
                 </div>
                 <h3 className="text-xl font-medium text-slate-400 mb-2">{t.ai.emptyTitle}</h3>
                 <p className="text-slate-500 max-w-sm">
                   {t.ai.emptyDesc}
                 </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIConsultant;