import Header from "./components/Shared/Header/Header";
import About from "./pages/Home/AboutUs/About";
import Banner from "./pages/Home/Banner/Banner";
import Categroy from "./pages/Home/Category/Categroy";
import News from "./pages/Home/News/News";
import Offer from "./pages/Home/Offer/Offer";
import ProductOffer from "./pages/Home/Offer/ProductOffer";
import Our from "./pages/Home/Our/Our";
import Product from "./pages/Home/Product/Product";
import Subscribe from "./pages/Home/Subscribe/Subscribe";
import Testimonial from "./pages/Home/Testimonial/Testimonial";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Offer />
      <About />
      <Product />
      <Testimonial />
      <ProductOffer />
      <Our />
      <Categroy />
      <News />
      <Subscribe />
    </div>
  );
};

export default App;
