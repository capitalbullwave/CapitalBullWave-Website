import { Helmet } from "react-helmet-async";
import LegalDocument, {
  LegalSection,
  LegalSub,
  LegalNote,
  LegalLink,
} from "../components/LegalDocument";

const listClass =
  "list-disc space-y-1.5 sm:space-y-2 pl-5 sm:pl-6 marker:text-sky-500";

const TermsCondition = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Capital BullWave</title>
        <meta
          name="description"
          content="Read the Terms & Conditions governing Capital BullWave Private Limited's website, research, advisory, educational and subscription services."
        />
        <link rel="canonical" href="https://www.capitalbullwave.com/terms" />
        <meta
          property="og:title"
          content="Terms & Conditions | Capital BullWave"
        />
        <meta property="og:url" content="https://www.capitalbullwave.com/terms" />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalDocument
        theme={theme}
        badge="Terms & Conditions"
        title="Capital BullWave Private Limited"
        effectiveDate="24 July 2026"
      >
        <LegalSection theme={theme} title="1. Introduction">
          <p>
            Welcome to Capital BullWave Private Limited ("BullWave Capital",
            "Company", "we", "us", or "our").
          </p>
          <p className="mt-3 sm:mt-4">
            These Terms & Conditions ("Terms") govern your access to and use of
            our website, mobile applications, digital platforms, research
            services, advisory services, educational content, subscription
            services, trading-related solutions, and other services provided by
            the Company.
          </p>
          <p className="mt-3 sm:mt-4">
            By accessing, registering, subscribing, or using any service provided
            by Capital BullWave, you acknowledge that you have read, understood,
            and agreed to these Terms.
          </p>
          <p className="mt-3 sm:mt-4">
            If you do not agree with these Terms, you must discontinue using our
            services.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="2. Company Information">
          <ul className={listClass}>
            <li>
              <strong className={isDark ? "text-white" : "text-black"}>
                Company Name:
              </strong>{" "}
              Capital BullWave Private Limited
            </li>
            <li>
              <strong className={isDark ? "text-white" : "text-black"}>
                Brand Name:
              </strong>{" "}
              BullWave Capital
            </li>
            <li>
              <strong className={isDark ? "text-white" : "text-black"}>
                Country of Operation:
              </strong>{" "}
              India
            </li>
            <li>
              <strong className={isDark ? "text-white" : "text-black"}>
                Email:
              </strong>{" "}
              <LegalLink theme={theme} href="mailto:admin@capitalbullwave.com">
                admin@capitalbullwave.com
              </LegalLink>
              ,{" "}
              <LegalLink
                theme={theme}
                href="mailto:capitalbullwave@gmail.com"
              >
                capitalbullwave@gmail.com
              </LegalLink>
            </li>
            <li>
              <strong className={isDark ? "text-white" : "text-black"}>
                India Office:
              </strong>{" "}
              UNIT NO. 1275, 12TH FLOOR, AGGARWAL MILLENIUM TOWER-2, NETAJI
              SUBHASH PLACE, PITAMPURA, New Delhi – 110034
            </li>
            <li>
              <strong className={isDark ? "text-white" : "text-black"}>
                Dubai Office:
              </strong>{" "}
              World Trade Centre (Sheikh Rashid Tower), Sheikh Zayed Road, P.O. Box:
              9700, Dubai, United Arab Emirates
            </li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Capital BullWave provides market research, financial insights,
            investment education, advisory-related services, and
            technology-enabled financial solutions.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="3. Definitions">
          <p>For the purpose of these Terms:</p>
          <ul className={`${listClass} mt-3`}>
            <li>
              <strong className={isDark ? "text-white" : "text-black"}>
                "User", "Client", or "Customer"
              </strong>{" "}
              means any person accessing or using our services.
            </li>
            <li>
              <strong className={isDark ? "text-white" : "text-black"}>
                "Platform"
              </strong>{" "}
              means the Company's website, mobile application, software, and
              digital services.
            </li>
            <li>
              <strong className={isDark ? "text-white" : "text-black"}>
                "Services"
              </strong>{" "}
              means research reports, market analysis, investment education,
              advisory services, subscriptions, technology solutions, and related
              offerings.
            </li>
            <li>
              <strong className={isDark ? "text-white" : "text-black"}>
                "Account"
              </strong>{" "}
              means a registered user profile created on our platform.
            </li>
            <li>
              <strong className={isDark ? "text-white" : "text-black"}>
                "Third Party Provider"
              </strong>{" "}
              means any external broker, bank, payment gateway, technology
              provider, exchange, financial institution, or service partner.
            </li>
            <li>
              <strong className={isDark ? "text-white" : "text-black"}>
                "KYC"
              </strong>{" "}
              means Know Your Customer verification conducted according to
              applicable laws and regulations.
            </li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="4. Acceptance of Terms">
          <p>By using our services, you confirm that:</p>
          <ul className={`${listClass} mt-3`}>
            <li>You have read and accepted these Terms.</li>
            <li>You have legal capacity to enter into this agreement.</li>
            <li>Information provided by you is accurate and complete.</li>
            <li>You agree to comply with applicable laws.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            The Company may update these Terms periodically. Continued use of
            services after updates means acceptance of revised Terms.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="5. Eligibility Requirements">
          <p>Users must:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Be at least 18 years of age.</li>
            <li>Provide valid identity and contact information.</li>
            <li>Complete verification requirements where applicable.</li>
            <li>Use services only for lawful purposes.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Capital BullWave reserves the right to refuse service where required
            information is unavailable or compliance requirements are not
            satisfied.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="6. User Registration and Account Security">
          <p>Users are responsible for maintaining:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Account credentials.</li>
            <li>Password confidentiality.</li>
            <li>OTP security.</li>
            <li>Device security.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Users must immediately inform the Company about:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Unauthorized account access.</li>
            <li>Suspicious transactions.</li>
            <li>Misuse of account information.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            The Company shall not be responsible for losses caused by user
            negligence or sharing of confidential information.
          </p>
        </LegalSection>

        <LegalSection
          theme={theme}
          title="7. Services Provided by Capital BullWave"
        >
          <p>Capital BullWave may provide:</p>

          <LegalSub theme={theme} title="7.1 Financial Research Services">
            <p>Including:</p>
            <ul className={`${listClass} mt-2`}>
              <li>Market reports.</li>
              <li>Equity research.</li>
              <li>Trading insights.</li>
              <li>Educational material.</li>
              <li>Market commentary.</li>
            </ul>
          </LegalSub>

          <LegalSub theme={theme} title="7.2 Advisory Related Services">
            <p>Where legally permitted:</p>
            <ul className={`${listClass} mt-2`}>
              <li>Investment guidance.</li>
              <li>Portfolio-related insights.</li>
              <li>Financial education.</li>
            </ul>
          </LegalSub>

          <LegalSub theme={theme} title="7.3 Digital Platform Services">
            <p>Including:</p>
            <ul className={`${listClass} mt-2`}>
              <li>User dashboards.</li>
              <li>Subscription management.</li>
              <li>Communication tools.</li>
              <li>Partner integrations.</li>
            </ul>
          </LegalSub>

          <p className="mt-3 sm:mt-4">
            Services may be modified, suspended, or discontinued at the Company's
            discretion.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="8. Investment Risk Disclosure">
          <p>All investment and trading activities involve risk.</p>
          <p className="mt-3 sm:mt-4">Users acknowledge:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Financial markets are unpredictable.</li>
            <li>Prices may fluctuate.</li>
            <li>Loss of capital is possible.</li>
            <li>Past performance does not guarantee future results.</li>
            <li>No investment return is guaranteed.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Any investment decision made using information provided by Capital
            BullWave shall be the sole responsibility of the user.
          </p>
          <p className="mt-3 sm:mt-4">
            Capital BullWave shall not be responsible for financial losses
            arising from market movements or investment decisions.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="9. No Guarantee of Profits">
          <p>Capital BullWave does not guarantee:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Fixed returns.</li>
            <li>Guaranteed profits.</li>
            <li>Certain outcomes from any investment strategy.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Any statements regarding previous performance, examples, or market
            analysis are for informational purposes only.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="10. Subscription and Service Fees">
          <p>Certain services may require payment.</p>
          <p className="mt-3 sm:mt-4">Users agree:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Fees will be displayed before purchase.</li>
            <li>Payments must be completed through approved channels.</li>
            <li>Applicable taxes shall be payable by the user.</li>
            <li>Subscription access is subject to payment confirmation.</li>
          </ul>
          <p className="mt-3 sm:mt-4">Unless otherwise stated:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Fees are non-transferable.</li>
            <li>Fees are non-refundable after service activation.</li>
            <li>Promotional offers may have separate conditions.</li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="11. Payment Terms">
          <p>Payments may be processed through authorised:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Payment gateways.</li>
            <li>Banks.</li>
            <li>Financial technology partners.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Capital BullWave does not store sensitive payment credentials such
            as:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Debit/Credit card PINs.</li>
            <li>Banking passwords.</li>
            <li>UPI PINs.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Users must follow the terms of applicable payment service providers.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="12. Third-Party Services">
          <p>Capital BullWave may integrate with third-party services including:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Brokers.</li>
            <li>Payment providers.</li>
            <li>Banks.</li>
            <li>Trading platforms.</li>
            <li>Technology providers.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Such services may have separate terms and conditions.
          </p>
          <p className="mt-3 sm:mt-4">
            Capital BullWave is not responsible for:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Third-party downtime.</li>
            <li>Technical failures.</li>
            <li>Service interruptions.</li>
            <li>Actions of external providers.</li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="13. KYC and Document Verification">
          <p>Where required, users may provide:</p>
          <ul className={`${listClass} mt-3`}>
            <li>PAN Card.</li>
            <li>Aadhaar Card.</li>
            <li>Address proof.</li>
            <li>Bank details.</li>
            <li>Other regulatory documents.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Users authorize the Company and authorised partners to verify
            submitted information.
          </p>
          <p className="mt-3 sm:mt-4">
            False or misleading information may result in account suspension.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="14. User Responsibilities">
          <p>Users agree to:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Provide correct information.</li>
            <li>Follow applicable laws.</li>
            <li>Maintain account security.</li>
            <li>Use services responsibly.</li>
            <li>Avoid fraudulent activities.</li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="15. Prohibited Activities">
          <p>Users shall not:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Use false identity.</li>
            <li>Attempt unauthorized access.</li>
            <li>Copy Company content without permission.</li>
            <li>Engage in fraudulent transactions.</li>
            <li>Manipulate systems.</li>
            <li>Use services for illegal purposes.</li>
            <li>Distribute confidential research material.</li>
          </ul>
          <p className="mt-3 sm:mt-4">Violation may result in termination.</p>
        </LegalSection>

        <LegalSection theme={theme} title="16. Intellectual Property Rights">
          <p>All Company materials including:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Brand name.</li>
            <li>Logo.</li>
            <li>Website content.</li>
            <li>Software.</li>
            <li>Reports.</li>
            <li>Research materials.</li>
            <li>Designs.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            are owned by Capital BullWave or respective owners.
          </p>
          <p className="mt-3 sm:mt-4">
            No user may reproduce, sell, distribute, or modify such materials
            without written permission.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="17. Privacy and Data Protection">
          <p>
            User information shall be handled according to the Company's Privacy
            Policy.
          </p>
          <p className="mt-3 sm:mt-4">
            Capital BullWave may collect and process information for:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Providing services.</li>
            <li>Account management.</li>
            <li>Security.</li>
            <li>Compliance.</li>
            <li>Fraud prevention.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Information may be disclosed where required by law or authorised
            regulatory authorities.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="18. Service Availability">
          <p>The Company does not guarantee uninterrupted availability.</p>
          <p className="mt-3 sm:mt-4">Services may be affected due to:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Maintenance.</li>
            <li>Technical issues.</li>
            <li>Internet failures.</li>
            <li>Security requirements.</li>
            <li>Regulatory restrictions.</li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="19. Limitation of Liability">
          <p>Capital BullWave shall not be liable for:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Investment losses.</li>
            <li>Trading losses.</li>
            <li>Market fluctuations.</li>
            <li>Technical failures.</li>
            <li>Third-party failures.</li>
            <li>Unauthorized access caused by user actions.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            The Company shall not be responsible for indirect, incidental, or
            consequential damages.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="20. Indemnification">
          <p>
            Users agree to indemnify Capital BullWave against claims, losses,
            damages, costs, or expenses arising from:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Violation of these Terms.</li>
            <li>Illegal activities.</li>
            <li>Misuse of services.</li>
            <li>Fraudulent actions.</li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="21. Account Suspension and Termination">
          <p>Capital BullWave may suspend or terminate accounts if:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Terms are violated.</li>
            <li>Fraud is suspected.</li>
            <li>Legal requirements demand action.</li>
            <li>User information is inaccurate.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Termination does not affect obligations already incurred.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="22. Grievance Redressal">
          <p>Users may contact:</p>
          <p className="mt-3 sm:mt-4">
            <strong className={isDark ? "text-white" : "text-black"}>
              Email:
            </strong>{" "}
            <LegalLink theme={theme} href="mailto:admin@capitalbullwave.com">
              admin@capitalbullwave.com
            </LegalLink>
          </p>
          <p className="mt-3 sm:mt-4">
            The Company will attempt to resolve complaints within a reasonable
            period.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="23. Governing Law and Jurisdiction">
          <p>These Terms shall be governed by the laws of India.</p>
          <p className="mt-3 sm:mt-4">
            Any dispute shall be subject to the jurisdiction of courts located
            in Delhi, India.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="24. Amendments to Terms">
          <p>
            Capital BullWave reserves the right to modify these Terms at any
            time.
          </p>
          <p className="mt-3 sm:mt-4">
            Updated Terms will be published through official communication
            channels.
          </p>
          <p className="mt-3 sm:mt-4">
            Continued use of services after changes indicates acceptance.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="25. General Disclaimer">
          <p>
            Capital BullWave provides financial research, market information,
            education, and related services.
          </p>
          <p className="mt-3 sm:mt-4">
            Investments in securities and financial products are subject to
            market risks.
          </p>
          <p className="mt-3 sm:mt-4">
            Users should evaluate their own financial circumstances and seek
            professional advice where required before making investment
            decisions.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="Contact Information">
          <p
            className={`font-semibold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Capital BullWave Private Limited
          </p>
          <p className="mt-2">
            <strong className={isDark ? "text-white" : "text-black"}>
              Email:
            </strong>{" "}
            <LegalLink theme={theme} href="mailto:admin@capitalbullwave.com">
              admin@capitalbullwave.com
            </LegalLink>
          </p>
          <p className="mt-2">
            <strong className={isDark ? "text-white" : "text-black"}>
              Location:
            </strong>{" "}
            Delhi, India
          </p>
        </LegalSection>

        <LegalNote theme={theme}>
          © 2026 Capital BullWave Private Limited. All Rights Reserved.
        </LegalNote>
      </LegalDocument>
    </>
  );
};

export default TermsCondition;
