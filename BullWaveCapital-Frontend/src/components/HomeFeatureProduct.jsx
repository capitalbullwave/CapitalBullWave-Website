import { useRef, useState, useEffect } from "react";
import {
  FaChartLine,
  FaShieldAlt,
  FaClipboardList,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "Core / Starter Plan",
    price: "₹4,999 / month",
    description:
      "Entry-level guidance for swing traders, focused on fundamentally sound equity opportunities.",
    details: [
      "12–15 equity recommendations every month",
      "Momentum-based stock selection",
      "Actionable buy & sell guidance",
    ],
  },
  {
    title: "Elite Plan / Pro Trader",
    price: "₹9,999 / month",
    description:
      "Designed for active traders with advanced Futures & Options guidance covering Nifty and Bank Nifty.",
    details: [
      "Nifty & Bank Nifty F&O advisory",
      "Daily market direction updates",
      "Risk & reversal level guidance",
    ],
    featured: true,
  },
  {
    title: "Elite Investor Plan",
    price: "₹7,999 / month",
    description:
      "Premium advisory for long-term investors including portfolio reviews and exclusive research reports.",
    details: [
      "1-on-1 portfolio consultation",
      "Premium research reports",
      "Long-term wealth strategy",
    ],
  },
];

const features = [
  {
    title: "Smart Trading Ideas",
    description:
      "Price-action insights with support, resistance and trend analysis for smarter market decisions.",
    icon: FaChartLine,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Trading chart analysis on screen",
    tags: ["Price action", "Trend analysis", "Support & resistance"],
  },
  {
    title: "Risk Management Planning",
    description:
      "Structured allocation and position sizing strategies to protect capital during market volatility.",
    icon: FaShieldAlt,
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Financial planning and capital protection",
    tags: ["Capital protection", "Position sizing", "Volatility control"],
  },
  {
    title: "Portfolio Learning Plans",
    description:
      "Build disciplined investing habits through practical portfolio learning and continuous market education.",
    icon: FaClipboardList,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Portfolio analytics dashboard",
    tags: ["Education", "Discipline", "Portfolio habits"],
  },
  {
    title: "Intraday & Swing Support",
    description:
      "Timely trading updates during market hours to help capture short-term opportunities confidently.",
    icon: FaRocket,
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Live market trading workspace",
    tags: ["Intraday", "Swing setups", "Live updates"],
  },
];

const featureGallery = [
  {
    src: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=900&auto=format&fit=crop",
    alt: "Market data screens",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop",
    alt: "Financial district skyline",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
    alt: "Investment analytics workspace",
  },
];

function FeatureImage({ src, alt, imgClassName = "" }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="feature-image relative h-full w-full overflow-hidden">
      {!loaded && !failed && (
        <div className="absolute inset-0 z-[1] flex items-center justify-center bg-sky-100/90">
          <span className="feature-circle-loader" aria-label="Loading" />
        </div>
      )}
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setFailed(true);
            setLoaded(true);
          }}
          className={`w-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${imgClassName || "h-full"}`}
        />
      ) : (
        <div className="flex h-full min-h-[5rem] w-full items-center justify-center bg-gradient-to-br from-sky-200 via-sky-100 to-cyan-50 px-2 text-center text-[11px] font-semibold text-sky-800">
          {alt}
        </div>
      )}
    </div>
  );
}

const FeatureSection = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(-1);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );
    observer.observe(node);
    const failsafe = window.setTimeout(() => setInView(true), 1800);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const usable = Math.max(rect.height - viewportHeight * 0.25, 1);
      const traveled = Math.min(Math.max(viewportHeight * 0.55 - rect.top, 0), usable);
      const percentage = Math.min(Math.max((traveled / usable) * 100, 0), 100);
      setProgress(percentage);

      const cards = sectionRef.current.querySelectorAll("[data-index]");
      let nextActive = -1;
      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < viewportHeight * 0.72) {
          nextActive = index;
        }
      });
      setActive(nextActive);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`feature-stack relative mt-12 sm:mt-16 overflow-hidden rounded-2xl sm:rounded-[1.75rem] p-4 sm:p-6 lg:p-10
      ${
        isDark
          ? "bg-gradient-to-b from-slate-900/80 via-slate-950/70 to-slate-900/80 ring-1 ring-white/10"
          : "bg-gradient-to-b from-sky-50 via-white to-sky-50/90 ring-1 ring-sky-100 shadow-[0_18px_50px_rgba(14,165,233,0.08)]"
      }
      ${inView ? "feature-stack--inview" : ""}`}
    >
      {/* Animated background */}
      <div className="feature-stack__bg pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="feature-orb feature-orb--1" />
        <span className="feature-orb feature-orb--2" />
        <span className="feature-orb feature-orb--3" />
        <span className="feature-ring feature-ring--1" />
        <span className="feature-ring feature-ring--2" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className="feature-float-dot"
            style={{
              left: `${12 + i * 14}%`,
              top: `${18 + ((i * 17) % 60)}%`,
              animationDelay: `${i * 0.55}s`,
            }}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl
        ${isDark ? "bg-sky-500/10" : "bg-sky-200/50"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full blur-3xl
        ${isDark ? "bg-cyan-500/10" : "bg-sky-100/70"}`}
      />

      <div className="relative mb-8 sm:mb-10 text-center">
        <span
          className={`inline-flex rounded-full px-3.5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em]
          ${
            isDark
              ? "bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/20"
              : "bg-white text-sky-700 ring-1 ring-sky-100 shadow-sm"
          }`}
        >
          How We Support You
        </span>
        <h3
          className={`mt-3 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Research-led guidance, step by step
        </h3>
        <p
          className={`mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Scroll through each capability — from trading ideas to risk control —
          designed to keep decisions clear, disciplined, and actionable.
        </p>
      </div>

      {/* Image gallery strip */}
      <div className="feature-gallery relative z-[1] mx-auto mb-8 hidden max-w-4xl grid-cols-3 gap-2 sm:mb-10 sm:grid sm:gap-3">
        {featureGallery.map((shot, i) => (
          <div
            key={shot.src}
            className={`feature-gallery__frame overflow-hidden rounded-xl sm:rounded-2xl
            ${i === 1 ? "mt-3 sm:mt-5" : ""}
            ${i === 2 ? "mt-1.5 sm:mt-2" : ""}`}
            style={{ animationDelay: `${120 + i * 110}ms` }}
          >
            <FeatureImage
              src={shot.src}
              alt={shot.alt}
              imgClassName="feature-gallery__img h-20 sm:h-28 md:h-36"
            />
            <div
              className={`pointer-events-none absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-t from-slate-950/50 to-transparent"
                  : "bg-gradient-to-t from-sky-950/25 to-transparent"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="relative z-[1] mx-auto max-w-3xl lg:max-w-4xl">
        {/* Track */}
        <div
          className={`feature-stack__track absolute left-[1.15rem] sm:left-5 top-2 bottom-2 w-[2px] rounded-full
          ${isDark ? "bg-white/10" : "bg-sky-200"}`}
        />
        <div
          className="feature-stack__progress absolute left-[1.15rem] sm:left-5 top-2 w-[2px] origin-top rounded-full"
          style={{ height: `${Math.max(progress, 4)}%` }}
        />

        <div className="space-y-4 sm:space-y-5 pl-10 sm:pl-14">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const activeCard = active >= index;
            const isCurrent = active === index;

            return (
              <article
                key={feature.title}
                data-index={index}
                style={{ "--feature-delay": `${index * 90}ms` }}
                onClick={() => setActive(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={isCurrent}
                aria-label={`${feature.title}. Step ${index + 1} of ${features.length}`}
                className={`feature-stack__card group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-[1.35rem] outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2
                ${activeCard ? "is-active" : "is-idle"}
                ${isCurrent ? "is-current" : ""}
                ${
                  isDark
                    ? "feature-stack__card--dark focus-visible:ring-offset-slate-950"
                    : "feature-stack__card--light focus-visible:ring-offset-white"
                }`}
              >
                <span className="feature-stack__sheen" aria-hidden="true" />

                <div
                  className={`feature-stack__dot absolute -left-[2.35rem] sm:-left-[3.05rem] top-8 z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full
                  ${
                    activeCard
                      ? "is-lit bg-sky-500 text-white shadow-lg shadow-sky-500/35"
                      : isDark
                        ? "bg-slate-800 text-slate-500 ring-1 ring-white/10"
                        : "bg-sky-100 text-sky-400 ring-1 ring-sky-200"
                  }`}
                >
                  <span className="feature-stack__dot-ring" aria-hidden="true" />
                  {isCurrent && (
                    <span className="feature-stack__dot-pulse" aria-hidden="true" />
                  )}
                  <span className="relative z-[1] text-[10px] font-bold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="grid sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
                  <div className="feature-stack__media relative h-40 overflow-hidden sm:h-full sm:min-h-[180px] lg:min-h-[200px]">
                    <FeatureImage
                      src={feature.image}
                      alt={feature.imageAlt}
                      imgClassName="feature-stack__img absolute inset-0 h-full"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/15 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-slate-950/30" />
                    <div
                      className={`feature-stack__icon absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-lg backdrop-blur-md sm:h-11 sm:w-11
                      ${activeCard ? "bg-sky-500/95" : "bg-slate-950/55"}`}
                    >
                      <Icon className="text-sm sm:text-base" />
                    </div>
                    {isCurrent && (
                      <span className="feature-stack__live absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-slate-950/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-300 ring-1 ring-white/10 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        In focus
                      </span>
                    )}
                  </div>

                  <div className="relative flex flex-col justify-center p-5 sm:p-6 lg:p-7">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-[0.18em]
                        ${isDark ? "text-sky-400" : "text-sky-600"}`}
                      >
                        0{index + 1}
                      </span>
                      <h3
                        className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight ${
                          isDark ? "text-white" : "text-slate-950"
                        }`}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    <p
                      className={`mt-2 text-sm leading-6 sm:leading-7 ${
                        isDark ? "text-slate-300" : "text-neutral-700"
                      }`}
                    >
                      {feature.description}
                    </p>

                    {feature.tags?.length ? (
                      <div className="mt-3.5 flex flex-wrap gap-1.5 sm:mt-4">
                        {feature.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide sm:text-[11px]
                            ${
                              isDark
                                ? "bg-sky-500/10 text-sky-300 ring-1 ring-sky-400/20"
                                : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="mt-4 sm:mt-5">
                      <Link
                        to="/services"
                        onClick={(e) => e.stopPropagation()}
                        className={`feature-stack__cta inline-flex items-center gap-2 text-sm font-semibold transition
                        ${
                          isDark
                            ? "text-sky-300 hover:text-sky-200"
                            : "text-sky-700 hover:text-sky-900"
                        }`}
                      >
                        Explore services
                        <FaArrowRight className="text-[11px] transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const HomeFeatureProduct = ({ theme }) => {
  const isDark = theme === "dark";
  const plansRef = useRef(null);
  const [plansVisible, setPlansVisible] = useState(false);

  useEffect(() => {
    const node = plansRef.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlansVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlansVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    const failsafe = window.setTimeout(() => setPlansVisible(true), 1800);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 transition-colors duration-300">
      <div className="mx-auto max-w-4xl text-center">
        <span
          className={`inline-flex rounded-full px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em]
          ${
            isDark
              ? "bg-sky-500/15 text-sky-300"
              : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
          }`}
        >
          Featured Plans
        </span>

        <h2
          className={`mt-5 text-2xl sm:text-3xl font-bold leading-tight lg:text-4xl ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Structured advisory plans for
          <span className={`block mt-2 ${isDark ? "text-sky-400" : "text-sky-600"}`}>
            Smarter Trading & Investing
          </span>
        </h2>

        <p
          className={`mx-auto mt-5 max-w-3xl text-sm sm:text-base leading-7 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Bull Wave Capital provides professionally curated subscription plans
          designed for equity investors, F&O traders and long-term wealth
          creation through disciplined market research.
        </p>
      </div>

      <div
        ref={plansRef}
        className={`plans-grid mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 ${
          plansVisible ? "is-visible" : ""
        }`}
      >
        {plans.map((plan) => (
          <article
            key={plan.title}
              className={`group relative min-w-0 rounded-2xl sm:rounded-[1.35rem] p-5 sm:p-7 transition duration-300 hover:-translate-y-1 plan-card-anim
            ${plan.featured ? "featured-plan-card" : ""}
            ${
              plan.featured
                ? isDark
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20 ring-1 ring-sky-400"
                  : "bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg shadow-sky-500/25"
                : isDark
                  ? "bg-slate-900 ring-1 ring-white/10 text-white"
                  : "bg-white ring-1 ring-sky-100 shadow-[0_10px_30px_rgba(14,165,233,0.06)] text-slate-900"
            }`}
          >
            {plan.featured && (
              <span
                className={`mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider
                ${
                  isDark
                    ? "bg-slate-950/30 text-white"
                    : "bg-white/25 text-white ring-1 ring-white/30"
                }`}
              >
                Most Popular
              </span>
            )}

            <p
              className={`text-xs font-bold uppercase tracking-[0.2em]
              ${
                plan.featured
                  ? "text-sky-100"
                  : isDark
                    ? "text-slate-400"
                    : "text-slate-500"
              }`}
            >
              {plan.title}
            </p>

            <h3
              className={`mt-3 text-2xl sm:text-3xl font-bold leading-tight
              ${
                plan.featured
                  ? "text-white"
                  : isDark
                    ? "text-white"
                    : "text-slate-900"
              }`}
            >
              {plan.price}
            </h3>

            <p
              className={`mt-4 text-sm leading-7
              ${
                plan.featured
                  ? "text-sky-50"
                  : isDark
                    ? "text-slate-400"
                    : "text-slate-600"
              }`}
            >
              {plan.description}
            </p>

            <div
              className={`my-6 h-px
              ${
                plan.featured
                  ? "bg-white/25"
                  : isDark
                    ? "bg-slate-800"
                    : "bg-sky-100"
              }`}
            />

            <ul className="space-y-3">
              {plan.details.map((item) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 text-sm leading-6
                  ${
                    plan.featured
                      ? "text-white"
                      : isDark
                        ? "text-slate-300"
                        : "text-slate-700"
                  }`}
                >
                  <span
                    className={`mt-2 flex h-1.5 w-1.5 flex-shrink-0 rounded-full
                    ${
                      plan.featured
                        ? "bg-white"
                        : isDark
                          ? "bg-sky-400"
                          : "bg-sky-500"
                    }`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                to="/contact"
                className={`plan-cta ${
                  plan.featured
                    ? isDark
                      ? "plan-cta--featured-dark"
                      : "plan-cta--featured-light"
                    : isDark
                      ? "plan-cta--standard-dark"
                      : "plan-cta--standard-light"
                }`}
              >
                Contact
              </Link>
            </div>
          </article>
        ))}
      </div>

      <FeatureSection theme={theme} />

      <div
        className={`mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl px-5 py-10 sm:px-8 sm:py-12 text-center
        ${
          isDark
            ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 ring-1 ring-slate-700"
            : "bg-gradient-to-r from-sky-500 via-sky-600 to-sky-500 shadow-lg shadow-sky-500/20"
        }`}
      >
        <h3 className="text-xl sm:text-3xl font-bold text-white px-2">
          Ready to Trade with Confidence?
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-sky-50 leading-7 px-2">
          Join Bull Wave Capital and receive research-driven market insights,
          professional trading guidance, and portfolio strategies designed to
          help you make informed investment decisions.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            to="/markets"
            className="w-full rounded-xl bg-white px-8 py-3 text-center font-semibold !text-sky-700 transition hover:bg-sky-50 sm:w-auto"
          >
            Explore Market
          </Link>

          <Link
            to="/contact"
            className="w-full rounded-xl bg-white/15 px-8 py-3 text-center font-semibold !text-white ring-1 ring-white/30 transition hover:bg-white/25 sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureProduct;
