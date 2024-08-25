import React from "react";

interface BaseTextFieldProps {
  icon?: React.ReactNode;
  label?: string;
  placeholder: string;
  type: string;
}

const BaseTextField: React.FC<BaseTextFieldProps> = ({
  icon,
  label,
  placeholder,
  type,
}) => {
  return (
    <div className="w-full mb-4 xl:mb-0">
      {label && (
        <label className="block mb-2 text-sm font-medium">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 ">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full py-3 pr-4 ${
            icon ? "pl-10" : "pl-4"
          } border rounded-md focus:outline-none focus:ring-2 focus:ring-black `}
        />
      </div>
    </div>
  );
};

export default BaseTextField;
