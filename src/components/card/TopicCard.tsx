import React from "react";
import { useNavigate } from "react-router-dom";

import { PageIcon, Textbook } from "../../assets/icon";

interface Topic {
  id: number;
  img: string;
  title: string;
  pages: string;
  topics: string;
  rating: number;
  avatars: string[];
  viewNumber: number;
}

const TopicCard: React.FC<{ topic: Topic }> = ({ topic }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/jupeb/topic/reader/${topic.id}`);
  };

  return (
    <div
      className="w-full h-[400px] bg-[#fff] shadow-lg rounded-xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={handleCardClick}
    >
      <div>
        <div className="relative w-full h-48">
          <img
            src={topic.img}
            alt={`${topic.title} Model`}
            className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
          />
        </div>
        <div className="px-7">
          <div className="flex justify-between items-center mt-4">
            <div>
              <h2 className="text-2xl font-bold">{topic.title}</h2>
            </div>
            <div className="flex items-center gap-1">
              <PageIcon />
              <span className="text-sm text-gray-500">{topic.pages}</span>
            </div>
          </div>
          <p className="text-[16px] text-gray-600 mt-2">{topic.topics}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center mt-2">
              {topic.avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full -ml-3 border-2 border-white"
                />
              ))}
              <div className="flex items-center bg-[#d6d6d6] rounded-[8px] py-1 px-1 w-fit ml-3">
                <span className="text-sm text-[#757575]">{topic.rating}</span>
              </div>
            </div>
            <div className="flex items-center mt-2">
             <h2 className="text-sm text-[#333333] font-semibold font-sans" >
               Viewed By {topic.viewNumber.toLocaleString()} people
             </h2>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TopicCard;
