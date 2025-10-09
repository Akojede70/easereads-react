import React from "react";
import { ProgressBar } from "../progressbar/progressbar";
import { Stars } from "../../assets/icon/star";
import { useNavigate } from "react-router-dom";
import { Button } from "../shared";

interface Subject {
  id: number;
  img: string;
  title: string;
  isExpired?: boolean;
  daysLeft?: number;
  topics: string;
  rating: number;
  progress: number;
  avatars: string[];
  starRating?: number;
  questions?: number;
}

interface Props {
  subject: Subject;
}

const VideoCard: React.FC<Props> = ({ subject }) => {
  const navigate = useNavigate();

  const renderStars = () => {
    const totalStars = 5;
    const fullStars = Math.floor(subject.starRating || 0);
    const hasHalfStar = (subject.starRating || 0) % 1 !== 0;
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <Stars key={`full-${index}`} fill="full" />
        ))}
        {hasHalfStar && <Stars key="half" fill="half" />}
        {[...Array(emptyStars)].map((_, index) => (
          <Stars key={`empty-${index}`} fill="none" />
        ))}
      </>
    );
  };

  const handleCardClick = () => {
    navigate(`/jupeb/video-topics/${subject.id}`);
  };

  return (
    <div
      className="w-full h-auto min-h-[450px] sm:min-h-[450px] bg-white shadow-lg rounded-xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={handleCardClick}
    >
      <div>
        <div className="relative w-full h-40 sm:h-48">
          <div className="absolute bg-gray-100 rounded-3xl top-3 sm:top-4 left-3 sm:left-4 py-1 sm:py-2 px-4 sm:px-6 z-10">
            <h3 className="text-sm sm:text-base font-semibold text-gray-700">
              Subject
            </h3>
          </div>
          <div className="relative w-full h-full">
            <img
              src={subject.img}
              alt={`${subject.title}`}
              className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-tl-xl rounded-tr-xl"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <circle cx="12" cy="12" r="10" fill="white" opacity="0.75" />
              <path
                d="M9 8L15 12L9 16V8Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div className="px-4 sm:px-7">
          <div className="flex justify-between items-start sm:items-center mt-3">
            <h2 className="text-xl sm:text-2xl font-bold truncate">
              {subject.title}
            </h2>

            <div className="flex flex-col items-end space-y-1">
              {subject.isExpired ? (
                <p className="text-xs font-bold bg-[#4CB8514D] py-1 px-3 rounded-full">
                  Expired
                </p>
              ) : (
                subject.daysLeft && (
                  <p className="text-xs font-bold bg-[#4CB8514D] py-1 px-3 rounded-full">
                    {subject.daysLeft} days left
                  </p>
                )
              )}
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-2">
            {subject.topics}
          </p>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {subject.avatars.slice(0, 3).map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt="Avatar"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="flex items-center bg-gray-200 rounded-lg py-1 px-2 ml-2">
                <span className="text-xs sm:text-sm text-gray-600">
                  {subject.rating}
                </span>
              </div>
            </div>
            <div className="flex items-center">{renderStars()}</div>
          </div>

          <div className="w-full my-3 sm:my-4">
            <ProgressBar
              label=""
              progress={subject.progress}
              currentLevel={subject.progress}
            />
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 mb-6">
            <>
              <Button
                color="bg-white"
                textColor="text-gray-800"
                className="w-full sm:flex-1 border border-blue-600"
                rounded="full"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/jupeb/analytics/${subject.id}`);
                }}
              >
                View Analytics
              </Button>
              {subject.isExpired ? (
                <Button
                  color="bg-gray-400"
                  textColor="text-white"
                  className="w-full sm:flex-1"
                  rounded="full"
                  disabled
                >
                  Upgrade
                </Button>
              ) : subject.progress === 0 ? (
                <Button
                  color="bg-blue-600"
                  textColor="text-white"
                  className="w-full sm:flex-1"
                  rounded="full"
                >
                  Watch Tutorial
                </Button>
              ) : (
                <Button
                  color="bg-blue-600"
                  textColor="text-white"
                  className="w-full sm:flex-1"
                  rounded="full"
                >
                  Continue Watching
                </Button>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;