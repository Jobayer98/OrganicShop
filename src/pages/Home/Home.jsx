import HomeBanner from "./Banner/HomeBanner";
import Offer from "./Offer/Offer";
import About from "./AboutUs/About";
import Product from "./Product/Product";
import Testimonial from "./Testimonial/Testimonial";
import ProductOffer from "./Offer/ProductOffer";
import Our from "./Our/Our";
import Categroy from "./Category/Categroy";
import News from "./News/News";
import Subscribe from "./Subscribe/Subscribe";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <HomeBanner />
      <Categroy />
      <Offer />
      <About />
      <Product />
      <Testimonial />
      <ProductOffer />
      <Our />
      <News />
      <Subscribe />
    </div>
  );
};

export default HomePage;
