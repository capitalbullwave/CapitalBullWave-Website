import SectionWave from "./SectionWave";

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
      <section className="w-full py-12 sm:py-16 lg:py-20 transition-colors duration-300">
        <div className="mx-auto max-w-4xl text-center">
          <p
            className={`inline-flex rounded-full px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em]
            ${
              isDark
                ? "bg-slate-950/40 text-sky-200 ring-1 ring-white/10"
                : "bg-white/20 text-white ring-1 ring-white/30 backdrop-blur-sm"
            }`}
          >
            Why Choose Capital Bull Wave
          </p>
          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-white">
            Modern stock market research, advisory, and trading support designed
            for Indian markets.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-sky-50 md:text-lg">
            Capital Bull Wave focuses on structured market research, active
            trading advice, and investor education to help traders and investors
            build confidence in equities and financial assets.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {choices.map((item) => (
            <article
              key={item.title}
              className={`min-w-0 rounded-2xl p-6 sm:p-8 shadow-lg backdrop-blur-sm transition hover:-translate-y-1
              ${
                isDark
                  ? "bg-slate-950/70 ring-1 ring-white/10 shadow-black/20"
                  : "bg-white/95 ring-1 ring-white/40 shadow-sky-900/10"
              }`}
            >
              <h3
                className={`text-lg sm:text-xl font-bold ${
                  isDark ? "text-sky-300" : "text-sky-700"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-3 text-sm sm:text-base leading-7 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div
          className={`mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10
          ${
            isDark
              ? "bg-slate-950/35 ring-1 ring-white/10 backdrop-blur-md"
              : "bg-white/15 ring-1 ring-white/25 backdrop-blur-md"
          }`}
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Core benefits at a glance
              </h3>
              <ul className="mt-6 space-y-3 sm:space-y-4">
                {benefits.map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 text-sm sm:text-base leading-7 text-sky-50"
                  >
                    <span className="mt-2 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`min-w-0 rounded-2xl p-5 sm:p-8 shadow-lg
              ${
                isDark
                  ? "bg-slate-950/70 ring-1 ring-white/10 text-slate-200"
                  : "bg-white/95 text-slate-700"
              }`}
            >
              <h3
                className={`text-xl sm:text-2xl font-semibold ${
                  isDark ? "text-sky-300" : "text-sky-700"
                }`}
              >
                Platform overview
              </h3>
              <p
                className={`mt-4 text-sm sm:text-base leading-7 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                The platform is positioned as a modern stock market investment and
                research advisory service, with a strong focus on equity analysis,
                active support, and investor education.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div
                  className={`min-w-0 rounded-xl p-4
                  ${
                    isDark
                      ? "bg-slate-900/80 ring-1 ring-slate-700"
                      : "bg-sky-50 ring-1 ring-sky-100"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.2em] ${
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
                      ? "bg-slate-900/80 ring-1 ring-slate-700"
                      : "bg-sky-50 ring-1 ring-sky-100"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.2em] ${
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
      </section>
    </SectionWave>
  );
};

export default HomeChoose;
