import { Helmet } from "react-helmet-async";
import LegalDocument, {
  LegalSection,
  LegalSub,
  LegalNote,
  LegalLink,
} from "../components/LegalDocument";

const Disclaimer = ({ theme }) => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Capital BullWave - Risk Disclosures</title>
        <meta
          name="description"
          content="Important risk disclosures and disclaimers regarding Capital BullWave's advisory services and market research. Investments carry risk; no returns are guaranteed."
        />
        <link rel="canonical" href="https://www.capitalbullwave.com/disclaimer" />
        <meta property="og:title" content="Disclaimer | Capital BullWave" />
        <meta property="og:url" content="https://www.capitalbullwave.com/disclaimer" />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalDocument
        theme={theme}
        badge="Disclaimer"
        title="Important Notices & Risk Disclosures"
      >
        <LegalSection
          theme={theme}
          title="1. Capital Bullwave — Indian Advisory Services"
        >
          <LegalSub theme={theme} title="No Guaranteed Returns">
            <p>
              Bullwave Capital does not promise or guarantee returns on
              investments. All recommendations and research are educational and
              indicative in nature. Investment outcomes depend on market
              conditions and investor decisions.
            </p>
          </LegalSub>
          <LegalSub theme={theme} title="Independent Market Risk">
            <p>
              Research, analysis and stock recommendations provided on the
              Bullwave platform are for informational purposes only. Final
              execution risk and responsibility for investments rest solely with
              the investor.
            </p>
          </LegalSub>
          <LegalSub theme={theme} title="Payment Verification">
            <p>
              Clients must make payments only through official corporate banking
              channels and retain transaction receipts. Do not rely on
              unverified or informal payment methods.
            </p>
          </LegalSub>
        </LegalSection>

        <LegalSection
          theme={theme}
          title="2. Bullwaves — Global Forex & CFD Brokerage"
        >
          <LegalSub theme={theme} title="Capital Loss Warning">
            <p>
              Trading CFDs and leveraged Forex products carries a high level of
              risk and may result in the loss of your invested capital. Ensure
              you understand leverage, margin requirements and position sizing
              before trading.
            </p>
          </LegalSub>
          <LegalSub theme={theme} title="Retail Account Statistics">
            <p>
              Official provider disclosures indicate that a majority of retail
              investor accounts lose money when trading CFDs with this broker.
              Past performance is not indicative of future returns.
            </p>
          </LegalSub>
          <LegalSub theme={theme} title="Jurisdictional Boundary">
            <p>
              The offshore trading services described on the Bullwaves platform
              operate under the Financial Services Authority (FSA) of Seychelles.
              Clients are subject to that broker's regulatory framework and may
              not receive protections available under other jurisdictions.
            </p>
          </LegalSub>
        </LegalSection>

        <LegalSection theme={theme} title="3. General">
          <p>
            This page provides concise statutory and risk disclosures. It should
            not be considered a substitute for full contractual terms, official
            broker disclosures, or personalized legal or financial advice.
          </p>
          <p className="mt-3 sm:mt-4">
            For detailed terms and regulatory documents, please contact us at{" "}
            <LegalLink theme={theme} href="mailto:admin@capitalbullwave.com">
              admin@capitalbullwave.com
            </LegalLink>
            .
          </p>
        </LegalSection>

        <LegalNote theme={theme}>
          Investments and leveraged financial products involve significant
          risks. Please read all legal documents, disclosures and risk warnings
          carefully before investing or trading. If required, seek independent
          legal, financial or tax advice before making investment decisions.
        </LegalNote>
      </LegalDocument>
    </>
  );
};

export default Disclaimer;
