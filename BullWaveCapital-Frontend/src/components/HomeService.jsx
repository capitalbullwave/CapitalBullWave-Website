import { useEffect, useRef, useState } from "react";
import {
  FaChartLine,
  FaLightbulb,
  FaClock,
  FaUsers,
  FaCogs,
} from "react-icons/fa";
import { images } from "../assets/images";

const panels = [
  {
    eyebrow: "Research",
    title: "Stock Market Research",
    description:
      "Trend, sector, and stock analysis to surface clear equity opportunities.",
    icon: FaLightbulb,
  },
  {
    eyebrow: "Guidance",
    title: "Investment Guidance",
    description:
      "Short-term and long-term planning aligned to goals and risk appetite.",
    icon: FaClock,
  },
  {
    eyebrow: "Advisory",
    title: "Financial Advisory",
    description:
      "Asset allocation, portfolio review, and practical wealth-building support.",
    icon: FaUsers,
  },
  {
    eyebrow: "Analytics",
    title: "Market Analytics",
    description:
      "Live charts and disciplined signals for clearer, faster decisions.",
    icon: FaCogs,
  },
];

const HomeService = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.18 }
    );
    observer.observe(node);
    const failsafe = window.setTimeout(() => setInView(true), 1600);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`svc-info relative w-full overflow-hidden ${
        isDark ? "svc-info--dark" : "svc-info--light"
      } ${inView ? "svc-info--inview" : ""}`}
      aria-label="Our services overview"
    >
      <img
        src={images.featureSkyline}
        alt=""
        aria-hidden="true"
        className="svc-info__bg absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="svc-info__veil absolute inset-0" aria-hidden="true" />
      <div className="svc-info__curve absolute inset-0" aria-hidden="true" />

      <div className="svc-info__shell relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 xl:gap-10">
          {/* Left hub */}
          <div className="svc-info__hub-wrap mx-auto w-full max-w-[17.5rem] sm:max-w-[19.5rem] lg:mx-0 lg:max-w-[22rem]">
            <div className="svc-info__hub" aria-hidden="false">
              <div className="svc-info__hub-core">
                <FaChartLine className="svc-info__hub-icon" aria-hidden="true" />
                <p className="svc-info__hub-kicker">Our Services</p>
                <h2 className="svc-info__hub-title">
                  Research &amp; Advisory
                </h2>
              </div>
              <span className="svc-info__arc svc-info__arc--thick" />
              <span className="svc-info__arc svc-info__arc--thin" />
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`svc-info__node svc-info__node--${i} ${
                    active === i ? "is-active" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right panels */}
          <div className="svc-info__panels relative">
            <svg
              className="svc-info__links pointer-events-none absolute inset-y-0 -left-8 hidden w-10 lg:block xl:-left-10 xl:w-12"
              viewBox="0 0 48 400"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {[48, 148, 248, 348].map((y, i) => (
                <path
                  key={y}
                  className={`svc-info__link-path ${active === i ? "is-active" : ""}`}
                  d={
                    i === 0
                      ? "M48 200 C 24 200, 24 48, 0 48"
                      : i === 1
                        ? "M48 200 L 0 148"
                        : i === 2
                          ? "M48 200 L 0 248"
                          : "M48 200 C 24 200, 24 348, 0 348"
                  }
                  fill="none"
                  strokeWidth="1.5"
                />
              ))}
            </svg>

            <ul className="flex flex-col gap-2.5 sm:gap-3 lg:gap-3.5">
              {panels.map((panel, index) => {
                const Icon = panel.icon;
                const isActive = active === index;
                return (
                  <li key={panel.title}>
                    <article
                      style={{ "--i": index }}
                      className={`svc-info__panel ${isActive ? "is-active" : ""}`}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      tabIndex={0}
                      aria-label={panel.title}
                    >
                      <div className="svc-info__badge" aria-hidden="true">
                        <span className="svc-info__badge-ring" />
                        <span className="svc-info__badge-core">
                          <Icon />
                        </span>
                      </div>
                      <div className="svc-info__copy min-w-0">
                        <p className="svc-info__eyebrow">{panel.eyebrow}</p>
                        <h3 className="svc-info__panel-title">{panel.title}</h3>
                        <p className="svc-info__desc">{panel.description}</p>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeService;
