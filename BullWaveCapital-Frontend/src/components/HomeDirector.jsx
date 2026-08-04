import directorPhoto from "../assets/director.png";

const HIGHLIGHTS = [
  {
    title: "Market Research",
    desc: "Equity, derivatives & commodity insight",
  },
  {
    title: "Global Presence",
    desc: "Leadership across New Delhi & Dubai",
  },
  {
    title: "Risk Discipline",
    desc: "Capital protection first frameworks",
  },
  {
    title: "Investor Education",
    desc: "Building lasting trading skill",
  },
];

/**
 * Home — Meet the Director: Rohit Jaiswal
 */
export default function HomeDirector({ theme = "light" }) {
  const dark = theme === "dark";

  return (
    <section
      className={`home-director relative w-full overflow-hidden py-10 sm:py-14 lg:py-20 ${
        dark ? "home-director--dark" : "home-director--light"
      }`}
      aria-labelledby="home-director-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="home-director__orb home-director__orb--1" />
        <div className="home-director__orb home-director__orb--2" />
        <div className="home-director__orb home-director__orb--3" />
        <div className="home-director__sheen" />
        <div className="home-director__grid" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-0 sm:px-2 lg:px-4">
        <div className="mb-6 text-center sm:mb-10 lg:mb-12">
          <span
            className={`home-director__badge inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold tracking-wide sm:px-4 sm:text-sm ${
              dark
                ? "bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/25"
                : "bg-white/90 text-sky-700 ring-1 ring-sky-200 shadow-sm shadow-sky-100/80"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                dark ? "bg-sky-400" : "bg-sky-500"
              } home-director__pulse`}
              aria-hidden="true"
            />
            Leadership
          </span>
          <h2
            id="home-director-heading"
            className={`mt-3 text-[1.65rem] font-bold tracking-tight sm:mt-4 sm:text-3xl md:text-4xl ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            Meet Our{" "}
            <span className={dark ? "text-sky-400" : "text-sky-600"}>
              Director
            </span>
          </h2>
          <p
            className={`mx-auto mt-2.5 max-w-2xl px-1 text-sm leading-relaxed sm:mt-3 sm:text-base ${
              dark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Rohit Jaiswal leads Capital BullWave with research discipline,
            market clarity, and a clear focus on investor education.
          </p>
        </div>

        <div className="home-director__panel grid grid-cols-1 items-stretch gap-5 sm:gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Portrait */}
          <div className="home-director__photo-wrap relative mx-auto w-full max-w-[17.5rem] sm:max-w-md lg:col-span-5 lg:mx-0 lg:max-w-none lg:self-center">
            <div className="home-director__photo-glow" aria-hidden="true" />
            <div className="home-director__photo-frame relative overflow-hidden">
              <img
                src={directorPhoto}
                alt="Rohit Jaiswal, Director of Capital BullWave"
                className="home-director__photo relative z-10 h-auto w-full object-cover object-top"
                width={640}
                height={800}
                loading="lazy"
                decoding="async"
              />
              <div className="home-director__photo-fade" aria-hidden="true" />
              <div className="home-director__photo-caption">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-200/90 sm:text-xs sm:tracking-[0.2em]">
                  Director
                </p>
                <p className="mt-0.5 text-[0.95rem] font-bold tracking-tight text-white sm:text-lg">
                  Rohit Jaiswal
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="flex min-w-0 flex-col justify-center lg:col-span-7">
            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-sm sm:tracking-[0.2em] ${
                dark ? "text-sky-400" : "text-sky-600"
              }`}
            >
              <span className="sm:hidden">Director · Capital BullWave</span>
              <span className="hidden sm:inline">
                Director · Capital BullWave Private Limited
              </span>
            </p>

            <h3
              className={`mt-1.5 text-[1.75rem] font-extrabold tracking-tight sm:mt-2 sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${
                dark ? "text-white" : "text-slate-900"
              }`}
            >
              Rohit{" "}
              <span className="home-director__name-accent">Jaiswal</span>
            </h3>

            <p
              className={`mt-1.5 text-xs font-medium leading-snug sm:mt-2 sm:text-base ${
                dark ? "text-sky-300/90" : "text-sky-700"
              }`}
            >
              Research · Trading Guidance · Investor Education
            </p>

            <blockquote
              className={`home-director__quote mt-4 text-sm leading-relaxed sm:mt-6 sm:text-base lg:text-[1.05rem] lg:leading-8 ${
                dark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              “At Capital BullWave, we believe disciplined research and clear
              risk frameworks help every trader and investor move with
              confidence. Our focus is simple, transparent market insight,
              structured plans, and education that builds lasting skill.”
            </blockquote>

            <p
              className={`home-director__sign mt-3 text-right text-base sm:mt-4 sm:text-xl ${
                dark ? "text-sky-300" : "text-sky-700"
              }`}
            >
              — Rohit Jaiswal
            </p>

            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3.5">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item.title}
                  className={`home-director__chip flex min-w-0 items-start gap-2.5 rounded-xl px-3 py-3 sm:gap-3 sm:px-4 sm:py-3.5 ${
                    dark
                      ? "bg-slate-900/55 text-slate-200 ring-1 ring-sky-500/20"
                      : "bg-white/90 text-slate-700 ring-1 ring-sky-100 shadow-sm shadow-sky-100/60"
                  }`}
                >
                  <span
                    className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold sm:h-8 sm:w-8 sm:text-sm ${
                      dark
                        ? "bg-gradient-to-br from-sky-500/30 to-sky-600/20 text-sky-300"
                        : "bg-gradient-to-br from-sky-100 to-sky-50 text-sky-700"
                    }`}
                    aria-hidden="true"
                  >
                    ◆
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block text-[13px] font-semibold sm:text-sm ${
                        dark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`mt-0.5 block text-[11px] leading-snug sm:text-[13px] ${
                        dark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {item.desc}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
