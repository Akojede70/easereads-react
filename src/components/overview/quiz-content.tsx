import React from "react";
import Button from "../shared/button";
import { Dot } from "../../assets/icon";

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
  onJoin,
  className = "",
}) => {
  return (
    <div
      className={`flex gap-[10%] mt-[30px] items-center p-4 rounded-xl shadow-md bg-white ${className}`}
    >
      {/* Quiz Image */}
      <div>
        <img src={image} alt={title} className="w-[80px] h-[80px] object-contain" />
      </div>

      {/* Quiz Details */}
      <div className="flex flex-col gap-[10px] pl-[30px] flex-1">
        <h2 className="text-[18px] font-bold">{title}</h2>

        <div className="flex gap-[15px] items-center flex-wrap">
          <p className="w-[120px] text-primaryBlue">{subject}</p>
          <Dot />
          <p>{duration}</p>
          <div className="ml-[18px]">
          <Dot />
          </div>
          <p>{questions} Questions</p>
        </div>

        <p>
          {date} <span className="pl-[25px]">{time}</span>
        </p>
      </div>

      {/* Action Button */}
      <div className="ml-auto">
        <Button
          className="rounded-[17px] h-[40px] w-[120px] text-sm"
          onClick={onJoin}
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
         className={`flex gap-[10%] items-center`}
       >
         <div className="flex flex-col gap-[10px] pl-[30px]">
           <h2 className="text-[18px] font-bold pt-[40px]"> {title} </h2>
   
           <div className="flex gap-[15px] items-center flex-wrap">
             <p className="w-[120px] text-primaryBlue"> {subject} </p>
             <Dot />
             <p> {duration} </p>
             <div className="ml-[18px]">
             </div>
           </div>
           <p>
             { date } <span className="pl-[25px]"> {time} </span>
           </p>
         </div>
   
         <div className="ml-auto pr-5">
           <Button
             className="rounded-[13px] h-[40px] w-[120px] text-sm"
           >
             Join Class
           </Button>
         </div>
       </div>
  );
};





