import React from "react";
import clsx from "clsx";
import { Button } from "../shared";

type ProgressBarProps = {
  label?: string;
  progress: number;
  currentLevel: number;
  /** Tailwind background class for the progress fill (e.g., "bg-blue-600") */
  color?: string;
  className?: string;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  progress,
  currentLevel,
  color = "bg-primaryBlue",
  className = "",
}) => {
  // Clamp progress to 0-100 to prevent visual overflow
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div
      className={clsx(
        "w-full flex items-center gap-2",
        // Stack label ABOVE the bar on mobile (if label exists)
        label && "flex-col sm:flex-row items-start sm:items-center gap-3",
        className
      )}
    >
      {/* Label: Stacked on mobile, inline fixed-width on tablet+ */}
      {label && (
        <p className="text-xs sm:text-sm font-medium flex-shrink-0 sm:w-[100px]">
          {label}
        </p>
      )}

      {/* Progress Bar Wrapper: Takes REMAINING space */}
      <div className="flex-grow w-full">
        <div className="w-full h-[11px] sm:h-[13px] bg-[#e8f1f9] rounded-full overflow-hidden">
          <div
            className={clsx(
              "h-full rounded-full transition-all duration-500 ease-in-out",
              color
            )}
            style={{ width: `${clampedProgress}%` }}
          />
        </div>
      </div>

      {/* Percentage: Fixed small width + responsive text */}
      <p className="text-xs sm:text-sm font-medium flex-shrink-0 w-[40px] text-right">
        {currentLevel}%
      </p>
    </div>
  );
};

type PeterProgressBarProps = {
  label?: string;
  progress: number;
  currentLevel: number;
  /** Tailwind background class for the progress fill (e.g., "bg-blue-600") */
  color?: string;
  className?: string;
};

export const PeterProgressBar: React.FC<PeterProgressBarProps> = ({
  label,
  progress,
  currentLevel,
  color = "bg-primaryBlue",
  className = "",
}) => {
  // Clamp progress to 0-100 to prevent visual overflow
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div
      className={clsx(
        "w-full flex items-center gap-2",
        // Stack label ABOVE the bar on mobile (if label exists)
        label && "flex-col flex-row items-start sm:items-center gap-3",
        className
      )}
    >
      {/* Label: Stacked on mobile, inline fixed-width on tablet+ */}
      {label && (
        <p className="text-xs sm:text-sm font-medium flex-shrink-0 sm:w-[100px]">
          {label}
        </p>
      )}

      {/* Progress Bar Wrapper: Takes REMAINING space */}
      <div className="flex-grow w-full">
        <div className="w-full h-[11px] sm:h-[13px] bg-[#e8f1f9] rounded-full overflow-hidden">
          <div
            className={clsx(
              "h-full rounded-full transition-all duration-500 ease-in-out",
              color
            )}
            style={{ width: `${clampedProgress}%` }}
          />
        </div>
      </div>

      {/* Percentage: Fixed small width + responsive text */}
      <p className="text-xs sm:text-sm font-medium flex-shrink-0 w-[40px] text-right">
        {currentLevel}%
      </p>
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
      className={`w-full flex justify-between items-center gap-4 ${className}`}
    >
      {/* Label */}
      <div className="w-[40%] text-[13px] md:text-[16px]">
        <p>{label}</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full pt-[8px] pl-[20px]">
        <div className="w-[50px] md:w-[85%] h-[11px] ml-[7%] md:ml-[10%] bg-[#e8f1f9] rounded-full overflow-hidden">
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
      <div className="w-[5%] text-[12px] md:text-[16px] font-bold">
        <p>{currentLevel}%</p>
      </div>

      {/* Action Button */}
      <div className="w-[27%] md:w-[260px] text-[11px] md:text-[16px] ml-[15px] md:ml-[27px] lg:ml-0">
         <Button
        onClick={onButtonClick}
        className="rounded-[10px] md:rounded-[25px] border md:w-[210px] lg:w-[260px] mt-[15px]"
      >
        {buttonText}
      </Button>
      </div>
     
    </div>
  );
};
