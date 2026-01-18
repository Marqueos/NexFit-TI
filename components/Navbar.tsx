import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Como Funciona', href: '#process' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - Now scrolls to top */}
        <a href="#" onClick={scrollToTop} className="text-2xl font-bold text-white tracking-tight flex items-center gap-2 cursor-pointer">
          NexFit<span className="text-brand-400">TI</span>
          <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                // Improved contrast: Text is now white/slate-100 instead of slate-300
                className="text-sm font-medium text-slate-100 hover:text-brand-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          {/* Conversion Focused CTA */}
          <Button 
            text="Orçamento Grátis" 
            variant="primary" 
            className="!py-2 !px-4 !text-sm bg-green-600 hover:bg-green-500 border-green-500 text-white" 
            icon={true} 
            // Logic handled automatically by Button component to open WhatsApp
          />
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white hover:text-brand-400 font-medium text-lg border-b border-slate-800 pb-2"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <Button text="Orçamento Grátis" variant="primary" className="w-full justify-center" icon={true} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;