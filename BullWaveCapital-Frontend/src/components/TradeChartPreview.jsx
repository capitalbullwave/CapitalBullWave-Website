/**
 * Animated trading chart preview (Olymp-style layout).
 * Labels use existing HomeTrading share copy — no new marketing claims.
 */
export default function TradeChartPreview({ theme = "light" }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`trade-chart-preview relative overflow-hidden rounded-[1.35rem] sm:rounded-[1.75rem]
      ${
        isDark
          ? "bg-slate-950 ring-1 ring-white/10"
          : "bg-slate-950 ring-1 ring-slate-800 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
      }`}
    >
      <div className="relative h-[240px] sm:h-[280px] lg:h-[320px] p-3 sm:p-4">
        {/* Grid */}
        <svg
          className="absolute inset-3 sm:inset-4 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] sm:w-[calc(100%-2rem)]"
          viewBox="0 0 640 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 64}
              x2="640"
              y2={i * 64}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <line
              key={`v-${i}`}
              x1={i * 80}
              y1="0"
              x2={i * 80}
              y2="320"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          ))}
          <line
            className="trade-chart-expiry"
            x1="420"
            y1="20"
            x2="420"
            y2="300"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            className="trade-chart-line"
            d="M20 240 C70 230 90 200 130 190 C170 180 190 210 230 150 C270 90 300 120 340 100 C380 80 400 130 440 95 C480 60 520 70 580 50 C600 44 620 40 635 38"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="trade-chart-fill"
            d="M20 240 C70 230 90 200 130 190 C170 180 190 210 230 150 C270 90 300 120 340 100 C380 80 400 130 440 95 C480 60 520 70 580 50 C600 44 620 40 635 38 L635 320 L20 320 Z"
            fill="url(#tradeFill)"
          />
          <defs>
            <linearGradient id="tradeFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle className="trade-chart-pulse" cx="635" cy="38" r="5" fill="#fff" />
          <circle className="trade-chart-pulse-ring" cx="635" cy="38" r="10" fill="none" stroke="#38bdf8" strokeWidth="2" />
        </svg>

        {/* Markers */}
        <div className="trade-marker trade-marker--gain absolute left-[48%] top-[28%] sm:left-[50%] sm:top-[26%]">
          <span>30%</span>
          <span className="trade-marker__arrow" aria-hidden="true">
            ↑
          </span>
        </div>
        <div className="trade-marker trade-marker--price absolute right-3 top-[12%] sm:right-5 sm:top-[10%]">
          NIFTY
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 border-t border-white/10 p-3 sm:gap-3 sm:p-4">
        <div className="trade-metric rounded-xl sm:rounded-2xl bg-white/10 px-3 py-3 sm:px-4 sm:py-3.5 ring-1 ring-white/15">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
            Our share
          </p>
          <p className="mt-1 text-lg sm:text-xl font-bold text-white">70%</p>
        </div>
        <div className="trade-metric rounded-xl sm:rounded-2xl bg-white/10 px-3 py-3 sm:px-4 sm:py-3.5 ring-1 ring-white/15">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
            Trader&apos;s share
          </p>
          <p className="mt-1 text-lg sm:text-xl font-bold text-sky-300">30%</p>
        </div>
      </div>
    </div>
  );
}
