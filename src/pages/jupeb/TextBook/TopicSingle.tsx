import React from "react";
import Button from "../../../components/shared/button";
import { ArrowLeft, TextbookIcon } from "../../../assets/icon";
import CardImg from "../../../assets/images/subjectcardimg.svg";
import Avatar1 from "../../../assets/images/avatar1.png";
import Avatar2 from "../../../assets/images/avatar2.png";
import TopicCard from "../../../components/card/TopicCard";

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

const TopicSingle: React.FC = () => {
  const topic: Topic[] = [
    {
      id: 1,
      img: CardImg,
      title: "Biology 101",
      pages: "120 Pages",
      topics:
        "Topics Discussed physical quality, quality, measurement techniques, galvanometer etc.",
      rating: 10,
      avatars: [Avatar1, Avatar2, Avatar1],
      viewNumber: 1200,
    },
    {
      id: 2,
      img: CardImg,
      title: "Biology 101",
      pages: "120 Pages",
      topics:
        "Topics Discussed physical quality, quality, measurement techniques, galvanometer etc.",
      rating: 10,
      avatars: [Avatar1, Avatar2, Avatar1],
      viewNumber: 1200,
    },
    {
      id: 3,
      img: CardImg,
      title: "Biology 101",
      pages: "120 Pages",
      topics:
        "Topics Discussed physical quality, quality, measurement techniques, galvanometer etc.",
      rating: 10,
      avatars: [Avatar1, Avatar2, Avatar1],
      viewNumber: 1200,
    },
  ];

  return (
    <div className="w-full h-screen bg-[#F5F5F5] rounded-2xl flex flex-col">
      <div className="w-full  flex justify-between items-center px-[40px] bg-[#fff] py-4">
        <div>
          <Button
            width="108px"
            color="#fff"
            borderRadius="20px"
            textColor="#333333"
            border="1px solid #333333"
            className="flex items-center justify-center font-semibold gap-1"
          >
            <ArrowLeft />
            Back
          </Button>
        </div>
      </div>
      <div className="px-[40px] pt-[20px] flex items-center ">
        <h1 className="text-2xl font-bold font-sans text-[#333333]">Biology</h1>
        <div className="bg-[#25AF7C1A] rounded-3xl py-2 px-8 flex items-center ml-4 gap-2">
          <TextbookIcon />
          <h3 className="text-sm font-semibold text-gray-700">Textbook</h3>
        </div>
      </div>
      <div>
        <h2 className="px-[40px] text-sm font-normal mt-3">
          Read Jupeb Textbooks that contain all topics in section 001/002/003 &
          004
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-[40px] mb-40 mt-10">
        {topic.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default TopicSingle;
