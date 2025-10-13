import React, { useEffect } from 'react'
import { Cup, SmallArrowRight } from '../../../assets/icon'
import { ScoreCard } from '../../../components/card'
import { useNavigate } from 'react-router-dom'

const ExamComplete = () => {
   const navigate = useNavigate()
   const questionsString = localStorage.getItem("questions");
  const parsedData = questionsString ? JSON.parse(questionsString) : {};
  const getTimeSpentInQuestionInMinutes = localStorage.getItem("timeSpentOnAttendingQuestion");


  const getLocalStorageDetails = localStorage.getItem("submitQuestion")
  const studentScore = getLocalStorageDetails ? JSON.parse(getLocalStorageDetails) : {}

  const poorPerformanceTopics = studentScore?.topicAnalysis
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ?.filter((topic:any) => topic.failedFlag === true)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ?.map((topic: any) => topic.topic);

   // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      navigate('/jupeb/exam-form');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  return (
    <div className='bg-white h-[1800px] lg:h-[1150px]'>
        <div className=' flex flex-col justify-center items-center pt-10 gap-[20px]'>
        <div>
            <Cup/>
        </div>
        <h2 className='text-[23px] text-primaryBlue font-bold'> Exam Complete </h2>
        <p className='text-[#333333] text-[15px] md:text-[20px]'> Here are the results for Mathematics - Statistics</p>
    </div>
     
     <div className='flex flex-col lg:flex-row items-center justify-center mx-auto gap-[20px] mt-[50px]'>
       <ScoreCard
       score={`${Math.round(studentScore?.percentageScore)}%`}
       status="Needs Improvement"
       height='180px'
       />
        <ScoreCard 
        score={studentScore?.totalCorrect} 
        label={`Correct Answers out of ${studentScore?.results?.length}`}  
        height='180px'
        scoreTextColor='#4cb851'
        />

         <ScoreCard 
        score={studentScore?.totalWrong} 
        label="Incorrect Answers need review"  
        height='180px'
        scoreTextColor='#ff0808'
        />

         <ScoreCard 
        score={getTimeSpentInQuestionInMinutes} 
        label={`Time Taken out of ${parsedData?.timePeriod} mins`}  
        height='180px'
        scoreTextColor='#333333'
        />
     </div>

     <div className='bg-primaryWhite rounded-[10px] h-[240px] w-[78%] mx-auto mt-[30px] '>
      <p className='text-[18px] md:text-[22px] text-primaryBlue font-bold pl-[7%]  lg:pl-[6%] pt-[4%] md:pt-[2%]'> Recommendations  </p>

      <div className='bg-[#ffe7e7] w-[96%] md:w-[90%] rounded-[10px] p-5 m-5 ml-[2%] md:ml-[6%]'>
        <p className='bg-[#ff0808] w-[80%] md:w-[45%] text-[18px] lg:w-[15%] rounded-[15px] p-1 text-primaryWhite pl-[15px]'> Needs improvement</p>
        <p className='pt-[15px]'> Consider reviewing the study materials for  the topics <strong> {poorPerformanceTopics?.join(',')} </strong> before attempting another exam</p>
      </div>
     </div>

      <div className='bg-primaryWhite rounded-[10px] h-[300px] w-[78%] mx-auto mt-[30px] '>
      <p className='text-[18px] md:text-[22px] text-primaryBlue font-bold pl-[8%] md:pl-[6%] pt-[10%] md:pt-[2%]'> Suggested Next Steps  </p>
      
      <div className='md:border md:border-borderColor flex flex-col gap-[20px] w-full md:w-[90%] rounded-[10px] p-5 m-5 ml-[2%] md:ml-[6%]'>
        <div>

          <div 
          onClick={() => navigate('../exam-answer')}
          className='flex justify-between '>
        <p> View Exam Correction </p>
        <div className=' w-[90px] md:w-[100px] pl-[10px] mb-[20px] md:mb-[10px] rounded-[10px] bg-primaryBlue text-primaryWhite'>
          <button className='cursor-pointer flex gap-[10px] items-center justify-center  p-2'>
          View <SmallArrowRight /> 
          </button>
        </div>
        </div>

        <div className='flex justify-between'>
        <p>  View Detailed Analytics  </p>
        <div className='w-[90px] md:w-[100px] pl-[10px] mb-[25px] md:mb-[10px] rounded-[10px] bg-primaryBlue text-primaryWhite'>
          <button 
          onClick={() => navigate("../exam-solution-answer")}
          className='cursor-pointer flex gap-[10px] items-center justify-center  p-2'>
          View <SmallArrowRight /> 
          </button>
        </div>
        </div>

          <div className='flex justify-between'>
        <p>  Retake Exams  </p>
        <div className='cursor-pointer w-[90px] md:w-[100px] pl-[10px] rounded-[10px] bg-primaryBlue text-primaryWhite'>
          <button  onClick={() => navigate("/jupeb/exam-form")} className='flex cursor-pointer gap-[10px] items-center justify-center  p-2'>
          View <SmallArrowRight /> 
          </button>
        </div>
        </div>
        </div>
              </div>
     </div>
    </div>
  )
}

export default ExamComplete