
import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('signvrse-cookie-consent');
    if (!consent) {
      // Delay slightly for animation effect
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('signvrse-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('signvrse-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 z-[9999] animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-6 md:flex items-center gap-6 relative">
        <button 
            onClick={handleDecline} 
            className="absolute top-2 right-2 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 md:hidden"
        >
            <X size={20} />
        </button>
        
        <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mb-4 md:mb-0">
            <Cookie size={24} />
        </div>
        
        <div className="flex-1">
            <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">We value your privacy</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We use cookies to enhance your experience, analyze site traffic, and assist in our marketing efforts. 
                We do not store biometric data in cookies.
            </p>
        </div>

        <div className="flex gap-3 mt-4 md:mt-0">
            <button 
                onClick={handleDecline}
                className="px-4 py-2 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
                Decline
            </button>
            <button 
                onClick={handleAccept}
                className="px-6 py-2 rounded-lg text-sm font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-500/30 transition-all"
            >
                Accept All
            </button>
        </div>
      </div>
    </div>
  );
};
