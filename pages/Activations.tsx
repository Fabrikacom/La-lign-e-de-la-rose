import React from 'react';
import { Activation } from '../types';
import { Lock, PlayCircle, Calendar } from 'lucide-react';

const mockActivations: Activation[] = [
  {
    id: '1',
    title: 'Pleine Lune en Scorpion',
    month: 'Mai 2024',
    description: 'Une activation puissante pour transmuter les ombres en lumière dorée. Plongez dans les profondeurs de votre être.',
    thumbnail: 'https://picsum.photos/id/1015/600/400',
    isLocked: false,
  },
  {
    id: '2',
    title: 'Nouvelle Lune en Taureau',
    month: 'Avril 2024',
    description: 'Ancrage, abondance et sensualité. Reconnectez-vous à la sagesse de votre corps.',
    thumbnail: 'https://picsum.photos/id/1016/600/400',
    isLocked: false,
  },
  {
    id: '3',
    title: 'Pleine Lune en Balance',
    month: 'Mars 2024',
    description: 'Harmonie relationnelle et équilibre intérieur. Une danse vibratoire.',
    thumbnail: 'https://picsum.photos/id/1018/600/400',
    isLocked: true,
  },
];

const Activations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-rose-900 mb-4">Activations Lunaires</h1>
        <p className="text-lg text-rose-700 max-w-2xl mx-auto font-light">
          Chaque mois, recevez une transmission vibratoire pour vous aligner aux cycles cosmiques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockActivations.map((activation) => (
          <div key={activation.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-rose-100">
            <div className="relative aspect-video bg-rose-100 overflow-hidden">
              <img 
                src={activation.thumbnail} 
                alt={activation.title} 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${activation.isLocked ? 'grayscale opacity-50' : ''}`}
              />
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                {activation.isLocked ? (
                  <div className="w-12 h-12 rounded-full bg-stone-800/80 backdrop-blur text-white flex items-center justify-center">
                    <Lock size={20} />
                  </div>
                ) : (
                  <button className="w-16 h-16 rounded-full bg-white/90 text-rose-800 flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                    <PlayCircle size={32} fill="currentColor" className="text-rose-800" />
                  </button>
                )}
              </div>

              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-rose-800 uppercase tracking-wider flex items-center gap-1">
                  <Calendar size={12} />
                  {activation.month}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-serif text-2xl text-rose-900 mb-2 group-hover:text-rose-600 transition-colors">
                {activation.title}
              </h3>
              <p className="text-rose-700/80 font-light text-sm mb-6 leading-relaxed">
                {activation.description}
              </p>
              
              <div className="flex justify-between items-center border-t border-rose-50 pt-4">
                <button 
                  disabled={activation.isLocked}
                  className={`text-sm font-medium uppercase tracking-widest border-b-2 pb-0.5 transition-colors ${activation.isLocked ? 'text-gray-400 border-transparent cursor-not-allowed' : 'text-rose-800 border-rose-200 hover:border-rose-800'}`}
                >
                  {activation.isLocked ? 'Disponible Bientôt' : 'Commencer l\'activation'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activations;