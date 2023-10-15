import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const DropDown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const [isNestedDropdownOpen, setNestedDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // const toggleNestedDropdown = () => {
  //   setNestedDropdownOpen(!isNestedDropdownOpen);
  // };

  return (
    <div className="relative inline-block text-left">
      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none "
        onClick={toggleDropdown}
      >
        Category
        <BsChevronDown className="ml-1 text-lg" />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-base font-normal">
          <div className="py-1">
            <li className="border-b-2 py-1 pl-3">
              <Link to="/category/honey">Honey</Link>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <Link to="/category/ghee">Ghee</Link>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <Link to="/category/oil">Oil</Link>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <Link to="/category/fruit">Fruits</Link>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <Link to="/category/nuts">Nuts & Seeds</Link>
            </li>
            <li className="border-b-2 py-1 pl-3">
              <Link to="/category/tea">Tea & Snacks</Link>
            </li>
            <li className="py-1 pl-3">
              <Link to="/category/spices">Spices</Link>
            </li>

            {/* Nested Dropdown */}
            {/* <div className="relative group">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={toggleNestedDropdown}
              >
                Nested Menu
              </a>
              {isNestedDropdownOpen && (
                <div className="opacity-100 absolute z-10 w-48 left-48 -top-4 mt-2 py-2 bg-white border border-gray-200 shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Nested Item 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Nested Item 2
                  </a>
                </div>
              )}
            </div> */}
            {/* End Nested Dropdown */}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
