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

const HomeChoose = ({ theme }) => {
  return (
    <SectionWave theme={theme}>
      <section
        className={`mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 transition-colors duration-300`}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p
            className={`inline-flex rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] backdrop-blur-md border ${
              theme === "dark"
                ? "bg-slate-900/70 border-slate-700 text-slate-200"
                : "bg-white/20 border-white/30 text-white"
            }`}
          >
            Why Choose Capital Bull Wave
          </p>
          <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold leading-tight tracking-tight text-white px-2 sm:px-0">
            Modern stock market research, advisory, and trading support designed for Indian markets.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-100 md:text-lg px-2 sm:px-0">
            Capital Bull Wave focuses on structured market research, active trading advice, and investor education to help traders and investors build confidence in equities and financial assets.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
          {choices.map((item) => (
            <article
              key={item.title}
              className="
                group
                rounded-2xl sm:rounded-[28px]
                border border-slate-200
                bg-white
                p-6 sm:p-8
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500
                hover:shadow-2xl
                min-w-0
              "
            >
              <h3 className="text-xl sm:text-2xl font-bold text-sky-700 group-hover:text-blue-600 break-words">
                {item.title}
              </h3>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-600 leading-6 sm:leading-8 break-words">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-[32px] border border-slate-200 bg-slate-50 p-5 sm:p-8 md:p-10 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
            {/* Core benefits at a glance */}
            <div className="min-w-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 break-words">
                Core benefits at a glance
              </h3>
              <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 text-slate-600">
                <li className="flex items-start gap-3 text-sm sm:text-base leading-6 sm:leading-7">
                  <span className="mt-1.5 sm:mt-1 inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full bg-blue-600" />
                  <span className="min-w-0 break-words">
                    Clear plan segmentation for equity and derivative traders.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base leading-6 sm:leading-7">
                  <span className="mt-1.5 sm:mt-1 inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full bg-blue-600" />
                  <span className="min-w-0 break-words">
                    Fills orders immediately at the best available current market price.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base leading-6 sm:leading-7">
                  <span className="mt-1.5 sm:mt-1 inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full bg-blue-600" />
                  <span className="min-w-0 break-words">
                    Displays a clear visual of liquidity levels and volume at different price points.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base leading-6 sm:leading-7">
                  <span className="mt-1.5 sm:mt-1 inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full bg-blue-600" />
                  <span className="min-w-0 break-words">
                    Permits opening opposing positions on the exact same financial instrument simultaneously.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base leading-6 sm:leading-7">
                  <span className="mt-1.5 sm:mt-1 inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full bg-blue-600" />
                  <span className="min-w-0 break-words">
                    Risk-aware trading guidance with capital protection frameworks.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base leading-6 sm:leading-7">
                  <span className="mt-1.5 sm:mt-1 inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full bg-blue-600" />
                  <span className="min-w-0 break-words">
                    Educational guidance to help traders adopt disciplined habits.
                  </span>
                </li>
              </ul>
            </div>

            {/* Platform overview */}
            <div className="rounded-2xl sm:rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-8 w-full min-w-0">
              <h3 className="text-lg sm:text-2xl font-semibold text-blue-400 break-words">
                Platform overview
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 break-words">
                The platform is positioned as a modern stock market investment and research advisory service, with a strong focus on equity analysis, active support, and investor education.
              </p>

              <div className="mt-6 sm:mt-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl sm:rounded-3xl border border-blue-400 p-4 sm:p-5 transition-all duration-300 min-w-0">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.28em] text-blue-500 break-words">
                    Core Plan
                  </p>
                  <p className="mt-2.5 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7 break-words">
                    Equity calls for swing and long-term investors over a 10–120 day horizon.
                  </p>
                </div>

                <div className="rounded-2xl sm:rounded-3xl border border-blue-400 p-4 sm:p-5 transition-all duration-300 min-w-0">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.28em] text-blue-500 break-words">
                    Elite Plan
                  </p>
                  <p className="mt-2.5 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7 break-words">
                    Nifty / BankNifty derivative signals, daily trend updates, and reversal levels.
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