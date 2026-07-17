import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, ClipboardCheck, TrendingUp, ArrowRight } from "lucide-react";

/**
 * TradingProgramSection
 * Place this component directly below your Hero section.
 *
 * Requires:
 *  - react-router-dom (for the /contact redirect)
 *  - lucide-react (icons)
 *  - Tailwind dark mode strategy set to "class" in tailwind.config.js
 *      module.exports = { darkMode: "class", ... }
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

export default function HomeTrading() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-white dark:bg-slate-950
        py-16 sm:py-20 lg:py-28
        transition-colors duration-300
      "
    >
      {/* Ambient sky-blue glow accents */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -top-24 -left-24 h-72 w-72 sm:h-96 sm:w-96
          rounded-full bg-sky-300/30 dark:bg-sky-500/10 blur-3xl
        "
      />
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 sm:h-96 sm:w-96
          rounded-full bg-sky-400/20 dark:bg-sky-400/10 blur-3xl
        "
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <span
            className="
              inline-flex items-center gap-2 rounded-full
              border border-sky-200 bg-sky-50 px-4 py-1.5
              text-xs sm:text-sm font-medium text-sky-700
              dark:border-sky-800 dark:bg-sky-900/30 dark:text-sky-300
            "
          >
            Skilled Trader Funding Program
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            mt-5 text-center font-bold tracking-tight
            text-slate-900 dark:text-white
            text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem]
            leading-tight
          "
        >
          Got the skill?{" "}
          <span className="text-sky-600 dark:text-sky-400">
            We'll bring the capital.
          </span>
        </h2>

        <p
          className="
            mx-auto mt-4 max-w-2xl text-center
            text-sm sm:text-base
            text-slate-600 dark:text-slate-400
            leading-relaxed
          "
        >
          Know how to trade but don't have money to invest? Contact us and take
          our assessment. Pass it, and we'll fund your account — you keep{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            30%
          </span>{" "}
          of the profit, no capital risk on your end.
        </p>

        {/* Profit split highlight */}
        <div className="mt-8 flex justify-center">
          <div
            className="
              flex w-full max-w-md items-stretch overflow-hidden rounded-2xl
              border border-slate-200 dark:border-slate-800
              shadow-sm
            "
          >
            <div
              className="
                flex flex-1 flex-col items-center justify-center gap-1
                bg-sky-600 dark:bg-sky-500
                px-4 py-5 sm:py-6
              "
            >
              <span className="text-2xl sm:text-3xl font-bold text-white">
                70%
              </span>
              <span className="text-[11px] sm:text-xs font-medium uppercase tracking-wide text-sky-100">
                Our share
              </span>
            </div>
            <div
              className="
                flex flex-1 flex-col items-center justify-center gap-1
                bg-sky-100 dark:bg-slate-800
                px-4 py-5 sm:py-6
              "
            >
              <span className="text-2xl sm:text-3xl font-bold text-sky-700 dark:text-sky-300">
                30%
              </span>
              <span className="text-[11px] sm:text-xs font-medium uppercase tracking-wide text-sky-700/70 dark:text-slate-400">
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
                  className="
                    hidden md:block absolute top-8 left-[calc(50%+2.5rem)]
                    h-px w-[calc(100%-5rem)]
                    bg-gradient-to-r from-sky-300 to-sky-100
                    dark:from-sky-700 dark:to-slate-800
                  "
                />
              )}

              <div
                className="
                  relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl
                  bg-sky-600 dark:bg-sky-500
                  shadow-lg shadow-sky-600/20 dark:shadow-sky-500/10
                "
              >
                <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                <span
                  className="
                    absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center
                    rounded-full bg-white dark:bg-slate-900
                    border border-sky-200 dark:border-sky-700
                    text-[10px] font-bold text-sky-700 dark:text-sky-300
                  "
                >
                  {id}
                </span>
              </div>

              <h3 className="mt-5 text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-3">
          <Link
            to="/contact"
            className="
              group inline-flex items-center justify-center gap-2
              rounded-full bg-sky-600 dark:bg-sky-500
              px-6 sm:px-8 py-3 sm:py-3.5
              text-sm sm:text-base font-semibold text-white
              shadow-md shadow-sky-600/25 dark:shadow-sky-500/20
              transition-all duration-200
              hover:bg-sky-700 dark:hover:bg-sky-400
              hover:shadow-lg hover:shadow-sky-600/30
              focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-slate-950
              active:scale-[0.98]
              w-full sm:w-auto
            "
          >
            Contact Us
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </Link>
          <span className="text-xs text-slate-500 dark:text-slate-500">
            No trading experience? This program isn't for you — yet.
          </span>
        </div>
      </div>
    </section>
  );
}
