const PrivacyPolicy = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`w-full py-6 sm:py-10 transition-all duration-300 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="mx-auto max-w-5xl px-3 sm:px-8 lg:px-10">
        <div
          className={`rounded-2xl sm:rounded-3xl border shadow-lg transition-all duration-300 ${
            isDark
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          {/* Header */}
          <div
            className={`border-b px-4 py-6 sm:px-8 sm:py-8 ${
              isDark ? "border-slate-700" : "border-slate-200"
            }`}
          >
            <span
              className={`inline-flex rounded-full px-3 py-1 sm:px-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.25em] ${
                isDark
                  ? "bg-blue-900/40 text-sky-300"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              Privacy Policy
            </span>

            <h1
              className={`mt-4 sm:mt-5 text-xl sm:text-2xl lg:text-3xl font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Bullwave Capital — Privacy & Data Protection
            </h1>

            <p
              className={`mt-2 sm:mt-3 text-xs sm:text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div
            className={`space-y-6 sm:space-y-8 px-4 py-6 text-sm sm:text-base leading-6 sm:leading-8 sm:px-8 sm:py-8 ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <p>
              Bullwave Capital ("we", "us", "our") is committed to protecting
              your privacy while delivering financial research and advisory
              services. We operate in accordance with applicable Indian
              regulations and maintain industry-standard safeguards for your
              information.
            </p>

            <div>
              <h2
                className={`mb-2 sm:mb-3 text-base sm:text-xl font-semibold ${
                  isDark ? "text-white" : "text-blue-600"
                }`}
              >
                1. Information We Collect
              </h2>

              <p>
                We may collect personal information including your full name,
                address, email, phone number, PAN, Aadhaar, KYC documents and
                investment profile information required for regulatory
                compliance and providing our services.
              </p>
            </div>

            <div>
              <h2
                className={`mb-2 sm:mb-3 text-base sm:text-xl font-semibold ${
                  isDark ? "text-white" : "text-blue-600"
                }`}
              >
                2. Why We Process Your Data
              </h2>

              <ul className="list-disc space-y-1.5 sm:space-y-2 pl-5 sm:pl-6">
                <li>Identity verification and fraud prevention.</li>
                <li>Account creation and service management.</li>
                <li>Investment research and advisory services.</li>
                <li>Regulatory and legal compliance.</li>
                <li>Customer support and important notifications.</li>
              </ul>
            </div>

            <div>
              <h2
                className={`mb-2 sm:mb-3 text-base sm:text-xl font-semibold ${
                  isDark ? "text-white" : "text-blue-600"
                }`}
              >
                3. Storage & Sharing
              </h2>

              <p>
                Your information is stored securely and is never sold for
                marketing purposes. We may share information only with trusted
                service providers or government authorities when legally
                required.
              </p>
            </div>

            <div>
              <h2
                className={`mb-2 sm:mb-3 text-base sm:text-xl font-semibold ${
                  isDark ? "text-white" : "text-blue-600"
                }`}
              >
                4. Data Retention
              </h2>

              <p>
                Records are retained for the duration required under applicable
                financial regulations and legal obligations.
              </p>
            </div>

            <div>
              <h2
                className={`mb-2 sm:mb-3 text-base sm:text-xl font-semibold ${
                  isDark ? "text-white" : "text-blue-600"
                }`}
              >
                5. Your Rights
              </h2>

              <p>
                You may request access, correction or deletion of your personal
                information wherever permitted by applicable law.
              </p>
            </div>

            <div>
              <h2
                className={`mb-2 sm:mb-3 text-base sm:text-xl font-semibold ${
                  isDark ? "text-white" : "text-blue-600"
                }`}
              >
                6. Security
              </h2>

              <p>
                We use encryption, secure servers and industry-standard
                administrative, technical and physical safeguards to protect
                your personal information.
              </p>
            </div>

            <div>
              <h2
                className={`mb-2 sm:mb-3 text-base sm:text-xl font-semibold ${
                  isDark ? "text-white" : "text-blue-600"
                }`}
              >
                7. Third-Party Services
              </h2>

              <p>
                We work with trusted third-party providers including hosting,
                payment and analytics partners who process information only on
                our behalf.
              </p>
            </div>

            <div>
              <h2
                className={`mb-2 sm:mb-3 text-base sm:text-xl font-semibold ${
                  isDark ? "text-white" : "text-blue-600"
                }`}
              >
                8. Regulatory Disclosure
              </h2>

              <p>
                Information may be disclosed when required under applicable
                laws, court orders or regulatory obligations.
              </p>
            </div>

            <div>
              <h2
                className={`mb-2 sm:mb-3 text-base sm:text-xl font-semibold ${
                  isDark ? "text-white" : "text-blue-600"
                }`}
              >
                9. Contact Us
              </h2>

              <p>
                <strong>Email:</strong>{" "}
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
              </p>

              <p className="mt-2">
                <strong>Registered Office:</strong> Aggarwal Millennium Tower
                2, Netaji Subhash Place, Pitampura, New Delhi – 110034
              </p>
            </div>

            <div
              className={`rounded-xl border p-3 sm:p-4 text-xs sm:text-sm ${
                isDark
                  ? "border-slate-700 bg-slate-800 text-slate-400"
                  : "border-blue-100 bg-blue-50 text-slate-600"
              }`}
            >
              This summary provides an overview of our privacy practices. Please
              refer to the complete Privacy Policy for detailed legal terms and
              conditions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
