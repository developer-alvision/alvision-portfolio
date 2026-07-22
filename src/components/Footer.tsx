"use client";

import Image from "next/image";
import { Mail, Phone, ArrowUp } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "Hospital Growth", id: "services" },
    { name: "Our Work", id: "our-work" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    <footer className="bg-primary-dark text-white border-t border-primary/20 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="brand-blob w-80 h-80 bg-accent -bottom-20 -left-20 opacity-10"></div>
      <div className="brand-blob w-80 h-80 bg-primary -top-20 -right-20 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <div className="relative w-44 h-14">
              <Image
                src="/logo.png"
                alt="Alvision Media Logo"
                fill
                className="object-contain brightness-0 invert"
                sizes="176px"
              />
            </div>
            <p className="font-sans text-white/80 max-w-sm mt-2 text-sm leading-relaxed">
              "Digital Brilliance Delivered" — Empowering businesses to thrive and succeed through strategic marketing insights and personalized solutions.
            </p>
            <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Your Trusted Agency Partner
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-lg text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="font-sans text-sm text-white/70 hover:text-white hover:underline transition-colors focus:outline-none"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-lg text-white">Get in Touch</h4>
            <div className="flex flex-col gap-3 font-sans text-sm text-white/70">
              <a
                href="tel:+916262949423"
                className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 6262 9494 23</span>
              </a>
              <a
                href="mailto:hello@alvisionmedia.com"
                className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@alvisionmedia.com</span>
              </a>
              {/* Linked handle as specified in brochure */}
              <a
                href="https://instagram.com/alvisionmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none"
              >
                <InstagramIcon className="w-4 h-4 text-primary" />
                <span>@alvisionmedia.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-sans text-xs text-white/50 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Alvision Media. All rights reserved. Built with digital brilliance.
          </p>
          
          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-md group"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 text-white transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
