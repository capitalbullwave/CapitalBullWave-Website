import React from "react";

const TermsCondition = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`w-full py-12 sm:py-16 transition-all duration-300 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <div
          className={`overflow-hidden rounded-3xl border shadow-xl transition-all duration-300 ${
            isDark
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          {/* Header */}

          <header
            className={`border-b px-6 py-8 sm:px-8 ${
              isDark ? "border-slate-700" : "border-slate-200"
            }`}
          >
            <span
              className={`inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${
                isDark
                  ? "bg-indigo-900/40 text-indigo-300"
                  : "bg-indigo-100 text-indigo-700"
              }`}
            >
              Terms & Conditions
            </span>

            <h1
              className={`mt-5 text-3xl font-bold sm:text-4xl ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Bullwave Capital — Terms & Conditions
            </h1>

            <p
              className={`mt-3 text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </header>

          {/* Content */}

          <article
            className={`space-y-8 px-6 py-8 leading-8 sm:px-8 ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {/* Section 1 */}

            <section>
              <h2
                className={`mb-5 text-2xl font-bold ${
                  isDark ? "text-blue-300" : "text-blue-600"
                }`}
              >
                1. Onshore Legal Framework (Bullwave Capital — India)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3
                    className={`mb-2 text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Age & Verification Requirement
                  </h3>

                  <p>
                    Services are available only to users who are at least
                    18 years old and legally hold a valid Permanent
                    Account Number (PAN). Completion of Know Your
                    Customer (KYC) verification is mandatory before any
                    advisory, account opening or execution-related
                    services are rendered.
                  </p>
                </div>

                <div>
                  <h3
                    className={`mb-2 text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Investment Risk Acknowledgement
                  </h3>

                  <p>
                    All research, market commentary and advisory material
                    provided by Bullwave Capital are for informational
                    purposes only. Any investment decision and the
                    resulting execution risks lie solely with the
                    investor. Past performance is not indicative of
                    future results.
                  </p>
                </div>

                <div>
                  <h3
                    className={`mb-2 text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Subscription and Fees
                  </h3>

                  <p>
                    Advisory, research and subscription fees, where
                    charged, are indicated at the time of purchase.
                    Fees are non-transferable unless explicitly stated
                    and are subject to the renewal and cancellation
                    terms published at the time of subscription.
                  </p>
                </div>

                <div>
                  <h3
                    className={`mb-2 text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Jurisdiction
                  </h3>

                  <p>
                    These terms are governed by the laws of India.
                    Any disputes, arbitration proceedings or statutory
                    complaints arising under or in connection with these
                    terms shall be subject to the exclusive jurisdiction
                    of courts located in Delhi or Gujarat, as applicable.
                    Bullwave Capital operates offices in Delhi and Surat
                    and may choose the appropriate forum consistent with
                    these jurisdictions.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}

            <section>
              <h2
                className={`mb-5 text-2xl font-bold ${
                  isDark ? "text-blue-300" : "text-blue-600"
                }`}
              >
                2. Offshore Brokerage Framework
                (Bullwaves / Equitex Capital Ltd)
              </h2>

              <p>
                For clients using the Bullwaves MetaTrader 5 platform
                (operated under offshore entities including Equitex
                Capital Ltd), the following summary outlines key rules
                and restrictions that apply to those accounts.
                This section applies only to clients of the offshore
                trading platform and does not change the terms that
                govern onshore advisory services.
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <h3
                    className={`mb-2 text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Regulatory Status
                  </h3>

                  <p>
                    Offshore platform operations are governed by the
                    Financial Services Authority of Seychelles (FSA)
                    under license references such as SD185.
                    Clients should consult the broker's disclosure
                    documents for full licensing details and
                    disclaimers.
                  </p>
                </div>

                <div>
                  <h3
                    className={`mb-2 text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Trading Rules & Account Tiers
                  </h3>

                  <p>
                    Typical retail account tiers require a minimum
                    deposit (for example, a classic account may require
                    a minimum of $100). Institutional or reduced-spread
                    access often requires higher capital commitments
                    (commonly starting around $3,000–$5,000), as
                    described by the provider.
                  </p>
                </div>

                <div>
                  <h3
                    className={`mb-2 text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Margin, Margin Calls & Stop-Outs
                  </h3>

                  <p>
                    Leveraged trading carries a high level of risk.
                    The platform may issue margin calls and execute
                    automatic liquidations (stop-outs) when account
                    equity falls below predefined thresholds.
                    Clients must familiarise themselves with margin
                    rules and position sizing requirements before
                    trading.
                  </p>
                </div>
				                <div>
                  <h3
                    className={`mb-2 text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Prohibited Practices
                  </h3>

                  <p>
                    The broker enforces strict rules against manipulative
                    or abusive trading techniques, including latency
                    arbitrage, price feed exploitation, coordinated
                    mirrored trading, wash trading and other actions that
                    undermine market integrity. Breaches may result in
                    immediate account termination and forfeiture of
                    profits.
                  </p>
                </div>

                <div>
                  <h3
                    className={`mb-2 text-lg font-semibold ${
                      isDark ? "text-white" : "text-blue-400"
                    }`}
                  >
                    Prop Trading & Evaluation Programs
                  </h3>

                  <p>
                    Traders participating in evaluation challenges or
                    proprietary (prop) programs are bound by specific
                    program rules. Typical constraints include minimum
                    active trading days (for example, 3–10 days depending
                    on the program structure) together with defined
                    profit, loss and risk limits during the evaluation
                    period.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}

            <section>
              <h2
                className={`mb-5 text-2xl font-bold ${
                  isDark ? "text-blue-300" : "text-blue-600"
                }`}
              >
                3. General Provisions
              </h2>

              <p>
                These terms are a summary overview and do not replace the
                full contractual documents and legal disclosures provided
                by Bullwave Capital or any offshore broker. Where a
                conflict exists between this summary and a signed
                agreement or the broker's official terms, the signed
                agreement and the broker's official terms shall prevail.
              </p>
            </section>

            {/* Contact */}

            <section>
              <h2
                className={`mb-5 text-2xl font-bold ${
                  isDark ? "text-white" : "text-blue-400"
                }`}
              >
                Contact
              </h2>

              <p>
                For questions regarding these terms or to request full
                contract documents, please contact us.
              </p>

              <div
                className={`mt-5 rounded-2xl border p-5 ${
                  isDark
                    ? "border-slate-700 bg-slate-800"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <p className="mb-3">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:admin@capitalbullwave.com"
                    className={`inline-block border-b-2 pb-0.5 font-medium transition-colors ${
                      isDark
                        ? "border-sky-400 text-sky-400 hover:border-sky-300 hover:text-sky-300"
                        : "border-blue-700 text-blue-700 hover:border-blue-900 hover:text-blue-900"
                    }`}
                  >
                    admin@capitalbullwave.com
                  </a>
                </p>

                <p>
                  <strong>Offices:</strong> Delhi and Surat
                </p>
              </div>
            </section>

            {/* Disclaimer */}

            <div
              className={`rounded-2xl border p-5 text-sm leading-7 ${
                isDark
                  ? "border-slate-700 bg-slate-800 text-slate-400"
                  : "border-indigo-100 bg-indigo-50 text-slate-600"
              }`}
            >
              This page provides a concise summary for informational
              purposes only. It should not be treated as a substitute for
              the complete legal agreements, statutory disclosures or
              professional legal advice. For definitive legal guidance,
              please consult a qualified attorney.
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TermsCondition;