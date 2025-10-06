import React, { useEffect, useState } from 'react'
import { BackButton, Button, Modal } from '../../../components/shared'
import {  Congratulations, DownBoldTriangle, FirstTag, LeaderboardPics, Performance, Ring, SecondTag, Star, ThirdTag, UpperBoldTriangle } from '../../../assets/icon';
import { LeaderboardCard, LongCard } from '../../../components/card';
import { useNavigate } from 'react-router-dom';
import { Services } from '../../../service';
import { Helper } from '../../../components';
import type { LeaderboardUser } from '../../../types/overview';

const {   Spinner  } = Helper;

const Leaderboard = () => {
        const navigate = useNavigate()
        const [open, setOpen] = useState(false);
        const [performanceOpen, setPerformanceOpen] = useState(false);
        const [quizOpen, setQuizOpen] = useState(false);
        const [liveClassOpen, setLiveClassOpen] = useState(false);
        const [rateOpen, setRateOpen] = useState(false);

        const [leaderBoardInformation, setLeaderBoardInformation] = useState<LeaderboardUser[]>([]);
        console.log('leaderBoardInformation', leaderBoardInformation)
        const [loading, setLoading] = useState(false);

        const handleGoBack = () => {
           navigate(-1); 
        };

         useEffect(() => {
         const leaderBoardDisplay = async ( ) => {
           try {
             setLoading(true)
             const response = await Services.overview.leaderboard();
             setLeaderBoardInformation(response?.data);             
           } catch (error) { 
             void error;
           } finally {
             setLoading(false)
          }
         };
          leaderBoardDisplay();
         }, []);

  return (
    <div className='w-full '>
        <div 
        onClick={handleGoBack}
        className='w-[900px] md:w-full bg-primaryWhite h-[140px] md:h-[80px] pt-[40px] md:pt-[15px] pl-[30%] md:pl-[13%] border-t border-b flex justify-between border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
          <BackButton className='hover:bg-primaryBlue hover:text-primaryWhite hover:border-none'/>
      </div>
      <div className='w-[900px] md:w-full h-[1800px] md:h-full bg-[#f5f5f5]'>

      <div className='text-[30px] md:text-[24px] font-bold ml-[13.5%] pt-[2%]'>
        <p > Leaderboard</p>

        <div className='flex'>

        <div className="p-6">
      <button
        onClick={() => setOpen(true)}
        className="px-2 py-2 bg-primaryBlue text-white rounded-lg cursor-pointer"
      >
        1st Modal
      </button>

      <Modal open={open} onClose={() => setOpen(false)} className="w-[95%] md:w-[90%] lg:w-[45%]">
        <div className='flex flex-col items-center justify-center gap-[20px] mt-[15%] mb-[10%]'>
        <Congratulations />
        <p className='text-3xl font-bold text-[#333333]'> Congratulations </p>
        <div className='text-center text-[17px] w-full text-[#333333] leading-[25px]'>
           <p> You have free access to their three subject combination textbook,</p>
        <p> past question and answers and Exam practice access</p>
        </div>
        </div>
      </Modal>
    </div>

    <div className="p-6">
      <button
        onClick={() => setPerformanceOpen(true)}
        className="px-2 py-2 bg-primaryBlue text-white rounded-lg cursor-pointer"
      >
        2nd Modal
      </button>

      <Modal open={performanceOpen} onClose={() => setPerformanceOpen(false)} className="w-[95%] md:w-[90%] lg:w-[45%]">
        <div className='flex flex-col items-center justify-center gap-[20px] mt-[5%] mb-[5%]'>
        <Performance />
        <p className='text-3xl font-bold text-[#333333]'> weekly performance </p>
        <div className='text-[17px] w-full text-[#333333] leading-[25px]'>
           <p> Hey Samuel You Practiced <span className='text-primaryBlue font-bold'> 12 question,</span> 2 hours to read and watch tutorial videos this week.</p>
        <p className='mt-[20px]'> The ongoing top performer did 103 questions, 4 hours to read/video. want to boost your score?</p>
        <div className='flex flex-col gap-[10px] mt-[30px]'>
           <Button type='submit'> Continue Reading</Button>
        <Button type='submit'> Watch Tutorial</Button>
        <Button type='submit'> Practice More</Button>
        </div>
       
        </div>
        </div>
      </Modal>
    </div>

     <div className="p-6">
      <button
        onClick={() => setQuizOpen(true)}
        className="px-2 py-2 bg-primaryBlue text-white rounded-lg cursor-pointer"
      >
        3rd Modal
      </button>

       <Modal open={quizOpen} onClose={() => setQuizOpen(false)} className="w-[95%] md:w-[90%] lg:w-[45%]">
        <div className='flex flex-col items-center justify-center gap-[20px] mt-[7%] mb-[10%]'>
        <Ring />
        <p className='text-3xl font-bold text-[#333333]'> Weekly Quiz Challenge Alert </p>
        <div className='text-center text-[17px] w-full text-[#333333] leading-[25px]'>
           <p> Time's ticking-join the challenge before Sunday ends!</p>
        </div>
        <div className='w-[80%] mt-[20px]'>
           <Button type='submit'>  Take Quiz </Button>
        </div>
        </div>
      </Modal>
    </div>

    <div className="p-6">
      <button
        onClick={() => setLiveClassOpen(true)}
        className="px-2 py-2 bg-primaryBlue text-white rounded-lg cursor-pointer"
      >
        4th Modal
      </button>

       <Modal open={liveClassOpen} onClose={() => setLiveClassOpen(false)} className="w-[95%] md:w-[90%] lg:w-[45%]">
        <div className='flex flex-col items-center justify-center gap-[20px] mt-[7%] mb-[10%]'>
        <Ring />
        <p className='text-3xl font-bold text-[#333333]'> Live Class Countdown  <span className='text-[30px] text-primaryBlue'> - 7 Days Left! </span> </p>
        <div className='text-center text-[17px] w-full text-[#333333] leading-[25px]'>
           <p> Our next Live Kicks off in just 7 days and we'd hate for you to miss the opportunity to learn, connect, and level up. </p>
        </div>
        <div className='w-[80%] mt-[20px]'>
           <Button type='submit' className='text-[19px]'>  Subscribe Now </Button>
        </div>
        </div>
      </Modal>
    </div>

     <div className="py-6">
      <button
        onClick={() => setRateOpen(true)}
        className="px-2 py-2 bg-primaryBlue text-white rounded-lg cursor-pointer"
      >
        5th Modal
      </button>

       <Modal open={rateOpen} onClose={() => setRateOpen(false)} className="w-[95%] md:w-[90%] lg:w-[45%]">
        <div className='mt-[30px] px-4'>
          <p> Rate & Review </p>
          <div className='flex gap-[10px] my-[20px]'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <button className=' w-[80px] text-[17px] ml-[40px] rounded-[25px] bg-primaryYellow'> 5 Star </button>
          </div>
          <p className='text-[17px] my-[20px]'> Review your Experience </p>
          <div>
            <textarea 
            className='w-full bg-[#f5f5f5] text-[15px] border border-[#d5d5d5] rounded-[10px] h-[180px] p-[10px]' 
            placeholder='Typing...'></textarea>

            <div className='w-full mt-[20px]'>
           <Button type='submit' className='text-[19px]'>  Submit </Button>
        </div>
          </div>
        </div>
      </Modal>
    </div>
        </div>

      </div>
        
        <div className='w-[900px] mx-auto md:w-full flex flex-col lg:flex-row items-center justify-center gap-[20px]'>
          {
            loading ? <Spinner top={22} /> : leaderBoardInformation && leaderBoardInformation.slice(0, 2).map((item, index) => (
              <LeaderboardCard
              key={index} 
              avatar={<LeaderboardPics />}
              name={item.name}
              level={item.level}
              tag={ index === 0 ? <FirstTag /> : index === 1 ? <SecondTag /> : index === 2 ? <ThirdTag /> : <div className='w-[70px] h-[30px] bg-[#E0E0E0] rounded-[5px] flex items-center justify-center'><p className='text-[14px] font-bold text-[#333333]'>{index + 1}th</p></div>}
              progress={item.level}
              rankLabel={ index === 0 ? "1st" : index === 1 ? "2nd" : index === 2 ? "3rd" : `${index + 1}th`}
            />
            ))
          }
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
       </div>     
  )
}

export default Leaderboard