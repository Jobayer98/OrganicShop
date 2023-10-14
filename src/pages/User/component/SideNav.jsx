import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="rounded shadow-md bg-white">
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
    </div>
  );
};

export default SideNav;
