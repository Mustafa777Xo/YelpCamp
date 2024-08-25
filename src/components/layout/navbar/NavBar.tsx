import logo from "@/assets/images/Logo.svg";
import { useState } from "react";
import BaseButton from "@/components/common/BaseButton";
import HamburgerMenu from "./HamburgerMenu";
import Sidebar from "@/components/layout/navbar/SideBar";

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      <div className="p-5 border">
        <div className="flex justify-between max-w-screen-2xl mx-auto">
        <img src={logo} alt="Logo" />
        <HamburgerMenu onClick={toggleSidebar} />
        <div className="hidden lg:block">
          <BaseButton text="login" btnType="text" />
          <BaseButton text="create an account" btnType="filled" />
        </div>
      </div>
      </div>

      <Sidebar isOpen={showSideBar} onClose={toggleSidebar} />
    </>
  );
};

export default NavBar;
