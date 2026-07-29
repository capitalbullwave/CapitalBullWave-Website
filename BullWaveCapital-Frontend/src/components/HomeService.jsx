import { FaChartLine, FaHandshake, FaShieldAlt } from "react-icons/fa";
import CoverflowGallery from "./CoverflowGallery";
import TradingAtmosphere from "./TradingAtmosphere";

const services = [
  {
    title: "Stock Market Research",
    subtitle: "Actionable equity insights.",
    description:
      "Analysis of market trends, sector performance, and individual stock behavior to help clients identify investment opportunities.",
    icon: FaChartLine,
  },
  {
    title: "Investment Guidance",
    subtitle: "Structured advice for every horizon.",
    description:
      "Support for short-term trading decisions and long-term portfolio planning, tailored to your goals and risk tolerance.",
    icon: FaHandshake,
  },
  {
    title: "Financial Advisory",
    subtitle: "Practical wealth-building support.",
    description:
      "Professional advisory services covering asset allocation, risk control, and portfolio review for disciplined investing.",
    icon: FaShieldAlt,
  },
];

const showcase = [
  {
    title: "Stock Market Research",
    caption: "Actionable equity insights.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Investment Guidance",
    caption: "Structured advice for every horizon.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Financial Advisory",
    caption: "Practical wealth-building support.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Market Analytics",
    caption: "Live charts. Clear decisions.",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Portfolio Strategy",
    caption: "Disciplined wealth building.",
    image:
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1200&auto=format&fit=crop",
  },
];

const HomeService = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20">
      <TradingAtmosphere theme={theme} />
      <div className="relative z-10 mx-auto max-w-4xl px-0 text-center">
        <p
          className={`inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.28em]
          ${
            isDark
              ? "bg-sky-500/15 text-sky-300"
              : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
          }`}
        >
          Our Services
        </p>
        <h2
          className={`section-title mt-5 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Professional stock market research and investment advisory from Delhi.
        </h2>
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            isDark ? "text-slate-400" : "text-neutral-800"
          }`}
        >
          Bull Wave Capital provides market research, investment guidance, and
          financial advisory services from New Delhi and Dubai, helping clients
          pursue disciplined wealth growth in equities and financial assets.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 px-0 sm:mt-14 sm:grid-cols-2 sm:gap-5 sm:px-2 lg:grid-cols-3 lg:gap-6">
        {services.map(({ title, subtitle, description, icon: Icon }) => (
          <article
            key={title}
            className={`olymp-section-card flex h-full flex-col items-center rounded-2xl px-5 py-7 text-center sm:rounded-[1.35rem] sm:px-6 sm:py-8
            ${
              isDark
                ? "bg-slate-900/90 ring-1 ring-white/10"
                : "bg-white ring-1 ring-sky-100 shadow-[0_14px_36px_rgba(14,165,233,0.1)]"
            }`}
          >
            <div
              className={`relative mb-5 flex h-20 w-20 items-center justify-center rounded-[1.35rem] sm:h-24 sm:w-24
              ${
                isDark
                  ? "bg-sky-500/10 ring-1 ring-sky-400/20"
                  : "bg-sky-50 ring-1 ring-sky-100"
              }`}
            >
              <div
                className={`relative flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-lg sm:h-14 sm:w-14
                ${
                  isDark
                    ? "bg-sky-500 shadow-sky-500/30"
                    : "bg-sky-500 shadow-sky-500/25"
                }`}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            </div>

            <h3
              className={`text-base font-bold leading-snug sm:text-lg ${
                isDark ? "text-white" : "text-slate-950"
              }`}
            >
              {title}
            </h3>
            <p
              className={`mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-xs
              ${isDark ? "text-sky-400" : "text-sky-600"}`}
            >
              {subtitle}
            </p>
            <p
              className={`mt-3 text-sm leading-6 sm:mt-4 sm:leading-7
              ${isDark ? "text-slate-400" : "text-slate-500"}`}
            >
              {description}
            </p>
          </article>
        ))}
      </div>

      <div className="home-service-showcase relative z-10 mt-12 sm:mt-16">
        <CoverflowGallery items={showcase} theme={theme} />
      </div>
    </section>
  );
};

export default HomeService;
