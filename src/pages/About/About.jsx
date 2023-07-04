import AboutUs from "./AboutUs/AboutUs";
import AboutBanner from "./Banner/AboutBanner";
import ChooseUs from "./ChooseUs/ChooseUs";
import AboutOffer from "./Offer/AboutOffer";
import OurTeam from "./OurTeam/OurTeam";

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <AboutUs />
      <ChooseUs />
      <OurTeam />
      <AboutOffer />
    </div>
  );
};

export default AboutPage;
