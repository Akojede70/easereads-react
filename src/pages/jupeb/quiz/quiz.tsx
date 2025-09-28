import React, { useState } from 'react'
import Layout from '../../../components/layout/layout'
import { QuizIcon, RedStreakIcon, QuizIcon1, QuizIcon2, LeaderboardPics, FirstTag, SecondTag, ThirdTag, UpperBoldTriangle, DownBoldTriangle } from '../../../assets/icon'
import { Button } from '../../../components/shared'
import { ChallengeCard, LeaderboardCard, LongCard, QuizChallengeCard } from '../../../components/card'

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
      <div className="mt-[30px] mb-[140px]">
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
                <ChallengeCard
                 icon={<QuizIcon1 />}  
                 title="Chemistry Quick Quiz"
                 description="Quick chemistry concepts review"
                 badgeText="Chemistry"
                 badgeColor="#4cb851"
                 participants={10}
                 questions={10}
                 time="15mins"
                 date="Friday Sep 26th, 2025"
                 subjectTextColor='#fff'
               />
                <ChallengeCard
                 icon={<QuizIcon2 />}  
                 title="Maths Lightning Round"
                 description="Quick maths concepts review"
                 badgeText="Maths"
                 badgeColor="#fff"
                 participants={10}
                 questions={10}
                 time="15mins"
                 date="Friday Sep 26th, 2025"
                 subjectBorder='1px solid #106EBE'
                 subjectTextColor='#106EBE'
               />
           </div>
        )}

        {activeTab === "history" && (
           
             <div>
            <QuizChallengeCard
                 icon={<QuizIcon />}  
                 title="Chemistry Basics"
                 description="Test your Physics knowledge with today's Challenge"
                 participants={10}
                 questions={10}
                 time="15mins"
                 date="Today"
                 accuracyPercentage="80%"
                 accuracyTextColor="#4cb851"
               />
                <QuizChallengeCard
                 icon={<QuizIcon1 />}  
                 title="Chemistry Basics"
                 description="Test your Physics knowledge with today's Challenge"
                 participants={10}
                 questions={10}
                 time="15mins"
                 date="Yesterday"
                 accuracyPercentage="80%"
                 accuracyTextColor="#d32f2f"
               />
           </div>

        )}

        {activeTab === "leaderboard" && (
          <div>
           <div className=' w-[900px] mx-auto md:w-full flex flex-col lg:flex-row items-center justify-center gap-[20px]'>
          <LeaderboardCard
        avatar={<LeaderboardPics />}
        name="Emmanuel 28"
        level={12}
        tag={<FirstTag />}
        progress={70}
        rankLabel="1st"
      />
       <LeaderboardCard
        avatar={<LeaderboardPics />}
        name="Emmanuel 28"
        level={12}
        tag={<SecondTag />}
        progress={70}
        rankLabel="1st"
      />
       <LeaderboardCard
        avatar={<LeaderboardPics />}
        name="Emmanuel 28"
        level={12}
        tag={<ThirdTag />}
        progress={70}
        rankLabel="1st"
      />

     
        </div>
         <div className='flex  md:pb-[90px] mt-[30px] flex-col gap-[20px] items-center justify-center'>
              <LongCard
               name="Emmanuel"
               age={28}
               progress={20}
               currentLevel={20}
               level={9}
               rank="2nd"
               PicComponent={<LeaderboardPics />}
               IconComponent={<UpperBoldTriangle />}
        />
         <LongCard
               name="Emmanuel"
               age={28}
               progress={40}
               currentLevel={40}
               level={9}
               rank="2nd"
               PicComponent={<LeaderboardPics />}
               IconComponent={<DownBoldTriangle />}
        />
         <LongCard
               name="Emmanuel"
               age={28}
               progress={60}
               currentLevel={60}
               level={9}
               rank="2nd"
               PicComponent={<LeaderboardPics />}
               IconComponent={<UpperBoldTriangle />}
        />
         <LongCard
               name="Emmanuel"
               age={28}
               progress={80}
               currentLevel={80}
               level={9}
               rank="2nd"
               PicComponent={<LeaderboardPics />}
               IconComponent={<DownBoldTriangle />}
        />
         <LongCard
               name="Emmanuel"
               age={28}
               progress={100}
               currentLevel={100}
               level={9}
               rank="2nd"
               PicComponent={<LeaderboardPics />}
               IconComponent={<UpperBoldTriangle />}
        />
            </div>
        </div>
        )}
      </div>
    </div>
        
    </Layout>

    </div>
  )
}

export default Quiz