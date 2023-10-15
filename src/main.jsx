import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import ProductProvider from "./context/ProductContext";
import { Toaster } from "react-hot-toast";
import CartProvider from "./context/CartContext";
import UserProvider from "./context/Usercontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <UserProvider>
          <RouterProvider router={router} />
          <Toaster />
        </UserProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
