import React from "react";

const Disclaimer = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`w-full py-6 sm:py-12 transition-all duration-300 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto max-w-5xl px-3 sm:px-8 lg:px-10">
        <div
          className={`overflow-hidden rounded-2xl sm:rounded-3xl border shadow-xl transition-all duration-300 ${
            isDark
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          {/* Header */}

          <header
            className={`border-b px-4 py-6 sm:px-8 sm:py-8 ${
              isDark ? "border-slate-700" : "border-slate-200"
            }`}
          >
            <span
              className={`inline-flex rounded-full px-3 py-1 sm:px-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.25em] ${
                isDark
                  ? "bg-indigo-900/40 text-indigo-300"
                  : "bg-indigo-100 text-indigo-700"
              }`}
            >
              Disclaimer
            </span>

            <h1
              className={`mt-4 sm:mt-5 text-xl font-bold sm:text-3xl lg:text-4xl ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Important Notices & Risk Disclosures
            </h1>

            <p
              className={`mt-2 sm:mt-3 text-xs sm:text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </header>

          {/* Content */}

          <article
            className={`space-y-6 sm:space-y-8 px-4 py-6 text-sm sm:text-base leading-6 sm:leading-8 sm:px-8 sm:py-8 ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {/* Section 1 */}

            <section>
              <h2
                className={`mb-3 sm:mb-5 text-lg sm:text-2xl font-bold ${
                  isDark ? "text-blue-300" : "text-blue-600"
                }`}
              >
                1. Capital Bullwave — Indian Advisory Services
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3
                    className={`mb-1.5 sm:mb-2 text-sm sm:text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    No Guaranteed Returns
                  </h3>

                  <p>
                    Bullwave Capital does not promise or guarantee returns
                    on investments. All recommendations and research are
                    educational and indicative in nature. Investment
                    outcomes depend on market conditions and investor
                    decisions.
                  </p>
                </div>

                <div>
                  <h3
                    className={`mb-1.5 sm:mb-2 text-sm sm:text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Independent Market Risk
                  </h3>

                  <p>
                    Research, analysis and stock recommendations provided
                    on the Bullwave platform are for informational
                    purposes only. Final execution risk and
                    responsibility for investments rest solely with the
                    investor.
                  </p>
                </div>

                <div>
                  <h3
                    className={`mb-1.5 sm:mb-2 text-sm sm:text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Payment Verification
                  </h3>

                  <p>
                    Clients must make payments only through official
                    corporate banking channels and retain transaction
                    receipts. Do not rely on unverified or informal
                    payment methods.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}

            <section>
              <h2
                className={`mb-3 sm:mb-5 text-lg sm:text-2xl font-bold ${
                  isDark ? "text-blue-300" : "text-blue-600"
                }`}
              >
                2. Bullwaves — Global Forex & CFD Brokerage
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3
                    className={`mb-1.5 sm:mb-2 text-sm sm:text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Capital Loss Warning
                  </h3>

                  <p>
                    Trading CFDs and leveraged Forex products carries a
                    high level of risk and may result in the loss of your
                    invested capital. Ensure you understand leverage,
                    margin requirements and position sizing before
                    trading.
                  </p>
                </div>

                <div>
                  <h3
                    className={`mb-1.5 sm:mb-2 text-sm sm:text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Retail Account Statistics
                  </h3>

                  <p>
                    Official provider disclosures indicate that a
                    majority of retail investor accounts lose money when
                    trading CFDs with this broker. Past performance is
                    not indicative of future returns.
                  </p>
                </div>

                <div>
                  <h3
                    className={`mb-1.5 sm:mb-2 text-sm sm:text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Jurisdictional Boundary
                  </h3>

                  <p>
                    The offshore trading services described on the
                    Bullwaves platform operate under the Financial
                    Services Authority (FSA) of Seychelles. Clients are
                    subject to that broker's regulatory framework and
                    may not receive protections available under other
                    jurisdictions.
                  </p>
                </div>
              </div>
            </section>

            {/* General */}

            <section>
              <h2
                className={`mb-3 sm:mb-5 text-lg sm:text-2xl font-bold ${
                  isDark ? "text-blue-300" : "text-blue-600"
                }`}
              >
                3. General
              </h2>

              <p>
                This page provides concise statutory and risk
                disclosures. It should not be considered a substitute
                for full contractual terms, official broker
                disclosures, or personalized legal or financial advice.
              </p>

              <p className="mt-3 sm:mt-4">
                For detailed terms and regulatory documents, please
                contact us at{" "}
                <a
                  href="mailto:admin@capitalbullwave.com"
                  className={`inline-block break-all border-b-2 pb-0.5 font-medium transition-colors ${
                    isDark
                      ? "border-sky-400 text-sky-400 hover:border-sky-300 hover:text-sky-300"
                      : "border-blue-700 text-blue-700 hover:border-blue-900 hover:text-blue-900"
                  }`}
                >
                  admin@capitalbullwave.com
                </a>
                .
              </p>
            </section>

            {/* Bottom Notice */}

            <div
              className={`rounded-xl sm:rounded-2xl border p-4 sm:p-5 text-xs sm:text-sm leading-5 sm:leading-7 ${
                isDark
                  ? "border-slate-700 bg-slate-800 text-slate-400"
                  : "border-indigo-100 bg-indigo-50 text-slate-600"
              }`}
            >
              Investments and leveraged financial products involve
              significant risks. Please read all legal documents,
              disclosures and risk warnings carefully before investing
              or trading. If required, seek independent legal,
              financial or tax advice before making investment
              decisions.
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
