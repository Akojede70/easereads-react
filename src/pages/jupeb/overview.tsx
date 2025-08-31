import React from 'react'
import Layout from '../../components/layout/layout'
// import SemiCircleProgressBar from "react-progressbar-semicircle";
import { Dot, 
  // ExamIcon, 
  // ExpiredIcon, ReferralIcon, StreakIcon, 
  // TextbookIcon, 
  // VideoIcon,
   Gift, SmallVideo, ExamTaken, DayStreak, StudyTime } from '../../assets/icon';
import { 
  // CircularProgressbar, 
  // buildStyles 
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Harmonic } from '../../assets/images';
import MiniCard from '../../components/card/card';
import Button from '../../components/shared/button';

const overview = () => {

  // const textValue = 20; 
  // // const textPercentage = (textValue / 10) * 10;
  
  // const videoValue = 50; 
  // const videoPercentage = (videoValue / 10) * 10;

  // const examValue = 90; 
  // const examPercentage = (examValue / 10) * 10;

  const currentLevel = 3;
  const progress = ((currentLevel - 1) / 4) * 100;
  
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
            <div className='px-4 flex flex-col gap-[15px]'>
              <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-[17px]">Physics</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-primaryBlue rounded-full" style={{ width: '20%' }}></div>
              </div>
              <span className="text-gray-600 text-sm">20%</span>
            </div>

             {/* <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-[17px]">Chemistry</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-orange-400 rounded-full" style={{ width: '20%' }}></div>
              </div>
              <span className="text-gray-600 text-sm">20%</span>
            </div> */}
            <div className='w-[70%] flex h-[60px] pt-[40px]'>
                
            <div className=" w-full p-4">
             <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
               <div
                 className="h-full bg-primaryBlue rounded-full"
                 style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
               />
             </div>
           </div>
             <p className="w-[80%] pt-[15px]"> Level: {currentLevel}</p>
            </div>

             {/* <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-[17px]">English</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-primaryBlue rounded-full" style={{ width: '20%' }}></div>
              </div>
              <span className="text-gray-600 text-sm">20%</span>
            </div> */}
            </div>
        </div>   
      </div>

      <div className='w-[20%] text-[20px] border bg-primaryWhite font-bold mb-[20px] rounded-[15px]'>
        <p> Referral Points </p>
        <p> 2,400 <span> Total points</span></p>
        <div className='flex flex-col'>
          <div className='flex gap-[30px]'>
            <p> This Month</p>
            <p> +180 pts</p>
          </div>
           
          <div className='flex gap-[40px]'>
             <p> Referral </p>
            <p> 3 Active </p>
          </div>
        </div>

      </div>

      
     </div>

      {/* Main Content Row */}
      <div className="w-[80%] flex">
        Upcoming Quiz
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