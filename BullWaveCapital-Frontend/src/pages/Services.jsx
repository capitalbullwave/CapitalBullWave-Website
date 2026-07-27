import { Helmet } from "react-helmet-async";
import SectionBackground from "../components/SectionBackground";
import RevealOnScroll from "../components/RevealOnScroll";

export default function Services({ theme }) {
  const dark = theme === "dark";

  const card = dark
    ? "premium-card rounded-2xl bg-slate-800/80 ring-1 ring-slate-700 p-5 sm:p-7"
    : "premium-card rounded-2xl bg-white ring-1 ring-sky-100 shadow-sm shadow-sky-100/70 p-5 sm:p-7";

  const muted = dark ? "text-slate-300" : "text-neutral-800";
  const heading = dark ? "text-sky-300" : "text-sky-700";
  const title = dark ? "text-white" : "text-black";

  return (
    <div className="page-shell">
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
        <meta name="twitter:title" content="Capital BullWave Services | Trading Plans & Research" />
        <meta
          name="twitter:description"
          content="Independent research, equity recommendations, and market analysis for Indian traders."
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
            Registered Services
          </p>
          <h1
            className={`services-heading mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight ${title}`}
          >
            Independent research, equity recommendations, and market analysis for Indian traders.
          </h1>
          <p className={`mx-auto mt-4 max-w-3xl text-sm sm:text-lg leading-7 sm:leading-8 ${muted}`}>
            Capital Bull Wave packages premium investment insights into Core and Elite monthly plans for cash and derivatives traders.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
          <RevealOnScroll delay={80}>
            <article className={card}>
              <h2 className={`text-xl sm:text-2xl font-semibold break-words ${heading}`}>Core Plan</h2>
              <p className={`mt-3 sm:mt-4 text-sm sm:text-base leading-7 break-words ${muted}`}>
                ₹4,999 / month for equity cash investors. This plan is built for share market buyers and swing traders only.
              </p>
              <ul className={`mt-5 sm:mt-6 space-y-3 text-sm sm:text-base leading-7 list-disc pl-5 marker:text-sky-400 ${muted}`}>
                <li className="break-words">
                  <strong className={heading}>Equity cash segment</strong> only, with no derivatives exposure.
                </li>
                <li className="break-words">12–15 monthly research recommendations.</li>
                <li className="break-words">Swing trade setups for 10–30 days.</li>
                <li className="break-words">Short-term positions for 30–120+ day investing.</li>
                <li className="break-words">Long-term stock ideas for fundamentally strong public companies.</li>
              </ul>
            </article>
          </RevealOnScroll>

          <RevealOnScroll delay={160}>
            <article className={card}>
              <h2 className={`text-xl sm:text-2xl font-semibold break-words ${heading}`}>Elite Plan</h2>
              <p className={`mt-3 sm:mt-4 text-sm sm:text-base leading-7 break-words ${muted}`}>
                ₹9,999 / month for active derivatives and index traders, including all Core Plan benefits plus advanced F&O insights.
              </p>
              <ul className={`mt-5 sm:mt-6 space-y-3 text-sm sm:text-base leading-7 list-disc pl-5 marker:text-sky-400 ${muted}`}>
                <li className="break-words">All 12–15 monthly cash equity recommendations.</li>
                <li className="break-words">Technical tracking for Nifty Futures and Bank Nifty Futures.</li>
                <li className="break-words">Pre-calculated reversal levels for index moves.</li>
                <li className="break-words">Daily and weekly market outlooks with Bullish/Bearish/Sideways bias.</li>
              </ul>
            </article>
          </RevealOnScroll>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Independent Analysis",
              body: "Unbiased buy, sell, or hold views based on publicly verifiable market data.",
              delay: 80,
            },
            {
              title: "Entry & Exit Targets",
              body: "Clear price zones for execution with hard protective stop-loss levels.",
              delay: 140,
            },
            {
              title: "Full Transparency",
              body: "Disclosures of any financial interest in recommended stocks to avoid conflicts.",
              delay: 200,
            },
          ].map((item) => (
            <RevealOnScroll key={item.title} delay={item.delay}>
              <article className={card}>
                <h3 className={`text-base sm:text-lg font-semibold break-words ${heading}`}>
                  {item.title}
                </h3>
                <p className={`mt-3 sm:mt-4 text-sm sm:text-base leading-7 break-words ${muted}`}>
                  {item.body}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
          <RevealOnScroll delay={100}>
            <article className={card}>
              <h2 className={`text-xl sm:text-2xl font-semibold break-words ${heading}`}>
                Regulatory credibility
              </h2>
              <p className={`mt-3 sm:mt-4 text-sm sm:text-base leading-7 break-words ${muted}`}>
                Capital Bull Wave operates serving retail investors in Indian financial markets.
              </p>
            </article>
          </RevealOnScroll>

          <RevealOnScroll delay={180}>
            <article className={card}>
              <h2 className={`text-xl sm:text-2xl font-semibold break-words ${heading}`}>
                Market segments covered
              </h2>
              <ul className={`mt-3 sm:mt-4 space-y-3 text-sm sm:text-base leading-7 list-disc pl-5 marker:text-sky-400 ${muted}`}>
                <li className="break-words">
                  <strong>Equity Cash Market:</strong> NSE/BSE delivery, swing, and short-term ideas.
                </li>
                <li className="break-words">
                  <strong>Derivatives (F&O):</strong> Nifty/Bank Nifty index futures and options support.
                </li>
                <li className="break-words">
                  <strong>Commodity Derivatives:</strong> MCX coverage for Gold, Silver, and Crude Oil.
                </li>
              </ul>
            </article>
          </RevealOnScroll>
        </div>
      </SectionBackground>
    </div>
  );
}
