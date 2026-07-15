import React from "react";

const SectionBackground = ({
  children,
  className = "",
  dark = false,
}) => {
  return (
    <section
      className={`
        relative overflow-hidden
        rounded-[32px]
        px-5 sm:px-8 md:px-12 lg:px-16
        py-14 md:py-20
        transition-colors duration-500
        ${
          dark
            ? "bg-slate-950 border border-slate-800"
            : "bg-white border border-sky-100"
        }
        ${className}
      `}
    >
      {/* Sky Gradient */}
      <div
        className={`
          absolute -top-52 -left-44
          w-[500px] h-[500px]
          rounded-full blur-[130px]
          pointer-events-none
          ${
            dark
              ? "bg-sky-500/15"
              : "bg-sky-400/35"
          }
        `}
      />

      <div
        className={`
          absolute bottom-[-220px] right-[-160px]
          w-[450px] h-[450px]
          rounded-full blur-[120px]
          pointer-events-none
          ${
            dark
              ? "bg-blue-600/10"
              : "bg-blue-400/40"
          }
        `}
      />

      {/* Small decorative circle */}
      <div
        className={`
          absolute top-24 right-20
          h-28 w-28 rounded-full blur-3xl
          ${
            dark
              ? "bg-cyan-400/10"
              : "bg-cyan-300/30"
          }
        `}
      />

      {/* Dot Pattern */}
      <div
        className={`
          absolute inset-0 opacity-50
          pointer-events-none
        `}
      >
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="1.2"
                fill={dark ? "#194a5f" : "#ddf4ff"}
              />
            </pattern>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#dots)"
          />
        </svg>
      </div>

      {/* Top Glow Line */}
      <div
        className={`
          absolute top-0 left-0
          h-[2px] w-full
          ${
            dark
              ? "bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
              : "bg-gradient-to-r from-transparent via-sky-500/40 to-transparent"
          }
        `}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default SectionBackground;