import React, { useEffect, useState, useRef } from 'react';

export const Preloader: React.FC = () => {
  const [show, setShow] = useState(true);
  const [animate, setAnimate] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setAnimate(true);
    setTimeout(() => setShow(false), 500); // Wait for fade out animation
  };

  useEffect(() => {
    // Safety timeout in case video doesn't load or play
    const safetyTimer = setTimeout(() => {
        if (show) {
            handleVideoEnd();
        }
    }, 12000); // Increased to 12s to allow reading

    return () => clearTimeout(safetyTimer);
  }, [show]);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-slate-950 transition-opacity duration-500 ${
        animate ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Video Container */}
        <div className="relative w-full max-w-4xl aspect-video mx-auto px-4 -translate-y-16">
            <video
                ref={videoRef}
                src="/images/translated/Welcome.mp4"
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
                style={{ animation: 'fadeIn 0.5s ease-in forwards' }}
            >
                <source src="/images/translated/Welcome.mp4" type="video/mp4" />
            </video>
        </div>

        {/* Text Overlay / Caption */}
        <div className="absolute bottom-10 left-0 right-0 px-6 text-center z-20">
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-2xl mx-auto border border-slate-200 dark:border-slate-800 animate-slide-up">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Hello, Welcome to Signvrse.
                </h2>
                <p className="text-brand-600 dark:text-brand-400 font-medium text-lg md:text-xl">
                    Swipe or hover over text to play sign language translation
                </p>
                
                {/* Visual Cue/Icon */}
                <div className="mt-4 flex justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></span>
                </div>
            </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
            animation: slideUp 0.8s ease-out 0.5s forwards;
            opacity: 0; /* Start hidden */
        }
      `}</style>
    </div>
  );
};
