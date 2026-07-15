import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaChartLine,
  FaEnvelope,
  FaShieldAlt,
  FaFileContract,
  FaExclamationTriangle,
  FaSitemap,
} from "react-icons/fa";

const pages = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "About", path: "/about", icon: FaInfoCircle },
  { name: "Services", path: "/services", icon: FaBriefcase },
  { name: "Markets", path: "/markets", icon: FaChartLine },
  { name: "Contact", path: "/contact", icon: FaEnvelope },
  { name: "Privacy Policy", path: "/privacy-policy", icon: FaShieldAlt },
  { name: "Terms & Conditions", path: "/terms", icon: FaFileContract },
  { name: "Disclaimer", path: "/disclaimer", icon: FaExclamationTriangle },
  { name: "Site Map", path: "/site-map", icon: FaSitemap },
];

export default function SiteMap({ theme }) {
  const isDark = theme === "dark";

  return (
    <section
      className={`w-full py-8 sm:py-10 transition-all duration-300 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div
          className={`rounded-2xl border shadow-lg transition-all duration-300 ${
            isDark
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          {/* Header */}
          <div className="border-b border-slate-200/20 p-6 sm:p-8">
            <h1
              className={`text-3xl font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Site Map
            </h1>

            <p
              className={`mt-3 text-sm sm:text-base ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Quickly navigate through all public pages of our website.
            </p>
          </div>

          {/* Links */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((page) => {
                const Icon = page.icon;

                return (
                  <Link key={page.path} to={page.path} className="group">
                    <div
                      className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg ${
                        isDark
                          ? "border-slate-700 bg-slate-800 hover:border-blue-500 hover:bg-slate-700"
                          : "border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50"
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-lg transition-all duration-300 ${
                          isDark
                            ? "bg-slate-700 text-sky-400 group-hover:bg-blue-600 group-hover:text-white"
                            : "bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white"
                        }`}
                      >
                        <Icon size={18} />
                      </div>

                      <div>
                        <h3
                          className={`font-semibold transition-colors duration-300 ${
                            isDark
                              ? "text-white group-hover:text-sky-300"
                              : "text-slate-900 group-hover:text-blue-700"
                          }`}
                        >
                          {page.name}
                        </h3>

                        <p
                          className={`text-sm ${
                            isDark
                              ? "text-slate-400"
                              : "text-slate-500"
                          }`}
                        >
                          Visit page
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}