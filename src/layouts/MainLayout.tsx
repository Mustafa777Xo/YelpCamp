import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  // Paths where the Navbar should be hidden
  const hideNavbarPaths = ["/", "/login", "/signup"];
  return (
    <div>
      {!hideNavbarPaths.includes(location.pathname) && <h1>Navbar here</h1>}
      <Outlet />
    </div>
  );
};

export default MainLayout;
