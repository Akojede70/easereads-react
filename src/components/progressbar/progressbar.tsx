import React from "react";

type ProgressBarProps = {
  label: string;        
  progress: number;     // percentage for the bar (20, 40, 60...)
  currentLevel: number; // number to display at the end
  color?: string;       // Tailwind class for bar color
  className?: string;   // extra classes for outer container
};

const ProgressBar: React.FC<ProgressBarProps> = ({
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
      <div className="w-full  pt-[8px] pl-[20px]">
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

export default ProgressBar;
