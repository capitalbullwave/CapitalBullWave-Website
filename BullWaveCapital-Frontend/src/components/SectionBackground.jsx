import React from "react";

const SectionBackground = ({ children, className = "", dark = false }) => {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-2xl sm:rounded-3xl
        transition-colors duration-500
        ${
          dark
            ? "bg-slate-900/90 ring-1 ring-slate-800"
            : "bg-white/95 ring-1 ring-sky-100 shadow-sm shadow-sky-100/80"
        }
        ${className}
      `}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-40 -left-32 h-72 w-72 rounded-full blur-3xl
        ${dark ? "bg-sky-500/15" : "bg-sky-300/40"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-40 -right-28 h-80 w-80 rounded-full blur-3xl
        ${dark ? "bg-blue-600/10" : "bg-sky-200/50"}`}
      />

      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-[2px]
        ${
          dark
            ? "bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"
            : "bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
        }`}
      />

      <div className="relative z-10 p-4 sm:p-5 lg:p-6">{children}</div>
    </div>
  );
};

export default SectionBackground;
