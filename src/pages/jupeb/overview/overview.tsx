import React, { useState } from "react";
import Layout from "../../../components/layout/layout";
import {
  Gift,
  SmallVideo,
  ExamTaken,
  Leaderboard,
  DayStreak,
  StudyTime,
  Rank1,
  Rank2,
  Rank3,
  Rank4,
  UpperTriangle,
  DownTriangle,
} from "../../../assets/icon";
import "react-circular-progressbar/dist/styles.css";
import { Harmonic, Equation } from "../../../assets/images";
import { MiniCard } from "../../../components/card";
import {
  ProgressBar,
  ProgressBarWithAction,
} from "../../../components/progressbar";
import { ClassContent, QuizContent } from "../../../components/overview";

const Overview = () => {
  const [activeTab, setActiveTab] = useState<"textbook" | "video" | "exam">(
    "textbook"
  );
  const currentLevel = 3;
  const progress = ((currentLevel - 1) / 4) * 100;

  return (
    <Layout name="overview ">
      <div className="w-[70%] lg:w-full mt-[20px] lg:mt-0 ml-[2%] md:ml-[3%]  lg:ml-0 pl-[13px] md:pl-[40px] border lg:flex justify-between border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]">
        <div>
          <p className="text-[20px] md:text-4xl flex flex-col font-bold pt-[30px]">
            {" "}
            Overview
          </p>
          <p className="w-[70%] md:w-[78%] lg:w-full text-[12px] md:text-[18px] lg:text-[16px] pt-[10px] pb-[15px] pl-[5px]">
            {" "}
            Hi Emmanuel Kelvin, here's your progress today!
          </p>
        </div>
        <div className="w-[95%] lg:w-[20%] flex h-[60px] lg:pt-[40px]">
          <div>
            <Leaderboard />
          </div>
          <div className="w-full p-4">
            <div className="w-[100px] md:w-[180px] lg:w-full h-5 bg-blue-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primaryBlue rounded-full"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.5s ease-in-out",
                }}
              />
            </div>
          </div>
          <p className="w-full lg:w-[80%] pt-[15px] text-[16px] md:text-[18px]">
            {" "}
            Level: {currentLevel}
          </p>
        </div>
      </div>
      <div className="md:pl-[2.9%] mt-[4%] md:mt-[2%] ">
        <div className="relative w-[70%] md:w-[73%] lg:w-[98%] ml-[8px] md:ml-0 h-[250px] md:h-[225px] bg-[#087cdf] text-white p-4 rounded-[5px] lg:rounded-lg overflow-hidden flex gap-[290px] ">
          {/* Banner content */}
          <div className="pl-[1%] md:pl-[7%] lg:pl-[50px]">
            <div className="w-[280px] md:w-[320px] lg:w-[80%]">
              <h2 className="text-[15px] md:text-[18px] lg:text-3xl font-bold pt-[20px]">
                Upgrade to Premium & Save 40%
              </h2>
              <p className="w-[80%] md:w-[97%] mt-[20px] text-[15px] md:text-[16.5px] lg:text-[16px]">
                Get unlimited access to all textbooks, live classes, and AI
                tutoring Limited time offer ending soon!
              </p>
            </div>

            <div className="my-[15px] text-[14px] md:text-[16px]">
              <button className="w-[50%] lg:w-[30%] bg-primaryYellow text-white px-4 py-2 rounded-[8px] hover:bg-blue-700 transition duration-200 cursor-pointer">
                Claim Offer
              </button>
            </div>
          </div>
          <div className="none lg:block">
            <Gift />
          </div>
        </div>

        <div className="ml-[3%] md:ml-0 md:flex flex-wrap gap-[20px] mt-[20px]">
          <MiniCard icon={SmallVideo} title="Textbooks Read" value={5} />
          <MiniCard icon={ExamTaken} title="Exam Taken" value={2} />
          <MiniCard icon={StudyTime} title="Study Time" value={"12h 34m"} />
          <MiniCard icon={DayStreak} title="Day Streak" value={"5 days"} />
        </div>

        <div className="lg:flex gap-[30px]">
          <div className="ml-[3%] md:ml-0 w-[67%] md:w-[73%] lg:w-[60%] flex gap-[60px] mb-6">
            <div className="w-[100%] h-[320px] bg-primaryWhite p-2 md:p-4 rounded-[15px] shadow">
              <div className="flex px-1 md:px-4 justify-between">
                <div>
                  <h3 className="text-[14px] md:text-[16px] font-bold pt-[6px]">
                    Overall performance
                  </h3>
                </div>
                <div className="bg-primaryBlue p-[3px] rounded-[12px] text-primaryWhite">
                  <p> weekly</p>
                </div>
              </div>

              <div className="flex px-1 md:px-4 my-[22px] gap-[20px]">
                <div className="w-[60%] h-[60%] md:h-[40%] rounded-[10px] bg-[#e8f1f9]">
                  <div className="flex flex-col justify-center items-center gap-[10px]  mt-[20px] mb-[10px]">
                    <p className="text-[20px] font-bold pt-[10px] text-[#106ebe]">
                      {" "}
                      70%{" "}
                    </p>
                    <p className="text-[12px] md:text-[16px] font-semibold">
                      {" "}
                      Average Score{" "}
                    </p>
                  </div>
                </div>

                <div className="w-[60%] h-[40%] rounded-[10px] bg-[#fff6e9]">
                  <div className="flex flex-col justify-center items-center gap-[10px]  mt-[20px] mb-[10px]">
                    <p className="text-[20px] font-bold pt-[10px] text-[#ff9f23]">
                      {" "}
                      12/15{" "}
                    </p>
                    <p className="text-[12px] md:text-[16px]font-semibold">
                      {" "}
                      Quizzes Passed{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pr-4 md:px-4 flex flex-col gap-[20px]">
                <ProgressBar label="Physics" progress={80} currentLevel={80} />
                <ProgressBar
                  label="Chemistry"
                  progress={40}
                  currentLevel={40}
                  color="bg-[#ffa024]"
                />
                <ProgressBar label="English" progress={60} currentLevel={60} />
              </div>
            </div>
          </div>

          <div className="ml-[3%] md:ml-0  h-[230px] md:h-[325px] w-[66%] md:w-[73%] lg:w-[35%]  bg-primaryWhite  mb-[20px] rounded-[15px]">
            <p className="pl-[20px] pt-[20px] text-[16px] md:text-[20px] font-bold">
              {" "}
              Referral Points{" "}
            </p>
            <div className="text-center">
              <p className="text-[16px] md:text-[20px] pt-[20px] md:pt-[60px] font-bold">
                {" "}
                2,400 <span className="text-[13px]"> Total points</span>
              </p>
              <div className="flex flex-col">
                <div className="flex gap-[30px] justify-evenly pt-[20px] md:pt-[70px] text-[14px] md:text-[17px]">
                  <p> This Month</p>
                  <p> +180 pts</p>
                </div>

                <div className="flex gap-[40px] justify-evenly pt-[30px] text-[14px] md:text-[17px]">
                  <p> Referral </p>
                  <p> 3 Active </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Row */}
        <div className="w-full lg:flex gap-[30px]">
          <div className="ml-[3%] md:ml-0 mb-[7%] lg:mb-0 w-[67%] md:w-[73%] lg:w-[60%] bg-primaryWhite p-[20px] rounded-[20px] shadow">
            <div className="flex justify-between px-1 lg:px-4 font-bold text-[14px] md:text-[17px]">
              <p> Upcoming Quiz</p>
              <p className="text-primaryBlue underline cursor-pointer">
                {" "}
                See All
              </p>
            </div>

            <QuizContent
              image={Harmonic}
              title="Simple Harmonic Motion Quiz"
              subject="Physics"
              duration="20 Mins"
              questions={20}
              date="15th Oct, 2025"
              time="12:00pm"
              onJoin={() => alert("Joining Harmonic Quiz")}
              // className="bg-blue-50 hover:shadow-lg" // 👈 custom styling
            />
            <QuizContent
              image={Equation}
              title="Quadratic Equation Motion Quiz"
              subject="Physics"
              duration="20 Mins"
              questions={20}
              date="15th Oct, 2025"
              time="12:00pm"
              onJoin={() => alert("Joining Harmonic Quiz")}
              // className="bg-blue-50 hover:shadow-lg" // 👈 custom styling
            />
          </div>

          {/* Leaderboard */}
          <div className="ml-[3%] md:ml-0 w-[67%] md:w-[73%] lg:w-[35%] bg-primaryWhite p-4 rounded-[15px] shadow">
            <div className="flex justify-between px-1 md:px-4 mt-[2%] md:mt-0">
              <h3 className="pt-[15px] md:pt-0 text-[13px] md:text-[17px] font-bold">
                Leaderboard
              </h3>
              <button className="mt-2 text-primaryBlue font-bold underline text-[16px]">
                See All
              </button>
            </div>
            <div className="text-[14px] md:text-[16px] my-[20px] md:w-[80%] md:ml-[18px]">
              <p>
                {" "}
                Top Performance this week based on quiz scores and study time
              </p>
            </div>

            <div className="mt-4 px-1 md:px-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-5">
                  <Rank1 />
                  <span className="font-bold text-[12px] md:text-[16px]">
                    Emmanuel Kelvin
                  </span>
                </div>
                <div className="flex gap-[9px]">
                  <p> Lvl 12</p>
                  <UpperTriangle />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-5">
                  <Rank2 />
                  <span className="font-bold text-[12px] md:text-[16px]">
                    John Yemi
                  </span>
                </div>
                <div className="flex gap-[10px]">
                  <p> Lvl 10</p>
                  <UpperTriangle />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-5">
                  <Rank3 />
                  <span className="font-bold text-[12px] md:text-[16px]">
                    King Ammy
                  </span>
                </div>
                <div className="flex gap-[10px]">
                  <p> Lvl 09</p>
                  <DownTriangle />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-5">
                  <Rank4 />
                  <span className="font-bold text-[12px] md:text-[16px]">
                    Martins Bush
                  </span>
                </div>
                <div className="flex gap-[10px]">
                  <p> Lvl 05</p>
                  <UpperTriangle />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex gap-[30px]">
          <div className="bg-primaryWhite p-4 rounded-[15px] shadow ml-[3%] md:ml-0 w-[67%] md:w-[73%] lg:w-[55%] mt-[30px] mb-[40px] lg:mb-[120px]">
            <div className="mb-[20px]">
              <p className="text-[17px] font-bold"> Continue Learning</p>
              <p className="text-[14px] py-[8px]">
                {" "}
                Pick up where you left off{" "}
              </p>
            </div>
            {/* Tabs Header */}
            <div className="flex justify-between border-b border-gray-200">
              <button
                className={`px-4 py-2 text-[11px] md:text-[17px] font-bold cursor-pointer ${
                  activeTab === "textbook"
                    ? "border-b-2 border-primaryBlue text-primaryBlue"
                    : " hover:text-primaryBlue"
                }`}
                onClick={() => setActiveTab("textbook")}
              >
                Textbook
              </button>
              <button
                className={`px-4 py-2 text-[11px] md:text-[17px] font-bold cursor-pointer ${
                  activeTab === "video"
                    ? "border-b-2 border-primaryBlue text-primaryBlue"
                    : "hover:text-primaryBlue "
                }`}
                onClick={() => setActiveTab("video")}
              >
                Video Tutorials
              </button>
              <button
                className={`px-4 py-2 text-[11px] md:text-[17px] font-bold cursor-pointer ${
                  activeTab === "exam"
                    ? "border-b-2 border-primaryBlue text-primaryBlue cursor-pointer"
                    : "hover:text-primaryBlue"
                }`}
                onClick={() => setActiveTab("exam")}
              >
                Exam Practice
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {activeTab === "textbook" && (
                <div className="md:px-4 flex flex-col">
                  <ProgressBarWithAction
                    label="Biology"
                    progress={20}
                    color="bg-[#ffa024]"
                    currentLevel={20}
                    buttonText="Continue Reading"
                    onButtonClick={() => alert("Continue Physics")}
                  />
                  <ProgressBarWithAction
                    label="Chemistry"
                    progress={40}
                    currentLevel={40}
                    buttonText="Continue Reading"
                    onButtonClick={() => alert("Continue Physics")}
                  />
                  <ProgressBarWithAction
                    label="Physics"
                    progress={60}
                    color="bg-[#ffa024]"
                    currentLevel={60}
                    buttonText="Continue Reading"
                    onButtonClick={() => alert("Continue Physics")}
                  />
                  <ProgressBarWithAction
                    label="Crs"
                    progress={80}
                    currentLevel={80}
                    buttonText="Continue Reading"
                    onButtonClick={() => alert("Continue Physics")}
                  />
                </div>
              )}

              {activeTab === "video" && (
                <div className="md:px-4 flex flex-col">
                  <ProgressBarWithAction
                    label="Biology"
                    progress={20}
                    color="bg-[#ffa024]"
                    currentLevel={20}
                    buttonText="Continue Reading"
                    onButtonClick={() => alert("Continue Physics")}
                  />
                  <ProgressBarWithAction
                    label="Chemistry"
                    progress={40}
                    currentLevel={40}
                    buttonText="Continue Reading"
                    onButtonClick={() => alert("Continue Physics")}
                  />
                  <ProgressBarWithAction
                    label="Physics"
                    progress={60}
                    currentLevel={60}
                    buttonText="Continue Reading"
                    onButtonClick={() => alert("Continue Physics")}
                  />
                </div>
              )}

              {activeTab === "exam" && (
                <div className="md:px-4 flex flex-col">
                  <ProgressBarWithAction
                    label="Biology"
                    progress={20}
                    color="bg-[#ffa024]"
                    currentLevel={20}
                    buttonText="Continue Reading"
                    onButtonClick={() => alert("Continue Physics")}
                  />
                  <ProgressBarWithAction
                    label="Chemistry"
                    progress={40}
                    currentLevel={40}
                    buttonText="Continue Reading"
                    onButtonClick={() => alert("Continue Physics")}
                  />
                  <ProgressBarWithAction
                    label="Physics"
                    progress={60}
                    currentLevel={60}
                    color="bg-[#ffa024]"
                    buttonText="Continue Reading"
                    onButtonClick={() => alert("Continue Physics")}
                  />
                  <ProgressBarWithAction
                    label="Crs"
                    progress={80}
                    currentLevel={80}
                    buttonText="Continue Reading"
                    onButtonClick={() => alert("Continue Physics")}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="ml-[3%] md:ml-0 w-[68%] md:w-[73%] lg:w-[40%] h-[750px] md:h-[463px] mt-[10px] lg:mt-[30px] bg-primaryWhite rounded-[15px] mb-[120px] lg:mb-0">
            <div className="flex justify-between px-6 font-bold pt-[20px] text-[14px] md:text-[18px]">
              <p> Upcoming Quiz</p>
              <p className="text-primaryBlue underline cursor-pointer pr-2">
                {" "}
                See All
              </p>
            </div>
            <ClassContent
              title="Quadratic Equation Motion Quiz"
              subject="Physics"
              duration="20 Mins"
              questions={20}
              date="15th Oct, 2025"
              time="12:00pm"
              onJoin={() => alert("Joining Harmonic Quiz")}
            />
            <ClassContent
              title="Quadratic Equation Motion Quiz"
              subject="Physics"
              duration="20 Mins"
              questions={20}
              date="15th Oct, 2025"
              time="12:00pm"
              onJoin={() => alert("Joining Harmonic Quiz")}
            />{" "}
            <ClassContent
              title="Quadratic Equation Motion Quiz"
              subject="Physics"
              duration="20 Mins"
              questions={20}
              date="15th Oct, 2025"
              time="12:00pm"
              onJoin={() => alert("Joining Harmonic Quiz")}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Overview;
