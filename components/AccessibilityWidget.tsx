import React, { useState, useEffect, useRef } from 'react';
import { 
  Accessibility, Eye, Type, MousePointer2, 
  Sun, Moon, Activity, X, RefreshCcw,
  MoveHorizontal, MoveVertical, PauseCircle,
  Link as LinkIcon, Mic, Volume2, Globe, Languages, Check, Keyboard
} from 'lucide-react';

interface AccessibilityWidgetProps {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

export const AccessibilityWidget: React.FC<AccessibilityWidgetProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Feature States
  const [showDictation, setShowDictation] = useState(false);
  const [dictatedText, setDictatedText] = useState('');
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
  const [showShortcutsModal, setShowShortcutsModal] = useState(false);
  
  // Dragging State
  // We use 'undefined' initially so CSS controls the start position
  const [position, setPosition] = useState<{ x: number, y: number } | undefined>(undefined);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Announcement State
  const [announcement, setAnnouncement] = useState('');

  const [settings, setSettings] = useState({
    grayscale: false,
    highContrast: false,
    invertColors: false,
    textScale: 100,
    lineHeight: false,
    letterSpacing: false,
    dyslexiaFont: false,
    largeCursor: false,
    readingMask: false,
    pauseMotion: false,
    highlightLinks: false,
  });

  const [mouseY, setMouseY] = useState(0);

  const languageCodes: {[key: string]: string} = {
    'English': 'en',
    'Spanish': 'es',
    'French': 'fr',
    'Swahili': 'sw',
    'Arabic': 'ar'
  };

  // Initialize language from cookie
  useEffect(() => {
    const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const cookie = getCookie('googtrans');
    if (cookie) {
        // Cookie format is usually /source/target or /target
        // e.g., /en/es
        const parts = cookie.split('/');
        const targetCode = parts[parts.length - 1]; 
        
        // Reverse lookup
        const lang = Object.keys(languageCodes).find(key => languageCodes[key] === targetCode);
        if (lang) {
            setCurrentLang(lang);
        }
    }
  }, []);

  const changeLanguage = (lang: string) => {
    const code = languageCodes[lang];
    if (code) {
      document.cookie = `googtrans=/en/${code}; path=/`;
      setCurrentLang(lang);
      setShowLanguageModal(false);
      window.location.reload();
    }
  };

  // --- Persistence ---
  useEffect(() => {
    const savedSettings = localStorage.getItem('signvrse-accessibility');
    if (savedSettings) {
        try { setSettings(JSON.parse(savedSettings)); } catch (e) { console.error(e); }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('signvrse-accessibility', JSON.stringify(settings));
  }, [settings]);

  // --- Body Scroll Lock ---
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // --- Click Outside to Close ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node) && 
          dragRef.current && !dragRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // --- CSS Class Applications ---
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    
    // Scale
    html.classList.remove('accessibility-text-scale-110', 'accessibility-text-scale-125', 'accessibility-text-scale-150');
    if (settings.textScale > 100) html.classList.add(`accessibility-text-scale-${settings.textScale}`);

    // Visuals
    body.classList.toggle('accessibility-spacing-wide', settings.letterSpacing);
    body.classList.toggle('accessibility-line-height', settings.lineHeight);
    body.classList.toggle('accessibility-dyslexia', settings.dyslexiaFont);
    body.classList.toggle('accessibility-large-cursor', settings.largeCursor);
    body.classList.toggle('accessibility-pause-motion', settings.pauseMotion);
    body.classList.toggle('accessibility-highlight-links', settings.highlightLinks);
  }, [settings]);

  // --- Reading Mask ---
  useEffect(() => {
    if (settings.readingMask) {
      const handleMouseMove = (e: MouseEvent) => setMouseY(e.clientY);
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [settings.readingMask]);

  // --- Draggable Logic ---
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      // Calculate new position with boundary checking (prevents dragging off screen)
      const buttonSize = 56; // 14 * 4px
      const padding = 10;
      
      let newX = e.clientX - (buttonSize / 2);
      let newY = e.clientY - (buttonSize / 2);

      // Boundary Checks
      const maxX = window.innerWidth - buttonSize - padding;
      const maxY = window.innerHeight - buttonSize - padding;

      newX = Math.max(padding, Math.min(newX, maxX));
      newY = Math.max(padding, Math.min(newY, maxY));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // --- Helpers ---
  const announce = (msg: string) => {
    setAnnouncement(msg);
    setTimeout(() => setAnnouncement(''), 3000);
  };

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => {
      const newVal = !prev[key];
      announce(`${key.replace(/([A-Z])/g, ' $1')} ${newVal ? 'Enabled' : 'Disabled'}`);
      return { ...prev, [key]: newVal };
    });
  };

  const setTextScale = (scale: number) => {
    setSettings(prev => ({ ...prev, textScale: scale }));
    announce(`Text scale set to ${scale}%`);
  };

  const resetAll = () => {
    setSettings({
        grayscale: false,
        highContrast: false,
        invertColors: false,
        textScale: 100,
        lineHeight: false,
        letterSpacing: false,
        dyslexiaFont: false,
        largeCursor: false,
        readingMask: false,
        pauseMotion: false,
        highlightLinks: false,
    });
    window.speechSynthesis.cancel();
    announce("All accessibility settings reset");
  };

  const speakPage = () => {
      window.speechSynthesis.cancel();
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
  };

  const startDictation = () => {
      setShowDictation(true);
      setDictatedText("Listening... (Simulated)");
      announce("Dictation started");
  };

  return (
    <>
      <div className="sr-only" role="status" aria-live="polite">
        {announcement}
      </div>

      {/* --- FILTER OVERLAYS --- */}
      {settings.grayscale && <div className="fixed inset-0 z-[9990] pointer-events-none backdrop-grayscale-[1]" />}
      {settings.highContrast && <div className="fixed inset-0 z-[9990] pointer-events-none backdrop-contrast-[2]" />}
      {settings.invertColors && <div className="fixed inset-0 z-[9990] pointer-events-none backdrop-invert-[1]" />}

      {/* --- Reading Mask --- */}
      {settings.readingMask && (
        <div className="fixed inset-0 z-[9995] pointer-events-none hidden md:block">
           <div className="absolute left-0 right-0 bg-black/75 transition-all duration-75 ease-out" style={{ top: 0, height: Math.max(0, mouseY - 80) }} />
           <div className="absolute left-0 right-0 bg-transparent h-[160px] border-y-4 border-yellow-400 box-content" style={{ top: mouseY - 80 }} />
           <div className="absolute left-0 right-0 bg-black/75 transition-all duration-75 ease-out" style={{ top: mouseY + 80, bottom: 0 }} />
        </div>
      )}

      {/* --- Modals --- */}
      {showDictation && (
          <div className="fixed inset-0 z-[10001] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white"><Mic className="text-red-500 animate-pulse"/> Dictation</h3>
                      <button onClick={() => setShowDictation(false)}><X /></button>
                  </div>
                  <textarea 
                    className="w-full h-32 p-4 border rounded-xl bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-white mb-4" 
                    value={dictatedText} 
                    onChange={(e) => setDictatedText(e.target.value)}
                  />
                  <div className="flex gap-2">
                      <button onClick={() => { navigator.clipboard.writeText(dictatedText); setShowDictation(false); }} className="flex-1 bg-brand-600 text-white py-2 rounded-lg font-bold">Copy</button>
                      <button onClick={() => setDictatedText('')} className="px-4 border dark:border-slate-700 dark:text-white rounded-lg">Clear</button>
                  </div>
              </div>
          </div>
      )}

      {showLanguageModal && (
          <div className="fixed inset-0 z-[10001] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
               <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white"><Globe className="text-brand-600"/> Language</h3>
                      <button onClick={() => setShowLanguageModal(false)}><X /></button>
                  </div>
                  <div className="space-y-2">
                      {['English', 'Spanish', 'French', 'Swahili', 'Arabic'].map(lang => (
                          <button key={lang} onClick={() => changeLanguage(lang)} className={`w-full p-3 rounded-lg flex items-center justify-between ${currentLang === lang ? 'bg-brand-50 text-brand-700' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                              {lang} {currentLang === lang && <Check size={16} />}
                          </button>
                      ))}
                  </div>
              </div>
          </div>
      )}
      
      {showShortcutsModal && (
          <div className="fixed inset-0 z-[10001] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white"><Keyboard className="text-brand-600"/> Shortcuts</h3>
                      <button onClick={() => setShowShortcutsModal(false)}><X /></button>
                  </div>
                  <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                      <div className="flex justify-between border-b pb-2 dark:border-slate-700"><span>Navigate</span><kbd className="bg-slate-100 dark:bg-slate-800 px-2 rounded">Tab</kbd></div>
                      <div className="flex justify-between border-b pb-2 dark:border-slate-700"><span>Action</span><kbd className="bg-slate-100 dark:bg-slate-800 px-2 rounded">Enter</kbd></div>
                      <div className="flex justify-between"><span>Close</span><kbd className="bg-slate-100 dark:bg-slate-800 px-2 rounded">Esc</kbd></div>
                  </div>
              </div>
          </div>
      )}

      {/* --- Main Widget Button --- */}
      {!isOpen && (
          <button 
              ref={dragRef}
              onMouseDown={(e) => {
                  // If we haven't dragged yet, calculate initial position based on current rect
                  if (!position && dragRef.current) {
                      const rect = dragRef.current.getBoundingClientRect();
                      setPosition({ x: rect.left, y: rect.top });
                  }
                  setIsDragging(true);
              }}
              onClick={() => !isDragging && setIsOpen(true)}
              className={`fixed z-[10000] w-14 h-14 bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform ${isDragging ? 'cursor-grabbing scale-110' : 'cursor-grab hover:scale-110'} border-4 border-white dark:border-slate-800 focus:ring-4 focus:ring-brand-300 outline-none`}
              aria-label="Open Accessibility Tools"
              style={
                  position 
                  ? { left: position.x, top: position.y } // Used when dragging
                  : { bottom: '2rem', left: '2rem' }      // Default Initial Position (Increased to 2rem to avoid cut-off)
              }
          >
              <Accessibility size={28} />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
              </span>
          </button>
      )}

      {/* --- The Panel --- */}
      {isOpen && (
          <div 
            ref={panelRef}
            className="fixed z-[10000] bottom-6 left-6 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 w-[360px] max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-200"
            // Reset position if panel was opened, or keep it near button if preferred
          >
              <div className="flex justify-between items-center mb-6 border-b border-slate-100 dark:border-slate-800 pb-4 sticky top-0 bg-white dark:bg-slate-900 z-10">
                  <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-lg">
                      <Accessibility size={24} className="text-brand-600" />
                      Accessibility
                  </h3>
                  <div className="flex gap-2">
                      <button onClick={resetAll} className="p-2 text-slate-400 hover:text-brand-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Reset All" aria-label="Reset All">
                          <RefreshCcw size={18} />
                      </button>
                      <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Close Panel" aria-label="Close">
                          <X size={18} />
                      </button>
                  </div>
              </div>

              <div className="space-y-6">
                  {/* Text Size */}
                  <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Content Scaling</h4>
                      <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded-xl flex items-center justify-between border border-slate-200 dark:border-slate-700">
                          {[100, 110, 125, 150].map(scale => (
                              <button 
                                key={scale}
                                onClick={() => setTextScale(scale)} 
                                className={`p-2 rounded-lg font-bold text-sm transition-all ${settings.textScale === scale ? 'bg-white dark:bg-slate-700 shadow text-brand-600 dark:text-brand-400 scale-105' : 'text-slate-500 dark:text-slate-400'}`}
                              >
                                {scale}%
                              </button>
                          ))}
                      </div>
                  </div>

                  {/* Readability */}
                  <div>
                       <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Readability</h4>
                       <div className="grid grid-cols-2 gap-3">
                          <ToggleButton active={settings.dyslexiaFont} onClick={() => toggleSetting('dyslexiaFont')} icon={Type} label="Dyslexia Font" />
                          <ToggleButton active={settings.highlightLinks} onClick={() => toggleSetting('highlightLinks')} icon={LinkIcon} label="Highlight Links" />
                          <ToggleButton active={settings.lineHeight} onClick={() => toggleSetting('lineHeight')} icon={MoveVertical} label="Line Height" />
                          <ToggleButton active={settings.letterSpacing} onClick={() => toggleSetting('letterSpacing')} icon={MoveHorizontal} label="Letter Spacing" />
                       </div>
                  </div>

                  {/* Visuals */}
                  <div>
                       <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Visuals</h4>
                       <div className="grid grid-cols-2 gap-3">
                           <button 
                              onClick={toggleDarkMode} 
                              className={`p-3 rounded-xl border flex items-center gap-3 transition-all ${darkMode ? 'bg-slate-950 text-white border-slate-800' : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'}`}
                           >
                              <Moon size={20} /> <span className="text-sm font-medium">Dark Mode</span>
                           </button>

                           <ToggleButton active={settings.highContrast} onClick={() => {
                             toggleSetting('highContrast');
                             setSettings(p => ({...p, grayscale: false, invertColors: false}));
                           }} icon={Sun} label="High Contrast" />
                           
                           <ToggleButton active={settings.invertColors} onClick={() => {
                             toggleSetting('invertColors');
                             setSettings(p => ({...p, grayscale: false, highContrast: false}));
                           }} icon={Activity} label="Invert Colors" />
                           
                           <ToggleButton active={settings.grayscale} onClick={() => {
                             toggleSetting('grayscale');
                             setSettings(p => ({...p, invertColors: false, highContrast: false}));
                           }} icon={Moon} label="Grayscale" />
                       </div>
                  </div>

                  {/* Focus */}
                  <div>
                       <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Focus & Navigation</h4>
                       <div className="grid grid-cols-2 gap-3">
                          <ToggleButton active={settings.largeCursor} onClick={() => toggleSetting('largeCursor')} icon={MousePointer2} label="Big Cursor" />
                          <ToggleButton active={settings.readingMask} onClick={() => toggleSetting('readingMask')} icon={Eye} label="Reading Mask" />
                          <ToggleButton active={settings.pauseMotion} onClick={() => toggleSetting('pauseMotion')} icon={PauseCircle} label="Stop Motion" />
                          <button onClick={() => setShowLanguageModal(true)} className="p-3 rounded-xl border flex items-center gap-3 bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors">
                              <Languages size={20} /> <span className="text-sm font-medium">Translate</span>
                          </button>
                       </div>
                  </div>

                  {/* Tools */}
                  <div>
                       <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Assistance Tools</h4>
                       <div className="grid grid-cols-2 gap-3">
                          <ToolButton onClick={speakPage} icon={Volume2} label="Read Page" />
                          <ToolButton onClick={startDictation} icon={Mic} label="Dictation" />
                          <ToolButton onClick={() => setShowShortcutsModal(true)} icon={Keyboard} label="Shortcuts" fullWidth />
                       </div>
                  </div>
              </div>
          </div>
      )}
    </>
  );
};

// Sub-components
const ToggleButton = ({ active, onClick, icon: Icon, label }: any) => (
  <button 
    onClick={onClick} 
    className={`p-3 rounded-xl border flex items-center gap-3 transition-all ${active ? 'bg-brand-600 text-white border-brand-600 shadow-md transform scale-[1.02]' : 'bg-slate-50 hover:bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700'}`}
  >
      <Icon size={20} /> <span className="text-sm font-medium">{label}</span>
  </button>
);

const ToolButton = ({ onClick, icon: Icon, label, fullWidth }: any) => (
  <button 
    onClick={onClick} 
    className={`p-4 rounded-xl border flex flex-col items-center gap-2 bg-slate-50 hover:bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors ${fullWidth ? 'col-span-2' : ''}`}
  >
      <Icon size={24} className="text-brand-600" /> 
      <span className="text-xs font-bold">{label}</span>
  </button>
);
