import { Helmet } from "react-helmet-async";
import SectionBackground from "../components/SectionBackground";

const Market = ({ theme }) => {
  const dark = theme === "dark";

  return (
    <SectionBackground dark={dark}>
      <section className="mx-auto my-8 sm:my-12 max-w-7xl px-4 sm:px-8 lg:px-12">

        <Helmet>
          <title>Markets | Capital BullWave - NSE, BSE, F&O & MCX Research Delhi</title>
          <meta
            name="description"
            content="Capital BullWave provides professional market coverage for NSE, BSE equity, F&O derivatives and MCX commodities including Gold, Silver and Crude Oil analysis."
          />
          <link rel="canonical" href="https://www.capitalbullwave.com/markets" />
          <meta property="og:title" content="Capital BullWave Markets | Equity, F&O & Commodity Research" />
          <meta
            property="og:description"
            content="Professional coverage for NSE, BSE, F&O, and MCX markets."
          />
          <meta property="og:url" content="https://www.capitalbullwave.com/markets" />
          <meta property="og:type" content="website" />
        </Helmet>

        <div className="overflow-hidden rounded-2xl sm:rounded-[32px] bg-white/95 p-5 shadow-[0_30px_60px_rgba(15,23,42,0.08)] transition-colors duration-300 sm:p-8 lg:p-10">
          <div className="mb-10 sm:mb-12 text-center">
            <p className="inline-flex rounded-full bg-sky-100 px-3 py-1.5 sm:px-4 sm:py-1 text-[10px] sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.35em] text-sky-700 shadow-sm">
              Market Intelligence
            </p>
            <h1 className="market-heading mt-5 sm:mt-6 text-2xl sm:text-xl lg:text-3xl font-black leading-tight tracking-tight text-slate-950 px-2 sm:px-0">
              Professional coverage for NSE, BSE, F&O, and MCX markets.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-lg leading-6 sm:leading-8 text-slate-600 px-2 sm:px-0">
              Capital Bull Wave focuses on Indian financial markets with research, trading guidance, and educational support for equity, derivatives, and commodity participants.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
            <article className="min-w-0 rounded-2xl sm:rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-2 hover:border-sky-400 hover:shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-700 break-words">Equity Market</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 break-words">
                Delivery investing and intraday equity support for stocks listed on NSE and BSE.
              </p>
              <ul className="mt-4 sm:mt-5 space-y-3 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 list-disc pl-5 marker:text-sky-400">
                <li className="break-words">Intraday trading targets for liquid stocks.</li>
                <li className="break-words">Swing setups holding 10–30 days.</li>
                <li className="break-words">Short-to-long delivery plans for fundamentally strong shares.</li>
              </ul>
            </article>

            <article className="min-w-0 rounded-2xl sm:rounded-[28px] border border-slate-200 bg-white p-5 sm:p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-2 hover:border-sky-400 hover:shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-700 break-words">Derivatives (F&O)</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 break-words">
                Strategic analysis for high-leverage instruments tied to major indices.
              </p>
              <ul className="mt-4 sm:mt-5 space-y-3 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 list-disc pl-5 marker:text-sky-400">
                <li className="break-words">Directional views for Nifty 50 and Bank Nifty.</li>
                <li className="break-words">Reversal zone and support/resistance mapping.</li>
                <li className="break-words">Option buyer and seller guidance for volatility.</li>
              </ul>
            </article>

            <article className="min-w-0 rounded-2xl sm:rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-2 hover:border-sky-400 hover:shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-700 break-words">Commodity Market</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 break-words">
                Analysis for liquid MCX commodities such as bullion and energy products.
              </p>
              <ul className="mt-4 sm:mt-5 space-y-3 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 list-disc pl-5 marker:text-sky-400">
                <li className="break-words">Gold and Silver price action levels.</li>
                <li className="break-words">Crude Oil support/resistance monitoring.</li>
                <li className="break-words">Commodity technical setups for short and medium-term moves.</li>
              </ul>
            </article>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
            <article className="min-w-0 rounded-2xl sm:rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-8 shadow-sm transition duration-300 hover:border-2 hover:border-sky-400 hover:bg-sky-50">
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 break-words">Scope of services</h2>
              <ul className="mt-5 sm:mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-6 sm:leading-7 list-disc pl-5 marker:text-sky-400">
                <li className="break-words"><span className="font-semibold text-blue-500">Advanced technical charts:</span> support, resistance, and entry/exit zones for active market decisions.</li>
                <li className="break-words"><span className="font-semibold text-blue-500">Intraday volatility support:</span> quick reaction analysis for sudden momentum shifts.</li>
                <li className="break-words"><span className="font-semibold text-blue-500">Risk parameters:</span> pre-calculated stop-loss planning to protect trader capital.</li>
                <li className="break-words"><span className="font-semibold text-blue-500">24/7 updates:</span> continuous news and market tracking for Indian public markets.</li>
              </ul>
            </article>

            <article className="min-w-0 rounded-2xl sm:rounded-[28px] border border-slate-200 bg-white p-5 sm:p-8 shadow-sm transition duration-300 hover:border-2 hover:border-sky-400 hover:bg-sky-50">
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 break-words">Important reminder</h2>
              <p className="mt-5 sm:mt-6 text-sm sm:text-base text-slate-700 leading-6 sm:leading-7 break-words">
                Capital Bull Wave is a Delhi-based research platform for Indian markets only. It is not the same as the international broker Bullwaves, which works with global Forex, indices, metals, and crypto CFDs.
              </p>
            </article>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
            <div
              className={`min-w-0 rounded-2xl sm:rounded-[24px] p-5 sm:p-6 shadow-sm transition-all duration-300
              ${
                dark
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-sky-50 border border-sky-100"
              }`}
            >
              <p className="text-[10px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.24em] text-sky-600">Equity Cash</p>
              <h3 className={`mt-3 text-base sm:text-lg font-semibold break-words ${ dark ? "text-white" : "text-slate-900"}`}>Cash Segment</h3>
              <p className={`mt-3 text-sm sm:text-base leading-6 sm:leading-7 break-words ${dark ? "text-slate-300" : "text-slate-600"}`}>Intraday, swing, and delivery plans for Indian share trading on NSE/BSE.</p>
            </div>
            <div
              className={`min-w-0 rounded-2xl sm:rounded-[24px] p-5 sm:p-6 shadow-sm transition-all duration-300
              ${
                dark
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-sky-50 border border-sky-100"
              }`}
            >
              <p className="text-[10px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.24em] text-sky-600">Equity Derivatives</p>
              <h3 className={`mt-3 text-base sm:text-lg font-semibold break-words ${ dark ? "text-white" : "text-slate-900"}`}>Futures & Options</h3>
              <p className={`mt-3 text-sm sm:text-base leading-6 sm:leading-7 break-words ${dark ? "text-slate-300" : "text-slate-600"}`}>Index analysis and F&O support for Nifty 50, Bank Nifty, and high-leverage market setups.</p>
            </div>
            <div
              className={`min-w-0 rounded-2xl sm:rounded-[24px] p-5 sm:p-6 shadow-sm transition-all duration-300
              ${
                dark
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-sky-50 border border-sky-100"
              }`}
            >
              <p className="text-[10px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.24em] text-sky-600">Commodity Derivatives</p>
              <h3 className={`mt-3 text-base sm:text-lg font-semibold break-words ${ dark ? "text-white" : "text-slate-900"}`}>MCX Coverage</h3>
              <p className={`mt-3 text-sm sm:text-base leading-6 sm:leading-7 break-words ${dark ? "text-slate-300" : "text-slate-600"}`}>Gold, Silver, and crude oil trend support and technical guidance for commodity participants.</p>
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  )
}

export default Market