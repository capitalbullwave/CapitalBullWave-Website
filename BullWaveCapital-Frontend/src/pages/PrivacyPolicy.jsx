import { Helmet } from "react-helmet-async";
import LegalDocument, {
  LegalSection,
  LegalNote,
  LegalLink,
} from "../components/LegalDocument";

const PrivacyPolicy = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Capital BullWave</title>
        <meta
          name="description"
          content="Read Capital BullWave's Privacy Policy to understand how we collect, use, store and protect your personal information in compliance with applicable Indian regulations."
        />
        <link rel="canonical" href="https://www.capitalbullwave.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Capital BullWave" />
        <meta property="og:url" content="https://www.capitalbullwave.com/privacy-policy" />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalDocument
        theme={theme}
        badge="Privacy Policy"
        title="Bullwave Capital — Privacy & Data Protection"
      >
        <p>
          Bullwave Capital ("we", "us", "our") is committed to protecting your
          privacy while delivering financial research and advisory services. We
          operate in accordance with applicable Indian regulations and maintain
          industry-standard safeguards for your information.
        </p>

        <LegalSection theme={theme} title="1. Information We Collect">
          <p>
            We may collect personal information including your full name,
            address, email, phone number, PAN, Aadhaar, KYC documents and
            investment profile information required for regulatory compliance and
            providing our services.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="2. Why We Process Your Data">
          <ul className="list-disc space-y-1.5 sm:space-y-2 pl-5 sm:pl-6 marker:text-sky-500">
            <li>Identity verification and fraud prevention.</li>
            <li>Account creation and service management.</li>
            <li>Investment research and advisory services.</li>
            <li>Regulatory and legal compliance.</li>
            <li>Customer support and important notifications.</li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="3. Storage & Sharing">
          <p>
            Your information is stored securely and is never sold for marketing
            purposes. We may share information only with trusted service
            providers or government authorities when legally required.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="4. Data Retention">
          <p>
            Records are retained for the duration required under applicable
            financial regulations and legal obligations.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="5. Your Rights">
          <p>
            You may request access, correction or deletion of your personal
            information wherever permitted by applicable law.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="6. Security">
          <p>
            We use encryption, secure servers and industry-standard
            administrative, technical and physical safeguards to protect your
            personal information.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="7. Third-Party Services">
          <p>
            We work with trusted third-party providers including hosting, payment
            and analytics partners who process information only on our behalf.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="8. Regulatory Disclosure">
          <p>
            Information may be disclosed when required under applicable laws,
            court orders or regulatory obligations.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="9. Contact Us">
          <p>
            <strong className={isDark ? "text-white" : "text-black"}>
              Email:
            </strong>{" "}
            <LegalLink theme={theme} href="mailto:admin@capitalbullwave.com">
              admin@capitalbullwave.com
            </LegalLink>
          </p>
          <p className="mt-2">
            <strong className={isDark ? "text-white" : "text-black"}>
              Registered Office:
            </strong>{" "}
            Aggarwal Millennium Tower 2, Netaji Subhash Place, Pitampura, New
            Delhi – 110034
          </p>
        </LegalSection>

        <LegalNote theme={theme}>
          This summary provides an overview of our privacy practices. Please
          refer to the complete Privacy Policy for detailed legal terms and
          conditions.
        </LegalNote>
      </LegalDocument>
    </>
  );
};

export default PrivacyPolicy;
