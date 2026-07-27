import React from "react";

const SectionBackground = ({ children, className = "", dark = false }) => {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-[1.5rem] sm:rounded-[2rem]
        transition-colors duration-500
        ${
          dark
            ? "bg-slate-900/95 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            : "bg-white ring-1 ring-sky-100/80 shadow-[0_16px_50px_rgba(14,165,233,0.08)]"
        }
        ${className}
      `}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-36 -left-28 h-72 w-72 rounded-full blur-3xl
        ${dark ? "bg-sky-500/12" : "bg-sky-200/50"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-36 -right-24 h-80 w-80 rounded-full blur-3xl
        ${dark ? "bg-cyan-500/8" : "bg-sky-100/70"}`}
      />

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">{children}</div>
    </div>
  );
};

export default SectionBackground;
