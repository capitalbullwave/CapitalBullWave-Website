import { useRef, useState, useEffect } from "react";
import {
  FaChartLine,
  FaShieldAlt,
  FaClipboardList,
  FaRocket,
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
  },
  {
    title: "Risk Management Planning",
    description:
      "Structured allocation and position sizing strategies to protect capital during market volatility.",
    icon: FaShieldAlt,
  },
  {
    title: "Portfolio Learning Plans",
    description:
      "Build disciplined investing habits through practical portfolio learning and continuous market education.",
    icon: FaClipboardList,
  },
  {
    title: "Intraday & Swing Support",
    description:
      "Timely trading updates during market hours to help capture short-term opportunities confidently.",
    icon: FaRocket,
  },
];

const FeatureSection = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const total = rect.height + viewportHeight;
      const current = viewportHeight - rect.top;
      const percentage = Math.min(Math.max((current / total) * 100, 0), 100);
      setProgress(percentage);

      const cards = sectionRef.current.querySelectorAll("[data-index]");
      let nextActive = 0;
      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < viewportHeight * 0.65) {
          nextActive = index;
        }
      });
      setActive(nextActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const circleTop = Math.min(Math.max(progress, 4), 96);

  return (
    <div
      ref={sectionRef}
      className={`mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10
      ${
        isDark
          ? "bg-slate-900/80 ring-1 ring-slate-800"
          : "bg-sky-50/70 ring-1 ring-sky-100"
      }`}
    >
      <div className="relative">
        <div
          className={`absolute left-4 lg:left-[30px] top-0 bottom-0 w-[3px] rounded-full ${
            isDark ? "bg-slate-800" : "bg-sky-200"
          }`}
        />
        <div
          className="absolute left-4 lg:left-[30px] top-0 w-[3px] rounded-full transition-all duration-300"
          style={{
            background: "linear-gradient(to bottom,#0ea5e9,#38bdf8)",
            height: `${progress}%`,
          }}
        />
        <div
          className="absolute z-20 left-4 lg:left-[30px] -translate-x-1/2 transition-all duration-300"
          style={{ top: `calc(${circleTop}% - 12px)` }}
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500">
            <div className="h-2 w-2 rounded-full bg-white" />
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6 w-full pl-12 sm:pl-14 lg:pl-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const activeCard = active >= index;
            return (
              <article
                key={feature.title}
                data-index={index}
                className={`relative rounded-xl p-4 sm:p-5 transition-all duration-500
                ${
                  activeCard
                    ? isDark
                      ? "bg-slate-800/90 ring-1 ring-sky-500/30 opacity-100"
                      : "bg-white ring-1 ring-sky-100 shadow-sm opacity-100"
                    : isDark
                      ? "bg-slate-900/40 opacity-50"
                      : "bg-white/50 opacity-55"
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500 text-white">
                  <Icon className="text-sm" />
                </div>
                <h3
                  className={`mt-3 text-base sm:text-lg font-semibold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-6 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {feature.description}
                </p>
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

      <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
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
