import React from "react";

import SectionBackground from "../components/SectionBackground";

export default function Services() {
  return (
    <SectionBackground dark={false}>
      <section className="mx-auto my-8 max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[32px]  bg-white/95 p-6 shadow-[0_30px_60px_rgba(15,23,42,0.08)] transition-colors duration-300 sm:p-8 lg:p-10">
          <div className="mb-12 text-center">
            <p className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-sky-700 shadow-sm">
              Registered Services
            </p>
            <h1 className="services-heading mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-2xl lg:text-3xl">
              Independent research, equity recommendations, and market analysis for Indian traders.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Capital Bull Wave packages premium investment insights into Core and Elite monthly plans for cash and derivatives traders.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:border-2 shadow-xl">
              <h2 className="text-2xl font-semibold  text-blue-700">Core Plan</h2>
              <p className="mt-4 text-slate-600 leading-7">
                ₹3,999 / month for equity cash investors. This plan is built for share market buyers and swing traders only.
              </p>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li><strong className="text-blue-500">Equity cash segment</strong> only, with no derivatives exposure.</li>
                <li>12–15 monthly research recommendations.</li>
                <li>Swing trade setups for 10–30 days.</li>
                <li>Short-term positions for 30–120+ day investing.</li>
                <li>Long-term stock ideas for fundamentally strong public companies.</li>
              </ul>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:border-2 shadow-xl">
              <h2 className="text-2xl font-semibold  text-blue-700">Elite Plan</h2>
              <p className="mt-4 text-slate-600 leading-7">
                ₹5,199 / month for active derivatives and index traders, including all Core Plan benefits plus advanced F&O insights.
              </p>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li>All 12–15 monthly cash equity recommendations.</li>
                <li>Technical tracking for Nifty Futures and Bank Nifty Futures.</li>
                <li>Pre-calculated reversal levels for index moves.</li>
                <li>Daily and weekly market outlooks with Bullish/Bearish/Sideways bias.</li>
              </ul>
            </article>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:border-sky-400 hover:border-2 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-blue-700">Independent Analysis</h3>
              <p className="mt-4 text-slate-600 leading-7">
                Unbiased buy, sell, or hold views based on publicly verifiable market data.
              </p>
            </article>
            <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:border-sky-400 hover:border-2 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-blue-700">Entry & Exit Targets</h3>
              <p className="mt-4 text-slate-600 leading-7">
                Clear price zones for execution with hard protective stop-loss levels.
              </p>
            </article>
            <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:border-sky-400 hover:border-2 hover:shadow-lg">
              <h3 className="text-lg font-semibold text-blue-700">Full Transparency</h3>
              <p className="mt-4 text-slate-600 leading-7">
                Disclosures of any financial interest in recommended stocks to avoid conflicts.
              </p>
            </article>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:border-sky-400 hover:border-2 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-700">Regulatory credibility</h2>
              <p className="mt-4 text-slate-600 leading-7">
                Capital Bull Wave operates as a SEBI-registered research analyst with registration number INH000013253, serving retail investors in Indian financial markets.
              </p>
            </article>
            <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:border-sky-400 hover:border-2 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-700">Market segments covered</h2>
              <ul className="mt-4 space-y-3 text-slate-600 leading-7">
                <li><strong>Equity Cash Market:</strong> NSE/BSE delivery, swing, and short-term ideas.</li>
                <li><strong>Derivatives (F&O):</strong> Nifty/Bank Nifty index futures and options support.</li>
                <li><strong>Commodity Derivatives:</strong> MCX coverage for Gold, Silver, and Crude Oil.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
