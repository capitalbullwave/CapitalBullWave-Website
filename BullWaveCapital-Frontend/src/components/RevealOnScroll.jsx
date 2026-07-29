import { useEffect, useRef, useState } from "react";

/**
 * Lightweight scroll reveal — CSS-only transition, respects reduced motion.
 * `eager` skips observation and shows content immediately (legal pages, etc.).
 */
export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  eager = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(eager);

  useEffect(() => {
    if (eager) {
      setVisible(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    let observer = null;

    const isInView = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < vh * 0.96 && rect.bottom > vh * 0.04;
    };

    const reveal = () => {
      setVisible(true);
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const onScroll = () => {
      if (isInView()) reveal();
    };

    if (isInView()) {
      reveal();
      return undefined;
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Catch route changes that scroll after mount (footer → page)
    const raf = window.requestAnimationFrame(() => {
      if (isInView()) reveal();
    });
    const timer = window.setTimeout(() => {
      if (isInView()) reveal();
    }, 120);
    // Hard failsafe so content never stays invisible
    const failsafe = window.setTimeout(() => reveal(), 1800);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      window.clearTimeout(failsafe);
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [eager]);

  return (
    <Tag
      ref={ref}
      className={`reveal-on-scroll ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
