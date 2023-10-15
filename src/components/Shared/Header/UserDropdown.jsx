import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/Usercontext";

const UserDropdown = () => {
  const { logout, user } = useContext(UserContext);
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="origin-top-right absolute top-12 -right-4 mt-2 w-48 shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-base font-normal">
      <div className="py-1">
        <Link to={"/user/profile"} className="p-4 border-b block">
          My Account
        </Link>
        <Link to={"/user/orders"} className="p-4 border-b block">
          My Oders
        </Link>
        <Link to={"/user/wishlist"} className="p-4 border-b block">
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
          </span>
        )}
        <button onClick={handleLogout} className="p-4 block">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
