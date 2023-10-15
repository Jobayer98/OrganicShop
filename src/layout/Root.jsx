import { Outlet } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet>
          <HomePage />
        </Outlet>
      </main>
      <Footer />
    </>
  );
};

export default Root;
