"use client";

import { useState } from "react";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";

// Custom SVG Instagram Icon since lucide removed brand icons
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

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission to form handler (e.g. Formspree/Netlify Forms)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success banner after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="brand-blob w-[500px] h-[500px] bg-accent/5 -bottom-20 -right-20 opacity-15"></div>
      <div className="brand-blob w-[400px] h-[400px] bg-primary/10 -top-20 -left-20 opacity-15"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Action Links */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div className="flex flex-col gap-4">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full self-start">
                Let's Connect
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-primary-dark tracking-tight">
                Ready to Grow Your Brand?
              </h2>
              <p className="font-sans text-base text-foreground/75 leading-relaxed">
                Connect with our team to explore tailored digital marketing campaigns, setup optimizations, and monthly scaling growth frameworks.
              </p>
            </div>

            {/* Direct Contact Action Chips */}
            <div className="flex flex-col gap-4 font-sans mt-4">
              <a
                href="tel:+916262949423"
                className="flex items-center gap-4 bg-surface hover:bg-primary/5 border border-primary/15 hover:border-primary/30 p-4 rounded-[20px] shadow-sm transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-foreground/50 font-bold uppercase tracking-wider">Call Our Office</span>
                  <span className="text-base font-extrabold text-primary-dark">+91 6262 9494 23</span>
                </div>
              </a>

              <a
                href="mailto:hello@alvisionmedia.com"
                className="flex items-center gap-4 bg-surface hover:bg-primary/5 border border-primary/15 hover:border-primary/30 p-4 rounded-[20px] shadow-sm transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-foreground/50 font-bold uppercase tracking-wider">Send Email Inquiry</span>
                  <span className="text-base font-extrabold text-primary-dark">hello@alvisionmedia.com</span>
                </div>
              </a>

              <a
                href="https://instagram.com/alvisionmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-surface hover:bg-primary/5 border border-primary/15 hover:border-primary/30 p-4 rounded-[20px] shadow-sm transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-foreground/50 font-bold uppercase tracking-wider">Follow Socials</span>
                  <span className="text-base font-extrabold text-primary-dark">@alvisionmedia.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-surface p-8 sm:p-10 rounded-[32px] shadow-xl border border-primary/5 relative">
            <h3 className="font-display font-extrabold text-2xl text-primary-dark mb-6">
              Write Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-name" className="font-sans text-xs font-bold uppercase tracking-wider text-primary-dark/70">
                  Full Name
                </label>
                <input
                  type="text"
                  id="form-name"
                  required
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-[16px] bg-background border border-primary/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all text-foreground"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-email" className="font-sans text-xs font-bold uppercase tracking-wider text-primary-dark/70">
                  Email Address
                </label>
                <input
                  type="email"
                  id="form-email"
                  required
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-[16px] bg-background border border-primary/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all text-foreground"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-message" className="font-sans text-xs font-bold uppercase tracking-wider text-primary-dark/70">
                  Your Message
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={5}
                  placeholder="Tell us about your brand goals and current projects..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-[16px] bg-background border border-primary/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all text-foreground resize-none"
                />
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto self-start mt-2 px-8 py-3.5 rounded-full font-sans text-sm font-bold bg-primary text-white hover:bg-primary-dark disabled:opacity-75 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Success Notification Banner */}
              {isSubmitted && (
                <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-[16px] animate-fade-in mt-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-sans text-xs font-bold">Success!</span>
                    <span className="font-sans text-xs text-emerald-700">Thank you for your message. Our marketing team will connect with you soon.</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
