import { Helmet } from "react-helmet-async";
import LegalDocument, {
  LegalSection,
  LegalNote,
  LegalLink,
} from "../components/LegalDocument";

const listClass =
  "list-disc space-y-1.5 sm:space-y-2 pl-5 sm:pl-6 marker:text-sky-500";

const GrievancePolicy = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <>
      <Helmet>
        <title>Grievance Redressal Policy | Capital BullWave</title>
        <meta
          name="description"
          content="Read Capital Bullwave Pvt. Ltd.'s Grievance Redressal Policy for submitting complaints, resolution timelines, escalation, and contact details."
        />
        <link
          rel="canonical"
          href="https://www.capitalbullwave.com/grievance-policy"
        />
        <meta
          property="og:title"
          content="Grievance Redressal Policy | Capital BullWave"
        />
        <meta
          property="og:url"
          content="https://www.capitalbullwave.com/grievance-policy"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalDocument
        theme={theme}
        badge="Grievance Redressal Policy"
        title="Capital Bullwave Pvt. Ltd."
        effectiveDate="July 27, 2026"
      >
        <LegalSection theme={theme} title="1. Purpose">
          <p>
            Capital Bullwave Pvt. Ltd. ("the Company", "we", "our", or "us") is
            committed to providing high-quality services while maintaining
            transparency, fairness, and customer satisfaction. This Grievance
            Redressal Policy establishes a structured process for receiving,
            reviewing, and resolving customer complaints and grievances in a
            timely and effective manner.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="2. Objective">
          <p>The objectives of this policy are to:</p>
          <ul className={`${listClass} mt-3`}>
            <li>
              Provide customers with a fair and transparent grievance resolution
              mechanism.
            </li>
            <li>
              Ensure that complaints are acknowledged and addressed promptly.
            </li>
            <li>Resolve grievances efficiently and professionally.</li>
            <li>
              Continuously improve our services through customer feedback.
            </li>
            <li>
              Comply with applicable laws and regulatory requirements.
            </li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="3. Scope">
          <p>
            This policy applies to all customers, clients, business partners, and
            users of the services provided by Capital Bullwave Pvt. Ltd.
          </p>
          <p className="mt-3 sm:mt-4">
            Grievances may relate to, but are not limited to:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Customer service issues</li>
            <li>Billing or payment concerns</li>
            <li>Account-related issues</li>
            <li>Service quality</li>
            <li>Delays in service delivery</li>
            <li>Technical support issues</li>
            <li>Website-related concerns</li>
            <li>
              Any other matter relating to the Company's services
            </li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="4. How to Submit a Grievance">
          <p>
            Customers may submit their grievances through the following channel:
          </p>
          <p className="mt-3 sm:mt-4">
            <strong className={isDark ? "text-white" : "text-black"}>
              Email:
            </strong>{" "}
            <LegalLink theme={theme} href="mailto:support@capitalbullwave.com">
              support@capitalbullwave.com
            </LegalLink>
          </p>
          <p className="mt-3 sm:mt-4">
            To facilitate timely resolution, customers are requested to provide:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Full Name</li>
            <li>Registered Email Address</li>
            <li>Contact Number</li>
            <li>
              Customer or Transaction Reference Number (if applicable)
            </li>
            <li>Description of the grievance</li>
            <li>
              Relevant supporting documents or screenshots, if available
            </li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="5. Grievance Resolution Process">
          <p>Upon receiving a grievance:</p>
          <ol className="mt-3 list-decimal space-y-1.5 sm:space-y-2 pl-5 sm:pl-6 marker:text-sky-500">
            <li>
              The Company will acknowledge receipt of the complaint within 2
              business days.
            </li>
            <li>
              The grievance will be reviewed by the appropriate department.
            </li>
            <li>
              Additional information may be requested if required for
              investigation.
            </li>
            <li>
              The Company will make reasonable efforts to resolve the grievance
              within 7 to 15 business days, depending on its complexity.
            </li>
            <li>
              If additional time is required, the customer will be informed of
              the reason for the delay and the expected resolution timeline.
            </li>
          </ol>
        </LegalSection>

        <LegalSection theme={theme} title="6. Escalation">
          <p>
            If the customer is not satisfied with the initial response or the
            grievance remains unresolved, the matter may be escalated for further
            review by senior management.
          </p>
          <p className="mt-3 sm:mt-4">
            The Company will make reasonable efforts to ensure that all escalated
            grievances are handled fairly, impartially, and without undue delay.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="7. Customer Responsibilities">
          <p>To enable efficient resolution, customers should:</p>
          <ul className={`${listClass} mt-3`}>
            <li>Provide accurate and complete information.</li>
            <li>Respond promptly to requests for additional details.</li>
            <li>
              Maintain respectful communication throughout the resolution
              process.
            </li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="8. Confidentiality">
          <p>
            All grievances and related information will be handled
            confidentially. Customer information will only be used for
            investigating and resolving the grievance or where disclosure is
            required by applicable law.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="9. Record Keeping">
          <p>
            The Company maintains records of all grievances, investigations, and
            resolutions for internal review, quality improvement, and compliance
            with applicable legal or regulatory requirements.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="10. Policy Review">
          <p>
            This Grievance Redressal Policy may be amended from time to time to
            reflect changes in legal requirements, regulatory expectations, or
            business operations. The latest version will be made available
            through the Company's official communication channels.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="11. Contact Details">
          <p>For any grievance or complaint, please contact:</p>
          <p
            className={`mt-3 sm:mt-4 font-semibold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Grievance Officer
          </p>
          <p className={isDark ? "text-white" : "text-black"}>
            Capital Bullwave Pvt. Ltd.
          </p>
          <p className="mt-2">
            <strong className={isDark ? "text-white" : "text-black"}>
              Email:
            </strong>{" "}
            <LegalLink theme={theme} href="mailto:support@capitalbullwave.com">
              support@capitalbullwave.com
            </LegalLink>
          </p>
        </LegalSection>

        <LegalNote theme={theme}>
          By using Capital Bullwave services, you acknowledge that you have read
          and understood this Grievance Redressal Policy.
        </LegalNote>
      </LegalDocument>
    </>
  );
};

export default GrievancePolicy;
