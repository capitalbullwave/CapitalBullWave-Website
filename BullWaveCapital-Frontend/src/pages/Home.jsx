import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import HomeService from "../components/HomeService";
import HomeFeatureProduct from "../components/HomeFeatureProduct";
import HomeChoose from "../components/HomeChoose";
import HomeFAQS from "../components/HomeFAQS";
import HomeTrading from "../components/HomeTrading";

const Home = ({ theme }) => {
  return (
    <>
      <Helmet>
        <title>Capital BullWave | Stock Market Research & Investment Advisory in Delhi</title>
        <meta
          name="description"
          content="Capital BullWave provides professional stock market research, investment guidance, and financial advisory services from Netaji Subhash Place, Delhi. Trade smarter, invest with confidence."
        />
        <link rel="canonical" href="https://www.capitalbullwave.com/" />
        <meta property="og:title" content="Capital BullWave | Investment Advisory Delhi" />
        <meta
          property="og:description"
          content="Professional stock market research, investment guidance and financial advisory services from Delhi."
        />
        <meta property="og:url" content="https://www.capitalbullwave.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero theme={theme} />
      <HomeTrading theme={theme} />
      <HomeService theme={theme} />
      <HomeFeatureProduct theme={theme} />
      <HomeChoose theme={theme} />
      <HomeFAQS theme={theme} />
    </>
  );
};

export default Home