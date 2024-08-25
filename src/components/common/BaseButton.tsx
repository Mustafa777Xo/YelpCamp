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
    "px-4 py-2 rounded focus:outline-none inline-flex justify-center items-center";
  const typeClasses = {
    outlined:
      "bg-white text-black font-semibold border border-green-500 rounded shadow w-full hover:bg-green-100",
    filled: "bg-green-950 text-white rounded hover:bg-gray-900",
    text: "bg-transparent text-green-500 hover:underline",
  };

  return (
    <button className={`${baseClasses} ${typeClasses[btnType]}`}>
      {Icon && <Icon className="mr-2" />}
      <span className="text-center">{text}</span>
    </button>
  );
};

export default BaseButton;
