import React, { useState } from 'react';
import { TeachingResource } from '../types';
import { Video, FileText, Headphones, Play, Download, Clock } from 'lucide-react';
import CustomAudioPlayer from '../components/CustomAudioPlayer';

const mockResources: TeachingResource[] = [
  {
    id: 't1',
    title: 'Les Fondements de la Lignée',
    type: 'VIDEO',
    description: 'Une masterclass vidéo sur l\'histoire et l\'énergie de la lignée de la rose.',
    thumbnail: 'https://picsum.photos/id/106/600/400',
    duration: '45:00',
    date: '10 Mai 2024',
  },
  {
    id: 't2',
    title: 'Guide du Rituel de la Nouvelle Lune',
    type: 'PDF',
    description: 'Un manuel complet avec les étapes, les mantras et les intentions à poser.',
    fileSize: '2.4 MB',
    date: '08 Mai 2024',
  },
  {
    id: 't3',
    title: 'Chant Sacré de Guérison',
    type: 'AUDIO',
    description: 'Un chant vibratoire pour harmoniser vos centres énergétiques.',
    duration: '12:00',
    date: '01 Mai 2024',
  },
  {
    id: 't4',
    title: 'Architecture Sacrée du Féminin',
    type: 'VIDEO',
    description: 'Comprendre les structures énergétiques du corps féminin.',
    thumbnail: 'https://picsum.photos/id/314/600/400',
    duration: '1:15:00',
    date: '25 Avril 2024',
  },
  {
    id: 't5',
    title: 'Journal de Pratique - Printemps',
    type: 'PDF',
    description: 'Fiches de journaling pour accompagner votre évolution ce printemps.',
    fileSize: '1.1 MB',
    date: '20 Mars 2024',
  },
];

const Teachings: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'VIDEO' | 'PDF' | 'AUDIO'>('ALL');

  const filteredResources = filter === 'ALL' 
    ? mockResources 
    : mockResources.filter(r => r.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl text-rose-900 mb-4">Enseignements de la Rose</h1>
        <p className="text-lg text-rose-700 font-light max-w-2xl mx-auto">
          Explorez la bibliothèque sacrée. Vidéos, écrits et transmissions sonores pour nourrir votre cheminement.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {[
          { id: 'ALL', label: 'Tout', icon: null },
          { id: 'VIDEO', label: 'Vidéos', icon: <Video size={16} /> },
          { id: 'PDF', label: 'Guides PDF', icon: <FileText size={16} /> },
          { id: 'AUDIO', label: 'Audios', icon: <Headphones size={16} /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === tab.id
                ? 'bg-rose-800 text-white shadow-md transform scale-105'
                : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-rose-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            
            {/* Card Header / Visual */}
            {resource.type === 'VIDEO' && (
              <div className="relative aspect-video bg-rose-900 group cursor-pointer">
                <img src={resource.thumbnail} alt={resource.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play fill="white" className="text-white translate-x-0.5" size={20} />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-0.5 rounded text-white text-xs flex items-center gap-1">
                   <Clock size={10} /> {resource.duration}
                </div>
              </div>
            )}

            {resource.type === 'PDF' && (
              <div className="h-48 bg-rose-50 flex items-center justify-center relative border-b border-rose-100">
                <FileText size={64} className="text-rose-200" />
                <div className="absolute top-4 right-4 bg-white/80 px-2 py-1 rounded text-xs text-rose-600 font-medium border border-rose-100">
                  PDF
                </div>
              </div>
            )}

            {resource.type === 'AUDIO' && (
              <div className="h-48 bg-gradient-to-br from-rose-100 to-white flex items-center justify-center relative border-b border-rose-100">
                <Headphones size={64} className="text-rose-300" />
              </div>
            )}

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[10px] uppercase tracking-widest text-rose-400 font-semibold">{resource.type}</span>
                   <span className="text-[10px] text-rose-400">{resource.date}</span>
                </div>
                <h3 className="font-serif text-xl text-rose-900 leading-tight mb-2">{resource.title}</h3>
                <p className="text-sm text-rose-700/70 font-light line-clamp-3">{resource.description}</p>
              </div>

              <div className="mt-auto pt-4 border-t border-rose-50">
                {resource.type === 'VIDEO' && (
                  <button className="w-full py-2 bg-rose-50 text-rose-800 rounded-lg text-sm font-medium hover:bg-rose-100 transition-colors flex items-center justify-center gap-2">
                    <Play size={16} /> Regarder
                  </button>
                )}
                {resource.type === 'PDF' && (
                  <button className="w-full py-2 border border-rose-200 text-rose-700 rounded-lg text-sm font-medium hover:bg-rose-50 transition-colors flex items-center justify-center gap-2">
                    <Download size={16} /> Télécharger ({resource.fileSize})
                  </button>
                )}
                 {resource.type === 'AUDIO' && (
                   <CustomAudioPlayer title="Aperçu" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachings;