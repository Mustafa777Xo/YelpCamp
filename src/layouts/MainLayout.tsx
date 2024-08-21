import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h1>Navbar here</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
