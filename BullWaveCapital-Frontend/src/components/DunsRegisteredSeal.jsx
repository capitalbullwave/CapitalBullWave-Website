/**
 * Dun & Bradstreet D-U-N-S® Registered™ seal
 * Click opens the saved VIP profile page in a new tab.
 *
 * Note: Use explicit index.html — Vite SPA fallback hijacks /duns-profile/
 * Live D&B URL (TPIN-VIP-004) expires without seal session auth.
 */

/** Local saved VIP profile (matches official D&B interface) */
export const DUNS_PROFILE_PAGE = "/duns-profile/index.html";

/** Live D&B profile URL (requires seal session; often expires) */
export const DUNS_PROFILE_URL =
  "https://profiles.dunsregistered.com/TPIN-VIP-004.aspx?PaArea=mail";

export const DUNS_SEAL_IFRAME_SRC =
  "https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1";

const DUNS_SEAL_IMG = "/duns-profile/assets/DUNSicon.png";

export default function DunsRegisteredSeal({
  theme = "dark",
  variant = "badge",
}) {
  const dark = theme === "dark";

  const openProfile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(DUNS_PROFILE_PAGE, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={DUNS_PROFILE_PAGE}
      target="_blank"
      rel="noopener noreferrer"
      onClick={openProfile}
      aria-label="Open D-U-N-S Registered VIP profile"
      title="View D-U-N-S Registered Profile"
      className={`footer-duns-seal group relative z-30 inline-flex max-w-full cursor-pointer flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] ${
        variant === "bar" ? "footer-duns-seal--bar" : ""
      } ${
        dark
          ? "rounded-xl bg-gradient-to-br from-white via-sky-50 to-white p-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.3)] ring-1 ring-sky-300/40 sm:rounded-2xl sm:p-2.5 sm:shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
          : "rounded-xl bg-gradient-to-br from-white via-sky-50 to-white p-1.5 shadow-[0_10px_24px_rgba(14,165,233,0.14)] ring-1 ring-sky-200 sm:rounded-2xl sm:p-2.5 sm:shadow-[0_12px_28px_rgba(14,165,233,0.18)]"
      }`}
      style={{ pointerEvents: "auto" }}
    >
      <img
        src={DUNS_SEAL_IMG}
        alt="D-U-N-S Registered"
        width={114}
        height={97}
        className="footer-duns-mark pointer-events-none relative z-10 h-[72px] w-[84px] object-contain transition-transform duration-300 group-hover:rotate-[-1deg] sm:h-[97px] sm:w-[114px]"
        draggable={false}
      />

      <span className="pointer-events-none relative z-10 mt-0.5 hidden text-[9px] font-bold tracking-[0.12em] text-[#0E6E8C] opacity-90 transition-opacity group-hover:opacity-100 sm:mt-1 sm:inline">
        CLICK TO VIEW PROFILE
      </span>

      {/* Official D&B seal auth iframe (non-interactive; kept for domain recognition) */}
      <iframe
        id="Iframe1"
        title="Dun & Bradstreet D-U-N-S Registered Seal"
        src={DUNS_SEAL_IFRAME_SRC}
        width="114"
        height="97"
        frameBorder="0"
        scrolling="no"
        allowtransparency="true"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="pointer-events-none absolute left-2 top-2 z-0 h-[1px] w-[1px] opacity-0"
        tabIndex={-1}
        aria-hidden="true"
      />
    </a>
  );
}
