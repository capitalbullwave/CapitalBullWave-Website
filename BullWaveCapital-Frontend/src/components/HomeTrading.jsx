import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, ClipboardCheck, TrendingUp, ArrowRight } from "lucide-react";

/**
 * HomeTrading
 * Place directly below <Hero /> on the Home page.
 * Theme is controlled via the `theme` prop ("light" | "dark") passed down
 * from the page, not Tailwind's `dark:` class strategy.
 *
 * Requires:
 *  - react-router-dom (for the /contact redirect)
 *  - lucide-react (icons)
 */
const steps = [
  {
    id: "01",
    icon: PhoneCall,
    title: "You reach out",
    desc: "Know how to trade but don't have the capital to back it? Contact us and tell us about your strategy and experience.",
  },
  {
    id: "02",
    icon: ClipboardCheck,
    title: "You take the test",
    desc: "We evaluate your trading skill with a structured assessment. It's how we make sure your strategy is ready for real capital.",
  },
  {
    id: "03",
    icon: TrendingUp,
    title: "You trade our capital",
    desc: "Pass the test and we fund your account. You trade, we split the profits — simple as that.",
  },
];

const HomeTrading = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`
        relative w-full overflow-hidden
        rounded-t-[2.5rem] sm:rounded-t-[3.5rem]
        py-16 sm:py-20 lg:py-28
        transition-colors duration-300 mt-4 border border-blue-400 rounded-xl 
        ${isDark ? "bg-slate-950" : "bg-white"}
      `}
    >
      {/* Ambient sky-blue glow accents */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute -top-24 -left-24 h-72 w-72 sm:h-96 sm:w-96
          rounded-full blur-3xl
          ${isDark ? "bg-sky-500/10" : "bg-sky-300/50"}
        `}
      />
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 sm:h-96 sm:w-96
          rounded-full blur-3xl
          ${isDark ? "bg-sky-400/10" : "bg-sky-100/70"}
        `}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <span
            className={`
              inline-flex items-center gap-2 rounded-full border px-4 py-1.5
              text-xs sm:text-sm font-medium
              ${
                isDark
                  ? "border-sky-800 bg-sky-900/30 text-sky-300"
                  : "border-sky-200 bg-sky-50 text-sky-700"
              }
            `}
          >
            Skilled Trader Funding Program
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`
            mt-5 text-center font-bold tracking-tight
            text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-tight
            ${isDark ? "text-white" : "text-slate-900"}
          `}
        >
          Got the skill?{" "}
          <span className={isDark ? "text-sky-400" : "text-sky-600"}>
            We'll bring the capital.
          </span>
        </h2>

        <div
          aria-hidden="true"
          className={`
            pointer-events-none absolute top-24 left-24 h-72 w-72 sm:h-96 sm:w-96
            rounded-full blur-3xl
            ${isDark ? "bg-sky-500/10" : "bg-sky-300/50"}
          `}
        />

        <p
          className={`
            mx-auto mt-4 max-w-2xl text-center text-sm sm:text-base leading-relaxed
            ${isDark ? "text-slate-400" : "text-slate-600"}
          `}
        >
          Know how to trade but don't have money to invest? Contact us and take
          our assessment. Pass it, and we'll fund your account — you keep{" "}
          <span className={`font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
            30%
          </span>{" "}
          of the profit, no capital risk on your end.
        </p>

        {/* Profit split highlight */}
        <div className="mt-8 flex justify-center">
          <div
            className={`
              flex w-full max-w-md items-stretch overflow-hidden rounded-3xl border shadow-sm
              ${isDark ? "border-slate-800" : "border-sky-100"}
            `}
          >
            <div
              className={`
                flex flex-1 flex-col items-center justify-center gap-1 px-4 py-5 sm:py-6
                ${isDark ? "bg-sky-500" : "bg-sky-600"}
              `}
            >
              <span className="text-2xl sm:text-3xl font-bold text-white">70%</span>
              <span className="text-[11px] sm:text-xs font-medium uppercase tracking-wide text-sky-100">
                Our share
              </span>
            </div>

            <div
              className={`
                flex flex-1 flex-col items-center justify-center gap-1 px-4 py-5 sm:py-6
                ${isDark ? "bg-slate-800" : "bg-sky-50"}
              `}
            >
              <span className={`text-2xl sm:text-3xl font-bold ${isDark ? "text-sky-300" : "text-sky-700"}`}>
                30%
              </span>
              <span
                className={`text-[11px] sm:text-xs font-medium uppercase tracking-wide ${
                  isDark ? "text-slate-400" : "text-sky-700/70"
                }`}
              >
                Trader's share
              </span>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {steps.map(({ id, icon: Icon, title, desc }, idx) => (
            <div key={id} className="relative flex flex-col items-center text-center">
              {/* Connector line (desktop only) */}
              {idx < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className={`
                    hidden md:block absolute top-8 left-[calc(50%+2.5rem)]
                    h-px w-[calc(100%-5rem)]
                    ${isDark ? "bg-gradient-to-r from-sky-700 to-slate-800" : "bg-gradient-to-r from-sky-300 to-sky-100"}
                  `}
                />
              )}

              <div
                className={`
                  relative z-10 flex h-16 w-16 items-center justify-center rounded-3xl shadow-lg
                  ${isDark ? "bg-sky-500 shadow-sky-500/10" : "bg-sky-600 shadow-sky-600/20"}
                `}
              >
                <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                <span
                  className={`
                    absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center
                    rounded-full border text-[10px] font-bold
                    ${
                      isDark
                        ? "bg-slate-900 border-sky-700 text-sky-300"
                        : "bg-white border-sky-200 text-sky-700"
                    }
                  `}
                >
                  {id}
                </span>
              </div>

              <h3 className={`mt-5 text-base sm:text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                {title}
              </h3>
              <p className={`mt-2 max-w-xs text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-3">
          <Link
            to="/contact"
            className={`
              group inline-flex w-full sm:w-auto items-center justify-center gap-2
              rounded-full px-6 sm:px-8 py-3 sm:py-3.5
              text-sm sm:text-base font-semibold text-white
              shadow-md transition-all duration-200 active:scale-[0.98]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2
              ${
                isDark
                  ? "bg-sky-500 shadow-sky-500/20 hover:bg-sky-400 focus-visible:ring-offset-slate-950"
                  : "bg-sky-600 shadow-sky-600/25 hover:bg-sky-700 focus-visible:ring-offset-white"
              }
            `}
          >
            Contact Us
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </Link>
          <span className={`text-md semibold ${isDark ? "text-slate-500" : "text-slate-500"}`}>
            No trading experience? This program isn't for you — yet.
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeTrading;
