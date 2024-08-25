import NavBar from "@/components/layout/navbar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  // Paths where the Navbar should be hidden
  const hideNavbarPaths = ["/", "/signin", "/signup"];
  return (
    <div>
      {!hideNavbarPaths.includes(location.pathname) && <NavBar />}
      <Outlet />
      {!hideNavbarPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default MainLayout;
