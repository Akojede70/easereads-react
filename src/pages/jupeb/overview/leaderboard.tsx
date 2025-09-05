import React from 'react'
import Layout from '../../../components/layout/layout'
import { BackButton } from '../../../components/shared'
import {  FirstTag, LeaderboardPics, SecondTag, ThirdTag, UpperBoldTriangle } from '../../../assets/icon';
import { LeaderboardCard, LongCard } from '../../../components/card';

const Leaderboard = () => {

  return (
   <Layout>
    <div>
        <div className='w-full bg-primaryWhite h-[80px] pt-[15px] pl-[13%] border-t border-b flex justify-between border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
          <BackButton />
      </div>
      <div className='text-[24px] font-bold ml-[13%] mt-[2%]'>
        <p > Leaderboard</p>
      </div>
        
        <div className='flex items-center justify-center gap-[20px]'>
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

        <div className='flex  mb-[100px] flex-col items-center justify-center'>
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
               IconComponent={<UpperBoldTriangle />}
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
               IconComponent={<UpperBoldTriangle />}
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
     
   </Layout>
  )
}

export default Leaderboard