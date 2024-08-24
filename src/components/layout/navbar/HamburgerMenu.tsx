import hamburgerMenu from "@/assets/icons/Hamburger Menu.svg";

type HamburgerMenuProps = {
  onClick: () => void;
};

const HamburgerMenu = ({ onClick }: HamburgerMenuProps) => (
  <img
    src={hamburgerMenu}
    alt="Menu"
    className="p-2 bg-green-200 rounded-md lg:hidden cursor-pointer"
    onClick={onClick}
  />
);

export default HamburgerMenu;
