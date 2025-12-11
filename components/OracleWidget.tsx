import React, { useState } from 'react';
import { getOracleGuidance } from '../services/geminiService';
import { Sparkles, Send, Loader2 } from 'lucide-react';

const OracleWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [guidance, setGuidance] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setGuidance(null);
    try {
      const response = await getOracleGuidance(input);
      setGuidance(response);
    } catch (e) {
      setGuidance("L'Oracle est silencieux. Réessayez plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-rose-200 max-w-md mx-auto my-8 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-200 rounded-full blur-3xl opacity-30"></div>
      <div className="relative z-10">
        <h3 className="font-serif text-xl text-rose-900 mb-2 flex items-center gap-2">
          <Sparkles className="text-gold-600" size={20} />
          L'Oracle de la Rose
        </h3>
        <p className="text-sm text-rose-700 mb-4">
          Déposez ici votre état d'esprit du moment, et recevez une guidance personnalisée.
        </p>

        {!guidance ? (
          <div className="space-y-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: Je me sens dispersée, j'ai besoin de calme..."
              className="w-full bg-white border border-rose-200 rounded-lg p-3 text-rose-800 placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300 resize-none h-24"
            />
            <button
              onClick={handleAsk}
              disabled={loading || !input}
              className="w-full bg-rose-800 text-white py-2 rounded-lg hover:bg-rose-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              Recevoir la guidance
            </button>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="bg-rose-50 border-l-4 border-gold-500 p-4 rounded-r-lg italic text-rose-900 font-serif text-lg leading-relaxed">
              "{guidance}"
            </div>
            <button
              onClick={() => { setGuidance(null); setInput(''); }}
              className="mt-4 text-xs text-rose-500 hover:text-rose-700 underline"
            >
              Poser une autre question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OracleWidget;