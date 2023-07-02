import Header from "./components/Shared/Header/Header";
import About from "./pages/Home/AboutUs/About";
import Banner from "./pages/Home/Banner/Banner";
import Offer from "./pages/Home/Offer/Offer";
import Product from "./pages/Product/Product";
import Testimonial from "./pages/Testimonial/Testimonial";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Offer />
      <About />
      <Product />
      <Testimonial />
    </div>
  );
};

export default App;
