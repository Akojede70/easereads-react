import React from 'react'
import Layout from '../../components/layout/layout'
// @ts-expect-error -> typescript not included in the library for progress-bar
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { Dot, ExamIcon, ExpiredIcon, ReferralIcon, StreakIcon, TextbookIcon, VideoIcon, Gift, SmallVideo, ExamTaken, DayStreak, StudyTime } from '../../assets/icon';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Harmonic } from '../../assets/images';
import MiniCard from '../../components/card/card';
import Button from '../../components/shared/button';

const overview = () => {

  const textValue = 20; 
  const textPercentage = (textValue / 10) * 10;
  
  const videoValue = 50; 
  const videoPercentage = (videoValue / 10) * 10;

  const examValue = 90; 
  const examPercentage = (examValue / 10) * 10;
  
  return (
    <Layout name='overview ' >
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
      {/* over all performance */}
    <div className=" mt-[20px] bg-gray-100 min-h-screen">
     
     <div className='flex gap-[20px]'>
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
    

      <div className="w-[90%] flex gap-[60px] mb-6">
        <div className="w-[90%] bg-primaryWhite p-4 rounded-lg shadow">
          <h3 className="text-2xl font-bold">Overall performance</h3>
          <p className="text-[16px]">Subject, Video and exam rate</p>
          
          <div className='w-[200px] my-[40px] text-[25px] font-bold mx-auto'>
        <SemiCircleProgressBar
          percentage={50}
          showPercentValue
          stroke="#106ebe" 
          strokeWidth={30} 
        />
      </div>
        </div>

        {/* 2nd Performance Cards */}
        <div className="w-[85%] bg-primaryWhite p-4 rounded-lg shadow  gap-2">
          <div className='flex flex-col gap-[25px] mt-[5px]'>
            <div className='flex gap-[30px]'>
              <div className="flex h-[50px] w-[160px] gap-[8px] justify-center items-center bg-[#ebf7f3] rounded-[50px]">
            <TextbookIcon />
           <p className='text-[16px]'> Textbook </p> 
          </div>
          {/* textbook */}
          <div style={{ width: 50, fontWeight: "400"  }}>
               <CircularProgressbar
                 value={textPercentage}
                 text={`${textPercentage}`}
                 strokeWidth={18}
                 styles={buildStyles({
                   textColor:'#000',
                   textSize: "35px",
                   pathColor: "#25af7c",
                   trailColor: "#d9d9d9",
                   rotation: textValue / 10,
                 })}
               />
             </div>
             </div>

              <div className='flex gap-[25px] mt-[5px]'>
             <div className="flex h-[50px] w-[190px] gap-[8px] justify-center items-center bg-[#fff6e9] rounded-[50px]">
            <VideoIcon />
           <p className='text-[16px]'> Video Tutorials </p> 
          </div>
          {/* video */}
           <div style={{ width: 50, fontWeight: "400"  }}>
               <CircularProgressbar
                 value={videoPercentage}
                 text={`${videoPercentage}`}
                 strokeWidth={18}
                 styles={buildStyles({
                   textColor:'#000',
                   textSize: "35px",
                   pathColor: "#ff9f23",
                   trailColor: "#d9d9d9",
                   rotation: videoValue / 10,
                 })}
               />
             </div>
             </div>
           
          <div className='flex gap-[25px] mt-[5px]'>

           <div className="flex h-[50px] w-[190px] gap-[8px] justify-center items-center bg-[#e8f1f9] rounded-[50px]">
            <ExamIcon />
           <p className='text-[16px]'> Exam Practice </p> 
          </div>
              {/* Exams */}
          <div style={{ width: 50, fontWeight: "400"  }}>
               <CircularProgressbar
                 value={examPercentage}
                 text={`${examPercentage}`}
                 strokeWidth={18}
                 styles={buildStyles({
                   textColor:'#000',
                   textSize: "35px",
                   pathColor: "#106ebe",
                   trailColor: "#d9d9d9",
                   rotation: examValue / 10,
                 })}
               />
             </div>
             </div>
          
          </div>
          
        </div>

        {/* 3rd Performance card */}
                {/* Resource Cards */}
        <div className="w-[100%] bg-primaryWhite p-4 rounded-lg shadow  gap-2">
          <div className='flex flex-col gap-[25px] mt-[5px]'>
            <div className='flex gap-[30px]'>
              <div className="flex h-[50px] w-[190px] gap-[8px] justify-center items-center bg-[#fff6e9] rounded-[50px]">
            <ReferralIcon />
           <p className='text-[16px]'> Referral Points </p> 
          </div>
          {/* referrals */}
          <div style={{ width: 50, fontWeight: "400"  }}>
               <CircularProgressbar
                 value={textPercentage}
                 text={`${textPercentage}`}
                 strokeWidth={18}
                 styles={buildStyles({
                   textColor:'#000',
                   textSize: "35px",
                   pathColor: "#25af7c",
                   trailColor: "#d9d9d9",
                   rotation: textValue / 10,
                 })}
               />
             </div>
             </div>

              <div className='flex gap-[25px] mt-[5px]'>
             <div className="flex h-[50px] w-[160px] gap-[8px] justify-center items-center bg-[#ffe6e6] rounded-[50px]">
            <ExpiredIcon />
           <p className='text-[16px]'> Expired </p> 
          </div>
          {/* expired */}
           <div style={{ width: 50, fontWeight: "400"  }}>
               <CircularProgressbar
                 value={videoPercentage}
                 text={`${videoPercentage}`}
                 strokeWidth={18}
                 styles={buildStyles({
                   textColor:'#000',
                   textSize: "35px",
                   pathColor: "#ff9f23",
                   trailColor: "#d9d9d9",
                   rotation: videoValue / 10,
                 })}
               />
             </div>
             </div>
           
          <div className='flex gap-[25px] mt-[5px]'>

           <div className="flex h-[50px] w-[190px] gap-[8px] justify-center items-center bg-[#fff5e6] rounded-[50px]">
            <StreakIcon />
           <p className='text-[16px]'> Streaks day </p> 
          </div>
            {/* expired */}
          <div style={{ width: 50, fontWeight: "400"  }}>
               <CircularProgressbar
                 value={examPercentage}
                 text={`${examPercentage}`}
                 strokeWidth={18}
                 styles={buildStyles({
                   textColor:'#000',
                   textSize: "35px",
                   pathColor: "#106ebe",
                   trailColor: "#d9d9d9",
                   rotation: examValue / 10,
                 })}
               />
             </div>
             </div>
          </div>
        </div>
      </div>

      {/* Main Content Row */}
      <div className="w-[80%] flex">
        {/* Upcoming Quiz */}
        <div className="w-[70%] bg-primaryWhite p-[20px] rounded-lg shadow">
          <div className='flex gap-[30px]'>
              <p> Upcoming Quiz</p>
          <p> See All</p>
          </div>
          <div className='flex gap-[10px]'>

             <div>
            <img src={Harmonic} />
          </div>
          <div className='flex flex-col gap-[10px]'>
            <div>
          <h2 className='text-[18px]'> Simple Harmonic Motion Quiz </h2>
            </div>
              <div className='flex gap-[15px]'>
                <button className='w-[120px] bg-[#ff9f23] p-2 rounded-[10px] text-primaryWhite'>Physics</button>
            <Dot /> <p> 20 Mins</p>
          <p> 20 Questions</p>
          </div>

          <div>
            <p> 15th Oct, 2025 <span className='pl-[10px]'> 12:00pm</span></p>
          </div>
          </div>
          <div className='w-[25%]'>
              <Button>
            Join Quiz
           </Button>
          </div>

          </div>
         
        </div>

        {/* Leaderboard */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-600">Leaderboard</h3>
          <button className="mt-2 text-blue-600 text-sm">See All</button>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="https://via.placeholder.com/30" alt="Avatar" className="w-8 h-8 rounded-full" />
                <span className="text-gray-600">Emmanuel Kelvin</span>
              </div>
              <span className="text-green-600">Lvl 12 <span className="text-green-600">▲</span></span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="https://via.placeholder.com/30" alt="Avatar" className="w-8 h-8 rounded-full" />
                <span className="text-gray-600">John Yemi</span>
              </div>
              <span className="text-green-600">Lvl 10 <span className="text-green-600">▲</span></span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="https://via.placeholder.com/30" alt="Avatar" className="w-8 h-8 rounded-full" />
                <span className="text-gray-600">King Ammy</span>
              </div>
              <span className="text-red-600">Lvl 9 <span className="text-red-600">▼</span></span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="https://via.placeholder.com/30" alt="Avatar" className="w-8 h-8 rounded-full" />
                <span className="text-gray-600">Martins Bush</span>
              </div>
              <span className="text-green-600">Lvl 5 <span className="text-green-600">▲</span></span>
            </div>
          </div>
        </div>

        
      </div>

      {/*  */}
      {/* Progress Bars and Upcoming Classes */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between mb-4">
            <h3 className="text-sm text-gray-600">Textbook</h3>
            <h3 className="text-sm text-gray-600">Video Tutorials</h3>
            <h3 className="text-sm text-gray-600">Exam Practice</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">Biology</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-orange-400 rounded-full" style={{ width: '20%' }}></div>
              </div>
              <span className="text-gray-600 text-sm">20%</span>
              <button className="bg-blue-600 text-white px-2 py-1 rounded-lg text-sm hover:bg-blue-700 transition duration-200">
                Continue Reading
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">Chemistry</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <span className="text-gray-600 text-sm">40%</span>
              <button className="bg-blue-600 text-white px-2 py-1 rounded-lg text-sm hover:bg-blue-700 transition duration-200">
                Continue Reading
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">Chemistry</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-orange-400 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <span className="text-gray-600 text-sm">40%</span>
              <button className="bg-blue-600 text-white px-2 py-1 rounded-lg text-sm hover:bg-blue-700 transition duration-200">
                Continue Reading
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">Biology</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <span className="text-gray-600 text-sm">80%</span>
              <button className="bg-blue-600 text-white px-2 py-1 rounded-lg text-sm hover:bg-blue-700 transition duration-200">
                Continue Reading
              </button>
            </div>
          </div>
          <h3 className="mt-6 text-sm text-gray-600">Upcoming classes</h3>
          <button className="mt-2 text-blue-600 text-sm">See All</button>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Physic</span>
                <span className="text-blue-600 text-sm">20 Mins</span>
              </div>
              <p className="text-gray-500 text-xs">15th Oct, 2025 12:00 pm</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Join Class
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">Physic</span>
                <span className="text-blue-600 text-sm">20 Mins</span>
              </div>
              <p className="text-gray-500 text-xs">15th Oct, 2025 12:00 pm</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Join Class
              </button>
            </div>
          </div>
        </div>
    </div>
    </Layout>
  )
}

export default overview