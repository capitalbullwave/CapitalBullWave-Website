import {
  FaMapMarkerAlt,
  FaBuilding,
  FaInfoCircle,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import RevealOnScroll from "../components/RevealOnScroll";

const About = ({ theme }) => {
  const dark = theme === "dark";

  const shell = dark
    ? "relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-slate-900/95 ring-1 ring-white/10"
    : "relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-white/95 ring-1 ring-sky-100 shadow-[0_16px_50px_rgba(14,165,233,0.08)]";

  const card = dark
    ? "premium-card rounded-2xl bg-slate-800/80 ring-1 ring-slate-700 p-5 sm:p-7"
    : "premium-card rounded-2xl bg-white ring-1 ring-sky-100 shadow-sm p-5 sm:p-7";

  const inset = dark
    ? "rounded-xl bg-slate-900/80 p-4 sm:p-5"
    : "rounded-xl bg-sky-50 p-4 sm:p-5 ring-1 ring-sky-100";

  const muted = dark ? "text-slate-300" : "text-neutral-800";
  const heading = dark ? "text-sky-300" : "text-sky-700";
  const title = dark ? "text-white" : "text-black";

  return (
    <div className="page-shell page-enter">
      <Helmet>
        <title>About Us | Capital BullWave - Market Research & Trading Advisory Delhi</title>
        <meta
          name="description"
          content="Capital BullWave is a Delhi-based market research and trading advisory platform offering equity research, trading guidance, risk management and investor education from Netaji Subhash Place."
        />
        <link rel="canonical" href="https://www.capitalbullwave.com/about" />
        <meta property="og:title" content="About Capital BullWave | Market Research Delhi" />
        <meta
          property="og:description"
          content="Delhi-based market research, trading guidance and investor education for modern stock market traders."
        />
        <meta property="og:url" content="https://www.capitalbullwave.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="About Capital BullWave | Market Research Delhi" />
        <meta
          name="twitter:description"
          content="Delhi-based market research, trading guidance and investor education for modern stock market traders."
        />
      </Helmet>

      <section className={shell}>
        <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
          <div
            className={`absolute inset-0 ${
              dark
                ? "bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40"
                : "bg-gradient-to-br from-white via-sky-50 to-sky-100"
            }`}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, ${
                dark ? "rgba(56,189,248,0.14)" : "rgba(14,165,233,0.18)"
              } 1.5px, transparent 1.5px)`,
              backgroundSize: "26px 26px",
              opacity: dark ? 0.35 : 0.55,
            }}
          />
          <div
            className={`absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl animate-soft-pulse ${
              dark ? "bg-sky-500/10" : "bg-sky-300/45"
            }`}
          />
          <div
            className={`absolute -bottom-28 -left-20 h-80 w-80 rounded-full blur-3xl ${
              dark ? "bg-sky-600/10" : "bg-sky-200/50"
            }`}
          />
          <div
            className={`absolute inset-x-0 top-0 h-1.5 ${
              dark
                ? "bg-gradient-to-r from-sky-500/40 via-sky-400/70 to-cyan-500/40"
                : "bg-gradient-to-r from-sky-300 via-sky-500 to-sky-400"
            }`}
          />
          <svg
            className="cbw-pulse-line absolute inset-x-0 top-1/2 h-24 w-full -translate-y-1/2 sm:h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
            style={{ opacity: dark ? 0.28 : 0.35 }}
          >
            <polyline
              points="0,80 60,80 90,40 130,95 170,55 210,70 250,20 300,85 350,60 400,90 450,30 500,75 560,45 620,95 680,50 740,75 800,25 860,90 920,55 980,80 1040,35 1100,70 1160,50 1200,80"
              stroke={dark ? "#38bdf8" : "#0284c7"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <style>{`
          @keyframes cbwPulseFloat {
            0%, 100% { transform: translateY(-3px); }
            50% { transform: translateY(3px); }
          }
          .cbw-pulse-line {
            animation: cbwPulseFloat 7s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .cbw-pulse-line { animation: none; }
          }
        `}</style>

        <div className="relative z-10 p-4 sm:p-5 lg:p-6">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <RevealOnScroll className="min-w-0">
              <p
                className={`inline-flex rounded-full px-3 py-1.5 sm:px-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.28em]
                ${
                  dark
                    ? "bg-sky-500/20 text-sky-300"
                    : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
                }`}
              >
                About Capital Bull Wave
              </p>

              <h1
                className={`about-heading mt-5 sm:mt-6 max-w-3xl text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight break-words ${title}`}
              >
                Delhi-based Market Research, Trading Guidance & Investor Education
                for Modern Stock Market Traders.
              </h1>

              <p className={`mt-5 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-7 sm:leading-8 ${muted}`}>
                Capital Bull Wave operates from Netaji Subhash Place and Malviya
                Nagar, delivering research-driven strategies, risk-managed trading
                support, and investor education for retail traders across India.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={120} className="min-w-0">
              <div className={card}>
                <h2 className={`text-xl sm:text-2xl font-bold ${heading}`}>Quick Facts</h2>
                <div className={`mt-5 sm:mt-6 space-y-4 sm:space-y-5 text-sm leading-7 ${muted}`}>
                  <div className="min-w-0">
                    <p className={`font-semibold ${title}`}>Offices</p>
                    <p className="wrap-break-word">
                      Netaji Subhash Place (Aggarwal Millennium Tower 2)
                    </p>
                  </div>
                  <div className="min-w-0">
                    <p className={`font-semibold ${title}`}>Services</p>
                    <p className="wrap-break-word">
                      Market Research, Trading Guidance, Risk Management & Investor
                      Education.
                    </p>
                  </div>
                  <div className="min-w-0">
                    <p className={`font-semibold ${title}`}>Focus</p>
                    <p className="wrap-break-word">
                      Equity Research, Intraday Support, Swing Trading & Building
                      Trader Confidence.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 lg:grid-cols-2">
            <RevealOnScroll delay={80} className="min-w-0">
              <div className={card}>
                <h2 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${heading}`}>
                  Core Business Dealings
                </h2>
                <div className="space-y-4 sm:space-y-5">
                  {[
                    {
                      title: "Market Research",
                      body: "Professional stock market analysis, trend identification, technical studies, and support/resistance mapping tailored specifically for Indian equity markets.",
                    },
                    {
                      title: "Trading Guidance",
                      body: "Structured equity delivery, swing trading and intraday trading plans with practical guidance for retail traders.",
                    },
                    {
                      title: "Risk Management",
                      body: "Capital protection strategies, disciplined position sizing, and practical risk planning designed to preserve long-term trader capital.",
                    },
                    {
                      title: "Investor Education",
                      body: "Beginner-friendly training programs and community learning sessions to build confidence and long-term investing skills.",
                    },
                  ].map((item) => (
                    <div key={item.title} className={`min-w-0 ${inset}`}>
                      <h3 className={`font-semibold text-base sm:text-lg wrap-break-word text-sky-600`}>
                        {item.title}
                      </h3>
                      <p className={`mt-2 text-sm sm:text-base leading-7 wrap-break-word ${muted}`}>
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={160} className="min-w-0">
              <div className={card}>
                <h2 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${heading}`}>
                  Locations & Distinction
                </h2>
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`shrink-0 rounded-xl p-2.5 sm:p-3 ${
                        dark ? "bg-sky-500/20" : "bg-sky-100"
                      }`}
                    >
                      <FaMapMarkerAlt
                        className={`text-lg sm:text-xl ${dark ? "text-sky-400" : "text-sky-600"}`}
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`font-semibold text-base sm:text-lg wrap-break-word ${title}`}>
                        Netaji Subhash Place (NSP)
                      </h3>
                      <p className={`mt-2 text-sm sm:text-base leading-7 wrap-break-word ${muted}`}>
                        Office No. <strong>1275 (12th Floor)</strong> located at{" "}
                        <strong>Aggarwal Millennium Tower 2</strong>, Pitampura, North
                        West Delhi.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`shrink-0 rounded-xl p-2.5 sm:p-3 ${
                        dark ? "bg-sky-500/20" : "bg-sky-100"
                      }`}
                    >
                      <FaBuilding
                        className={`text-lg sm:text-xl ${dark ? "text-sky-400" : "text-sky-600"}`}
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`font-semibold text-base sm:text-lg wrap-break-word ${title}`}>
                        Easy Accessibility
                      </h3>
                      <p className={`mt-2 text-sm sm:text-base leading-7 wrap-break-word ${muted}`}>
                        Conveniently located near{" "}
                        <strong>Netaji Subhash Place Metro Station</strong>, making it
                        easy for clients and visitors to reach us.
                      </p>
                    </div>
                  </div>

                  <div
                    className={`rounded-xl border p-4 sm:p-5 min-w-0 ${
                      dark
                        ? "bg-amber-900/20 border-amber-700/40"
                        : "bg-amber-50 border-amber-200"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <FaInfoCircle className="text-amber-500 mt-1 shrink-0" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-amber-600 wrap-break-word">
                          Important Distinction
                        </h3>
                        <p className={`mt-3 text-sm sm:text-base leading-7 wrap-break-word ${dark ? "text-slate-300" : "text-slate-700"}`}>
                          <strong>Capital BullWave</strong> is a Delhi-based market
                          research and trading advisory platform operating from Aggarwal
                          Millennium Tower 2.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={100}>
            <div
              className={`mt-8 sm:mt-10 rounded-2xl p-5 sm:p-7 lg:p-8 ${
                dark
                  ? "bg-slate-800/70 ring-1 ring-slate-700"
                  : "bg-sky-50/80 ring-1 ring-sky-100"
              }`}
            >
              <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: FaMapMarkerAlt,
                    label: "Research",
                    title: "In-depth Market Intelligence",
                    body: "Comprehensive market analysis and technical research to support better investment decisions.",
                  },
                  {
                    icon: FaBuilding,
                    label: "Guidance",
                    title: "Structured Trading Support",
                    body: "Practical guidance for equity, swing and intraday traders with a disciplined trading approach.",
                  },
                  {
                    icon: FaInfoCircle,
                    label: "Education",
                    title: "Beginner-Friendly Learning",
                    body: "Learn market fundamentals, trading psychology and risk management through structured educational programs.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className={`group min-w-0 ${card}`}>
                      <div
                        className={`inline-flex rounded-xl p-2.5 sm:p-3 mb-4 ${
                          dark ? "bg-sky-500/20" : "bg-sky-100"
                        }`}
                      >
                        <Icon
                          className={`text-lg sm:text-xl ${
                            dark ? "text-sky-400" : "text-sky-600"
                          }`}
                        />
                      </div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.28em] text-sky-500 font-semibold">
                        {item.label}
                      </p>
                      <h3 className={`mt-3 text-base sm:text-lg font-bold wrap-break-word ${title}`}>
                        {item.title}
                      </h3>
                      <p className={`mt-3 text-sm sm:text-base leading-7 wrap-break-word ${muted}`}>
                        {item.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default About;
