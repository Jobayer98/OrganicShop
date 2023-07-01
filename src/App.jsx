import Header from "./components/Shared/Header/Header";
import About from "./pages/Home/AboutUs/About";
import Banner from "./pages/Home/Banner/Banner";
import Offer from "./pages/Home/Offer/Offer";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Offer />
      <About />
    </div>
  );
};

export default App;
