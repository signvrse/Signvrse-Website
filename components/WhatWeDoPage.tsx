
import React from 'react';
import { 
  Cpu, ScanFace, MessageSquareText, Layers, 
  Smartphone, Globe, Code, ArrowRight, Zap,
  Menu, ChevronDown
} from 'lucide-react';
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

export const WhatWeDoPage: React.FC<PageProps> = ({ onNavigate, onLaunchDemo, currentView, darkMode = false, toggleDarkMode = () => {} }) => {
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

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-100/40 via-transparent to-transparent dark:from-brand-900/20"></div>
         <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
            <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-brand-100 dark:border-brand-900 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                    <Cpu size={12} />
                    Proprietary Technology
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                    Translating the world, <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400 dark:from-brand-400 dark:to-blue-300">One Frame at a Time.</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                    Our platform combines computer vision, natural language understanding, and hyper-realistic 3D rendering to create seamless two-way communication.
                </p>
            </div>
         </div>
      </section>

      {/* The Tech Pipeline */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <div className="text-center mb-20">
                <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">How Signvrse Works</h2>
                <p className="text-slate-500 dark:text-slate-400">From audio input to sign language output in milliseconds.</p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-slate-100 via-brand-200 to-slate-100 dark:from-slate-800 dark:via-brand-900 dark:to-slate-800 -translate-y-1/2 z-0"></div>

                <div className="grid md:grid-cols-4 gap-8 relative z-10">
                    {/* Step 1 */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <MessageSquareText size={28} />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">1. Input Analysis</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Spoken audio or text is captured and processed by Google for intent and nuance understanding.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <Code size={28} />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">2. Linguistic Mapping</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Our proprietary glossing engine converts English grammar into Sign Language syntax (e.g., ASL, SASL).</p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <ScanFace size={28} />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">3. Motion Synthesis</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">3D skeletal data is generated in real-time, applying facial expressions and non-manual markers.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <Layers size={28} />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">4. Rendering</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">The high-fidelity avatar is rendered on the client device (Web, Mobile, VR) with minimal latency.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Solutions / Products */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white transition-colors duration-300">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <h2 className="text-4xl font-bold mb-4">Ecosystem of Solutions</h2>
                    <p className="text-slate-400 max-w-lg">We provide a suite of tools for individuals, developers, and enterprises.</p>
                </div>
                <button className="mt-6 md:mt-0 text-brand-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">View Documentation <ArrowRight size={18} /></button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="p-8 rounded-3xl bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 hover:bg-slate-750 transition-colors">
                    <Smartphone size={40} className="text-brand-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Terp 360 App</h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        A consumer web application available on the various webs. Features include offline mode, customizable avatars, and multi-dialect support.
                    </p>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></div> Live Conversation Mode</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></div> Text & Document Translation</li>
                    </ul>
                </div>

                {/* Card 2 */}
                <div className="p-8 rounded-3xl bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 hover:bg-slate-750 transition-colors">
                    <Globe size={40} className="text-brand-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Web Overlay</h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        A browser extension that makes the internet accessible. It detects video content and automatically overlays a sign language interpreter.
                    </p>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></div> Works on YouTube, Vimeo, Netflix</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></div> Real-time Page Translation</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></div> Zero-data collection privacy</li>
                    </ul>
                </div>

                {/* Card 3 */}
                <div className="p-8 rounded-3xl bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 hover:bg-slate-750 transition-colors">
                    <Cpu size={40} className="text-brand-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Signvrse API</h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        Empower your own applications with our translation engine. Simple REST and WebSocket endpoints for developers.
                    </p>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></div> Low-latency WebSocket stream</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></div> 50+ Regional Sign Languages</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></div> Unity & Unreal Engine SDKs</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-600 dark:bg-brand-700 transition-colors duration-300">
         <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
             <h2 className="text-4xl font-bold text-white mb-6">See the technology in action</h2>
             <p className="text-brand-100 mb-10 text-lg">Try our interactive demo powered by our APIs.</p>
             <button onClick={onLaunchDemo} className="px-8 py-4 bg-white text-brand-600 dark:text-brand-700 font-bold rounded-full shadow-xl hover:scale-105 transition-transform">Launch Interactive Demo</button>
         </div>
      </section>

      <Footer />

    </div>
  );
};
