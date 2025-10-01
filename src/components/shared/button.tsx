import React from "react";
import clsx from "clsx";
import { LeftArrow } from "../../assets/icon";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  /** Tailwind color classes instead of raw CSS hex. Example: "bg-blue-600" */
  color?: string; 
  textColor?: string; 
  fullWidth?: boolean; // for mobile responsiveness
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
  name?: string;
  variant?: "solid" | "outline"; 
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  color = "bg-[#106EBE]",
  textColor = "text-white",
  fullWidth = true,
  rounded = "md",
  variant = "solid",
}) => {
  const baseStyles = "px-4 py-2 font-medium transition duration-200 flex items-center justify-center hover:opacity-90 disabled:opacity-50 cursor-pointer";

  const variantStyles =
    variant === "outline"
      ? "border border-primaryBlue bg-transparent hover:bg-primaryBlue text-[#106EBE] hover:text-white"
      : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        // base styles
        baseStyles,
        fullWidth ? "w-full " : "w-auto",
        `rounded-${rounded}`,
        color,
        textColor,
        variantStyles,
        className
      )}
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
        rounded-[15px] w-[30%] md:w-[20%] lg:w-[130px] h-[55px] md:h-[44px] flex items-center justify-center gap-[10px] 
        hover:shadow-[0_6px_12px_#d0d0d0] transition-all duration-200 ${className}`}
    >
       <span> <LeftArrow/> </span>
      Back
    </button>
  );
};