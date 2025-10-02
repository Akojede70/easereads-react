import React from "react";
import { useNavigate } from "react-router-dom";


interface TopicCardProps {
  topic: {
    id: number;
    img: string;
    title: string;
    topics: string;
    rating: number;
    avatars: string[];
    pages?: string;
    question?: string;
    viewNumber?: number;
    practiceNumber?: number;
  };
}

const TopicVideoCard: React.FC<TopicCardProps> = ({ topic }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/jupeb/topic/video-player/${topic.id}`);
  };

  return (
    <div
      className="w-full h-auto min-h-[350px] sm:min-h-[400px] bg-white shadow-lg rounded-xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={handleCardClick}
    >
      <div>
        <div className="relative w-full h-40 sm:h-48">
          <div className="relative w-full h-full">
            <img
              src={topic.img}
              alt={`${topic.title}`}
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
              <path d="M9 8L15 12L9 16V8Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-7">
          {/* Title + Page Count or Question Count */}
          <div className="flex justify-between items-center mt-3 sm:mt-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold truncate">
                {topic.title}
              </h2>
            </div>

            
          </div>

          {/* Topics Description */}
          <p className="text-sm sm:text-base text-gray-600 mt-2 line-clamp-2">
            {topic.topics}
          </p>

          {/* Avatars + View Count or Practice Count */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 sm:mt-4 gap-2 sm:gap-0">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {topic.avatars.slice(0, 3).map((avatar, index) => (
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
                  {topic.rating}
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <h2 className="text-xs sm:text-sm text-gray-800 font-semibold font-sans">
                {topic.viewNumber !== undefined
                  ? `Viewed by ${topic.viewNumber.toLocaleString()} people`
                  : topic.practiceNumber !== undefined
                  ? `Practiced by ${topic.practiceNumber.toLocaleString()} people`
                  : null}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicVideoCard;