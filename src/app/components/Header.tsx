import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logoImage from 'figma:asset/cbcf7455b6a70a6885f5cea0e8273ef22c5e9d1b.png';

interface HeaderProps {
  onContactClick: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src={logoImage} alt="Essor Conception" className="h-14 sm:h-16" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('pillars')} className="text-gray-900 hover:text-amber-600 transition-colors uppercase text-sm tracking-wider">
              Services
            </button>
            <button onClick={() => scrollToSection('expertise')} className="text-gray-900 hover:text-amber-600 transition-colors uppercase text-sm tracking-wider">
              Expertise
            </button>
            <button onClick={() => scrollToSection('targets')} className="text-gray-900 hover:text-amber-600 transition-colors uppercase text-sm tracking-wider">
              Clients
            </button>
            <button 
              onClick={onContactClick}
              className="bg-black text-white px-8 py-3 rounded-none text-sm uppercase tracking-wider hover:bg-amber-600 transition-colors"
            >
              Être rappelé
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-4 border-t">
            <button 
              onClick={() => scrollToSection('pillars')} 
              className="block w-full text-left text-gray-900 hover:text-amber-600 transition-colors py-2 uppercase text-sm tracking-wider"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('expertise')} 
              className="block w-full text-left text-gray-900 hover:text-amber-600 transition-colors py-2 uppercase text-sm tracking-wider"
            >
              Expertise
            </button>
            <button 
              onClick={() => scrollToSection('targets')} 
              className="block w-full text-left text-gray-900 hover:text-amber-600 transition-colors py-2 uppercase text-sm tracking-wider"
            >
              Clients
            </button>
            <button 
              onClick={onContactClick}
              className="bg-black text-white px-6 py-3 rounded-none hover:bg-amber-600 transition-colors w-full text-center uppercase text-sm tracking-wider"
            >
              Être rappelé
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}