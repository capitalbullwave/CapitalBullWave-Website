import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaChartLine,
  FaEnvelope,
  FaShieldAlt,
  FaFileContract,
  FaComments,
  FaSitemap,
  FaUndoAlt,
  FaUserCheck,
} from "react-icons/fa";
import RevealOnScroll from "../components/RevealOnScroll";

const pages = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "About", path: "/about", icon: FaInfoCircle },
  { name: "Services", path: "/services", icon: FaBriefcase },
  { name: "Markets", path: "/markets", icon: FaChartLine },
  { name: "Contact", path: "/contact", icon: FaEnvelope },
  { name: "Privacy Policy", path: "/privacy-policy", icon: FaShieldAlt },
  { name: "Terms & Conditions", path: "/terms", icon: FaFileContract },
  {
    name: "Refund & Cancellation Policy",
    path: "/refund-policy",
    icon: FaUndoAlt,
  },
  {
    name: "KYC & AML Policy",
    path: "/kyc-aml-policy",
    icon: FaUserCheck,
  },
  {
    name: "Grievance Redressal Policy",
    path: "/grievance-policy",
    icon: FaComments,
  },
  { name: "Site Map", path: "/site-map", icon: FaSitemap },
];

export default function SiteMap({ theme }) {
  const isDark = theme === "dark";

  return (
    <section className="page-shell page-enter w-full py-4 sm:py-6 lg:py-8">
      <Helmet>
        <title>Site Map | Capital BullWave</title>
        <meta
          name="description"
          content="Browse all pages of the Capital BullWave website including Home, About, Services, Markets, Contact, Privacy Policy, Terms, Refund, KYC & AML, and Grievance Policy."
        />
        <link rel="canonical" href="https://www.capitalbullwave.com/site-map" />
        <meta property="og:title" content="Site Map | Capital BullWave" />
        <meta property="og:url" content="https://www.capitalbullwave.com/site-map" />
        <meta property="og:type" content="website" />
      </Helmet>

      <RevealOnScroll>
        <div
          className={`overflow-hidden rounded-2xl sm:rounded-[1.75rem]
          ${
            isDark
              ? "bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 ring-1 ring-white/10"
              : "bg-gradient-to-br from-white via-sky-50 to-sky-100 ring-1 ring-sky-100 shadow-[0_16px_40px_rgba(14,165,233,0.1)]"
          }`}
        >
          <div
            className={`border-b px-5 py-6 sm:px-8 sm:py-8 ${
              isDark ? "border-white/10" : "border-sky-100"
            }`}
          >
            <p
              className={`inline-flex rounded-full px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em]
              ${
                isDark
                  ? "bg-sky-500/15 text-sky-300"
                  : "bg-white text-sky-700 ring-1 ring-sky-100"
              }`}
            >
              Navigation
            </p>
            <h1
              className={`mt-4 text-2xl sm:text-3xl font-bold tracking-tight ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Site Map
            </h1>
            <p
              className={`mt-3 text-sm sm:text-base ${
                isDark ? "text-slate-400" : "text-neutral-800"
              }`}
            >
              Quickly navigate through all public pages of our website.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 sm:gap-4 sm:p-8 lg:grid-cols-3">
            {pages.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`premium-card group flex items-center gap-3 rounded-xl p-4 transition hover:-translate-y-0.5
                  ${
                    isDark
                      ? "bg-slate-950/50 ring-1 ring-white/10 hover:ring-sky-400/30"
                      : "bg-white ring-1 ring-sky-100 hover:ring-sky-300 shadow-sm"
                  }`}
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl
                    ${
                      isDark
                        ? "bg-sky-500/15 text-sky-300"
                        : "bg-sky-50 text-sky-700"
                    }`}
                  >
                    <Icon className="text-sm" />
                  </span>
                  <span
                    className={`text-sm sm:text-base font-semibold ${
                      isDark
                        ? "text-white group-hover:text-sky-300"
                        : "text-black group-hover:text-sky-700"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
