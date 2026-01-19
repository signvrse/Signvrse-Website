
import React from 'react';
import { Shield, Lock, Eye, Server, ArrowLeft } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PageProps {
  onNavigate: (view: any) => void;
  onLaunchDemo: () => void;
  currentView: string;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

export const PrivacyPolicy: React.FC<PageProps> = ({ onNavigate, onLaunchDemo, currentView, darkMode = false, toggleDarkMode = () => {} }) => {
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

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Privacy Policy</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-12">Last Updated: October 24, 2025</p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-8">
                At Signvrse, we prioritize the privacy and security of our users, especially regarding the sensitive nature of biometric data used in sign language interpretation.
            </p>

            <div className="space-y-12">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">
                            <Eye size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">1. Biometric Data Collection</h2>
                    </div>
                    <div className="pl-14 text-slate-600 dark:text-slate-400 space-y-4">
                        <p>
                            To provide real-time sign language interpretation, our application processes video and audio input from your device's camera and microphone. This data allows our AI models to detect hand gestures, facial expressions, and body pose (skeletal data).
                        </p>
                        <p className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border-l-4 border-brand-500">
                            <strong>Key Commitment:</strong> For individual users on our "Terp 360" app and "Web Extension", this processing occurs <strong>on-device</strong> whenever hardware permits. We do not store raw video footage of your face or surroundings on our servers.
                        </p>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">
                            <Server size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">2. Data Processing & AI</h2>
                    </div>
                    <div className="pl-14 text-slate-600 dark:text-slate-400 space-y-4">
                        <p>
                            When using our Cloud API or advanced features (like Gemini 3.0 Pro analysis), ephemeral data streams are sent to our secure cloud infrastructure.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Data is encrypted in transit (TLS 1.3) and at rest.</li>
                            <li>Streams are processed instantly and deleted immediately after the translation is returned.</li>
                            <li>We do not use customer conversation data to train our foundational models unless you explicitly opt-in to our "Community Contribution" program.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">
                            <Lock size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">3. Third-Party Sharing</h2>
                    </div>
                    <div className="pl-14 text-slate-600 dark:text-slate-400 space-y-4">
                        <p>
                            We do not sell your personal data. We strictly share data only with:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Cloud Providers:</strong> Google Cloud Platform (GCP) for hosting our AI infrastructure.</li>
                            <li><strong>Enterprise Admins:</strong> If you use an Enterprise account, your organization administrator may have access to usage logs (but not conversation content).</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">
                            <Shield size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">4. User Rights</h2>
                    </div>
                    <div className="pl-14 text-slate-600 dark:text-slate-400 space-y-4">
                        <p>Regardless of your location, we extend GDPR-level rights to all users:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Right to Access:</strong> Request a copy of your account data.</li>
                            <li><strong>Right to Erasure:</strong> Delete your account and all associated metadata.</li>
                            <li><strong>Right to Opt-Out:</strong> Disable any optional data collection for model improvement.</li>
                        </ul>
                    </div>
                </section>
            </div>

            <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Questions about privacy?</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">Our Data Protection Officer is available to help.</p>
                <a href="mailto:privacy@signvrse.com" className="text-brand-600 dark:text-brand-400 font-bold hover:underline">privacy@signvrse.com</a>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
