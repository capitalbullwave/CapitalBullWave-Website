const SectionWave = ({ children, theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative overflow-hidden rounded-[40px] ${
        isDark ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500" />

      {/* Top Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-20 sm:h-28 md:h-36 lg:h-44"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        <path
          fill={isDark ? "#020617" : "#ffffff"}
          d="M0,60 C280,150 550,0 760,50 C1030,110 1230,20 1440,80 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-20 sm:h-28 md:h-36 lg:h-44"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        <path
          fill={isDark ? "#020617" : "#ffffff"}
          d="M0,120 C260,40 600,190 850,90 C1080,0 1300,80 1440,30 L1440,180 L0,180 Z"
        />
      </svg>

      {/* Decorations */}
      <div className="absolute top-16 left-20 h-3 w-3 rounded-full bg-white/50 animate-pulse" />
      <div className="absolute top-40 right-24 h-5 w-5 rounded-full bg-white/30" />
      <div className="absolute bottom-28 left-1/3 h-4 w-4 rounded-full bg-white/40" />
      <div className="absolute top-1/2 right-10 h-8 w-8 rounded-full bg-white/20" />

      <div className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
        {children}
      </div>
    </section>
  );
};

export default SectionWave;