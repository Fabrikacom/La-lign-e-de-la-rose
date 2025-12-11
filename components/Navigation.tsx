import React, { useState } from 'react';
import { Menu, X, Flower2, Moon, Sparkles, User as UserIcon, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Le Sanctuaire', path: '/', icon: <Flower2 size={18} /> },
    { name: 'Enseignements', path: '/enseignements', icon: <BookOpen size={18} /> },
    { name: 'Activations Lunaires', path: '/activations', icon: <Moon size={18} /> },
    { name: 'Méditations', path: '/meditations', icon: <Sparkles size={18} /> },
    { name: 'Mon Compte', path: '/account', icon: <UserIcon size={18} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-rose-50/80 backdrop-blur-md border-b border-rose-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <Flower2 className="h-8 w-8 text-rose-800" />
              <span className="font-serif text-2xl font-semibold text-rose-900 tracking-wide">
                La Lignée de la Rose
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-rose-900 bg-rose-100'
                    : 'text-rose-700 hover:text-rose-900 hover:bg-rose-100/50'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-rose-700 hover:text-rose-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-rose-50 border-b border-rose-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-rose-900 bg-rose-100'
                    : 'text-rose-700 hover:text-rose-900 hover:bg-rose-100/50'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;