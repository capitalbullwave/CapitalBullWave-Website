/**
 * Dun & Bradstreet D-U-N-S® Registered™ seal
 * Click redirects to the profile URL provided by D&B.
 */

export const DUNS_SEAL_IFRAME_SRC =
  "https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1";

export const DUNS_PROFILE_URL =
  "https://profiles.dunsregistered.com/TPIN-VIP-004.aspx?PaArea=mail";

function DunsSealFallback({ className = "" }) {
  return (
    <svg
      viewBox="0 0 114 97"
      width="114"
      height="97"
      className={className}
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="dunsBarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B5F7A" />
          <stop offset="100%" stopColor="#084B61" />
        </linearGradient>
      </defs>
      <rect width="114" height="97" rx="8" fill="#FFFFFF" />
      <circle cx="57" cy="38" r="30" fill="#FFFFFF" />
      <circle
        cx="57"
        cy="38"
        r="28"
        fill="none"
        stroke="#0E6E8C"
        strokeWidth="2.5"
      />
      <path id="dunsTopArc" d="M 30 46 A 27 27 0 0 1 84 46" fill="none" />
      <text
        fill="#0B2C4A"
        fontSize="5.5"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        letterSpacing="0.8"
      >
        <textPath
          href="#dunsTopArc"
          xlinkHref="#dunsTopArc"
          startOffset="50%"
          textAnchor="middle"
        >
          DUN &amp; BRADSTREET
        </textPath>
      </text>
      <text
        x="57"
        y="50"
        textAnchor="middle"
        fill="#1FA4D6"
        fontSize="24"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
      >
        &amp;
      </text>
      <rect x="8" y="68" width="98" height="20" rx="10" fill="url(#dunsBarGrad)" />
      <text
        x="57"
        y="81.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="6.8"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        letterSpacing="0.3"
      >
        D-U-N-S® REGISTERED™
      </text>
    </svg>
  );
}

export default function DunsRegisteredSeal({
  theme = "dark",
  variant = "badge",
}) {
  const dark = theme === "dark";

  const goToProfile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(
      "https://profiles.dunsregistered.com/TPIN-VIP-004.aspx?PaArea=mail",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <a
      href="https://profiles.dunsregistered.com/TPIN-VIP-004.aspx?PaArea=mail"
      target="_blank"
      rel="noopener noreferrer"
      onClick={goToProfile}
      aria-label="Open Dun and Bradstreet D-U-N-S Registered profile"
      className={`footer-duns-seal relative z-20 inline-flex cursor-pointer items-center justify-center overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
        variant === "bar" ? "footer-duns-seal--bar" : ""
      } ${
        dark
          ? "rounded-xl bg-white p-1.5 shadow-lg shadow-black/30 ring-1 ring-white/20"
          : "rounded-xl bg-white p-1.5 shadow-lg shadow-sky-900/10 ring-1 ring-sky-100"
      }`}
      style={{ width: 126, height: 109 }}
    >
      <DunsSealFallback className="footer-duns-mark pointer-events-none absolute left-1.5 top-1.5 z-0" />

      <iframe
        id="Iframe1"
        title="Dun & Bradstreet D-U-N-S Registered Seal"
        src={DUNS_SEAL_IFRAME_SRC}
        width="114"
        height="97"
        frameBorder="0"
        scrolling="no"
        allowtransparency="true"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        className="footer-duns-iframe pointer-events-none relative z-10 block border-0 bg-transparent"
        style={{ width: 114, height: 97, maxWidth: "none" }}
      />

      {/* Guarantees click hits our redirect, not the iframe */}
      <span className="absolute inset-0 z-30" aria-hidden="true" />
    </a>
  );
}
