import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../pages/Home/Home";
import AboutPage from "../pages/About/About";
import ShopPage from "../pages/Shop/Shop";
import Product from "../pages/Shop/Product/Product";
import Team from "../pages/Team/Team";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/Signup";
import Profile from "../pages/User/Profile";
import PrivateRoute from "./PrivateRoute";
import ShoppingCart from "../pages/Cart/ShoppingCart";
import UpdateProfile from "../pages/User/UpdateProfile";
import Checkout from "../pages/Order/Checkout";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/category/:name",
        element: <ShopPage />,
      },
      {
        path: "/shop/:category/:id",
        element: <Product />,
      },
      {
        path: "/our-team",
        element: <Team />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/user/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/user/profile/update",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);
