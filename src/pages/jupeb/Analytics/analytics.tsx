import Layout from "../../../components/layout/layout";
import {
  DayStreak,
  ExamTaken,
  SmallVideo,
  StudyTime,
} from "../../../assets/icon";
import { MiniCard } from "../../../components/card";
import AnalyticsDashboard from "./AnalyticsDashboard";

const analytics = () => {
  return (
    <Layout name="analytics">
      <div className="w-full bg-white px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <p className="text-3xl font-bold pt-6">Analytics</p>
          <p className="text-base pt-2 pb-4">
            Track your progress and optimize your learning
          </p>
        </div>
      </div>
      <div className="pl-[3%] md:ml-0 md:flex flex-wrap gap-[20px] mt-[20px]">
        <MiniCard icon={SmallVideo} title="Study Time" value="68.5h" />
        <MiniCard icon={ExamTaken} title="Average Score" value="88.5%" />
        <MiniCard icon={StudyTime} title="Watch Time" value="50m" />
        <MiniCard icon={DayStreak} title="Progress" value="40%" />
      </div>

      {/* the content is from here */}
      <div className="w-full">
        <AnalyticsDashboard />
      </div>
    </Layout>
  );
};

export default analytics;
