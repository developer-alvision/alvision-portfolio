export default function StatsBand() {
  const stats = [
    {
      value: "80%",
      label: "Inquiry Growth",
      description: "Average increase in regional patient booking inquiries"
    },
    {
      value: "90%",
      label: "Booking Lift",
      description: "Rise in patient appointments scheduled via educational campaign videos"
    },
    {
      value: "70%",
      label: "Reach Increase",
      description: "Average boost in organic local social reach & educational content views"
    }
  ];

  return (
    <section className="py-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Steel Blue Panel Container with large rounded corners (24-32px) */}
        <div className="bg-primary text-white rounded-[32px] p-8 md:p-12 shadow-xl border border-white/10 relative overflow-hidden">
          {/* Subtle decorative blob */}
          <div className="brand-blob w-72 h-72 bg-primary-dark -top-20 -left-20 opacity-30"></div>
          <div className="brand-blob w-72 h-72 bg-accent -bottom-20 -right-20 opacity-20"></div>

          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-white/70 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              Statistics — as of 2024
            </span>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full mt-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105"
                >
                  {/* Hexagon Badge */}
                  <div className="w-24 h-24 bg-white/10 border border-white/20 flex items-center justify-center hexagon-wrapper shadow-lg backdrop-blur-sm relative group hover:border-accent/40 transition-colors duration-300">
                    <span className="font-display font-black text-2xl md:text-3xl text-white group-hover:text-accent transition-colors duration-300">
                      {stat.value}
                    </span>
                  </div>

                  {/* Labels and Copy */}
                  <div className="flex flex-col gap-1.5 max-w-xs">
                    <span className="font-display font-extrabold text-lg text-white/90">
                      {stat.label}
                    </span>
                    <p className="font-sans text-sm text-white/75 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <div className="w-full border-t border-white/10 pt-6 mt-4">
              <p className="font-sans text-xs text-white/50 italic">
                * These are standard numbers and can vary depending on the size of the project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
