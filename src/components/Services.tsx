"use client";

import { useState } from "react";
import { services, Service } from "../../data/services";
import * as Icons from "lucide-react";
import { X, Check } from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState<"setup" | "growth" | "included" | "beforeAfter">("setup");

  // Dynamic Lucide Icon Resolver
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />;
    }
    return <Icons.HelpCircle className="w-8 h-8 text-primary" />;
  };

  const handleOpenModal = (service: Service) => {
    if (service.details) {
      setSelectedService(service);
      setActiveTab("setup");
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";
    }
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="brand-blob w-96 h-96 bg-primary top-10 -right-20 opacity-10"></div>
      <div className="brand-blob w-96 h-96 bg-accent bottom-10 -left-20 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Hospital Growth Framework
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-primary-dark tracking-tight">
            Hospital Social Media Marketing & Analytics
          </h2>
          <p className="font-sans text-base text-foreground/70 max-w-2xl">
            Discover how local medical clinics and hospitals build community trust, educate patients, and scale appointments using compliance-safe social media campaigns.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const hasDetails = !!service.details;
            return (
              <div
                key={service.id}
                onClick={() => hasDetails && handleOpenModal(service)}
                className={`group bg-surface p-6 rounded-[24px] shadow-md border border-primary/5 transition-all duration-300 flex flex-col items-start justify-between min-h-[220px] ${
                  hasDetails
                    ? "cursor-pointer hover:shadow-xl hover:scale-[1.03] hover:border-primary/20"
                    : "opacity-80 cursor-default"
                }`}
              >
                {/* Icon Wrapper */}
                <div className="flex flex-col gap-4 w-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center transition-all duration-300 group-hover:bg-accent/10 group-hover:border-accent/20">
                    {getIcon(service.iconName)}
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display font-black text-lg text-primary-dark group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    {service.slogan && (
                      <p className="font-sans text-xs text-foreground/60 leading-relaxed line-clamp-3">
                        {service.slogan}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer Indicator */}
                {hasDetails ? (
                  <span className="font-sans text-xs font-bold text-primary group-hover:text-accent flex items-center gap-1 mt-4 transition-all duration-300">
                    View Framework
                    <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                ) : (
                  <span className="font-sans text-xs font-medium text-foreground/40 mt-4 italic">
                    Details coming soon
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Framework Modal Overlay */}
      {selectedService && selectedService.details && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          {/* Modal Card */}
          <div
            className="bg-background w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Header */}
            <div className="bg-primary text-white p-6 sm:p-8 flex items-start justify-between relative overflow-hidden">
              <div className="brand-blob w-48 h-48 bg-primary-dark -top-10 -left-10 opacity-40"></div>
              <div className="relative z-10 flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                  Service Framework
                </span>
                <h3 id="modal-title" className="font-display font-black text-2xl sm:text-3xl">
                  {selectedService.title}
                </h3>
                {selectedService.slogan && (
                  <p className="font-sans text-sm text-white/85 max-w-2xl italic leading-relaxed">
                    "{selectedService.slogan}"
                  </p>
                )}
              </div>
              <button
                onClick={handleCloseModal}
                className="relative z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="flex border-b border-primary/10 bg-surface flex-wrap">
              {[
                { key: "setup", label: "One-Time Setup" },
                { key: "growth", label: "Growth Plan" },
                { key: "included", label: "What's Included" },
                { key: "beforeAfter", label: "Before vs After" }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex-1 min-w-[120px] py-4 text-center font-sans text-sm font-bold border-b-2 transition-all duration-300 focus:outline-none ${
                    activeTab === tab.key
                      ? "border-accent text-accent bg-accent/5"
                      : "border-transparent text-primary-dark/65 hover:text-primary-dark hover:bg-primary/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Body / Tab Content */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-surface/50">
              {activeTab === "setup" && (
                <div className="animate-fade-in">
                  <h4 className="font-display font-bold text-lg text-primary-dark mb-4">
                    Initial Setup Steps
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {selectedService.details.oneTimeSetup.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-surface p-3.5 rounded-[16px] shadow-sm border border-primary/5">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-sm text-foreground/80 leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "growth" && (
                <div className="animate-fade-in">
                  <h4 className="font-display font-bold text-lg text-primary-dark mb-4">
                    Continuous Operations & Tracked Metrics
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {selectedService.details.growthPlan.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-surface p-3.5 rounded-[16px] shadow-sm border border-primary/5">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-sm text-foreground/80 leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "included" && (
                <div className="animate-fade-in">
                  <h4 className="font-display font-bold text-lg text-primary-dark mb-4">
                    Core Deliverables In Scope
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {selectedService.details.whatsIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-surface p-3.5 rounded-[16px] shadow-sm border border-primary/5">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-sm text-foreground/80 leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "beforeAfter" && selectedService.details.beforeAfter && (
                <div className="animate-fade-in flex flex-col gap-4">
                  <h4 className="font-display font-bold text-lg text-primary-dark mb-2">
                    Healthcare Growth Transformation
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Before Column */}
                    <div className="bg-red-50/70 border border-red-100 rounded-[20px] p-5 shadow-sm">
                      <h5 className="font-display font-bold text-xs text-red-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                        Without Alvision Media (Hospital Drawbacks)
                      </h5>
                      <ul className="flex flex-col gap-3">
                        {selectedService.details.beforeAfter.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-red-950/80 font-sans leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-300 mt-1.5 flex-shrink-0"></span>
                            <span>{item.before}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* After Column */}
                    <div className="bg-emerald-50/70 border border-emerald-100 rounded-[20px] p-5 shadow-sm">
                      <h5 className="font-display font-bold text-xs text-emerald-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        With Alvision Media (Hospital Growth)
                      </h5>
                      <ul className="flex flex-col gap-3">
                        {selectedService.details.beforeAfter.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-emerald-950/90 font-sans leading-relaxed font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></span>
                            <span>{item.after}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-primary/10 bg-surface px-6 sm:px-8 py-4 flex items-center justify-end">
              <button
                onClick={handleCloseModal}
                className="px-6 py-2.5 rounded-full font-sans text-sm font-bold bg-primary text-white hover:bg-primary-dark transition-all duration-300 shadow-md focus:outline-none"
              >
                Close Framework
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
