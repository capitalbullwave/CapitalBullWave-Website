import { FaChartLine, FaHandshake, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";
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
            isDark ? "text-white" : "text-slate-950"
          }`}
        >
          Professional stock market research and investment advisory from Delhi.
        </h2>
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            isDark ? "text-slate-400" : "text-slate-600"
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

      <div
        className={`mt-12 sm:mt-16 overflow-hidden rounded-2xl sm:rounded-[1.75rem]
        ${
          isDark
            ? "bg-slate-900 ring-1 ring-white/10"
            : "bg-white ring-1 ring-sky-100 shadow-[0_12px_36px_rgba(14,165,233,0.07)]"
        }`}
      >
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <span
              className={`text-sm font-semibold uppercase tracking-[0.28em] ${
                isDark ? "text-sky-400" : "text-sky-600"
              }`}
            >
              Office Location
            </span>

            <h3
              className={`mt-4 text-2xl font-bold leading-tight sm:text-3xl ${
                isDark ? "text-white" : "text-slate-950"
              }`}
            >
              Aggarwal Millennium Tower 2,
              <br />
              Netaji Subhash Place
            </h3>

            <p
              className={`mt-5 text-base leading-8 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Bull Wave Capital is proudly headquartered in Netaji Subhash Place
              (NSP), Delhi. Our office serves investors with equity research,
              portfolio guidance, and strategic financial planning in a professional
              and client-focused environment.
            </p>

            <div
              className={`mt-8 flex items-center gap-4 rounded-2xl p-4
              ${
                isDark
                  ? "bg-slate-800/80"
                  : "bg-sky-50 ring-1 ring-sky-100"
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Head Office
                </p>
                <p
                  className={`mt-1 text-base sm:text-lg font-semibold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Netaji Subhash Place (NSP), Delhi
                </p>
              </div>
            </div>
          </div>

          <div className="h-[260px] sm:h-[340px] lg:h-full lg:min-h-[420px]">
            <iframe
              title="Bull Wave Capital Office"
              src="https://www.google.com/maps?q=Aggarwal+Millennium+Tower+2,+Netaji+Subhash+Place,+Delhi&output=embed"
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeService;
