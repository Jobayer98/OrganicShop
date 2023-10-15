import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import logo from "../../../assets/Logo.png";
import NavList from "./List/NavList";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { UserContext } from "../../../context/Usercontext";
import UserDropdown from "./UserDropdown";

const Header = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="sm:flex items-center justify-around py-6 gap-24 px-12 hidden sticky top-0 bg-[#EFF6F1] drop-shadow z-50">
      <Link to="/" className="flex items-center justify-center gap-1">
        <img className="h-8" src={logo} alt="organick" />
        <h1 className="text-2xl font-bold">Organick</h1>
      </Link>
      <NavList />
      <div className="flex items-center gap-4 justify-end w-[35%]">
        <div className="relative flex-1 hidden">
          <BiSearch className="absolute bg-[#7EB693] text-white text-4xl top-1 right-1 p-[8px] rounded-full" />
          <input
            className="bg-[#ffffff93] text-gray-600 py-2 pl-4 rounded-full border-2 outline-none w-full"
            type="search"
            name=""
            id=""
          />
        </div>
        <div>
          <Link
            to="/cart"
            className="flex justify-center items-center gap-2 border-2  rounded-full px-1 py-1 font-semibold"
          >
            <AiOutlineShoppingCart className="text-3xl text-white font-extrabold bg-[#274C5B] rounded-full p-1" />
            <span>Cart {cart.length}</span>
          </Link>
        </div>
        {user ? (
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className=" border-4 shadow-lg  rounded-full"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  user?.image?.secure_url ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt=""
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && <UserDropdown />}
          </div>
        ) : (
          <div>
            <Link
              className="text-lg drop-shadow-xl py-2 px-3 rounded-full hover:bg-[#274C5B] hover:text-white transition-all duration-500 ease-in-out"
              to="/login"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
