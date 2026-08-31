import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TradingAtmosphere from "./TradingAtmosphere";
import { images } from "../assets/images";

const slides = [
  {
    id: "duns",
    title: "D-U-N-S Registered",
    desc: "Verified business identity with Dun & Bradstreet — credibility you can trust.",
    badge: "Verified",
    image: images.heroDuns,
    chipDot: "emerald",
    highlight: true,
  },
  {
    id: "research",
    title: "Trusted Research",
    desc: "Disciplined equity research with sector insights, technical setups, and clear market context.",
    badge: "Research",
    image: images.heroResearch,
    chipDot: "sky",
  },
  {
    id: "risk",
    title: "Risk Managed",
    desc: "Structured allocation and position sizing to protect capital through market volatility.",
    badge: "Risk Control",
    image: images.heroRisk,
    chipDot: "sky",
  },
  {
    id: "institutional",
    title: "Institutional Trading",
    desc: "Professional investment strategies for sustainable long-term growth.",
    badge: "Our Market",
    image: images.heroInstitutional,
    chipDot: "sky",
  },
  {
    id: "portfolio",
    title: "Portfolio Management",
    desc: "Diversified wealth solutions designed around your financial goals.",
    badge: "Our Market",
    image: images.heroPortfolio,
    chipDot: "sky",
  },
  {
    id: "intelligence",
    title: "Market Intelligence",
    desc: "Real-time insights backed by disciplined research and analytics.",
    badge: "Our Market",
    image: images.heroIntelligence,
    chipDot: "sky",
  },
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

function shouldLoadSlide(active, index, total) {
  if (index === active) return true;
  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;
  return index === prev || index === next;
}

export default function Hero({ theme = "light" }) {
  const [active, setActive] = useState(3);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState(() => new Set([3, 2, 4]));
  const sectionRef = useRef(null);
  const touchStartX = useRef(null);
  const isDark = theme === "dark";
  const count = slides.length;
  const current = slides[active] ?? slides[0];

  const goTo = (index) => {
    setActive(((index % count) + count) % count);
  };

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    setLoadedSlides((prev) => {
      const next = new Set(prev);
      for (let i = 0; i < count; i += 1) {
        if (shouldLoadSlide(active, i, count)) next.add(i);
      }
      return next;
    });
  }, [active, count]);

  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const node = sectionRef.current;
      if (!node) return;
      const focused = document.activeElement;
      const inHero = node === focused || node.contains(focused);
      if (!inHero) return;
      e.preventDefault();
      if (e.key === "ArrowRight") goTo(active + 1);
      else goTo(active - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, count]);

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
    if (delta < 0) goTo(active + 1);
    else goTo(active - 1);
  };

  const onChipClick = (index) => {
    goTo(index);
  };

  return (
    <section
      ref={sectionRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Featured investment highlights"
      className={`hero-section olymp-hero relative overflow-hidden rounded-none sm:rounded-[1.5rem] lg:rounded-[2rem] transition-colors duration-500
        mx-0
        bg-slate-950 outline-none
        ${ready ? "hero-section--ready" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, index) =>
        loadedSlides.has(index) ? (
          <img
            key={`bg-${slide.id}`}
            src={slide.image}
            alt=""
            decoding="async"
            loading={index === active ? "eager" : "lazy"}
            className={`hero-bg-slide absolute inset-0 h-full w-full object-cover
            ${active === index ? "is-active" : ""}`}
          />
        ) : null
      )}

      <div className="absolute inset-0 bg-slate-950/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-sky-950/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-sky-950/20 to-slate-950/55" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_20%,rgba(56,189,248,0.28),transparent_55%),radial-gradient(ellipse_55%_45%_at_90%_80%,rgba(14,165,233,0.18),transparent_50%)]"
      />

      <span
        aria-hidden="true"
        className="hero-orb pointer-events-none absolute -left-16 top-16 z-[1] hidden h-44 w-44 rounded-full bg-sky-400/25 blur-3xl sm:block sm:h-64 sm:w-64 lg:h-72 lg:w-72"
      />
      <span
        aria-hidden="true"
        className="hero-orb hero-orb--delay pointer-events-none absolute -right-10 bottom-20 z-[1] hidden h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl sm:block sm:h-56 sm:w-56 lg:h-64 lg:w-64"
      />
      <span
        aria-hidden="true"
        className="hero-orb hero-orb--slow pointer-events-none absolute left-1/2 top-1/3 z-[1] hidden h-32 w-32 -translate-x-1/2 rounded-full bg-sky-300/10 blur-3xl sm:block sm:h-48 sm:w-48"
      />
      <span
        aria-hidden="true"
        className="hero-sheen pointer-events-none absolute inset-0 z-[1] hidden sm:block"
      />

      <div
        className="olymp-bars pointer-events-none absolute inset-0 z-[2] hidden md:block"
        aria-hidden="true"
      >
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

      <div className="absolute inset-0 z-[3] hidden opacity-70 sm:block">
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

      <div className="hero-inner relative z-20 flex flex-col justify-between">
        <div className="hero-grid grid flex-1 items-center">
          <div className="hero-copy mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <p className="hero-fade hero-fade--1 hero-brand">
              Capital <span>BullWave</span>
            </p>

            <p className="hero-fade hero-fade--2 hero-kicker">
              Market research &amp; investor education · Delhi &amp; Dubai
            </p>

            <h1 className="hero-fade hero-fade--3 hero-title mt-3 font-semibold tracking-tight text-white sm:mt-4">
              Invest with clarity.
              <span className="hero-title-accent mt-1 block sm:mt-2">
                Research that guides.
              </span>
            </h1>

            <p className="hero-fade hero-fade--4 hero-desc mx-auto mt-4 max-w-xl text-slate-200/95 sm:mt-5 lg:mx-0">
              Disciplined equity research, risk-aware guidance, and practical
              education — built for informed long-term decisions.
            </p>

            <div className="hero-fade hero-fade--5 hero-cta mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/services"
                className="bw-gradient-btn hero-cta-btn inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[14px] font-semibold !text-white sm:px-8 sm:text-[15px]"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="olymp-ghost-btn hero-cta-btn inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[14px] font-semibold text-white sm:px-8 sm:text-[15px]"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          <div className="hero-panel relative mx-auto w-full">
            <div className="olymp-glass hero-panel-card overflow-hidden rounded-[1.25rem] shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:rounded-[1.85rem]">
              <div className="hero-panel-media relative overflow-hidden">
                {slides.map((slide, index) =>
                  loadedSlides.has(index) ? (
                    <img
                      key={`panel-${slide.id}`}
                      src={slide.image}
                      alt={slide.title}
                      decoding="async"
                      loading={index === active ? "eager" : "lazy"}
                      className={`hero-panel__img absolute inset-0 h-full w-full object-cover
                      ${active === index ? "is-active" : ""}`}
                    />
                  ) : null
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />

                <div className="olymp-chip absolute left-3 top-3 sm:left-4 sm:top-4">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  {current.badge}
                </div>

                <div
                  className="hero-panel-copy absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5"
                  key={current.id}
                >
                  <h2 className="hero-slide-text text-lg font-bold text-white sm:text-xl md:text-2xl">
                    {current.title}
                  </h2>
                  <p className="hero-slide-text hero-slide-text--delay mt-1.5 text-xs leading-5 text-slate-200 sm:mt-2 sm:text-sm sm:leading-6">
                    {current.desc}
                  </p>
                </div>
              </div>

              <div className="grid min-w-0 grid-cols-2 gap-2 border-t border-white/10 bg-slate-950/80 p-2.5 backdrop-blur-xl sm:gap-4 sm:p-5">
                <div className="hero-stat olymp-stat min-w-0 rounded-xl p-2.5 ring-1 ring-white/10 sm:rounded-2xl sm:p-4">
                  <p className="hero-stat__label text-[9px] font-semibold uppercase tracking-[0.08em] sm:text-xs sm:tracking-[0.16em]">
                    Credential
                  </p>
                  <h3 className="hero-stat__value mt-1 text-lg font-bold leading-tight sm:mt-1.5 sm:text-2xl">
                    NISM
                  </h3>
                  <p className="hero-stat__sub mt-1 text-[10px] leading-snug sm:text-sm">
                    Certified Analysts
                  </p>
                </div>
                <div className="hero-stat hero-stat--delay olymp-stat min-w-0 rounded-xl p-2.5 ring-1 ring-white/10 sm:rounded-2xl sm:p-4">
                  <p className="hero-stat__label text-[9px] font-semibold uppercase tracking-[0.08em] sm:text-xs sm:tracking-[0.16em]">
                    Presence
                  </p>
                  <h3 className="hero-stat__value mt-1 truncate text-lg font-bold sm:mt-1.5 sm:text-3xl">
                    <CountUp end={2} duration={1600} />
                  </h3>
                  <p className="hero-stat__sub mt-1 text-[10px] leading-snug sm:text-sm">
                    Offices · Delhi &amp; Dubai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-fade hero-fade--6 hero-footer-chips mt-6 sm:mt-10">
          <div className="mb-3 flex justify-center gap-2 sm:mb-4">
            {slides.map((slide, index) => (
              <button
                key={`dot-${slide.id}`}
                type="button"
                aria-label={`Show ${slide.title}`}
                aria-current={active === index ? "true" : undefined}
                onClick={() => goTo(index)}
                className={`relative cursor-pointer rounded-full transition-all duration-500 before:absolute before:inset-[-12px] before:content-[''] ${
                  active === index
                    ? "h-2 w-8 bg-sky-400"
                    : "h-2 w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <div className="olymp-chip-row hero-trust-row -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => onChipClick(i)}
                aria-pressed={active === i}
                aria-label={`Show ${slide.title}`}
                className={`olymp-chip olymp-chip--row shrink-0 cursor-pointer transition ${
                  active === i ? "is-active" : ""
                } ${slide.highlight ? "olymp-chip--duns" : ""}`}
                style={{ animationDelay: `${480 + i * 70}ms` }}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    slide.chipDot === "emerald"
                      ? "bg-emerald-400 animate-pulse"
                      : "bg-sky-400"
                  }`}
                />
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
