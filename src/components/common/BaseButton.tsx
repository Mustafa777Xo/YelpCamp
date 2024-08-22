import React from "react";
import { IconType } from "react-icons";
interface BaseButtonProps {
  text: string;
  icon?: IconType;
  btnType: "outlined" | "filled" | "text";
}
const BaseButton: React.FC<BaseButtonProps> = ({
  text,
  icon: Icon,
  btnType = "filled",
}) => {
  const baseClasses =
    "px-4 py-2 rounded focus:outline-none inline-flex items-center";
  const typeClasses = {
    outlined:
      "border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white",
    filled: "bg-black text-white rounded",
    text: "bg-transparent text-blue-500 hover:underline",
  };
  return (
    <>
      <button className={`${baseClasses} ${typeClasses[btnType]}`}>
        {Icon && <Icon className="mr-2" />}
        {text}
      </button>
    </>
  );
};
export default BaseButton;
