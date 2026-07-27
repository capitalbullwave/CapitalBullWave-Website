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

const trustItems = ["SEBI Registered", "Trusted Research", "Risk Managed"];

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
        hero-section relative min-h-[78vh] sm:min-h-[88vh]
        overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] lg:rounded-[2rem]
        transition-colors duration-300
        ${isDark ? "bg-slate-950" : "bg-white"}
      `}
    >
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

      {isDark ? (
        <>
          <div className="absolute inset-0 bg-slate-950/78" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-sky-50/70 to-sky-200/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-sky-100/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-100/90 via-transparent to-sky-50/40" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 right-0 h-[28rem] w-[28rem] rounded-full bg-sky-400/35 blur-3xl animate-soft-pulse"
          />
        </>
      )}

      <div className="relative z-20 flex min-h-[78vh] sm:min-h-[88vh] flex-col justify-between px-2 py-10 sm:px-3 sm:py-12 lg:px-4 lg:py-14">
        <div className="grid w-full flex-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div
            className={`flex flex-col items-center text-center lg:items-start lg:text-left animate-slide-in-left ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]
              ${
                isDark
                  ? "bg-white/10 text-sky-300 ring-1 ring-white/15"
                  : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
              Trusted Investment Partner
            </span>

            <h1 className="mt-5 max-w-2xl text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem]">
              <span className={isDark ? "text-white" : "text-black"}>
                Invest Smarter
              </span>
              <span
                className={`mt-2 block bg-gradient-to-r ${
                  isDark
                    ? "from-sky-300 to-cyan-300"
                    : "from-sky-600 to-sky-400"
                } bg-clip-text text-transparent`}
              >
                Build Wealth.
              </span>
            </h1>

            <p
              className={`mt-5 max-w-xl text-base leading-7 sm:text-lg ${
                isDark ? "text-slate-300" : "text-neutral-800"
              }`}
            >
              BullWave Capital helps investors grow with disciplined trading,
              portfolio management, wealth advisory, and data-driven market
              intelligence designed for long-term financial success.
            </p>

            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:w-auto sm:flex-row sm:gap-3">
              <Link
                to="/services"
                className="bw-gradient-btn inline-flex w-full sm:w-auto items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-semibold !text-white transition hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Explore Services
              </Link>

              <Link
                to="/contact"
                className={`hero-contact-btn inline-flex w-full sm:w-auto items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-semibold transition hover:-translate-y-0.5 active:scale-[0.98]
                ${
                  isDark
                    ? "bg-white/10 !text-white ring-1 ring-white/20 hover:bg-white/15"
                    : "bg-white !text-sky-800 ring-1 ring-sky-200 hover:bg-sky-50"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div
            className="relative w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 animate-slide-in-right"
            style={{ animationDelay: "120ms" }}
          >
            <div
              aria-hidden="true"
              className={`absolute -inset-6 -z-10 rounded-[2rem] blur-3xl
              ${isDark ? "bg-sky-500/15" : "bg-sky-300/35"}`}
            />

            <div
              className={`overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] shadow-2xl
              ${
                isDark
                  ? "bg-slate-900/95 ring-1 ring-white/10"
                  : "bg-white/95 ring-1 ring-sky-100 backdrop-blur-xl"
              }`}
            >
              <div className="relative h-52 sm:h-60 md:h-72 lg:h-[300px] overflow-hidden">
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

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

                <div className="absolute bottom-5 left-5 right-5" key={active}>
                  <h2 className="text-xl sm:text-2xl font-bold text-white animate-fade-in">
                    {slides[active].title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-200 animate-fade-in">
                    {slides[active].desc}
                  </p>
                </div>
              </div>

              <div
                className={`grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-5
                ${isDark ? "bg-slate-950/80" : "bg-sky-50/90"}`}
              >
                <div
                  className={`rounded-2xl p-3.5 sm:p-4 transition hover:-translate-y-0.5
                  ${
                    isDark
                      ? "bg-slate-900 ring-1 ring-white/5"
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
                  className={`rounded-2xl p-3.5 sm:p-4 transition hover:-translate-y-0.5
                  ${
                    isDark
                      ? "bg-slate-900 ring-1 ring-white/5"
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

        {/* Olymp-style trust strip — same existing labels */}
        <div className="relative mt-8 sm:mt-10">
          <div className="mb-4 flex justify-center gap-2.5">
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
            className={`grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-0
            ${
              isDark
                ? "rounded-2xl bg-white/5 ring-1 ring-white/10"
                : "rounded-2xl bg-white/85 ring-1 ring-sky-100 shadow-sm backdrop-blur"
            }`}
          >
            {trustItems.map((item, i) => (
              <div
                key={item}
                className={`flex items-center justify-center gap-2 px-3 py-3.5 text-sm font-semibold
                ${isDark ? "text-slate-200" : "text-slate-700"}
                ${
                  i < trustItems.length - 1
                    ? isDark
                      ? "sm:border-r sm:border-white/10"
                      : "sm:border-r sm:border-sky-100"
                    : ""
                }`}
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
