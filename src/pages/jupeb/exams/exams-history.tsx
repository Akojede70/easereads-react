import React from 'react'
import Layout from '../../../components/layout/layout'
import "react-circular-progressbar/dist/styles.css";
import { Button } from '../../../components/shared';
import StatCard from '../../../components/card/card';
import { useNavigate } from 'react-router-dom';



const ExamPractice = () => { 

  const navigate = useNavigate()

     const scores = [
    { date: "21-04-2025", subject: "Mathematics", question: 40, score: 10.25 },
    { date: "21-04-2025", subject: "Mathematics", question: 40, score: 35 },
    { date: "21-04-2025", subject: "Mathematics", question: 40, score: 10.25 },
    { date: "21-04-2025", subject: "Mathematics", question: 40, score: 35 },
  ];

  return (
    <Layout name='Exams History ' >
       <div className='w-[70%] md:w-[95%] lg:w-full  h-[120px] mt-[30px] lg:mt-0 ml-[2%] md:ml-[3%]  lg:ml-0 pl-[13px] md:pl-[40px] border lg:flex justify-between border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
           <div className='w-[98%] lg:flex items-center justify-between'>
             <div className='pt-[12px] lg:pt-0' >
                <p className='font-bold text-[18px] lg:text-[30px]'> Exam Practice </p>
              </div>
                <div className='flex gap-[10px] lg:gap-0 w-[98%] md:w-[80%] lg:w-[30%] mt-[15px] lg:mt-0'>
                  <div className='w-[58%] md:w-[70%] lg:w-[90%]'>
                  <button className='text-[#fff] px-1 md:px-5 text-[13px] md:text-[15px] lg:text-[18px] rounded-[15px] h-[50px] bg-[#4cb851]'> WhatsApp Community</button>
                  </div>
                  <div className='w-[60%] md:w-[70%] lg:w-[68%]'>
                  <Button className='rounded-[15px] text-[13px] md:text-[15px] lg:text-[18px] cursor-pointer' onClick={() => navigate('/Jupeb/exam-instruction')}> Practice Exam </Button>
                  </div>
               </div>
           </div>
         </div>

       <div className='flex flex-wrap gap-[10px] md:gap-[3px] lg:gap-[10px]'>
         <StatCard title="Average Score" value={6} />
           <StatCard title="Total Students" value={120} />
           <StatCard title="Pass Rate" value="46/100%" />
       </div>
           
   <div className='mt-[5%]'>
        <table className='w-[94%] rounded-[20px] bg-primaryWhite  mx-auto'>
          <thead>
            <tr className='pt-[9%] h-[30px]'>
              <th className='py-4 w-[14%] '>Date</th>
              <th className='py-4 px-4 pl-[8%]'>Subject</th>
              <th className='py-4 px-4 pl-[6%]'>Question</th>
              <th className='py-4 px-4'>Score</th>
              <th className='py-4 px-4 '>Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {scores.map((score, index) => (
              <tr key={index} className=''>
                <td className='py-2 px-4 pl-[4%]'>{score.date}</td>
                <td className='py-2 px-4 pl-[10%]'>{score.subject}</td>
                <td className='py-2 px-4 pl-[9%]'>{score.question}</td>
                <td className='py-2 px-4 flex items-center  w-full pl-[32%]'>
                  <div className='w-32 h-4 rounded-full bg-[#e8f1f9]'>
                    <div
                      className={`h-4 rounded-full ${score.score < 20 ? 'bg-red-500' : 'bg-green-500'}`}
                      style={{ width: `${(score.score / 40) * 100}%` }}
                    ></div>
                  </div>
                  <span className='ml-3'>{score.score}</span>
                </td>
                <td className='py-2 px-4 w-[20%]'>
                  <Button className='bg-primaryBlue text-white rounded-[15px] text-[13px] md:text-[15px] lg:text-[18px]'>View Answers</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default ExamPractice