"use client";

import Image from "next/image";

export default function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative py-24 overflow-hidden flex items-center bg-background">
      {/* Dynamic Background Blobs for Visual Interest */}
      <div className="brand-blob w-[500px] h-[500px] bg-primary -top-40 -left-40 opacity-10"></div>
      <div className="brand-blob w-[400px] h-[400px] bg-accent -bottom-20 -right-20 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-dark font-sans text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Your Trusted Agency Partner
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-primary-dark tracking-tight">
            Connecting Brands To A <br className="hidden sm:inline" />
            <span className="text-accent">World Of Online</span> <br />
            Possibilities
          </h1>

          {/* Subhead */}
          <p className="font-sans text-lg text-foreground/80 max-w-xl leading-relaxed">
            Explore the digital realm effortlessly with our reliable marketing solutions. We deliver customized growth frameworks to scale your conversions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
            <button
              onClick={handleScrollToContact}
              className="px-8 py-4 rounded-full font-sans text-base font-bold bg-primary text-white hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Let's Build Brands
            </button>
            <a
              href="#our-work"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("our-work");
                if (element) {
                  window.scrollTo({
                    top: element.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: "smooth"
                  });
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-sans text-base font-bold bg-white text-primary border-2 border-primary hover:bg-primary/5 transition-all duration-300 focus:outline-none"
            >
              Explore Our Work
            </a>
          </div>

          {/* Secondary Tagline Near Logo/CTA */}
          <div className="flex items-center gap-4 border-t border-primary/10 pt-6 mt-4 w-full">
            <div className="relative w-18 h-12 flex-shrink-0">
              <Image src="/logo.png" alt="Alvision Logo" fill className="object-contain" sizes="72px" />
            </div>
            <p className="font-sans text-xs font-semibold text-primary-dark uppercase tracking-wider">
              "Unlocking the Power of Growth and Success"
            </p>
          </div>
        </div>

        {/* Right Dashboard Column (Pure CSS / SVG UI element instead of AI image) */}
        <div className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square flex justify-center">
          <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-slate-900 p-6 text-white flex flex-col justify-between shadow-2xl border-4 border-white transition-all duration-500 hover:scale-[1.02]">
            {/* Glassy gradients */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/15 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-xl pointer-events-none"></div>
            
            {/* Header window control bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-[10px] font-sans font-semibold text-white/50 tracking-wider">
                hospital_campaigns_tracker.exe
              </span>
              <div className="w-3 h-3"></div>
            </div>

            {/* Top Stats Overview */}
            <div className="relative z-10 mt-4 flex items-start justify-between">
              <div className="flex flex-col">
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-none">Total Inquiries</span>
                <span className="text-3xl font-black tracking-tight text-white mt-1">1,428</span>
              </div>
              <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2.5 py-1 rounded-full border border-emerald-500/10">
                +24.8% MoM
              </span>
            </div>

            {/* SVG Line Chart representing growth */}
            <div className="relative z-10 my-4 flex-1 flex flex-col justify-end min-h-[140px]">
              <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 100">
                <defs>
                  <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#E24A6B" stop-opacity="0.4" />
                    <stop offset="100%" stop-color="#E24A6B" stop-opacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Grid Lines */}
                <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="3,3" />
                <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.05)" strokeDasharray="3,3" />
                
                {/* Area under the line */}
                <path d="M 0 100 L 0 80 Q 50 70 100 45 T 200 55 T 300 10 L 300 100 Z" fill="url(#chartGrad)" />
                
                {/* Spline Path */}
                <path d="M 0 80 Q 50 70 100 45 T 200 55 T 300 10" fill="none" stroke="#E24A6B" strokeWidth="3" strokeLinecap="round" />
                
                {/* Peak Indicator point */}
                <circle cx="300" cy="10" r="5" fill="#E24A6B" />
                <circle cx="300" cy="10" r="10" fill="none" stroke="#E24A6B" strokeWidth="2" className="animate-ping" />
              </svg>
              
              {/* Chart labels */}
              <div className="flex justify-between text-[9px] font-sans text-white/40 mt-2 px-1">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4 (Peak)</span>
              </div>
            </div>

            {/* Bottom Channels List */}
            <div className="relative z-10 border-t border-white/10 pt-4 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-[11px] font-sans">
                <span className="text-white/60 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Patient Education (Reels)
                </span>
                <span className="font-bold text-white">92% Reach</span>
              </div>
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[92%] rounded-full"></div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-sans">
                <span className="text-white/60 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Local Booking Campaign
                </span>
                <span className="font-bold text-white">85% Conversions</span>
              </div>
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div className="bg-accent h-full w-[85%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
