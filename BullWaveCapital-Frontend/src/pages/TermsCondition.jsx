import { Helmet } from "react-helmet-async";
import LegalDocument, {
  LegalSection,
  LegalSub,
  LegalNote,
  LegalLink,
} from "../components/LegalDocument";

const TermsCondition = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Capital BullWave</title>
        <meta
          name="description"
          content="Read the Terms & Conditions governing Capital BullWave's advisory, research and subscription services, including eligibility, fees, and jurisdiction."
        />
        <link rel="canonical" href="https://www.capitalbullwave.com/terms" />
        <meta property="og:title" content="Terms & Conditions | Capital BullWave" />
        <meta property="og:url" content="https://www.capitalbullwave.com/terms" />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalDocument
        theme={theme}
        badge="Terms & Conditions"
        title="Bullwave Capital — Terms & Conditions"
      >
        <LegalSection
          theme={theme}
          title="1. Onshore Legal Framework (Bullwave Capital — India)"
        >
          <LegalSub theme={theme} title="Age & Verification Requirement">
            <p>
              Services are available only to users who are at least 18 years old
              and legally hold a valid Permanent Account Number (PAN). Completion
              of Know Your Customer (KYC) verification is mandatory before any
              advisory, account opening or execution-related services are
              rendered.
            </p>
          </LegalSub>
          <LegalSub theme={theme} title="Investment Risk Acknowledgement">
            <p>
              All research, market commentary and advisory material provided by
              Bullwave Capital are for informational purposes only. Any
              investment decision and the resulting execution risks lie solely
              with the investor. Past performance is not indicative of future
              results.
            </p>
          </LegalSub>
          <LegalSub theme={theme} title="Subscription and Fees">
            <p>
              Advisory, research and subscription fees, where charged, are
              indicated at the time of purchase. Fees are non-transferable unless
              explicitly stated and are subject to the renewal and cancellation
              terms published at the time of subscription.
            </p>
          </LegalSub>
          <LegalSub theme={theme} title="Jurisdiction">
            <p>
              These terms are governed by the laws of India. Any disputes,
              arbitration proceedings or statutory complaints arising under or in
              connection with these terms shall be subject to the exclusive
              jurisdiction of courts located in Delhi or Gujarat, as applicable.
              Bullwave Capital operates office in Delhi and may choose the
              appropriate forum consistent with these jurisdictions.
            </p>
          </LegalSub>
        </LegalSection>

        <LegalSection
          theme={theme}
          title="2. Offshore Brokerage Framework (Bullwaves / Equitex Capital Ltd)"
        >
          <p>
            For clients using the Bullwaves MetaTrader 5 platform (operated under
            offshore entities including Equitex Capital Ltd), the following
            summary outlines key rules and restrictions that apply to those
            accounts. This section applies only to clients of the offshore
            trading platform and does not change the terms that govern onshore
            advisory services.
          </p>
          <LegalSub theme={theme} title="Regulatory Status">
            <p>
              Offshore platform operations are governed by the Financial Services
              Authority of Seychelles (FSA) under license references such as
              SD185. Clients should consult the broker's disclosure documents for
              full licensing details and disclaimers.
            </p>
          </LegalSub>
          <LegalSub theme={theme} title="Trading Rules & Account Tiers">
            <p>
              Typical retail account tiers require a minimum deposit (for example,
              a classic account may require a minimum of $100). Institutional or
              reduced-spread access often requires higher capital commitments
              (commonly starting around $3,000–$5,000), as described by the
              provider.
            </p>
          </LegalSub>
          <LegalSub theme={theme} title="Margin, Margin Calls & Stop-Outs">
            <p>
              Leveraged trading carries a high level of risk. The platform may
              issue margin calls and execute automatic liquidations (stop-outs)
              when account equity falls below predefined thresholds. Clients must
              familiarise themselves with margin rules and position sizing
              requirements before trading.
            </p>
          </LegalSub>
          <LegalSub theme={theme} title="Prohibited Practices">
            <p>
              The broker enforces strict rules against manipulative or abusive
              trading techniques, including latency arbitrage, price feed
              exploitation, coordinated mirrored trading, wash trading and other
              actions that undermine market integrity. Breaches may result in
              immediate account termination and forfeiture of profits.
            </p>
          </LegalSub>
          <LegalSub theme={theme} title="Prop Trading & Evaluation Programs">
            <p>
              Traders participating in evaluation challenges or proprietary
              (prop) programs are bound by specific program rules. Typical
              constraints include minimum active trading days (for example, 3–10
              days depending on the program structure) together with defined
              profit, loss and risk limits during the evaluation period.
            </p>
          </LegalSub>
        </LegalSection>

        <LegalSection theme={theme} title="3. General Provisions">
          <p>
            These terms are a summary overview and do not replace the full
            contractual documents and legal disclosures provided by Bullwave
            Capital or any offshore broker. Where a conflict exists between this
            summary and a signed agreement or the broker's official terms, the
            signed agreement and the broker's official terms shall prevail.
          </p>
        </LegalSection>

        <LegalSection theme={theme} title="Contact">
          <p>
            For questions regarding these terms or to request full contract
            documents, please contact us.
          </p>
          <div
            className={`mt-4 sm:mt-5 rounded-xl sm:rounded-2xl border p-4 sm:p-5 ${
              isDark
                ? "border-white/10 bg-slate-950/50"
                : "border-sky-100 bg-white/90"
            }`}
          >
            <p className="mb-2 sm:mb-3">
              <strong className={isDark ? "text-white" : "text-black"}>
                Email:
              </strong>{" "}
              <LegalLink theme={theme} href="mailto:admin@capitalbullwave.com">
                admin@capitalbullwave.com
              </LegalLink>
            </p>
            <p>
              <strong className={isDark ? "text-white" : "text-black"}>
                Office:
              </strong>{" "}
              Delhi
            </p>
          </div>
        </LegalSection>

        <LegalNote theme={theme}>
          This page provides a concise summary for informational purposes only.
          It should not be treated as a substitute for the complete legal
          agreements, statutory disclosures or professional legal advice. For
          definitive legal guidance, please consult a qualified attorney.
        </LegalNote>
      </LegalDocument>
    </>
  );
};

export default TermsCondition;
