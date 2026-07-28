export const DUNS_PROFILE_URL =
  "https://profiles.dunsregistered.com/TPIN-VIP-004.aspx?PaArea=mail";

function DunsSealMark({ className = "" }) {
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
        <linearGradient id="dunsBar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0E6E8C" />
          <stop offset="100%" stopColor="#0A5570" />
        </linearGradient>
      </defs>

      <circle cx="57" cy="40" r="36" fill="#FFFFFF" />
      <circle
        cx="57"
        cy="40"
        r="34.5"
        fill="none"
        stroke="#0E6E8C"
        strokeWidth="2.5"
      />

      <path id="dunsArc" d="M 28 48 A 29 29 0 0 1 86 48" fill="none" />
      <text
        fill="#0B2C4A"
        fontSize="6.2"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        letterSpacing="0.8"
      >
        <textPath
          href="#dunsArc"
          xlinkHref="#dunsArc"
          startOffset="50%"
          textAnchor="middle"
        >
          DUN &amp; BRADSTREET
        </textPath>
      </text>

      <text
        x="57"
        y="52"
        textAnchor="middle"
        fill="#1FA4D6"
        fontSize="28"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
      >
        &amp;
      </text>

      <rect x="6" y="68" width="102" height="22" rx="11" fill="url(#dunsBar)" />
      <text
        x="57"
        y="82.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="7.2"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        letterSpacing="0.4"
      >
        D-U-N-S® REGISTERED™
      </text>
    </svg>
  );
}

/**
 * Compact D&B D-U-N-S® Registered™ seal — clickable profile link.
 */
export default function DunsRegisteredSeal({
  theme = "light",
  compact = false,
}) {
  const dark = theme === "dark";

  return (
    <a
      href={DUNS_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Verify Capital BullWave D-U-N-S Registered Profile"
      className={`footer-duns-seal group inline-flex max-w-full items-center gap-2 rounded-md transition-all duration-300 ${
        compact ? "p-1 pr-2" : "p-2.5 sm:gap-3 sm:p-3"
      } ${
        dark
          ? "bg-white/[0.04] ring-1 ring-white/10 hover:bg-white/[0.07]"
          : "bg-white/90 ring-1 ring-sky-100 shadow-sm hover:bg-white hover:shadow"
      }`}
    >
      <span
        className={`footer-duns-mark flex shrink-0 items-center justify-center overflow-hidden rounded bg-white ${
          compact ? "h-9 w-11" : "h-[78px] w-[92px] sm:h-[97px] sm:w-[114px]"
        } ${dark ? "ring-1 ring-white/10" : "ring-1 ring-slate-200/70"}`}
      >
        <DunsSealMark
          className={
            compact
              ? "h-9 w-11"
              : "h-[78px] w-[92px] sm:h-[97px] sm:w-[114px]"
          }
        />
      </span>

      <span className="min-w-0">
        <span
          className={`block font-semibold tracking-tight leading-tight ${
            compact ? "text-[11px]" : "text-[12px] sm:text-[13px]"
          } ${dark ? "text-sky-300" : "text-sky-800"}`}
        >
          D-U-N-S® Registered™
        </span>
        <span
          className={`mt-0.5 block leading-tight ${
            compact ? "text-[10px]" : "text-[11px] sm:text-[12px]"
          } ${dark ? "text-slate-300" : "text-slate-600"}`}
        >
          {compact ? (
            <span className="footer-duns-cta inline-flex items-center gap-0.5">
              View profile
              <span aria-hidden="true" className="footer-duns-arrow">
                →
              </span>
            </span>
          ) : (
            "Dun & Bradstreet verified company"
          )}
        </span>
      </span>
    </a>
  );
}
