import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface Props {
  type: string;
  placeholder: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
  type,
  placeholder,
  icon,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 flex items-center text-gray-500 left-3">
        {icon}
      </div>

      <input
        type={isPassword && !showPassword ? "password" : "text"}
        className="w-full p-4 pl-10 pr-12 text-sm border border-gray-200 rounded-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {isPassword && (
        <button
          type="button"
          className="absolute inset-y-0 flex items-center text-gray-500 right-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
        </button>
      )}
    </div>
  );
};
