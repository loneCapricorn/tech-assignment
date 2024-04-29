import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [header, setHeader] = useState("Dashboard");

  return (
    <header className="relative">
      <Navbar changeHeader={setHeader} />
      <div className="flex items-center justify-around py-5">
        <h1 className="font-semibold">{header}</h1>
        {!showDropdown ? (
          <RxHamburgerMenu
            className="sm:hidden text-3xl cursor-pointer"
            onClick={() => setShowDropdown(true)}
          />
        ) : (
          <>
            <IoMdClose
              className="sm:hidden text-3xl cursor-pointer"
              onClick={() => setShowDropdown(false)}
            />
            <Dropdown
              changeHeader={setHeader}
              setShowDropdown={setShowDropdown}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
