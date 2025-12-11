import React from 'react';
import { User, CreditCard, Heart, Settings, LogOut } from 'lucide-react';

const Account: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-4xl text-rose-900 mb-10 text-center">Votre Espace Membre</h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden">
        <div className="bg-rose-50 px-8 py-6 border-b border-rose-100 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-rose-200 flex items-center justify-center text-rose-800 font-serif text-2xl">
            CT
          </div>
          <div>
            <h2 className="text-xl font-medium text-rose-900">Bienvenue, Âme Lumineuse</h2>
            <p className="text-rose-500 text-sm">Membre depuis Janvier 2024</p>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Subscription Status */}
          <div className="flex items-start justify-between pb-8 border-b border-rose-50">
            <div className="flex gap-4">
              <div className="p-3 bg-rose-50 rounded-lg h-fit text-rose-600">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="font-medium text-rose-900 text-lg">Abonnement Actif</h3>
                <p className="text-rose-600/70 text-sm mt-1">La Lignée de la Rose - Mensuel</p>
                <p className="text-xs text-rose-400 mt-2">Prochain renouvellement le 15 Juin 2024</p>
              </div>
            </div>
            <button className="text-sm text-rose-700 underline hover:text-rose-900">Gérer</button>
          </div>

          {/* Payment Method */}
          <div className="flex items-start justify-between pb-8 border-b border-rose-50">
            <div className="flex gap-4">
              <div className="p-3 bg-rose-50 rounded-lg h-fit text-rose-600">
                <CreditCard size={24} />
              </div>
              <div>
                <h3 className="font-medium text-rose-900 text-lg">Moyen de paiement</h3>
                <p className="text-rose-600/70 text-sm mt-1">Visa se terminant par 4242</p>
              </div>
            </div>
            <button className="text-sm text-rose-700 underline hover:text-rose-900">Modifier</button>
          </div>

          {/* Settings */}
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="p-3 bg-rose-50 rounded-lg h-fit text-rose-600">
                <Settings size={24} />
              </div>
              <div>
                <h3 className="font-medium text-rose-900 text-lg">Préférences</h3>
                <p className="text-rose-600/70 text-sm mt-1">Notifications par email pour les nouvelles lunes</p>
              </div>
            </div>
            <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <div className="w-10 h-6 bg-rose-200 rounded-full cursor-pointer">
                     <div className="w-6 h-6 bg-rose-600 rounded-full shadow-md transform translate-x-4"></div>
                </div>
            </div>
          </div>
        </div>
        
        <div className="bg-stone-50 px-8 py-4 border-t border-stone-100 flex justify-end">
           <button className="flex items-center gap-2 text-rose-800/60 hover:text-rose-800 text-sm font-medium transition-colors">
             <LogOut size={16} />
             Se déconnecter
           </button>
        </div>
      </div>
    </div>
  );
};

export default Account;