import React from "react";
import { Button } from "../shared";
import { Dot } from "../../assets/icon";
import { useNavigate } from "react-router-dom";

type QuizCardProps = {
  image?: string;
  title: string;
  subject: string;
  duration: string;
  questions: number;
  date: string;
  time: string;
  onJoin: () => void;
  className?: string; // 👈 added className for extra styling
};


export const QuizContent: React.FC<QuizCardProps> = ({
  image,
  title,
  subject,
  duration,
  questions,
  date,
  time,
  // onJoin,
  className = "",
}) => {
  const navigate = useNavigate()
  return (
    <div
      className={`md:flex gap-[10%] mt-[30px] items-center p-4 rounded-xl shadow-md bg-white ${className}`}
    >
      {/* Quiz Image */}
      <div >
        <img src={image} alt={title} className="w-[180px] md:w-[80px] h-[80px]" />
      </div>

      {/* Quiz Details */}
      <div className=" flex flex-col gap-[10px] pl-[5px] md:pl-[30px] flex-1">
        <h2 className="pt-[20px] md:pt-0 text-[14px] md:text-[18px] font-bold">{title}</h2>

        <div className="md:flex gap-[10px] md:gap-[15px] items-center flex-wrap">
          <p className="w-[120px] text-primaryBlue">{subject}</p>
          <div className="flex  gap-[10px]  my-[10px] md:my-0">
          <div className="pt-[5px]">
              <Dot />
          </div>
            <div className="text-[16px] w-[70px]">
               <p>{duration}</p>
            
            </div>
            </div>
            <div className="flex gap-[10px] w-[170px]">
          <div className="pt-[5px] md:ml-[2%] lg:ml-[18px]">
          <Dot />
          </div>
          <div>
          <p>{questions} Questions</p>
          </div>
          </div>
        </div>
      
        <div >
          <p className=" w-full">
          {date} <span className="lg:pl-[25px]">{time}</span>
        </p>
        </div>
       
      </div>

      {/* Action Button */}
      <div className="ml-auto mt-[20px] md:mt-0">
        <Button
          className="rounded-[17px] h-[40px] w-[120px] text-sm"
          onClick={() => navigate('/jupeb/quiz')}
        >
          Join Quiz
        </Button>
      </div>
    </div>
  );
};



type ClassContentProps = {
  image?: string;
  title: string;
  subject: string;
  duration: string;
  questions: number;
  date: string;
  time: string;
  onJoin: () => void;
  className?: string; // 👈 added className for extra styling
};

export const ClassContent: React.FC<ClassContentProps> = ({
  title,
  subject,
  duration,
  // questions,
  date,
  time,
  // onJoin,
  // className = "",
}) => {
  return (
     <div
         className={`md:flex gap-[10%] items-center `}
       >
         <div className="flex flex-col gap-[10px] pl-[22px] md:pl-[30px]">
           <h2 className="text-[14px] md:text-[18px] font-bold pt-[40px]"> {title} </h2>
   
           <div className="flex gap-[15px] items-center flex-wrap">
             <p className="w-[120px] text-primaryBlue"> {subject} </p>
             <Dot />
             <p> {duration} </p>
             <div className="ml-[18px]">
             </div>
           </div>
           <p className=" text-[14px] md:text-[16px]">
             { date } <span className="pl-[25px]"> {time} </span>
           </p>
         </div>
   
         <div className="w-[230px] mt-[20px] mx-auto md:mx-0  md:w-[120px] md:ml-auto pr-5">
           <Button
             className="rounded-[13px] h-[25px] md:h-[40px] w-[120px] text-sm"
           >
             Join Class
           </Button>
         </div>
       </div>
  );
};

interface UserRankCardProps {
  name: string;
  level: number;
  RankIcon?: React.ComponentType;   
  ArrowIcon?: React.ComponentType; 
}

export const UserRankCard: React.FC<UserRankCardProps> = ({ 
  name, 
  level, 
  RankIcon, 
  ArrowIcon 
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-5">
        {RankIcon && <RankIcon />}
        <span className="font-bold text-[12px] md:text-[16px]">{name}</span>
      </div>

      <div className="flex gap-[9px] items-center md:pl-[5%]">
        <p>Lvl {level}</p>
        {ArrowIcon && <ArrowIcon />}
      </div>
    </div>
  );
};

export default UserRankCard;
