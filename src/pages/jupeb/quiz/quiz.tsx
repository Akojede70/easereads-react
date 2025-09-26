import React, { useState } from 'react'
import Layout from '../../../components/layout/layout'
import { QuizIcon, RedStreakIcon } from '../../../assets/icon'
import { Button } from '../../../components/shared'
import { ChallengeCard, QuizChallengeCard } from '../../../components/card'

const Quiz = () => {

     const [activeTab, setActiveTab] = useState("subscription");

  return (
    <div>
    <Layout>
        <div className='bg-primaryWhite w-[99%] h-[15%] pt-[30px] flex justify-between ml-[4px] mt-[5px] px-[2%]'>
            <div className='flex flex-col gap-[15px]'>
           <h2 className='text-[30px] font-bold'> Quiz Hub </h2>
           <p> Change yourself with interactive Quizzes</p>
            </div>
            <div className='flex gap-[10px] pt-[25px] pr-[1%]'>
                <RedStreakIcon />
                <p> Streak </p>
                <p className='text-[23px] font-bold pl-[20px]'> 5 days</p>
            </div>
        </div>
        <div className='bg-primaryBlue rounded-[20px] text-white mx-auto w-[95%] h-[18%] pt-[30px] flex justify-between ml-[2%] mt-[1.5%] px-[2%]'>
            <div className='flex flex-col gap-[15px]'>
           <h2 className='text-[30px] font-bold'> Today's Performance </h2>
           <p> 28/35 questions correct + Average time 9m 30s </p>
            </div>
            <div className='flex flex-col gap-[10px] pt-[10px] pr-[1%]'>
                <p className='text-[35px] font-bold'> 80% </p>
                <p className=' '> Accuracy </p>
            </div>
        </div>

          
          <div className="w-full">
      {/* Tab Buttons */}
      <div className="bg-[#e0e0e0] mt-[20px] w-[85%] lg:w-[95%] flex flex-col lg:flex-row gap-[40px] lg:gap-[30px] ml-[5%] lg:ml-[2%] h-[200px] lg:h-[100px] rounded-[20px] justify-center items-center">
        <div className="w-[60%] lg:w-[350px] pt-[7%] md:pt-0">
          <Button
             color='bg-[#f5f5f5]'
            textColor='text-[#333333]'
            onClick={() => setActiveTab("subscription")}
            className={`font-bold text-[16px] rounded-xl ${
              activeTab === "subscription" ? "bg-primaryBlue text-white" : ""
            }`}
          >
            Available Quiz
          </Button>
        </div>

        <div className="w-[60%] lg:w-[350px]">
          <Button
             color='bg-[#f5f5f5]'
            textColor='text-[#333333]'
            onClick={() => setActiveTab("history")}
            className={`font-bold text-[16px] rounded-xl ${
              activeTab === "history"
                ? "bg-primaryBlue text-white"
                : ''
            }`}
          >
            History
          </Button>
        </div>

        <div className="w-[60%] lg:w-[350px]">
          <Button
            color='bg-[#f5f5f5]'
            textColor='text-[#333333]'
            onClick={() => setActiveTab("leaderboard")}
            className={`font-bold text-[16px] rounded-xl ${
              activeTab === "leaderboard"
                ? "bg-primaryBlue text-white"
                : ''
            }`}
          >
            Leader Board
          </Button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-[30px]">
        {activeTab === "subscription" && (
        
        <div>
            <ChallengeCard
                 icon={<QuizIcon />}  
                 title="Daily Physics Challenge"
                 description="Test your Physics knowledge with today's Challenge"
                 badgeText="Physics"
                 badgeColor="#ffc67d"
                 participants={10}
                 questions={10}
                 time="15mins"
                 date="Friday Sep 26th, 2025"
               />
           </div>
        )}

        {activeTab === "history" && (
           
             <div>
            <QuizChallengeCard
                 icon={<QuizIcon />}  
                 title="Daily Physics Challenge"
                 description="Test your Physics knowledge with today's Challenge"
                 badgeText="Physics"
                 badgeColor="#ffc67d"
                 participants={10}
                 questions={10}
                 time="15mins"
                 date="Friday Sep 26th, 2025"
                 accuracyPercentage="80%"
                 accuracyTextColor="#4cb851"
               />
           </div>

        )}

        {activeTab === "leaderboard" && (
          <div className="bg-primaryWhite mt-[30px] h-[200px] flex items-center justify-center rounded-[10px] ml-[2%] w-[95%]">
            <p className="text-gray-600">Leaderboard content goes here.</p>
          </div>
        )}
      </div>
    </div>
        
    </Layout>

    </div>
  )
}

export default Quiz