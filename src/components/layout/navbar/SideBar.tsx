import BaseButton from "@/components/common/BaseButton";
import { Link } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => (
  <div
    className={`fixed top-0 left-0 w-64 h-full bg-white text-gray-800 shadow-lg z-50 p-5 transform transition-transform duration-300 ease-in-out lg:hidden ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-xl">Menu</h2>
      <button onClick={onClose} className="text-xl">
        ✖
      </button>
    </div>
    <Link to="/login">
      <BaseButton text="login" btnType="text" />
    </Link>

    <BaseButton text="create an account" btnType="filled" />
  </div>
);

export default Sidebar;
