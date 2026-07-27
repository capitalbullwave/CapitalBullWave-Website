import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, ClipboardCheck, TrendingUp, ArrowRight } from "lucide-react";
import TradingAtmosphere from "./TradingAtmosphere";

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
        py-12 sm:py-16 lg:py-20
        transition-colors duration-300
      `}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl
        ${isDark ? "bg-sky-500/10" : "bg-sky-200/60"}`}
      />

      <TradingAtmosphere theme={theme} />

      <div className="relative z-10 w-full">
        <div className="flex justify-center">
          <span
            className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold
            ${
              isDark
                ? "bg-sky-500/15 text-sky-300"
                : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
            }`}
          >
            Skilled Trader Funding Program
          </span>
        </div>

        <h2
          className={`
            mt-5 text-center font-bold tracking-tight
            text-2xl sm:text-3xl md:text-4xl leading-tight
            ${isDark ? "text-white" : "text-black"}
          `}
        >
          Got the skill?{" "}
          <span className={isDark ? "text-sky-400" : "text-sky-600"}>
            We'll bring the capital.
          </span>
        </h2>

        <p
          className={`
            mx-auto mt-4 max-w-2xl text-center text-sm sm:text-base leading-relaxed
            ${isDark ? "text-slate-400" : "text-neutral-800"}
          `}
        >
          Know how to trade but don't have money to invest? Contact us and take
          our assessment. Pass it, and we'll fund your account — you keep{" "}
          <span
            className={`font-semibold ${isDark ? "text-slate-200" : "text-slate-800"}`}
          >
            30%
          </span>{" "}
          of the profit, no capital risk on your end.
        </p>

        <div className="mt-10 flex justify-center">
          <div
            className={`flex w-full max-w-md items-stretch overflow-hidden rounded-2xl shadow-sm
            ${isDark ? "ring-1 ring-slate-700" : "ring-1 ring-sky-100"}`}
          >
            <div
              className={`
                flex flex-1 flex-col items-center justify-center gap-1 px-4 py-5 sm:py-6
                ${isDark ? "bg-sky-500" : "bg-sky-500"}
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
                ${isDark ? "bg-slate-800" : "bg-white"}
              `}
            >
              <span
                className={`text-2xl sm:text-3xl font-bold ${
                  isDark ? "text-sky-300" : "text-sky-600"
                }`}
              >
                30%
              </span>
              <span
                className={`text-[11px] sm:text-xs font-medium uppercase tracking-wide ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Trader's share
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {steps.map(({ id, icon: Icon, title, desc }, idx) => (
            <div
              key={id}
              className={`relative flex flex-col items-center text-center rounded-2xl sm:rounded-[1.35rem] p-5 sm:p-7 transition hover:-translate-y-1
              ${
                isDark
                  ? "bg-slate-900/90 ring-1 ring-white/10"
                  : "bg-white ring-1 ring-sky-100 shadow-[0_10px_30px_rgba(14,165,233,0.06)]"
              }`}
            >
              {idx < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className={`
                    hidden md:block absolute top-[3.25rem] left-[calc(50%+2.75rem)]
                    h-px w-[calc(100%-3.5rem)] z-0
                    ${isDark ? "bg-slate-700" : "bg-sky-100"}
                  `}
                />
              )}

              <div
                className={`
                  relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl
                  ${isDark ? "bg-sky-500" : "bg-sky-500"}
                `}
              >
                <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                <span
                  className={`
                    absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center
                    rounded-full text-[10px] font-bold
                    ${
                      isDark
                        ? "bg-slate-950 text-sky-300 ring-1 ring-slate-700"
                        : "bg-white text-sky-700 ring-1 ring-sky-100 shadow-sm"
                    }
                  `}
                >
                  {id}
                </span>
              </div>

              <h3
                className={`mt-5 text-base sm:text-lg font-semibold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {title}
              </h3>
              <p
                className={`mt-2 max-w-xs text-sm leading-relaxed ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-3">
          <Link
            to="/contact"
            className={`
              group inline-flex w-full sm:w-auto items-center justify-center gap-2
              rounded-xl px-6 sm:px-8 py-3 sm:py-3.5
              text-sm sm:text-base font-semibold text-white
              transition-all duration-200 active:scale-[0.98]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2
              ${
                isDark
                  ? "bg-sky-500 hover:bg-sky-400 focus-visible:ring-offset-slate-950 shadow-lg shadow-sky-500/20"
                  : "bg-sky-600 hover:bg-sky-500 focus-visible:ring-offset-white shadow-lg shadow-sky-600/20"
              }
            `}
          >
            Contact Us
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </Link>
          <span
            className={`text-sm font-semibold ${
              isDark ? "text-slate-500" : "text-slate-500"
            }`}
          >
            No trading experience? This program isn't for you — yet.
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeTrading;
