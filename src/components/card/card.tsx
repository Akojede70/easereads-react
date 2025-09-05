import React from "react";

interface MiniCardProps {
  icon?: React.ElementType;
  title: string;
  value: string | number;
  className?: string;
}

export const MiniCard: React.FC<MiniCardProps> = ({ icon: Icon, title, value, className = "" }) => {
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


interface LeaderboardCardProps {
  avatar: React.ReactNode; 
  name: string;
  level: number;
  tag?: React.ReactNode; 
  progress: number; 
  rankLabel?: string; 
  className?: string;
}

export const LeaderboardCard: React.FC<LeaderboardCardProps> = ({
  avatar,
  name,
  level,
  tag,
  progress,
  rankLabel,
  className = "",
}) => {
  return (
    <div
      className={`w-[23.4%] pl-[35px] mt-[20px] ml-[20px] mb-[20px] h-[17%] flex flex-col gap-[10px] bg-primaryWhite p-4 rounded-[20px] shadow ${className}`}
    >
      {/* Header Section */}
      <div className="flex gap-[20px] items-center">
        {avatar}
        <div className="flex flex-col">
          <p className="font-bold text-[17px]">{name}</p>
          <p className="text-[15px]">level {level}</p>
        </div>
        {tag && <div className="pl-[50px]">{tag}</div>}
      </div>

      {/* Progress Section */}
      <div className="w-[90%] flex gap-[10px] items-center">
        <div className="w-[55%] h-3 mt-[5px] bg-blue-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primaryBlue rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div>
          <p>
            {progress}
            <span>%</span>
          </p>
        </div>
        {rankLabel && (
          <div className="font-bold text-[17px] text-primaryBlue ml-[8%]">
            <p>{rankLabel}</p>
          </div>
        )}
      </div>
    </div>
  );
};



