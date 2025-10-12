import { DateIcon, People, TimeIcon } from "../../assets/icon";
import { Button } from "../shared";
import { useNavigate } from "react-router-dom";

interface ChallengeCardProps {
  icon: React.ReactNode // any React component (like QuizIcon, TimeIcon, etc.)
  title: string ;
  description: string;
  badgeText: string;
  badgeColor?: string; // optional, default is #ffc67d
  subjectBackgroundColor?: string; 
  subjectBorder?: string; 
  subjectTextColor?: string; 
  subjectRoundedBorder?: string;
  participants: number;
  questions: number;
  time: string;
  date: string;
  onStartQuiz?: () => void;
}

 export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  icon: icon,
  title,
  description,
  badgeText,
  badgeColor = "#ffc67d",
  subjectBorder = '1px solid #E0E0E0',
  subjectTextColor,
  subjectRoundedBorder,
  participants,
  questions,
  time,
  date,
  onStartQuiz
}) => {
  return (
    <div className="bg-primaryWhite mt-[30px] h-[420px] md:h-[290px] pt-[30px] rounded-[10px] lg:ml-[2%] w-full lg:w-[95%] px-[4%]">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-[17px]">
          {icon } {/* Render passed icon */}
          <div className="flex flex-col gap-[3px]">
            <div className=" w-auto md:flex gap-[15px]">
              <p className="w-[98%] md:w-auto pt-[18px] md:pt-0 text-[16px] md:text-[22px] font-bold">{title}</p>
              <p
                className="h-[35px] md:h-auto p-[3px] my-[20px] md:my-0  text-[15px] text-center md:ml-[20px] rounded-[15px] w-[100px] lg:w-[150px]"
                style={{ backgroundColor: badgeColor, 
                         color: subjectTextColor , 
                         border: subjectBorder, 
                         borderRadius: subjectRoundedBorder
                        }}
              >
                {badgeText}
              </p>
            </div>
            <p className="pt-[5px]">{description}</p>
          </div>
        </div>
        <div className="w-[20%] md:w-[18%] lg:w-[13%]">
          <Button onClick={onStartQuiz} >Start Quiz</Button>
        </div>
      </div>

      {/* Divider */}
      <div className="border border-gray-200 mt-[40px] mb-[20px] md:mb-0" />

      {/* Footer Info */}
      <div className=" w-full flex flex-wrap md:gap-[10px] justify-between mt-[3%]">
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
  id: number
  icon: React.ReactNode // any React component (like QuizIcon, TimeIcon, etc.)
  title: string;
  description: string;
  badgeText?: string;
  badgeColor?: string; // optional, default is #ffc67d
  participants: number;
  questions: number;
  time: string | number;
  date: string;
  accuracyPercentage: string
  accuracyTextColor: string
}

 export const QuizChallengeCard: React.FC<QuizChallengeCardProps> = ({
  id,
  icon: icon,
  title,
  // description,
  participants,
  questions,
  time,
  date,
  accuracyTextColor = '#4cb851',
  accuracyPercentage
}) => {
   const navigate = useNavigate()
   const handleViewResult = () => {
    navigate("/jupeb/quiz-answer", { state: { id } });
  };

  return (
    <div className="bg-primaryWhite mt-[30px] h-[400px] lg:h-[250px] pt-[30px] rounded-[10px] w-full px-[4%]">
      {/* Header */}
      <div className="lg:flex justify-between">
        <div className="flex gap-[17px]">
          {icon } 
          <div className="flex flex-col gap-[3px]">
            <div className="flex gap-[15px]">
              <p className="text-[15px] md:text-[22px] font-bold">{title}</p>
            </div>
          </div>
        </div>
         <div className="flex mt-[30px] lg:mt-auto gap-[150px] md:gap-[500px] lg:gap-[330px]">
                        <div className='flex flex-col gap-[13px]'>
                       <p className='text-[25px] font-bold' style={{ color: accuracyTextColor}}> {accuracyPercentage}</p>
                  <p> Accuracy </p>
                   </div>
                  <div className='w-[100px]  ml-[30px] md:ml-0 md:w-[150px]'>
               <Button onClick={handleViewResult}> Result </Button>
            </div>
         </div>
      </div>

      {/* Divider */}
      <div className="border border-gray-200 my-[30px] mt-[40px]" />

      {/* Footer Info */}
      <div className="w-full  flex flex-wrap gap-0 md:gap-[20px] lg:gap-0 justify-between mt-[3%]">
        <div className="flex gap-[10px]">
         <People />
          <p className="bg-[#f5f5f5] ml-[50px] md:ml-auto rounded-[15px] p-[3px] w-[28px] pt-[12px] text-center">
            {participants}
          </p>
          <p className="pt-[10px]  pl-[50px] md:pl-[10px]">Participants</p>
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

