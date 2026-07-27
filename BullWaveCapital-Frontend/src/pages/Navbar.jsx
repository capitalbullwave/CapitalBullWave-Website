import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl
      ${
        isDark
          ? "bg-slate-950/95 border-slate-800"
          : "bg-white/95 border-sky-100 shadow-[0_1px_0_rgba(14,165,233,0.08)]"
      }`}
    >
      <div className="mx-auto flex h-16 sm:h-[4.25rem] max-w-[1680px] items-center justify-between gap-3 px-2.5 sm:px-3.5 md:px-4 lg:px-5">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center overflow-hidden rounded-full ring-1 ring-sky-200 bg-white shadow-sm">
            <img
              src={logo}
              alt="Capital BullWave Pvt. Ltd."
              className="h-full w-full object-cover rounded-full"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center leading-tight">
            <div className="flex items-baseline gap-1 whitespace-nowrap">
              <span
                className={`text-[15px] sm:text-[17px] font-semibold tracking-tight ${
                  isDark ? "text-white" : "text-slate-950"
                }`}
              >
                Capital
              </span>
              <span
                className={`text-[15px] sm:text-[17px] font-bold tracking-tight ${
                  isDark ? "text-sky-400" : "text-sky-600"
                }`}
              >
                BullWave
              </span>
            </div>
            <span
              className={`mt-0.5 hidden text-[9px] font-medium uppercase tracking-[0.22em] sm:block ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Private Limited
            </span>
          </div>
        </Link>

        <div
          className={`hidden lg:flex items-center gap-1 rounded-full px-2 py-1
          ${isDark ? "bg-white/5" : "bg-sky-50/80"}`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? "bg-sky-500 text-white"
                      : "bg-white text-sky-700 shadow-sm ring-1 ring-sky-100"
                    : isDark
                      ? "text-slate-300 hover:text-white hover:bg-white/5"
                      : "text-slate-600 hover:text-sky-700 hover:bg-white/70"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
              isDark
                ? "bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10"
                : "bg-sky-50 text-slate-700 ring-1 ring-sky-100 hover:bg-sky-100"
            }`}
          >
            {isDark ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          <Link
            to="/contact"
            className={`hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2 text-[13px] font-semibold !text-white transition hover:-translate-y-0.5 ${
              isDark
                ? "bg-sky-500 hover:bg-sky-400"
                : "bg-slate-950 hover:bg-slate-800"
            }`}
          >
            Contact
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`lg:hidden flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
              isDark
                ? "bg-white/5 text-white ring-1 ring-white/10"
                : "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
            }`}
          >
            {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300
        ${menuOpen ? "max-h-[420px] border-t" : "max-h-0"}
        ${isDark ? "border-slate-800" : "border-sky-100"}`}
      >
        <div
          className={`px-3 py-3 sm:px-4 ${
            isDark ? "bg-slate-950" : "bg-white"
          }`}
        >
          {[...navItems, { name: "Contact", path: "/contact", icon: FaEnvelope }].map(
            (item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `mb-1 flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium transition-all
                    ${
                      isActive
                        ? isDark
                          ? "bg-sky-500/15 text-sky-300"
                          : "bg-sky-50 text-sky-700"
                        : isDark
                          ? "text-slate-200 hover:bg-white/5"
                          : "text-slate-700 hover:bg-sky-50"
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-[14px]" />
                    <span>{item.name}</span>
                  </div>
                  <span aria-hidden="true">→</span>
                </NavLink>
              );
            }
          )}
        </div>
      </div>
    </nav>
  );
}
