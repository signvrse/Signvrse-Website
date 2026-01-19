import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Play, Pause } from 'lucide-react';

// --- GLOBAL STATE ---
let globalVideoState: {
  currentVideo: string | null;
  setCurrentVideo: ((src: string | null) => void) | null;
  videoRef: React.RefObject<HTMLVideoElement> | null;
  containerRef: React.RefObject<HTMLDivElement> | null;
  position: { x: number | null; y: number | null };
  dimensions: { width: number; height: number } | null;
  textColor: string | null;
  setTextColor: ((color: string | null) => void) | null;
  playerInstance: boolean | string | null;
} = {
  currentVideo: null,
  setCurrentVideo: null,
  videoRef: null,
  containerRef: null,
  position: { x: null, y: null },
  dimensions: null,
  textColor: null,
  setTextColor: null,
  playerInstance: null,
};

// --- GLOBAL VIDEO PLAYER COMPONENT (UPDATED) ---
function GlobalVideoPlayer() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Position & Size
  const [position, setPosition] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const [dimensions, setDimensions] = useState({ width: 400, height: 360 });
  
  // Interaction
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, w: 0, h: 0 });
  
  const [textColor, setTextColor] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // New State for Theme Detection
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Theme Detection Effect
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = () => {
      setIsDarkMode(mediaQuery.matches);
    };

    updateTheme(); // Set initial state
    mediaQuery.addListener(updateTheme); // Listen for changes

    return () => mediaQuery.removeListener(updateTheme);
  }, []);

  useEffect(() => {
    setMounted(true);
    globalVideoState.setCurrentVideo = setVideoSrc;
    globalVideoState.videoRef = videoRef;
    globalVideoState.containerRef = containerRef;
    globalVideoState.setTextColor = setTextColor;
    globalVideoState.playerInstance = true;
    
    // Initialize Position & Size (omitted for brevity, assume logic remains)
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth <= 768;
      
      if (globalVideoState.dimensions) {
        setDimensions(globalVideoState.dimensions);
      } else {
        const defaultWidth = isMobile ? Math.min(320, window.innerWidth * 0.9) : 400;
        const defaultHeight = defaultWidth * 0.75;
        const newDims = { width: defaultWidth, height: defaultHeight };
        setDimensions(newDims);
        globalVideoState.dimensions = newDims;
      }

      if (!globalVideoState.position.x && !globalVideoState.position.y) {
        const defaultWidth = globalVideoState.dimensions?.width || (isMobile ? 320 : 400);
        const defaultHeight = globalVideoState.dimensions?.height || (isMobile ? 240 : 360);
        const defaultX = Math.max(10, window.innerWidth - defaultWidth - 20);
        const defaultY = Math.max(10, window.innerHeight - defaultHeight - 20);
        setPosition({ x: defaultX, y: defaultY });
        globalVideoState.position = { x: defaultX, y: defaultY };
      } else {
        setPosition(globalVideoState.position);
      }
    }
    
    return () => {
      if (globalVideoState.playerInstance) {
        globalVideoState.setCurrentVideo = null;
        globalVideoState.videoRef = null;
        globalVideoState.containerRef = null;
        globalVideoState.setTextColor = null;
        globalVideoState.playerInstance = null;
      }
    };
  }, []);

  useEffect(() => {
    setIsVisible(!!videoSrc);
  }, [videoSrc]);

  useEffect(() => {
    if (videoSrc && isVisible && videoRef.current) {
      videoRef.current.load();
      const handleCanPlay = () => {
        videoRef.current?.play().catch(err => console.error('Error playing:', err));
        setIsPlaying(true);
      };
      
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      
      videoRef.current.addEventListener('canplay', handleCanPlay, { once: true });
      videoRef.current.addEventListener('play', handlePlay);
      videoRef.current.addEventListener('pause', handlePause);
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('canplay', handleCanPlay);
          videoRef.current.removeEventListener('play', handlePlay);
          videoRef.current.removeEventListener('pause', handlePause);
        }
      };
    }
  }, [videoSrc, isVisible]);

  // --- HANDLERS (omitted for brevity, no changes) ---

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setVideoSrc(null);
    setIsVisible(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoEnd = () => {
    handleClose();
  };

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play().catch(console.error);
    }
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('.resize-handle') || target.closest('.play-pause-button')) return;

    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({ x: clientX - rect.left, y: clientY - rect.top });
    }
  };

  const handleResizeStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsResizing(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setResizeStart({ x: clientX, y: clientY, w: dimensions.width, h: dimensions.height });
  };

  useEffect(() => {
    // Drag/Resize logic remains the same (omitted for brevity)
    if (!isDragging && !isResizing) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

      if (isDragging && containerRef.current) {
        const newX = clientX - dragOffset.x;
        const newY = clientY - dragOffset.y;
        const maxX = window.innerWidth - dimensions.width;
        const maxY = window.innerHeight - dimensions.height;
        const boundedX = Math.max(0, Math.min(newX, maxX));
        const boundedY = Math.max(0, Math.min(newY, maxY));
        
        setPosition({ x: boundedX, y: boundedY });
        globalVideoState.position = { x: boundedX, y: boundedY };
      }

      if (isResizing) {
        const deltaX = clientX - resizeStart.x;
        const deltaY = clientY - resizeStart.y;
        const newWidth = Math.max(200, resizeStart.w + deltaX);
        const newHeight = Math.max(150, resizeStart.h + deltaY);
        const maxWidth = window.innerWidth - (position.x || 0) - 10;
        const maxHeight = window.innerHeight - (position.y || 0) - 10;
        const finalWidth = Math.min(newWidth, maxWidth);
        const finalHeight = Math.min(newHeight, maxHeight);
        
        const newDims = { width: finalWidth, height: finalHeight };
        setDimensions(newDims);
        globalVideoState.dimensions = newDims;
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, isResizing, dragOffset, resizeStart, dimensions, position]);


  // Dynamic Color Variables
  const defaultBorderColor = 'rgba(255, 255, 255, 0.8)';
  
  const playerBgColor = isDarkMode ? '#2c2c2c' : 'black'; // Dark Mode Background Change
  const playerHeaderBgColor = isDarkMode ? 'rgba(44, 44, 44, 0.8)' : 'rgba(0, 0, 0, 0.8)';
  const playerBorderColor = textColor || (isDarkMode ? '#555555' : defaultBorderColor); // Slightly dimmer border in dark mode
  const buttonBgColor = textColor || (isDarkMode ? 'rgba(44, 44, 44, 0.8)' : 'rgba(0, 0, 0, 0.8)');


  const videoPlayerContent = (
    <div 
      ref={containerRef}
      className="fixed z-[2147483647] rounded-lg border-2 shadow-2xl flex flex-col select-none animate-[slideUpFadeIn_0.4s_ease] overflow-hidden"
      style={{
        left: position.x !== null ? `${position.x}px` : 'auto',
        top: position.y !== null ? `${position.y}px` : 'auto',
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        // Apply dynamic background color
        backgroundColor: playerBgColor,
        borderColor: playerBorderColor,
        display: isVisible ? 'flex' : 'none',
        cursor: isDragging ? 'grabbing' : 'auto',
      }}
      onMouseEnter={() => setShowPlayButton(true)}
      onMouseLeave={() => setShowPlayButton(false)}
    >
      <div 
        className="flex justify-between items-center px-3 py-2 border-b flex-shrink-0 cursor-grab active:cursor-grabbing touch-none text-white"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        style={{ 
          // Apply dynamic header background color
          backgroundColor: playerHeaderBgColor, 
          borderColor: playerBorderColor 
        }}
      >
        <div className="text-[10px] sm:text-xs font-semibold tracking-wide select-none">Signvrse</div>
        <button 
          className="border rounded text-white text-xs w-6 h-6 flex items-center justify-center cursor-pointer transition-all hover:bg-white/20 hover:scale-110 p-0 flex-shrink-0"
          onClick={handleClose}
          style={{ 
            backgroundColor: buttonBgColor, 
            borderColor: playerBorderColor 
          }}
        >
          <X size={12} />
        </button>
      </div>

      <div className="relative w-full flex-1 min-h-0 flex items-center justify-center bg-black">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover pointer-events-none"
          onEnded={handleVideoEnd}
          muted
          playsInline
          key={videoSrc || 'placeholder'}
        >
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>
        
        <div 
          className="absolute inset-0 z-0 touch-none"
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        />
        
        {(showPlayButton || !isPlaying) && (
          <button
            className="play-pause-button absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 text-white flex items-center justify-center cursor-pointer transition-all hover:scale-110 z-10 shadow-lg p-0"
            onClick={handlePlayPause}
            style={{ 
              backgroundColor: buttonBgColor, 
              borderColor: playerBorderColor 
            }}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
          </button>
        )}

        <div 
            className="resize-handle absolute bottom-0 right-0 w-6 h-6 z-20 cursor-nwse-resize flex items-center justify-center active:scale-110 touch-none"
            onMouseDown={handleResizeStart}
            onTouchStart={handleResizeStart}
        >
             <div className="w-0 h-0 border-style-solid border-r-[10px] border-b-[10px] border-l-[10px] border-t-[10px] border-r-white/50 border-b-white/50 border-l-transparent border-t-transparent absolute bottom-[2px] right-[2px]"></div>
        </div>
      </div>
      <style>{`
        @keyframes slideUpFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );

  if (!mounted || typeof document === 'undefined') return null;
  return createPortal(videoPlayerContent, document.body);
}

// --- TEXT VIDEO HOVER COMPONENT (No Change) ---
interface TextVideoHoverProps {
  children: React.ReactNode;
  videoSrc: string;
  className?: string;
}

export default function TextVideoHover({ children, videoSrc, className = '' }: TextVideoHoverProps) {
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [textColor, setTextColor] = useState<string | null>(null);
  const [shouldRenderPlayer, setShouldRenderPlayer] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (globalVideoState.playerInstance === null) {
      setShouldRenderPlayer(true);
      globalVideoState.playerInstance = 'rendering';
    }
  }, []);

  useEffect(() => {
    if (isHovering && wrapperRef.current && typeof window !== 'undefined') {
      const children = wrapperRef.current.children;
      let element: HTMLElement = wrapperRef.current;
      if (children.length > 0) element = children[0] as HTMLElement;
      
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      if (color && color !== 'rgba(0, 0, 0, 0)' && color !== 'transparent') {
        setTextColor(color);
        if (globalVideoState.setTextColor) globalVideoState.setTextColor(color);
      }
    }
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowPlayButton(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setShowPlayButton(false);
  };

  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (globalVideoState.setCurrentVideo) {
      globalVideoState.setCurrentVideo(videoSrc);
      if (globalVideoState.videoRef && globalVideoState.videoRef.current) {
        globalVideoState.videoRef.current.play().catch(err => {
          console.error('Error playing video:', err);
        });
      }
    }
  };

  const getColorWithOpacity = (color: string | null, opacity: number): string | null => {
    if (!color) return null;
    const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (rgbMatch) return `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${opacity})`;
    const hexMatch = color.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/);
    if (hexMatch) {
      const hex = hexMatch[1];
      const r = hex.length === 3 ? parseInt(hex[0] + hex[0], 16) : parseInt(hex.substring(0, 2), 16);
      const g = hex.length === 3 ? parseInt(hex[1] + hex[1], 16) : parseInt(hex.substring(2, 4), 16);
      const b = hex.length === 3 ? parseInt(hex[2] + hex[2], 16) : parseInt(hex.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return color;
  };

  const hoverBorderColor = textColor ? getColorWithOpacity(textColor, 0.6) : 'rgba(255, 255, 255, 0.8)';
  const hoverBgColor = textColor ? getColorWithOpacity(textColor, 0.1) : 'rgba(0, 0, 0, 0.1)';
  const buttonBgColorHover = textColor ? getColorWithOpacity(textColor, 0.9) : 'rgba(0, 0, 0, 0.8)';
  const buttonBorderColor = textColor ? getColorWithOpacity(textColor, 0.5) : 'rgba(255, 255, 255, 0.9)';

  return (
    <>
      <span 
        ref={wrapperRef}
        className={`relative inline-block cursor-pointer ${isHovering ? 'border-2 border-dashed rounded' : ''} ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleWrapperClick}
        style={{
          borderColor: isHovering ? hoverBorderColor : 'transparent',
          backgroundColor: isHovering ? hoverBgColor : 'transparent',
          padding: 0,
          margin: 0,
          verticalAlign: 'baseline',
        }}
      >
        {children}
        
        {showPlayButton && (
          <span 
            className="absolute right-[-45px] top-1/2 -translate-y-1/2 w-9 h-9 z-10 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all hover:brightness-110 hover:scale-110 shadow-lg animate-[fadeInSlide_0.3s_ease] pointer-events-auto"
            onClick={handleWrapperClick}
            onMouseEnter={(e) => e.stopPropagation()}
            style={{
              backgroundColor: buttonBgColorHover || 'rgba(0, 0, 0, 0.8)',
              
            }}
          >
            <Play size={18} className="text-white ml-0.5" />
          </span>
        )}
      </span>

      <style>{`
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(-50%) translateX(10px); }
          to { opacity: 1; transform: translateY(-50%) translateX(0); }
        }
      `}</style>

      {shouldRenderPlayer && <GlobalVideoPlayer />}
    </>
  );
}

export { GlobalVideoPlayer };
