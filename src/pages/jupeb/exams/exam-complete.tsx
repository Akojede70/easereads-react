import React from 'react'
import { Cup } from '../../../assets/icon'
import { ScoreCard } from '../../../components/card'

const ExamComplete = () => {
  return (
    <div className='bg-white h-screen'>
        <div className=' flex flex-col justify-center items-center pt-20 gap-[20px]'>
        <div>
            <Cup/>
        </div>
        <h2 className='text-[23px] text-primaryBlue font-bold'> Exam Complete </h2>
        <p className='text-[#333333] text-[20px]'> Here are the results for Mathematics - Statistics</p>
    </div>
     
     <div className='md:flex items-center justify-center mx-auto gap-[20px] mt-[50px]'>
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


    </div>
  )
}

export default ExamComplete