import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaRocket,
  FaBriefcase,
  FaGlobe,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import logo from "../assets/capitalbullwave.png";

const navItems = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "About", path: "/about", icon: FaRocket },
  { name: "Services", path: "/services", icon: FaBriefcase },
  { name: "Markets", path: "/markets", icon: FaGlobe },
];

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isDark = theme === "dark";

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-[2px] transition-opacity duration-300
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      <div className="relative z-50 px-2 sm:px-3 md:px-4 pt-2 sm:pt-3">
        <nav
          className={`trade-nav olymp-nav mx-auto max-w-[1680px] overflow-hidden rounded-2xl sm:rounded-[1.35rem] border backdrop-blur-2xl transition-all duration-300
          ${
            scrolled
              ? isDark
                ? "trade-nav--elevated border-sky-400/20 bg-slate-950/90 shadow-[0_18px_50px_rgba(2,6,23,0.55)]"
                : "trade-nav--elevated border-sky-200/90 bg-white/92 shadow-[0_16px_40px_rgba(14,165,233,0.14)]"
              : isDark
                ? "border-white/10 bg-slate-950/75"
                : "border-sky-100/90 bg-white/78 shadow-[0_8px_28px_rgba(14,165,233,0.08)]"
          }`}
        >
          {/* subtle trading accent line */}
          <div
            aria-hidden="true"
            className="trade-nav__accent pointer-events-none absolute inset-x-0 top-0 h-px"
          />

          <div className="relative flex h-14 sm:h-[4.25rem] items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 md:px-5">
            {/* Brand */}
            <Link
              to="/"
              className="group flex min-w-0 items-center gap-2.5 sm:gap-3 flex-shrink-0"
              onClick={() => setMenuOpen(false)}
            >
              <div
                className={`relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-2 transition duration-300
                ${
                  isDark
                    ? "ring-sky-400/35 group-hover:ring-sky-300/60"
                    : "ring-sky-200 group-hover:ring-sky-400/50"
                }`}
              >
                <img
                  src={logo}
                  alt="Capital BullWave Pvt. Ltd."
                  className="h-full w-full object-cover rounded-full"
                />
              </div>

              <div className="flex min-w-0 flex-col justify-center leading-tight">
                <div className="flex items-baseline gap-1 whitespace-nowrap">
                  <span
                    className={`text-base sm:text-lg font-bold tracking-tight ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    Capital
                  </span>
                  <span
                    className={`text-base sm:text-lg font-extrabold tracking-tight ${
                      isDark ? "text-sky-400" : "text-sky-600"
                    }`}
                  >
                    BullWave
                  </span>
                </div>
                <span
                  className={`mt-0.5 hidden text-[10px] font-bold uppercase tracking-[0.24em] sm:block ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Private Limited
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div
              className={`hidden lg:flex items-center gap-1 rounded-full px-1.5 py-1.5
              ${
                isDark
                  ? "bg-white/[0.04] ring-1 ring-white/10"
                  : "bg-sky-50/95 ring-1 ring-sky-100"
              }`}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `trade-nav__link relative rounded-full px-4 xl:px-5 py-2.5 text-[15px] font-bold tracking-wide transition-all duration-200 xl:text-base ${
                      isActive
                        ? isDark
                          ? "is-active bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                          : "is-active bg-white text-sky-700 shadow-sm ring-1 ring-sky-100"
                        : isDark
                          ? "text-slate-200 hover:text-white hover:bg-white/6"
                          : "text-neutral-800 hover:text-sky-700 hover:bg-white/90"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                  isDark
                    ? "bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-sky-400/30"
                    : "bg-sky-50 text-slate-700 ring-1 ring-sky-100 hover:bg-sky-100"
                }`}
              >
                {isDark ? <FaSun size={14} /> : <FaMoon size={14} />}
              </button>

              <Link
                to="/contact"
                className="bw-gradient-btn trade-nav__cta hidden sm:inline-flex items-center justify-center rounded-full px-5 sm:px-6 py-2.5 text-[15px] font-bold tracking-wide !text-white transition hover:-translate-y-0.5"
              >
                Contact
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                  menuOpen
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                    : isDark
                      ? "bg-white/5 text-white ring-1 ring-white/10"
                      : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
                }`}
              >
                {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
              </button>
            </div>
          </div>

          {/* Mobile panel */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-out
            ${menuOpen ? "trade-nav__panel--open max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div
              className={`border-t px-3 py-3 sm:px-4 ${
                isDark
                  ? "border-white/10 bg-slate-950/95"
                  : "border-sky-100 bg-white/95"
              }`}
            >
              {[
                ...navItems,
                { name: "Contact", path: "/contact", icon: FaEnvelope },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setMenuOpen(false)}
                    style={{ animationDelay: `${index * 40}ms` }}
                    className={({ isActive }) =>
                      `trade-nav__mobile-link mb-1.5 flex items-center justify-between rounded-2xl px-3.5 py-3.5 text-base font-bold tracking-wide transition-all
                      ${
                        isActive
                          ? isDark
                            ? "bg-sky-500/18 text-sky-300 ring-1 ring-sky-400/25"
                            : "bg-sky-50 text-sky-700 ring-1 ring-sky-100 shadow-sm"
                          : isDark
                            ? "text-slate-200 hover:bg-white/5"
                            : "text-neutral-800 hover:bg-sky-50"
                      }`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                          isDark
                            ? "bg-white/5 text-sky-300"
                            : "bg-sky-100 text-sky-600"
                        }`}
                      >
                        <Icon className="text-[15px]" />
                      </span>
                      <span>{item.name}</span>
                    </div>
                    <span
                      aria-hidden="true"
                      className={isDark ? "text-slate-500" : "text-sky-300"}
                    >
                      →
                    </span>
                  </NavLink>
                );
              })}

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="bw-gradient-btn mt-2 flex w-full items-center justify-center rounded-2xl px-5 py-3.5 text-[15px] font-semibold !text-white sm:hidden"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
