import BannerComponent from "../../../../components/Banner/Banner";
import img from "../../../../assets/Shop/banner/s_banner.png";

const ProductBanner = () => {
  return (
    <BannerComponent
      img1={img}
      img2={""}
      className="single_product"
      title="Product"
    />
  );
};

export default ProductBanner;
