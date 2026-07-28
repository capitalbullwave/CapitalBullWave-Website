import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToId } from "../components/ScrollToTop";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import RideLogo from "../assets/bullwaverides-logo.jpeg";
import PlayStore from "../assets/playstore-icon.png";
import AppStore from "../assets/appstore-icon.png";
import ClubLogo from "../assets/bullwaveClub.jpeg";
import DunsRegisteredSeal from "../components/DunsRegisteredSeal";
import RevealOnScroll from "../components/RevealOnScroll";

const navigateLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Markets", path: "/markets" },
  { name: "Contact", path: "/contact" },
];

const resourceLinks = [
  { name: "FAQs", isFaq: true },
  { name: "Site Map", path: "/site-map" },
  { name: "WhatsApp", href: "https://wa.me/919616212526" },
];

const policyLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Refund Policy", path: "/refund-policy" },
  { name: "KYC & AML", path: "/kyc-aml-policy" },
  { name: "Grievance Redressal", path: "/grievance-policy" },
];

const social = [
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/capital_bullwave/",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/capital-bullwave/",
    label: "LinkedIn",
  },
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/people/Bullwave-Capital/61590802587651/",
    label: "Facebook",
  },
];

const Footer = ({ theme }) => {
  const dark = theme === "dark";
  const navigate = useNavigate();
  const location = useLocation();

  const handleFaqClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      if (!scrollToId("faq")) {
        navigate("/#faq", { replace: true });
        window.setTimeout(() => scrollToId("faq"), 120);
      } else if (location.hash !== "#faq") {
        navigate("/#faq", { replace: true });
      }
      return;
    }
    navigate("/#faq");
  };

  const heading = dark ? "text-white" : "text-slate-950";
  const muted = dark ? "text-slate-400" : "text-slate-600";
  const colHead = dark
    ? "text-[12px] font-semibold text-sky-200"
    : "text-[12px] font-semibold text-sky-900";
  const itemLink = dark
    ? "bw-foot-link text-[12px] text-slate-300 hover:text-sky-300 sm:text-[13px]"
    : "bw-foot-link text-[12px] text-slate-700 hover:text-sky-700 sm:text-[13px]";

  const renderLink = (item, className) => {
    if (item.isFaq) {
      return (
        <button
          type="button"
          onClick={handleFaqClick}
          className={`cursor-pointer text-left ${className}`}
        >
          {item.name}
        </button>
      );
    }
    if (item.href) {
      return (
        <a
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={className}
        >
          {item.name}
        </a>
      );
    }
    return (
      <Link to={item.path} className={className}>
        {item.name}
      </Link>
    );
  };

  return (
    <footer
      className={`bw-footer footer-container relative overflow-hidden border-t ${
        dark ? "bw-footer--dark border-sky-500/20" : "bw-footer--light border-sky-200"
      }`}
    >
      <div className="bw-footer__mesh" aria-hidden="true">
        <span className="bw-footer__orb bw-footer__orb--1" />
        <span className="bw-footer__orb bw-footer__orb--2" />
        <span className="bw-footer__beam" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-3 py-3.5 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-0">
            {/* Navigate — site pages once */}
            <div className="bw-footer__col">
              <h3 className={`bw-footer__heading ${colHead}`}>Navigate</h3>
              <ul className="mt-1.5 space-y-1 sm:mt-2 sm:space-y-1.5">
                {navigateLinks.map((item, i) => (
                  <li key={item.name} style={{ "--i": i }} className="bw-footer__li">
                    {renderLink(item, itemLink)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources — unique support links */}
            <div className="bw-footer__col">
              <h3 className={`bw-footer__heading ${colHead}`}>Resources</h3>
              <ul className="mt-1.5 space-y-1 sm:mt-2 sm:space-y-1.5">
                {resourceLinks.map((item, i) => (
                  <li key={item.name} style={{ "--i": i }} className="bw-footer__li">
                    {renderLink(item, itemLink)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies — legal once */}
            <div className="bw-footer__col">
              <h3 className={`bw-footer__heading ${colHead}`}>Policies</h3>
              <ul className="mt-1.5 space-y-1 sm:mt-2 sm:space-y-1.5">
                {policyLinks.map((item, i) => (
                  <li key={item.name} style={{ "--i": i }} className="bw-footer__li">
                    {renderLink(item, itemLink)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Apps & Trust */}
            <div className="bw-footer__col col-span-2 sm:col-span-2 lg:col-span-1">
              <h3 className={`bw-footer__heading ${colHead}`}>Apps &amp; Trust</h3>

              <div className="mt-1.5 space-y-1.5 sm:mt-2">
                <div className="bw-footer__app flex items-center gap-2">
                  <img
                    src={RideLogo}
                    alt="BullWave Rides"
                    className="h-8 w-8 rounded-lg object-cover shadow-sm"
                  />
                  <div className="min-w-0">
                    <p className={`text-[13px] font-semibold leading-tight ${heading}`}>
                      BullWave Rides
                    </p>
                    <p className={`text-[11px] leading-tight ${muted}`}>
                      Book rides instantly
                    </p>
                  </div>
                </div>
                <div className="bw-footer__app flex items-center gap-2">
                  <img
                    src={ClubLogo}
                    alt="BullWave Club"
                    className="h-8 w-8 rounded-lg object-cover shadow-sm"
                  />
                  <div className="min-w-0">
                    <p className={`text-[13px] font-semibold leading-tight ${heading}`}>
                      BullWave Club
                    </p>
                    <p className={`text-[11px] leading-tight ${muted}`}>
                      Enjoy and have fun
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bw-footer__store"
                >
                  <img
                    src={PlayStore}
                    alt="Google Play"
                    className="h-7 w-auto rounded-md"
                  />
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bw-footer__store"
                >
                  <img
                    src={AppStore}
                    alt="App Store"
                    className="h-7 w-auto rounded-md"
                  />
                </a>
              </div>

              <div className="mt-2">
                <DunsRegisteredSeal theme={theme} compact />
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="bw-footer__rule my-3 sm:my-3.5" aria-hidden="true" />

        <RevealOnScroll delay={40}>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-2.5">
              {social.map(({ icon: Icon, link, label }, i) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  style={{ "--i": i }}
                  className={`bw-footer__social ${
                    dark
                      ? "text-slate-300 hover:text-sky-300"
                      : "text-sky-800 hover:text-sky-600"
                  }`}
                >
                  <Icon className="text-sm sm:text-base" />
                </a>
              ))}
            </div>

            <p
              className={`bw-footer__brand mt-2 text-[15px] font-bold tracking-tight sm:mt-2.5 sm:text-base ${heading}`}
            >
              Capital <span className="bw-footer__brand-accent">BullWave</span>
            </p>
            <p className={`text-[11px] leading-tight ${muted}`}>
              Private Limited · Research &amp; advisory
            </p>

            <p className={`mt-1.5 max-w-lg text-[10px] leading-4 sm:text-[11px] ${muted}`}>
              © {new Date().getFullYear()} Capital BullWave Private Limited.
              Research &amp; education only — investments subject to market risks.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
};

export default Footer;
