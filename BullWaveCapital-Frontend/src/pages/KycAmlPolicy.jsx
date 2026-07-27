import { Helmet } from "react-helmet-async";
import LegalDocument, {
  LegalSection,
  LegalSub,
  LegalNote,
  LegalLink,
} from "../components/LegalDocument";

const listClass =
  "list-disc space-y-1.5 sm:space-y-2 pl-5 sm:pl-6 marker:text-sky-500";

const KycAmlPolicy = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <>
      <Helmet>
        <title>KYC & AML Policy | Capital BullWave</title>
        <meta
          name="description"
          content="Read Capital Bullwave Pvt. Ltd.'s KYC & AML Policy covering customer identification, due diligence, sanctions screening, transaction monitoring, and compliance."
        />
        <link
          rel="canonical"
          href="https://www.capitalbullwave.com/kyc-aml-policy"
        />
        <meta
          property="og:title"
          content="KYC & AML Policy | Capital BullWave"
        />
        <meta
          property="og:url"
          content="https://www.capitalbullwave.com/kyc-aml-policy"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalDocument
        theme={theme}
        badge="KYC & AML Policy"
        title="Capital Bullwave Pvt. Ltd."
      >
        <LegalSection theme={theme} title="1. Purpose">
          <p>
            Capital Bullwave Pvt. Ltd. ("the Company") is committed to conducting
            business with the highest standards of integrity, transparency, and
            regulatory compliance. The Company maintains a robust Know Your
            Customer (KYC) and Anti-Money Laundering (AML) framework to prevent
            its services from being used for money laundering, terrorist
            financing, fraud, corruption, or any other unlawful activities.
          </p>
          <p className="mt-3 sm:mt-4">
            Our AML and KYC procedures are designed to comply with applicable
            laws, regulations, and internationally recognized best practices,
            including the recommendations of the Financial Action Task Force
            (FATF), where applicable.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="2. Policy Objective">
          <p>The objectives of this policy are to:</p>
          <ul className={`${listClass} mt-3`}>
            <li>
              Verify the identity of all customers before establishing a business
              relationship.
            </li>
            <li>
              Prevent the Company from being used for money laundering or
              terrorist financing.
            </li>
            <li>
              Monitor customer transactions for suspicious or unusual activity.
            </li>
            <li>
              Maintain accurate records of customer identification and
              transactions.
            </li>
            <li>
              Report suspicious activities to the relevant authorities whenever
              legally required.
            </li>
            <li>
              Protect the Company's reputation and ensure regulatory compliance.
            </li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="3. Customer Identification (KYC)">
          <p>
            Before providing any products or services, Capital Bullwave Pvt. Ltd.
            may require customers to complete identity verification.
          </p>
          <p className="mt-3 sm:mt-4">
            The Company may request documents including, but not limited to:
          </p>

          <LegalSub theme={theme} title="Individuals">
            <ul className={listClass}>
              <li>
                Government-issued Photo Identification (Passport, Driving
                Licence, Aadhaar Card, or other legally accepted ID)
              </li>
              <li>PAN Card (where applicable)</li>
              <li>Proof of Residential Address</li>
              <li>Date of Birth</li>
              <li>Contact Information</li>
              <li>Selfie or Live Verification (where required)</li>
            </ul>
          </LegalSub>

          <LegalSub theme={theme} title="Corporate Clients">
            <ul className={listClass}>
              <li>Certificate of Incorporation</li>
              <li>Memorandum & Articles of Association</li>
              <li>PAN and GST Registration (where applicable)</li>
              <li>Board Resolution authorizing account opening</li>
              <li>List of Directors and Beneficial Owners</li>
              <li>Registered Office Address</li>
              <li>Authorized Signatory Documents</li>
            </ul>
          </LegalSub>

          <p className="mt-3 sm:mt-4">
            The Company reserves the right to request additional documentation
            whenever necessary.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="4. Customer Due Diligence (CDD)">
          <p>
            Capital Bullwave Pvt. Ltd. conducts Customer Due Diligence (CDD)
            before onboarding customers and periodically thereafter.
          </p>
          <p className="mt-3 sm:mt-4">CDD includes:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Identity verification</li>
            <li>Verification of beneficial ownership</li>
            <li>Risk assessment</li>
            <li>Source of funds verification where applicable</li>
            <li>Ongoing customer monitoring</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Enhanced Due Diligence (EDD) may be conducted for higher-risk
            customers.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="5. Risk-Based Approach">
          <p>
            Customers are assessed based on various risk factors, including:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Geographic location</li>
            <li>Nature of business</li>
            <li>Transaction behavior</li>
            <li>Source of funds</li>
            <li>Politically Exposed Person (PEP) status</li>
            <li>Sanctions screening results</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Based on the assessment, customers may be classified as Low, Medium,
            or High Risk.
          </p>
        </LegalSection>

        <LegalSection
          theme={theme}
          title="6. Politically Exposed Persons (PEPs)"
        >
          <p>
            Customers identified as Politically Exposed Persons (PEPs), their
            family members, or close associates may be subject to Enhanced Due
            Diligence.
          </p>
          <p className="mt-3 sm:mt-4">
            Additional information and management approval may be required
            before establishing or continuing a business relationship.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="7. Sanctions Screening">
          <p>
            The Company may screen customers against applicable sanctions lists,
            watchlists, and other regulatory databases to ensure compliance with
            applicable laws.
          </p>
          <p className="mt-3 sm:mt-4">
            The Company reserves the right to reject or terminate any
            relationship that presents an unacceptable compliance risk.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="8. Transaction Monitoring">
          <p>
            Capital Bullwave Pvt. Ltd. continuously monitors customer
            transactions to identify unusual, suspicious, or potentially unlawful
            activity.
          </p>
          <p className="mt-3 sm:mt-4">Examples include:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Large or unexplained transactions</li>
            <li>Structuring or smurfing</li>
            <li>Transactions inconsistent with customer profiles</li>
            <li>Rapid movement of funds</li>
            <li>Multiple linked accounts</li>
            <li>
              Any activity that raises suspicion of money laundering or terrorist
              financing
            </li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Where required by law, suspicious transactions may be reported to the
            appropriate authorities.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="9. Source of Funds">
          <p>
            The Company may request evidence regarding the legitimate source of
            customer funds and wealth whenever necessary.
          </p>
          <p className="mt-3 sm:mt-4">
            Customers may be required to provide:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Bank statements</li>
            <li>Income proof</li>
            <li>Business records</li>
            <li>Tax documents</li>
            <li>Investment records</li>
            <li>Other supporting documentation</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Failure to provide satisfactory information may result in service
            restrictions or account closure.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="10. Payment Policy">
          <p>
            To minimize AML risks, Capital Bullwave Pvt. Ltd. generally does not
            accept:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Anonymous payments</li>
            <li>Cash deposits (unless specifically permitted by law)</li>
            <li>Third-party payments without prior approval</li>
            <li>Payments from unidentified sources</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Where applicable, withdrawals or refunds will ordinarily be processed
            back to the original source account used for funding, subject to
            legal and operational requirements.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="11. Record Retention">
          <p>
            The Company maintains customer identification records, transaction
            records, and compliance documentation for the period required under
            applicable laws and regulations.
          </p>
          <p className="mt-3 sm:mt-4">
            These records are securely stored and protected against unauthorized
            access.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="12. Reporting of Suspicious Activity">
          <p>
            Employees are required to promptly report any suspicious activity
            internally in accordance with Company procedures.
          </p>
          <p className="mt-3 sm:mt-4">
            Where legally required, the Company will file reports with the
            appropriate regulatory or law enforcement authorities.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="13. Customer Responsibilities">
          <p>Customers agree to:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Provide accurate and complete information.</li>
            <li>
              Notify the Company of changes to personal or business information.
            </li>
            <li>Cooperate with KYC verification requests.</li>
            <li>Provide additional documentation when requested.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Failure to comply may result in delayed services, suspension, or
            termination of the business relationship.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="14. Data Privacy">
          <p>
            Capital Bullwave Pvt. Ltd. treats all customer information as
            confidential and processes personal data in accordance with
            applicable privacy and data protection laws.
          </p>
          <p className="mt-3 sm:mt-4">
            Information may be shared only where required by law, regulation,
            court order, or competent governmental authority.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="15. Policy Updates">
          <p>
            Capital Bullwave Pvt. Ltd. reserves the right to amend or update this
            KYC & AML Policy at any time to reflect changes in legal, regulatory,
            or business requirements.
          </p>
          <p className="mt-3 sm:mt-4">
            The latest version of this policy will be made available through the
            Company's official communication channels.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="16. Contact Information">
          <p>
            For questions regarding this KYC & AML Policy or compliance matters,
            please contact:
          </p>
          <p
            className={`mt-3 sm:mt-4 font-semibold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Compliance Department
          </p>
          <p className={isDark ? "text-white" : "text-black"}>
            Capital Bullwave Pvt. Ltd.
          </p>
          <p className="mt-2">
            <strong className={isDark ? "text-white" : "text-black"}>
              Email:
            </strong>{" "}
            <LegalLink
              theme={theme}
              href="mailto:admin@capitalbullwave.com"
            >
              admin@capitalbullwave.com
            </LegalLink>
          </p>
        </LegalSection>

        <LegalNote theme={theme}>
          By using Capital Bullwave services, you acknowledge that you have read
          and agreed to this KYC & AML Policy.
        </LegalNote>
      </LegalDocument>
    </>
  );
};

export default KycAmlPolicy;
