"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { portfolioItems, PortfolioItem } from "../../data/portfolio";
import { Play, Pause, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

// Individual Card Component to manage its own IntersectionObserver
function PortfolioCard({
  item,
  onOpenLightbox,
}: {
  item: PortfolioItem;
  onOpenLightbox: (item: PortfolioItem) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    setIsVideoReady(false);
  }, [item.videoSrc]);

  useEffect(() => {
    // Check for user reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    if (mediaQuery.matches) {
      return () => mediaQuery.removeEventListener("change", handleMotionChange);
    }

    // IntersectionObserver to auto-play/pause when in/out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPlaying(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of card is visible
      }
    );

    const currentRef = videoRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || videoError || !videoRef.current) return;

    if (isPlaying) {
      videoRef.current.play().catch(() => {
        // Handle auto-play abort or interruption
        setIsPlaying(false);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, prefersReducedMotion, videoError]);

  return (
    <div
      onClick={() => onOpenLightbox(item)}
      className="group relative aspect-[3/4] w-full max-w-[400px] mx-auto sm:mx-0 sm:w-[48vw] md:w-[35vw] lg:w-[28vw] sm:max-w-[360px] sm:flex-shrink-0 sm:snap-start rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black shadow-lg border border-primary/5 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer transform-gpu"
    >
      {/* Video / Poster Canvas */}
      <div className="absolute inset-0 w-full h-full bg-black">
        {!videoError && !prefersReducedMotion ? (
          <>
            <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
              {item.poster ? (
                <Image
                  src={item.poster}
                  alt={`${item.clientName} project showcase`}
                  fill
                  quality={90}
                  className={`object-cover object-center transition-opacity duration-300 ${isVideoReady ? "opacity-0" : "opacity-100"}`}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-tr from-primary/30 to-primary-dark/30 flex flex-col items-center justify-center p-6 text-center" />
              )}
            </div>
            <video
              ref={videoRef}
              src={item.videoSrc}
              poster={item.poster || undefined}
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={() => setIsVideoReady(true)}
              onCanPlay={() => setIsVideoReady(true)}
              onError={() => setVideoError(true)}
              className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
                item.aspectRatio === "landscape" ? "object-cover object-center" : "object-cover object-center"
              } ${isVideoReady ? "opacity-100" : "opacity-0"}`}
              style={{ willChange: "transform", transform: "translateZ(0)" }}
            />
          </>
        ) : (
          /* Fallback Canvas when reduced motion or video fails */
          <div className="relative w-full h-full overflow-hidden bg-black">
            {item.poster ? (
              <Image
                src={item.poster}
                alt={`${item.clientName} project showcase`}
                fill
                quality={90}
                className="object-cover object-center"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-tr from-primary/30 to-primary-dark/30 flex flex-col items-center justify-center p-6 text-center">
                <Play className="w-12 h-12 text-primary opacity-60 mb-2" />
                <span className="font-display font-black text-sm text-primary-dark">{item.clientName}</span>
              </div>
            )}
            {/* Visual indicator for error/fallback */}
            {videoError && (
              <div className="absolute top-4 right-4 bg-primary-dark/80 text-white/90 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                Playback Error
              </div>
            )}
          </div>
        )}
      </div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95 pointer-events-none" />

      {/* Play/Pause Micro-indicator */}
      {!prefersReducedMotion && !videoError && (
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white" />}
        </div>
      )}

      {/* Detail Overlay Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col items-start gap-3 text-white pointer-events-none">
        <span className="font-sans text-[11px] font-bold bg-accent text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
          {item.category}
        </span>
        
        <div className="flex flex-col gap-1 w-full">
          <h3 className="font-display font-black text-xl sm:text-2xl leading-none flex items-center justify-between">
            {item.clientName}
            <Maximize2 className="w-4 h-4 text-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5" />
          </h3>
          <p className="font-sans text-xs text-white/85 line-clamp-2 mt-1 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  const handleOpenLightbox = (item: PortfolioItem) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  };

  const handleCloseLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = "unset";
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.75; // scroll 75% of viewport width
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="our-work" className="pt-32 pb-24 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="brand-blob w-[500px] h-[500px] bg-primary -top-20 -left-20 opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-primary-dark tracking-tight">
              Our Work In Action
            </h2>
            <p className="font-sans text-base text-foreground/77 max-w-xl">
              A look at the campaigns, content, and builds we've shipped for our clients.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex items-center justify-center p-3 rounded-full border border-primary/20 bg-surface hover:bg-primary/5 text-primary-dark shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex items-center justify-center p-3 rounded-full border border-primary/20 bg-surface hover:bg-primary/5 text-primary-dark shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Portfolio Carousel Scroll Area */}
        <div
          ref={scrollContainerRef}
          className="flex flex-col sm:flex-row sm:overflow-x-auto sm:snap-x sm:snap-mandatory gap-6 pb-8 px-0 sm:px-6 sm:-mx-6 scrollbar-none scroll-smooth"
        >
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.slug}
              item={item}
              onOpenLightbox={handleOpenLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      {selectedItem && (
        <div
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
        >
          {/* Lightbox Card container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-surface rounded-[32px] overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors focus:outline-none backdrop-blur-sm"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video / Visual Column */}
            <div className="md:w-3/5 min-h-[300px] md:min-h-[480px] relative bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={lightboxVideoRef}
                src={selectedItem.videoSrc}
                poster={selectedItem.poster || undefined}
                controls
                autoPlay
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-contain max-h-[75vh]"
                style={{ willChange: "transform", transform: "translateZ(0)" }}
              />
            </div>

            {/* Copy Details Column */}
            <div className="md:w-2/5 p-8 flex flex-col justify-between gap-6 bg-surface">
              <div className="flex flex-col gap-4">
                <span className="font-sans text-xs font-bold bg-accent text-white px-3 py-1 rounded-full uppercase tracking-wider self-start">
                  {selectedItem.category}
                </span>
                
                <h3 className="font-display font-black text-2xl text-primary-dark">
                  {selectedItem.clientName}
                </h3>
                
                <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="border-t border-primary/10 pt-4 mt-2">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-primary mb-2">
                    Scope of Campaign
                  </h4>
                  <p className="font-sans text-xs text-foreground/60 leading-relaxed">
                    Designed and deployed as a conversion-optimized strategy under the {selectedItem.category} workflow, utilizing custom media and target metrics.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    handleCloseLightbox();
                    const contact = document.getElementById("contact");
                    if (contact) {
                      contact.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full py-3 rounded-full font-sans text-sm font-bold bg-primary text-white hover:bg-primary-dark transition-all duration-300 shadow-md text-center"
                >
                  Request Similar Campaign
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
