import React from "react";

type ProgressBarProps = {
  label?: string;        // made optional
  progress: number;
  currentLevel: number;
  color?: string;
  className?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  progress,
  currentLevel,
  color = "bg-primaryBlue",
  className = "",
}) => {
  return (
    <div className={`w-full flex justify-between gap-2 items-center ${className}`}>
      {/* Label (conditionally rendered) */}
      {label && (
        <div className="w-[15%]">
          <p>{label}</p>
        </div>
      )}

      {/* Progress Bar */}
      <div className={label ? "w-full pt-[8px]" : "w-full "}>
        <div className="w-full h-[11px] bg-[#e8f1f9] rounded-full overflow-hidden">
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
