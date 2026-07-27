import { useEffect, useRef, useState } from "react";
import {
  FaCheck,
  FaLayerGroup,
  FaShieldAlt,
  FaGraduationCap,
} from "react-icons/fa";
import workspaceImage from "../assets/why-choose-workspace.svg";

const choiceIcons = [FaLayerGroup, FaShieldAlt, FaGraduationCap];

const choices = [
  {
    title: "Structured Trading Plans",
    description:
      "Offers dedicated plans for equity swing traders and derivative traders focused on Nifty / BankNifty strategies.",
  },
  {
    title: "Risk Management Focus",
    description:
      "Built around capital protection and smart risk planning for active retail market participants.",
  },
  {
    title: "Investor Education",
    description:
      "Delivers market insight updates and educational frameworks to foster disciplined trading habits.",
  },
];

const benefits = [
  "Clear plan segmentation for equity and derivative traders.",
  "Research-backed buy and sell guidance with defined risk levels.",
  "Daily market direction updates for active participants.",
  "Portfolio review support for long-term investors.",
  "Risk-aware trading guidance with capital protection frameworks.",
  "Educational guidance to help traders adopt disciplined habits.",
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

const HomeChoose = ({ theme }) => {
  const isDark = theme === "dark";
  const [sectionRef, sectionVisible] = useInView();

  return (
    <section
      ref={sectionRef}
      className={`home-choose relative w-full overflow-hidden py-12 sm:py-16 lg:py-20 ${
        sectionVisible ? "is-visible" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-8 -z-10 mx-auto h-[28rem] max-w-5xl rounded-full blur-3xl
        ${isDark ? "bg-sky-500/10" : "bg-sky-200/50"}`}
      />

      {/* Header */}
      <div className="home-choose-reveal mx-auto max-w-3xl px-1 text-center">
        <p
          className={`inline-flex rounded-full px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em]
          ${
            isDark
              ? "bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/20"
              : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
          }`}
        >
          Why Choose Capital Bull Wave
        </p>
        <h2
          className={`mt-4 text-2xl font-bold leading-tight tracking-tight sm:mt-5 sm:text-3xl lg:text-4xl ${
            isDark ? "text-white" : "text-slate-950"
          }`}
        >
          Modern stock market research, advisory, and trading support designed
          for Indian markets.
        </h2>
        <p
          className={`mx-auto mt-3 max-w-2xl text-sm leading-7 sm:mt-4 sm:text-base md:text-lg ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Capital Bull Wave focuses on structured market research, active
          trading advice, and investor education to help traders and investors
          build confidence in equities and financial assets.
        </p>
      </div>

      {/* Visual + pillars */}
      <div className="mt-8 grid items-stretch gap-5 sm:mt-12 lg:grid-cols-12 lg:gap-6">
        <div
          className={`home-choose-reveal home-choose-reveal--delay-1 relative overflow-hidden rounded-2xl sm:rounded-3xl lg:col-span-5
          ${
            isDark
              ? "bg-slate-900 ring-1 ring-white/10"
              : "bg-white ring-1 ring-sky-100 shadow-[0_14px_36px_rgba(14,165,233,0.08)]"
          }`}
        >
          <img
            src={workspaceImage}
            alt="Market research workspace"
            width={960}
            height={640}
            loading="lazy"
            decoding="async"
            className="home-choose-visual__img h-48 w-full object-cover object-center sm:h-56 lg:h-full lg:min-h-[360px]"
          />
          <div
            className={`absolute inset-x-0 bottom-0 p-4 sm:p-5 ${
              isDark
                ? "bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"
                : "bg-gradient-to-t from-white via-white/85 to-transparent"
            }`}
          >
            <div
              className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[11px] sm:text-xs font-semibold
              ${
                isDark
                  ? "bg-slate-900/90 text-sky-300 ring-1 ring-white/10"
                  : "bg-white text-sky-700 shadow-md shadow-sky-100/80 ring-1 ring-sky-100"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
              </span>
              Research · Guidance · Education
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 lg:col-span-7">
          {choices.map((item, index) => {
            const Icon = choiceIcons[index];
            return (
              <article
                key={item.title}
                className={`home-choose-reveal home-choose-card group flex gap-3 rounded-2xl p-4 sm:gap-4 sm:p-5
                ${
                  isDark
                    ? "bg-slate-900/80 ring-1 ring-white/10"
                    : "bg-white ring-1 ring-sky-100 shadow-[0_10px_28px_rgba(14,165,233,0.06)]"
                }`}
                style={{ "--choose-delay": `${140 + index * 90}ms` }}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12
                  ${
                    isDark
                      ? "bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/20"
                      : "bg-sky-50 text-sky-600 ring-1 ring-sky-100"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-bold tracking-[0.18em]
                      ${isDark ? "text-sky-400" : "text-sky-500"}`}
                    >
                      0{index + 1}
                    </span>
                    <h3
                      className={`text-base font-bold leading-snug sm:text-lg ${
                        isDark ? "text-white" : "text-slate-950"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className={`mt-1.5 text-sm leading-6 sm:leading-7 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Benefits + platform */}
      <div className="mt-5 grid gap-4 sm:mt-6 sm:gap-5 lg:grid-cols-2">
        <div
          className={`home-choose-reveal home-choose-reveal--delay-4 rounded-2xl sm:rounded-3xl p-5 sm:p-7
          ${
            isDark
              ? "bg-slate-900/80 ring-1 ring-white/10"
              : "bg-sky-50/90 ring-1 ring-sky-100"
          }`}
        >
          <h3
            className={`text-lg font-semibold tracking-tight sm:text-xl ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            Core benefits at a glance
          </h3>
          <ul className="mt-5 space-y-3">
            {benefits.map((text, index) => (
              <li
                key={text}
                className={`home-choose-benefit flex items-start gap-3 text-sm leading-6 sm:text-[15px] sm:leading-7
                ${isDark ? "text-slate-300" : "text-slate-600"}`}
                style={{ "--choose-delay": `${280 + index * 45}ms` }}
              >
                <span
                  className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full
                  ${
                    isDark
                      ? "bg-sky-500/20 text-sky-300"
                      : "bg-sky-500 text-white"
                  }`}
                >
                  <FaCheck className="h-2.5 w-2.5" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`home-choose-reveal home-choose-reveal--delay-5 relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-7
          ${
            isDark
              ? "bg-slate-900 ring-1 ring-white/10"
              : "bg-white ring-1 ring-sky-100 shadow-[0_12px_32px_rgba(14,165,233,0.07)]"
          }`}
        >
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl animate-soft-pulse
            ${isDark ? "bg-sky-500/20" : "bg-sky-200/70"}`}
          />

          <h3
            className={`relative text-lg font-semibold tracking-tight sm:text-xl ${
              isDark ? "text-sky-300" : "text-sky-700"
            }`}
          >
            Platform overview
          </h3>
          <p
            className={`relative mt-3 text-sm leading-6 sm:text-[15px] sm:leading-7 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            The platform is positioned as a modern stock market investment and
            research advisory service, with a strong focus on equity analysis,
            active support, and investor education.
          </p>

          <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
            <div
              className={`rounded-xl p-4
              ${
                isDark
                  ? "bg-slate-950/70 ring-1 ring-white/10"
                  : "bg-sky-50 ring-1 ring-sky-100"
              }`}
            >
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.18em]
                ${isDark ? "text-sky-400" : "text-sky-600"}`}
              >
                Core Plan
              </p>
              <p
                className={`mt-2 text-sm leading-6 sm:leading-7 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Equity calls for swing and long-term investors over a 10–120 day
                horizon.
              </p>
            </div>
            <div
              className={`rounded-xl p-4
              ${
                isDark
                  ? "bg-slate-950/70 ring-1 ring-white/10"
                  : "bg-sky-50 ring-1 ring-sky-100"
              }`}
            >
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.18em]
                ${isDark ? "text-sky-400" : "text-sky-600"}`}
              >
                Elite Plan
              </p>
              <p
                className={`mt-2 text-sm leading-6 sm:leading-7 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Nifty / BankNifty derivative signals, daily trend updates, and
                reversal levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeChoose;
