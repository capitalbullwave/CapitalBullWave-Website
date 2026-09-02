import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { FaGlobe, FaGooglePlay, FaTimes } from "react-icons/fa";

const RIDES_WEBSITE = "https://bullwaverides.com/";
const RIDES_PLAY =
  "https://play.google.com/store/apps/details?id=com.bullwave.rides.user&hl=en_IN";
const RIDES_LOGO = "/images/bwride.png";

/**
 * Choice dialog for BullWave Rides — website or Google Play app.
 * Accessible, focus-trapped, Escape/backdrop to close.
 */
export default function RidesChoiceModal({
  open,
  onClose,
  theme = "dark",
}) {
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);
  const previouslyFocused = useRef(null);
  const isDark = theme === "dark";

  useEffect(() => {
    if (!open) return undefined;

    previouslyFocused.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 20);

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      if (
        previouslyFocused.current &&
        typeof previouslyFocused.current.focus === "function"
      ) {
        previouslyFocused.current.focus();
      }
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="bw-rides-modal" role="presentation">
      <button
        type="button"
        className="bw-rides-modal__backdrop"
        aria-label="Close BullWave Rides options"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className={`bw-rides-modal__panel ${
          isDark ? "bw-rides-modal__panel--dark" : "bw-rides-modal__panel--light"
        }`}
      >
        <div className="bw-rides-modal__head">
          <div className="bw-rides-modal__brand">
            <img
              src={RIDES_LOGO}
              alt=""
              width={48}
              height={48}
              className="bw-rides-modal__logo"
            />
            <div className="min-w-0">
              <p id={titleId} className="bw-rides-modal__title">
                BullWave Rides
              </p>
              <p id={descId} className="bw-rides-modal__desc">
                Choose where you want to go
              </p>
            </div>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            className="bw-rides-modal__close"
            aria-label="Close"
            onClick={onClose}
          >
            <FaTimes aria-hidden="true" />
          </button>
        </div>

        <div className="bw-rides-modal__choices">
          <a
            href={RIDES_WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            className="bw-rides-modal__choice"
            onClick={onClose}
          >
            <span className="bw-rides-modal__icon" aria-hidden="true">
              <FaGlobe />
            </span>
            <span className="min-w-0 flex-1">
              <span className="bw-rides-modal__choice-title">Website</span>
              <span className="bw-rides-modal__choice-meta">
                bullwaverides.com
              </span>
            </span>
            <span className="bw-rides-modal__chevron" aria-hidden="true">
              →
            </span>
          </a>

          <a
            href={RIDES_PLAY}
            target="_blank"
            rel="noopener noreferrer"
            className="bw-rides-modal__choice"
            onClick={onClose}
          >
            <span className="bw-rides-modal__icon bw-rides-modal__icon--play" aria-hidden="true">
              <FaGooglePlay />
            </span>
            <span className="min-w-0 flex-1">
              <span className="bw-rides-modal__choice-title">Android App</span>
              <span className="bw-rides-modal__choice-meta">
                Get it on Google Play
              </span>
            </span>
            <span className="bw-rides-modal__chevron" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

export { RIDES_WEBSITE, RIDES_PLAY, RIDES_LOGO };
