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


type LongCardProps = {
  name: string;
  age: number | string;
  progress: number; 
  currentLevel: number;
  level: number | string;
  rank: string | number;
  PicComponent: React.ReactNode; 
  IconComponent?: React.ReactNode; 
};

 export const LongCard: React.FC<LongCardProps> = ({
  name,
  age,
  progress,
  currentLevel,
  level,
  rank,
  PicComponent,
  IconComponent,
}) => {
  return (
    <div className="w-[75%] px-[45px] ml-[20px] mb-[20px] h-[90px] flex flex-col gap-[10px] bg-primaryWhite p-4 rounded-[25px] shadow">
      <div className="flex justify-between items-center gap-[20px] pt-[10px]">
        {/* Profile Picture */}
        <div>{PicComponent}</div>

        {/* Name & Age */}
        <div className="flex gap-[10px] pt-[10px]">
          <p className="font-bold text-[17px]">{name}</p>
          <p className="font-bold">{age}</p>
        </div>

        {/* Progress Bar */}
        <div className="w-[35%] h-3 mt-[17px] bg-blue-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primaryBlue rounded-full"
            style={{
              width: `${progress}%`,
              transition: "width 0.5s ease-in-out",
            }}
          />
        </div>

        {/* Current Level Progress */}
        <div className="pt-[10px]">
          <p>
            {currentLevel}
            <span>%</span>
          </p>
        </div>

        {/* Level */}
        <div className="pt-[10px]">
          <p>level {level}</p>
        </div>

        {/* Rank */}
        <div className="text-primaryBlue text-[18px] pt-[10px] font-bold">
          <p>{rank}</p>
        </div>

        {/* Optional Icon */}
        {IconComponent && <div className="pl-[50px] pt-[10px]">{IconComponent}</div>}
      </div>
    </div>
  );
};





