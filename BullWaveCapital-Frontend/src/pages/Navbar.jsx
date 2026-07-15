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
  { name: "Contact", path: "/contact", icon: FaEnvelope },
];

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b shadow-sm
      ${
        isDark
          ? "bg-slate-950/95 border-slate-800"
          : "bg-white/95 border-slate-200"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-600" />

      <div className="mx-auto flex h-20 max-w-[1450px] items-center justify-between px-4 sm:px-6 lg:px-10">

          {/* ========================= LOGO ========================= */}

        <Link
          to="/"
          className="flex items-center gap-3 flex-shrink-0"
        >
          {/* Logo */}
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center overflow-hidden rounded-full border border-blue-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
            <img
              src={logo}
              alt="Capital BullWave Pvt. Ltd."
              className="h-full w-full object-cover rounded-full"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col justify-center leading-tight">

            <div className="flex items-baseline gap-1 whitespace-nowrap">

              <span
                className={`text-[15px] sm:text-[17px] lg:text-[18px] font-bold uppercase ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                CAPITAL
              </span>

              <span className="text-[15px] sm:text-[17px] lg:text-[18px] font-extrabold uppercase bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                BULLWAVE
              </span>

            </div>

            <span
              className={`text-[9px] sm:text-[10px] uppercase tracking-[0.22em] ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              PRIVATE LIMITED
            </span>

          </div>

        </Link>

        {/* ====================== Desktop Navigation ====================== */}

        <div className="hidden lg:flex flex-1 justify-center items-center gap-8 xl:gap-10">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 py-2 text-[14px] font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : isDark
                      ? "text-slate-200 hover:text-blue-400"
                      : "text-slate-700 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={`text-[13px] transition-all duration-300 ${
                        isActive
                          ? "text-blue-600"
                          : "group-hover:text-blue-500"
                      }`}
                    />

                    <span>{item.name}</span>

                    <span
                      className={`absolute left-0 -bottom-[6px] h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            );
          })}

        </div>

        {/* ===================== Right Side ===================== */}

        <div className="flex items-center gap-3 ml-8 lg:ml-10 flex-shrink-0">

          {/* Theme */}

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`flex h-8 w-8 items-center justify-center cursor-pointer rounded-full border transition-all duration-300 ${
              isDark
                ? "border-slate-700 text-white hover:bg-slate-800"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {isDark ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-300 ${
              isDark
                ? "border-slate-700 bg-slate-900 text-white"
                : "border-slate-300 bg-white text-blue-700"
            }`}
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>

        </div>

      </div>

      {/* ===========================
              Mobile Menu
      =========================== */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300
        ${
          menuOpen
            ? "max-h-[500px] border-t"
            : "max-h-0"
        }
        ${
          isDark
            ? "border-slate-800"
            : "border-slate-200"
        }`}
      >

        <div
          className={`px-5 py-5 backdrop-blur-xl
          ${
            isDark
              ? "bg-slate-950"
              : "bg-white"
          }`}
        >

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center justify-between border-b py-4 transition-all duration-300
                  ${
                    isActive
                      ? "border-blue-600 text-blue-600"
                      : isDark
                      ? "border-slate-800 text-slate-200 hover:text-blue-400"
                      : "border-slate-200 text-slate-700 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">

                      <Icon
                        className={`text-[15px]
                        ${
                          isActive
                            ? "text-blue-600"
                            : ""
                        }`}
                      />

                      <span className="text-[15px] font-medium">
                        {item.name}
                      </span>

                    </div>

                    <span
                      className={`text-lg transition-all
                      ${
                        isActive
                          ? "translate-x-1 text-blue-600"
                          : "group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}

        </div>

      </div>
            {/* Bottom Accent Line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </nav>
  );
}

