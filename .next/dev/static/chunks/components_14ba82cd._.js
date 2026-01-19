(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/TextVideoHover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalVideoPlayer",
    ()=>GlobalVideoPlayer,
    "default",
    ()=>TextVideoHover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
// Global state for single video instance
let globalVideoState = {
    currentVideo: null,
    setCurrentVideo: null,
    videoRef: null,
    containerRef: null,
    position: {
        x: null,
        y: null
    },
    textColor: null,
    setTextColor: null,
    playerInstance: null
};
// Single global video player component
function GlobalVideoPlayer() {
    _s();
    const [videoSrc, setVideoSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: null,
        y: null
    });
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragOffset, setDragOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [textColor, setTextColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPlayButton, setShowPlayButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalVideoPlayer.useEffect": ()=>{
            // Set mounted state for portal
            setMounted(true);
            // Update global state
            globalVideoState.setCurrentVideo = setVideoSrc;
            globalVideoState.videoRef = videoRef;
            globalVideoState.containerRef = containerRef;
            globalVideoState.setTextColor = setTextColor;
            globalVideoState.playerInstance = true;
            // Set initial position if not set - make it responsive
            if (!position.x && !position.y && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                const isMobile = window.innerWidth <= 768;
                const containerWidth = isMobile ? Math.min(280, window.innerWidth * 0.9) : 280;
                const containerHeight = isMobile ? Math.min(210, window.innerHeight * 0.4) : 210;
                const defaultX = Math.max(10, window.innerWidth - containerWidth - 10);
                const defaultY = Math.max(10, window.innerHeight - containerHeight - 10);
                setPosition({
                    x: defaultX,
                    y: defaultY
                });
                globalVideoState.position = {
                    x: defaultX,
                    y: defaultY
                };
            }
            return ({
                "GlobalVideoPlayer.useEffect": ()=>{
                    // Clean up only if this is the last instance
                    if (globalVideoState.playerInstance) {
                        globalVideoState.setCurrentVideo = null;
                        globalVideoState.videoRef = null;
                        globalVideoState.containerRef = null;
                        globalVideoState.setTextColor = null;
                        globalVideoState.playerInstance = null;
                    }
                }
            })["GlobalVideoPlayer.useEffect"];
        }
    }["GlobalVideoPlayer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalVideoPlayer.useEffect": ()=>{
            if (videoSrc) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    }["GlobalVideoPlayer.useEffect"], [
        videoSrc
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalVideoPlayer.useEffect": ()=>{
            if (videoSrc && isVisible && videoRef.current) {
                videoRef.current.load();
                const handleCanPlay = {
                    "GlobalVideoPlayer.useEffect.handleCanPlay": ()=>{
                        if (videoRef.current) {
                            videoRef.current.play().catch({
                                "GlobalVideoPlayer.useEffect.handleCanPlay": (err)=>{
                                    console.error('Error playing video:', err);
                                }
                            }["GlobalVideoPlayer.useEffect.handleCanPlay"]);
                            setIsPlaying(true);
                        }
                    }
                }["GlobalVideoPlayer.useEffect.handleCanPlay"];
                const handlePlay = {
                    "GlobalVideoPlayer.useEffect.handlePlay": ()=>setIsPlaying(true)
                }["GlobalVideoPlayer.useEffect.handlePlay"];
                const handlePause = {
                    "GlobalVideoPlayer.useEffect.handlePause": ()=>setIsPlaying(false)
                }["GlobalVideoPlayer.useEffect.handlePause"];
                videoRef.current.addEventListener('canplay', handleCanPlay, {
                    once: true
                });
                videoRef.current.addEventListener('play', handlePlay);
                videoRef.current.addEventListener('pause', handlePause);
                return ({
                    "GlobalVideoPlayer.useEffect": ()=>{
                        if (videoRef.current) {
                            videoRef.current.removeEventListener('canplay', handleCanPlay);
                            videoRef.current.removeEventListener('play', handlePlay);
                            videoRef.current.removeEventListener('pause', handlePause);
                        }
                    }
                })["GlobalVideoPlayer.useEffect"];
            }
        }
    }["GlobalVideoPlayer.useEffect"], [
        videoSrc,
        isVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalVideoPlayer.useEffect": ()=>{
            // Sync position from global state
            if (globalVideoState.position.x !== null && globalVideoState.position.y !== null) {
                setPosition(globalVideoState.position);
            }
        }
    }["GlobalVideoPlayer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalVideoPlayer.useEffect": ()=>{
            // Keep video player within viewport bounds on resize
            const handleResize = {
                "GlobalVideoPlayer.useEffect.handleResize": ()=>{
                    if (containerRef.current && position.x !== null && position.y !== null) {
                        // Use getBoundingClientRect for accurate dimensions
                        const rect = containerRef.current.getBoundingClientRect();
                        const containerWidth = rect.width;
                        const containerHeight = rect.height;
                        const maxX = Math.max(0, window.innerWidth - containerWidth - 10);
                        const maxY = Math.max(0, window.innerHeight - containerHeight - 10);
                        const boundedX = Math.max(10, Math.min(position.x, maxX));
                        const boundedY = Math.max(10, Math.min(position.y, maxY));
                        if (boundedX !== position.x || boundedY !== position.y) {
                            setPosition({
                                x: boundedX,
                                y: boundedY
                            });
                            globalVideoState.position = {
                                x: boundedX,
                                y: boundedY
                            };
                        }
                    } else if (containerRef.current && (position.x === null || position.y === null)) {
                        // Recalculate initial position on resize if not set
                        const isMobile = window.innerWidth <= 768;
                        const containerWidth = isMobile ? Math.min(280, window.innerWidth * 0.9) : 280;
                        const containerHeight = isMobile ? Math.min(210, window.innerHeight * 0.4) : 210;
                        const defaultX = Math.max(10, window.innerWidth - containerWidth - 10);
                        const defaultY = Math.max(10, window.innerHeight - containerHeight - 10);
                        setPosition({
                            x: defaultX,
                            y: defaultY
                        });
                        globalVideoState.position = {
                            x: defaultX,
                            y: defaultY
                        };
                    }
                }
            }["GlobalVideoPlayer.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            // Also handle orientation change for mobile
            window.addEventListener('orientationchange', {
                "GlobalVideoPlayer.useEffect": ()=>{
                    setTimeout(handleResize, 100);
                }
            }["GlobalVideoPlayer.useEffect"]);
            return ({
                "GlobalVideoPlayer.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    window.removeEventListener('orientationchange', handleResize);
                }
            })["GlobalVideoPlayer.useEffect"];
        }
    }["GlobalVideoPlayer.useEffect"], [
        position
    ]);
    const handleClose = (e)=>{
        e.stopPropagation();
        setVideoSrc(null);
        setIsVisible(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        if (globalVideoState.setCurrentVideo) {
            globalVideoState.setCurrentVideo(null);
        }
    };
    const handlePlayPause = (e)=>{
        e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play().catch((err)=>{
                    console.error('Error playing video:', err);
                });
            }
        }
    };
    const handleMouseDown = (e)=>{
        // Allow dragging from anywhere on the container (except buttons and video)
        const isButton = e.target.closest('button') || e.target.closest('.play-pause-button');
        const isVideo = e.target.tagName === 'VIDEO';
        if (isButton || isVideo) return;
        setIsDragging(true);
        const rect = containerRef.current.getBoundingClientRect();
        setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };
    const handleTouchStart = (e)=>{
        const isButton = e.target.closest('button') || e.target.closest('.play-pause-button');
        const isVideo = e.target.tagName === 'VIDEO';
        if (isButton || isVideo) return;
        setIsDragging(true);
        const touch = e.touches[0];
        const rect = containerRef.current.getBoundingClientRect();
        setDragOffset({
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalVideoPlayer.useEffect": ()=>{
            if (!isDragging) return;
            const handleMouseMove = {
                "GlobalVideoPlayer.useEffect.handleMouseMove": (e)=>{
                    if (!containerRef.current) return;
                    const rect = containerRef.current.getBoundingClientRect();
                    const containerWidth = rect.width;
                    const containerHeight = rect.height;
                    const newX = e.clientX - dragOffset.x;
                    const newY = e.clientY - dragOffset.y;
                    // Keep within viewport bounds with padding
                    const maxX = Math.max(0, window.innerWidth - containerWidth - 10);
                    const maxY = Math.max(0, window.innerHeight - containerHeight - 10);
                    const boundedX = Math.max(10, Math.min(newX, maxX));
                    const boundedY = Math.max(10, Math.min(newY, maxY));
                    setPosition({
                        x: boundedX,
                        y: boundedY
                    });
                    globalVideoState.position = {
                        x: boundedX,
                        y: boundedY
                    };
                }
            }["GlobalVideoPlayer.useEffect.handleMouseMove"];
            const handleTouchMove = {
                "GlobalVideoPlayer.useEffect.handleTouchMove": (e)=>{
                    if (!containerRef.current) return;
                    e.preventDefault(); // Prevent scrolling while dragging
                    const touch = e.touches[0];
                    const rect = containerRef.current.getBoundingClientRect();
                    const containerWidth = rect.width;
                    const containerHeight = rect.height;
                    const newX = touch.clientX - dragOffset.x;
                    const newY = touch.clientY - dragOffset.y;
                    const maxX = Math.max(0, window.innerWidth - containerWidth - 10);
                    const maxY = Math.max(0, window.innerHeight - containerHeight - 10);
                    const boundedX = Math.max(10, Math.min(newX, maxX));
                    const boundedY = Math.max(10, Math.min(newY, maxY));
                    setPosition({
                        x: boundedX,
                        y: boundedY
                    });
                    globalVideoState.position = {
                        x: boundedX,
                        y: boundedY
                    };
                }
            }["GlobalVideoPlayer.useEffect.handleTouchMove"];
            const handleMouseUp = {
                "GlobalVideoPlayer.useEffect.handleMouseUp": ()=>{
                    setIsDragging(false);
                }
            }["GlobalVideoPlayer.useEffect.handleMouseUp"];
            const handleTouchEnd = {
                "GlobalVideoPlayer.useEffect.handleTouchEnd": ()=>{
                    setIsDragging(false);
                }
            }["GlobalVideoPlayer.useEffect.handleTouchEnd"];
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMove, {
                passive: false
            });
            document.addEventListener('touchend', handleTouchEnd);
            return ({
                "GlobalVideoPlayer.useEffect": ()=>{
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                    document.removeEventListener('touchmove', handleTouchMove);
                    document.removeEventListener('touchend', handleTouchEnd);
                }
            })["GlobalVideoPlayer.useEffect"];
        }
    }["GlobalVideoPlayer.useEffect"], [
        isDragging,
        dragOffset
    ]);
    const handleVideoEnd = ()=>{
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
        }
    };
    const borderColor = textColor || 'rgba(255, 255, 255, 0.8)';
    const buttonBgColor = textColor || 'rgba(0, 0, 0, 0.8)';
    const videoPlayerContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            left: position.x !== null ? `${position.x}px` : 'auto',
            top: position.y !== null ? `${position.y}px` : 'auto',
            right: position.x === null ? '10px' : 'auto',
            bottom: position.y === null ? '10px' : 'auto',
            borderColor: borderColor,
            display: isVisible ? 'flex' : 'none',
            zIndex: 2147483647
        },
        onMouseDown: handleMouseDown,
        onTouchStart: handleTouchStart,
        onMouseEnter: ()=>setShowPlayButton(true),
        onMouseLeave: ()=>setShowPlayButton(false),
        className: "jsx-46c0a41da7f0900e" + " " + "video-player-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headerRef,
                style: {
                    borderColor: borderColor
                },
                className: "jsx-46c0a41da7f0900e" + " " + "video-player-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-46c0a41da7f0900e" + " " + "video-player-title",
                        children: "Signvrse"
                    }, void 0, false, {
                        fileName: "[project]/components/TextVideoHover.js",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        style: {
                            backgroundColor: buttonBgColor,
                            borderColor: borderColor
                        },
                        "aria-label": "Close video",
                        className: "jsx-46c0a41da7f0900e" + " " + "video-close-button",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-46c0a41da7f0900e" + " " + "bi bi-x-lg"
                        }, void 0, false, {
                            fileName: "[project]/components/TextVideoHover.js",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TextVideoHover.js",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TextVideoHover.js",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-46c0a41da7f0900e" + " " + "video-wrapper",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        onEnded: handleVideoEnd,
                        muted: true,
                        playsInline: true,
                        className: "jsx-46c0a41da7f0900e" + " " + "hover-video",
                        children: [
                            videoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: videoSrc,
                                type: "video/mp4",
                                className: "jsx-46c0a41da7f0900e"
                            }, void 0, false, {
                                fileName: "[project]/components/TextVideoHover.js",
                                lineNumber: 330,
                                columnNumber: 24
                            }, this),
                            "Your browser does not support the video tag."
                        ]
                    }, videoSrc || 'placeholder', true, {
                        fileName: "[project]/components/TextVideoHover.js",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    (showPlayButton || !isPlaying) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePlayPause,
                        style: {
                            backgroundColor: buttonBgColor,
                            borderColor: borderColor
                        },
                        "aria-label": isPlaying ? 'Pause video' : 'Play video',
                        className: "jsx-46c0a41da7f0900e" + " " + "play-pause-button",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-46c0a41da7f0900e" + " " + `bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`
                        }, void 0, false, {
                            fileName: "[project]/components/TextVideoHover.js",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TextVideoHover.js",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TextVideoHover.js",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "46c0a41da7f0900e",
                children: ".video-player-container.jsx-46c0a41da7f0900e{aspect-ratio:4/3;-webkit-user-select:none;user-select:none;cursor:move;touch-action:none;background:#000;border:2px solid;border-radius:8px;flex-direction:column;width:min(280px,100vw - 20px);max-width:calc(100vw - 20px);height:auto;min-height:150px;max-height:calc(100vh - 100px);animation:.4s slideUpFadeIn;display:flex;overflow:hidden;box-shadow:0 12px 40px #0009;z-index:2147483647!important;position:fixed!important}.video-player-header.jsx-46c0a41da7f0900e{cursor:move;background:#000c;border-bottom:1px solid;flex-shrink:0;justify-content:space-between;align-items:center;padding:8px 12px;display:flex}.video-player-title.jsx-46c0a41da7f0900e{color:#fff;letter-spacing:.5px;font-size:max(10px,min(2.5vw,12px));font-weight:600}.video-close-button.jsx-46c0a41da7f0900e{color:#fff;cursor:pointer;background:#000c;border:1px solid;border-radius:4px;flex-shrink:0;justify-content:center;align-items:center;width:24px;height:24px;padding:0;font-size:14px;transition:all .2s;display:flex}.video-close-button.jsx-46c0a41da7f0900e:hover{background:#fff3;transform:scale(1.1)}.video-close-button.jsx-46c0a41da7f0900e i.jsx-46c0a41da7f0900e{font-size:12px;line-height:1}.video-wrapper.jsx-46c0a41da7f0900e{flex:1;justify-content:center;align-items:center;width:100%;min-height:0;display:flex;position:relative}.hover-video.jsx-46c0a41da7f0900e{object-fit:cover;background:#000;width:100%;height:100%}.play-pause-button.jsx-46c0a41da7f0900e{color:#fff;cursor:pointer;z-index:10;background:#000c;border:2px solid;border-radius:50%;justify-content:center;align-items:center;width:48px;height:48px;padding:0;transition:all .3s;display:flex;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:0 4px 12px #00000080}.play-pause-button.jsx-46c0a41da7f0900e:hover{background:#fff3;transform:translate(-50%,-50%)scale(1.15)}.play-pause-button.jsx-46c0a41da7f0900e i.jsx-46c0a41da7f0900e{margin-left:2px;font-size:20px}@keyframes slideUpFadeIn{0%{opacity:0;transform:translateY(20px)scale(.95)}to{opacity:1;transform:translateY(0)scale(1)}}@media (width<=768px){.video-player-container.jsx-46c0a41da7f0900e{aspect-ratio:16/12;min-height:135px;width:min(240px,100vw - 20px)!important;max-width:calc(100vw - 20px)!important;max-height:min(180px,100vh - 120px)!important}.video-player-header.jsx-46c0a41da7f0900e{padding:6px 10px}.video-player-title.jsx-46c0a41da7f0900e{font-size:11px}.video-close-button.jsx-46c0a41da7f0900e{width:22px;height:22px;font-size:12px}.play-pause-button.jsx-46c0a41da7f0900e{width:44px;height:44px}.play-pause-button.jsx-46c0a41da7f0900e i.jsx-46c0a41da7f0900e{font-size:18px}}@media (width<=480px){.video-player-container.jsx-46c0a41da7f0900e{aspect-ratio:16/12;border-radius:6px;min-height:120px;width:min(200px,100vw - 20px)!important;max-width:calc(100vw - 20px)!important;max-height:min(150px,100vh - 140px)!important}.video-player-header.jsx-46c0a41da7f0900e{padding:5px 8px}.video-player-title.jsx-46c0a41da7f0900e{font-size:10px}.video-close-button.jsx-46c0a41da7f0900e{width:20px;height:20px;font-size:11px}.play-pause-button.jsx-46c0a41da7f0900e{width:40px;height:40px}.play-pause-button.jsx-46c0a41da7f0900e i.jsx-46c0a41da7f0900e{font-size:16px}}@media (width<=360px){.video-player-container.jsx-46c0a41da7f0900e{min-height:100px;width:calc(100vw - 20px)!important;max-width:calc(100vw - 20px)!important;max-height:calc(100vh - 160px)!important}}@media (height<=600px){.video-player-container.jsx-46c0a41da7f0900e{max-height:min(180px,100vh - 100px)!important}}@media (height<=480px){.video-player-container.jsx-46c0a41da7f0900e{min-height:100px;max-height:calc(100vh - 120px)!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TextVideoHover.js",
        lineNumber: 285,
        columnNumber: 5
    }, this);
    // Render to document.body using portal to escape any stacking context
    // This ensures the video player appears above all content, including header
    if (!mounted || typeof document === 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(videoPlayerContent, document.body);
}
_s(GlobalVideoPlayer, "Uo5p4NaZzBfGtd7RkW75vjO+nMg=");
_c = GlobalVideoPlayer;
function TextVideoHover({ children, videoSrc, className = '' }) {
    _s1();
    const [showPlayButton, setShowPlayButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [textColor, setTextColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [shouldRenderPlayer, setShouldRenderPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Ensure GlobalVideoPlayer is rendered once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextVideoHover.useEffect": ()=>{
            if (globalVideoState.playerInstance === null) {
                setShouldRenderPlayer(true);
                globalVideoState.playerInstance = 'rendering'; // Mark as rendering to prevent duplicates
            }
        }
    }["TextVideoHover.useEffect"], []);
    // Detect text color on hover
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextVideoHover.useEffect": ()=>{
            if (isHovering && wrapperRef.current && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                const children = wrapperRef.current.children;
                let element = wrapperRef.current;
                if (children.length > 0) {
                    element = children[0];
                }
                const computedStyle = window.getComputedStyle(element);
                const color = computedStyle.color;
                if (color && color !== 'rgba(0, 0, 0, 0)' && color !== 'transparent') {
                    setTextColor(color);
                    if (globalVideoState.setTextColor) {
                        globalVideoState.setTextColor(color);
                    }
                }
            }
        }
    }["TextVideoHover.useEffect"], [
        isHovering
    ]);
    const handleMouseEnter = ()=>{
        setIsHovering(true);
        setShowPlayButton(true);
    };
    const handleMouseLeave = ()=>{
        setIsHovering(false);
        setShowPlayButton(false);
    // Don't close video when mouse leaves - let it keep playing
    };
    const handlePlayClick = (e)=>{
        e.stopPropagation();
        if (globalVideoState.setCurrentVideo) {
            globalVideoState.setCurrentVideo(videoSrc);
            // Also trigger play on the video if it's already loaded
            if (globalVideoState.videoRef && globalVideoState.videoRef.current) {
                globalVideoState.videoRef.current.play().catch((err)=>{
                    console.error('Error playing video:', err);
                });
            }
        }
    };
    // Convert color to rgba for better opacity control
    const getColorWithOpacity = (color, opacity)=>{
        if (!color) return null;
        const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (rgbMatch) {
            return `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${opacity})`;
        }
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
    const buttonBgColor = textColor ? getColorWithOpacity(textColor, 0.9) : 'rgba(0, 0, 0, 0.8)';
    const buttonBorderColor = textColor ? getColorWithOpacity(textColor, 0.5) : 'rgba(255, 255, 255, 0.9)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: wrapperRef,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                style: {
                    '--hover-border-color': hoverBorderColor,
                    '--hover-bg-color': hoverBgColor,
                    '--button-bg-color': buttonBgColor,
                    '--button-border-color': buttonBorderColor
                },
                className: "jsx-d97721695a1d5e73" + " " + `text-video-hover-wrapper ${className} ${isHovering ? 'hovered' : ''}`,
                children: [
                    children,
                    showPlayButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: handlePlayClick,
                        onMouseEnter: (e)=>e.stopPropagation(),
                        className: "jsx-d97721695a1d5e73" + " " + "play-button-sidebar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "jsx-d97721695a1d5e73" + " " + "bi bi-play-circle-fill"
                        }, void 0, false, {
                            fileName: "[project]/components/TextVideoHover.js",
                            lineNumber: 687,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/TextVideoHover.js",
                        lineNumber: 682,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TextVideoHover.js",
                lineNumber: 667,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "d97721695a1d5e73",
                children: ".text-video-hover-wrapper.jsx-d97721695a1d5e73{z-index:1;margin:-8px;padding:8px 40px 8px 8px;transition:all .3s;display:inline-block;position:relative}.text-video-hover-wrapper.hovered.jsx-d97721695a1d5e73{border:2px dashed var(--hover-border-color,#fffc);background:var(--hover-bg-color,#0000001a);border-radius:4px}.play-button-sidebar.jsx-d97721695a1d5e73{z-index:10;background:var(--button-bg-color,#000c);border:2px solid var(--button-border-color,#ffffffe6);cursor:pointer;border-radius:50%;justify-content:center;align-items:center;width:36px;height:36px;transition:all .3s;animation:.3s fadeInSlide;display:flex;position:absolute;top:50%;right:5px;transform:translateY(-50%);box-shadow:0 2px 8px #00000080}.play-button-sidebar.jsx-d97721695a1d5e73:hover{filter:brightness(1.2);transform:translateY(-50%)scale(1.15)}.play-button-sidebar.jsx-d97721695a1d5e73 i.jsx-d97721695a1d5e73{color:#fff;margin-left:2px;font-size:18px}@keyframes fadeInSlide{0%{opacity:0;transform:translateY(-50%)translate(10px)}to{opacity:1;transform:translateY(-50%)translate(0)}}"
            }, void 0, false, void 0, this),
            shouldRenderPlayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalVideoPlayer, {}, void 0, false, {
                fileName: "[project]/components/TextVideoHover.js",
                lineNumber: 750,
                columnNumber: 30
            }, this)
        ]
    }, void 0, true);
}
_s1(TextVideoHover, "NCFGMfe4r11Xajecw6aeSyb6oDw=");
_c1 = TextVideoHover;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "GlobalVideoPlayer");
__turbopack_context__.k.register(_c1, "TextVideoHover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TextVideoHover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TextVideoHover.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Header() {
    _s();
    const [isMobileNavActive, setIsMobileNavActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dark');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const savedTheme = localStorage.getItem('theme') || 'dark';
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }["Header.useEffect"], []);
    const toggleTheme = ()=>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };
    const toggleMobileNav = ()=>{
        setIsMobileNavActive(!isMobileNavActive);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "header",
        className: "header d-flex align-items-center fixed-top",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "logo d-flex align-items-center me-auto me-xl-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/img/SIGNVRSE LOGO COLOR.png",
                        alt: "Signvrse",
                        width: 150,
                        height: 50,
                        priority: true,
                        loading: "eager",
                        style: {
                            width: 'auto',
                            height: 'auto'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Header.js",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Header.js",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    id: "navmenu",
                    className: `navmenu ${isMobileNavActive ? 'mobile-nav-active' : ''}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TextVideoHover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                videoSrc: "/assets/img/translated/Home.mp4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#hero",
                                        className: "active",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.js",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.js",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.js",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/whoweare",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Who We Are"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 51,
                                                columnNumber: 38
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bi bi-chevron-down toggle-dropdown"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 51,
                                                columnNumber: 62
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.js",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/whoweare",
                                                    children: "About"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.js",
                                                    lineNumber: 53,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/whoweare",
                                                    children: "Team"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.js",
                                                    lineNumber: 54,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/whoweare",
                                                    children: "Advisory Board"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.js",
                                                    lineNumber: 55,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.js",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.js",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/whatwedo",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "What We Do"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 60,
                                                columnNumber: 38
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bi bi-chevron-down toggle-dropdown"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 60,
                                                columnNumber: 62
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.js",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/whatwedo",
                                                    children: "Track Record"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.js",
                                                    lineNumber: 62,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/whatwedo",
                                                    children: "Solutions"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.js",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/whatwedo",
                                                    children: "Pricing"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.js",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.js",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.js",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/case-studies",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Case Studies"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 69,
                                                columnNumber: 42
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bi bi-chevron-down toggle-dropdown"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 69,
                                                columnNumber: 68
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.js",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/case-studies",
                                                    children: "Projects"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.js",
                                                    lineNumber: 71,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/case-studies",
                                                    children: "Client Stories"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.js",
                                                    lineNumber: 72,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.js",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.js",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/partnerships",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Partnerships"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 77,
                                                columnNumber: 42
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "bi bi-chevron-down toggle-dropdown"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 77,
                                                columnNumber: 68
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.js",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/partnerships",
                                                    children: "How to Partner"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.js",
                                                    lineNumber: 79,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/partnerships",
                                                    children: "Current Partners"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.js",
                                                    lineNumber: 80,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.js",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.js",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.js",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#contact",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.js",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.js",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.js",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Header.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "btn-getstarted",
                    href: "https://calendly.com/signvrse/30min",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Book a Demo"
                }, void 0, false, {
                    fileName: "[project]/components/Header.js",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: `mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`,
                    onClick: toggleMobileNav
                }, void 0, false, {
                    fileName: "[project]/components/Header.js",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleTheme,
                    className: "theme-toggle",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: `bi ${theme === 'light' ? 'bi-moon' : 'bi-sun'}`
                    }, void 0, false, {
                        fileName: "[project]/components/Header.js",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Header.js",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.js",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Header.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Header, "pPvGl23s8QKyMBkIZuhhpcj4whc=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_14ba82cd._.js.map