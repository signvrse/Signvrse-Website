
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import TextVideoHover from './TextVideoHover';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress Listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (view: string) => currentView === view ? 'text-brand-600 dark:text-brand-400 font-semibold' : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400';

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 mx-auto w-[95%] md:w-[90%] max-w-7xl z-50">
      <nav
        className={`relative transition-all duration-300 overflow-hidden backdrop-blur-xl ${
          scrollProgress > 0
            ? "bg-white/80 dark:bg-slate-900/80 border border-white/50 dark:border-slate-800 rounded-full px-6 py-2"
            : "bg-transparent border-none px-4 py-3 rounded-none"
        }`}
      >
        <div className="flex justify-between items-center relative z-10">
          {/* Logo */}
          <div onClick={() => onNavigate("LANDING")}>
            <Logo className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-12 text-sm font-medium">
            <button
              onClick={() => onNavigate("LANDING")}
              className={`transition-colors ${isActive("LANDING")}`}
            >
                Home
            </button>
            <button
              onClick={() => onNavigate("ABOUT")}
              className={`transition-colors ${isActive("ABOUT")}`}
            >
                Who We Are
            </button>
            <button
              onClick={() => onNavigate("PRODUCTS")}
              className={`transition-colors ${isActive("PRODUCTS")}`}
            >
                Products
            </button>
            <button
              onClick={() => onNavigate("PARTNERSHIPS")}
              className={`transition-colors ${isActive("PARTNERSHIPS")}`}
            >
                Partners
            </button>
            <button
              onClick={() => onNavigate("CONTACT")}
              className={`transition-colors ${isActive("CONTACT")}`}
            >
                Contact
              
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                window.open("https://calendly.com/signvrse/30min", "_blank")
              }
              className="hidden sm:flex px-6 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white transition-all font-semibold text-sm items-center shadow-lg shadow-brand-500/30 hover:scale-105 active:scale-95"
            >
                Book a Demo
            </button>
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-full bg-slate-100/70 dark:bg-slate-800/70 text-slate-900 dark:text-white transition-colors hover:bg-slate-200/70 dark:hover:bg-slate-700/70"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Outside the clipped nav) */}
      {mobileMenuOpen && (
       <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-4 flex flex-col gap-8 lg:hidden animate-in slide-in-from-top-2 fade-in duration-200 z-50">
          <button
            onClick={() => {
              onNavigate("LANDING");
              setMobileMenuOpen(false);
            }}
            className="text-left font-medium text-brand-600 dark:text-brand-400"
          >
              Home
          </button>
          <button
            onClick={() => {
              onNavigate("PRODUCTS");
              setMobileMenuOpen(false);
            }}
            className="text-left font-medium text-slate-600 dark:text-slate-300"
          >
              Products
          </button>
          <button
            onClick={() => {
              onNavigate("ABOUT");
              setMobileMenuOpen(false);
            }}
            className="text-left font-medium text-slate-600 dark:text-slate-300"
          >
              Who We Are
          </button>
          <button
            onClick={() => {
              onNavigate("PARTNERSHIPS");
              setMobileMenuOpen(false);
            }}
            className="text-left font-medium text-slate-600 dark:text-slate-300"
          >
              Partners
          </button>
          <button
            onClick={() => {
              onNavigate("CONTACT");
              setMobileMenuOpen(false);
            }}
            className="text-left font-medium text-slate-600 dark:text-slate-300"
          >
              Contact
          </button>
          <button
            onClick={() => {
              window.open("https://terp360.signvrse.com", "_blank");
              setMobileMenuOpen(false);
            }}
            className="w-full py-3 rounded-xl bg-brand-600 text-white font-bold text-center"
          >
              Book a Demo
          </button>
        </div>
      )}
    </div>
  );
};
