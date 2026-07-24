import { FaChartLine, FaHandshake, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";

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
    <section className="w-full py-16 sm:py-20 lg:py-24">
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
          className={`mt-5 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
            isDark ? "text-white" : "text-slate-900"
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

      <div className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className={`min-w-0 rounded-2xl p-6 sm:p-8 transition duration-300 hover:-translate-y-1
              ${
                isDark
                  ? "bg-slate-900 ring-1 ring-slate-800 hover:ring-sky-500/40"
                  : "bg-white ring-1 ring-sky-100 shadow-sm shadow-sky-100/80 hover:shadow-md hover:ring-sky-200"
              }`}
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white
                ${isDark ? "bg-sky-500" : "bg-sky-500"}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3
                className={`text-xl font-semibold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`mt-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                  isDark ? "text-sky-400" : "text-sky-600"
                }`}
              >
                {service.subtitle}
              </p>
              <p
                className={`mt-3 text-sm leading-7 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {service.description}
              </p>
            </article>
          );
        })}
      </div>

      <div
        className={`mt-12 sm:mt-16 overflow-hidden rounded-2xl sm:rounded-3xl
        ${
          isDark
            ? "bg-slate-900 ring-1 ring-slate-800"
            : "bg-white ring-1 ring-sky-100 shadow-sm shadow-sky-100/80"
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
                isDark ? "text-white" : "text-slate-900"
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
              className={`mt-8 flex items-center gap-4 rounded-xl p-4
              ${
                isDark
                  ? "bg-slate-800/80"
                  : "bg-sky-50 ring-1 ring-sky-100"
              }`}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white
                ${isDark ? "bg-sky-500" : "bg-sky-500"}`}
              >
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <p
                  className={`text-xs uppercase tracking-[0.2em] ${
                    isDark ? "text-slate-500" : "text-slate-500"
                  }`}
                >
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
