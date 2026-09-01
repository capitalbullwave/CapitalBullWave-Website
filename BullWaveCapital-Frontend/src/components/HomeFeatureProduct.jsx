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
    tags: ["Price action", "Trend analysis", "Support & resistance"],
  },
  {
    title: "Risk Management Planning",
    description:
      "Structured allocation and position sizing strategies to protect capital during market volatility.",
    icon: FaShieldAlt,
    tags: ["Capital protection", "Position sizing", "Volatility control"],
  },
  {
    title: "Portfolio Learning Plans",
    description:
      "Build disciplined investing habits through practical portfolio learning and continuous market education.",
    icon: FaClipboardList,
    tags: ["Education", "Discipline", "Portfolio habits"],
  },
  {
    title: "Intraday & Swing Support",
    description:
      "Timely trading updates during market hours to help capture short-term opportunities confidently.",
    icon: FaRocket,
    tags: ["Intraday", "Swing setups", "Live updates"],
  },
];

const FeatureSection = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
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
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
    );
    observer.observe(node);
    const failsafe = window.setTimeout(() => setInView(true), 1800);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`impl-plan relative mt-12 overflow-hidden rounded-2xl sm:mt-16 sm:rounded-[1.75rem]
      ${
        isDark
          ? "impl-plan--dark bg-slate-950 ring-1 ring-white/10"
          : "impl-plan--light bg-white ring-1 ring-sky-100 shadow-[0_20px_55px_rgba(14,165,233,0.1)]"
      }
      ${inView ? "impl-plan--inview" : ""}`}
    >
      <div className="impl-plan__wave impl-plan__wave--tl" aria-hidden="true" />
      <div className="impl-plan__wave impl-plan__wave--tr" aria-hidden="true" />

      <div className="relative px-4 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10 lg:px-10 lg:pt-12">
        <div className="text-center">
          <span
            className={`inline-flex rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs
            ${
              isDark
                ? "bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/20"
                : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
            }`}
          >
            How We Support You
          </span>
          <h3
            className={`impl-plan__heading mt-3 text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl ${
              isDark ? "text-white" : "text-[#0b3a66]"
            }`}
          >
            Research-led guidance, step by step
          </h3>
          <p
            className={`mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:text-base ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Four connected capabilities — from trading ideas to risk control —
            designed to keep decisions clear, disciplined, and actionable.
          </p>
        </div>

        <div className="mt-8 grid items-center gap-8 lg:mt-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-10 xl:gap-14">
          {/* Circular capability orb */}
          <div className="impl-plan__orb-wrap mx-auto w-full max-w-[19rem] sm:max-w-[22rem] lg:max-w-[24rem]">
            <div
              className="impl-plan__orb"
              role="tablist"
              aria-label="Support capabilities"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = active === index;
                return (
                  <button
                    key={feature.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`impl-panel-${index}`}
                    id={`impl-tab-${index}`}
                    className={`impl-plan__seg impl-plan__seg--${index} ${
                      isActive ? "is-active" : ""
                    }`}
                    style={{ "--i": index }}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                  >
                    <span className="impl-plan__seg-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="absolute -left-[9999px] h-px w-px overflow-hidden">
                      {feature.title}
                    </span>
                  </button>
                );
              })}
              <div className="impl-plan__core" aria-hidden="true">
                <span className="impl-plan__core-ring" />
              </div>
            </div>
          </div>

          {/* 2x2 content grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = active === index;
              return (
                <article
                  key={feature.title}
                  id={`impl-panel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`impl-tab-${index}`}
                  style={{ "--i": index }}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  tabIndex={0}
                  className={`impl-plan__card outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 ${
                    isActive ? "is-active" : ""
                  } ${
                    isDark
                      ? "focus-visible:ring-offset-slate-950"
                      : "focus-visible:ring-offset-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`impl-plan__card-icon mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white sm:h-10 sm:w-10 ${
                        index % 2 === 0 ? "bg-sky-500" : "bg-[#0b3a66]"
                      }`}
                      aria-hidden="true"
                    >
                      <Icon className="text-sm sm:text-base" />
                    </span>
                    <div className="min-w-0">
                      <h4
                        className={`text-base font-bold tracking-tight sm:text-lg ${
                          isDark ? "text-white" : "text-[#0b3a66]"
                        }`}
                      >
                        {feature.title}
                      </h4>
                      <p
                        className={`mt-1.5 text-sm leading-6 sm:leading-7 ${
                          isDark ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {feature.description}
                      </p>
                      {feature.tags?.length ? (
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {feature.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
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
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            to="/services"
            className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition sm:px-6 ${
              isDark
                ? "bg-sky-500 text-white hover:bg-sky-400"
                : "bg-[#0b3a66] text-white hover:bg-sky-700"
            }`}
          >
            Explore services
            <FaArrowRight className="text-[11px]" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="impl-plan__footer" aria-hidden="true">
        <span className="impl-plan__footer-accent" />
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
                className={`plan-cta w-full justify-center sm:w-auto ${
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

      <div className="bw-cta relative mt-12 overflow-hidden rounded-2xl sm:mt-16 sm:rounded-[1.75rem]">
        <div
          className={`bw-cta__panel relative px-5 py-10 text-center sm:px-8 sm:py-12 lg:px-12 lg:py-14 ${
            isDark ? "bw-cta__panel--dark" : "bw-cta__panel--light"
          }`}
        >
          <span className="bw-cta__orb bw-cta__orb--1" aria-hidden="true" />
          <span className="bw-cta__orb bw-cta__orb--2" aria-hidden="true" />
          <span className="bw-cta__sheen" aria-hidden="true" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p
              className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs ${
                isDark
                  ? "bg-white/10 text-sky-200 ring-1 ring-white/15"
                  : "bg-white/25 text-white ring-1 ring-white/35"
              }`}
            >
              Next step
            </p>

            <h3 className="mt-4 text-xl font-bold tracking-tight text-white sm:mt-5 sm:text-3xl lg:text-[2.1rem]">
              Ready to Trade with Confidence?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-sky-50/95 sm:mt-4 sm:text-base sm:leading-7">
              Join Bull Wave Capital and receive research-driven market insights,
              professional trading guidance, and portfolio strategies designed to
              help you make informed investment decisions.
            </p>

            <div className="mt-7 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Link
                to="/markets"
                className="bw-cta__btn bw-cta__btn--primary inline-flex min-h-11 items-center justify-center rounded-xl px-7 py-3 text-center text-sm font-semibold sm:min-w-[10.5rem] sm:px-8 sm:text-[15px]"
              >
                Explore Market
              </Link>

              <Link
                to="/contact"
                className="bw-cta__btn bw-cta__btn--ghost inline-flex min-h-11 items-center justify-center rounded-xl px-7 py-3 text-center text-sm font-semibold sm:min-w-[10.5rem] sm:px-8 sm:text-[15px]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureProduct;
