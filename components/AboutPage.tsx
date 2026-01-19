
import React from 'react';
import { 
  ArrowLeft, Linkedin, Twitter, Globe, Heart, Zap, 
  Users, Lock, Sparkles, Menu, Cpu, ScanFace, Code2, Activity,
  Briefcase, ArrowRight, Award
} from 'lucide-react';
import { Logo } from './Logo';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface AboutPageProps {
  onBack: () => void;
  onNavigate?: (view: any) => void;
  currentView?: string;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

const teamMembers = [
  // Executive
  { name: "Elly Savatia", role: "CEO & Founder", image: "/images/team/elly.jpg" },
  { name: "Branice Kazira", role: "Co-founder", image: "/images/team/branice.png" },
  { name: "Winnie Ongiri", role: "Head of Operations", image: "/images/team/winnie.png" },
  { name: "Lincence Boge", role: "Business Development Officer", image: "/images/team/boge.jpeg" },
  { name: "Kevin Kipkurui", role: "Project Manager", image: "/images/team/kevin.jpg" },
  { name: "Andrew Olubala", role: "Community Engagement Lead", image: "/images/team/andrew.png" },
  { name: "Stephan Kipchumba", role: "3D Artist", image: "/images/team/stefan.png" },
  { name: "Anthony Githinji", role: "Data Scientist", image: "/images/team/antony.jpeg" },
  { name: "Kenneth Muyoyo", role: "Tech Lead", image: "/images/team/ken.jpeg" },
  { name: "Teresia Wachira", role: "Sign Language Interpreter", image: "/images/team/teresia.jpeg" },
];

const advisoryBoard = [
    { name: "Prof. Michael M. Ndurumo", role: "Special Needs Education Expert", image: "/images/team/ndurumo.jpg" },
    { name: "Nancy Maina Wagi", role: "Deaf Children Early Years Interventionist", image: "/images/team/Nancy Mainaa.jpeg" },
    { name: "Bryan Chesoli", role: "Youth Engagement Specialist", image: "/images/team/Ches.jpeg" },
    { name: "Eric Nyamwaro", role: "Head of Strategic Partnerships", image: "/images/team/eric.jpeg" },
    { name: "Bernard Chiira", role: "Expert on Africa & Global Assistive Technology Innovation", image: "/images/team/Berna.jpg" },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onBack, onNavigate, currentView = 'ABOUT', darkMode = false, toggleDarkMode = () => {} }) => {
  const navigate = onNavigate || (() => onBack());

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-brand-100 selection:text-brand-900 transition-colors duration-300">
      
      {/* Navigation */}
      <Navbar 
        currentView={currentView}
        onNavigate={navigate}
        onLaunchDemo={() => window.open('https://terp360.signvrse.com', '_blank')}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-brand-50/50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
            Our Mission is <span className="text-brand-600 dark:text-brand-400">Connection</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We believe communication is a fundamental human right. Signvrse is dedicated to dismantling barriers for the 70 million+ Deaf people worldwide through the power of artificial intelligence.
          </p>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-100 dark:bg-brand-900/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Dedicated Mission & Values Section */}
      <section className="py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Mission */}
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={12} />
                Our Purpose
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                Bridging worlds with <br/> <span className="text-brand-600 dark:text-brand-400">Intentional AI</span>.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                We don't just build technology; we build bridges. Every line of code, every dataset, and every model is crafted with the singular goal of making the world more accessible. We are committed to ethical AI development that respects and uplifts the Deaf culture.
              </p>
            </div>

            {/* Right Column: Core Values Grid */}
            <div className="lg:w-2/3">
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Value 1 */}
                <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-700 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400 border border-slate-100 dark:border-slate-700">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Empathy Centric</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We design with, not just for. Our development process involves continuous feedback loops with the Deaf community to ensure our solutions address real-world needs.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-700 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400 border border-slate-100 dark:border-slate-700">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Relentless Innovation</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We push the boundaries of what's possible with Generative AI, Computer Vision, and 3D rendering to solve complex linguistic nuances that others ignore.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-700 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400 border border-slate-100 dark:border-slate-700">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Radical Inclusivity</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Diversity is our strength. Our team represents a spectrum of abilities and backgrounds, ensuring our technology is universally accessible and culturally competent.
                  </p>
                </div>

                {/* Value 4 */}
                <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-700 hover:shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400 border border-slate-100 dark:border-slate-700">
                    <Lock size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Data Integrity</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We hold ourselves to the highest standards of data privacy and security, utilizing on-device processing whenever possible to protect user conversations.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Pillars (New Section) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Technology Pillars</h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                Powered by advanced research and cutting-edge engineering.
              </p>
           </div>
           
           <div className="grid md:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                 <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4">
                    <Cpu size={24} />
                 </div>
                 <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">AI-Powered Language Intelligence</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-400">
                    At the core of Signvrse is advanced language intelligence powered by Large Language Models (LLMs), 
                    enabling real-time translation between spoken language and sign language, as well as sign language to
                    spoken or written text. This technology delivers context-aware, grammatically accurate interpretations
                    and supports local languages such as English and Swahili translating into Kenyan Sign Language (KSL).
                    Because sign languages are not word-for-word translations, our AI is designed to understand meaning, 
                    context, and intent—not just individual words—ensuring communication that is accurate, natural, 
                    and respectful of Deaf culture.

                 </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                 <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4">
                    <ScanFace size={24} />
                 </div>
                 <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Emotive Avatars</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-400">
                    Our emotive avatars are designed to deliver sign language in a natural, expressive, and human-like way. Built using advanced 3D animation and 
                    real-time rendering technologies, they accurately convey hand movements, body posture, facial expressions, and non-manual signals that are 
                    essential to sign language. By reflecting emotion, intent, and linguistic nuance, these avatars ensure clarity and comprehension while making 
                    sign language accessible anytime, anywhere, and at scale.
                 </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                 <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4">
                    <Code2 size={24} />
                 </div>
                 <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Computer Vision and Motion Capture</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-400">
                    We use computer vision and motion-capture technologies to accurately understand and reproduce human signing by capturing
                    real sign language movements from Deaf and fluent signers. This allows us to track hands, body posture, 
                    facial expressions, and other non-manual markers, producing high-fidelity sign data for 
                    training and validation. Because facial expressions and body movement are essential components of 
                    sign language, this approach ensures Signvrse’s output is natural, clear, and linguistically correct.
                 </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                 <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4">
                    <Activity size={24} />
                 </div>
                 <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Deaf-Centric Data & Ethical AI</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-400">
                    Signvrse is built with the Deaf community, not just for it, enabling Deaf-validated datasets, continuous community feedback loops, 
                    and interpreter-verified translations through ethical data collection grounded in consent and transparency. 
                    By centering lived experience in our development process, we avoid the pitfalls of many AI systems that overlook cultural context, 
                    ensuring accuracy, trust, and long-term adoption within the Deaf community.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Meet the Team</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              A diverse group of engineers, linguists, and creatives united by a shared mission.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                 {/* Avatar */}
                 <div className="relative w-32 h-32 mb-4">
                     <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-600 via-white to-brand-600 bg-[length:200%_200%] opacity-0 group-hover:opacity-60 animate-gradient-shift transition-all duration-500 blur-md"></div>
                     <img 
                        src={member.image} 
                        alt={member.name}
                        className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-lg group-hover:scale-105 transition-transform duration-300"
                     />
                 </div>
                 <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight mb-1">{member.name}</h3>
                 <p className="text-brand-600 dark:text-brand-400 text-sm font-medium">{member.role}</p>
                 <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Linkedin size={14} className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer" />
                    <Twitter size={14} className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer" />
                 </div>
              </div>
            ))}
          </div>

          {/* CTA Card for Hiring */}
          <div className="max-w-md mx-auto">
             <div onClick={() => navigate('CAREERS')} className="group flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-brand-300 dark:hover:border-brand-500 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center text-brand-600 dark:text-brand-400">
                        <Briefcase size={18} />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-slate-900 dark:text-white">We are Hiring!</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">View open positions</div>
                    </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <ArrowRight size={16} />
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Board of Advisors</h2>
                 <p className="text-slate-500 dark:text-slate-400">Guiding our strategic vision and ethical development.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
                {advisoryBoard.map((advisor, index) => (
                    <div key={index} className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 text-center hover:shadow-lg transition-shadow">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-brand-200 dark:border-brand-800">
                            <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">{advisor.name}</h3>
                        <p className="text-brand-600 dark:text-brand-400 text-sm font-medium mb-3">{advisor.role}</p>
                        <div className="w-8 h-1 bg-brand-100 dark:bg-brand-900 mx-auto rounded-full"></div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white text-center">
         <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold mb-6">Ready to see it in action?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">Join thousands of users who are already breaking down barriers with Signvrse.</p>
            <button 
                onClick={() => window.open('https://terp360.signvrse.com', '_blank')}
                className="px-10 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg shadow-xl shadow-brand-900/50 transition-all hover:scale-105"
            >
                Launch Live Demo
            </button>
         </div>
      </section>

      <Footer />

    </div>
  );
};
