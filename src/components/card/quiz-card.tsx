import { DateIcon, People, TimeIcon } from "../../assets/icon";
import { Button } from "../shared";

interface ChallengeCardProps {
  icon: React.ReactNode // any React component (like QuizIcon, TimeIcon, etc.)
  title: string;
  description: string;
  badgeText: string;
  badgeColor?: string; // optional, default is #ffc67d
  participants: number;
  questions: number;
  time: string;
  date: string;
}

 export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  icon: icon,
  title,
  description,
  badgeText,
  badgeColor = "#ffc67d",
  participants,
  questions,
  time,
  date,
}) => {
  return (
    <div className="bg-primaryWhite mt-[30px] h-[250px] pt-[30px] rounded-[10px] ml-[2%] w-[95%] px-[4%]">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-[17px]">
          {icon } {/* Render passed icon */}
          <div className="flex flex-col gap-[3px]">
            <div className="flex gap-[15px]">
              <p className="text-[22px] font-bold">{title}</p>
              <p
                className="p-[3px] text-[15px] text-center ml-[20px] rounded-[15px] w-[150px]"
                style={{ backgroundColor: badgeColor }}
              >
                {badgeText}
              </p>
            </div>
            <p>{description}</p>
          </div>
        </div>
        <div className="w-[13%]">
          <Button>Start Quiz</Button>
        </div>
      </div>

      {/* Divider */}
      <div className="border mt-[40px]" />

      {/* Footer Info */}
      <div className="w-full flex justify-between mt-[3%]">
        <div className="flex gap-[10px]">
         <People />
          <p className="bg-[#f5f5f5] rounded-[15px] p-[3px] w-[28px] pt-[12px] text-center">
            {participants}
          </p>
          <p className="pt-[10px] pl-[10px]">Participants</p>
        </div>

        <div className="pt-[10px]">
          <p>Questions: {questions}</p>
        </div>

        <div className="flex gap-[10px] pt-[10px]">
            <TimeIcon />
          <p>{time}</p>
        </div>

        <div className="flex gap-[10px] pt-[10px]">
             <DateIcon />
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};


interface QuizChallengeCardProps {
  icon: React.ReactNode // any React component (like QuizIcon, TimeIcon, etc.)
  title: string;
  description: string;
  badgeText: string;
  badgeColor?: string; // optional, default is #ffc67d
  participants: number;
  questions: number;
  time: string;
  date: string;
  accuracyPercentage: string
  accuracyTextColor: string
}

 export const QuizChallengeCard: React.FC<QuizChallengeCardProps> = ({
  icon: icon,
  title,
  description,
  badgeText,
  badgeColor = "#ffc67d",
  participants,
  questions,
  time,
  date,
  accuracyTextColor = '#4cb851',
  accuracyPercentage
}) => {
  return (
    <div className="bg-primaryWhite mt-[30px] h-[250px] pt-[30px] rounded-[10px] ml-[2%] w-[95%] px-[4%]">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-[17px]">
          {icon } {/* Render passed icon */}
          <div className="flex flex-col gap-[3px]">
            <div className="flex gap-[15px]">
              <p className="text-[22px] font-bold">{title}</p>
              <p
                className="p-[3px] text-[15px] text-center ml-[20px] rounded-[15px] w-[150px]"
                style={{ backgroundColor: badgeColor }}
              >
                {badgeText}
              </p>
            </div>
            <p>{description}</p>
          </div>
        </div>
        {/* <div className="w-[13%]">
          <Button>Start Quiz</Button>
        </div> */}
         <div className="flex gap-[90px]">
                        <div className='flex flex-col gap-[13px]'>
                       <p className='text-[25px] font-bold' style={{ color: accuracyTextColor}}> {accuracyPercentage}</p>
                  <p> Accuracy </p>
                   </div>
                  <div className='w-[150px]'>
               <Button> Result </Button>
            </div>
         </div>
      </div>

      {/* Divider */}
      <div className="border mt-[40px]" />

      {/* Footer Info */}
      <div className="w-full flex justify-between mt-[3%]">
        <div className="flex gap-[10px]">
         <People />
          <p className="bg-[#f5f5f5] rounded-[15px] p-[3px] w-[28px] pt-[12px] text-center">
            {participants}
          </p>
          <p className="pt-[10px] pl-[10px]">Participants</p>
        </div>

        <div className="pt-[10px]">
          <p>Questions: {questions}</p>
        </div>

        <div className="flex gap-[10px] pt-[10px]">
            <TimeIcon />
          <p>{time}</p>
        </div>

        <div className="flex gap-[10px] pt-[10px]">
             <DateIcon />
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

