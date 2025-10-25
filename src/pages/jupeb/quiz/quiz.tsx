import React, {  useEffect, useState } from 'react'
import Layout from '../../../components/layout/layout'
import { QuizIcon, RedStreakIcon, QuizIcon1, QuizIcon2, LeaderboardPics, FirstTag, SecondTag, ThirdTag, UpperBoldTriangle, DownBoldTriangle  } from '../../../assets/icon'
import { Button } from '../../../components/shared'
import { ChallengeCard, LeaderBoardMiniCard, LongMiniCard, QuizChallengeCard } from '../../../components/card'
import { useSelector } from 'react-redux'
import { Helper } from '../../../components';
import type { ReduxStore } from '../../../redux/store'
import { Services } from '../../../service'
import type { LeaderboardUser } from '../../../types/overview'
import type { QuizData, QuizHistoryItem } from '../../../types/quiz'
import { useNavigate } from 'react-router-dom'

const {   ComponentLoader  } = Helper;

const Quiz = () => {
     const userId = useSelector((state: ReduxStore) => state.auth.userId);
     const [activeTab, setActiveTab] = useState("available");
     const navigate = useNavigate()
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
            setLoading(prev => ({ ...prev, leaderBoard: true }));
            const response = await Services.quiz.leaderboard();
            setLeaderBoardInformation(response?.data || []);
          } catch (error) {
            void error;
          } finally {
            setLoading(prev => ({ ...prev, leaderBoard: false }));
          }
      }

      useEffect (() => {
        if (userId) {
          fetchAvailableQuizData()
        }
      }, [userId])

  return (
    <div>
    <Layout >
      <div className='w-[88%] md:w-[91%] md-[50%] ml-[6%] md:ml-[4.5%] lg:ml-[4%]'>
        <div className='bg-primaryWhite w-full md:w-full h-[150px] md:h-[160px] lg:h-[130px] pt-[30px] flex justify-between lg:ml-[4px] mt-[20px] px-[2%]'>
            <div className='flex flex-col gap-[15px]'>
           <h2 className='text-[18px] md:text-[30px] font-bold'> Quiz Hub </h2>
           <p className='w-[68%] lg:w-full'> Change yourself with interactive Quizzes</p>
            </div>
            <div className='w-[18%] md:w-[30%] lg:w-[20%] flex flex-col gap-[8px] md:flex md:flex-row md:gap-[20px] md:pt-[25px] '>
              <div className='pt-0 md:pt-[2px] lg:pt-0 ml-[10px] md:ml-0'>
                <RedStreakIcon />
              </div>
                <p className='pt-0 md:pt-[3px] lg:pt-0'> Streak </p>
                <p className='text-[15px] md:text-[23px] font-bold lg:pl-[20px]'> 5 days</p>
            </div>
        </div>
        <div className='bg-primaryBlue rounded-[20px] text-white lg:mx-auto w-full lg:w-[95%] h-[125px] md:h-[150px] lg:h-[145px] pt-[10px] md:pt-[15px] lg:pt-[30px] flex justify-between lg:ml-[2%] mt-[5%] lg:mt-[1.5%] px-[2%]'>
            <div className='flex flex-col gap-[15px]'>
           <h2 className='text-[19px] md:text-[30px] font-bold'> Today's Performance </h2>
           <p className='w-[80%] md:w-[60%] lg:w-full'> 28/35 questions correct + Average time 9m 30s </p>
            </div>
            <div className='flex flex-col gap-[10px] pt-[0px] md:pt-[10px] pr-[1%]'>
                <p className='text-[25px] md:text-[35px] font-bold'> 80% </p>
                <p className=' '> Accuracy </p>
            </div>
        </div>
          
          <div className="w-full">
      {/* Tab Buttons */}
      <div className="bg-[#e0e0e0] mt-[20px] md:mt-[40px] w-full lg:w-[95%] flex flex-row gap-[10px] md:gap-[40px] lg:gap-[30px] lg:ml-[2%] h-[120px] lg:h-[100px] pt-[5px] md:pt-0 rounded-[20px] md:justify-center md:items-center px-[10px]">
        <div className="w-[40%] md:w-[60%] lg:w-[350px] pt-[7%] md:pt-0">
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

        <div className="pt-[35px] md:pt-0 w-[45%] md:w-[60%] lg:w-[350px]">
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

        <div className="pt-[25px] md:pt-0 w-[40%] md:w-[60%] lg:w-[350px]">
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
                title={`${quiz.period} ${quiz.title} challenge`}
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
                  onStartQuiz={() =>
                  navigate("/jupeb/quiz-question", {
                    state: {
                      quizId: quiz._id,
                    },
                  })
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
                  id={item._id}
                  key={item.attemptId}
                  icon={icons[index % icons.length]} // You can rotate icons like before if you want
                  title={item.title}
                  description={`Test your ${item.title} knowledge with ${item.period} Challenge`}
                  participants={item.participants}
                  questions={item.answers.length}
                  time={`${Math.floor(Number(item.timePeriod) / 60)} Mins` }  
                  date={new Date(item.quizDate).toLocaleDateString('en-GB', {
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

                <div className='md:mx-auto md:w-full flex flex-col lg:flex-row md:items-center md:justify-center gap-[20px]'>
               {
                 loading.leaderBoard ? <ComponentLoader /> : leaderBoardInformation && leaderBoardInformation.slice(0, 2).map((item, index) => (
                   <LeaderBoardMiniCard
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
            <div className='flex  md:pb-[90px] mt-[30px] flex-col gap-[20px] md:items-center md:justify-center'>
                  <LongMiniCard
                  name="Emmanuel"
                  age={28}
                  progress={20}
                  currentLevel={20}
                  level={9}
                  rank="2nd"
                  PicComponent={<LeaderboardPics />}
                  IconComponent={<UpperBoldTriangle />}
            />
            <LongMiniCard
                  name="Emmanuel"
                  age={28}
                  progress={40}
                  currentLevel={40}
                  level={9}
                  rank="2nd"
                  PicComponent={<LeaderboardPics />}
                  IconComponent={<DownBoldTriangle />}
            />
            <LongMiniCard
                  name="Emmanuel"
                  age={28}
                  progress={60}
                  currentLevel={60}
                  level={9}
                  rank="2nd"
                  PicComponent={<LeaderboardPics />}
                  IconComponent={<UpperBoldTriangle />}
            />
            <LongMiniCard
                  name="Emmanuel"
                  age={28}
                  progress={80}
                  currentLevel={80}
                  level={9}
                  rank="2nd"
                  PicComponent={<LeaderboardPics />}
                  IconComponent={<DownBoldTriangle />}
            />
            <LongMiniCard
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
        </div>
        </Layout>

        </div>
  )
}

export default Quiz