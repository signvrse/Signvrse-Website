
import React from 'react';
import { Menu, ArrowRight, TrendingUp, Users, Building2, Quote } from 'lucide-react';
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

export const CaseStudiesPage: React.FC<PageProps> = ({ onNavigate, onLaunchDemo, currentView, darkMode = false, toggleDarkMode = () => {} }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-brand-100 selection:text-brand-900 transition-colors duration-300">
      
      {/* Navigation */}
      <Navbar 
        currentView={currentView}
        onNavigate={onNavigate}
      />

      {/* Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-6">
                <TrendingUp size={12} />
                Real World Impact
            </div>
            <h1 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">Empowering Communities <br/> Across the Globe</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">See how governments, banks, and schools are using Signvrse to create inclusive environments.</p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Case Study 1 */}
                <div className="group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900">
                    <div className="h-64 bg-slate-200 dark:bg-slate-800 relative">
                         <img src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=800" alt="Classroom" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                         <div className="absolute top-4 left-4 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide border border-slate-100 dark:border-slate-700">Education</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Kenya Ministry of Education</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Deploying digital teaching assistants in 500+ schools for the deaf. The initiative helped standardize SASL curriculum delivery and improved literacy rates.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-1">45%</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Literacy Improvement</div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-1">50k+</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Students Impacted</div>
                            </div>
                        </div>
                        <button className="text-brand-600 dark:text-brand-400 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Read Full Case Study <ArrowRight size={18} /></button>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900">
                    <div className="h-64 bg-slate-200 dark:bg-slate-800 relative">
                         <img src="https://images.unsplash.com/photo-1556740758-90de2742e1e2?auto=format&fit=crop&q=80&w=800" alt="Bank" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                         <div className="absolute top-4 left-4 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide border border-slate-100 dark:border-slate-700">Finance</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">First National Bank</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Implemented "Sign-to-Service" kiosks in 200 branches, allowing deaf customers to communicate privately with tellers without human interpreters.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-1">90%</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Customer Satisfaction</div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-1">-15m</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Wait Time Reduction</div>
                            </div>
                        </div>
                        <button className="text-brand-600 dark:text-brand-400 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Read Full Case Study <ArrowRight size={18} /></button>
                    </div>
                </div>

                {/* Case Study 3 */}
                <div className="group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900">
                    <div className="h-64 bg-slate-200 dark:bg-slate-800 relative">
                         <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" alt="Hospital" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                         <div className="absolute top-4 left-4 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide border border-slate-100 dark:border-slate-700">Healthcare</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">City General Hospital</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Emergency room triage communication tool. Doctors use voice-to-sign to explain procedures instantly, saving critical time.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                             <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-1">24/7</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Availability</div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-1">0</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Scheduling Delays</div>
                            </div>
                        </div>
                        <button className="text-brand-600 dark:text-brand-400 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Read Full Case Study <ArrowRight size={18} /></button>
                    </div>
                </div>

                 {/* Case Study 4 */}
                 <div className="group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900">
                    <div className="h-64 bg-slate-200 dark:bg-slate-800 relative">
                         <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" alt="Conference" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                         <div className="absolute top-4 left-4 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide border border-slate-100 dark:border-slate-700">Corporate</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">TechCorp Global</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Internal meetings and all-hands are now fully accessible with automated sign language overlays for remote deaf employees.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                             <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-1">100%</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Meeting Coverage</div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400 mb-1">High</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Employee Inclusion</div>
                            </div>
                        </div>
                        <button className="text-brand-600 dark:text-brand-400 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Read Full Case Study <ArrowRight size={18} /></button>
                    </div>
                </div>
            </div>
        </div>
      </section>

       {/* Testimonial */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white transition-colors duration-300">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center max-w-4xl">
            <Quote size={48} className="text-brand-500 mx-auto mb-8 opacity-50" />
            <p className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                "Signvrse didn't just give us a tool; they gave our students a voice. The engagement we see in the classroom now is unprecedented."
            </p>
            <div>
                <div className="font-bold text-lg">Dr. Amina Keita</div>
                <div className="text-brand-400">Director of Special Education, Nairobi</div>
            </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};
