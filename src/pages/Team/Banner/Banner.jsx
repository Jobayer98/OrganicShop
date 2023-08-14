import BannerComponent from "../../../components/Banner/Banner";
import img1 from "../../../assets/Team/banner.png";

const TeamBanner = () => {
  return (
    <BannerComponent
      img1={img1}
      img2={""}
      title={"Our Team"}
      className="single_product"
    />
  );
};

export default TeamBanner;
