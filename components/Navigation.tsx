import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-cream/80 backdrop-blur-md border-b border-gray-100' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
           {/* Logo Icon similar to Comet's wave */}
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-dark">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
           <a href="#" className="font-serif text-2xl font-semibold tracking-tight text-dark">
            Soham P.
          </a>
        </div>
       

        {/* Desktop Nav Actions */}
        <div className="hidden md:flex items-center gap-6">
           <a href="#about" className="text-sm font-medium text-gray-600 hover:text-dark transition-colors">About</a>
           <a href="#services" className="text-sm font-medium text-gray-600 hover:text-dark transition-colors">Expertise</a>
           <a href="#work" className="text-sm font-medium text-gray-600 hover:text-dark transition-colors">Work</a>
           
           <a 
            href="#contact"
            className="px-5 py-2.5 bg-dark text-white rounded-full text-sm font-medium hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            <Download size={16} />
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-[#F9F8F4] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-dark">About</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-dark">Expertise</a>
          <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-dark">Work</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-3xl text-dark">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;