import Image from "next/image";
import { Quote } from "lucide-react";

export default function Mission() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="brand-blob w-[450px] h-[450px] bg-primary -bottom-32 -left-32 opacity-10"></div>
      <div className="brand-blob w-[450px] h-[450px] bg-accent -top-32 -right-32 opacity-5"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-8">
        
        {/* Mission Icon Badge */}
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-dark">
          <Quote className="w-8 h-8 fill-primary/10" />
        </div>

        <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary-dark/60 bg-primary/5 px-4 py-1.5 rounded-full">
          Our Core Mission
        </span>

        {/* Large Quote Display */}
        <blockquote className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.3] text-primary-dark max-w-4xl italic tracking-tight">
          "Empowering hospitals and medical clinics to thrive, build trust, and succeed through strategic social marketing insights and personalized patient acquisition solutions."
        </blockquote>

        {/* Logo Mark Signature */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <div className="relative w-28 h-8 opacity-75">
            <Image src="/logo.png" alt="Alvision Media Logo" fill className="object-contain" sizes="112px" />
          </div>
          <cite className="not-italic font-sans text-xs font-bold text-primary-dark/50 uppercase tracking-widest">
            Alvision Media Group
          </cite>
        </div>
      </div>
    </section>
  );
}
