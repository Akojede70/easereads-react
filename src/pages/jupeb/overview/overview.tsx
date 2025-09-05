import React, { useState } from 'react'
import Layout from '../../../components/layout/layout'
import {  Gift, SmallVideo, ExamTaken, Leaderboard, DayStreak, StudyTime, Rank1, Rank2, Rank3, Rank4, UpperTriangle, DownTriangle,} from '../../../assets/icon';
import { 
  // CircularProgressbar, 
  // buildStyles 
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Harmonic, Equation } from '../../../assets/images';
import { MiniCard } from '../../../components/card';
import { ProgressBar, ProgressBarWithAction } from '../../../components/progressbar';
import { ClassContent, QuizContent } from '../../../components/overview';



const Overview = () => { 
  const [activeTab, setActiveTab] = useState<"textbook" | "video" | "exam">('textbook');
  const currentLevel = 3;
  const progress = ((currentLevel - 1) / 4) * 100;
  return (
    <Layout name='overview ' >
       <div className='w-full pl-[40px] border flex justify-between border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
                  <div>
                      <p className='text-4xl flex flex-col font-bold pt-[30px]'> Overview</p>
                      <p className='pt-[10px] pb-[15px] pl-[5px]'> Hi Emmanuel Kelvin, here's your progress today!</p>
                  </div>
                  <div className='w-[20%] flex h-[60px] pt-[40px]'>
                      <div>
                         <Leaderboard/>
                      </div>
                  <div className=" w-full p-4">
                   <div className="w-full h-5 bg-blue-200 rounded-full overflow-hidden">
                     <div
                       className="h-full bg-primaryBlue rounded-full"
                       style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
                     />
                   </div>
                 </div>
                   <p className="w-[80%] pt-[15px]"> Level: {currentLevel}</p>
                  </div>
                  </div>
                  <div className='pl-[2.9%] mt-[2%]'>
      <div className="relative w-[98%] h-[225px] bg-[#087cdf] text-white p-4 rounded-lg overflow-hidden flex gap-[290px] ">
      {/* Banner content */}
      <div className="pl-[50px]">
        <h2 className="text-3xl font-bold pt-[20px]">Upgrade to Premium & Save 40%</h2>
        <p className="w-[80%] mt-[20px] text-[16px]">
          Get unlimited access to all textbooks, live classes, and AI tutoring Limited  time offer ending soon!
        </p>

          <div className='my-[15px]'>
          <button className="w-[30%] bg-primaryYellow text-white px-4 py-2 rounded-[8px] hover:bg-blue-700 transition duration-200 cursor-pointer">
        Claim Offer
      </button>
      </div>

      </div>
      <Gift />
     </div>

     <div className='flex gap-[20px] mt-[20px]'>
          <MiniCard 
      icon={SmallVideo} 
      title="Textbooks Read" 
      value={5}
      />
        <MiniCard 
      icon={ExamTaken} 
      title="Exam Taken" 
      value={2}
      />
        <MiniCard 
      icon={StudyTime} 
      title="Study Time" 
      value={'12h 34m'}
      />
        <MiniCard 
      icon={DayStreak} 
      title="Day Streak" 
      value={'5 days'}
      />
     </div>
    
     <div className='flex gap-[30px]'>
      
      <div className="w-[60%] flex gap-[60px] mb-6">
        <div className="w-[100%] h-[320px] bg-primaryWhite p-4 rounded-[15px] shadow">
          <div className='flex px-4 justify-between'>
            <div>
               <h3 className="text-[16px] font-bold pt-[6px]">Overall performance</h3>
            </div>
            <div className='bg-primaryBlue p-[3px] rounded-[12px] text-primaryWhite'>
              <p> weekly</p>
            </div>
          </div>
          
          <div className='flex px-4 my-[22px] gap-[20px]'>
             
              <div className='w-[60%] h-[40%] rounded-[10px] bg-[#e8f1f9]'>

            <div className='flex flex-col justify-center items-center gap-[10px]  mt-[20px] mb-[10px]'>
              <p className='text-[20px] font-bold pt-[10px] text-[#106ebe]'> 70% </p>
              <p className='font-semibold'> Average Score </p>
            </div>
          </div>

          <div className='w-[60%] h-[40%] rounded-[10px] bg-[#fff6e9]'>

            <div className='flex flex-col justify-center items-center gap-[10px]  mt-[20px] mb-[10px]'>
              <p className='text-[20px] font-bold pt-[10px] text-[#ff9f23]'> 12/15 </p>
              <p className='font-semibold'> Quizzes Passed </p>
            </div>

          </div>
          </div>
            <div className='px-4 flex flex-col gap-[20px]'>
            <ProgressBar label="Physics" progress={80} currentLevel={80} />
            <ProgressBar label="Chemistry" progress={40} currentLevel={40}  color="bg-[#ffa024]" />
            <ProgressBar label="English" progress={60} currentLevel={60} />
            </div>
        </div>   
      </div>

      <div className='w-[35%]  bg-primaryWhite  mb-[20px] rounded-[15px]'>
        <p className='pl-[20px] pt-[20px] text-[20px] font-bold'> Referral Points </p>
        <div className='text-center'>
            <p className='text-[20px] pt-[60px] font-bold'> 2,400 <span className='text-[13px]'> Total points</span></p>
        <div className='flex flex-col'>
          <div className='flex gap-[30px] justify-evenly pt-[70px] text-[17px]'>
            <p> This Month</p>
            <p> +180 pts</p>
          </div>
           
          <div className='flex gap-[40px] justify-evenly pt-[30px] text-[17px]'>
             <p> Referral </p>
            <p> 3 Active </p>
          </div>
        </div>
        </div>
       

      </div>

      
     </div>

      {/* Main Content Row */}
      <div className="w-full flex gap-[30px]">
        <div className="w-[60%] bg-primaryWhite p-[20px] rounded-[20px] shadow">
          <div className='flex justify-between px-4 font-bold'>
              <p> Upcoming Quiz</p>
          <p className='text-primaryBlue underline cursor-pointer'> See All</p> 
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
        <div className="w-[35%] bg-primaryWhite p-4 rounded-[15px] shadow">
          <div className='flex justify-between px-4'>
             <h3 className="text-[16px] font-bold">Leaderboard</h3>
          <button className="mt-2 text-primaryBlue font-bold underline text-[16px]">See All</button>
          </div>
          <div className='my-[20px] w-[80%] ml-[18px]'>
            <p > Top Performance this week based on quiz scores and study time</p>
          </div>
         
          <div className="mt-4 px-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-5">
                <Rank1 />
                <span className="font-bold">Emmanuel Kelvin</span>
              </div>
              <div className='flex gap-[10px]'>
                <p> Lvl 12</p>
                <UpperTriangle />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-5">
                <Rank2 />
                <span className="font-bold">John Yemi</span>
              </div>
               <div className='flex gap-[10px]'>
                <p> Lvl 10</p>
                <UpperTriangle />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-5">
                <Rank3 />
                <span className="font-bold">King Ammy</span>
              </div>
               <div className='flex gap-[10px]'>
                <p> Lvl 09</p>
                <DownTriangle />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-5">
                <Rank4/>
                <span className="font-bold">Martins Bush</span>
              </div>
               <div className='flex gap-[10px]'>
                <p> Lvl 05</p>
                <UpperTriangle />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-[30px]'>

         <div className="bg-primaryWhite p-4 rounded-[15px] shadow w-[55%] mt-[30px] mb-[120px]">
          <div className='mb-[20px]'>
            <p className='text-[17px] font-bold'> Continue Learning</p>
            <p className='text-[14px] py-[8px]'> Pick up where you left off </p>
          </div>
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200">
        <button
          className={`px-4 py-2 text-[17px] font-bold cursor-pointer ${
            activeTab === "textbook"
              ? "border-b-2 border-primaryBlue text-primaryBlue"
              : " hover:text-primaryBlue"
          }`}
          onClick={() => setActiveTab("textbook")}
        >
          Textbook
        </button>
        <button
          className={`px-4 py-2 text-[17px] font-bold cursor-pointer ${
            activeTab === "video"
              ? "border-b-2 border-primaryBlue text-primaryBlue"
              : "hover:text-primaryBlue "
          }`}
          onClick={() => setActiveTab("video")}
        >
          Video Tutorials
        </button>
         <button
          className={`px-4 py-2 text-[17px] font-bold cursor-pointer ${
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
          <div className='px-4 flex flex-col'>
               <ProgressBarWithAction
                  label="Biology"
                  progress={20}
                  color='bg-[#ffa024]'
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
                  color='bg-[#ffa024]'
                  currentLevel={60}
                  buttonText="Continue Reading"
                  onButtonClick={() => alert("Continue Physics")}
                 />
                 <ProgressBarWithAction
                  label="Mathematics"
                  progress={80}
                  currentLevel={80}
                  buttonText="Continue Reading"
                  onButtonClick={() => alert("Continue Physics")}
                 />
            </div>
        )}

        {activeTab === "video" && (
        <div className='px-4 flex flex-col'>
               <ProgressBarWithAction
                  label="Biology"
                  progress={20}
                  color='bg-[#ffa024]'
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
         <div className='px-4 flex flex-col'>
               <ProgressBarWithAction
                  label="Biology"
                  progress={20}
                  color='bg-[#ffa024]'
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
                  color='bg-[#ffa024]'
                  buttonText="Continue Reading"
                  onButtonClick={() => alert("Continue Physics")}
                 />
                 <ProgressBarWithAction
                  label="Mathematics"
                  progress={80}
                  currentLevel={80}
                  buttonText="Continue Reading"
                  onButtonClick={() => alert("Continue Physics")}
                 />
            </div>
        )}
      </div>
    </div>

    <div className='w-[40%] h-[463px] mt-[30px] bg-primaryWhite rounded-[15px]'>
       <div className='flex justify-between px-6 font-bold pt-[20px]'>
              <p> Upcoming Quiz</p>
          <p className='text-primaryBlue underline cursor-pointer pr-2'> See All</p> 
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
      /> <ClassContent 
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
  )
}

export default Overview