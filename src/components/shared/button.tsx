// components/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;  
  onClick?: () => void;  
  type?: "button" | "submit" | "reset";  
  className?: string;  
  disabled?: boolean;  
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-primaryBlue text-white p-2 rounded-[10px] mb-2 h-[48px] 
                  disabled:opacity-50 cursor-pointer
                  hover:opacity-90 transition 
                  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
