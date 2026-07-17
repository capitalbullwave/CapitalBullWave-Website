
import SectionWave from "./Sectionwave";

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
            className={`inline-flex rounded-full px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] backdrop-blur-md border ${
              theme === "dark"
                ? "bg-slate-900/70 border-slate-700 text-slate-200"
                : "bg-white/20 border-white/30 text-white"
            }`}
          >
            Why Choose Capital Bull Wave
          </p>
          <h2 className="mt-6 text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold leading-tight tracking-tight text-white">
            Modern stock market research, advisory, and trading support designed for Indian markets.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-100 sm:text-lg">
            Capital Bull Wave focuses on structured market research, active trading advice, and investor education to help traders and investors build confidence in equities and financial assets.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {choices.map((item) => (
              <article
                key={item.title}
                className="
                  group
                  rounded-[28px]
                  border border-slate-200
                  bg-white
                  p-8
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500
                  hover:shadow-2xl
                "
              >
                <h3 className="text-2xl font-bold text-sky-700 group-hover:text-blue-600">
                  {item.title}
                </h3>

                <p className="mt-5 text-slate-600 leading-8">
                  {item.description}
                </p>
              </article>
          ))}
        </div>

        <div className="mt-14 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-blue-500">Core benefits at a glance</h3>
              <ul className="mt-6 space-y-4 text-slate-600">
                
                <li className="flex gap-3 leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                  Clear plan segmentation for equity and derivative traders.
                </li>
                <li className="flex gap-3 leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                  Fills orders immediately at the best available current market price.
                </li>
                <li className="flex gap-3 leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                    Displays a clear visual of liquidity levels and volume at different price points.
                </li>
                <li className="flex gap-3 leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                  Permits opening opposing positions on the exact same financial instrument simultaneously.
                </li>

                <li className="flex gap-3 leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                  Risk-aware trading guidance with capital protection frameworks.
                </li>
                <li className="flex gap-3 leading-7">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                  Educational guidance to help traders adopt disciplined habits.
                </li>
              </ul>
            </div>
            <div className="rounded-[24px] bg-white/10
backdrop-blur-xl
border border-white/20 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-blue-400">Platform overview</h3>
              <p className="mt-4 text-slate-600 leading-7">
                The platform is positioned as a modern stock market investment and research advisory service, with a strong focus on equity analysis, active support, and investor education.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div
                  className={`rounded-3xl border border-blue-400 p-5 transition-all duration-300
                  `}
                >
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.28em] text-blue-500
                    `}
                  >
                    Core Plan
                  </p>

                  <p
                    className={`mt-3 leading-7
                    `}
                  >
                    Equity calls for swing and long-term investors over a 10–120 day
                    horizon.
                  </p>
                </div>

                <div
                  className={`rounded-3xl border border-blue-400 p-5 transition-all duration-300
                  `}
                >
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.28em] text-blue-500
                    `}
                  >
                    Elite Plan
                  </p>

                  <p
                    className={`mt-3 leading-7`}
                  >
                    Nifty / BankNifty derivative signals, daily trend updates, and reversal
                    levels.
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
