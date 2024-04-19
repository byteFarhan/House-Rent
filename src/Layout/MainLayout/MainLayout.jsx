import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;