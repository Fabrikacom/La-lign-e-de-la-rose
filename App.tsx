import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Activations from './pages/Activations';
import Meditations from './pages/Meditations';
import Teachings from './pages/Teachings';
import Account from './pages/Account';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-rose-50 font-sans text-rose-900 selection:bg-rose-200">
        <Navigation />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/activations" element={<Activations />} />
            <Route path="/meditations" element={<Meditations />} />
            <Route path="/enseignements" element={<Teachings />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        
        <footer className="bg-rose-100/50 py-12 mt-12 border-t border-rose-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="font-serif text-2xl text-rose-900 mb-4">La Lignée de la Rose</h3>
            <p className="text-rose-700/60 text-sm mb-6 max-w-md mx-auto">
              Un espace de transformation et de douceur créé par Cathy Thollois.
            </p>
            <div className="flex justify-center space-x-6 text-rose-800/50 text-xs uppercase tracking-widest">
              <a href="#" className="hover:text-rose-800 transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-rose-800 transition-colors">Contact</a>
              <a href="#" className="hover:text-rose-800 transition-colors">CGV</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;