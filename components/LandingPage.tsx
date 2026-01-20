import React, { useState } from 'react';
import { 
  ArrowRight, PlayCircle, Users, Shield, 
  Cpu, Sparkles, MessageSquare, Plus, Minus, ScanFace, Send, Building2, Ear
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import TextVideoHover from './TextVideoHover';
import Testimonials from './Testimonials';
import { sendContactEmail } from '../lib/api';

const generalFaqs = [
  {
    question: "How does the AI translation work?",
    answer: "Our system captures audio or text, analyzes the semantic meaning using Large Language Models (LLMs), and then generates real-time 3D skeletal data to drive a hyper-realistic sign language avatar. This ensures accurate grammar and non-manual markers (facial expressions)."
  },
  {
    question: "Which sign languages do you support?",
    answer: "We currently support Kenyan Sign Language (KSL). We are actively working to expand our offerings to include additional sign languages in the near future."
  },
  {
    question: "Is my conversation data private?",
    answer: "Yes. Privacy is our priority. For consumer apps, we offer on-device processing where possible. For cloud-based requests, data is processed in lasting streams and never stored permanently unless you explicitly opt-in for model training."
  },
  {
    question: "Do I need special hardware?",
    answer: "No. Signvrse works on standard smartphones (iOS/Android) and web browsers with a webcam. Our optimized rendering engine ensures smooth performance even on mid-range devices."
  }
];

const partners = [
    { src: '/images/partners/afosi_logo22.png', alt: 'AFOSI' },
    { src: '/images/partners/alu-logo.svg', alt: 'ALU' },
    { src: '/images/partners/alx.svg', alt: 'ALX' },
    { src: '/images/partners/ashoka.svg', alt: 'Ashoka' },
    { src: '/images/partners/at-scale.webp', alt: 'AT-Scale' },
    { src: '/images/partners/at4d.png', alt: 'AT4D' },
    { src: '/images/partners/commonwealth.png', alt: 'Commonwealth' },
    { src: '/images/partners/cmu.png', alt: 'CMU' },
];

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Landing Page Contact Form State
  const [landingFormData, setLandingFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    hearingImpaired: '',
    subject: 'Partnership Inquiry',
    message: ''
  });
  const [landingStatus, setLandingStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [isLandingSubmitting, setIsLandingSubmitting] = useState(false);

  const handleLandingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLandingFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLandingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLandingStatus(null);
    setIsLandingSubmitting(true);

    const names = landingFormData.fullName.trim().split(' ');
    const firstName = names[0] || '';
    const lastName = names.slice(1).join(' ') || '';

    const result = await sendContactEmail({
      firstName,
      lastName,
      email: landingFormData.email,
      company: landingFormData.company,
      hearingImpaired: landingFormData.hearingImpaired,
      subject: landingFormData.subject,
      message: landingFormData.message
    });

    if (result.success) {
      setLandingStatus({type: 'success', message: 'Message sent successfully!'});
      setLandingFormData({
        fullName: '',
        email: '',
        company: '',
        hearingImpaired: '',
        subject: 'Partnership Inquiry',
        message: ''
      });
    } else {
      setLandingStatus({type: 'error', message: result.message});
    }
    setIsLandingSubmitting(false);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-brand-100 selection:text-brand-900 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
          {/* Futuristic Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          {/* Animated Gradient Background - Softer in Light Mode */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 via-slate-50 to-blue-50/50 dark:from-brand-900/20 dark:via-slate-950 dark:to-blue-900/20 bg-[length:400%_400%] animate-gradient-shift opacity-100 pointer-events-none"></div>

          {/* Abstract Background Shapes & Floating Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large Morphing Blobs */}
            <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-50/50 dark:bg-brand-500/10 rounded-full blur-[100px] animate-blob" />
            <div
              className="absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-500/10 rounded-full blur-[80px] animate-blob"
              style={{ animationDelay: "2s" }}
            />

            {/* Floating Particles */}
            <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-brand-400 rounded-full opacity-40 animate-float"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-float-delayed"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-brand-300 rounded-full opacity-30 animate-float"></div>
            <div className="absolute bottom-1/2 right-1/3 w-1 h-1 bg-slate-400 rounded-full opacity-20 animate-float-delayed"></div>

            {/* Floating Tech Icons */}
            <div className="absolute top-[20%] left-[10%] opacity-20 animate-float">
              <MessageSquare size={48} className="text-brand-400" />
            </div>
            <div className="absolute top-[30%] right-[15%] opacity-20 animate-float-delayed">
              <Cpu size={64} className="text-blue-400" />
            </div>
            <div className="absolute bottom-[25%] left-[20%] opacity-20 animate-float-delayed">
              <Sparkles size={32} className="text-brand-300" />
            </div>
            <div className="absolute top-[18%] right-[30%] opacity-10 animate-float">
              <ScanFace size={40} className="text-brand-500" />
            </div>

            {/* Avatar Floating Elements */}
            <div className="absolute top-[12%] left-[40%] opacity-15 animate-float-delayed">
               <img src="/images/avatar.png" alt="Avatar" className="w-20 h-20 object-contain" />
            </div>
            <div className="absolute top-[50%] left-[5%] opacity-20 animate-float">
               <img src="/images/avatar.png" alt="Avatar" className="w-24 h-24 object-contain" />
            </div>
            <div className="absolute bottom-[25%] right-[10%] opacity-20 animate-float">
               <img src="/images/avatar.png" alt="Avatar" className="w-24 h-24 object-contain" />
            </div>
            <div className="absolute top-[60%] right-[25%] opacity-25 animate-float-delayed">
               <img src="/images/avatar.png" alt="Avatar" className="w-16 h-16 object-contain" />
            </div>
            <div className="absolute bottom-[10%] left-[40%] opacity-10 animate-float">
               <img src="/images/avatar.png" alt="Avatar" className="w-28 h-28 object-contain" />
            </div>

            {/* Geometric Floating Elements */}
            <div className="absolute top-[15%] right-[10%] w-32 h-32 border border-brand-100/40 dark:border-brand-500/20 rounded-full animate-float-delayed" />
            <div className="absolute bottom-[15%] left-[10%] w-24 h-24 border border-blue-100/40 dark:border-blue-500/20 rounded-full animate-float" />
            <div className="absolute top-[50%] left-[50%] w-[800px] h-[800px] border border-slate-100/60 dark:border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10 text-center">
          <TextVideoHover videoSrc="images/website final renders/Building inclusive future.mp4">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight text-slate-900 dark:text-white">
              Building a More <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-blue-400 dark:from-brand-400 dark:via-brand-300 dark:to-blue-300">
                Inclusive Future
              </span>{" "}
              <br />
              for Everyone
            </h1>
            </TextVideoHover>

            <div>
            <TextVideoHover videoSrc="images/translated/Patnering with global organisations.mp4">
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Partnering with organizations worldwide to create AI-powered sign
              language technology that breaks communication barriers using
              advanced motion capture and generative AI.
            </p>
            </TextVideoHover>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-20">
              <button
                onClick={() =>
                  window.open("https://calendly.com/signvrse/30min", "_blank")
                }
                className="px-8 py-4 rounded-full bg-slate-900 dark:bg-brand-600 hover:bg-slate-800 dark:hover:bg-brand-500 text-white font-bold text-lg shadow-xl shadow-slate-900/20 dark:shadow-brand-600/20 transition-all hover:scale-105 flex items-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </button>
    
              <button
                onClick={() =>
                  window.open("https://calendly.com/signvrse/30min", "_blank")
                }
                className="px-8 py-4 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-lg flex items-center gap-2 transition-all shadow-sm hover:shadow-md group backdrop-blur-sm"
              >
                <PlayCircle
                  size={20}
                  className="text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform"
                />
                Try Demo
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-slate-200/60 dark:border-white/10 pt-8 md:pt-12 max-w-5xl mx-auto backdrop-blur-md bg-white/40 dark:bg-slate-900/40 rounded-3xl p-6 md:p-8 border border-white/50 dark:border-white/5 shadow-sm">
              {[
                { label: "User Testing", value: "8,000 hrs" },
                { label: "Development", value: "7,000 hrs" },
                { label: "Countries Piloted", value: "2+" },
                { label: "Deaf People in Africa", value: "40M" },
              ].map((metric, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-brand-900 dark:text-brand-100 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By (New Section) */}
        <section className="py-12 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10"></div>

          <div className="container mx-auto px-8 mb-8 text-center">
            <TextVideoHover videoSrc="images/translated/home page.mp4">
            <p className="text-sm font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
              Trusted by innovative teams worldwide
            </p>
            </TextVideoHover>
          </div>

          <div className="flex gap-8 md:gap-20 animate-marquee whitespace-nowrap transition-all duration-500">
            {/* Logo Strip (Duplicated for infinite scroll) */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-8 md:gap-20 min-w-full">
                  {partners.map((partner, index) => (
                    <img
                      key={index}
                      src={partner.src}
                      alt={partner.alt}
                      className="h-12 w-auto object-contain flex-shrink-0"
                    />
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* About / Mission Teaser */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-full md:w-1/2">
              <TextVideoHover videoSrc="images/website final renders/africas leading inclusive.mp4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Africa's Leading{" "}
                <span className="text-brand-600 dark:text-brand-400">
                  Inclusive Technology
                </span>{" "}
                Platform
              </h2>
              </TextVideoHover>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Signvrse is pioneering the use of Large Language Models (LLMs)
                and computer vision to translate spoken language into sign
                language and vice versa, in real-time. Our mission is to bridge
                the gap between the deaf and hearing communities.
              </p>
              <TextVideoHover videoSrc="images/translated/home page.mp4">
              <button
                onClick={() => navigate("/about")}
                className="text-brand-600 dark:text-brand-400 font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Read our full story <ArrowRight size={18} />
              </button>
              </TextVideoHover>
            </div>
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] bg-brand-50 dark:bg-slate-900 rounded-2xl border border-brand-100 dark:border-brand-900/30 overflow-hidden flex items-center justify-center shadow-inner">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source src="/images/translated/Welcome.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-16 lg:px-24">
            <div className="text-center mb-12 md:mb-16">
              <TextVideoHover videoSrc="images/website final renders/our product.mp4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                Our Products
              </h2>
              </TextVideoHover>
              <br />
              <TextVideoHover videoSrc="images/website final renders/Advanced tools.mp4">
              <p className="text-slate-500 dark:text-slate-400">
                Advanced tools for every accessibility need
              </p>
              </TextVideoHover>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Product 1 */}
              <div
                onClick={() => navigate("/products")}
                className="cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                  Terp 360
                  <span className="px-2 py-1 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 text-xs rounded-full">
                    Web App
                  </span>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  An AI-powered sign language translation platform that
                  provides real-time translation of spoken language into sign
                  language using a hyper-realistic 3D avatar. Accessible via
                  web browsers on both desktop and mobile devices.
                </p>
                <button className="text-brand-600 dark:text-brand-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Explore Terp 360 <ArrowRight size={16} />
                </button>
              </div>

              {/* Product 2 */}
              <div
                onClick={() => navigate("/products")}
                className="cursor-pointer"
              >
                <TextVideoHover videoSrc="images/website final renders/terp for web final render.mp4">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                  Terp for Web
                  <span className="px-2 py-1 bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 text-xs rounded-full">
                    Extension
                  </span>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Make the internet accessible. Automatically translates web
                  video content and text into sign language via an overlay
                  avatar.
                </p>
                </TextVideoHover>
                <button className="text-brand-600 dark:text-brand-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4 md:px-16 lg:px-24">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Cpu,
                  title: "AI-Powered Core",
                  desc: "Signvrse is built on advanced AI and Large Language Models optimized for real-time language understanding and translation. Our system processes meaning, context, and intent to deliver accurate sign language output with low latency and high reliability.",
                  anim: "animate-pulse-slow",
                },
                {
                  icon: Users,
                  title: "Cultural Context",
                  desc: "Our models are trained using Deaf-validated datasets and regional sign language variations, ensuring accurate interpretation of local dialects and cultural nuances. This makes communication more natural, respectful, and relevant across different communities.",
                  anim: "animate-wiggle",
                },
                {
                  icon: Shield,
                  title: "Privacy First",
                  desc: "Signvrse is designed with privacy at its foundation. We support secure data handling and optional on-device or edge processing to ensure conversations remain protected, confidential, and compliant with data protection standards.",
                  anim: "animate-breathe",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <f.icon
                      className={`text-brand-600 dark:text-brand-400 ${f.anim}`}
                      size={24}
                    />
                  </div>
                  <TextVideoHover videoSrc="images/website final renders/Ai powered core.mp4">
                  <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                    {f.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {f.desc}
                  </p>
                  </TextVideoHover>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-16 lg:px-24">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                Hear from our Community
              </h2>
              <br />
              <p className="text-slate-500 dark:text-slate-400">
                Real stories from people using Signvrse everyday.
              </p>
            </div>
            <Testimonials />
          </div>
        </section>

        {/* General FAQs */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
          <div className="container mx-auto px-4 md:px-16 lg:px-24 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 md:mb-16 text-slate-900 dark:text-white">
              Common Questions
            </h2>
            <div className="space-y-4">
              {generalFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-slate-900 dark:text-white focus:outline-none"
                  >
                    {faq.question}
                    {openFaq === index ? (
                      <Minus
                        size={20}
                        className="text-brand-600 dark:text-brand-400"
                      />
                    ) : (
                      <Plus size={20} className="text-slate-400" />
                    )}
                  </button>
                  <div
                    className={`px-6 text-slate-600 dark:text-slate-400 transition-all duration-300 overflow-hidden ${
                      openFaq === index
                        ? "max-h-48 pb-6 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-brand-600 to-brand-800 dark:from-brand-900 dark:to-slate-900 text-white relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="container mx-auto px-4 md:px-16 lg:px-24 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start the Conversation
              </h2>
              <p className="text-brand-100 text-lg">
                Interested in using Signvrse for your organization? We'd love to
                hear from you.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl text-slate-900 dark:text-white">
              {landingStatus && (
                <div className={`mb-6 p-4 rounded-xl ${
                  landingStatus.type === 'success' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
                }`}>
                  {landingStatus.message}
                </div>
              )}
              <form className="space-y-6" onSubmit={handleLandingSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={landingFormData.fullName}
                      onChange={handleLandingChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={landingFormData.email}
                      onChange={handleLandingChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                      <Building2 size={16} className="text-slate-400" /> Company
                      / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={landingFormData.company}
                      onChange={handleLandingChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white"
                      placeholder="Signvrse Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                      <Ear size={16} className="text-slate-400" /> Are you
                      hearing impaired?
                    </label>
                    <select
                      name="hearingImpaired"
                      value={landingFormData.hearingImpaired}
                      onChange={handleLandingChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-600 dark:text-slate-300"
                    >
                      <option value="">
                        Please select...
                      </option>
                      <option value="yes">
                        Yes, I am Deaf or Hard of Hearing
                      </option>
                      <option value="no">No, I am hearing</option>
                      <option value="prefer_not_to_say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Subject
                  </label>
                  <select 
                    name="subject"
                    value={landingFormData.subject}
                    onChange={handleLandingChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-600 dark:text-slate-300"
                  >
                    <option>Partnership Inquiry</option>
                    <option>Product Demo Request</option>
                    <option>Enterprise Licensing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={landingFormData.message}
                    onChange={handleLandingChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white"
                    placeholder="Tell us more about your needs..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLandingSubmitting}
                  className="w-full py-4 bg-slate-900 dark:bg-brand-600 hover:bg-slate-800 dark:hover:bg-brand-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLandingSubmitting ? 'Sending...' : 'Send Request'}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
    </div>
  );
};
