import BannerComponent from "../../../components/Banner/Banner";
import img1 from "../../../assets/Shop/banner/banner1.png";
import img2 from "../../../assets/Shop/banner/banner2.png";

const ShopBanner = ({ name }) => {
  return (
    <BannerComponent
      img1={img1}
      img2={img2}
      title={name.toUpperCase()}
      className="shop_banner"
    />
  );
};

export default ShopBanner;
