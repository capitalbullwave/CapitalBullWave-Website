import { useEffect, useRef, useState } from "react";
import { images } from "../assets/images";
import workspaceFallback from "../assets/why-choose-workspace.svg";

const milestones = [
  {
    marker: "01",
    title: "Launching",
    description:
      "Structured research for equity swing traders and Nifty / BankNifty strategies, with clear buy and sell guidance.",
  },
  {
    marker: "02",
    title: "Investing",
    description:
      "Risk-aware advisory focused on capital protection, position sizing, and disciplined portfolio habits.",
  },
  {
    marker: "03",
    title: "Expanding",
    description:
      "Investor education and dual-office support from New Delhi and Dubai for confident market decisions.",
  },
];

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const reveal = () => setVisible(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
    );

    observer.observe(node);
    const safety = window.setTimeout(reveal, 1800);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return [ref, visible];
}

const HomeChoose = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const [sectionRef, sectionVisible] = useInView();
  const [imgSrc, setImgSrc] = useState(images.featureSkyline || images.workspace);
  const [active, setActive] = useState(0);

  return (
    <section
      ref={sectionRef}
      className={`bw-history relative w-full overflow-hidden ${
        isDark ? "bw-history--dark" : "bw-history--light"
      } ${sectionVisible ? "bw-history--inview" : ""}`}
      aria-label="About Capital BullWave"
    >
      <div className="bw-history__frame mx-auto grid max-w-7xl lg:min-h-[100svh] lg:min-h-[100dvh] lg:grid-cols-12">
        {/* Left angled about panel */}
        <aside className="bw-history__aside relative lg:col-span-5">
          <img
            src={imgSrc}
            alt=""
            aria-hidden="true"
            width={1200}
            height={1600}
            loading="lazy"
            decoding="async"
            onError={() => setImgSrc(workspaceFallback)}
            className="bw-history__aside-img absolute inset-0 h-full w-full object-cover"
          />
          <div className="bw-history__aside-veil absolute inset-0" aria-hidden="true" />

          <div className="bw-history__aside-copy relative z-10 flex h-full flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:pr-16">
            <p className="bw-history__eyebrow">
              About Us <span aria-hidden="true">&gt;&gt;</span>
            </p>
            <h2 className="bw-history__title mt-3">
              Capital BullWave
              <span className="mt-1 block">Journey</span>
            </h2>
            <p className="bw-history__lead mt-4 max-w-md">
              Structured market research, active trading advice, and investor
              education — helping traders and investors build confidence in
              equities and financial assets.
            </p>
          </div>
        </aside>

        {/* Right timeline */}
        <div
          className={`bw-history__timeline relative flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 lg:col-span-7 lg:px-10 lg:py-14 xl:pl-14 ${
            isDark ? "bg-slate-950" : "bg-white"
          }`}
        >
          <ol className="bw-history__list relative mx-auto w-full max-w-xl space-y-8 sm:space-y-10 lg:space-y-12">
            <span className="bw-history__spine" aria-hidden="true" />

            {milestones.map((item, index) => {
              const isActive = active === index;
              return (
                <li
                  key={item.title}
                  style={{ "--i": index }}
                  className={`bw-history__item bw-history__item--${index} ${
                    isActive ? "is-active" : ""
                  }`}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                >
                  <button
                    type="button"
                    className="bw-history__diamond"
                    aria-label={`${item.title}, milestone ${item.marker}`}
                    aria-current={isActive ? "step" : undefined}
                    onClick={() => setActive(index)}
                  >
                    <span className="bw-history__diamond-face">
                      <span className="bw-history__year">{item.marker}</span>
                    </span>
                  </button>

                  <div className="bw-history__content min-w-0">
                    <h3
                      className={`bw-history__step-title ${
                        isDark ? "text-sky-300" : "text-sky-600"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`bw-history__step-text mt-1.5 ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HomeChoose;
