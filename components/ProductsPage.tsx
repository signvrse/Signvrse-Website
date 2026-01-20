
import React, { useState } from 'react';
import { Menu, Smartphone, Globe, Cpu, Check, ArrowRight, Download, Chrome, Zap, Shield, Star, Code2, Terminal, Play, Pause, Volume2, Maximize, Plus, Minus, MessageSquareText, Code, ScanFace, Layers } from 'lucide-react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import TextVideoHover from './TextVideoHover';

interface PageProps {
  onNavigate: (view: any) => void;
  onLaunchDemo: () => void;
  currentView: string;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

const faqs = [
  {
    question: "Is Terp 360 compatible with older devices?",
    answer: "Terp 360 is optimized to run on most smartphones and computers. The app adapts its 3D rendering quality based on your device's capabilities to ensure smooth performance."
  },
  {
    question: "Can I cancel my Pro subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time from your account settings. You will continue to have access to Pro features until the end of your current billing period."
  },
  {
    question: "Is the API suitable for high-volume commercial use?",
    answer: "Absolutely. Our Enterprise API handles millions of requests daily for major platforms. It scales automatically to meet demand and offers guaranteed uptime SLAs."
  }
];

export const ProductsPage: React.FC<PageProps> = ({ onNavigate, onLaunchDemo, currentView, darkMode = false, toggleDarkMode = () => {} }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-display selection:bg-brand-100 selection:text-brand-900 transition-colors duration-300">
      
      {/* Navigation */}
      <Navbar 
        currentView={currentView}
        onNavigate={onNavigate}
      />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-50 to-transparent dark:from-brand-900/20 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10 text-center">
            {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 md:mb-8 leading-tight px-4">
                Tools that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400 dark:from-brand-400 dark:to-blue-300">Speak Your Language</span>
            </h1>
            {/*</TextVideoHover> */}
            {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
                Whether you're an individual needing a personal interpreter or an enterprise building inclusive apps, Signvrse has the perfect solution.
            </p>
            {/*</TextVideoHover> */}
        </div>
      </section>

      {/* Product Deep Dive: Terp 360 */}
      <section className="py-12 md:py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
                <div className="w-full lg:w-1/2">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6 md:mb-8">
                        <Smartphone size={24} className="md:w-8 md:h-8" />
                    </div>
                    {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Terp 360</h2>
                    {/*</TextVideoHover> */}
                    {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                    <h3 className="text-lg md:text-xl text-brand-600 dark:text-brand-400 font-medium mb-4 md:mb-6">A consumer web application available on Google Chrome and other webs</h3>
                    {/*</TextVideoHover> */}
                    {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                        Features include offline mode, customizable avatars, and multi-dialect support.
                    </p>
                    {/*</TextVideoHover> */}
                    
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mt-0.5"><Check size={14} /></div>
                            <div>
                                {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                                <strong className="text-slate-900 dark:text-white block">Live Conversation Mode</strong>
                                {/*</TextVideoHover> */}
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mt-0.5"><Check size={14} /></div>
                            <div>
                                {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                                <strong className="text-slate-900 dark:text-white block">Text & Document Translation</strong>
                                {/*</TextVideoHover> */}
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
                    {/* Phone Mockup */}
                    <div className="relative z-10 w-[240px] sm:w-[280px] md:w-[320px] mx-auto bg-slate-900 rounded-[3.5rem] p-3 md:p-4 shadow-2xl border-[4px] md:border-[6px] border-slate-800 ring-1 ring-slate-700">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-slate-900 rounded-b-2xl z-20"></div>
                        
                        {/* Screen */}
                        <div className="bg-slate-50 w-full h-full rounded-[2.8rem] overflow-hidden relative aspect-[9/19] flex flex-col">
                             {/* Terp 360 Image */}
                             <img 
                                src="/images/terp2.jpg" 
                                alt="Terp 360 App" 
                                className="w-full h-full object-cover"
                             />
                        </div>
                    </div>
                    {/* Decor elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-200/30 dark:bg-brand-900/10 rounded-full blur-3xl -z-10" />
                </div>
            </div>
        </div>
      </section>

      {/* Product Deep Dive: Web Extension */}
      <section className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-16">
                <div className="w-full lg:w-1/2">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 md:mb-8">
                        <Globe size={24} className="md:w-8 md:h-8" />
                    </div>
                    {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Terp For Web</h2>
                    {/*</TextVideoHover> */}
                    {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                    <h3 className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4 md:mb-6">A browser extension that makes the internet accessible</h3>
                    {/*</TextVideoHover> */}
                    {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                        It detects video content and automatically overlays a sign language interpreter.
                    </p>
                    {/*</TextVideoHover> */}
                    
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mt-0.5"><Check size={14} /></div>
                            <div>
                                {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                                <strong className="text-slate-900 dark:text-white block">Works on YouTube, Vimeo, Netflix</strong>
                                {/*</TextVideoHover> */}
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mt-0.5"><Check size={14} /></div>
                            <div>
                                {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                                <strong className="text-slate-900 dark:text-white block">Real-time Page Translation</strong>
                                {/*</TextVideoHover> */}
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mt-0.5"><Check size={14} /></div>
                            <div>
                                {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                                <strong className="text-slate-900 dark:text-white block">Zero-data collection privacy</strong>
                                {/*</TextVideoHover> */}
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                    {/* Browser Mockup */}
                    <div className="rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transform rotate-0 md:rotate-1 hover:rotate-0 transition-transform duration-500">
                        {/* Chrome Header */}
                        <div className="bg-slate-100 dark:bg-slate-800 px-3 md:px-4 py-2 md:py-3 border-b border-slate-200 dark:border-slate-700 flex gap-2 md:gap-4 items-center">
                            <div className="flex gap-1.5 md:gap-2">
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400 border border-red-500/20"></div>
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400 border border-yellow-500/20"></div>
                                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400 border border-green-500/20"></div>
                            </div>
                            <div className="flex-1 bg-white dark:bg-slate-950 rounded-md h-6 md:h-7 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center px-2 md:px-3 text-[10px] md:text-xs text-slate-400 overflow-hidden">
                                <Shield size={8} className="md:w-[10px] md:h-[10px] mr-1 md:mr-2 text-green-600 flex-shrink-0" /> <span className="truncate">signvrse.com/watch</span>
                            </div>
                        </div>

                        {/* Video Player Content */}
                        <div className="aspect-video bg-slate-900 relative group overflow-hidden">
                            <video 
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                            >
                                <source src="/images/terpforweb.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Product Deep Dive: API */}
      <section className="py-12 md:py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
                <div className="w-full lg:w-1/2">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center mb-6 md:mb-8">
                        <Code2 size={24} className="md:w-8 md:h-8" />
                    </div>
                    {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Signvrse API</h2>
                    {/*</TextVideoHover> */}
                    {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                    <h3 className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium mb-4 md:mb-6">Empower your own applications with our translation engine</h3>
                    {/*</TextVideoHover> */}
                    {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                        Simple REST and WebSocket endpoints for developers.
                    </p>
                    {/*</TextVideoHover> */}
                    
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mt-0.5"><Check size={14} /></div>
                            <div>
                                {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                                <strong className="text-slate-900 dark:text-white block">Low-latency WebSocket stream</strong>
                                {/*</TextVideoHover> */}
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mt-0.5"><Check size={14} /></div>
                            <div>
                                {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                                <strong className="text-slate-900 dark:text-white block">2 Regional Sign Languages</strong>
                                {/*</TextVideoHover> */}
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mt-0.5"><Check size={14} /></div>
                            <div>
                                {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                                <strong className="text-slate-900 dark:text-white block">Unity & Unreal Engine SDKs</strong>
                                {/*</TextVideoHover> */}
                            </div>
                        </li>
                    </ul>

                    {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                    <button className="flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-colors text-sm md:text-base w-full sm:w-auto">
                        <Terminal size={16} className="md:w-[18px] md:h-[18px]" /> View Documentation
                    </button>
                    {/*</TextVideoHover> */}
                </div>
                
                <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                    {/* API Abstract Visualization */}
                    <div className="bg-slate-950 rounded-xl shadow-2xl p-4 md:p-6 font-mono text-[10px] md:text-xs relative overflow-hidden border border-slate-800">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                        </div>
                        
                        <div className="space-y-2 relative z-10">
                            <div className="flex">
                                <span className="text-purple-400 mr-2">POST</span>
                                <span className="text-slate-400">https://api.signvrse.com/v1/translate</span>
                            </div>
                            <div className="text-slate-500">{'{'}</div>
                            <div className="pl-4">
                                <span className="text-blue-300">"input_audio"</span>: <span className="text-orange-300">"base64_encoded_stream..."</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-blue-300">"target_language"</span>: <span className="text-green-300">"KSL"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-blue-300">"avatar_style"</span>: <span className="text-green-300">"realistic_v3"</span>
                            </div>
                            <div className="text-slate-500">{'}'}</div>

                            <div className="mt-4 pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="text-green-500">200 OK</span>
                                    <span className="text-slate-600 text-[10px]">124ms</span>
                                </div>
                                <div className="text-slate-500">{'{'}</div>
                                <div className="pl-4">
                                    <span className="text-blue-300">"animation_data"</span>: <span className="text-yellow-300">"skel_v2_stream_834..."</span>
                                </div>
                                <div className="text-slate-500">{'}'}</div>
                            </div>
                        </div>

                        {/* Abstract Network Nodes Background */}
                        <div className="absolute right-[-20px] top-[-20px] opacity-20 hidden md:block">
                             <Cpu size={120} className="text-brand-500" />
                        </div>
                        <div className="absolute bottom-10 right-10 w-24 h-24 md:w-32 md:h-32 bg-brand-500/10 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* The Tech Pipeline */}
      <section className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="text-center mb-12 md:mb-20">
                {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-900 dark:text-white">How Signvrse Works</h2>
                {/*</TextVideoHover> */}
                <br />
                {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">From audio input to sign language output in milliseconds.</p>
                {/*</TextVideoHover> */}
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-slate-100 via-brand-200 to-slate-100 dark:from-slate-800 dark:via-brand-900 dark:to-slate-800 -translate-y-1/2 z-0"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-10">
                    {/* Step 1 */}
                    <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-4 md:mb-6 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <MessageSquareText size={20} className="md:w-7 md:h-7" />
                        </div>
                        {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                        <h3 className="font-bold text-base md:text-lg mb-2 text-slate-900 dark:text-white">1. Input Analysis</h3>
                        {/*</TextVideoHover> */}
                        {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Spoken audio or text is captured and processed by Google for intent and nuance understanding.</p>
                        {/*</TextVideoHover> */}
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-4 md:mb-6 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <Code size={20} className="md:w-7 md:h-7" />
                        </div>
                        {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                        <h3 className="font-bold text-base md:text-lg mb-2 text-slate-900 dark:text-white">2. Linguistic Mapping</h3>
                        {/*</TextVideoHover> */}
                        {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Our proprietary glossing engine converts English grammar into Sign Language syntax (e.g., ASL, SASL).</p>
                        {/*</TextVideoHover> */}
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-4 md:mb-6 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <ScanFace size={20} className="md:w-7 md:h-7" />
                        </div>
                        {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                        <h3 className="font-bold text-base md:text-lg mb-2 text-slate-900 dark:text-white">3. Motion Synthesis</h3>
                        {/*</TextVideoHover> */}
                        {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">3D skeletal data is generated in real-time, applying facial expressions and non-manual markers.</p>
                        {/*</TextVideoHover> */}
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-4 md:mb-6 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                            <Layers size={20} className="md:w-7 md:h-7" />
                        </div>
                        {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                        <h3 className="font-bold text-base md:text-lg mb-2 text-slate-900 dark:text-white">4. Rendering</h3>
                        {/*</TextVideoHover> */}
                        {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">The high-fidelity avatar is rendered on the client device (Web, Mobile, VR) with minimal latency.</p>
                        {/*</TextVideoHover> */}
                    </div>
                </div>
            </div>
        </div>
      </section>


      {/* FAQs */}
      <section className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 max-w-3xl">
              {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
              {/*</TextVideoHover> */}
              <div className="space-y-4">
                  {faqs.map((faq, index) => (
                      <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <button 
                              onClick={() => toggleFaq(index)}
                              className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-slate-900 dark:text-white focus:outline-none"
                          >
                              {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                              {faq.question}
                              {/*</TextVideoHover> */}
                              {openFaq === index ? <Minus size={20} className="text-brand-600 dark:text-brand-400" /> : <Plus size={20} className="text-slate-400" />}
                          </button>
                          <div className={`px-6 text-slate-600 dark:text-slate-400 transition-all duration-300 overflow-hidden ${openFaq === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                              {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
                              {faq.answer}
                              {/*</TextVideoHover> */}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <section className="py-12 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
         <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 text-center">
             {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">See the technology in action</h2>
             {/*</TextVideoHover> */}
             <br />
             {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
             <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 md:mb-10">Try our interactive demo powered by our APIs.</p>
             {/*</TextVideoHover> */}
             <br />
             {/* <TextVideoHover videoSrc="images\translated\home page.mp4"> */}
             <button onClick={onLaunchDemo} className="px-6 md:px-8 py-3 md:py-4 bg-brand-600 dark:bg-brand-500 text-white font-bold rounded-full shadow-xl hover:scale-105 transition-transform text-sm md:text-base">Launch Demo</button>
             {/*</TextVideoHover> */}
         </div>
      </section>

      <Footer onNavigate={onNavigate} />

    </div>
  );
};
