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

function CountUp({
  end,
  duration = 2000,
  decimals = 0,
  suffix = "",
}) {
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

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        hero-section
        relative
        min-h-[85vh]
        overflow-hidden
        bg-white
        mt-2
        sm:mt-3
        rounded-[28px]
        border
        "
    >

      {/* Background Slider */}

      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt=""
          className={`absolute inset-0 h-full w-full lg:w-[95%] object-cover transition-all duration-[1800ms]
          ${
            active === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        />
      ))}

      {/* Dark image overlay for text contrast */}

      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-white/12 via-white/10 to-white/6" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.08),transparent_45%)]" />

      {/* Premium Glow */}

      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-5/12 rounded-r-[120px] bg-slate-950/10 blur-[100px] lg:block" />

      <div className="absolute -bottom-52 -right-40 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-[140px]" />

      {/* Main Container */}

      <div
        className="
          relative z-20
          mx-auto flex
          h-full
          max-w-7xl
          items-start lg:items-center
          px-5
          py-4
          sm:px-6
          lg:px-10
        "
      >

        <div
          className="
            grid
            w-full
            items-start
            gap-8
            lg:grid-cols-2
            lg:gap-10
        ">

          {/* ================= LEFT CONTENT ================= */}

          <div
            className="
              flex flex-col
              items-center
              text-center
              text-white mt-4
              lg:items-start
              lg:text-left
            "
          >
            {/* Premium Badge */}

            <div
              className="
                inline-flex items-center
                gap-3 rounded-full
                border border-blue-100
                bg-white/85
                px-5 py-2
                shadow-xl backdrop-blur-xl
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-950">
                Trusted Investment Partner
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-4 max-w-xl
                text-4xl font-black
                leading-tight tracking-tight
                sm:text-3xl
                lg:text-4xl
              "
            >
              <span className="text-white">
                Invest Smarter
              </span>

              <span
                className="
                  mt-2 block
                  bg-gradient-to-r
                  from-sky-400
                  via-sky-500
                  to-blue-300
                  bg-clip-text
                  text-transparent
                "
              >
                Build Wealth.
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-6 max-w-xl
                text-base leading-7
                text-slate-100
                sm:text-lg
              "
            >
              BullWave Capital helps investors grow with disciplined trading,
              portfolio management, wealth advisory, and data-driven market
              intelligence designed for long-term financial success.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-8 flex
                w-full flex-col
                gap-4
                sm:w-auto
                sm:flex-row
              "
            >
              {/* Primary Button */}

              <Link
                to="/services"
                className="
                  group relative inline-flex
                  items-center justify-center
                  overflow-hidden rounded-full
                  bg-gradient-to-r
                  from-blue-700 via-blue-600 to-indigo-600
                  px-9 py-4
                  font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(37,99,235,.30)]
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_25px_60px_rgba(37,99,235,.45)]
                "
              >
                {/* Shine Effect */}
                <span
                  className="
                    pointer-events-none
                    absolute inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <span className="relative z-20 text-white">
                  Explore Services
                </span>

                <svg
                  className="relative z-20 ml-3 h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-5-5 5 5-5 5"
                  />
                </svg>
              </Link>

              {/* Secondary Button */}

              <Link
                to="/contact"
                className="
                  hero-contact-btn
                  inline-flex
                  items-center justify-center
                  rounded-full
                  border border-blue-200
                  bg-white/90
                  px-9 py-4
                  font-semibold
                  text-sky-600
                  shadow-lg
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-blue-600
                  hover:bg-blue-50
                "
              >
                Contact Us
              </Link>
            </div>

            {/* Trust Line */}

            <div
              className="
                mt-8 flex
                flex-wrap items-center
                justify-center
                gap-6
                lg:justify-start
              "
            >
              <div className="flex items-center gap-2">
                <span className="text-xl text-sky-300">✓</span>
                <span className="text-sm font-medium text-slate-100">
                  SEBI Registered
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xl text-sky-300">✓</span>
                <span className="text-sm font-medium text-slate-100">
                  Trusted Research
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xl text-sky-300">✓</span>
                <span className="text-sm font-medium text-slate-100">
                  Risk Managed
                </span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT CONTENT ================= */}

          {/* Part 4 Starts Here */}


          {/* ================= RIGHT CONTENT ================= */}

            <div className="relative flex items-center justify-center">

              {/* Premium Glow */}

              <div
                className="
                  absolute
                  h-[380px] w-[380px]
                  rounded-full
                  bg-blue-500/10
                  blur-[90px]
                "
              />

              {/* Main Card */}

              <div
                className="
                  relative
                  w-full
                  max-w-sm
                  sm:max-w-md
                  lg:max-w-lg
                  overflow-hidden
                  rounded-[30px]
                  border border-white/70
                  bg-white/30
                  shadow-[0_30px_80px_rgba(37,99,235,.18)]
                  backdrop-blur-2xl
                "
              >

                {/* Image */}

                <div className="relative h-52 sm:h-60 md:h-64 lg:h-[300px]">

                  {slides.map((slide, index) => (
                    <img
                      key={index}
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

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                  {/* Live Badge */}

                  <div
                    className="
                      absolute
                      left-5 top-5
                      flex items-center
                      gap-2
                      rounded-full
                      bg-white/90
                      px-4 py-2
                      shadow-lg
                    "
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />

                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                      Our Market
                    </span>
                  </div>

                  {/* Bottom Text */}

                  <div className="absolute bottom-6 left-6 right-6">

                    <h2 className="text-2xl font-bold text-white">
                      {slides[active].title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      {slides[active].desc}
                    </p>

                  </div>

                </div>

                {/* Bottom Cards */}

                <div className="grid grid-cols-2 gap-4 bg-white/90 p-4">

                  <div
                    className="
                      rounded-2xl
                      border border-blue-100
                      bg-white
                      p-4
                      shadow-md
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-xl
                    "
                  >
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                      Annual Return
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-blue-700">
                      +<CountUp
                        end={18.6}
                        decimals={1}
                        duration={2200}
                        suffix="%"
                      />
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Average Growth
                    </p>

                  </div>

                  <div
                    className="
                      rounded-2xl
                      border border-blue-100
                      bg-white
                      p-4
                      shadow-md
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-xl
                    "
                  >
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                      Investors
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-blue-700">
                      <CountUp
                        end={12}
                        duration={2200}
                        suffix="K+"
                      />
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Worldwide Clients
                    </p>

                  </div>

                </div>

              </div>


            </div>

        </div>

      </div>

      {/* ================= PREMIUM DECORATIONS ================= */}

        {/* Top Glow */}
        <div
          className="
            pointer-events-none
            absolute
            top-0 left-1/2
            h-72 w-72
            -translate-x-1/2
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0 right-0
            h-[380px] w-[380px]
            rounded-full
            bg-indigo-500/10
            blur-[130px]
          "
        />

        {/* Floating Circle */}
        <div
          className="
            pointer-events-none
            absolute
            left-10 top-32
            hidden lg:block
          "
        >
          <span className="absolute h-4 w-4 rounded-full bg-blue-500/30 animate-ping" />

          <span className="absolute left-12 top-10 h-2 w-2 rounded-full bg-blue-400/50" />

          <span className="absolute left-24 top-28 h-5 w-5 rounded-full border border-blue-300/50" />
        </div>

        {/* Right Ring */}
        <div
          className="
            pointer-events-none
            absolute
            right-14 top-24
            hidden lg:block  
          "
        >
          <div className="h-24 w-24 rounded-full border border-blue-200/40" />

          <div className="absolute left-6 top-6 h-12 w-12 rounded-full border border-blue-300/50" />
        </div>

        {/* Premium Bottom Line */}

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

        {/* ================= SLIDER DOTS ================= */}

        <div
          className="
            absolute
            bottom-8
            left-1/2
            flex
            -translate-x-1/2
            gap-3
            z-30
          "
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`
                rounded-full
                transition-all
                duration-500

                ${
                  active === index
                    ? "w-9 h-2.5 bg-blue-700"
                    : "w-2.5 h-2.5 bg-blue-300 hover:bg-blue-500"
                }
              `}
            />
          ))}
        </div>

        {/* ================= SCROLL INDICATOR ================= */}

        <div
          className="
            absolute
            bottom-8
            right-10
            hidden
            xl:flex
            flex-col
            items-center
          "
        >

          <span
            className="
              mb-3
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-slate-500
            "
          >
            Scroll
          </span>

          <div
            className="
              flex
              h-14
              w-8
              justify-center
              rounded-full
              border-2
              border-blue-300
            "
          >
            <span className="mt-2 h-3 w-3 rounded-full bg-blue-600 animate-bounce" />
          </div>

        </div>

    </section>
  );
}