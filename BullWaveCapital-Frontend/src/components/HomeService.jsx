import { FaChartLine, FaHandshake, FaShieldAlt } from "react-icons/fa";
import StackedCards from "./StackedCards";

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
    className: "md:col-span-2 md:row-span-2 min-h-[240px] sm:min-h-[280px] md:min-h-[420px]",
  },
  {
    title: "Investment Guidance",
    caption: "Structured advice for every horizon.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    className: "min-h-[200px] sm:min-h-[220px]",
  },
  {
    title: "Financial Advisory",
    caption: "Practical wealth-building support.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    className: "min-h-[200px] sm:min-h-[220px]",
  },
];

const HomeService = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p
          className={`inline-flex rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.28em]
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
          financial advisory services from Netaji Subhash Place, helping clients
          pursue disciplined wealth growth in equities and financial assets.
        </p>
      </div>

      <div className="mt-10 sm:mt-14">
        <StackedCards items={services} theme={theme} />
      </div>

      <div className="home-service-showcase mt-12 sm:mt-16">
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 md:grid-rows-2">
          {showcase.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-[1.35rem]
              ${item.className}
              ${
                isDark
                  ? "ring-1 ring-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                  : "ring-1 ring-sky-100 shadow-[0_14px_36px_rgba(14,165,233,0.1)]"
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="home-service-showcase__img absolute inset-0 h-full w-full object-cover"
              />
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? "bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent"
                    : "bg-gradient-to-t from-slate-950/80 via-slate-900/25 to-transparent"
                }`}
              />
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl animate-soft-pulse
                ${isDark ? "bg-sky-400/20" : "bg-sky-300/30"}`}
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200">
                  {item.caption}
                </p>
                <h3 className="mt-1.5 text-lg sm:text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeService;
