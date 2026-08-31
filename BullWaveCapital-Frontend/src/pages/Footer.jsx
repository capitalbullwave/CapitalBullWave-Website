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
import ClubLogo from "../assets/bullwaveClub.jpeg";
import DunsRegisteredSeal from "../components/DunsRegisteredSeal";
import RevealOnScroll from "../components/RevealOnScroll";

const RideLogo = "/images/bwride.png";
const LearnLogo = "/images/cbw.png";

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
    tagline: "Get it on Google Play",
    logo: RideLogo,
    href: "https://play.google.com/store/apps/details?id=com.bullwave.rides.user&hl=en_IN",
    label: "Download BullWave Rides on Google Play",
    contain: true,
    darkLogo: true,
  },
  {
    name: "BullWave Club",
    tagline: "Enjoy and have fun",
    logo: ClubLogo,
    href: "https://www.bullwaveclub.com/",
    label: "Open BullWave Club website",
  },
  {
    name: "CBW Learn",
    tagline: "Get it on Google Play",
    logo: LearnLogo,
    href: "https://play.google.com/store/apps/details?id=com.bullwave.bullwave_learn&hl=en_IN",
    label: "Download CBW Learn on Google Play",
    contain: true,
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
                research, investment guidance, and investor education from offices
                in New Delhi and Dubai.
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
                      World Trade Centre (Sheikh Rashid Tower), Sheikh Zayed Road,
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
                Our Platforms
              </h3>

              <div className="mt-4 space-y-3">
                {apps.map((app, i) => (
                  <a
                    key={app.name}
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ "--i": i }}
                    className={`bw-footer__app-card group flex min-h-[3.5rem] items-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      dark
                        ? "focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        : "focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    }`}
                    aria-label={app.label || `Open ${app.name}`}
                  >
                    <div className="flex w-full min-w-0 items-center gap-3">
                      <img
                        src={app.logo}
                        alt=""
                        width={44}
                        height={44}
                        loading="lazy"
                        decoding="async"
                        className={
                          app.contain
                            ? `bw-footer__app-logo h-10 w-10 shrink-0 rounded-xl object-contain p-0.5 shadow-md ring-1 ring-sky-300/40 sm:h-11 sm:w-11 ${
                                app.darkLogo ? "bg-black" : "bg-white"
                              }`
                            : "bw-footer__app-logo h-10 w-10 shrink-0 rounded-xl object-cover shadow-md ring-1 ring-sky-300/40 sm:h-11 sm:w-11"
                        }
                      />
                      <div className="min-w-0 flex-1">
                        <p className="bw-f-app-name truncate text-sm font-bold sm:text-[15px]">
                          {app.name}
                        </p>
                        <p className="bw-f-muted mt-0.5 truncate text-xs">
                          {app.tagline}
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-sky-500 transition group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Bottom trust bar */}
      <div className="bw-footer__bottom relative border-t">
        <div className="bw-footer__rule absolute inset-x-0 top-0" aria-hidden="true" />
        <RevealOnScroll delay={30} eager>
          <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-3 py-4 md:flex-row md:justify-between md:gap-6 md:px-6 md:py-5 lg:px-8">
            <div className="bw-footer__duns-slot relative z-30 flex w-full shrink-0 justify-center md:w-auto md:justify-start">
              <DunsRegisteredSeal theme={theme} variant="bar" />
            </div>

            <p className="bw-f-copy max-w-xl flex-1 text-center text-[11px] leading-5 sm:text-[13px] sm:leading-6">
              © {new Date().getFullYear()} Capital BullWave Private Limited. All
              rights reserved. Research &amp; education only — investments subject
              to market risks. Guidance supported by NISM-certified research
              analysts. D-U-N-S® Registered business.
            </p>

            <div className="flex shrink-0 items-center justify-center gap-2.5 sm:gap-3">
              {social.map(({ icon: Icon, link: href, label: socialLabel }, i) => (
                <a
                  key={socialLabel}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
