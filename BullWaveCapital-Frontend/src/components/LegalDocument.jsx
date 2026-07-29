import RevealOnScroll from "./RevealOnScroll";
import { useLocation } from "react-router-dom";

/**
 * Premium shell for Privacy / Terms / Disclaimer pages.
 * Keeps content intact — only layout, theme, motion, responsiveness.
 */
export default function LegalDocument({
  theme = "light",
  badge,
  title,
  effectiveDate,
  children,
}) {
  const isDark = theme === "dark";
  const { pathname } = useLocation();
  const dateLabel =
    effectiveDate ||
    new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <section
      key={pathname}
      className="page-shell legal-doc page-enter w-full py-4 sm:py-6 lg:py-8"
    >
      <RevealOnScroll eager>
        <div
          className={`legal-doc__card relative overflow-hidden rounded-2xl sm:rounded-[1.75rem]
          ${
            isDark
              ? "bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 ring-1 ring-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              : "bg-gradient-to-br from-white via-sky-50 to-sky-100 ring-1 ring-sky-100 shadow-[0_18px_48px_rgba(14,165,233,0.12)]"
          }`}
        >
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl animate-soft-pulse
            ${isDark ? "bg-sky-500/20" : "bg-sky-300/50"}`}
          />
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full blur-3xl
            ${isDark ? "bg-cyan-500/10" : "bg-sky-200/60"}`}
          />
          <div
            aria-hidden="true"
            className={`absolute inset-x-0 top-0 h-1 ${
              isDark
                ? "bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-600"
                : "bg-gradient-to-r from-sky-300 via-sky-500 to-cyan-400"
            }`}
          />

          <header
            className={`relative border-b px-4 py-6 sm:px-8 sm:py-8 lg:px-10
            ${isDark ? "border-white/10" : "border-sky-100"}`}
          >
            <p
              className={`inline-flex rounded-full px-3 py-1.5 sm:px-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.26em]
              ${
                isDark
                  ? "bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/20"
                  : "bg-white text-sky-700 ring-1 ring-sky-100 shadow-sm"
              }`}
            >
              {badge}
            </p>
            <h1
              className={`mt-4 sm:mt-5 text-xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {title}
            </h1>
            <p
              className={`mt-2 sm:mt-3 text-xs sm:text-sm ${
                isDark ? "text-slate-400" : "text-neutral-700"
              }`}
            >
              Effective Date: {dateLabel}
            </p>
          </header>

          <div
            className={`legal-doc__body relative space-y-6 sm:space-y-8 px-4 py-6 text-sm sm:text-base leading-6 sm:leading-8 sm:px-8 sm:py-8 lg:px-10
            ${isDark ? "text-slate-300" : "text-neutral-800"}`}
          >
            {children}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export function LegalSection({ theme, title, children }) {
  const isDark = theme === "dark";
  return (
    <RevealOnScroll>
      <section className="legal-doc__section">
        <h2
          className={`mb-3 sm:mb-4 text-base sm:text-xl font-semibold tracking-tight ${
            isDark ? "text-sky-300" : "text-sky-700"
          }`}
        >
          {title}
        </h2>
        {children}
      </section>
    </RevealOnScroll>
  );
}

export function LegalSub({ theme, title, children }) {
  const isDark = theme === "dark";
  return (
    <div className="mt-4 sm:mt-5">
      <h3
        className={`mb-1.5 sm:mb-2 text-sm sm:text-lg font-semibold ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

export function LegalNote({ theme, children }) {
  const isDark = theme === "dark";
  return (
    <div
      className={`rounded-xl sm:rounded-2xl border p-4 sm:p-5 text-xs sm:text-sm leading-5 sm:leading-7
      ${
        isDark
          ? "border-sky-500/20 bg-sky-500/10 text-slate-300"
          : "border-sky-100 bg-white/80 text-neutral-700 shadow-sm"
      }`}
    >
      {children}
    </div>
  );
}

export function LegalLink({ theme, href, children }) {
  const isDark = theme === "dark";
  return (
    <a
      href={href}
      className={`inline-block break-words border-b-2 pb-0.5 font-medium transition-colors ${
        isDark
          ? "border-sky-400 text-sky-400 hover:border-sky-300 hover:text-sky-300"
          : "border-sky-600 text-sky-700 hover:border-sky-800 hover:text-sky-900"
      }`}
    >
      {children}
    </a>
  );
}
