import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";

const NavList = () => {
  return (
    <nav>
      <ul className="flex items-center gap-8 font-semibold">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <DropDown />
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
