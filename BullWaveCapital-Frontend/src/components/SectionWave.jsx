const SectionWave = ({ children, theme = "light" }) => {
  const isDark = theme === "dark";
  const edgeFill = isDark ? "#020617" : "#ffffff";

  return (
    <section className="relative my-2 overflow-hidden rounded-[1.5rem] sm:my-3 sm:rounded-[2rem]">
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950"
            : "bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full blur-3xl sm:right-8
        ${isDark ? "bg-sky-400/20" : "bg-white/30"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full blur-3xl sm:left-6
        ${isDark ? "bg-cyan-500/15" : "bg-sky-200/40"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 opacity-[0.12]
        ${
          isDark
            ? "bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35),transparent_45%)]"
            : "bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.45),transparent_40%)]"
        }`}
      />

      <svg
        className="absolute top-0 left-0 h-10 w-full sm:h-14 md:h-20"
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
        className="absolute bottom-0 left-0 h-10 w-full sm:h-14 md:h-20"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill={edgeFill}
          d="M0,120 C260,40 600,190 850,90 C1080,0 1300,80 1440,30 L1440,180 L0,180 Z"
        />
      </svg>

      <div className="relative z-10 px-3 sm:px-4 md:px-5 lg:px-6">{children}</div>
    </section>
  );
};

export default SectionWave;
