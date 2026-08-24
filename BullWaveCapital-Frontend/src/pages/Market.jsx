import { Helmet } from "react-helmet-async";
import SectionBackground from "../components/SectionBackground";
import RevealOnScroll from "../components/RevealOnScroll";

const Market = ({ theme }) => {
  const dark = theme === "dark";

  const card = dark
    ? "premium-card rounded-2xl bg-slate-800/80 ring-1 ring-slate-700 p-5 sm:p-7"
    : "premium-card rounded-2xl bg-white ring-1 ring-sky-100 shadow-sm shadow-sky-100/70 p-5 sm:p-7";

  const soft = dark
    ? "premium-card rounded-2xl bg-slate-800/60 ring-1 ring-slate-700 p-5 sm:p-6"
    : "premium-card rounded-2xl bg-sky-50 ring-1 ring-sky-100 p-5 sm:p-6";

  const muted = dark ? "text-slate-300" : "text-neutral-800";
  const heading = dark ? "text-sky-300" : "text-sky-700";
  const title = dark ? "text-white" : "text-black";

  return (
    <div className="page-shell page-enter py-4 sm:py-6 lg:py-8">
      <Helmet>
        <title>Markets | Capital BullWave - NSE, BSE, F&O & MCX Research Delhi</title>
        <meta
          name="description"
          content="Capital BullWave provides professional market coverage for NSE, BSE equity, F&O derivatives and MCX commodities including Gold, Silver and Crude Oil analysis."
        />
        <link rel="canonical" href="https://www.capitalbullwave.com/markets" />
        <meta
          property="og:title"
          content="Capital BullWave Markets | Equity, F&O & Commodity Research"
        />
        <meta
          property="og:description"
          content="Professional coverage for NSE, BSE, F&O, and MCX markets."
        />
        <meta property="og:url" content="https://www.capitalbullwave.com/markets" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Capital BullWave Markets | Equity, F&O & Commodity Research"
        />
        <meta
          name="twitter:description"
          content="Professional coverage for NSE, BSE, F&O, and MCX markets."
        />
      </Helmet>

      <SectionBackground dark={dark}>
        <RevealOnScroll className="mb-10 sm:mb-12 text-center">
          <p
            className={`inline-flex rounded-full px-3 py-1.5 sm:px-4 text-[10px] sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.28em]
            ${
              dark
                ? "bg-sky-500/15 text-sky-300"
                : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
            }`}
          >
            Market Intelligence
          </p>
          <h1
            className={`market-heading mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight ${title}`}
          >
            Professional coverage for NSE, BSE, F&O, and MCX markets.
          </h1>
          <p className={`mx-auto mt-4 max-w-3xl text-sm sm:text-lg leading-7 sm:leading-8 ${muted}`}>
            Capital Bull Wave focuses on Indian financial markets with research, trading guidance, and educational support for equity, derivatives, and commodity participants.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
          <RevealOnScroll delay={60}>
            <article className={card}>
              <h2 className={`text-lg sm:text-xl font-semibold break-words ${heading}`}>
                Equity Market
              </h2>
              <p className={`mt-3 sm:mt-4 text-sm sm:text-base leading-7 break-words ${muted}`}>
                Delivery investing and intraday equity support for stocks listed on NSE and BSE.
              </p>
              <ul className={`mt-4 sm:mt-5 space-y-3 text-sm sm:text-base leading-7 list-disc pl-5 marker:text-sky-400 ${muted}`}>
                <li className="break-words">Intraday trading targets for liquid stocks.</li>
                <li className="break-words">Swing setups holding 10–30 days.</li>
                <li className="break-words">Short-to-long delivery plans for fundamentally strong shares.</li>
              </ul>
            </article>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <article className={card}>
              <h2 className={`text-lg sm:text-xl font-semibold break-words ${heading}`}>
                Derivatives (F&O)
              </h2>
              <p className={`mt-3 sm:mt-4 text-sm sm:text-base leading-7 break-words ${muted}`}>
                Strategic analysis for high-leverage instruments tied to major indices.
              </p>
              <ul className={`mt-4 sm:mt-5 space-y-3 text-sm sm:text-base leading-7 list-disc pl-5 marker:text-sky-400 ${muted}`}>
                <li className="break-words">Directional views for Nifty 50 and Bank Nifty.</li>
                <li className="break-words">Reversal zone and support/resistance mapping.</li>
                <li className="break-words">Option buyer and seller guidance for volatility.</li>
              </ul>
            </article>
          </RevealOnScroll>

          <RevealOnScroll delay={180}>
            <article className={card}>
              <h2 className={`text-lg sm:text-xl font-semibold break-words ${heading}`}>
                Commodity Market
              </h2>
              <p className={`mt-3 sm:mt-4 text-sm sm:text-base leading-7 break-words ${muted}`}>
                Analysis for liquid MCX commodities such as bullion and energy products.
              </p>
              <ul className={`mt-4 sm:mt-5 space-y-3 text-sm sm:text-base leading-7 list-disc pl-5 marker:text-sky-400 ${muted}`}>
                <li className="break-words">Gold and Silver price action levels.</li>
                <li className="break-words">Crude Oil support/resistance monitoring.</li>
                <li className="break-words">Commodity technical setups for short and medium-term moves.</li>
              </ul>
            </article>
          </RevealOnScroll>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
          <RevealOnScroll delay={100}>
            <article className={card}>
              <h2 className={`text-xl sm:text-2xl font-semibold break-words ${heading}`}>
                Scope of services
              </h2>
              <ul className={`mt-5 sm:mt-6 space-y-4 text-sm sm:text-base leading-7 list-disc pl-5 marker:text-sky-400 ${dark ? "text-slate-300" : "text-slate-700"}`}>
                <li className="break-words">
                  <span className={`font-semibold ${heading}`}>Advanced technical charts:</span> support, resistance, and entry/exit zones for active market decisions.
                </li>
                <li className="break-words">
                  <span className={`font-semibold ${heading}`}>Intraday volatility support:</span> quick reaction analysis for sudden momentum shifts.
                </li>
                <li className="break-words">
                  <span className={`font-semibold ${heading}`}>Risk parameters:</span> pre-calculated stop-loss planning to protect trader capital.
                </li>
                <li className="break-words">
                  <span className={`font-semibold ${heading}`}>24/7 updates:</span> continuous news and market tracking for Indian public markets.
                </li>
              </ul>
            </article>
          </RevealOnScroll>

          <RevealOnScroll delay={160}>
            <article className={card}>
              <h2 className={`text-xl sm:text-2xl font-semibold break-words ${heading}`}>
                Important reminder
              </h2>
              <p className={`mt-5 sm:mt-6 text-sm sm:text-base leading-7 break-words ${dark ? "text-slate-300" : "text-slate-700"}`}>
                Capital Bull Wave is a Delhi-based research platform for Indian markets only. It is not the same as the international broker Bullwaves, which works with global Forex, indices, metals, and crypto CFDs.
              </p>
            </article>
          </RevealOnScroll>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
          <RevealOnScroll delay={80}>
            <div className={soft}>
              <p className="text-[10px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.24em] text-sky-600">
                Equity Cash
              </p>
              <h3 className={`mt-3 text-base sm:text-lg font-semibold break-words ${title}`}>
                Cash Segment
              </h3>
              <p className={`mt-3 text-sm sm:text-base leading-7 break-words ${muted}`}>
                Intraday, swing, and delivery plans for Indian share trading on NSE/BSE.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={140}>
            <div className={soft}>
              <p className="text-[10px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.24em] text-sky-600">
                Equity Derivatives
              </p>
              <h3 className={`mt-3 text-base sm:text-lg font-semibold break-words ${title}`}>
                Futures & Options
              </h3>
              <p className={`mt-3 text-sm sm:text-base leading-7 break-words ${muted}`}>
                Index analysis and F&O support for Nifty 50, Bank Nifty, and high-leverage market setups.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className={soft}>
              <p className="text-[10px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.24em] text-sky-600">
                Commodity Derivatives
              </p>
              <h3 className={`mt-3 text-base sm:text-lg font-semibold break-words ${title}`}>
                MCX Coverage
              </h3>
              <p className={`mt-3 text-sm sm:text-base leading-7 break-words ${muted}`}>
                Gold, Silver, and crude oil trend support and technical guidance for commodity participants.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </SectionBackground>
    </div>
  );
};

export default Market;
