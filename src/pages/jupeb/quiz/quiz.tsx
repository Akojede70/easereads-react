import React, {  useEffect, useState } from 'react'
import Layout from '../../../components/layout/layout'
import { QuizIcon, RedStreakIcon, QuizIcon1, QuizIcon2, LeaderboardPics, FirstTag, SecondTag, ThirdTag, UpperBoldTriangle, DownBoldTriangle, Cup,  } from '../../../assets/icon'
import { Button, Modal } from '../../../components/shared'
import { ChallengeCard, LeaderboardCard, LongCard, QuizChallengeCard } from '../../../components/card'
import { useSelector } from 'react-redux'
import { Helper } from '../../../components';
import type { ReduxStore } from '../../../redux/store'
import { Services } from '../../../service'
import type { LeaderboardUser } from '../../../types/overview'
import type { QuizData, QuizHistoryItem } from '../../../types/quiz'

const {   ComponentLoader  } = Helper;

const Quiz = () => {
     const userId = useSelector((state: ReduxStore) => state.auth.userId);
     const [activeTab, setActiveTab] = useState("available");
     const [performanceOpen, setPerformanceOpen] = useState(false);
     const icons = [<QuizIcon />, <QuizIcon1 />, <QuizIcon2 />];
      const colors = ["#ffc67d", "#4cb851", "#ffffff", ];
      const subjectColor = ["#000", "#fff", "#106EBE"]
     // types.ts (optional)


     const [availableQuizData, setAvailableQuizData] = useState<QuizData[]>([])
     const [historyData, setHistoryData] = useState<QuizHistoryItem[]>([])
     const [leaderBoardInformation, setLeaderBoardInformation] = useState<LeaderboardUser[]>([]);
     
    const [loading, setLoading] = useState({
      availableQuiz: false,
      history: false,
      leaderBoard: false
    })

            const fetchAvailableQuizData = async () => {
          if (!userId) return;
          try {
            setLoading(prev => ({ ...prev, availableQuiz: true }));
            const response = await Services.quiz.fetchAvailableQuiz(userId);
            setAvailableQuizData(response?.data || []);
          } catch (error) {
            void error;
          } finally {
            setLoading(prev => ({ ...prev, availableQuiz: false }));
          }
        };

        const fetchHistoryQuizData = async () => {
          if (!userId) return;
          try {
            setLoading(prev => ({ ...prev, history: true }));
            const response = await Services.quiz.fetchHistory(userId);
            setHistoryData(response?.data || []);
          } catch (error) {
            void error;
          } finally {
            setLoading(prev => ({ ...prev, history: false }));
          }
        };
  
      const leaderboard = async () => {
         if (!userId) return;
          try {
            setLoading(prev => ({ ...prev, leaderboard: true }));
            const response = await Services.quiz.leaderboard();
            setLeaderBoardInformation(response?.data || []);
          } catch (error) {
            void error;
          } finally {
            setLoading(prev => ({ ...prev, leaderboard: false }));
          }
      }

      useEffect (() => {
        if (userId) {
          fetchAvailableQuizData()
        }
      }, [userId])

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

        
    <div className="p-6">
      <button
        onClick={() => setPerformanceOpen(true)}
        className="px-2 py-2 bg-primaryBlue text-white rounded-lg cursor-pointer"
      >
        2nd Modal
      </button>

      <Modal open={performanceOpen} onClose={() => setPerformanceOpen(false)} className="w-[95%] md:w-[90%] lg:w-[30%]">
        <div className='flex flex-col items-center justify-center gap-[20px] mt-[5%] mb-[5%]'>
        <Cup />
        <p className='text-3xl font-bold text-[#333333]'> Keep Practicing </p>
        <div className='text-[17px] w-full text-[#333333] leading-[25px]'>
          <div className='flex gap-[20px] my-[3%]'>
            <div className='bg-[#e8f1f9] w-[50%] rounded-[10px] text-center py-[5%] flex flex-col gap-[20px]'>
              <p className='text-[25px] font-bold text-primaryBlue'> 80% </p>
              <p> Score</p>
            </div>
             <div className='bg-[#fff6e9] w-[50%] rounded-[10px] text-center py-[5%] flex flex-col gap-[20px]'>
              <p className='text-[25px] font-bold text-[#ff9f23]'> 10% </p>
              <p> Correct </p>
            </div>
          </div>
             <div className='flex flex-col gap-[10px] mt-[30px]'>
           <Button type='submit'> Take another Quiz </Button>
        <Button variant='outline' type='submit' textColor='#106EBE'> Watch Tutorial</Button>
        </div>
       
        </div>
        </div>
      </Modal>
    </div>

          
          <div className="w-full">
      {/* Tab Buttons */}
      <div className="bg-[#e0e0e0] mt-[20px] w-[85%] lg:w-[95%] flex flex-col lg:flex-row gap-[40px] lg:gap-[30px] ml-[5%] lg:ml-[2%] h-[200px] lg:h-[100px] rounded-[20px] justify-center items-center">
        <div className="w-[60%] lg:w-[350px] pt-[7%] md:pt-0">
          <Button
             color='bg-[#f5f5f5]'
            textColor='text-[#333333]'
            // onClick={() => setActiveTab("available")}
             onClick={() => {
            setActiveTab("available");
            if (availableQuizData.length === 0 && userId) {
              void fetchAvailableQuizData();
            }
          }}
            className={`font-bold text-[16px] rounded-xl ${
              activeTab === "available" ? "bg-primaryBlue text-white" : ""
            }`}
          >
            Available Quiz
          </Button>
        </div>

        <div className="w-[60%] lg:w-[350px]">
          <Button
             color='bg-[#f5f5f5]'
            textColor='text-[#333333]'
            onClick={() => {
            setActiveTab("history");
            if (historyData.length === 0 && userId) {
              void fetchHistoryQuizData();
            }
          }}
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
            onClick={() => {
            setActiveTab("leaderboard");
            if (leaderBoardInformation.length === 0 && userId) {
              void leaderboard();
            }
          }}
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
        {activeTab === "available" && (
        
        <div>

          {loading.availableQuiz ? (
            <ComponentLoader />
  ) : availableQuizData && availableQuizData?.length > 0 ? (
    availableQuizData.map((quiz, index) => (
      <ChallengeCard
        key={quiz._id || index}
        icon={icons[index % icons.length]}  
        title={quiz.topics}
        description={`Test your ${quiz.title} knowledge with today's challenge`}
        badgeText={quiz.title}
         badgeColor={colors[index % colors.length]}
        participants={quiz.participants || 0}
        questions={quiz.totalQuestion || 0}
        time={`${quiz.timePeriod || 0} mins`}
        subjectTextColor={subjectColor [index % subjectColor?.length]}
        date={new Date(quiz.createdAt).toLocaleDateString('en-GB', {
          weekday: 'long',
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })}
        subjectBorder={
         index === colors.length - 1 ? "1px solid #106EBE" : undefined
          }
            />
          ))
        ) : (
          <p className='text-center'>No quizzes available</p>
        )} 
           </div>
        )}

        {activeTab === "history" && (
           
             <div>
              {loading.history ? (
      <ComponentLoader />
    ) : historyData && historyData?.length > 0 ? (
      historyData.map((item, index) => (
        <QuizChallengeCard
          key={item.attemptId}
          icon={icons[index % icons.length]} // You can rotate icons like before if you want
          title={item.title}
          description={`Test your ${item.title} knowledge with today's Challenge`}
          participants={item.participants}
          questions={item.questions}
          time="15 mins"  // or calculate from item.timePeriod if available
          date={new Date(item.createdAt).toLocaleDateString('en-GB', {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
          accuracyPercentage={`${Math.ceil((parseFloat(item.percentage)))}%`}
          accuracyTextColor={parseFloat(item.percentage) >= 50 ? "#4cb851" : "#d32f2f"}
        />
      ))
    ) : (
      <p className='text-center'>No quiz history available</p>
    )}
           </div>

        )}

        {activeTab === "leaderboard" && (
          <div>

             <div className='w-[900px] mx-auto md:w-full flex flex-col lg:flex-row items-center justify-center gap-[20px]'>
                      {
                        loading.leaderBoard ? <ComponentLoader  />  : leaderBoardInformation && leaderBoardInformation.slice(0, 2).map((item, index) => (
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
        )}
      </div>
    </div>
        
    </Layout>

    </div>
  )
}

export default Quiz