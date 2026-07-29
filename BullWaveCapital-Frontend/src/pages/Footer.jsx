import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToId } from "../components/ScrollToTop";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import logo from "../assets/capitalbullwave.png";
import RideLogo from "../assets/bullwaverides-logo.jpeg";
import PlayStore from "../assets/playstore-icon.png";
import AppStore from "../assets/appstore-icon.png";
import ClubLogo from "../assets/bullwaveClub.jpeg";
import DunsRegisteredSeal from "../components/DunsRegisteredSeal";
import RevealOnScroll from "../components/RevealOnScroll";

const siteLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Markets", path: "/markets" },
  { name: "Contact", path: "/contact" },
  { name: "Site Map", path: "/site-map" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
];

const apps = [
  {
    name: "BullWave Rides",
    tagline: "Book rides instantly",
    logo: RideLogo,
  },
  {
    name: "BullWave Club",
    tagline: "Enjoy and have fun",
    logo: ClubLogo,
  },
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

const storeBadges = (
  <div className="bw-footer__stores mt-1 flex flex-wrap items-center gap-2">
    <a
      href="https://play.google.com/store"
      target="_blank"
      rel="noopener noreferrer"
      className="bw-footer__store"
      aria-label="Get it on Google Play"
    >
      <img src={PlayStore} alt="Google Play" className="h-9 w-auto rounded-md sm:h-10" />
    </a>
    <a
      href="https://www.apple.com/app-store/"
      target="_blank"
      rel="noopener noreferrer"
      className="bw-footer__store"
      aria-label="Download on the App Store"
    >
      <img src={AppStore} alt="App Store" className="h-9 w-auto rounded-md sm:h-10" />
    </a>
  </div>
);

const Footer = ({ theme = "light" }) => {
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

  return (
    <footer
      className={`bw-footer footer-container relative overflow-hidden border-t ${
        dark ? "bw-footer--dark" : "bw-footer--light"
      }`}
    >
      <div className="bw-footer__mesh" aria-hidden="true">
        <span className="bw-footer__orb bw-footer__orb--1" />
        <span className="bw-footer__orb bw-footer__orb--2" />
        <span className="bw-footer__orb bw-footer__orb--3" />
        <span className="bw-footer__beam" />
        <span className="bw-footer__sheen" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
        <RevealOnScroll>
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* About Company */}
            <div className="bw-footer__col">
              <h3 className="bw-footer__heading bw-f-title text-lg font-bold sm:text-xl">
                About Company
              </h3>
              <p className="bw-f-text mt-4 text-sm leading-7 sm:text-[15px]">
                Capital BullWave Private Limited provides professional stock market
                research, investment guidance, and investor education from Netaji
                Subhash Place, Delhi.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <img
                  src={logo}
                  alt="Capital BullWave"
                  className="bw-footer__brand-logo h-14 w-14 rounded-full object-cover ring-2 ring-sky-400/50 shadow-lg"
                />
                <div>
                  <p className="bw-f-brand text-base font-bold">
                    Capital <span className="bw-f-accent">BullWave</span>
                  </p>
                  <p className="bw-f-muted mt-0.5 text-xs font-medium">
                    Private Limited
                  </p>
                </div>
              </div>
            </div>

            {/* Site Links */}
            <div className="bw-footer__col">
              <h3 className="bw-footer__heading bw-f-title text-lg font-bold sm:text-xl">
                Site Links
              </h3>
              <ul className="mt-4 space-y-2.5">
                {siteLinks.map((item, i) => (
                  <li key={item.name} style={{ "--i": i }} className="bw-footer__li">
                    <Link
                      to={item.path}
                      className="bw-foot-link bw-f-link text-sm sm:text-[15px]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li style={{ "--i": siteLinks.length }} className="bw-footer__li">
                  <button
                    type="button"
                    onClick={handleFaqClick}
                    className="bw-foot-link bw-f-link cursor-pointer text-left text-sm sm:text-[15px]"
                  >
                    FAQs
                  </button>
                </li>
                <li style={{ "--i": siteLinks.length + 1 }} className="bw-footer__li">
                  <Link
                    to="/refund-policy"
                    className="bw-foot-link bw-f-link text-sm sm:text-[15px]"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="bw-footer__col">
              <h3 className="bw-footer__heading bw-f-title text-lg font-bold sm:text-xl">
                Contact Us
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="bw-footer__contact flex gap-3" style={{ "--i": 0 }}>
                  <span className="bw-footer__icon mt-0.5 shrink-0">
                    <FaMapMarkerAlt />
                  </span>
                  <div className="min-w-0">
                    <p className="bw-f-label text-sm font-semibold">India Office</p>
                    <p className="bw-f-detail mt-1 break-words text-sm leading-6">
                      Aggarwal Millennium Tower 2, Office No. 1275 (12th Floor),
                      Netaji Subhash Place, Pitampura, New Delhi – 110034
                    </p>
                  </div>
                </li>
                <li className="bw-footer__contact flex gap-3" style={{ "--i": 1 }}>
                  <span className="bw-footer__icon mt-0.5 shrink-0">
                    <FaMapMarkerAlt />
                  </span>
                  <div className="min-w-0">
                    <p className="bw-f-label text-sm font-semibold">Dubai Office</p>
                    <p className="bw-f-detail mt-1 break-words text-sm leading-6">
                      World Trade Centre (Rashid Tower), Sheikh Zayed Road,
                      P.O. Box: 9700, Dubai, United Arab Emirates
                    </p>
                  </div>
                </li>
                <li className="bw-footer__contact flex gap-3" style={{ "--i": 2 }}>
                  <span className="bw-footer__icon mt-0.5 shrink-0">
                    <FaEnvelope />
                  </span>
                  <div className="min-w-0">
                    <p className="bw-f-label text-sm font-semibold">Email</p>
                    <a
                      href="mailto:admin@capitalbullwave.com"
                      className="bw-foot-link bw-f-link mt-1 block break-words text-sm"
                    >
                      admin@capitalbullwave.com
                    </a>
                  </div>
                </li>
                <li className="bw-footer__contact flex gap-3" style={{ "--i": 3 }}>
                  <span className="bw-footer__icon mt-0.5 shrink-0">
                    <FaPhoneAlt />
                  </span>
                  <div className="min-w-0">
                    <p className="bw-f-label text-sm font-semibold">Phone</p>
                    <a
                      href="tel:+918796565234"
                      className="bw-foot-link bw-f-link mt-1 block text-sm"
                    >
                      +91 87965 65234
                    </a>
                    <a
                      href="https://wa.me/919616212526"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bw-foot-link bw-f-link mt-1 block text-sm"
                    >
                      WhatsApp +91 96162 12526
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Apps & Downloads */}
            <div className="bw-footer__col">
              <h3 className="bw-footer__heading bw-f-title text-lg font-bold sm:text-xl">
                Apps &amp; Downloads
              </h3>

              <div className="mt-4 space-y-3">
                {apps.map((app, i) => (
                  <div
                    key={app.name}
                    style={{ "--i": i }}
                    className="bw-footer__app-card"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={app.logo}
                        alt={app.name}
                        className="bw-footer__app-logo h-11 w-11 shrink-0 rounded-xl object-cover shadow-md ring-1 ring-sky-300/40"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="bw-f-app-name truncate text-sm font-bold sm:text-[15px]">
                          {app.name}
                        </p>
                        <p className="bw-f-muted mt-0.5 text-xs">{app.tagline}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div
                  style={{ "--i": apps.length }}
                  className="bw-footer__app-card bw-footer__app-card--stores"
                >
                  <p className="bw-f-available mb-2 text-[11px] font-semibold uppercase tracking-[0.16em]">
                    Available on
                  </p>
                  {storeBadges}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Bottom trust bar */}
      <div className="bw-footer__bottom relative border-t">
        <div className="bw-footer__rule absolute inset-x-0 top-0" aria-hidden="true" />
        <RevealOnScroll delay={30} eager>
          <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-5 sm:flex-row sm:justify-between sm:gap-6 sm:px-6 lg:px-8">
            <div className="bw-footer__duns-slot relative z-30 flex shrink-0 justify-center sm:justify-start">
              <DunsRegisteredSeal theme={theme} variant="bar" />
            </div>

            <p className="bw-f-copy max-w-xl flex-1 text-center text-[12px] leading-5 sm:text-[13px] sm:leading-6">
              © {new Date().getFullYear()} Capital BullWave Private Limited. All
              rights reserved. Research &amp; education only — investments subject
              to market risks.
            </p>

            <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
              {social.map(({ icon: Icon, link: href, label: socialLabel }, i) => (
                <a
                  key={socialLabel}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={socialLabel}
                  style={{ "--i": i }}
                  className={`bw-footer__social ${
                    dark ? "text-slate-200 hover:text-sky-300" : "text-sky-800 hover:text-sky-600"
                  }`}
                >
                  <Icon className="text-base sm:text-lg" />
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
};

export default Footer;
