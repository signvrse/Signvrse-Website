import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { AboutPage } from './components/AboutPage';
import { WhatWeDoPage } from './components/WhatWeDoPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { PartnershipsPage } from './components/PartnershipsPage';
import { ContactPage } from './components/ContactPage';
import { CareersPage } from './components/CareersPage';
import { ProductsPage } from './components/ProductsPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { BlogPage } from './components/BlogPage';
import { CookieBanner } from './components/CookieBanner';
import { AccessibilityWidget } from './components/AccessibilityWidget';
import { LandingPage } from './components/LandingPage';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Dark Mode State Lifted
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('theme') === 'dark' || 
               (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Scroll Reset on Route Change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleNavigate = (view: any) => {
      const paths: Record<string, string> = {
          'LANDING': '/',
          'ABOUT': '/about',
          'PRODUCTS': '/products',
          'CONTACT': '/contact',
          'CAREERS': '/careers',
          'PARTNERSHIPS': '/partnerships',
          'WHAT_WE_DO': '/what-we-do',
          'CASE_STUDIES': '/case-studies',
          'PRIVACY': '/privacy',
          'TERMS': '/terms',
          'BLOG': '/blog'
      };
      
      const path = paths[view] || view;
      
      // Check if it's an external link or demo
      if (view === 'DEMO') {
           window.open("https://terp360.signvrse.com", "_blank");
           return;
      }
      
      navigate(path);
  };

  const commonProps = {
    onNavigate: handleNavigate,
    currentView: location.pathname, // Might not match exact string exptected by some components for highlighting but Navbar handles itself now.
    darkMode,
    toggleDarkMode,
    onBack: () => navigate('/'),
    onLaunchDemo: () => window.open("https://terp360.signvrse.com", "_blank"),
  };

  return (
    <>
        <a href="#main-content" className="skip-link">Skip to Content</a>
        <div id="main-content">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage {...commonProps} />} />
                <Route path="/what-we-do" element={<WhatWeDoPage {...commonProps} />} />
                <Route path="/products" element={<ProductsPage {...commonProps} />} />
                <Route path="/partnerships" element={<PartnershipsPage {...commonProps} />} />
                <Route path="/careers" element={<CareersPage {...commonProps} />} />
                <Route path="/contact" element={<ContactPage {...commonProps} />} />
                <Route path="/case-studies" element={<CaseStudiesPage {...commonProps} />} />
                <Route path="/blog" element={<BlogPage {...commonProps} />} />
                <Route path="/privacy" element={<PrivacyPolicy {...commonProps} />} />
                <Route path="/terms" element={<TermsOfService {...commonProps} />} />
                
                {/* Redirects for singular/alternate paths */}
                <Route path="/product" element={<Navigate to="/products" replace />} />
                <Route path="/partnership" element={<Navigate to="/partnerships" replace />} />
                <Route path="/career" element={<Navigate to="/careers" replace />} />
                <Route path="/case-study" element={<Navigate to="/case-studies" replace />} />
                <Route path="/whatwedo" element={<Navigate to="/what-we-do" replace />} />
                <Route path="/term" element={<Navigate to="/terms" replace />} />

                {/* Fallback */}
                <Route path="*" element={<LandingPage />} />
            </Routes>
        </div>
        <CookieBanner />
        <AccessibilityWidget darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

export default App;
