import React, { useState } from 'react'
import { Button } from '../../../components/shared';

const Answer = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(19); // Start at question 20
  

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className='bg-creamWhite h-screen w-full pt-[7%] lg:pt-[2%] overflow-auto '>
     <div className="w-[90%] md:w-[80%] text-[12px] md:text-[16px] lg:w-[45%] h-[800px] md:h-[960px] mx-auto px-[3%] mb-[40px] bg-primaryWhite rounded-[10px] shadow-md ">
      <div className=" mb-[3%] pt-[10%] md:pt-[5%] pl-[1%] lg:pl-0">
        <h2 className="text-xl font-bold"> Your Performance Breakdown </h2>
        <p className='pt-[3%]'> Understand how well you performed in each topic. Revisit resources where needed.</p>
      </div>
        <div className='flex gap-[7px] pl-[1%] lg:pl-0'>
          <p className='font-bold text-[17px]'> Topic: selected</p> 
          <p> (4) </p>
        </div>

      <div className='border-[2px] border-[#e8e8e8] px-[15px] md:px-[45px] mt-[30px] rounded-[15px] border-r-[15px] border-r-[#4cb851]'>
      <div className="mb-4">
        <div className='flex gap-[10px] w-[40%] pt-[30px]'>
          <p className='font-bold text-[15px]'> Topic: </p>
          <p className='bg-primaryYellow w-[100px] rounded-[10px] text-center h-[25px] text-[#fff] pt-[4px] lg:pt-0'> Algebra </p>
        </div>
        <div className='flex gap-[30px] pt-[5%]'>
           <p className='font-bold'>Correct Answer: 5 out 20 </p>
        <p className='text-[#4bb851] font-bold'> (correct) ✔ </p>
        </div>

         <div className='flex gap-[30px] pt-[3%] font-bold'>
           <p >Correct Answer: 10 out 20 </p>
        <p className='text-[#ff0808] font-bold'> (Incorrect) ❌ </p>
        </div>

        <div className='pt-[20px]'>
        <p> <span className='font-bold'> Recommended: </span> Needs improvement. we suggest reviewing the topic using the resources below </p>
        </div>
        
      </div>

      <div className="flex gap-[5%] mt-[5%] mb-[5%]">
              <div className='w-[45%] md:w-[25%]'>
                  <Button 
               onClick={handlePrevious}
               disabled={currentQuestionIndex === 0}
               >
                Watch Video
              </Button>
              </div>
            
               <div className='w-[35%] lg:w-[180px]'>
            <button 
            className='border w-[160px] h-[43px]  border-primaryBlue rounded-[8px] p-[10px] text-primaryBlue hover:bg-primaryBlue hover:text-white cursor-pointer'
            onClick={handlePrevious}
         >
          Read Text Book
        </button>
        </div>
            </div>
            </div>

             <div className='border-[2px] border-[#e8e8e8] px-[15px] md:px-[45px] mt-[30px] rounded-[15px] border-r-[15px] border-r-[#ff0808]'>
      <div className="mb-4">
        <div className='flex gap-[10px] w-[40%] pt-[30px]'>
          <p className='font-bold text-[15px]'> Topic: </p>
          <p className='bg-primaryYellow w-[100px] rounded-[10px] text-center h-[25px] text-[#fff] pt-[4px] lg:pt-0'> Algebra </p>
        </div>
        <div className='flex gap-[30px] pt-[5%]'>
           <p className='font-bold'>Correct Answer: 5 out 20 </p>
        <p className='text-[#4bb851] font-bold'> (correct) ✔ </p>
        </div>

         <div className='flex gap-[30px] pt-[3%] font-bold'>
           <p >Correct Answer: 10 out 20 </p>
        <p className='text-[#ff0808] font-bold'> (Incorrect) ❌ </p>
        </div>

        <div className='pt-[20px]'>
        <p> <span className='font-bold'> Recommended: </span> Needs improvement. we suggest reviewing the topic using the resources below </p>
        </div>
        
      </div>

      <div className="flex gap-[5%] mt-[5%] mb-[5%]">
              <div className='w-[45%] md:w-[25%]'>
                  <Button 
               onClick={handlePrevious}
               disabled={currentQuestionIndex === 0}
               >
                Watch Video
              </Button>
              </div>
            
             <div className='w-[35%] lg:w-[180px]'>
            <button 
            className='border w-[160px] h-[43px]  border-primaryBlue rounded-[8px] p-[10px] text-primaryBlue hover:bg-primaryBlue hover:text-white cursor-pointer'
            onClick={handlePrevious}
         >
          Read Text Book
        </button>
        </div>
              
            </div>

            </div>
    </div>
    </div>
  )
}

export default Answer