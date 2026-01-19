
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface PageProps {
  onNavigate: (view: any) => void;
  onLaunchDemo: () => void;
  currentView: string;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

export const CareersPage: React.FC<PageProps> = ({ onNavigate, onLaunchDemo, currentView, darkMode = false, toggleDarkMode = () => {} }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-display selection:bg-brand-100 selection:text-brand-900 transition-colors duration-300">
      
      {/* Navigation */}
      <Navbar 
        currentView={currentView}
        onNavigate={onNavigate}
      />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
         {/* Background Elements */}
         <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-100/30 dark:bg-brand-900/10 rounded-full blur-[100px] animate-float"></div>
         <div className="absolute bottom-[0%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-[80px] animate-float-delayed"></div>

         <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 md:mb-8 leading-tight">
                Build the Future of <br className="hidden sm:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400 dark:from-brand-400 dark:to-blue-300">Inclusive AI</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
                Join a world-class team solving one of the hardest challenges in communication. Your work here will directly impact millions of lives.
            </p>
         </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 max-w-5xl">
            <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900 dark:text-white">Open Positions</h2>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">Find the role that fits you best.</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-700 text-center">
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
                    We don't have any open positions at the moment, but we're always looking for exceptional talent. 
                    Feel free to submit your application below and we'll keep you in mind for future opportunities.
                </p>
            </div>
        </div>
      </section>

      {/* General Application Form */}
      <section className="py-12 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-900 dark:text-white">Don't see a fit?</h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 md:mb-10 px-4">
                We are always looking for exceptional talent. Drop us your CV and we'll keep you on our radar for future openings.
            </p>
            
            <form className="bg-slate-50 dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-left shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white text-sm md:text-base" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white text-sm md:text-base" placeholder="john@example.com" />
                    </div>
                </div>
                <div className="mb-4 md:mb-6">
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Area of Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-600 dark:text-slate-300 text-sm md:text-base">
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>Product</option>
                        <option>Sales/Marketing</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="mb-4 md:mb-6">
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Portfolio / LinkedIn URL</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white text-sm md:text-base" placeholder="https://..." />
                </div>
                <button type="button" className="w-full py-3 md:py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 transition-all flex items-center justify-center gap-2 text-sm md:text-base">
                    Submit Application <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
                </button>
            </form>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />

    </div>
  );
};
