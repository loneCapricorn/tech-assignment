import { NavLink, useLocation } from "react-router-dom";
import { navbarItems } from "../constants";
import { v4 as uniqueId } from "uuid";
import { logoutUser } from "../services/auth-services";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex items-center justify-around py-4 max-sm:hidden">
      {navbarItems.map(({ label, path }) => (
        <NavLink
          key={uniqueId()}
          to={path}
          className={`font-montserrat hover:text-sky-400 ${
            pathname === path ? "text-sky-400 border-b-2" : ""
          }`}
        >
          {label}
        </NavLink>
      ))}
      <h2
        className="text-center py-2 px-3 rounded-md w-fit text-lg hover:bg-slate-200 active:bg-slate-400 cursor-pointer"
        onClick={logoutUser}
      >
        Sign out
      </h2>
    </nav>
  );
};

export default Navbar;
