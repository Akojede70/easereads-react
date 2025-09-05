import React from 'react'
import Layout from '../../../components/layout/layout'
import { BackButton } from '../../../components/shared'
import {  FirstTag, LeaderboardPics, SecondTag, ThirdTag } from '../../../assets/icon';
import { LeaderboardCard } from '../../../components/card';

const Leaderboard = () => {
const currentLevel = 50; 
const totalLevels = 100; // 10 levels = 100%

const progress = ((currentLevel - 1) / totalLevels) * 100;

;

  return (
   <Layout>
    <div>
        <div className='w-full bg-primaryWhite h-[80px] pt-[15px] pl-[40px] border-t border-b flex justify-between border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
          <BackButton />
      </div>
      <div className='text-2xl font-bold'>
        <p > Leaderboard</p>
      </div>
        
        <div className='flex gap-[20px]'>
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

        <div>
          <div
      className='w-[80%] pl-[35px] mt-[20px] ml-[20px] mb-[20px] h-[17%] flex flex-col gap-[10px] bg-primaryWhite p-4 rounded-[20px] shadow'
    >
      <div className='flex gap-[20px]'>
          <LeaderboardPics/>
          <div className='flex'>
            <p className='font-bold text-[17px]'> Emmanuel 28 </p>
          </div>

          <div className='w-[90%] flex gap-[10px]'>
        <div className="w-[55%] h-3 mt-[5px] bg-blue-200 rounded-full overflow-hidden">
                     <div
                       className="h-full bg-primaryBlue rounded-full"
                       style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
                     />
                   </div>
                   <div>
                     <p>{currentLevel}<span>%</span></p>
                   </div>
                   <div className='font-bold text-[17px] text-primaryBlue ml-[8%]'>
                   </div>
      </div>
          
          <div className='pl-[50px]'>
            <FirstTag />
          </div>
      </div>
    </div> 
        </div>
     
    </div>
     
   </Layout>
  )
}

export default Leaderboard