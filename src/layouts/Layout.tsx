import { Outlet } from "react-router-dom";
import Header from "@components/Header";

const Layout = () => {
  return (
    <div className="container">
      <Header />

      <main className="lg:flex lg:gap-[16px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
