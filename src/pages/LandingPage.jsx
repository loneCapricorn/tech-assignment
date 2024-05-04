import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="relative h-screen bg-[#ecf0f3]">
      <div className="absolute-position-center form-element">
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-center font-semibold">
            Welcome to our Dashboard
          </h2>
          <p className="text-center text-base">
            Manage your orders and customers with ease using our dashboard.
          </p>
        </div>

        <div className="p-5 text-center text-base">
          <NavLink to={"/sign-in"} className="no-underline text-[#aaa]">
            Sign In
          </NavLink>
          <span className="font-semibold"> or </span>
          <NavLink to={"/sign-up"} className="no-underline text-[#aaa]">
            Sign Up
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
