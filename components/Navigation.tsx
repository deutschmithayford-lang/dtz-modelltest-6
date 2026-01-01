import React, { useState } from 'react';
import { Menu, X, BookOpen, Headphones, PenTool, MessageCircle } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hoeren', label: 'Hören', icon: <Headphones size={18} /> },
    { id: 'lesen', label: 'Lesen', icon: <BookOpen size={18} /> },
    { id: 'schreiben', label: 'Schreiben', icon: <PenTool size={18} /> },
    { id: 'sprechen', label: 'Sprechen', icon: <MessageCircle size={18} /> },
  ];

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-blue-900 font-bold text-xl shadow mr-3">
              H
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none tracking-wide">Deutsch mit Hayford</h1>
              <div className="text-xs text-blue-200 mt-0.5">Modelltest 6</div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === item.id
                      ? 'bg-amber-500 text-blue-900'
                      : 'text-gray-300 hover:bg-blue-800 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  currentSection === item.id
                    ? 'bg-amber-500 text-blue-900'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;