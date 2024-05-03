import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import AppContext from "../providers/AppContext";

const RootLayout = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="flex flex-col max-container sm:text-xl md:text-2xl lg:text-3xl">
      {user && <Header />}
      <Outlet />
      {user && <Footer />}
    </div>
  );
};

export default RootLayout;
