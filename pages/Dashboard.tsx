import React from 'react';
import { Link } from 'react-router-dom';
import OracleWidget from '../components/OracleWidget';
import { PlayCircle, ArrowRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-rose-900 overflow-hidden flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1029/1920/1080" 
            alt="Rose background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-900 via-rose-900/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl text-rose-200 italic mb-2">Bienvenue dans</h2>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-wide">La Lignée de la Rose</h1>
          <p className="text-rose-100 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
            Votre espace sacré de reconnexion. Prenez un instant pour respirer et déposer vos fardeaux.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Feature: Latest Activation */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-rose-100 overflow-hidden p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="text-rose-500 font-semibold tracking-widest text-xs uppercase mb-2 block">Ce mois-ci</span>
              <h3 className="font-serif text-3xl text-rose-900 mb-4">Activation : Pleine Lune en Scorpion</h3>
              <p className="text-rose-800/70 font-light text-lg mb-8">
                Une invitation à plonger dans vos eaux profondes pour y découvrir l'or alchimique de votre transformation. Préparez un espace calme.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link to="/activations" className="flex-1 bg-rose-800 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-rose-900 transition-all group">
                <PlayCircle size={24} />
                <span className="font-medium">Commencer l'activation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/activations" className="px-6 py-4 rounded-xl border border-rose-200 text-rose-800 hover:bg-rose-50 transition-colors text-center font-medium">
                Télécharger MP3
              </Link>
            </div>
          </div>

          {/* Side Widget: Oracle */}
          <div className="lg:col-span-1">
             <OracleWidget />
          </div>

        </div>

        {/* Latest Meditation Teaser */}
        <div className="mt-12 bg-gradient-to-r from-rose-100 to-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-rose-200">
           <div>
             <h4 className="font-serif text-2xl text-rose-900 mb-2">Nouvelle Méditation Disponible</h4>
             <p className="text-rose-700">Découvrez "Ancrage à la Terre Mère", votre bonus du mois.</p>
           </div>
           <Link to="/meditations" className="whitespace-nowrap px-6 py-3 bg-white text-rose-900 border border-rose-200 rounded-lg shadow-sm hover:shadow-md transition-all font-medium">
             Accéder à la bibliothèque
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;