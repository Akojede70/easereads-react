import { DayStreak, ExamTaken, SmallVideo, StudyTime } from "../../../assets/icon";
import { MiniCard } from "../../../components/card";
import Layout from "../../../components/layout/layout";
import { Button } from "../../../components/shared";
import { Avatar2, Avatar1, CardImg } from "../../../assets/images";
import VideoCard from "../../../components/card/VideoCard";

const subjects = [
  {
    id: 1,
     img: CardImg,// Replace with actual video thumbnail image path
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
    img: CardImg,// Replace with actual video thumbnail image path
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
    img: CardImg, // Replace with actual video thumbnail image path
    title: "Biology Advanced",
    isExpired: true,
    topics: "Advanced cellular biology, respiration, photosynthesis...",
    rating: 10,
    progress: 20,
    avatars: [Avatar1, Avatar2],
    starRating: 3.5,
  },
];
const VideoTutorial = () => {
  return (
    <Layout name="videoTutorial">
      <div className="w-full bg-white px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <p className="text-3xl font-bold pt-6">Video Tutorials</p>
          <p className="text-base pt-2 pb-4">
            Complete your Video Tutorial and upgrade your expired Videos
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
       {/* <div className="mb-6">
          <SearchFilter
            placeholder="Search Textbook"
            onSearchChange={setSearchTerm}
            onFilterChange={setSelectedChapter}
            filterOptions={chapters}
            filterLabel="Chapters"
          />
        </div> */}
      <div className="pl-[3%] md:ml-0 md:flex flex-wrap gap-[20px] mt-[20px]">
        <MiniCard icon={SmallVideo} title="Total Video" value={5} />
        <MiniCard icon={ExamTaken} title="Completed" value={2} />
        <MiniCard icon={StudyTime} title="Watch Time" value="50m" />
        <MiniCard icon={DayStreak} title="Progress" value="40%" />
      </div>
      <div className="px-4 sm:px-6 lg:px-10 py-6">
        {/* Subjects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-20">
          {subjects.map((subject) => (
            <VideoCard
              key={subject.id}
              subject={subject}
              
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default VideoTutorial;
