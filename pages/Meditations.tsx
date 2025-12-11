import React from 'react';
import { Meditation } from '../types';
import CustomAudioPlayer from '../components/CustomAudioPlayer';
import { Sparkles } from 'lucide-react';

const mockMeditations: Meditation[] = [
  {
    id: 'm1',
    title: 'Ancrage à la Terre Mère',
    duration: '20:00',
    description: 'Retrouvez votre stabilité et connectez vos racines au cœur cristallin de la Terre.',
    releaseDate: '2024-05-01',
    isLocked: false,
  },
  {
    id: 'm2',
    title: 'Ouverture du Cœur Sacré',
    duration: '15:30',
    description: 'Dissolvez les armures pour laisser rayonner votre lumière intérieure.',
    releaseDate: '2024-04-01',
    isLocked: false,
  },
  {
    id: 'm3',
    title: 'Connexion aux Guides',
    duration: '25:00',
    description: 'Un voyage intérieur pour rencontrer vos alliés de lumière.',
    releaseDate: '2024-03-01',
    isLocked: false,
  },
  {
    id: 'm4',
    title: 'Bain de Lumière Lunaire',
    duration: '30:00',
    description: 'Une régénération cellulaire profonde sous les rayons de la pleine lune.',
    releaseDate: '2024-06-01',
    isLocked: true,
  },
];

const Meditations: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <div className="text-center mb-16 relative">
          <Sparkles className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-gold-400 opacity-50" size={48} />
          <h1 className="font-serif text-4xl text-rose-900 mb-4">Le Sanctuaire de Méditation</h1>
          <p className="text-lg text-rose-700 font-light">
            Votre bibliothèque sacrée. Chaque mois, une nouvelle méditation se libère pour enrichir votre pratique.
          </p>
       </div>

       <div className="space-y-6">
          {mockMeditations.map((meditation, index) => (
            <div key={meditation.id} className={`bg-white/50 backdrop-blur-sm rounded-xl p-6 border ${meditation.isLocked ? 'border-gray-200 opacity-70' : 'border-rose-100 hover:bg-white hover:shadow-md'} transition-all`}>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center font-serif text-2xl text-rose-300">
                  {index + 1}
                </div>
                
                <div className="flex-1 text-center md:text-left">
                   <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <h3 className="font-serif text-xl text-rose-900">{meditation.title}</h3>
                      {meditation.isLocked && <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">À venir</span>}
                   </div>
                   <p className="text-rose-700/70 text-sm font-light mb-4">{meditation.description}</p>
                   
                   {!meditation.isLocked && (
                      <CustomAudioPlayer title={meditation.title} />
                   )}
                </div>
              </div>
            </div>
          ))}
       </div>
    </div>
  );
};

export default Meditations;