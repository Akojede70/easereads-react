import React from 'react'
import { Cup, SmallArrowRight } from '../../../assets/icon'
import { ScoreCard } from '../../../components/card'

const ExamComplete = () => {
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
       score={'5%'}
       status="Needs Improvement"
       height='180px'
       />
        <ScoreCard 
        score={10} 
        label="Correct Answers out if 50"  
        height='180px'
        scoreTextColor='#4cb851'
        />

         <ScoreCard 
        score={70} 
        label="Incorrect Answers need review"  
        height='180px'
        scoreTextColor='#ff0808'
        />

         <ScoreCard 
        score={'40 : 20m'} 
        label="Time Taken out of 45 minutes"  
        height='180px'
        scoreTextColor='#333333'
        />
     </div>

     <div className='bg-primaryWhite rounded-[10px] h-[240px] w-[78%] mx-auto mt-[30px] '>
      <p className='text-[18px] md:text-[22px] text-primaryBlue font-bold pl-[7%]  lg:pl-[6%] pt-[4%] md:pt-[2%]'> Recommendations  </p>

      <div className='bg-[#ffe7e7] w-[96%] md:w-[90%] rounded-[10px] p-5 m-5 ml-[2%] md:ml-[6%]'>
        <p className='bg-[#ff0808] w-[80%] md:w-[45%] text-[18px] lg:w-[15%] rounded-[15px] p-1 text-primaryWhite pl-[15px]'> Needs improvement</p>
        <p className='pt-[15px]'> Consider reviewing the study materials for Statistics before attempting another exam</p>
      </div>
     </div>

      <div className='bg-primaryWhite rounded-[10px] h-[300px] w-[78%] mx-auto mt-[30px] '>
      <p className='text-[18px] md:text-[22px] text-primaryBlue font-bold pl-[8%] md:pl-[6%] pt-[10%] md:pt-[2%]'> Suggested Next Steps  </p>
      
      <div className='md:border md:border-borderColor flex flex-col gap-[20px] w-full md:w-[90%] rounded-[10px] p-5 m-5 ml-[2%] md:ml-[6%]'>
        <div>

          <div className='flex justify-between'>
        <p> View Exam Correction </p>
        <div className='w-[90px] md:w-[100px] pl-[10px] mb-[20px] md:mb-[10px] rounded-[10px] bg-primaryBlue text-primaryWhite'>
          <button className='flex gap-[10px] items-center justify-center  p-2'>
          View <SmallArrowRight /> 
          </button>
        </div>
        </div>

        <div className='flex justify-between'>
        <p>  View Detailed Analytics  </p>
        <div className='w-[90px] md:w-[100px] pl-[10px] mb-[25px] md:mb-[10px] rounded-[10px] bg-primaryBlue text-primaryWhite'>
          <button className='flex gap-[10px] items-center justify-center  p-2'>
          View <SmallArrowRight /> 
          </button>
        </div>
        </div>

          <div className='flex justify-between'>
        <p>  Retake Exams  </p>
        <div className='w-[90px] md:w-[100px] pl-[10px] rounded-[10px] bg-primaryBlue text-primaryWhite'>
          <button className='flex cursor-pointer gap-[10px] items-center justify-center  p-2'>
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