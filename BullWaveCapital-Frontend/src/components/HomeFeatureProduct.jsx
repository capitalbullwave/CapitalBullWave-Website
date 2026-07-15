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
      "Entry-level guidance for short-term and swing traders, focused on fundamentally strong equity opportunities.",
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
                  ? "border-blue-500/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950"
                  : "border-blue-500 bg-gradient-to-br from-blue-50 via-white to-sky-50"
                : isDark
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
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

              <p
                className={`text-sm font-bold uppercase tracking-[0.28em]
                ${
                  isDark
                    ? "text-blue-300"
                    : "text-blue-600"
                }`}
              >
                {plan.title}
              </p>

              <h3
                className={`mt-4 text-3xl font-bold leading-tight
                  ${
                    plan.featured
                      ? isDark
                        ? "text-white"
                        : "text-slate-900"
                      : isDark
                        ? "text-white"
                        : "text-slate-900"
                  }`}
              >
                {plan.price}
              </h3>

              <p
                className={`mt-5 leading-8
                  ${
                    plan.featured
                      ? isDark
                        ? "text-slate-300"
                        : "text-slate-600"
                      : isDark
                        ? "text-slate-300"
                        : "text-slate-600"
                  }`}
              >
                {plan.description}
              </p>
            </div>

            {/* Divider */}

            <div
              className={`my-8 h-px
              ${
                plan.featured
                  ? isDark
                    ? "bg-blue-500/30"
                    : "bg-blue-200"
                  : isDark
                    ? "bg-slate-700"
                    : "bg-slate-200"
              }`}
            />

            {/* Features */}

            <ul className="space-y-5">
              {plan.details.map((item) => (
                <li
                  key={item}
                  className={`flex items-start gap-4 ${
                    isDark ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  <span className="mt-2 flex h-3 w-3 flex-shrink-0 rounded-full bg-blue-600"></span>

                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>

          </article>
        ))}
      </div>

      {/* Features Section Starts Here */}

      <div
        className={`mt-20 rounded-[32px] border p-8 sm:p-10 lg:p-12 transition-all duration-500
          ${
            isDark
              ? "border-slate-700 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              : "border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-xl"
          }`}
      >
        <div className="grid gap-7 lg:grid-cols-2">          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`group rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-2
                ${
                  isDark
                    ? "border-slate-700 bg-slate-900 hover:border-blue-500 hover:shadow-[0_20px_60px_rgba(37,99,235,0.2)]"
                    : "border-slate-200 bg-white hover:border-blue-400 hover:shadow-[0_20px_60px_rgba(37,99,235,0.18)]"
                }`}
              >
                {/* Icon */}

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110
                  ${
                    isDark
                      ? "bg-blue-500 text-white"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  <Icon className="text-xl" />
                </div>

                {/* Title */}

                <h3
                  className={`mt-6 text-2xl font-bold transition-colors duration-300
                  ${
                    isDark
                      ? "text-white group-hover:text-blue-300"
                      : "text-slate-900 group-hover:text-blue-700"
                  }`}
                >
                  {feature.title}
                </h3>

                {/* Description */}

                <p
                  className={`mt-4 leading-8
                  ${
                    isDark
                      ? "text-slate-300"
                      : "text-slate-600"
                  }`}
                >
                  {feature.description}
                </p>

                {/* Bottom Line */}

                <div
                  className={`mt-6 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-24
                  ${
                    isDark
                      ? "bg-blue-500"
                      : "bg-blue-600"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
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