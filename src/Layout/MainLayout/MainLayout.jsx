import { useEffect } from "react";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Aos from "aos";

const MainLayout = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      // easing: "ease-in-sine",
      // delay: 100,
    });
  }, []);
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
