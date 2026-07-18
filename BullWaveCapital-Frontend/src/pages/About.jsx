//import SectionBackground from "../components/SectionBackground";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaInfoCircle,
} from "react-icons/fa";

const About = ({ theme }) => {
  const dark = theme === "dark";

  return (
      <section className="mx-auto my-6 max-w-7xl px-4 sm:px-6 lg:px-8">

        <div
          className={`relative overflow-hidden rounded-2xl sm:rounded-[32px] transition-all duration-300 p-5 sm:p-8 lg:p-10
          ${
            dark
              ? "bg-slate-900/95 border border-slate-800 shadow-2xl"
              : "bg-white/95 border border-sky-100 shadow-[0_30px_60px_rgba(15,23,42,0.08)]"
          }`}
        >

          {/* Background effect: base wash + chart-grid texture + soft glow + market-pulse line */}
          <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">

            {/* Base gradient wash */}
            <div
              className={`absolute inset-0 ${
                dark
                  ? "bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40"
                  : "bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100/70"
              }`}
            />

            {/* Graph-paper dot grid, echoes chart gridlines */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, ${
                  dark ? "rgba(56,189,248,0.16)" : "rgba(3,105,161,0.28)"
                } 1.5px, transparent 1.5px)`,
                backgroundSize: "26px 26px",
                opacity: dark ? 0.35 : 0.65,
              }}
            />

            {/* Soft ambient glow */}
            <div
              className={`absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl ${
                dark ? "bg-sky-500/10" : "bg-sky-400/40"
              }`}
            />
            <div
              className={`absolute -bottom-28 -left-20 h-80 w-80 rounded-full blur-3xl ${
                dark ? "bg-blue-600/10" : "bg-indigo-300/45"
              }`}
            />

            {/* Thin top accent bar, a common professional/fintech dashboard cue */}
            <div
              className={`absolute inset-x-0 top-0 h-1.5 ${
                dark
                  ? "bg-gradient-to-r from-sky-500/40 via-sky-400/70 to-blue-500/40"
                  : "bg-gradient-to-r from-sky-400/70 via-blue-600/90 to-indigo-500/70"
              }`}
            />

            {/* Signature element: a gently drifting market-pulse line */}
            <svg
              className="cbw-pulse-line absolute inset-x-0 top-1/2 h-24 w-full -translate-y-1/2 sm:h-32"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="none"
              style={{ opacity: dark ? 0.28 : 0.4 }}
            >
              <polyline
                points="0,80 60,80 90,40 130,95 170,55 210,70 250,20 300,85 350,60 400,90 450,30 500,75 560,45 620,95 680,50 740,75 800,25 860,90 920,55 980,80 1040,35 1100,70 1160,50 1200,80"
                stroke={dark ? "#38bdf8" : "#0369a1"}
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
              .cbw-pulse-line {
                animation: none;
              }
            }
          `}</style>

          {/* Foreground content sits above the background effect */}
          <div className="relative z-10">

          {/* Hero */}
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

            <div className="min-w-0">

              <p
                className={`inline-flex rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.30em]
                ${
                  dark
                    ? "bg-sky-500/20 text-sky-300"
                    : "bg-sky-100 text-sky-700"
                }`}
              >
                About Capital Bull Wave
              </p>

              <h1
                className={`mt-5 sm:mt-6 max-w-3xl text-2xl sm:text-3xl lg:text-3xl font-black leading-tight break-words
                ${
                  dark ? "text-white" : "text-slate-900"
                }`}
              >
                Delhi-based Market Research, Trading Guidance &
                Investor Education for Modern Stock Market Traders.
              </h1>

              <p
                className={`mt-5 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-6 sm:leading-8
                ${
                  dark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Capital Bull Wave operates from Netaji Subhash Place
                and Malviya Nagar, delivering research-driven
                strategies, risk-managed trading support, and
                investor education for retail traders across India.
              </p>

            </div>

            {/* Quick Facts */}

            <div
              className={`rounded-2xl sm:rounded-[28px] p-5 sm:p-8 transition-all duration-300 min-w-0
              ${
                dark
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-slate-50 border border-slate-200"
              }`}
            >

              <h2
                className={`text-xl sm:text-2xl font-bold
                ${
                  dark ? "text-sky-400" : "text-blue-700"
                }`}
              >
                Quick Facts
              </h2>

              <div
                className={`mt-5 sm:mt-6 space-y-4 sm:space-y-5 text-sm leading-6 sm:leading-7
                ${
                  dark ? "text-slate-300" : "text-slate-600"
                }`}
              >

                <div className="min-w-0">
                  <p className={dark ? "text-white font-semibold" : "text-slate-900 font-semibold"}>
                    Offices
                  </p>

                  <p className="break-words">
                    Netaji Subhash Place (Aggarwal Millennium Tower 2)
                  </p>
                </div>

                <div className="min-w-0">
                  <p className={dark ? "text-white font-semibold" : "text-slate-900 font-semibold"}>
                    Services
                  </p>

                  <p className="break-words">
                    Market Research, Trading Guidance,
                    Risk Management & Investor Education.
                  </p>
                </div>

                <div className="min-w-0">
                  <p className={dark ? "text-white font-semibold" : "text-slate-900 font-semibold"}>
                    Focus
                  </p>

                  <p className="break-words">
                    Equity Research, Intraday Support,
                    Swing Trading & Building Trader Confidence.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Main Content Grid */}
          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* Core Business Dealings */}

            <div
              className={`rounded-2xl sm:rounded-[28px] p-5 sm:p-8 transition-all duration-300 min-w-0
              ${
                dark
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white border border-sky-100 shadow-lg"
              }`}
            >
              <h2
                className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${
                  dark ? "text-sky-400" : "text-blue-700"
                }`}
              >
                Core Business Dealings
              </h2>

              <div className="space-y-5 sm:space-y-6">

                <div
                  className={`rounded-2xl p-4 sm:p-5 transition-all duration-300 min-w-0 ${
                    dark ? "bg-slate-900" : "bg-sky-50"
                  }`}
                >
                  <h3 className="font-semibold text-base sm:text-lg text-sky-600 break-words">
                    Market Research
                  </h3>

                  <p
                    className={`mt-2 text-sm sm:text-base leading-6 sm:leading-7 break-words ${
                      dark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Professional stock market analysis, trend identification,
                    technical studies, and support/resistance mapping tailored
                    specifically for Indian equity markets.
                  </p>
                </div>

                <div
                  className={`rounded-2xl p-4 sm:p-5 transition-all duration-300 min-w-0 ${
                    dark ? "bg-slate-900" : "bg-sky-50"
                  }`}
                >
                  <h3 className="font-semibold text-base sm:text-lg text-sky-600 break-words">
                    Trading Guidance
                  </h3>

                  <p
                    className={`mt-2 text-sm sm:text-base leading-6 sm:leading-7 break-words ${
                      dark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Structured equity delivery, swing trading and intraday
                    trading plans with practical guidance for retail traders.
                  </p>
                </div>

                <div
                  className={`rounded-2xl p-4 sm:p-5 transition-all duration-300 min-w-0 ${
                    dark ? "bg-slate-900" : "bg-sky-50"
                  }`}
                >
                  <h3 className="font-semibold text-base sm:text-lg text-sky-600 break-words">
                    Risk Management
                  </h3>

                  <p
                    className={`mt-2 text-sm sm:text-base leading-6 sm:leading-7 break-words ${
                      dark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Capital protection strategies, disciplined position sizing,
                    and practical risk planning designed to preserve long-term
                    trader capital.
                  </p>
                </div>

                <div
                  className={`rounded-2xl p-4 sm:p-5 transition-all duration-300 min-w-0 ${
                    dark ? "bg-slate-900" : "bg-sky-50"
                  }`}
                >
                  <h3 className="font-semibold text-base sm:text-lg text-sky-600 break-words">
                    Investor Education
                  </h3>

                  <p
                    className={`mt-2 text-sm sm:text-base leading-6 sm:leading-7 break-words ${
                      dark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Beginner-friendly training programs and community learning
                    sessions to build confidence and long-term investing skills.
                  </p>
                </div>

              </div>
            </div>

            {/* Locations & Distinction */}

            <div
              className={`rounded-2xl sm:rounded-[28px] p-5 sm:p-8 transition-all duration-300 min-w-0
              ${
                dark
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white border border-sky-100 shadow-lg"
              }`}
            >
              <h2
                className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${
                  dark ? "text-sky-400" : "text-blue-700"
                }`}
              >
                Locations & Distinction
              </h2>

              <div className="space-y-5 sm:space-y-6">

                {/* Office */}

                <div className="flex items-start gap-3 sm:gap-4">

                  <div
                    className={`flex-shrink-0 rounded-xl p-2.5 sm:p-3 ${
                      dark ? "bg-sky-500/20" : "bg-sky-100"
                    }`}
                  >
                    <FaMapMarkerAlt
                      className={`text-lg sm:text-xl ${
                        dark ? "text-sky-400" : "text-sky-600"
                      }`}
                    />
                  </div>

                  <div className="min-w-0">

                    <h3
                      className={`font-semibold text-base sm:text-lg break-words ${
                        dark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      Netaji Subhash Place (NSP)
                    </h3>

                    <p
                      className={`mt-2 text-sm sm:text-base leading-6 sm:leading-7 break-words ${
                        dark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      Office No. <strong>1275 (12th Floor)</strong> located at{" "}
                      <strong>Aggarwal Millennium Tower 2</strong>,
                      Pitampura, North West Delhi.
                    </p>

                  </div>

                </div>

                {/* Accessibility */}

                <div className="flex items-start gap-3 sm:gap-4">

                  <div
                    className={`flex-shrink-0 rounded-xl p-2.5 sm:p-3 ${
                      dark ? "bg-sky-500/20" : "bg-sky-100"
                    }`}
                  >
                    <FaBuilding
                      className={`text-lg sm:text-xl ${
                        dark ? "text-sky-400" : "text-sky-600"
                      }`}
                    />
                  </div>

                  <div className="min-w-0">

                    <h3
                      className={`font-semibold text-base sm:text-lg break-words ${
                        dark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      Easy Accessibility
                    </h3>

                    <p
                      className={`mt-2 text-sm sm:text-base leading-6 sm:leading-7 break-words ${
                        dark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      Conveniently located near{" "}
                      <strong>Netaji Subhash Place Metro Station</strong>,
                      making it easy for clients and visitors to reach us.
                    </p>

                  </div>

                </div>

                {/* Notice */}

                <div
                  className={`rounded-2xl border p-4 sm:p-5 min-w-0
                  ${
                    dark
                      ? "bg-amber-900/20 border-amber-700/40"
                      : "bg-amber-50 border-amber-200"
                  }`}
                >

                  <div className="flex items-start gap-3">

                    <FaInfoCircle className="text-amber-500 mt-1 flex-shrink-0" />

                    <div className="min-w-0">

                      <h3 className="font-semibold text-amber-600 break-words">
                        Important Distinction
                      </h3>

                      <p
                        className={`mt-3 text-sm sm:text-base leading-6 sm:leading-7 break-words ${
                          dark ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        <strong>Capital BullWave</strong> is a Delhi-based
                        market research and trading advisory platform operating
                        from Aggarwal Millennium Tower 2.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* Bottom Highlights */}

          <div
            className={`mt-10 sm:mt-12 rounded-2xl sm:rounded-[28px] p-5 sm:p-8 lg:p-10 transition-all duration-300
            ${
              dark
                ? "bg-slate-800 border border-slate-700"
                : "bg-slate-50 border border-sky-100"
            }`}
          >
            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

              {/* Research */}

              <div
                className={`group rounded-2xl sm:rounded-[24px] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2 min-w-0
                ${
                  dark
                    ? "bg-slate-900 border border-slate-700 hover:border-sky-500"
                    : "bg-white border border-sky-100 shadow-sm hover:shadow-xl"
                }`}
              >
                <div
                  className={`inline-flex rounded-xl p-2.5 sm:p-3 mb-4
                  ${
                    dark
                      ? "bg-sky-500/20"
                      : "bg-sky-100"
                  }`}
                >
                  <FaMapMarkerAlt
                    className={`text-lg sm:text-xl ${
                      dark ? "text-sky-400" : "text-sky-600"
                    }`}
                  />
                </div>

                <p className="text-[10px] sm:text-xs uppercase tracking-[0.20em] sm:tracking-[0.30em] text-sky-500 font-semibold">
                  Research
                </p>

                <h3
                  className={`mt-3 text-base sm:text-lg font-bold break-words ${
                    dark ? "text-white" : "text-slate-900"
                  }`}
                >
                  In-depth Market Intelligence
                </h3>

                <p
                  className={`mt-3 text-sm sm:text-base leading-6 sm:leading-7 break-words ${
                    dark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  Comprehensive market analysis and technical research
                  to support better investment decisions.
                </p>
              </div>

              {/* Guidance */}

              <div
                className={`group rounded-2xl sm:rounded-[24px] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2 min-w-0
                ${
                  dark
                    ? "bg-slate-900 border border-slate-700 hover:border-sky-500"
                    : "bg-white border border-sky-100 shadow-sm hover:shadow-xl"
                }`}
              >
                <div
                  className={`inline-flex rounded-xl p-2.5 sm:p-3 mb-4
                  ${
                    dark
                      ? "bg-sky-500/20"
                      : "bg-sky-100"
                  }`}
                >
                  <FaBuilding
                    className={`text-lg sm:text-xl ${
                      dark ? "text-sky-400" : "text-sky-600"
                    }`}
                  />
                </div>

                <p className="text-[10px] sm:text-xs uppercase tracking-[0.20em] sm:tracking-[0.30em] text-sky-500 font-semibold">
                  Guidance
                </p>

                <h3
                  className={`mt-3 text-base sm:text-lg font-bold break-words ${
                    dark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Structured Trading Support
                </h3>

                <p
                  className={`mt-3 text-sm sm:text-base leading-6 sm:leading-7 break-words ${
                    dark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  Practical guidance for equity, swing and intraday
                  traders with a disciplined trading approach.
                </p>
              </div>

              {/* Education */}

              <div
                className={`group rounded-2xl sm:rounded-[24px] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2 min-w-0
                ${
                  dark
                    ? "bg-slate-900 border border-slate-700 hover:border-sky-500"
                    : "bg-white border border-sky-100 shadow-sm hover:shadow-xl"
                }`}
              >
                <div
                  className={`inline-flex rounded-xl p-2.5 sm:p-3 mb-4
                  ${
                    dark
                      ? "bg-sky-500/20"
                      : "bg-sky-100"
                  }`}
                >
                  <FaInfoCircle
                    className={`text-lg sm:text-xl ${
                      dark ? "text-sky-400" : "text-sky-600"
                    }`}
                  />
                </div>

                <p className="text-[10px] sm:text-xs uppercase tracking-[0.20em] sm:tracking-[0.30em] text-sky-500 font-semibold">
                  Education
                </p>

                <h3
                  className={`mt-3 text-base sm:text-lg font-bold break-words ${
                    dark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Beginner-Friendly Learning
                </h3>

                <p
                  className={`mt-3 text-sm sm:text-base leading-6 sm:leading-7 break-words ${
                    dark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  Learn market fundamentals, trading psychology and
                  risk management through structured educational
                  programs.
                </p>
              </div>

            </div>
          </div>

          </div>

        </div>
      </section>
  );
};

export default About;