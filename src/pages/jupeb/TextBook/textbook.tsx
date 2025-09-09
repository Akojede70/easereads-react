import React from "react";
import Layout from "../../../components/layout/layout";
import Button from "../../../components/shared/button";
import { DayStreak, ExamTaken, SmallVideo, StudyTime } from "../../../assets/icon";
import MiniCard from "../../../components/card/card";
import SubjectCard from "../../../components/card/SubjectCard";
import CardImg from "../../../assets/images/subjectcardimg.svg";
import Avatar1 from "../../../assets/images/avatar1.png";
import Avatar2 from "../../../assets/images/avatar2.png";

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
  starRating?: number; // New property for star rating
}

const Textbook: React.FC = () => {
  const subjects: Subject[] = [
    {
      id: 1,
      img: CardImg,
      title: "Biology 101",
      isExpired: true,
      topics:
        "Topics Discussed physical quality, quality, measurement techniques, galvanometer etc.",
      rating: 10,
      progress: 20,
      avatars: [Avatar1, Avatar2, Avatar1],
      starRating: 4.5, // Example with half star
    },
    {
      id: 2,
      img: CardImg,
      title: "Biology 101",
      isExpired: false,
      daysLeft: 10,
      topics:
        "Topics Discussed physical quality, quality, measurement techniques, galvanometer etc.",
      rating: 10,
      progress: 20,
      avatars: [Avatar1, Avatar2, Avatar1],
      starRating: 5, // Full stars
    },
    {
      id: 3,
      img: CardImg,
      title: "Biology 101",
      isExpired: false,
      daysLeft: 10,
      topics:
        "Topics Discussed physical quality, quality, measurement techniques, galvanometer etc.",
      rating: 10,
      progress: 20,
      avatars: [Avatar1, Avatar2, Avatar1],
      starRating: 3.5, // Example with half star
    },
    {
      id: 4,
      img: CardImg,
      title: "Biology 101",
      isExpired: false,
      daysLeft: 10,
      topics:
        "Topics Discussed physical quality, quality, measurement techniques, galvanometer etc.",
      rating: 10,
      progress: 20,
      avatars: [Avatar1, Avatar2, Avatar1],
      starRating: 3.5, // Example with half star
    },
    {
      id: 5,
      img: CardImg,
      title: "Biology 101",
      isExpired: false,
      daysLeft: 10,
      topics:
        "Topics Discussed physical quality, quality, measurement techniques, galvanometer etc.",
      rating: 10,
      progress: 20,
      avatars: [Avatar1, Avatar2, Avatar1],
      starRating: 3.5, // Example with half star
    },
    {
      id: 6,
      img: CardImg,
      title: "Biology 101",
      isExpired: false,
      daysLeft: 10,
      topics:
        "Topics Discussed physical quality, quality, measurement techniques, galvanometer etc.",
      rating: 10,
      progress: 20,
      avatars: [Avatar1, Avatar2, Avatar1],
      starRating: 3.5, // Example with half star
    },
  ];
  return (
    <Layout>
      <div className="w-full pl-[40px] flex justify-between items-center px-[20px] bg-[#fff]">
        <div>
          <p className="text-4xl flex flex-col font-bold font-montserrat pt-[30px]">
            Overview
          </p>
          <p className="text-lg pt-[10px] pb-[15px] pl-[5px] font-sans">
            Hi Emmanuel Kelvin, here's your progress today!
          </p>
        </div>
        <div>
          <Button width="227px" color="#4CB851" borderRadius="24px">
            Whatsapp Community
          </Button>
        </div>
      </div>
      <div className="px-[37px] py-[32px]">
        <div className="flex-1 flex space-x-6 overflow-x-auto pb-4">
          <MiniCard icon={SmallVideo} title="Total Textbooks" value={5} />
          <MiniCard icon={ExamTaken} title="Completed" value={2} />
          <MiniCard icon={StudyTime} title="Read Time" value={"50m"} />
          <MiniCard icon={DayStreak} title="Progress" value={"40%"} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-40">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Textbook;