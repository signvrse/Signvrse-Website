
import React from 'react';
import { FileText, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PageProps {
  onNavigate: (view: any) => void;
  onLaunchDemo: () => void;
  currentView: string;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

export const TermsOfService: React.FC<PageProps> = ({ onNavigate, onLaunchDemo, currentView, darkMode = false, toggleDarkMode = () => {} }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">
      <Navbar 
        currentView={currentView}
        onNavigate={onNavigate}
        onLaunchDemo={onLaunchDemo}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div className="pt-32 pb-20 container mx-auto px-8 md:px-16 lg:px-24 max-w-4xl">
        <button onClick={() => onNavigate('LANDING')} className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold mb-8 hover:underline">
            <ArrowLeft size={16} /> Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Terms of Service</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-12">Effective Date: October 24, 2025</p>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
            <p className="lead text-xl mb-8">
                Welcome to Signvrse. By accessing or using our website, mobile application, API, or web extension, you agree to be bound by these Terms of Service.
            </p>

            <div className="space-y-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <CheckCircle size={20} className="text-brand-600" /> 1. Acceptable Use
                    </h2>
                    <p className="mb-4">You agree not to use Signvrse services to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Translate or generate hate speech, threats, or illegal content.</li>
                        <li>Reverse engineer our AI models, skeletal data, or glossing engine.</li>
                        <li>Automate high-volume requests (scraping) without an Enterprise API key.</li>
                    </ul>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <FileText size={20} className="text-brand-600" /> 2. Accuracy Disclaimer
                    </h2>
                    <p>
                        Signvrse uses advanced Generative AI to provide interpretation. While we strive for high accuracy:
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white mt-2">
                        You acknowledge that AI translations may contain errors or cultural inaccuracies. Signvrse should not be relied upon for critical medical, legal, or emergency situations where a certified human interpreter is required by law.
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <AlertCircle size={20} className="text-brand-600" /> 3. Limitation of Liability
                    </h2>
                    <p>
                        To the maximum extent permitted by law, Signvrse Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or use.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Subscription & Billing</h2>
                    <p className="mb-4">
                        <strong>Free Trial:</strong> We may offer a free trial for Pro plans. You will be billed immediately upon trial expiration unless cancelled.
                    </p>
                    <p>
                        <strong>Cancellation:</strong> You may cancel your subscription at any time. Refunds are provided only for annual plans cancelled within 14 days of purchase.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of Kenya and applicable international laws, without regard to its conflict of law provisions.
                    </p>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
