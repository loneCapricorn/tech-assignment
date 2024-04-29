import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import { navbarItems } from "../constants";
import { v4 as uniqueId } from "uuid";

const Navbar = ({ changeHeader = () => {} }) => {
  return (
    <nav className="flex items-center justify-around py-10 max-sm:hidden">
      {navbarItems.map(({ label, path }) => (
        <NavLink
          key={uniqueId()}
          to={path}
          onClick={() => {
            changeHeader(label);
          }}
          className="font-montserrat"
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

Navbar.propTypes = {
  changeHeader: PropTypes.func.isRequired,
};

export default Navbar;
