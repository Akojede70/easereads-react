import React from "react";
import clsx from "clsx";

type ProgressBarProps = {
  label?: string;
  progress: number;
  currentLevel: number;
  /** Tailwind background class for the progress fill (e.g., "bg-blue-600") */
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

export default ProgressBar;