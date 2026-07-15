
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

const HomeService = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">
          Our Services
        </p>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Professional stock market research and investment advisory from Delhi.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          Bull Wave Capital provides market research, investment guidance, and financial advisory services from Netaji Subhash Place, helping clients pursue disciplined wealth growth in equities and financial assets.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_0_0_24px_rgba(59,130,246,0.14)] focus-within:border-blue-500 active:border-blue-500"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-lg shadow-sky-200/40">
                <Icon className="h-7 w-7" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
                  {service.subtitle}
                </p>
                <p className="text-sm leading-7 text-slate-600">{service.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="grid lg:grid-cols-2">

                {/* Left Content */}
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-700">
                    Office Location
                </span>

                <h3 className="mt-4 text-3xl font-bold leading-tight text-slate-900">
                    Aggarwal Millennium Tower 2,
                    <br />
                    Netaji Subhash Place
                </h3>

                <p className="mt-5 text-[16px] leading-8 text-slate-600">
                    Bull Wave Capital is proudly headquartered in Netaji Subhash Place
                    (NSP), Delhi. Our office serves investors with equity research,
                    portfolio guidance, and strategic financial planning in a professional
                    and client-focused environment.
                </p>

                <div className="mt-8 flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
                    <FaMapMarkerAlt className="text-2xl" />
                    </div>

                    <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                        Head Office
                    </p>

                    <p className="mt-1 text-lg font-semibold text-slate-900">
                        Netaji Subhash Place (NSP), Delhi
                    </p>
                    </div>
                </div>
                </div>

                {/* Google Map */}
                <div className="h-[350px] sm:h-[420px] lg:h-full min-h-[420px]">
                <iframe
                    title="Bull Wave Capital Office"
                    src="https://www.google.com/maps?q=Aggarwal+Millennium+Tower+2,+Netaji+Subhash+Place,+Delhi&output=embed"
                    className="h-full w-full border-0"
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
