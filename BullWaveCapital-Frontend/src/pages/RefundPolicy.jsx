import { Helmet } from "react-helmet-async";
import LegalDocument, {
  LegalSection,
  LegalNote,
  LegalLink,
} from "../components/LegalDocument";

const listClass =
  "list-disc space-y-1.5 sm:space-y-2 pl-5 sm:pl-6 marker:text-sky-500";

const RefundPolicy = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <>
      <Helmet>
        <title>Refund & Cancellation Policy | Capital BullWave</title>
        <meta
          name="description"
          content="Read Capital Bullwave Pvt. Ltd.'s Refund & Cancellation Policy covering cancellation conditions, refund eligibility, processing timelines, and contact details."
        />
        <link
          rel="canonical"
          href="https://www.capitalbullwave.com/refund-policy"
        />
        <meta
          property="og:title"
          content="Refund & Cancellation Policy | Capital BullWave"
        />
        <meta
          property="og:url"
          content="https://www.capitalbullwave.com/refund-policy"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalDocument
        theme={theme}
        badge="Refund & Cancellation Policy"
        title="Capital Bullwave Pvt. Ltd."
      >
        <LegalSection theme={theme} title="1. Introduction">
          <p>
            Capital Bullwave Pvt. Ltd. ("Company", "we", "our", or "us") is
            committed to providing transparent and professional services to its
            customers. This Refund & Cancellation Policy explains the conditions
            under which cancellations and refunds may be requested for products
            and services offered by the Company.
          </p>
          <p className="mt-3 sm:mt-4">
            By purchasing or using our services, you acknowledge that you have
            read, understood, and agreed to this policy.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="2. Cancellation Policy">
          <p>
            Customers may request cancellation of a service by contacting the
            Company before the service has commenced or before any work has been
            initiated.
          </p>
          <p className="mt-3 sm:mt-4">
            Once a service has been delivered, activated, or substantially
            performed, cancellation requests may not be accepted unless otherwise
            required by applicable law or expressly agreed by the Company.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="3. Refund Eligibility">
          <p>
            Refund requests may be considered in the following circumstances:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>A duplicate payment was made for the same service.</li>
            <li>A payment was processed due to a technical or system error.</li>
            <li>
              The Company is unable to provide the purchased service due to
              reasons solely attributable to the Company.
            </li>
            <li>A refund is required under applicable law.</li>
          </ul>
          <p className="mt-3 sm:mt-4">
            All refund requests are subject to review and approval by the
            Company.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="4. Non-Refundable Services">
          <p>
            Unless otherwise stated in writing, refunds will generally not be
            provided in the following situations:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>
              The service has already been delivered or substantially completed.
            </li>
            <li>
              The customer chooses not to continue after the service has
              commenced.
            </li>
            <li>
              Incorrect information or documents are provided by the customer,
              preventing service delivery.
            </li>
            <li>
              Delays or interruptions caused by third parties, financial
              institutions, regulatory authorities, or events beyond the
              Company's reasonable control.
            </li>
            <li>
              Market conditions, investment performance, or business outcomes do
              not meet customer expectations.
            </li>
          </ul>
          <p className="mt-3 sm:mt-4">
            Where the Company offers professional, advisory, consulting, or
            digital services, fees for services already rendered are generally
            non-refundable.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="5. Refund Request Procedure">
          <p>
            Customers seeking a refund should submit a written request including:
          </p>
          <ul className={`${listClass} mt-3`}>
            <li>Full Name</li>
            <li>Registered Email Address</li>
            <li>Contact Number</li>
            <li>Transaction Reference Number</li>
            <li>Date of Payment</li>
            <li>Reason for the Refund Request</li>
            <li>Supporting documents, if applicable</li>
          </ul>
          <p className="mt-3 sm:mt-4">Refund requests should be sent to:</p>
          <p className="mt-2">
            <strong className={isDark ? "text-white" : "text-black"}>
              Email:
            </strong>{" "}
            <LegalLink theme={theme} href="mailto:support@capitalbullwave.com">
              support@capitalbullwave.com
            </LegalLink>
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="6. Refund Processing">
          <p>If a refund request is approved:</p>
          <ul className={`${listClass} mt-3`}>
            <li>
              The refund will be processed through the original payment method,
              wherever possible.
            </li>
            <li>
              Refunds are generally processed within 7 to 14 business days after
              approval.
            </li>
            <li>
              Actual credit timelines may vary depending on the customer's bank,
              card issuer, or payment service provider.
            </li>
          </ul>
        </LegalSection>

        <LegalSection theme={theme} title="7. Chargebacks and Payment Disputes">
          <p>
            Customers are encouraged to contact the Company before initiating a
            chargeback or payment dispute with their bank or payment provider.
          </p>
          <p className="mt-3 sm:mt-4">
            The Company reserves the right to provide relevant transaction
            records and supporting documentation in response to any payment
            dispute.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="8. Modification of Services">
          <p>
            Capital Bullwave Pvt. Ltd. reserves the right to modify, suspend, or
            discontinue any service at its discretion, subject to applicable
            contractual obligations and legal requirements.
          </p>
          <p className="mt-3 sm:mt-4">
            Where appropriate, customers will be informed of material changes
            that may affect existing service commitments.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="9. Force Majeure">
          <p>
            The Company shall not be responsible for delays or failure to perform
            its obligations due to events beyond its reasonable control,
            including natural disasters, government actions, technical failures,
            cyber incidents, internet outages, banking disruptions, or other
            force majeure events.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="10. Changes to this Policy">
          <p>
            Capital Bullwave Pvt. Ltd. reserves the right to update or amend this
            Refund & Cancellation Policy at any time. The revised version will
            become effective upon publication on the Company's official website.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="11. Contact Information">
          <p>
            If you have any questions regarding this Refund & Cancellation
            Policy, please contact us:
          </p>
          <p
            className={`mt-3 sm:mt-4 font-semibold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Capital Bullwave Pvt. Ltd.
          </p>
          <p className="mt-1">Customer Support</p>
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
          By purchasing or using Capital Bullwave services, you acknowledge that
          you have read and agreed to this Refund & Cancellation Policy.
        </LegalNote>
      </LegalDocument>
    </>
  );
};

export default RefundPolicy;
