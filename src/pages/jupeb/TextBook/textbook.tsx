// pages/jupeb/textbook/index.tsx

import React from "react";
import Layout from "../../../components/layout/layout";
import { MiniCard } from "../../../components/card";
import { SubjectCard } from "../../../components/card";
import {
  DayStreak,
  ExamTaken,
  SmallVideo,
  StudyTime,
} from "../../../assets/icon";
import { Avatar2, Avatar1, CardImg } from "../../../assets/images";
import { Button } from "../../../components/shared";

const subjects = [
  {
    id: 1,
    img: CardImg,
    title: "Physics 101",
    isExpired: false,
    daysLeft: 15,
    topics: "Discusses Newton's Laws, friction, energy systems...",
    rating: 9,
    progress: 0,
    avatars: [Avatar1, Avatar2],
    starRating: 4.0,
  },
  {
    id: 2,
    img: CardImg,
    title: "Chemistry 102",
    isExpired: false,
    daysLeft: 7,
    topics: "Organic compounds, acid-base reactions, stoichiometry...",
    rating: 10,
    progress: 40,
    avatars: [Avatar1, Avatar2],
    starRating: 5,
  },
  {
    id: 3,
    img: CardImg,
    title: "Biology Advanced",
    isExpired: true,
    topics: "Advanced cellular biology, respiration, photosynthesis...",
    rating: 10,
    progress: 20,
    avatars: [Avatar1, Avatar2],
    starRating: 3.5,
  },
];

const Textbook = () => {
  return (
    <Layout name="textBook">
      <div className="w-full bg-white px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <p className="text-3xl font-bold pt-6">Overview</p>
          <p className="text-base pt-2 pb-4">
            Hi Emmanuel Kelvin, here’s your progress today!
          </p>
        </div>
        <div className="pb-4 sm:pb-0">
          <Button
            color="bg-green-500"
            textColor="text-white"
            rounded="full"
            className="sm:w-[227px] h-12"
          >
            Whatsapp Community
          </Button>
        </div>
      </div>
      <div className="pl-[3%] md:ml-0 md:flex flex-wrap gap-[20px] mt-[20px]">
        <MiniCard icon={SmallVideo} title="Total Textbooks" value={5} />
        <MiniCard icon={ExamTaken} title="Completed" value={2} />
        <MiniCard icon={StudyTime} title="Read Time" value="50m" />
        <MiniCard icon={DayStreak} title="Progress" value="40%" />
      </div>
      {/* Mini Stats */}
      <div className="px-4 sm:px-6 lg:px-10 py-6">
        {/* Subjects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-20">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              variant="textbook"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Textbook;
