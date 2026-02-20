
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/Logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Mission', path: '/mission' },
    { name: 'Community Wealth Management', path: '/community-wealth-management' },
    { name: 'Programs', path: '/programs' },
    { name: 'Training & Advisory', path: '/training-advisory' },
    { name: 'Community Capital', path: '/community-capital' },
    { name: 'Governance', path: '/governance' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-offwhite/95 backdrop-blur-md shadow-sm border-b border-brand-stone py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="group flex items-center space-x-3">
              <img
                src={logo}
                alt="Sage Futures logo"
                className="h-10 w-auto md:h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold tracking-[0.2em] text-brand-sage uppercase transition-colors group-hover:text-brand-brass">
                  Sage Futures
                </span>
                <span className="text-[10px] tracking-[0.3em] text-brand-charcoal/60 uppercase font-medium">
                  Sage Futures is a 501(c)(3) community development corporation
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:text-brand-brass link-underline ${
                  isActive(link.path) ? 'text-brand-brass' : 'text-brand-charcoal'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-brand-sage hover:text-brand-brass focus:outline-none transition-colors"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen border-b border-brand-stone' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-8 space-y-2 bg-brand-offwhite">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 text-sm font-bold uppercase tracking-widest border-b border-brand-stone/30 ${
                isActive(link.path) ? 'text-brand-brass' : 'text-brand-charcoal'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
