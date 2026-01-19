
import React from 'react';
import { Handshake, Building, GraduationCap, Code2, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { PartnerLogos } from './PartnerLogos';

interface PageProps {
  onNavigate: (view: any) => void;
  onLaunchDemo: () => void;
  currentView: string;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

export const PartnershipsPage: React.FC<PageProps> = ({ onNavigate, onLaunchDemo, currentView, darkMode = false, toggleDarkMode = () => {} }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-brand-100 selection:text-brand-900 transition-colors duration-300">
      {/* Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={onNavigate}
        onLaunchDemo={onLaunchDemo}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Hero */}
      <section className="pt-40 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-brand-100 dark:border-brand-900 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Handshake size={12} />
            Work With Us
          </div>
          <h1 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Let's Build an <br />
            <span className="text-brand-600 dark:text-brand-400">
              Accessible Future
            </span>{" "}
            Together
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We partner with organizations of all sizes to integrate sign
            language technology into their ecosystems.
          </p>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Corporate */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-500 hover:shadow-xl transition-all group text-center">
              <div className="w-20 h-20 rounded-full bg-brand-50 dark:bg-brand-900/30 mx-auto flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Building size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Corporate
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Make your workforce and customer service inclusive. We offer
                enterprise licenses for our Web Extension and App.
              </p>
              <button className="text-brand-600 dark:text-brand-400 font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all">
                Get Corporate Plan <ArrowRight size={18} />
              </button>
            </div>

            {/* NGO / Govt */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-500 hover:shadow-xl transition-all group text-center">
              <div className="w-20 h-20 rounded-full bg-brand-50 dark:bg-brand-900/30 mx-auto flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                NGOs & Education
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Subsidized pricing and implementation support for schools,
                non-profits, and government agencies serving the deaf community.
              </p>
              <button
                onClick={() => onNavigate("CONTACT")}
                className="text-brand-600 dark:text-brand-400 font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all"
              >
                Partner With Us <ArrowRight size={18} />
              </button>
            </div>

            {/* Tech / API */}
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-500 hover:shadow-xl transition-all group text-center">
              <div className="w-20 h-20 rounded-full bg-brand-50 dark:bg-brand-900/30 mx-auto flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Code2 size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Technology Partners
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Integrate Signvrse directly into your platform. Perfect for
                video conferencing tools, streaming services, and games.
              </p>
              <button className="text-brand-600 dark:text-brand-400 font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all">
                View API Docs <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <PartnerLogos />

      {/* Become a Partner Form */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white transition-colors duration-300">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to collaborate?</h2>
          <button
            onClick={() => onNavigate("CONTACT")}
            className="px-10 py-4 bg-brand-600 hover:bg-brand-500 rounded-full font-bold shadow-lg hover:shadow-brand-500/50 transition-all hover:scale-105"
          >
            Contact Partnerships Team
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
