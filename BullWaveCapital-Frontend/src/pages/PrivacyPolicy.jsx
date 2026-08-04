import { Helmet } from "react-helmet-async";
import LegalDocument, {
  LegalSection,
  LegalSub,
  LegalNote,
  LegalLink,
} from "../components/LegalDocument";

const listClass =
  "list-disc space-y-1.5 sm:space-y-2 pl-5 sm:pl-6 marker:text-sky-500";

const PrivacyPolicy = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Capital BullWave</title>
        <meta
          name="description"
          content="Read Capital BullWave Private Limited's Privacy Policy to understand how we collect, use, disclose, store and safeguard your personal information."
        />
        <link
          rel="canonical"
          href="https://www.capitalbullwave.com/privacy-policy"
        />
        <meta property="og:title" content="Privacy Policy | Capital BullWave" />
        <meta
          property="og:url"
          content="https://www.capitalbullwave.com/privacy-policy"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalDocument
        theme={theme}
        badge="Privacy Policy"
        title="Capital BullWave Private Limited"
        effectiveDate="July 24, 2026"
      >
        <LegalSection theme={theme} title="1. Introduction">
          <p>
            Capital BullWave Private Limited ("Capital BullWave", "Company",
            "we", "our", or "us") respects your privacy and is committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, disclose, store, and safeguard your information
            when you visit our website, mobile applications, or use any of our
            financial research, investment advisory, educational,
            trading-related, or customer support services.
          </p>
          <p className="mt-3 sm:mt-4">
            By accessing or using our services, you acknowledge that you have
            read and understood this Privacy Policy and agree to the collection
            and use of your information as described herein.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="2. Information We Collect">
          <p>We may collect the following categories of information:</p>

          <LegalSub theme={theme} title="Personal Information">
            <ul className={listClass}>
              <li>Full Name</li>
              <li>Date of Birth</li>
              <li>Gender</li>
              <li>Residential Address</li>
              <li>Email Address</li>
              <li>Mobile Number</li>
              <li>PAN Card Number</li>
              <li>Aadhaar Number (where legally permitted)</li>
              <li>Passport, Driving Licence or other Government-issued ID</li>
              <li>KYC Documents</li>
              <li>Bank Account Information (when required)</li>
              <li>Demat and Trading Account Details</li>
              <li>Nominee Information</li>
            </ul>
          </LegalSub>

          <LegalSub theme={theme} title="Financial Information">
            <ul className={listClass}>
              <li>Investment Profile</li>
              <li>Risk Appetite</li>
              <li>Income Details</li>
              <li>Investment Preferences</li>
              <li>Portfolio Information</li>
              <li>Trading History</li>
              <li>Financial Goals</li>
            </ul>
          </LegalSub>

          <LegalSub theme={theme} title="Technical Information">
            <ul className={listClass}>
              <li>IP Address</li>
              <li>Browser Type</li>
              <li>Device Information</li>
              <li>Operating System</li>
              <li>Mobile Device Identifiers</li>
              <li>Cookies</li>
              <li>Website Usage Data</li>
              <li>Login Activity</li>
              <li>Crash Reports</li>
              <li>Analytics Data</li>
            </ul>
          </LegalSub>

          <LegalSub theme={theme} title="Communication Information">
            <ul className={listClass}>
              <li>Customer Support Requests</li>
              <li>Emails</li>
              <li>WhatsApp Messages</li>
              <li>Live Chat Messages</li>
              <li>Call Recordings (where applicable)</li>
            </ul>
          </LegalSub>
        </LegalSection>

        <LegalSection theme={theme} title="3. How We Collect Information">
          <p>We collect information:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Directly from you</li>
            <li>During account registration</li>
            <li>Through KYC verification</li>
            <li>While using our website or mobile applications</li>
            <li>Through cookies and similar technologies</li>
            <li>
              From financial institutions or service providers with your
              authorization
            </li>
            <li>Through customer support interactions</li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="4. Purpose of Processing">
          <p>We use your information to:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Verify your identity</li>
            <li>Complete KYC requirements</li>
            <li>Provide investment advisory services</li>
            <li>Deliver financial research and market insights</li>
            <li>Manage customer accounts</li>
            <li>Process payments and subscriptions</li>
            <li>Improve our services</li>
            <li>Detect fraud and suspicious activities</li>
            <li>Protect customer accounts</li>
            <li>Respond to customer support requests</li>
            <li>Send important service notifications</li>
            <li>Comply with legal and regulatory obligations</li>
            <li>Maintain internal business records</li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="5. Legal Basis for Processing">
          <p>
            Where applicable, we process personal information based on:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Your consent</li>
            <li>Performance of a contract</li>
            <li>Compliance with legal obligations</li>
            <li>Protection against fraud</li>
            <li>Legitimate business interests</li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="6. Cookies and Tracking Technologies">
          <p>Our website may use cookies and similar technologies to:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Improve website performance</li>
            <li>Remember user preferences</li>
            <li>Maintain secure sessions</li>
            <li>Analyze visitor traffic</li>
            <li>Enhance user experience</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            You may disable cookies through your browser settings; however, some
            features may not function properly.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="7. Sharing of Information">
          <p>We do not sell your personal information.</p>
          <p className="mt-3 sm:mt-4">We may share information with:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Banking Partners</li>
            <li>Payment Service Providers</li>
            <li>Cloud Hosting Providers</li>
            <li>Technology Vendors</li>
            <li>Customer Support Providers</li>
            <li>Government Authorities</li>
            <li>Courts</li>
            <li>Regulatory Bodies</li>
            <li>Auditors</li>
            <li>Legal Advisors</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Information is shared only when necessary to provide services, comply
            with legal obligations, or protect our rights.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="8. Data Security">
          <p>
            We implement appropriate administrative, technical, and physical
            safeguards including:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Encryption of sensitive information</li>
            <li>Secure cloud infrastructure</li>
            <li>Multi-factor authentication</li>
            <li>Role-based access controls</li>
            <li>Firewall protection</li>
            <li>Continuous monitoring</li>
            <li>Security logging</li>
            <li>Vulnerability assessments</li>
            <li>Employee security awareness training</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            While we strive to protect your information, no system can guarantee
            absolute security.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="9. Data Retention">
          <p>We retain your information only for as long as necessary to:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Provide our services</li>
            <li>Meet contractual obligations</li>
            <li>Comply with applicable laws and regulations</li>
            <li>Resolve disputes</li>
            <li>Enforce our agreements</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            After the applicable retention period, information is securely
            deleted or anonymized where appropriate.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="10. Your Privacy Rights">
          <p>Subject to applicable law, you may request to:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Update your information</li>
            <li>Delete information where legally permitted</li>
            <li>Withdraw consent where applicable</li>
            <li>Object to certain processing activities</li>
            <li>
              Receive information regarding how your data is processed
            </li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Requests may be submitted using the contact information below.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="11. Children's Privacy">
          <p>
            Our services are not intended for individuals under 18 years of age.
            We do not knowingly collect personal information from children
            without legal authorization.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="12. Third-Party Services">
          <p>
            Our website and applications may contain links to third-party
            websites or integrate services provided by third parties. We are not
            responsible for the privacy practices or content of those third-party
            services. Users should review their respective privacy policies
            before providing any personal information.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="13. Regulatory Compliance">
          <p>
            Capital BullWave Private Limited processes personal information in
            accordance with applicable Indian laws and regulations, including
            regulatory requirements applicable to financial service providers.
          </p>
          <p className="mt-3 sm:mt-4">
            Where required, information may be disclosed to regulatory
            authorities, law enforcement agencies, courts, or government
            departments.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="14. International Data Transfers">
          <p>
            If personal information is processed or stored outside India by our
            authorized service providers, we will take reasonable measures to
            ensure appropriate safeguards are implemented to protect your
            information.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="15. Changes to this Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be published on our website with an updated Effective Date. Continued
            use of our services after such updates constitutes acceptance of the
            revised Privacy Policy.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="16. Contact Information">
          <p
            className={`font-semibold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Capital BullWave Private Limited
          </p>
          <p className="mt-2">
            <strong className={isDark ? "text-white" : "text-black"}>
              India Office:
            </strong>{" "}
            Aggarwal Millennium Tower 2, Netaji Subhash Place, Pitampura, New
            Delhi – 110034
          </p>
          <p className="mt-2">
            <strong className={isDark ? "text-white" : "text-black"}>
              Dubai Office:
            </strong>{" "}
            World Trade Centre (Sheikh Rashid Tower), Sheikh Zayed Road, P.O. Box: 9700,
            Dubai, United Arab Emirates
          </p>
          <p className="mt-2">
            <strong className={isDark ? "text-white" : "text-black"}>
              Email:
            </strong>{" "}
            <LegalLink theme={theme} href="mailto:admin@capitalbullwave.com">
              admin@capitalbullwave.com
            </LegalLink>
          </p>
        </LegalSection>

        <LegalNote theme={theme}>
          By using Capital BullWave services, you acknowledge that you have read
          and understood this Privacy Policy.
        </LegalNote>
      </LegalDocument>
    </>
  );
};

export default PrivacyPolicy;
