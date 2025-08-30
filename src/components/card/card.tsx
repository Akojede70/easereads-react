import React from "react";

interface StatCardProps {
  icon?: React.ElementType;
  title: string;
  value: string | number;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, title, value, className = "" }) => {
  return (
    <div
      className={`w-[23.4%] mb-[20px] h-[17%] flex flex-col gap-[10px] items-center justify-center bg-primaryWhite p-4 rounded-[20px] shadow ${className}`}
    >
      <div className="flex gap-[15px] items-center">
        {Icon && <Icon />}
        <p className="text-[16px]">{title}</p>
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatCard;
