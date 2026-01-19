import React, { useState } from 'react';
import { Logo } from './Logo';
import { Twitter, Facebook, Instagram, Linkedin, Youtube, ArrowRight, Mail } from 'lucide-react';
import { sendNewsletterEmail } from '../lib/api';

const Tiktok = ({ size = 24, className }: { size?: number | string; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v4a9 9 0 0 1-9-9v17Z" />
  </svg>
);

interface FooterProps {
    onNavigate?: (view: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (e: React.MouseEvent, view: string) => {
    e.preventDefault();
    scrollToTop();
    if (onNavigate) onNavigate(view);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!email.trim()) {
      setSubmitStatus({type: 'error', message: 'Please enter your email address'});
      return;
    }

    setIsSubmitting(true);

    const result = await sendNewsletterEmail(email);

    if (result.success) {
      setSubmitStatus({type: 'success', message: 'Successfully subscribed! Thank you.'});
      setEmail('');
    } else {
      setSubmitStatus({type: 'error', message: result.message});
    }

    setIsSubmitting(false);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 font-display relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-12 relative z-10">
        
        {/* Top Section: Newsletter & Call to Action */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-20 border-b border-slate-800/50 pb-16">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-3">Stay ahead of the curve</h3>
            <p className="text-slate-400 text-lg">Join our newsletter to receive the latest updates on AI accessibility and sign language technology.</p>
          </div>
          
          <div className="w-full lg:w-auto flex-1 max-w-md">
            <form onSubmit={handleSubscribe} className="relative">
                <div className="relative flex items-center">
                    <Mail className="absolute left-4 text-slate-500 w-5 h-5" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        disabled={isSubmitting}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-4 pl-12 pr-32 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-500 text-white px-6 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? '...' : 'Subscribe'}
                    </button>
                </div>
            </form>
            {submitStatus && (
                <p className={`text-sm mt-3 ${
                  submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {submitStatus.message}
                </p>
              )}
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo className="w-32 h-auto" />
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Empowering global communication through AI-driven sign language translation. We're building a world where everyone can connect without barriers.
            </p>
            <div className="flex gap-4 pt-2">
                {[
                  { Icon: Twitter, href: 'https://x.com/signvrse' },
                  { Icon: Facebook, href: 'https://www.facebook.com/signvrseai' },
                  { Icon: Instagram, href: 'https://www.instagram.com/signvrse/' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/company/signvrse/' },
                  { Icon: Youtube, href: 'https://www.youtube.com/@signvrse' },
                  { Icon: Tiktok, href: 'https://www.tiktok.com/@signvrse' },
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group"
                    aria-label={`Visit our social page`}
                  >
                    <social.Icon size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
            </div>
          </div>

          {/* Links Columns (Span 8 -> broken into 3 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Company */}
            <div>
              <h4 className="font-bold text-white text-lg mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" onClick={(e) => handleNav(e, 'LANDING')} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Home</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'ABOUT')} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">About Us</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'CAREERS')} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Careers</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'CONTACT')} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Contact</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Partners</a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-bold text-white text-lg mb-6">Solutions</h4>
              <ul className="space-y-4">
                <li><a href="#" onClick={(e) => handleNav(e, 'PRODUCTS')} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Sign Translation</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'PRODUCTS')} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">AI Avatars</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'PRODUCTS')} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Web Accessibility</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'PRODUCTS')} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Motion Capture</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'PRODUCTS')} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">API Access</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-white text-lg mb-6">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" onClick={(e) => handleNav(e, 'BLOG')} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Case Studies</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Community</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Help Center</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Documentation</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Signvrse. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8">
            <a href="#" onClick={(e) => handleNav(e, 'PRIVACY')} className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => handleNav(e, 'TERMS')} className="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
