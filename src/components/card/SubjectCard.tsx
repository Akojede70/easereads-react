import React from "react";
import Button from "../shared/button";
import ProgressBarCard from "../progressbar/progressbar";
import Star from "../../assets/icon/star";
import { useNavigate } from "react-router-dom";

interface Subject {
  id: number;
  img: string;
  title: string;
  isExpired: boolean;
  daysLeft?: number;
  topics: string;
  rating: number;
  progress: number;
  avatars: string[];
  starRating?: number;
}

const SubjectCard: React.FC<{ subject: Subject }> = ({ subject }) => {
  const navigate = useNavigate();

  const renderStars = () => {
    const totalStars = 5;
    const fullStars = Math.floor(subject.starRating || 0);
    const hasHalfStar = (subject.starRating || 0) % 1 !== 0;
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <Star key={`full-${index}`} fill="full" />
        ))}
        {hasHalfStar && <Star key="half" fill="half" />}
        {[...Array(emptyStars)].map((_, index) => (
          <Star key={`empty-${index}`} fill="none" />
        ))}
      </>
    );
  };

  const handleCardClick = () => {
    navigate(`/jupeb/topic/${subject.id}`);
  };

  return (
    <div
      className="w-full h-[500px] bg-[#fff] shadow-lg rounded-xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={handleCardClick}
    >
      <div>
        <div className="relative w-full h-48">
          <div className="absolute bg-[#f7f7f7] rounded-3xl top-4 left-4 py-2 px-6 z-10">
            <h3 className="text-lg font-semibold text-gray-700">Subject</h3>
          </div>
          <img
            src={subject.img}
            alt={`${subject.title} Model`}
            className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
          />
        </div>
        <div className="px-7">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mt-3">{subject.title}</h2>
            </div>
            {subject.isExpired ? (
              <div className="bg-[#4CB8514D] flex justify-center items-center rounded-full py-1 px-4 mt-3 w-fit ml-auto">
                <p className="text-xs font-bold">Expired</p>
              </div>
            ) : (
              <div className="flex justify-end items-center mt-3">
                <p className="bg-[#4CB8514D] text-sm font-bold py-1 px-3 rounded-full">
                  {subject.daysLeft} days left
                </p>
              </div>
            )}
          </div>
          <p className="text-[16px] text-gray-600 mt-2">{subject.topics}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center mt-2">
              {subject.avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full -ml-3 border-2 border-white"
                />
              ))}
              <div className="flex items-center bg-[#d6d6d6] rounded-[8px] py-1 px-1 w-fit ml-3">
                <span className="text-sm text-[#757575]">{subject.rating}</span>
              </div>
            </div>
            <div className="flex items-center mt-2">{renderStars()}</div>
          </div>
          <div className="w-full my-2">
            <ProgressBarCard
              label=""
              progress={subject.progress}
              currentLevel={subject.progress}
              className=""
            />
          </div>
          <div className="flex space-y-2 gap-4 mt-4 mb-6">
            <Button
              color="#fff"
              textColor="#333333"
              className="flex-1 items-center justify-center"
              border="1px solid #106EBE"
              borderRadius="50px"
              
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                navigate(`/jupeb/analytics/${subject.id}`);
              }}
            >
              View Analytics
            </Button>
            {!subject.isExpired && (
              <Button
                color="#106EBE"
                textColor="#fff"
                className="flex-1 px-2 items-center justify-center"
                borderRadius="50px"
              >
                Continue Reading
              </Button>
            )}
            {subject.isExpired && (
              <Button
                color="#9e9e9e"
                textColor="#fff"
                className="flex-1 items-center justify-center"
                borderRadius="50px"
                disabled
              >
                Upgrade
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
