import React from "react";
import TradingAtmosphere from "./TradingAtmosphere";

const SectionBackground = ({ children, className = "", dark = false }) => {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-[1.5rem] sm:rounded-[2rem]
        transition-colors duration-500
        ${
          dark
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            : "bg-gradient-to-br from-white via-sky-50 to-sky-100 ring-1 ring-sky-100 shadow-[0_16px_50px_rgba(14,165,233,0.1)]"
        }
        ${className}
      `}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-36 -left-28 h-72 w-72 rounded-full blur-3xl
        ${dark ? "bg-sky-500/15" : "bg-sky-300/45"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-36 -right-24 h-80 w-80 rounded-full blur-3xl
        ${dark ? "bg-cyan-500/10" : "bg-sky-200/70"}`}
      />

      <TradingAtmosphere theme={dark ? "dark" : "light"} />

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">{children}</div>
    </div>
  );
};

export default SectionBackground;
