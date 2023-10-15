import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Usercontext";

const SideNav = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="rounded shadow-md bg-white min-h-min w-52 mt-12">
      <Link to={"/user/profile"} className="p-4 border-b border-dashed block">
        My Account
      </Link>
      <Link to={"/user/orders"} className="p-4 border-b border-dashed block">
        My Oders
      </Link>
      <Link to={"/user/wishlist"} className="p-4 border-b border-dashed block">
        My Wishlist
      </Link>
      <Link to={"/user/points"} className="p-4 border-b block">
        My Points
      </Link>
      {user?.role === "admin" && (
        <span>
          <Link to={"/admin/products"} className="p-4 border-b block">
            My Products
          </Link>
          <Link to={"/admin/add-product"} className="p-4 border-b block">
            Add Product
          </Link>
          <Link to={"/admin/analytic"} className="p-4 border-b block">
            Analylics
          </Link>
        </span>
      )}
    </div>
  );
};

export default SideNav;
