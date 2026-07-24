import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAV_OFFSET = 96;

function scrollToId(id) {
  const element = document.getElementById(id);
  if (!element) return false;

  const top =
    element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
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
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    let attempts = 0;
    let timer = null;
    let cancelled = false;

    const tryScroll = () => {
      if (cancelled) return;

      if (scrollToId(id)) return;

      if (attempts < 25) {
        attempts += 1;
        timer = window.setTimeout(tryScroll, 80);
      }
    };

    // Wait one frame so home sections (and FAQ) can mount after route change
    timer = window.setTimeout(tryScroll, 50);

    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
  }, [pathname, hash]);

  return null;
}

export { scrollToId };
