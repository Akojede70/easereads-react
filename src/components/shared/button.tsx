import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  color?: string; // background color
  textColor?: string;
  width?: string | number;
  height?: string | number;
  border?: string;
  borderRadius?: string | number;
  style?: React.CSSProperties;
  name?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  color = "#2563eb",
  textColor = "#fff",
  width = "100%",
  height = "48px",
  border = "none",
  borderRadius = "10px",
  style,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`mb-2 transition flex text-center hover:opacity-90 disabled:opacity-50 cursor-pointer ${className}`}
      style={{
        backgroundColor: color,
        color: textColor,
        width,
        height,
        border,
        borderRadius,
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
