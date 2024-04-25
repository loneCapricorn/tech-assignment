import { NavLink } from "react-router-dom";
import { sideMenuItems } from "../constants";
import { v4 as uniqueId } from "uuid";

const SideMenu = () => {
  return (
    <ul className="flex md:flex-col md:h-52 items-center justify-around py-10">
      {sideMenuItems.map(({ label, path }) => (
        <li key={uniqueId()}>
          <NavLink to={path} className="font-montserrat text-xl md:text-2xl">
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
