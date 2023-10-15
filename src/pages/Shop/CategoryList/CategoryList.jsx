import React from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div className="mt-10 px-3">
      <h3 className="text-2xl mb-3">Categories</h3>
      <ul className="text-sm">
        <li className="border-b-2 py-1 pl-1">
          <Link to="/category/honey">Honey</Link>
        </li>
        <li className="border-b-2 py-1 pl-1">
          <Link to="/category/ghee">Ghee</Link>
        </li>
        <li className="border-b-2 py-1 pl-1">
          <Link to="/category/oil">Oil</Link>
        </li>
        <li className="border-b-2 py-1 pl-1">
          <Link to="/category/fruit">Fruits</Link>
        </li>
        <li className="border-b-2 py-1 pl-1">
          <Link to="/category/nuts">Nuts & Seeds</Link>
        </li>
        <li className="border-b-2 py-1 pl-1">
          <Link to="/category/tea">Tea & Snacks</Link>
        </li>
        <li className="border-b-2 py-1 pl-1">
          <Link to="/category/spices">Spices</Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;
