import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import RideLogo from "../assets/bullwaverides-logo.jpeg";
import PlayStore from "../assets/playstore-icon.png";
import AppStore from "../assets/appstore-icon.png";

const Footer = ({ theme }) => {
  const dark = theme === "dark";

  const navigate = useNavigate();
  const location = useLocation();

  const handleFaqClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const section = document.getElementById("faq");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate("/#faq");
    }
  };

  const social = [
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/capital_bullwave/",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/capital-bullwave/",
    },
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/people/Bullwave-Capital/61590802587651/",
    },
  ];

  /* ===========================================
      Theme Classes
  =========================================== */

  const footer = dark
    ? "border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-300"
    : "border-slate-300 bg-gradient-to-r from-slate-200 via-blue-100 to-slate-200 text-slate-800";
    
  const heading = dark ? "text-white" : "text-slate-900";

  const text = dark ? "text-slate-400" : "text-slate-600";

  const link = dark
    ? "text-slate-300 hover:text-sky-300"
    : "text-blue-700 hover:text-blue-900";

  const icon = dark
    ? "border-slate-700 bg-slate-900/80 text-slate-300"
    : "border-white bg-white/90 shadow-md text-slate-700";

  return (
    <footer className={`relative overflow-hidden border-t ${footer}`}>

      {/* Decorative Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className={`absolute -left-32 -top-32 h-60 w-72 rounded-full blur-3xl opacity-20 ${
            dark ? "bg-sky-500" : "bg-blue-300"
          }`}
        />

        <div
          className={`absolute bottom-0 right-0 h-96 w-96 rounded-full blur-3xl opacity-20 ${
            dark ? "bg-indigo-500" : "bg-cyan-300"
          }`}
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">

         <div className="grid gap-8 md:grid-cols-[1.5fr_0.8fr_0.8fr] md:grid-rows-[auto_auto]">

          {/* ===========================================
                  LEFT SECTION
          =========================================== */}

          <div className="max-w-xl md:row-span-2">

            <span
              className={`inline-flex items-center rounded-full border px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em]
              ${
                dark
                  ? "border-slate-700 bg-slate-800/80 text-sky-300"
                  : "border-blue-200 bg-white/80 text-blue-700 shadow-sm"
              }`}
            >
              Capital BullWave Private Limited
            </span>

            <h2
              className={`mt-2 text-2xl font-bold leading-tight sm:text-3xl lg:text-[42px] ${heading}`}
            >
              Trade Smarter.
              <br />
              Invest With Confidence.
            </h2>

            <p
              className={`mt-6 max-w-xl text-[15px] leading-7 ${text}`}
            >
              Capital BullWave Private Limited delivers professional equity
              research, market insights, investment advisory and trading
              solutions that empower investors to make informed financial
              decisions with confidence, transparency and long-term value.
            </p>

            {/* Social Icons */}

            <div className="mt-4 flex flex-wrap gap-4">

              {social.map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-blue-600 hover:bg-blue-600 hover:text-white ${icon}`}
                >
                  <Icon className="text-lg" />
                </a>
              ))}

            </div>

            {/* Email */}

            <a
              href="mailto:admin@capitalbullwave.com"
              className={`mt-4 inline-flex items-center gap-3 text-[15px] font-medium transition-colors ${link}`}
            >
              <span className="h-[2px] w-8 rounded-full bg-blue-600"></span>

              admin@capitalbullwave.com
            </a>

          </div>
                    {/* ===========================================
                  NAVIGATION
          =========================================== */}

          <div>

            <h3
              className={`mb-5 text-sm font-bold uppercase tracking-[0.25em] ${heading}`}
            >
              Navigation
            </h3>

            <ul className="space-y-4">

              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Markets", path: "/markets" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`inline-block transition-all duration-300 hover:translate-x-1 hover:underline underline-offset-4 ${link}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* ===========================================
                  USEFUL LINKS
          =========================================== */}

          <div>

            <h3
              className={`mb-5 text-sm font-bold uppercase tracking-[0.25em] ${heading}`}
            >
              Useful Links
            </h3>

            <ul className="space-y-4">

              {[
                {
                  name: "Privacy Policy",
                  path: "/privacy-policy",
                },
                {
                  name: "Terms & Conditions",
                  path: "/terms",
                },
                {
                  name: "Disclaimer",
                  path: "/disclaimer",
                },
                {
                  name: "Site Map",
                  path: "/site-map",
                },
                {
                  name: "FAQs",
                  isFaq: true,
                },
              ].map((item) => (
                <li key={item.name}>

                  {item.isFaq ? (
                    <button
                      type="button"
                      onClick={handleFaqClick}
                      className={`cursor-pointer transition-all duration-300 hover:translate-x-1 hover:underline underline-offset-4 active:scale-95 ${link}`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`inline-block transition-all duration-300 hover:translate-x-1 hover:underline underline-offset-4 ${link}`}
                    >
                      {item.name}
                    </Link>
                  )}

                </li>
              ))}

            </ul>

          </div>

          {/* ===========================================
                  DOWNLOAD APP
          =========================================== */}

          <div className="md:col-start-2 md:col-span-2">

            <div className="flex items-center gap-3 mb-5">

              <img
                src={RideLogo}
                alt="BullWave Rides"
                className="h-14 w-14 rounded-2xl shadow-lg"
              />

              <div>

                <h3
                  className={`text-xl font-bold ${heading}`}
                >
                  BullWave Rides
                </h3>

                <p className={`text-sm ${text}`}>
                  Book rides instantly across the city.
                </p>

              </div>

            </div>

            <div className="flex flex-wrap items-center gap-4">

              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={PlayStore}
                  alt="Google Play"
                  className="block h-14 w-auto rounded-lg"
                />
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={AppStore}
                  alt="App Store"
                  className="block h-14 w-auto rounded-lg"
                />
              </a>

            </div>

          </div>

        </div>

        {/* ===========================================
                BOTTOM
        =========================================== */}

        <div
          className={`mt-2 border-t pt-7 ${
            dark ? "border-slate-800" : "border-blue-200"
          }`}
        >

          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

            <div>

              <p className={`text-sm ${text}`}>
                © {new Date().getFullYear()} Capital BullWave Private Limited.
                All rights reserved.
              </p>

              <p
                className={`mt-2 max-w-2xl text-[12px] leading-6 ${text}`}
              >
                Capital BullWave Private Limited provides market research,
                trading insights and investment education for informational
                purposes only. Investments in securities are subject to market
                risks. Please read all related documents carefully before
                investing.
              </p>

            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">

              <Link
                to="/privacy-policy"
                className={`transition-colors hover:text-blue-600 ${text}`}
              >
                Privacy
              </Link>

              <span className="text-slate-400">•</span>

              <Link
                to="/terms"
                className={`transition-colors hover:text-blue-600 ${text}`}
              >
                Terms
              </Link>

              <span className="text-slate-400">•</span>

              <Link
                to="/disclaimer"
                className={`transition-colors hover:text-blue-600 ${text}`}
              >
                Disclaimer
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;