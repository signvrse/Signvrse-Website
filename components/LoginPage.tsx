import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Navbar } from './Navbar';

interface PageProps {
  onNavigate?: (view: any) => void;
  onLaunchDemo?: () => void;
  currentView?: string;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

export const LoginPage: React.FC<PageProps> = ({ 
  onNavigate, 
  onLaunchDemo, 
  currentView, 
  darkMode = false, 
  toggleDarkMode = () => {} 
}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    // TODO: Implement actual authentication logic
    setTimeout(() => {
      setIsSubmitting(false);
      // For now, just navigate to dashboard
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-brand-100 selection:text-brand-900 transition-colors duration-300">
      <Navbar 
        currentView={currentView}
        onNavigate={onNavigate}
        onLaunchDemo={onLaunchDemo}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Futuristic Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        {/* Animated Gradient Background - Softer in Light Mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 via-slate-50 to-blue-50/50 dark:from-brand-900/20 dark:via-slate-950 dark:to-blue-900/20 bg-[length:400%_400%] animate-gradient-shift opacity-100 pointer-events-none"></div>

        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-50/50 dark:bg-brand-500/10 rounded-full blur-[100px] animate-blob" />
          <div
            className="absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-500/10 rounded-full blur-[80px] animate-blob"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-md mx-auto">
            {/* Login Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-800">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                  Welcome Back
                </h1>
                <p className="text-slate-600 dark:text-slate-400">
                  Sign in to your account to continue
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800">
                  {error}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-12 pr-12 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all dark:text-white"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-brand-600 focus:ring-brand-200"
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Remember me</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-brand-600 dark:text-brand-400 font-bold hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-slate-900 dark:bg-brand-600 hover:bg-slate-800 dark:hover:bg-brand-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Signing in...' : 'Sign In'}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-slate-600 dark:text-slate-400">
                  Don't have an account?{' '}
                  <Link
                    to="/register"
                    className="text-brand-600 dark:text-brand-400 font-bold hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
