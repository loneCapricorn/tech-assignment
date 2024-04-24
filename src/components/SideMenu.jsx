import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <ul>
      <li>
        <NavLink to={"/"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/order-history"}>Order history</NavLink>
      </li>
    </ul>
  );
};

export default SideMenu;
