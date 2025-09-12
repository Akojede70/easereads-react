// components/Button.tsx
import React from "react";
import { LeftArrow } from "../../assets/icon";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant?: "solid" | "outline"; // <-- added
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  variant = "solid", // <-- default style
}) => {
  const baseStyles =
    "w-full p-2 rounded-[10px] mb-2 h-[48px] disabled:opacity-50 cursor-pointer transition";

  const variantStyles =
    variant === "outline"
      ? "border border-primaryBlue text-primaryBlue bg-transparent hover:bg-primaryBlue hover:text-white"
      : "bg-primaryBlue text-white hover:opacity-90";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};

type BackButtonProps = {
  onClick?: () => void;
  className?: string;
};

export const BackButton: React.FC<BackButtonProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-[18px] cursor-pointer bg-primaryWhite border border-primaryBlack shadow-[0_4px_10px_#e0e0e0] 
        rounded-[15px] w-[30%] md:w-[20%] lg:w-[9%] h-[55px] md:h-[44px] flex items-center justify-center gap-[10px] 
        hover:shadow-[0_6px_12px_#d0d0d0] transition-all duration-200 ${className}`}
    >
       <span> <LeftArrow/> </span>
      Back
    </button>
  );
};

