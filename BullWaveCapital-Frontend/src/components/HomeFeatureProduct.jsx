import { useRef, useState, useEffect } from "react";
import {
  FaChartLine,
  FaShieldAlt,
  FaClipboardList,
  FaRocket,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const plans = [
  {
    title: "Core / Starter Plan",
    price: "₹999 - ₹3,999 / month",
    description:
      "Entry-level guidance for swing traders, focused on fundamentally  equity opportunities.",
    details: [
      "12–15 equity recommendations every month",
      "Momentum-based stock selection",
      "Actionable buy & sell guidance",
    ],
  },
  {
    title: "Elite Plan / Pro Trader",
    price: "₹5,199 - ₹5,999 / month",
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
    price: "₹9,999 / month",
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

  // Scroll progress loader
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const current =
        window.scrollY -
        sectionRef.current.offsetTop +
        window.innerHeight * 0.3;

      const value = Math.max(0, Math.min((current / rect.height) * 100, 100));
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    // Scroll progress loader
    useEffect(() => {
      const handleScroll = () => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Total distance the section travels through the viewport
        const total = rect.height + viewportHeight;

        // How far the section has moved through the viewport
        const current = viewportHeight - rect.top;

        const percentage = Math.min(
          Math.max((current / total) * 100, 0),
          100
        );

        setProgress(percentage);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleScroll);

      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }, []);

      const line = isDark ? "#38bdf8" : "#2563EB";
      const text = isDark ? "text-slate-200" : "text-slate-700";
      const card = isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200";

      return (
        <div
          ref={sectionRef}
          className={`mt-8 rounded-[24px] border p-6 sm:p-8 lg:p-10 transition-all duration-500 ${
            isDark
              ? "border-slate-700 bg-slate-950 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              : "border-slate-200 bg-slate-50 shadow-md"
          }`}
        >
          <div className="relative flex flex-col lg:grid lg:grid-cols-[60px_1fr] gap-6">
        {/* Timeline */}
        <div className="relative flex justify-center lg:justify-start min-h-full">
          {/* Background Line */}
          <div
            className={`absolute left-1/2 lg:left-0 top-0 h-full w-[4px] -translate-x-1/2 lg:translate-x-0 rounded-full ${
              isDark
                ? "bg-gradient-to-b from-slate-700 to-slate-800"
                : "bg-gradient-to-b from-slate-200 to-slate-300"
            }`}
          />
          {/* Progress Line */}
          <div
            className="absolute left-1/2 lg:left-0 top-0 w-[4px] -translate-x-1/2 lg:translate-x-0 rounded-full transition-all duration-300"
            style={{
              background: `linear-gradient(to bottom,#2563eb,#38bdf8)`,
              height: `${progress}%`,
            }}
          />
          {/* Loader Circle aligned on line */}
          <div
            className="absolute z-20 transition-all duration-300"
            style={{
              top: `calc(${progress}% - 16px)`,
              left: "6%",
              transform: "translateX(-50%)",
            }}
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 h-8 w-8 rounded-full bg-blue-400/40 blur-md animate-pulse"></div>

              {/* Circle */}
              <div
                className={`relative flex h-8 w-8 items-center justify-center rounded-full border-4 ${
                  isDark
                    ? "border-blue-400 bg-slate-900"
                              : "border-blue-600 bg-white"
                          } shadow-xl`}
                        >
                          <div className="h-3 w-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400"></div>
                        </div>
                      </div>

                    </div>

                {/* Feature Cards */}
                <div className="space-y-6 sm:space-y-8">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    const activeCard = active >= index;
                    return (
                      <article
                        key={feature.title}
                        data-index={index}
                        className={`feature-card relative rounded-2xl border p-5 transition-all duration-500 ${
                          activeCard
                            ? "scale-[1.01] shadow-[0_10px_30px_rgba(37,99,235,.15)]"
                            : "shadow-sm"
                        } ${card}`}
                      >
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                            isDark ? "bg-blue-500 text-white" : "bg-blue-600 text-white"
                          }`}
                        >
                          <Icon className="text-lg" />
                        </div>
                        <h3
                          className={`mt-4 text-lg sm:text-xl font-semibold ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <p className={`mt-2 text-sm leading-6 ${text}`}>{feature.description}</p>
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
    <section
      className={`mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 transition-colors duration-300 ${
        isDark ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Heading */}

      <div className="mx-auto max-w-4xl text-center">

        <span
          className={`inline-flex rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.35em]
          ${
            isDark
              ? "bg-blue-600/20 text-blue-300"
              : "bg-blue-50 text-blue-700"
          }`}
        >
          Featured Plans
        </span>

        <h2
          className={`mt-6 text-3xl font-bold leading-tight sm:text-5xl ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Structured advisory plans for
          <span className="block mt-2 text-blue-600">
            Smarter Trading & Investing
          </span>
        </h2>

        <p
          className={`mx-auto mt-6 max-w-3xl text-lg leading-8 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Bull Wave Capital provides professionally curated subscription
          plans designed for equity investors, F&O traders and long-term
          wealth creation through disciplined market research.
        </p>

      </div>

      {/* Pricing Cards */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`group relative isolate overflow-hidden rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
            ${
              plan.featured
                ? isDark
                  ? "border-blue-500/70 bg-slate-900 text-white"
                  : "border-blue-500 bg-sky-600 text-white"
                : isDark
                  ? "border-slate-700 bg-slate-900 text-white"
                  : "border-slate-200 bg-sky-400 text-white"
            }`}
          >
            {/* Glow Effect */}
            <div
              className={`absolute -top-20 -right-20 h-56 w-56 rounded-full blur-[90px] -z-10
              ${
                plan.featured
                  ? "bg-blue-500/20"
                  : "bg-blue-500/10 opacity-0 group-hover:opacity-100"
              }`}
            />

            {/* Badge */}
            {plan.featured && (
              <span
                className="absolute right-6 top-2 rounded-full bg-gradient-to-r
                from-blue-600 to-indigo-600 px-4 py-1 text-[10px]
                font-bold uppercase tracking-wider text-white shadow-xl"
              >
                Most Popular
              </span>
            )}

            {/* Header */}
            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white">
                {plan.title}
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-white">
                {plan.price}
              </h3>

              <p className="mt-5 leading-8 text-white">
                {plan.description}
              </p>
            </div>

            {/* Divider */}
            <div
              className={`my-8 h-px
              ${
                plan.featured
                  ? "bg-blue-200"
                  : "bg-blue-300"
              }`}
            />

            {/* Features */}
            <ul className="space-y-5">
              {plan.details.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-white"
                >
                  <span className="mt-2 flex h-3 w-3 flex-shrink-0 rounded-full bg-blue-600"></span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>

            {/* Contact Option */}
            <div className="mt-8 flex justify-between items-center">
              <span className="text-sm font-semibold opacity-70 text-white">
                Capital BullWave
              </span>
              <Link
                to="/contact"
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition hover:scale-105 ${
                  isDark
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "bg-blue-900 text-white hover:bg-blue-700"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z"
                  />
                </svg>
                Contact
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Features Section Starts Here */}

      <FeatureSection />

          {/* Bottom CTA */}

      <div
        className={`mt-16 rounded-3xl overflow-hidden px-8 py-10 text-center transition-all duration-300
        ${
          isDark
            ? "bg-gradient-to-r from-slate-800 via-blue-700 to-slate-950"
            : "bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600"
        }`}
      >
        <h3 className="text-3xl font-bold text-white">
          Ready to Trade with Confidence?
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100 leading-8">
          Join Bull Wave Capital and receive research-driven market insights,
          professional trading guidance, and portfolio strategies designed to
          help you make informed investment decisions.
        </p>

        <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/markets"
            className="w-full rounded-xl bg-white px-8 py-3 text-center font-semibold text-blue-700 transition duration-300 hover:scale-105 hover:bg-slate-100 hover:shadow-xl sm:w-auto"
          >
            Explore Market
          </Link>

          <Link
            to="/contact"
            className={`w-full rounded-xl border-2 px-8 py-3 text-center font-semibold transition-all duration-300 hover:scale-105 sm:w-auto
            ${
              isDark
                ? "border-white text-white hover:bg-white hover:!text-blue-900"
                : "border-white/90 bg-white/10 text-white hover:bg-white hover:!text-blue-700"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>

    </section>
  );
};

export default HomeFeatureProduct;