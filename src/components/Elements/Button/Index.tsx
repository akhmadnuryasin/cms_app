import React from "react";

interface Props {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<Props> = ({
  label,
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  icon,
  style,
  type = "button",
}) => {
  const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeClasses = {
    small: "px-3 py-2 text-sm",
    medium: "px-5 py-3 text-base",
    large: "px-6 py-4 text-lg",
  };

  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-2 rounded-lg font-medium transition ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {label}
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
