import { useEffect, useRef, useState } from "react";

/**
 * INDmoney-style stacked feature cards.
 * Pass existing site content via `items` — this component only handles layout/interaction.
 */
export default function StackedCards({ items = [], theme = "light" }) {
  const isDark = theme === "dark";
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const touchStartX = useRef(null);
  const count = items.length;

  useEffect(() => {
    if (count < 2 || paused) return undefined;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [count, paused]);

  if (!count) return null;

  const depthOf = (index) => (index - active + count) % count;

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
    setPaused(true);
  };

  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    const end = e.changedTouches[0]?.clientX ?? null;
    touchStartX.current = null;
    setPaused(false);
    if (start == null || end == null) return;
    const delta = end - start;
    if (Math.abs(delta) < 40) return;
    setActive((prev) =>
      delta < 0 ? (prev + 1) % count : (prev - 1 + count) % count
    );
  };

  return (
    <div className="mx-auto w-full max-w-xl px-1 sm:px-0">
      <div
        className="stacked-cards relative mx-auto h-[320px] w-full max-w-[300px] sm:h-[380px] sm:max-w-[400px] md:h-[420px] md:max-w-[440px]"
        onMouseEnter={() => {
          setPaused(true);
          setHovered(true);
        }}
        onMouseLeave={() => {
          setPaused(false);
          setHovered(false);
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const depth = depthOf(index);
          const isFront = depth === 0;

          // Keep at most 3 layers visible for a clean deck
          if (depth > 2) return null;

          const fan = hovered && depth > 0 ? 10 : 0;
          const translateY = depth * 12 + (hovered && isFront ? -6 : 0);
          const scale = 1 - depth * 0.04;
          const opacity = depth === 0 ? 1 : depth === 1 ? 0.92 : 0.78;

          return (
            <article
              key={item.title}
              role="button"
              tabIndex={0}
              aria-label={item.title}
              aria-current={isFront ? "true" : undefined}
              onClick={() => setActive(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(index);
                }
              }}
              className={`stacked-card absolute inset-x-0 top-0 mx-auto flex h-[92%] w-full cursor-pointer flex-col items-center justify-between overflow-hidden rounded-[1.25rem] px-5 py-6 text-center outline-none transition-[transform,opacity,box-shadow] duration-500 ease-out focus-visible:ring-2 focus-visible:ring-sky-400 sm:rounded-[1.5rem] sm:px-8 sm:py-8
              ${isFront ? "stacked-card--front" : ""}
              ${
                isDark
                  ? "bg-slate-900 ring-1 ring-white/10 shadow-[0_18px_48px_rgba(0,0,0,0.45)]"
                  : "bg-white ring-1 ring-sky-100 shadow-[0_16px_40px_rgba(14,165,233,0.12)]"
              }`}
              style={{
                zIndex: 30 - depth,
                transform: `translateY(${translateY + fan}px) scale(${scale})`,
                opacity,
              }}
            >
              <div className="flex flex-1 flex-col items-center justify-center pt-1">
                <div
                  className={`relative mb-5 flex h-24 w-24 items-center justify-center rounded-[1.5rem] sm:mb-6 sm:h-32 sm:w-32 sm:rounded-[1.75rem]
                  ${
                    isDark
                      ? "bg-sky-500/10 ring-1 ring-sky-400/20"
                      : "bg-sky-50 ring-1 ring-sky-100"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute -left-2.5 top-3 h-7 w-7 rounded-full sm:h-8 sm:w-8
                    ${isDark ? "bg-sky-500/20" : "bg-sky-100"}`}
                  />
                  <div
                    aria-hidden="true"
                    className={`absolute -right-1.5 bottom-4 h-5 w-5 rounded-full sm:h-6 sm:w-6
                    ${isDark ? "bg-sky-400/25" : "bg-sky-200/80"}`}
                  />
                  <div
                    className={`relative flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg sm:h-16 sm:w-16
                    ${
                      isDark
                        ? "bg-sky-500 shadow-sky-500/30"
                        : "bg-sky-500 shadow-sky-500/25"
                    }`}
                  >
                    {Icon ? <Icon className="h-6 w-6 sm:h-7 sm:w-7" /> : null}
                  </div>
                </div>

                <h3
                  className={`text-base font-bold leading-snug sm:text-xl ${
                    isDark ? "text-white" : "text-slate-950"
                  }`}
                >
                  {item.title}
                </h3>

                {item.subtitle ? (
                  <p
                    className={`mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-xs
                    ${isDark ? "text-sky-400" : "text-sky-600"}`}
                  >
                    {item.subtitle}
                  </p>
                ) : null}
              </div>

              <p
                className={`mt-3 max-w-[17rem] text-[13px] leading-6 sm:mt-4 sm:max-w-[18rem] sm:text-[15px] sm:leading-7
                ${isDark ? "text-slate-400" : "text-slate-500"}`}
              >
                {item.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2.5 sm:mt-8">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Show ${item.title}`}
            onClick={() => setActive(index)}
            className={`rounded-full transition-all duration-300 ${
              active === index
                ? isDark
                  ? "h-2 w-7 bg-sky-400"
                  : "h-2 w-7 bg-sky-600"
                : isDark
                  ? "h-2 w-2 bg-slate-600 hover:bg-slate-400"
                  : "h-2 w-2 bg-sky-300 hover:bg-sky-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
