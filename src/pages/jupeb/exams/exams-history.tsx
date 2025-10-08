import React, { useEffect, useState } from 'react'
import Layout from '../../../components/layout/layout'
import "react-circular-progressbar/dist/styles.css";
import { Button } from '../../../components/shared';
import StatCard from '../../../components/card/card';
import { useNavigate } from 'react-router-dom';
import { Services } from '../../../service';
import { useSelector } from 'react-redux';
import { Tools } from '../../../utils';
import type { ReduxStore } from '../../../redux/store';
import { Helper } from '../../../components';
import Spinner from '../../../components/helpers/spinner';

const { ComponentLoader  } = Helper;



const ExamPractice = () => { 
   const userId = useSelector((state: ReduxStore) => state.auth.userId);
      const program = useSelector((state: ReduxStore) => state.auth.program);

 
          const [loading, setLoading] = useState(false)
          const navigate = useNavigate()


          type ExamBlock = {
          id: number;
          userId: number;
          examId: string;
          program: string;
          title: string;
          attemptId: string;
          score: number;
          percentage: string;
          questions: number;
          createdAt: string;
          updatedAt: string;
        };

        type ExamHistory = {
          examBlocks: ExamBlock[];
          totalQuestions: number;
          averagePercentage: number;
          totalSubjects: number;
        };


        const [history, setHistory] = useState<ExamHistory>({
          examBlocks: [],
          totalQuestions: 0,
          averagePercentage: 0,
          totalSubjects: 0,
        });



  useEffect(() => {
            const fetchHistory = async () => {
              try {
                setLoading(true)
                const examHistoryPayload = {
                  userId: userId,
                  program: program
                }
          const response = await Services.exams.examPage(examHistoryPayload);
                 setHistory({
            examBlocks: response.examBlocks,
            totalQuestions: response.totalQuestions,
            averagePercentage: response.averagePercentage,
            totalSubjects: response.totalSubjects,
          });
                        
              } catch (error) { 
                  void error;         
             } finally {
                setLoading(false)
             }
            };
              fetchHistory( );
     }, []);
    

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
         <StatCard title="Total Subjects" value={ loading ? <ComponentLoader color={'#106EBE'} /> : history?.totalSubjects} />
           <StatCard title="Total Exam Practice" value={ loading ? <ComponentLoader color={'#106EBE'} /> : history?.totalQuestions} />
           <StatCard title="Average Score" value={ loading ? <ComponentLoader color={'#106EBE'} /> : Math.round(history?.averagePercentage)} />
       </div>
           
   <div className='mt-[5%] mb-[13%]'>
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

          
            {loading ? (
        <tr>
          <td colSpan={5} className="relative h-[250px]">
            <Spinner top={20} />
          </td>
        </tr>
      )
            : history?.examBlocks?.map((score, index) => (
              <tr key={index} className=''>
                <td className='py-2 px-4 pl-[4%]'>{Tools.formatDateToDDMMYYYY(score.updatedAt)}</td>
                <td className='py-2 px-4 pl-[10%]'>{score.title}</td>
                <td className='py-2 px-4 pl-[9%]'>{score.questions}</td>
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