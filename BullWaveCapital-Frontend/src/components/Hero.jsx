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

const trustItems = [
  { label: "D-U-N-S Registered", href: "/duns-profile/", highlight: true },
  { label: "Trusted Research", href: null, highlight: false },
  { label: "Risk Managed", href: null, highlight: false },
];

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
      delta < 0
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      className={`hero-section olymp-hero relative overflow-hidden rounded-none sm:rounded-[1.5rem] lg:rounded-[2rem] transition-colors duration-500
        -mx-2 sm:-mx-3 md:mx-0
        min-h-[78vh] max-sm:min-h-[70vh] sm:min-h-[88vh] lg:min-h-[90vh] bg-slate-950
        ${ready ? "hero-section--ready" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Cinematic background */}
      {slides.map((slide, index) => (
        <img
          key={slide.image}
          src={slide.image}
          alt=""
          className={`hero-bg-slide absolute inset-0 h-full w-full object-cover
          ${active === index ? "is-active" : ""}`}
        />
      ))}

      <div className="absolute inset-0 bg-slate-950/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-sky-950/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-sky-950/20 to-slate-950/55" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_20%,rgba(56,189,248,0.28),transparent_55%),radial-gradient(ellipse_55%_45%_at_90%_80%,rgba(14,165,233,0.18),transparent_50%)]"
      />

      {/* Animated gradient orbs */}
      <span
        aria-hidden="true"
        className="hero-orb pointer-events-none absolute -left-16 top-16 z-[1] h-56 w-56 rounded-full bg-sky-400/25 blur-3xl sm:h-72 sm:w-72"
      />
      <span
        aria-hidden="true"
        className="hero-orb hero-orb--delay pointer-events-none absolute -right-10 bottom-20 z-[1] h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl sm:h-64 sm:w-64"
      />
      <span
        aria-hidden="true"
        className="hero-sheen pointer-events-none absolute inset-0 z-[1]"
      />

      {/* Olymp-style animated glass bars */}
      <div className="olymp-bars pointer-events-none absolute inset-0 z-[2]" aria-hidden="true">
        {[42, 68, 55, 88, 50, 75, 60, 92, 48, 70].map((h, i) => (
          <span
            key={i}
            className="olymp-bar"
            style={{
              height: `${h}%`,
              animationDelay: `${i * 0.18}s`,
              left: `${6 + i * 9.2}%`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-[3] opacity-70">
        <TradingAtmosphere theme="dark" variant="dense" />
      </div>

      <div
        className={`absolute left-0 right-0 top-0 z-30 h-0.5 overflow-hidden ${
          isDark ? "bg-white/10" : "bg-white/15"
        }`}
      >
        <div
          key={active}
          className={`hero-progress h-full bg-sky-400 ${paused ? "is-paused" : ""}`}
        />
      </div>

      <div className="relative z-20 flex min-h-[78vh] max-sm:min-h-[70vh] sm:min-h-[88vh] lg:min-h-[90vh] flex-col justify-between px-3 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-14 lg:px-10 lg:pb-10 lg:pt-16">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="hero-copy mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <span className="hero-fade hero-fade--1 olymp-chip inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
              </span>
              Trusted Investment Partner
            </span>

            <h1 className="hero-fade hero-fade--2 mt-5 text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem]">
              Invest Smarter
              <span className="mt-2 block bg-gradient-to-r from-sky-300 via-cyan-300 to-sky-200 bg-clip-text text-transparent">
                Build Wealth.
              </span>
            </h1>

            <p className="hero-fade hero-fade--3 mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base md:text-lg lg:mx-0">
              BullWave Capital helps investors grow with disciplined trading,
              portfolio management, wealth advisory, and data-driven market
              intelligence designed for long-term financial success.
            </p>

            <div className="hero-fade hero-fade--4 mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/services"
                className="bw-gradient-btn inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-semibold !text-white transition hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="olymp-ghost-btn inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hero-panel relative mx-auto w-full max-w-lg lg:max-w-none">
            <div
              className="olymp-glass overflow-hidden rounded-[1.5rem] sm:rounded-[1.85rem] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            >
              <div className="relative h-52 overflow-hidden sm:h-64 md:h-72 lg:h-[310px]">
                {slides.map((slide, index) => (
                  <img
                    key={`panel-${slide.title}`}
                    src={slide.image}
                    alt={slide.title}
                    className={`hero-panel__img absolute inset-0 h-full w-full object-cover
                    ${active === index ? "is-active" : ""}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />

                <div className="olymp-chip absolute left-3 top-3 sm:left-4 sm:top-4">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Our Market
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5" key={active}>
                  <h2 className="hero-slide-text text-xl font-bold text-white sm:text-2xl">
                    {slides[active].title}
                  </h2>
                  <p className="hero-slide-text hero-slide-text--delay mt-2 text-sm leading-6 text-slate-200">
                    {slides[active].desc}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-white/10 bg-slate-950/80 p-3.5 backdrop-blur-xl sm:gap-4 sm:p-5">
                <div className="hero-stat olymp-stat rounded-2xl p-3.5 sm:p-4 ring-1 ring-white/10">
                  <p className="hero-stat__label text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-xs">
                    Annual Return
                  </p>
                  <h3 className="hero-stat__value mt-1.5 text-2xl font-bold sm:text-3xl">
                    +
                    <CountUp end={18.6} decimals={1} duration={2200} suffix="%" />
                  </h3>
                  <p className="hero-stat__sub mt-1 text-xs sm:text-sm">
                    Average Growth
                  </p>
                </div>
                <div className="hero-stat hero-stat--delay olymp-stat rounded-2xl p-3.5 sm:p-4 ring-1 ring-white/10">
                  <p className="hero-stat__label text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-xs">
                    Investors
                  </p>
                  <h3 className="hero-stat__value mt-1.5 text-2xl font-bold sm:text-3xl">
                    <CountUp end={12} duration={2200} suffix="K+" />
                  </h3>
                  <p className="hero-stat__sub mt-1 text-xs sm:text-sm">
                    Worldwide Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Olymp-style chip row */}
        <div className="hero-fade hero-fade--5 mt-8 sm:mt-10">
          <div className="mb-4 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActive(index)}
                className={`rounded-full transition-all duration-500 ${
                  active === index
                    ? "h-2 w-8 bg-sky-400"
                    : "h-2 w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <div className="olymp-chip-row -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
            {trustItems.map((item, i) => {
              const ChipTag = item.href ? "a" : "div";
              const chipProps = item.href
                ? {
                    href: item.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "View D-U-N-S Registered profile",
                  }
                : {};

              return (
                <ChipTag
                  key={item.label}
                  {...chipProps}
                  className={`olymp-chip olymp-chip--row shrink-0 ${
                    item.highlight ? "olymp-chip--duns cursor-pointer" : ""
                  }`}
                  style={{ animationDelay: `${480 + i * 90}ms` }}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      item.highlight
                        ? "bg-emerald-400 animate-pulse"
                        : "bg-sky-400"
                    }`}
                  />
                  {item.label}
                </ChipTag>
              );
            })}
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActive(i)}
                className={`olymp-chip olymp-chip--row shrink-0 transition ${
                  active === i ? "is-active" : ""
                }`}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
