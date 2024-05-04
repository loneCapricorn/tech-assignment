import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import { navbarItems } from "../constants";
import { v4 as uniqueId } from "uuid";
import { logoutUser } from "../services/auth-services";

const Dropdown = ({ setShowDropdown = () => {} }) => {
  return (
    <nav className="flex flex-col items-end absolute z-10 -bottom-44 p-7 bg-slate-100 w-screen">
      {navbarItems.map(({ label, path }) => (
        <NavLink
          key={uniqueId()}
          to={path}
          onClick={() => {
            setShowDropdown(false);
          }}
          className="font-montserrat font-medium border-b-[1px] p-2 hover:translate-x-1 transition-transform"
        >
          {label}
        </NavLink>
      ))}
      <h2
        className="font-montserrat font-medium border-b-[1px] p-2 hover:translate-x-1 transition-transform cursor-pointer"
        onClick={logoutUser}
      >
        Sign out
      </h2>
    </nav>
  );
};

Dropdown.propTypes = {
  setShowDropdown: PropTypes.func.isRequired,
};

export default Dropdown;
