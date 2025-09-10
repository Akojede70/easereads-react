import React from 'react'
import Layout from '../../../components/layout/layout'
import {  Emoji } from '../../../assets/icon';
import "react-circular-progressbar/dist/styles.css";
import { Button } from '../../../components/shared';
import { useNavigate } from 'react-router-dom';



const ExamPractice = () => {
  const navigate = useNavigate()

  return (
    <Layout name='overview ' >
       <div className='w-[95%] lg:w-full  h-[120px] mt-[30px] lg:mt-0 ml-[2%] md:ml-[3%]  lg:ml-0 pl-[13px] md:pl-[40px] border lg:flex justify-between border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
           <div className='w-[98%] lg:flex items-center justify-between'>
             <div className='pt-[12px] lg:pt-0'>
                <p className='font-bold text-[18px] lg:text-[30px]'> Exam Practice </p>
              </div>
                <div className='flex gap-[10px] lg:gap-0 w-[98%] md:w-[80%] lg:w-[30%] mt-[15px] lg:mt-0'>
                  <div className='w-[58%] md:w-[70%] lg:w-[90%]'>
                  <button className='text-[#fff] px-1 md:px-5 text-[13px] md:text-[15px] lg:text-[18px] rounded-[15px] h-[50px] bg-[#4cb851]'> WhatsApp Community</button>
                  </div>
                  <div className='w-[60%] md:w-[70%] lg:w-[68%]'>
                  <Button className='rounded-[15px] text-[13px] md:text-[15px] lg:text-[18px]' onClick={() => navigate('/jupeb/exam-history')}> Practice Exam </Button>
                  </div>
               </div>
           </div>
         </div>

         <div className='ml-[2.3%] w-[94%]  md:w-[95%] mt-[2%] md:mt-[9%] lg:mt-[2%]'>
          <div>
            <p className='text-[15px] md:text-[18px] font-bold mb-[1%] mt-[30px] md:mt-0 ml-[2%] lg:ml-0'> Exams History</p>
          </div>

          <div className='w-[97%] lg:w-full bg-primaryWhite flex flex-col gap-[40px] items-center justify-center  rounded-[20px] h-[350px] md:h-[400px] mt-[20px] ml-[1%] md:ml-[1%]  lg:ml-0'>
            <div>
                <Emoji />
            </div>
                <div className='w-[80%] lg:w-[30%] text-[18px] md:text-[18px] text-center'>
                    <p> Looks like you haven't taken any practice exams yet-but that's a great place to start! </p>
                </div>
          </div>

         </div>
                  
    </Layout>
  )
}

export default ExamPractice