import React, { useState } from "react";

interface MiniCardProps {
  icon?: React.ElementType;
  title: string;
  value: React.ReactNode;
  className?: string;
}

export const MiniCard: React.FC<MiniCardProps> = ({ icon: Icon, title, value, className = "" }) => {
  return (
    <div
      className={`w-[94%] sm:w-[47%] lg:w-[23.4%] mb-[20px] h-[17%] flex flex-col gap-[10px] items-center justify-center bg-primaryWhite p-4 rounded-[20px] shadow ${className}`}
    >
      <div className="flex gap-3 sm:gap-4 items-center">
        {Icon && <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />}
        <p className="text-sm sm:text-base lg:text-lg font-medium text-center sm:text-left">
          {title}
        </p>
      </div>
      <p className="text-[16px] md:text-2xl font-bold">{value}</p>
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
      className={`w-[55%] md:w-[44%]  lg:w-[23.4%] pl-[35px] mt-[20px] lg:ml-[20px] mb-[20px] h-[17%] flex flex-col gap-[10px] bg-primaryWhite p-4 rounded-[20px] shadow ${className}`}
    >
      {/* Header Section */}
      <div className="flex gap-[20px] items-center">
        {avatar}
        <div className="flex flex-col">
          <p className="font-bold text-[23px] md:text-[17px]">{name}</p>
          <p className="text-[23px] md:text-[15px]">level {level}</p>
        </div>
        {tag && <div className="pl-[120px] md:pl-[50px]">{tag}</div>}
      </div>

      {/* Progress Section */}
      <div className="w-[90%] flex gap-[10px] items-center">
        <div className="w-[55%] h-3 mt-[5px] bg-blue-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primaryBlue rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-[23px] md:text-[17px]">
          <p>
            {progress}
            <span>%</span>
          </p>
        </div>
        {rankLabel && (
          <div className="font-bold text-[25px] md:text-[17px] text-primaryBlue ml-[15%] lg:ml-[8%]">
            <p>{rankLabel}</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface LeaderBoardMiniCardProps {
  avatar: React.ReactNode; 
  name: string;
  level: number;
  tag?: React.ReactNode; 
  progress: number; 
  rankLabel?: string; 
  className?: string;
}

export const LeaderBoardMiniCard: React.FC<LeaderBoardMiniCardProps> = ({
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
      className={`w-full md:w-[44%]  lg:w-[23.4%] pl-[35px] mt-[20px] lg:ml-[20px] mb-[20px] h-[17%] flex flex-col gap-[10px] bg-primaryWhite p-4 rounded-[20px] shadow ${className}`}
    >
      {/* Header Section */}
      <div className="flex gap-[20px] items-center">
        {avatar}
        <div className="flex flex-col">
          <p className="font-bold text-[23px] md:text-[17px]">{name}</p>
          <p className="text-[23px] md:text-[15px]">level {level}</p>
        </div>
        {tag && <div className="pl-[120px] md:pl-[50px]">{tag}</div>}
      </div>

      {/* Progress Section */}
      <div className="w-[90%] flex gap-[10px] items-center">
        <div className="w-[55%] h-3 mt-[5px] bg-blue-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primaryBlue rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-[23px] md:text-[17px]">
          <p>
            {progress}
            <span>%</span>
          </p>
        </div>
        {rankLabel && (
          <div className="font-bold text-[25px] md:text-[17px] text-primaryBlue ml-[15%] lg:ml-[8%]">
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
          <p className="font-bold text-[22px] md:text-[17px]">{name}</p>
          <p className="font-bold text-[22px] md:text-[17px]">{age}</p>
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
        <div className="pt-[10px] text-[22px] md:text-[17px]">
          <p>
            {currentLevel}
            <span>%</span>
          </p>
        </div>

        {/* Level */}
        <div className="text-[22px] md:text-[17px] pt-[10px]  w-[290px] lg:w-[55px]">
          <p>level {level}</p>
        </div>

        {/* Rank */}
        <div className="text-primaryBlue text-[22px] md:text-[18px]  pt-[10px] font-bold">
          <p>{rank}</p>
        </div>

        {/* Optional Icon */}
        {IconComponent && <div className="pl-[50px] pt-[10px]">{IconComponent}</div>}
      </div>
    </div>
  );
};



     type LongMiniCardProps = {
       name: string;
       age: number | string;
       progress: number; 
       currentLevel: number;
       level: number | string;
       rank: string | number;
       PicComponent: React.ReactNode; 
       IconComponent?: React.ReactNode; 
     };

      export const LongMiniCard: React.FC<LongMiniCardProps> = ({
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
    <div className="w-full md:w-[75%] px-[45px] md:ml-[20px] mb-[20px] h-[290px] md:h-[160px] lg:h-[90px] flex flex-col gap-[10px] bg-primaryWhite p-4 rounded-[25px] shadow">
      <div className="flex flex-wrap justify-between  items-center gap-[20px] pt-[10px]">
        {/* Profile Picture */}
        <div>{PicComponent}</div>

        {/* Name & Age */}
        <div className="flex gap-[10px] pt-[10px]">
          <p className="font-bold text-[22px] md:text-[17px]">{name}</p>
          <p className="font-bold text-[22px] md:text-[17px]">{age}</p>
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
        <div className="pt-[10px] text-[22px] md:text-[17px]">
          <p>
            {currentLevel}
            <span>%</span>
          </p>
        </div>

        {/* Level */}
        <div className="text-[22px] md:text-[17px] pt-[10px]  w-[290px] lg:w-[55px]">
          <p>level {level}</p>
        </div>

        {/* Rank */}
        <div className="text-primaryBlue text-[22px] md:text-[18px]  pt-[10px] font-bold">
          <p>{rank}</p>
        </div>

        {/* Optional Icon */}
        {IconComponent && <div className="lg:pl-[50px] pt-[10px]">{IconComponent}</div>}
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string; 
  value: React.ReactNode  
  width?: string;
  height?: string;
  icon?: React.ElementType;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  title,
  value,
  width = "w-[32%] md:w-[29%]",
  height = "h-[150px]",
}) => {
  return (
    <div
      className={`${width} ${height} w-full my-[8%] lg:my-[3%] mt-[2%] rounded-[20px] bg-primaryWhite flex flex-col gap-[15px] items-center justify-center`}
    >
      <div className="w-[83%] md:w-[70%] mx-auto">
        <div className="w-full h-[40px] rounded-[20px] bg-primaryBlue text-center flex items-center justify-center">
                  {Icon && <Icon />}
          <p className="text-primaryWhite text-[12px] md:text-[16px]">{title}</p>
        </div>
      </div>

      <div>
        <p className="text-[18px] md:text-[28px] font-bold">{value}</p>
      </div>
    </div>
  );
};

interface DurationCardProps {
  duration: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  bgColor?: string;
  border?: boolean;
  borderColor?: string;
  isActive: boolean;
    onClick?: () => void;
}

export const DurationCard: React.FC<DurationCardProps> = ({
  duration,
  oldPrice,
  newPrice,
  discount,
  bgColor = "#e8f1f9",
  border = true,
  borderColor = "#e8e8e8",
   isActive = false,
   onClick
   
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="cursor-pointer py-[20px] bg-[#e8f1f9] border border-[#e8e8e8] flex flex-col gap-[10px] items-center justify-center rounded-[18px] w-[85%] md:w-[45%] lg:w-[12%] mt-[20px] transition-all duration-300 ease-in-out"
     style={{
        backgroundColor: isActive
          ? "#e0f2fe" // 🔹 light blue for active
          : hover
          ? "#eff6ff" // 🔹 slightly lighter blue for hover
          : bgColor, // default background
        border: border
          ? `1px solid ${
              isActive
                ? "#2563eb" // active border color (blue-600)
                : hover
                ? "#3b82f6" // hover border color (blue-500)
                : borderColor
            }`
          : "none",
      }}
       onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
     >
      {/* Duration */}
      <p className="bg-primaryBlue w-[140px] text-center text-primaryWhite rounded-[10px] py-[4px]">
        {duration}
      </p>

      {/* Old Price */}
      <p className="line-through text-[22px] text-[#adadad]">N {oldPrice}</p>

      {/* New Price */}
      <p className="text-[25px] font-bold">N {newPrice}</p>

      {/* Discount */}
      <div className="border w-[120px] rounded-[12px] bg-primaryYellow text-primaryWhite text-center">
        {discount}% discount
      </div>
    </div>
  );
};


interface ScoreCardProps {
  score: string | number | null; // ✅ can be a number or string (e.g., "85%" or 85)
  label?: string;         // ✅ pass custom label (defaults to "Overall Score")
  status?: string;        // ✅ optional badge
  statusBg?: string;
  statusTextColor?: string;
  scoreTextColor?: string;
  width?: string;
  height?: string;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({
  score,
  label = "Overall Score", 
  status,
  statusBg = "#ff0808",
  statusTextColor = "#ffffff",
  scoreTextColor = "#106EBE",
  // width = "78%",
  height = "20%",
}) => {
  return (
    <div
      className="bg-primaryWhite mb-[20px] md:mb-0 rounded-[10px] w-[80%] md:w-[60%] lg:w-[18%] ml-[3%] md:ml-[1%] flex flex-col justify-center items-center pt-[10px]"
      style={{  height }}
    >
      <div className="flex flex-col justify-center items-center gap-[15px]">

        <p className="text-[22px] font-bold" style={{ color: scoreTextColor }}>
          {score}
        </p>

        <p className="font-bold">{label}</p>

        {/* Status (optional) */}
        {status && (
          <p
            className="rounded-[10px] w-[180px] text-center p-[5px]"
            style={{ backgroundColor: statusBg, color: statusTextColor }}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};


export default StatCard;






