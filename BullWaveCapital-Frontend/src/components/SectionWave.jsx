const SectionWave = ({ children, theme = "light" }) => {
  const isDark = theme === "dark";
  const edgeFill = isDark ? "#020617" : "#f0f9ff";

  return (
    <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950"
            : "bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-20 right-10 h-64 w-64 rounded-full blur-3xl
        ${isDark ? "bg-sky-500/20" : "bg-white/30"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full blur-3xl
        ${isDark ? "bg-blue-600/15" : "bg-sky-200/40"}`}
      />

      <svg
        className="absolute top-0 left-0 w-full h-14 sm:h-20 md:h-28"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill={edgeFill}
          d="M0,60 C280,150 550,0 760,50 C1030,110 1230,20 1440,80 L1440,0 L0,0 Z"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-full h-14 sm:h-20 md:h-28"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill={edgeFill}
          d="M0,120 C260,40 600,190 850,90 C1080,0 1300,80 1440,30 L1440,180 L0,180 Z"
        />
      </svg>

      <div className="relative z-10 px-1 sm:px-2">{children}</div>
    </section>
  );
};

export default SectionWave;
