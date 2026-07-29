import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import HomeService from "../components/HomeService";
import HomeFeatureProduct from "../components/HomeFeatureProduct";
import HomeChoose from "../components/HomeChoose";
import HomeFAQS from "../components/HomeFAQS";
import HomeTrading from "../components/HomeTrading";
import RevealOnScroll from "../components/RevealOnScroll";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Capital BullWave",
  url: "https://www.capitalbullwave.com",
  email: "admin@capitalbullwave.com",
  telephone: "+91-8796565234",
  description:
    "Professional stock market research, investment guidance, and financial advisory services from New Delhi and Dubai.",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress:
        "Aggarwal Millennium Tower 2, Office No. 1275 (12th Floor), Netaji Subhash Place, Pitampura",
      addressLocality: "New Delhi",
      postalCode: "110034",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "World Trade Centre (Rashid Tower), Sheikh Zayed Road",
      addressLocality: "Dubai",
      postOfficeBoxNumber: "9700",
      addressCountry: "AE",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
};

const Home = ({ theme }) => {
  return (
    <div className="page-enter space-y-10 sm:space-y-12 lg:space-y-14">
      <Helmet>
        <title>
          Capital BullWave | Stock Market Research & Investment Advisory in Delhi
        </title>
        <meta
          name="description"
          content="Capital BullWave provides professional stock market research, investment guidance, and financial advisory services from New Delhi and Dubai. Trade smarter, invest with confidence."
        />
        <link rel="canonical" href="https://www.capitalbullwave.com/" />
        <meta
          property="og:title"
          content="Capital BullWave | Investment Advisory Delhi & Dubai"
        />
        <meta
          property="og:description"
          content="Professional stock market research, investment guidance and financial advisory services from New Delhi and Dubai."
        />
        <meta property="og:url" content="https://www.capitalbullwave.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Capital BullWave" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Capital BullWave | Investment Advisory Delhi"
        />
        <meta
          name="twitter:description"
          content="Professional stock market research, investment guidance and financial advisory services from Delhi."
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <Hero theme={theme} />

      <RevealOnScroll>
        <HomeTrading theme={theme} />
      </RevealOnScroll>

      <RevealOnScroll delay={40}>
        <HomeService theme={theme} />
      </RevealOnScroll>

      <RevealOnScroll delay={40}>
        <HomeFeatureProduct theme={theme} />
      </RevealOnScroll>

      <HomeChoose theme={theme} />

      <RevealOnScroll delay={40}>
        <HomeFAQS theme={theme} />
      </RevealOnScroll>
    </div>
  );
};

export default Home;
