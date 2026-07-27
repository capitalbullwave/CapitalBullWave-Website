/**
 * Decorative money/trading motion layer.
 * Pure CSS animations — no content changes, aria-hidden.
 */
export default function TradingAtmosphere({ theme = "light", variant = "default" }) {
  const isDark = theme === "dark";
  const dense = variant === "dense";

  return (
    <div
      className={`trading-atmosphere pointer-events-none absolute inset-0 overflow-hidden ${
        isDark ? "trading-atmosphere--dark" : "trading-atmosphere--light"
      } ${dense ? "trading-atmosphere--dense" : ""}`}
      aria-hidden="true"
    >
      {/* Rising chart path */}
      <svg
        className="trading-chart absolute left-[-5%] top-[18%] h-24 w-[55%] sm:h-32 sm:w-[48%] lg:h-36"
        viewBox="0 0 400 120"
        fill="none"
      >
        <path
          className="trading-chart__line"
          d="M8 96 C48 92 70 70 102 62 C140 52 160 78 198 58 C236 38 260 28 298 34 C336 40 360 20 392 14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle className="trading-chart__dot" cx="392" cy="14" r="4" fill="currentColor" />
      </svg>

      {/* Mini candles */}
      <div className="trading-candles absolute right-[4%] top-[22%] hidden sm:flex items-end gap-1.5 opacity-80">
        {[18, 28, 14, 34, 22, 40, 26].map((h, i) => (
          <span
            key={i}
            className={`trading-candle ${i % 2 === 0 ? "is-up" : "is-down"}`}
            style={{
              height: `${h}px`,
              animationDelay: `${i * 0.18}s`,
            }}
          />
        ))}
      </div>

      {/* Floating money marks */}
      <span className="trading-float trading-float--1">₹</span>
      <span className="trading-float trading-float--2">$</span>
      <span className="trading-float trading-float--3">%</span>
      {dense ? <span className="trading-float trading-float--4">₹</span> : null}

      {/* Soft ticker strip */}
      <div className="trading-ticker absolute bottom-3 left-0 right-0 hidden md:block">
        <div className="trading-ticker__track">
          <span>NIFTY · BANKNIFTY · EQUITY · F&O · RESEARCH · RISK MANAGED · </span>
          <span>NIFTY · BANKNIFTY · EQUITY · F&O · RESEARCH · RISK MANAGED · </span>
        </div>
      </div>
    </div>
  );
}
