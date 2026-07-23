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
            <div className="relative w-28 h-16 flex-shrink-0">
              <Image src="/logo.png" alt="Alvision Logo" fill className="object-contain" sizes="112px" />
            </div>
            <p className="font-sans text-xs font-semibold text-primary-dark uppercase tracking-wider">
              "Unlocking the Power of Growth and Success"
            </p>
          </div>
        </div>

        {/* Right Dashboard Image Column */}
        <div className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square flex justify-center">
          <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-slate-900 shadow-2xl border-4 border-white transition-all duration-500 hover:scale-[1.02] group">
            <Image
              src="/insights and analytics dashboard.png"
              alt="Insights and Analytics Dashboard"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
