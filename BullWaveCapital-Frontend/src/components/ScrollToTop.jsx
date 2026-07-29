import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAV_OFFSET = 96;

let activeRaf = 0;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Fast, cancellable smooth scroll (production).
 * Keeps wheel/trackpad scrolling native; only animates intentional jumps.
 */
export function smoothScrollTo(targetY, options = {}) {
  const y = Math.max(0, targetY);

  if (activeRaf) {
    cancelAnimationFrame(activeRaf);
    activeRaf = 0;
  }

  if (prefersReducedMotion() || options.instant) {
    window.scrollTo(0, y);
    return;
  }

  const startY = window.scrollY ?? window.pageYOffset;
  const delta = y - startY;
  if (Math.abs(delta) < 2) return;

  // Snappy duration: short trips feel instant, long trips stay under ~420ms
  const distance = Math.abs(delta);
  const duration = Math.min(
    options.duration ?? 420,
    Math.max(160, Math.round(distance * 0.28))
  );

  const start = performance.now();
  // easeOutQuint — smooth but finishes fast
  const ease = (t) => 1 - Math.pow(1 - t, 5);

  const step = (now) => {
    const t = Math.min(1, (now - start) / duration);
    window.scrollTo(0, startY + delta * ease(t));
    if (t < 1) {
      activeRaf = requestAnimationFrame(step);
    } else {
      activeRaf = 0;
    }
  };

  activeRaf = requestAnimationFrame(step);
}

export function scrollToId(id, options = {}) {
  const element = document.getElementById(id);
  if (!element) return false;

  const top =
    element.getBoundingClientRect().top +
    (window.scrollY ?? window.pageYOffset) -
    (options.offset ?? NAV_OFFSET);

  smoothScrollTo(top, options);
  return true;
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = hash
      ? hash.replace(/^#/, "")
      : pathname === "/faq"
        ? "faq"
        : null;

    if (!id) {
      // Instant on route change — feels snappy and keeps reveals visible
      if (activeRaf) {
        cancelAnimationFrame(activeRaf);
        activeRaf = 0;
      }
      window.scrollTo(0, 0);
      return undefined;
    }

    let attempts = 0;
    let timer = 0;
    let cancelled = false;

    const tryScroll = () => {
      if (cancelled) return;
      if (scrollToId(id)) return;
      if (attempts < 20) {
        attempts += 1;
        timer = window.setTimeout(tryScroll, 60);
      }
    };

    window.scrollTo(0, 0);
    timer = window.setTimeout(tryScroll, 40);

    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
  }, [pathname, hash]);

  return null;
}
