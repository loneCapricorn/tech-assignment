import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideMenu from "../components/SideMenu";

const RootLayout = () => {
  return (
    <div className="grid grid-cols-6">
      <aside className="max-md:col-span-6 md:col-span-2 md:h-screen lg:col-span-1">
        <SideMenu />
      </aside>

      <div className="max-md:col-span-6 md:col-span-4 lg:col-span-5">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default RootLayout;
