const Market = () => {
  return (
    <section className="mx-auto my-12 max-w-7xl px-6 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white/95 p-6 shadow-[0_30px_60px_rgba(15,23,42,0.08)] transition-colors duration-300 sm:p-8 lg:p-10">
        <div className="mb-12 text-center">
          <p className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-sky-700 shadow-sm">
            Market Intelligence
          </p>
          <h1 className="market-heading mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-2xl lg:text-3xl">
            Professional coverage for NSE, BSE, F&O, and MCX markets.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Capital Bull Wave focuses on Indian financial markets with research, trading guidance, and educational support for equity, derivatives, and commodity participants.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:border-2 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-blue-700 underline">Equity Market</h2>
            <p className="mt-4 text-slate-600 leading-7">
              Delivery investing and intraday equity support for stocks listed on NSE and BSE.
            </p>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>Intraday trading targets for liquid stocks.</li>
              <li>Swing setups holding 10–30 days.</li>
              <li>Short-to-long delivery plans for fundamentally strong shares.</li>
            </ul>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:border-2 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-blue-700 underline">Derivatives (F&O)</h2>
            <p className="mt-4 text-slate-600 leading-7">
              Strategic analysis for high-leverage instruments tied to major indices.
            </p>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>Directional views for Nifty 50 and Bank Nifty.</li>
              <li>Reversal zone and support/resistance mapping.</li>
              <li>Option buyer and seller guidance for volatility.</li>
            </ul>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:border-2 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-blue-700 underline">Commodity Market</h2>
            <p className="mt-4 text-slate-600 leading-7">
              Analysis for liquid MCX commodities such as bullion and energy products.
            </p>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>Gold and Silver price action levels.</li>
              <li>Crude Oil support/resistance monitoring.</li>
              <li>Commodity technical setups for short and medium-term moves.</li>
            </ul>
          </article>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:border-sky-400 hover:border-2 hover:bg-sky-50">
            <h2 className="text-2xl font-semibold text-blue-700 underline">Scope of services</h2>
            <ul className="mt-6 space-y-4 text-slate-700 leading-7">
              <li><span className="font-semibold text-blue-500">Advanced technical charts:</span> support, resistance, and entry/exit zones for active market decisions.</li>
              <li><span className="font-semibold text-blue-500">Intraday volatility support:</span> quick reaction analysis for sudden momentum shifts.</li>
              <li><span className="font-semibold text-blue-500">Risk parameters:</span> pre-calculated stop-loss planning to protect trader capital.</li>
              <li><span className="font-semibold text-blue-500">24/7 updates:</span> continuous news and market tracking for Indian public markets.</li>
            </ul>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:border-sky-400 hover:border-2 hover:bg-sky-50">
            <h2 className="text-2xl font-semibold  underline text-blue-700">Important reminder</h2>
            <p className="mt-6 text-slate-700 leading-7">
              Capital Bull Wave is a Delhi-based research platform for Indian markets only. It is not the same as the international broker Bullwaves, which works with global Forex, indices, metals, and crypto CFDs.
            </p>
          </article>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[24px] bg-white p-6 shadow-sm transition duration-300 hover:bg-sky-50">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-600">Equity Cash</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">Cash Segment</h3>
            <p className="mt-3 text-slate-600 leading-7">Intraday, swing, and delivery plans for Indian share trading on NSE/BSE.</p>
          </div>
          <div className="rounded-[24px] bg-white p-6 shadow-sm transition duration-300 hover:bg-sky-50">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-600">Equity Derivatives</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">Futures & Options</h3>
            <p className="mt-3 text-slate-600 leading-7">Index analysis and F&O support for Nifty 50, Bank Nifty, and high-leverage market setups.</p>
          </div>
          <div className="rounded-[24px] bg-white p-6 shadow-sm transition duration-300 hover:bg-sky-50">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-600">Commodity Derivatives</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">MCX Coverage</h3>
            <p className="mt-3 text-slate-600 leading-7">Gold, Silver, and crude oil trend support and technical guidance for commodity participants.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Market