import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col max-container sm:text-xl md:text-2xl lg:text-3xl">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
