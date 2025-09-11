import React from "react";

interface StatCardProps {
  icon?: React.ElementType;
  title: string;
  value: string | number;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  title,
  value,
  className = "",
}) => {
  return (
    <div
      className={`w-full flex flex-col gap-2 sm:gap-3 items-center justify-center bg-primaryWhite 
        p-4 sm:p-6 rounded-2xl shadow-md ${className}`}
    >
      <div className="flex gap-3 sm:gap-4 items-center">
        {Icon && <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />}
        <p className="text-sm sm:text-base lg:text-lg font-medium text-center sm:text-left">
          {title}
        </p>
      </div>
      <p className="text-xl sm:text-2xl lg:text-3xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;