import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TradingAtmosphere from "./TradingAtmosphere";

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

const trustItems = ["SEBI Registered", "Trusted Research", "Risk Managed"];

function CountUp({ end, duration = 2000, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(end);
      return undefined;
    }

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
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const touchStartX = useRef(null);
  const isDark = theme === "dark";

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [paused]);

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
    setPaused(true);
  };

  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    const end = e.changedTouches[0]?.clientX ?? null;
    touchStartX.current = null;
    setPaused(false);
    if (start == null || end == null) return;
    const delta = end - start;
    if (Math.abs(delta) < 40) return;
    setActive((prev) =>
      delta < 0 ? (prev + 1) % slides.length : (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      className={`hero-section relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] lg:rounded-[2rem] transition-colors duration-500
        min-h-[auto] sm:min-h-[82vh] lg:min-h-[86vh]
        ${isDark ? "bg-slate-950" : "bg-white"}
        ${ready ? "hero-section--ready" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Background slideshow */}
      {slides.map((slide, index) => (
        <img
          key={slide.image}
          src={slide.image}
          alt=""
          className={`hero-bg-slide absolute inset-0 h-full w-full object-cover
          ${active === index ? "is-active" : ""}`}
        />
      ))}

      {/* Theme overlays */}
      {isDark ? (
        <>
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          <div
            aria-hidden="true"
            className="hero-orb pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl sm:h-[28rem] sm:w-[28rem]"
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-sky-50/75 to-sky-200/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-sky-100/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-100/95 via-transparent to-sky-50/45" />
          <div
            aria-hidden="true"
            className="hero-orb pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-sky-400/40 blur-3xl sm:h-[28rem] sm:w-[28rem]"
          />
          <div
            aria-hidden="true"
            className="hero-orb hero-orb--delay pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl"
          />
        </>
      )}

      <div className="absolute inset-0 z-[5]">
        <TradingAtmosphere theme={theme} variant="dense" />
      </div>

      {/* Slide progress */}
      <div
        className={`absolute left-0 right-0 top-0 z-30 h-1 overflow-hidden ${
          isDark ? "bg-white/10" : "bg-sky-100/80"
        }`}
      >
        <div
          key={active}
          className={`hero-progress h-full ${
            isDark ? "bg-sky-400" : "bg-sky-500"
          } ${paused ? "is-paused" : ""}`}
        />
      </div>

      <div className="relative z-20 flex flex-col justify-between px-3 py-8 sm:px-5 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid w-full flex-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Copy */}
          <div
            className={`hero-copy flex flex-col items-center text-center lg:items-start lg:text-left ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            <span
              className={`hero-fade hero-fade--1 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em]
              ${
                isDark
                  ? "bg-white/10 text-sky-300 ring-1 ring-white/15"
                  : "bg-white/90 text-sky-700 ring-1 ring-sky-100 shadow-sm"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
              </span>
              Trusted Investment Partner
            </span>

            <h1 className="hero-fade hero-fade--2 mt-4 sm:mt-5 max-w-2xl text-[1.85rem] font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem]">
              <span className={isDark ? "text-white" : "text-black"}>
                Invest Smarter
              </span>
              <span
                className={`mt-1.5 block bg-gradient-to-r bg-clip-text text-transparent sm:mt-2 ${
                  isDark
                    ? "from-sky-300 via-cyan-300 to-sky-200"
                    : "from-sky-700 via-sky-500 to-cyan-500"
                }`}
              >
                Build Wealth.
              </span>
            </h1>

            <p
              className={`hero-fade hero-fade--3 mt-4 sm:mt-5 max-w-xl text-sm leading-7 sm:text-base md:text-lg ${
                isDark ? "text-slate-300" : "text-neutral-800"
              }`}
            >
              BullWave Capital helps investors grow with disciplined trading,
              portfolio management, wealth advisory, and data-driven market
              intelligence designed for long-term financial success.
            </p>

            <div className="hero-fade hero-fade--4 mt-6 sm:mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:w-auto sm:flex-row sm:gap-3">
              <Link
                to="/services"
                className="bw-gradient-btn inline-flex w-full sm:w-auto items-center justify-center rounded-full px-7 py-3.5 text-sm sm:text-[15px] font-semibold !text-white transition hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className={`hero-contact-btn inline-flex w-full sm:w-auto items-center justify-center rounded-full px-7 py-3.5 text-sm sm:text-[15px] font-semibold transition hover:-translate-y-0.5 active:scale-[0.98]
                ${
                  isDark
                    ? "bg-white/10 !text-white ring-1 ring-white/20 hover:bg-white/15"
                    : "bg-white !text-sky-800 ring-1 ring-sky-200 hover:bg-sky-50 shadow-sm"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Visual panel */}
          <div className="hero-panel relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
            <div
              aria-hidden="true"
              className={`absolute -inset-4 sm:-inset-6 -z-10 rounded-[2rem] blur-3xl
              ${isDark ? "bg-sky-500/20" : "bg-sky-300/40"}`}
            />

            <div
              className={`hero-panel__card overflow-hidden rounded-[1.35rem] sm:rounded-[1.75rem] shadow-2xl
              ${
                isDark
                  ? "bg-slate-900/95 ring-1 ring-white/10"
                  : "bg-white/95 ring-1 ring-sky-100 backdrop-blur-xl shadow-sky-200/40"
              }`}
            >
              <div className="relative h-48 overflow-hidden sm:h-60 md:h-72 lg:h-[300px]">
                {slides.map((slide, index) => (
                  <img
                    key={`panel-${slide.title}`}
                    src={slide.image}
                    alt={slide.title}
                    className={`hero-panel__img absolute inset-0 h-full w-full object-cover
                    ${active === index ? "is-active" : ""}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/30 to-transparent" />

                <div
                  className={`absolute left-3 top-3 sm:left-4 sm:top-4 flex items-center gap-2 rounded-full px-2.5 py-1.5 sm:px-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wider
                  ${
                    isDark
                      ? "bg-slate-950/80 text-sky-300"
                      : "bg-white/95 text-sky-700 shadow-sm"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Our Market
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5" key={active}>
                  <h2 className="hero-slide-text text-lg sm:text-2xl font-bold text-white">
                    {slides[active].title}
                  </h2>
                  <p className="hero-slide-text hero-slide-text--delay mt-1.5 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-200">
                    {slides[active].desc}
                  </p>
                </div>
              </div>

              <div
                className={`grid grid-cols-2 gap-2.5 p-3.5 sm:gap-4 sm:p-5
                ${isDark ? "bg-slate-950/80" : "bg-sky-50/95"}`}
              >
                <div
                  className={`hero-stat rounded-xl sm:rounded-2xl p-3 sm:p-4 transition
                  ${
                    isDark
                      ? "bg-slate-900 ring-1 ring-white/5"
                      : "bg-white ring-1 ring-sky-100 shadow-sm"
                  }`}
                >
                  <p
                    className={`text-[10px] sm:text-xs uppercase tracking-[0.14em]
                    ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Annual Return
                  </p>
                  <h3
                    className={`mt-1 text-xl sm:text-3xl font-bold
                    ${isDark ? "text-sky-400" : "text-sky-600"}`}
                  >
                    +
                    <CountUp end={18.6} decimals={1} duration={2200} suffix="%" />
                  </h3>
                  <p
                    className={`mt-1 text-[11px] sm:text-sm
                    ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Average Growth
                  </p>
                </div>

                <div
                  className={`hero-stat hero-stat--delay rounded-xl sm:rounded-2xl p-3 sm:p-4 transition
                  ${
                    isDark
                      ? "bg-slate-900 ring-1 ring-white/5"
                      : "bg-white ring-1 ring-sky-100 shadow-sm"
                  }`}
                >
                  <p
                    className={`text-[10px] sm:text-xs uppercase tracking-[0.14em]
                    ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Investors
                  </p>
                  <h3
                    className={`mt-1 text-xl sm:text-3xl font-bold
                    ${isDark ? "text-sky-400" : "text-sky-600"}`}
                  >
                    <CountUp end={12} duration={2200} suffix="K+" />
                  </h3>
                  <p
                    className={`mt-1 text-[11px] sm:text-sm
                    ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Worldwide Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots + trust strip */}
        <div className="hero-fade hero-fade--5 relative mt-7 sm:mt-10">
          <div className="mb-3.5 sm:mb-4 flex justify-center gap-2">
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

          <div
            className={`grid grid-cols-1 gap-px overflow-hidden rounded-xl sm:rounded-2xl sm:grid-cols-3
            ${
              isDark
                ? "bg-white/5 ring-1 ring-white/10"
                : "bg-white/90 ring-1 ring-sky-100 shadow-sm backdrop-blur"
            }`}
          >
            {trustItems.map((item, i) => (
              <div
                key={item}
                className={`hero-trust flex items-center justify-center gap-2 px-3 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold
                ${isDark ? "text-slate-200" : "text-neutral-800"}
                ${
                  i < trustItems.length - 1
                    ? isDark
                      ? "sm:border-r sm:border-white/10"
                      : "sm:border-r sm:border-sky-100"
                    : ""
                }`}
                style={{ animationDelay: `${520 + i * 90}ms` }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
