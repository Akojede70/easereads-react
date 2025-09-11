import React from "react";
import clsx from "clsx";

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
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  color = "bg-blue-600",
  textColor = "text-white",
  fullWidth = true,
  rounded = "md",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        // base styles
        "px-4 py-2 font-medium transition duration-200 flex items-center justify-center",
        "hover:opacity-90 disabled:opacity-50 cursor-pointer",
        
        // shape + sizing
        fullWidth ? "w-full sm:w-auto" : "w-auto",
        `rounded-${rounded}`,

        // colors
        color,
        textColor,

        // custom overrides allowed
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;