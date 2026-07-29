import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * Coverflow-style gallery for trading / service images.
 * Supports arrows, dots, autoplay, and pointer drag / swipe.
 */
export default function CoverflowGallery({
  items = [],
  theme = "light",
  autoplayMs = 4200,
}) {
  const isDark = theme === "dark";
  const count = items.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const stageRef = useRef(null);
  const pointerIdRef = useRef(null);
  const startXRef = useRef(0);
  const dragXRef = useRef(0);
  const didDragRef = useRef(false);

  const goTo = useCallback(
    (index) => {
      if (!count) return;
      setActive(((index % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (count < 2 || paused || dragging) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, autoplayMs);
    return () => window.clearInterval(timer);
  }, [count, paused, dragging, autoplayMs]);

  const relativeOffset = (index) => {
    let diff = index - active;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  };

  const endDrag = (clientX) => {
    const delta = clientX - startXRef.current;
    setDragging(false);
    setDragX(0);
    dragXRef.current = 0;
    pointerIdRef.current = null;

    if (Math.abs(delta) > 48) {
      didDragRef.current = true;
      if (delta < 0) next();
      else prev();
    }
  };

  const onPointerDown = (e) => {
    if (e.button != null && e.button !== 0) return;
    pointerIdRef.current = e.pointerId;
    startXRef.current = e.clientX;
    dragXRef.current = 0;
    didDragRef.current = false;
    setDragging(true);
    setPaused(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  const onPointerMove = (e) => {
    if (pointerIdRef.current !== e.pointerId) return;
    const delta = e.clientX - startXRef.current;
    dragXRef.current = delta;
    setDragX(delta);
    if (Math.abs(delta) > 8) didDragRef.current = true;
  };

  const onPointerUp = (e) => {
    if (pointerIdRef.current !== e.pointerId) return;
    endDrag(e.clientX);
    setPaused(false);
  };

  const onPointerCancel = () => {
    setDragging(false);
    setDragX(0);
    dragXRef.current = 0;
    pointerIdRef.current = null;
    setPaused(false);
  };

  if (!count) return null;

  return (
    <div
      className={`coverflow ${isDark ? "coverflow--dark" : "coverflow--light"}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        if (!dragging) setPaused(false);
      }}
    >
      <div className="coverflow__dots" role="tablist" aria-label="Showcase slides">
        {items.map((item, index) => (
          <button
            key={`dot-${item.title}`}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-label={`Show ${item.title}`}
            className={`coverflow__dot ${active === index ? "is-active" : ""}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>

      <div
        ref={stageRef}
        className={`coverflow__stage ${dragging ? "is-dragging" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        role="region"
        aria-roledescription="carousel"
        aria-label="Trading services gallery"
      >
        <div className="coverflow__track">
          {items.map((item, index) => {
            const offset = relativeOffset(index);
            const abs = Math.abs(offset);
            const dragBias = dragging ? dragX / 280 : 0;
            const visual = offset - dragBias;
            const absVisual = Math.abs(visual);

            // Hide far cards for performance / cleanliness
            if (abs > 2 && !dragging) return null;

            const translateX = visual * 1;
            const rotateY = Math.max(-52, Math.min(52, visual * -38));
            const scale = Math.max(0.68, 1 - absVisual * 0.16);
            const opacity = Math.max(0.35, 1 - absVisual * 0.28);
            const zIndex = 40 - Math.round(absVisual * 10);
            const isActive = abs === 0 && Math.abs(dragBias) < 0.12;

            return (
              <article
                key={item.title}
                className={`coverflow__card ${isActive ? "is-active" : ""}`}
                style={{
                  zIndex,
                  opacity,
                  transform: `translate(-50%, -50%) translateX(calc(${translateX} * var(--coverflow-gap))) rotateY(${rotateY}deg) scale(${scale})`,
                }}
                onClick={() => {
                  if (didDragRef.current) return;
                  if (index !== active) goTo(index);
                }}
                aria-hidden={abs !== 0}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="coverflow__img"
                />
                <div className="coverflow__shade" />
                <div className="coverflow__caption">
                  <p className="coverflow__eyebrow">{item.caption}</p>
                  <h3 className="coverflow__title">{item.title}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="coverflow__controls">
        <button
          type="button"
          className="coverflow__nav"
          aria-label="Previous slide"
          onClick={prev}
        >
          <FaChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          className="coverflow__nav"
          aria-label="Next slide"
          onClick={next}
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
