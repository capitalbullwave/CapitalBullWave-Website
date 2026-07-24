import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1800&auto=format&fit=crop",
    title: "Institutional Trading",
    desc: "Professional investment strategies for sustainable long-term growth.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1800&auto=format&fit=crop",
    title: "Portfolio Management",
    desc: "Diversified wealth solutions designed around your financial goals.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1800&auto=format&fit=crop",
    title: "Market Intelligence",
    desc: "Real-time insights backed by disciplined research and analytics.",
  },
];

function CountUp({ end, duration = 2000, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(end * easeOut);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration]);

  return (
    <>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </>
  );
}

export default function Hero({ theme = "light" }) {
  const [active, setActive] = useState(0);
  const isDark = theme === "dark";

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={`
        hero-section relative min-h-[78vh] sm:min-h-[85vh]
        overflow-hidden rounded-2xl sm:rounded-3xl
        transition-colors duration-300
        ${isDark ? "bg-slate-950" : "bg-sky-50"}
      `}
    >
      {/* Full-bleed background slideshow — both themes */}
      {slides.map((slide, index) => (
        <img
          key={slide.image}
          src={slide.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1800ms] ease-out
          ${
            active === index
              ? "opacity-100 scale-100 animate-kenburns"
              : "opacity-0 scale-110"
          }`}
        />
      ))}

      {/* Theme-aware overlays for readable copy + visible image */}
      {isDark ? (
        <>
          <div className="absolute inset-0 bg-slate-950/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-white/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-sky-50/85 to-sky-100/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-100/70 via-transparent to-white/30" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-sky-300/35 blur-3xl animate-soft-pulse"
          />
        </>
      )}

      <div className="relative z-20 flex h-full min-h-[78vh] sm:min-h-[85vh] items-center px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div
            className={`flex flex-col items-center text-center lg:items-start lg:text-left animate-slide-in-left ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em]
              ${
                isDark
                  ? "bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/30"
                  : "bg-white/95 text-sky-600 shadow-sm shadow-sky-200/60 ring-1 ring-sky-100"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isDark ? "bg-sky-400" : "bg-sky-500"
                } animate-pulse`}
              />
              Trusted Investment Partner
            </span>

            <h1 className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
              <span className={isDark ? "text-white" : "text-slate-900"}>
                Invest Smarter
              </span>
              <span
                className={`mt-2 block ${
                  isDark ? "text-sky-400" : "text-sky-600"
                }`}
              >
                Build Wealth.
              </span>
            </h1>

            <p
              className={`mt-5 max-w-xl text-base leading-7 sm:text-lg ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              BullWave Capital helps investors grow with disciplined trading,
              portfolio management, wealth advisory, and data-driven market
              intelligence designed for long-term financial success.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Link
                to="/services"
                className={`inline-flex items-center justify-center rounded-xl px-8 py-3.5 font-semibold !text-white shadow-lg transition hover:-translate-y-0.5
                ${
                  isDark
                    ? "bg-sky-500 shadow-sky-500/25 hover:bg-sky-400"
                    : "bg-sky-600 shadow-sky-600/25 hover:bg-sky-500"
                }`}
              >
                Explore Services
              </Link>

              <Link
                to="/contact"
                className={`hero-contact-btn inline-flex items-center justify-center rounded-xl px-8 py-3.5 font-semibold transition hover:-translate-y-0.5
                ${
                  isDark
                    ? "bg-white/10 !text-white ring-1 ring-white/20 hover:bg-white/15"
                    : "bg-white !text-sky-700 ring-1 ring-sky-200 shadow-sm hover:bg-sky-50"
                }`}
              >
                Contact Us
              </Link>
            </div>

            <div
              className={`mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium lg:justify-start
              ${isDark ? "text-slate-300" : "text-slate-600"}`}
            >
              <span>SEBI Registered</span>
              <span
                className={`hidden h-1 w-1 rounded-full sm:block ${
                  isDark ? "bg-slate-600" : "bg-sky-300"
                }`}
              />
              <span>Trusted Research</span>
              <span
                className={`hidden h-1 w-1 rounded-full sm:block ${
                  isDark ? "bg-slate-600" : "bg-sky-300"
                }`}
              />
              <span>Risk Managed</span>
            </div>
          </div>

          <div
            className="relative w-full max-w-lg mx-auto lg:max-w-none lg:mx-0 animate-slide-in-right"
            style={{ animationDelay: "140ms" }}
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 -z-10 blur-3xl rounded-full
              ${isDark ? "bg-sky-500/20" : "bg-sky-300/45"}`}
            />

            <div
              className={`overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl
              ${
                isDark
                  ? "bg-slate-900/90 ring-1 ring-slate-700 shadow-sky-900/20"
                  : "bg-white/95 ring-1 ring-sky-100 shadow-sky-200/50 backdrop-blur-xl"
              }`}
            >
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-[280px] overflow-hidden">
                {slides.map((slide, index) => (
                  <img
                    key={`panel-${slide.title}`}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1800ms]
                    ${
                      active === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent" />

                <div
                  className={`absolute left-4 top-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider
                  ${
                    isDark
                      ? "bg-slate-950/80 text-sky-300"
                      : "bg-white/95 text-sky-700 shadow-sm"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Our Market
                </div>

                <div className="absolute bottom-5 left-5 right-5 animate-fade-in" key={active}>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {slides[active].title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    {slides[active].desc}
                  </p>
                </div>
              </div>

              <div
                className={`grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-5
                ${isDark ? "bg-slate-900" : "bg-sky-50/90"}`}
              >
                <div
                  className={`rounded-xl p-3.5 sm:p-4 transition hover:-translate-y-0.5
                  ${
                    isDark
                      ? "bg-slate-800/80"
                      : "bg-white ring-1 ring-sky-100 shadow-sm"
                  }`}
                >
                  <p
                    className={`text-[10px] sm:text-xs uppercase tracking-[0.15em]
                    ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Annual Return
                  </p>
                  <h3
                    className={`mt-1.5 text-2xl sm:text-3xl font-bold
                    ${isDark ? "text-sky-400" : "text-sky-600"}`}
                  >
                    +
                    <CountUp
                      end={18.6}
                      decimals={1}
                      duration={2200}
                      suffix="%"
                    />
                  </h3>
                  <p
                    className={`mt-1 text-xs sm:text-sm
                    ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Average Growth
                  </p>
                </div>

                <div
                  className={`rounded-xl p-3.5 sm:p-4 transition hover:-translate-y-0.5
                  ${
                    isDark
                      ? "bg-slate-800/80"
                      : "bg-white ring-1 ring-sky-100 shadow-sm"
                  }`}
                >
                  <p
                    className={`text-[10px] sm:text-xs uppercase tracking-[0.15em]
                    ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Investors
                  </p>
                  <h3
                    className={`mt-1.5 text-2xl sm:text-3xl font-bold
                    ${isDark ? "text-sky-400" : "text-sky-600"}`}
                  >
                    <CountUp end={12} duration={2200} suffix="K+" />
                  </h3>
                  <p
                    className={`mt-1 text-xs sm:text-sm
                    ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Worldwide Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={`rounded-full transition-all duration-500 ${
              active === index
                ? isDark
                  ? "h-2 w-8 bg-sky-400"
                  : "h-2 w-8 bg-sky-600"
                : isDark
                  ? "h-2 w-2 bg-slate-600 hover:bg-slate-400"
                  : "h-2 w-2 bg-sky-300 hover:bg-sky-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
