import React from 'react'
import Layout from '../../../components/layout/layout'

import "react-circular-progressbar/dist/styles.css";
import { Button } from '../../../components/shared';
import { useNavigate } from 'react-router-dom';



const ExamInstruction = () => { 
    const navigate = useNavigate()
  return (
    <Layout name='Exams History ' >
       <div className='w-[95%] lg:w-full  h-[120px] mt-[5%] lg:mt-0 ml-[2%] md:ml-[3%]  lg:ml-0 pl-[13px] md:pl-[40px] lg:flex justify-between bg-[#f5f5f5] shadow-[0_4px_10px_#e0e0e0]'>
           <div className='w-[98%] flex flex-col'>
             <div className='pt-[12px] lg:pt-0'>
                <p className='font-bold text-[18px] lg:text-[30px]'> Exam Practice </p>
              </div>
              <div className='pt-[1%]'>
                <p> Complete your video Tutorial and upgrade your expired videos</p>
              </div>
           </div>
         </div>
         
 <div className="h-[80%] mb-[400px] md:mb-[35%] lg:mb-[11%] bg-[#f5f5f5] mt-[100%] md:mt-[15%] lg:mt-0 flex items-center justify-center ">
      <div className="mt-[5%] bg-primaryWhite p-8 rounded-[20px] shadow-lg w-[95.3%] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-6">Instruction</h2>
        <p className="text-center mb-6">Please read all instruction bellow and select appropriate subject, section and topics</p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Exams Instruction:</h3>
            <ul className="list-disc pl-5">
              <li>Make sure you have a stable internet connection before starting the exam.</li>
              <li>Log in to the exam platform using the provided credentials.</li>
              <li>Do not refresh your page, or open another tab during the exam period</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Environment:</h3>
            <ul className="list-disc pl-5">
              <li>Choose a quiet and well-lit space to take the exam.</li>
              <li>You can take the Exam on your Phone, Tab or Laptop</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Exam Format:</h3>
            <ul className="list-disc pl-5">
              <li>Choose a quiet and well-lit space to take the exam.</li>
              <li>You can take the Exam on your Phone, Tab or Laptop</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Time Management:</h3>
            <ul className="list-disc pl-5">
              <li>Note the start and end times of the exam.</li>
              <li>Manage your time wisely to complete all sections within the allotted time.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Saving and Submission:</h3>
            <ul className="list-disc pl-5">
              <li>Submit your completed exam before the deadline.</li>
              <li>Do not close the exam window until you receive confirmation of successful submission.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Complain:</h3>
            <ul className="list-disc pl-5">
              <li>In case of any complain, contact us through any mean on the contact page</li>
            </ul>
          </div>
        </div>
       <div className='w-[45%] mt-[12%] lg:mt-[3%]'>
       <Button onClick={() => navigate('/jupeb/exam-form')}> Proceed </Button>
       </div>
      </div>
    </div>
     
           
  
    </Layout>
  )
}

export default ExamInstruction