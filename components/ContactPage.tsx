
import React, { useState, useEffect } from 'react';
import { Menu, Mail, MapPin, Phone, Send, Ear, Building2 } from 'lucide-react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { sendContactEmail } from '../lib/api';

interface PageProps {
  onNavigate: (view: any) => void;
  onLaunchDemo: () => void;
  currentView: string;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

export const ContactPage: React.FC<PageProps> = ({ onNavigate, onLaunchDemo, currentView, darkMode = false, toggleDarkMode = () => {} }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    hearingImpaired: '',
    company: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Validate required fields
    if (!formData.firstName.trim()) {
      setSubmitStatus({type: 'error', message: 'Please enter your first name'});
      return;
    }
    if (!formData.lastName.trim()) {
      setSubmitStatus({type: 'error', message: 'Please enter your last name'});
      return;
    }
    if (!formData.email.trim()) {
      setSubmitStatus({type: 'error', message: 'Please enter your email address'});
      return;
    }
    if (!formData.message.trim()) {
      setSubmitStatus({type: 'error', message: 'Please enter a message'});
      return;
    }

    setIsSubmitting(true);

    // Send email using EmailJS
    const result = await sendContactEmail(formData);

    if (result.success) {
      setSubmitStatus({type: 'success', message: 'Thank you for your message! We will get back to you soon.'});
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        hearingImpaired: '',
        company: '',
        subject: 'General Inquiry',
        message: ''
      });
    } else {
      setSubmitStatus({type: 'error', message: result.message});
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-display selection:bg-brand-100 selection:text-brand-900 transition-colors duration-300">
      
      {/* Navigation */}
      <Navbar 
        currentView={currentView}
        onNavigate={onNavigate}
      />

      {/* Hero */}
      
      <section className="pt-40 pb-12 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
            <h1 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">Get in Touch</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-xl">
                
                {/* Contact Info */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Our Location</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white mb-1">Nairobi:</p>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                Manga House – Ground Floor, Right Wing,<br/>
                                                9 Kiambere Rd, Upper Hill,<br/>
                                                Nairobi, Kenya
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white mb-1">Kigali:</p>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                Carnegie Mellon University Africa,<br/>
                                                Regional ICT Center of Excellence,<br/>
                                                Kigali Innovation City – Bumbogo,<br/>
                                                BP 6150, Kigali, Rwanda
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Phone Number</h3>
                                    <p className="text-slate-600 dark:text-slate-400">+254 741 055198</p>
                                    <p className="text-slate-600 dark:text-slate-400">+254 798 336373</p>
                                    <p className="text-slate-600 dark:text-slate-400">+254 725 861889</p>
                                    <p className="text-slate-600 dark:text-slate-400">+254 712 318275</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Email Address</h3>
                                    <p className="text-slate-600 dark:text-slate-400">signvrse@gmail.com</p>
                                    <p className="text-slate-600 dark:text-slate-400">hello@signvrse.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                         <div className="h-64 w-full bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative">
                            {/* Google Maps Embed - Nairobi Office */}
                            <iframe
                                src="https://www.google.com/maps?q=Manga+House,+9+Kiambere+Rd,+Upper+Hill,+Nairobi,+Kenya&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                                title="Signvrse Nairobi Office Location"
                            ></iframe>
                         </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send a Message</h2>
                    
                    {/* Status Message */}
                    {submitStatus && (
                      <div className={`mb-6 p-4 rounded-xl ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800' 
                          : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
                      }`}>
                        {submitStatus.message}
                      </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">First Name *</label>
                                <input 
                                  type="text" 
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white" 
                                  placeholder="Jane"
                                  required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Last Name *</label>
                                <input 
                                  type="text" 
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white" 
                                  placeholder="Doe"
                                  required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address *</label>
                            <input 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white" 
                              placeholder="jane@company.com"
                              required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                                <Ear size={16} className="text-slate-400" /> Are you hearing impaired?
                            </label>
                            <select 
                              name="hearingImpaired"
                              value={formData.hearingImpaired}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-600 dark:text-slate-300"
                            >
                                <option value="">Please select...</option>
                                <option value="Yes, I am Deaf or Hard of Hearing">Yes, I am Deaf or Hard of Hearing</option>
                                <option value="No, I am hearing">No, I am hearing</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                        </div>
                        <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                                    <Building2 size={16} className="text-slate-400" /> Company / Organization
                                </label>
                                <input 
                                  type="text" 
                                  name="company"
                                  value={formData.company}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white" 
                                  placeholder="Signvrse Inc." 
                                />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                            <select 
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-600 dark:text-slate-300"
                            >
                                <option>General Inquiry</option>
                                <option>Sales / Enterprise</option>
                                <option>Partnership</option>
                                <option>Technical Support</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message *</label>
                            <textarea 
                              rows={4} 
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white" 
                              placeholder="How can we help you?"
                              required
                            ></textarea>
                        </div>
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full py-4 bg-brand-600 hover:bg-brand-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 transition-all flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                        </button>
                    </form>
                </div>

            </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />

    </div>
  );
};
