import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-sage text-brand-offwhite py-24 border-t border-brand-stone/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 items-start">
          <div className="md:col-span-5">
            <Link to="/" className="group inline-flex items-center gap-4 mb-8">
              <img
                src={logo}
                alt="Sage Futures logo"
                className="h-12 w-auto md:h-14 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-[0.3em] uppercase text-white transition-colors group-hover:text-brand-brass">Sage Futures</span>
                <p className="text-[10px] tracking-[0.4em] text-brand-stone/60 uppercase font-medium mt-2">Nonprofit Community Development CDC</p>
              </div>
            </Link>
            <p className="text-base leading-relaxed max-w-sm text-brand-offwhite/70 font-light">
              South DeKalb–anchored Community Development Corporation focused on Community Wealth Infrastructure and Development Partnerships.
            </p>
            <div className="mt-12 flex flex-col gap-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <span className="text-[10px] font-bold uppercase tracking-widest border-b border-brand-stone inline-block w-fit">Credentialed Practice</span>
              <div className="flex items-center gap-4 text-xs tracking-[0.25em] uppercase">
                <span className="text-brand-stone/60">Social</span>
                <div className="flex gap-4 text-brand-offwhite/70">
                  <a
                    href="https://www.facebook.com/people/bebossiher/100043117667181/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-brass hover:underline underline-offset-4 transition-all transform hover:-translate-y-0.5"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/bebossiher/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-brass hover:underline underline-offset-4 transition-all transform hover:-translate-y-0.5"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/company/be-bossiher/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-brass hover:underline underline-offset-4 transition-all transform hover:-translate-y-0.5"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-brand-brass font-bold text-[10px] uppercase tracking-[0.3em] mb-10">Explore</h3>
            <ul className="space-y-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-offwhite/60">
              <li><Link to="/mission" className="hover:text-brand-brass transition-colors duration-300">Mission</Link></li>
              <li><Link to="/community-wealth-management" className="hover:text-brand-brass transition-colors duration-300">Community Wealth Management</Link></li>
              <li><Link to="/programs" className="hover:text-brand-brass transition-colors duration-300">Programs</Link></li>
              <li><Link to="/community-capital" className="hover:text-brand-brass transition-colors duration-300">Community Capital</Link></li>
              <li><Link to="/governance" className="hover:text-brand-brass transition-colors duration-300">Governance</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 md:col-start-10">
            <h3 className="text-brand-brass font-bold text-[10px] uppercase tracking-[0.3em] mb-10">Contact &amp; Partnerships</h3>
            <ul className="space-y-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-offwhite/60">
              <li>
                <Link to="/contact" className="text-brand-offwhite hover:text-brand-brass transition-colors duration-300">
                  Submit an inquiry
                </Link>
              </li>
              <li><Link to="/partners" className="hover:text-brand-brass transition-colors duration-300">Partners</Link></li>
              <li><Link to="/contact" className="hover:text-brand-brass transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-white/5 text-[9px] tracking-[0.4em] font-medium uppercase text-brand-stone/40 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Sage Futures</p>
            <span className="hidden md:inline text-brand-stone/20">|</span>
            <p>Non-Clinical Professional Practice</p>
          </div>
          <div className="flex space-x-10">
            <span className="cursor-default hover:text-brand-brass transition-colors">Privacy Protocols</span>
            <span className="cursor-default hover:text-brand-brass transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
