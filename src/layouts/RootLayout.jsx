import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideMenu from "../components/SideMenu";

const RootLayout = () => {
  return (
    <div className="grid grid-cols-6 max-container">
      <aside className="max-md:col-span-6 md:col-span-2 md:h-screen lg:col-span-1 bg-emerald-900">
        <SideMenu />
      </aside>

      <div className="flex flex-col max-md:col-span-6 md:col-span-4 lg:col-span-5">
        <header>
          <Header />
        </header>
        <main className="flex-1">
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
