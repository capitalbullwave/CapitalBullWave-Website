import { FaCheck, FaLayerGroup, FaShieldAlt, FaGraduationCap } from "react-icons/fa";
import SectionWave from "./SectionWave";

const choiceIcons = [FaLayerGroup, FaShieldAlt, FaGraduationCap];

const choices = [
  {
    title: "Structured Trading Plans",
    description:
      "Offers dedicated plans for equity swing traders and derivative traders focused on Nifty / BankNifty strategies.",
  },
  {
    title: "Risk Management Focus",
    description:
      "Built around capital protection and smart risk planning for active retail market participants.",
  },
  {
    title: "Investor Education",
    description:
      "Delivers market insight updates and educational frameworks to foster disciplined trading habits.",
  },
];

const benefits = [
  "Clear plan segmentation for equity and derivative traders.",
  "Research-backed buy and sell guidance with defined risk levels.",
  "Daily market direction updates for active participants.",
  "Portfolio review support for long-term investors.",
  "Risk-aware trading guidance with capital protection frameworks.",
  "Educational guidance to help traders adopt disciplined habits.",
];

const HomeChoose = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <SectionWave theme={theme}>
      <div className="home-choose w-full py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl text-center px-1">
          <p
            className={`inline-flex rounded-full px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em]
            ${
              isDark
                ? "bg-white/5 text-sky-200 ring-1 ring-white/15"
                : "bg-white/20 text-white ring-1 ring-white/35 backdrop-blur-sm"
            }`}
          >
            Why Choose Capital Bull Wave
          </p>
          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-white">
            Modern stock market research, advisory, and trading support designed
            for Indian markets.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base leading-7 text-sky-50/95 md:text-lg">
            Capital Bull Wave focuses on structured market research, active
            trading advice, and investor education to help traders and investors
            build confidence in equities and financial assets.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
          {choices.map((item, index) => {
            const Icon = choiceIcons[index];
            return (
              <article
                key={item.title}
                className={`home-choose-card group relative min-w-0 overflow-hidden rounded-2xl p-6 sm:p-7
                ${
                  isDark
                    ? "bg-slate-950/75 ring-1 ring-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                    : "bg-white/95 ring-1 ring-white/50 shadow-[0_16px_36px_rgba(3,105,161,0.14)]"
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 ${
                    isDark
                      ? "bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500"
                      : "bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
                  }`}
                />

                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl
                    ${
                      isDark
                        ? "bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/20"
                        : "bg-sky-50 text-sky-600 ring-1 ring-sky-100"
                    }`}
                  >
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </div>
                  <span
                    className={`text-xs font-bold tracking-[0.2em]
                    ${isDark ? "text-sky-500/80" : "text-sky-400"}`}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3
                  className={`mt-5 text-lg sm:text-xl font-bold leading-snug ${
                    isDark ? "text-white" : "text-slate-950"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-3 text-sm sm:text-[15px] leading-7 ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div
          className={`mt-8 sm:mt-12 overflow-hidden rounded-2xl sm:rounded-[1.75rem]
          ${
            isDark
              ? "bg-slate-950/45 ring-1 ring-white/10 backdrop-blur-md"
              : "bg-white/12 ring-1 ring-white/25 backdrop-blur-md"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="min-w-0 border-b border-white/15 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Core benefits at a glance
              </h3>
              <ul className="mt-6 space-y-3.5 sm:space-y-4">
                {benefits.map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 text-sm sm:text-[15px] leading-7 text-sky-50"
                  >
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full
                      ${
                        isDark
                          ? "bg-sky-500/20 text-sky-300 ring-1 ring-sky-400/25"
                          : "bg-white/90 text-sky-600 shadow-sm"
                      }`}
                    >
                      <FaCheck className="h-2.5 w-2.5" />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 p-6 sm:p-8 lg:p-10">
              <div
                className={`h-full rounded-2xl p-5 sm:p-7
                ${
                  isDark
                    ? "bg-slate-950/70 ring-1 ring-white/10"
                    : "bg-white/95 shadow-[0_12px_30px_rgba(3,105,161,0.12)]"
                }`}
              >
                <h3
                  className={`text-xl sm:text-2xl font-semibold tracking-tight ${
                    isDark ? "text-sky-300" : "text-sky-700"
                  }`}
                >
                  Platform overview
                </h3>
                <p
                  className={`mt-4 text-sm sm:text-[15px] leading-7 ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  The platform is positioned as a modern stock market investment and
                  research advisory service, with a strong focus on equity analysis,
                  active support, and investor education.
                </p>

                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  <div
                    className={`min-w-0 rounded-xl p-4
                    ${
                      isDark
                        ? "bg-slate-900/90 ring-1 ring-slate-700/80"
                        : "bg-sky-50 ring-1 ring-sky-100"
                    }`}
                  >
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                        isDark ? "text-sky-400" : "text-sky-600"
                      }`}
                    >
                      Core Plan
                    </p>
                    <p
                      className={`mt-2 text-sm leading-7 ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      Equity calls for swing and long-term investors over a 10–120
                      day horizon.
                    </p>
                  </div>

                  <div
                    className={`min-w-0 rounded-xl p-4
                    ${
                      isDark
                        ? "bg-slate-900/90 ring-1 ring-slate-700/80"
                        : "bg-sky-50 ring-1 ring-sky-100"
                    }`}
                  >
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                        isDark ? "text-sky-400" : "text-sky-600"
                      }`}
                    >
                      Elite Plan
                    </p>
                    <p
                      className={`mt-2 text-sm leading-7 ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      Nifty / BankNifty derivative signals, daily trend updates, and
                      reversal levels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWave>
  );
};

export default HomeChoose;
