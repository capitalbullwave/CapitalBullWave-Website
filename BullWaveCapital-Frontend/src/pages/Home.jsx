import Hero from "../components/Hero";
import HomeService from "../components/HomeService";
import HomeFeatureProduct from "../components/HomeFeatureProduct";
import HomeChoose from "../components/HomeChoose";
import HomeFAQS from "../components/HomeFAQS";
import HomeTrading from "../components/HomeTrading";

const Home = ({ theme }) => {
  return (
    <>
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