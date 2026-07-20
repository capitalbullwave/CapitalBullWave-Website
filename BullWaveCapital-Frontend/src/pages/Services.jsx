import React from "react";
import { Helmet } from "react-helmet-async";
import SectionBackground from "../components/SectionBackground";

export default function Services() {
  return (
    <SectionBackground dark={false}>
      <section className="mx-auto my-6 sm:my-8 max-w-7xl px-4 sm:px-8 lg:px-12">

        <Helmet>
          <title>Services | Capital BullWave - Equity Research & Trading Plans Delhi</title>
          <meta
            name="description"
            content="Explore Capital BullWave's Core and Elite subscription plans offering equity research, swing trading setups, F&O insights and independent market analysis for Indian traders."
          />
          <link rel="canonical" href="https://www.capitalbullwave.com/services" />
          <meta property="og:title" content="Capital BullWave Services | Trading Plans & Research" />
          <meta
            property="og:description"
            content="Independent research, equity recommendations, and market analysis for Indian traders."
          />
          <meta property="og:url" content="https://www.capitalbullwave.com/services" />
          <meta property="og:type" content="website" />
        </Helmet>


        <div className="overflow-hidden rounded-2xl sm:rounded-[32px] bg-white/95 p-5 transition-colors duration-300 sm:p-8 lg:p-10">
          <div className="mb-10 sm:mb-12 text-center">
            <p className="inline-flex rounded-full bg-sky-100 px-3 py-1.5 sm:px-4 sm:py-1 text-[10px] sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.35em] text-sky-700 shadow-sm">
              Registered Services
            </p>
            <h1 className="services-heading mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-3xl font-black leading-tight tracking-tight text-slate-950 px-2 sm:px-0">
              Independent research, equity recommendations, and market analysis for Indian traders.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-lg leading-6 sm:leading-8 text-slate-600 px-2 sm:px-0">
              Capital Bull Wave packages premium investment insights into Core and Elite monthly plans for cash and derivatives traders.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
            <article className="min-w-0 rounded-2xl sm:rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-8 shadow-sm shadow-xl transition duration-300 hover:-translate-y-1 hover:border-2 hover:border-sky-400">
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 break-words">Core Plan</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 break-words">
                ₹4,999 / month for equity cash investors. This plan is built for share market buyers and swing traders only.
              </p>
              <ul className="mt-5 sm:mt-6 space-y-3 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 list-disc pl-5 marker:text-sky-400">
                <li className="break-words">
                  <strong className="text-blue-500">Equity cash segment</strong> only, with no derivatives exposure.
                </li>
                <li className="break-words">12–15 monthly research recommendations.</li>
                <li className="break-words">Swing trade setups for 10–30 days.</li>
                <li className="break-words">Short-term positions for 30–120+ day investing.</li>
                <li className="break-words">Long-term stock ideas for fundamentally strong public companies.</li>
              </ul>
            </article>

            <article className="min-w-0 rounded-2xl sm:rounded-[28px] border border-slate-200 bg-white p-5 sm:p-8 shadow-sm shadow-xl transition duration-300 hover:-translate-y-1 hover:border-2 hover:border-sky-400">
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 break-words">Elite Plan</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 break-words">
                ₹9,999 / month for active derivatives and index traders, including all Core Plan benefits plus advanced F&O insights.
              </p>
              <ul className="mt-5 sm:mt-6 space-y-3 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 list-disc pl-5 marker:text-sky-400">
                <li className="break-words">All 12–15 monthly cash equity recommendations.</li>
                <li className="break-words">Technical tracking for Nifty Futures and Bank Nifty Futures.</li>
                <li className="break-words">Pre-calculated reversal levels for index moves.</li>
                <li className="break-words">Daily and weekly market outlooks with Bullish/Bearish/Sideways bias.</li>
              </ul>
            </article>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="min-w-0 rounded-2xl sm:rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-8 shadow-sm transition duration-300 hover:border-2 hover:border-sky-400 hover:shadow-lg">
              <h3 className="text-base sm:text-lg font-semibold text-blue-700 break-words">Independent Analysis</h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 break-words">
                Unbiased buy, sell, or hold views based on publicly verifiable market data.
              </p>
            </article>
            <article className="min-w-0 rounded-2xl sm:rounded-[28px] border border-slate-200 bg-white p-5 sm:p-8 shadow-sm transition duration-300 hover:border-2 hover:border-sky-400 hover:shadow-lg">
              <h3 className="text-base sm:text-lg font-semibold text-blue-700 break-words">Entry & Exit Targets</h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 break-words">
                Clear price zones for execution with hard protective stop-loss levels.
              </p>
            </article>
            <article className="min-w-0 rounded-2xl sm:rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-8 shadow-sm transition duration-300 hover:border-2 hover:border-sky-400 hover:shadow-lg">
              <h3 className="text-base sm:text-lg font-semibold text-blue-700 break-words">Full Transparency</h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 break-words">
                Disclosures of any financial interest in recommended stocks to avoid conflicts.
              </p>
            </article>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
            <article className="min-w-0 rounded-2xl sm:rounded-[28px] border border-slate-200 bg-white p-5 sm:p-8 shadow-sm transition duration-300 hover:border-2 hover:border-sky-400 hover:shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 break-words">Regulatory credibility</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 break-words">
                Capital Bull Wave operates serving retail investors in Indian financial markets.
              </p>
            </article>
            <article className="min-w-0 rounded-2xl sm:rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-8 shadow-sm transition duration-300 hover:border-2 hover:border-sky-400 hover:shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 break-words">Market segments covered</h2>
              <ul className="mt-3 sm:mt-4 space-y-3 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7 list-disc pl-5 marker:text-sky-400">
                <li className="break-words"><strong>Equity Cash Market:</strong> NSE/BSE delivery, swing, and short-term ideas.</li>
                <li className="break-words"><strong>Derivatives (F&O):</strong> Nifty/Bank Nifty index futures and options support.</li>
                <li className="break-words"><strong>Commodity Derivatives:</strong> MCX coverage for Gold, Silver, and Crude Oil.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}