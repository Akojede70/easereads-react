import React from "react";
import { Button } from "../shared";

type ProgressBarProps = {
  label: string;        
  progress: number;     // percentage for the bar (20, 40, 60...)
  currentLevel: number; // number to display at the end
  color?: string;       // Tailwind class for bar color
  className?: string;   // extra classes for outer container
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  progress,
  currentLevel,
  color = "bg-primaryBlue", // default color
  className = "",
}) => {
  return (
    <div className={`w-[99%] flex justify-between items-center ${className}`}>
      {/* Label */}
      <div className="w-[15%]">
        <p>{label}</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full pt-[8px] pl-[20px]">
        <div className="w-[65%] h-[11px] ml-[33%] bg-[#e8f1f9] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${color}`}
            style={{
              width: `${progress}%`,
              transition: "width 0.5s ease-in-out",
            }}
          />
        </div>
      </div>

      {/* Percentage */}
      <div className="w-[5%] text-right">
        <p>{currentLevel}%</p>
      </div>
    </div>
  );
};

type ProgressBarWithActionProps = {
  label: string;
  progress: number; // percentage (20, 40, etc.)
  currentLevel: number; // number to display
  color?: string; // Tailwind color for bar
  className?: string; // extra classes
  buttonText: string; // text inside the button
  onButtonClick: () => void; // callback when button clicked
};

export const ProgressBarWithAction: React.FC<ProgressBarWithActionProps> = ({
  label,
  progress,
  currentLevel,
  color = "bg-primaryBlue",
  className = "",
  buttonText,
  onButtonClick,
}) => {
  return (
    <div
      className={`w-[99%] flex justify-between items-center gap-4 ${className}`}
    >
      {/* Label */}
      <div className="w-[15%] text-[13px] md:text-[16px]">
        <p>{label}</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full pt-[8px] pl-[20px]">
        <div className="w-[85%] h-[11px] ml-[10%] bg-[#e8f1f9] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${color}`}
            style={{
              width: `${progress}%`,
              transition: "width 0.5s ease-in-out",
            }}
          />
        </div>
      </div>

      {/* Percentage */}
      <div className="w-[5%] text-right font-bold">
        <p>{currentLevel}%</p>
      </div>

      {/* Action Button */}
      <div className="w-[260px] text-[11px] md:text-[16px] ml-[15px] md:ml-0">
         <Button
        onClick={onButtonClick}
        className="rounded-[10px] md:rounded-[25px] w-[200px] md:w-[260px] mt-[15px]"
      >
        {buttonText}
      </Button>
      </div>
     
    </div>
  );
};
