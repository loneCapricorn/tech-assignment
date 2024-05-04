// hooks
import { useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

// context
import AppContext from "../providers/AppContext";

// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

// components
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { userData } = useContext(AppContext);

  const { pathname } = useLocation();

  return (
    <header className="relative">
      <Navbar />
      <div className="flex items-center justify-around max-sm:py-4">
        <h2 className="font-montserrat text-sky-400 border-b-2 sm:hidden text-xl">
          {pathname.charAt(1).toUpperCase() + pathname.slice(2)}
        </h2>
        {!showDropdown ? (
          <RxHamburgerMenu
            className="sm:hidden text-3xl cursor-pointer"
            onClick={() => setShowDropdown(true)}
          />
        ) : (
          <IoMdClose
            className="text-3xl cursor-pointer"
            onClick={() => setShowDropdown(false)}
          />
        )}
        {showDropdown && <Dropdown setShowDropdown={setShowDropdown} />}
      </div>
      <h1 className="text-center text-3xl font-medium text-[#555]">
        Welcome,{" "}
        <span className="text-[#92400e] font-semibold italic">
          {userData?.handle}
        </span>{" "}
        !
      </h1>
    </header>
  );
};

export default Header;
