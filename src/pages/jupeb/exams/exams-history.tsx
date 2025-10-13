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
// import Spinner from '../../../components/helpers/spinner';
import type { ExamHistory } from '../../../types/exam';
import { Emoji } from '../../../assets/icon';

const { ComponentLoader, Spinner  } = Helper;



const ExamPractice = () => { 
   const userId = useSelector((state: ReduxStore) => state.auth.userId);
      const program = useSelector((state: ReduxStore) => state.auth.program);

 
          const [loading, setLoading] = useState(false)
          const navigate = useNavigate()


        

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

          const handleViewAnswers = (examId: string | number) => {
        navigate("/jupeb/exam-answer", { state: { examId } });
      };

     const hasHistory = history?.examBlocks?.length > 0;


  return (
    <Layout >

         {

          loading ? (
          <div className="flex justify-center items-center h-[400px]">
            <Spinner />
          </div>
        ) : 
         hasHistory ? 
         
         
          <>  
        <div className='w-[87%] ml-[7%]'>
          <div className='w-full  h-[120px] mt-[30px] lg:mt-0  pl-[13px] md:pl-[40px] lg:flex justify-between border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
                     <div className='w-[98%] lg:flex items-center justify-between'>
                       <div className='pt-[12px] lg:pt-0'>
                          <p className='font-bold text-[18px] lg:text-[30px]'> Exam Practice </p>
                        </div>
                          <div className='flex gap-[10px] lg:gap-0 w-[98%] md:w-[80%] lg:w-[30%] mt-[15px] lg:mt-0'>
                            <div className='w-[58%] md:w-[70%] lg:w-[90%]'>
                            <button className='text-[#fff]  px-1 md:px-5 text-[13px] md:text-[15px] lg:text-[18px] rounded-[15px] h-[38px] md:h-[50px] bg-[#4cb851]'> WhatsApp Community</button>
                            </div>
                            <div className='w-[60%] md:w-[70%] lg:w-[68%]'>
                            <Button className='rounded-[15px] text-[13px] md:text-[15px] lg:text-[18px]' onClick={() => navigate('/jupeb/exam-instruction')}> Practice Exam </Button>
                            </div>
                         </div>
                     </div>
                   </div> 
                  <div className='mt-[9%] md:flex gap-[10px] md:gap-[3px] lg:gap-[10px]'>
         <StatCard title="Total Subjects" value={ loading ? <ComponentLoader color={'#106EBE'} /> : history?.totalSubjects} />
           <StatCard title="Total Exam Practice" value={ loading ? <ComponentLoader color={'#106EBE'} /> : history?.totalQuestions} />
           <StatCard title="Average Score" value={ loading ? <ComponentLoader color={'#106EBE'} /> : `${Math.round(history?.averagePercentage)}%`} />
       </div>
           <div className='pl-[1%] lg:pl-[3%] font-bold text-[17px] md:text-[22px] pt-[3%]'> Exams Practice History </div>
   <div className=' mt-[1%] mb-[13%] overflow-x-auto'>
        <table className='min-w-full md:w-[94%] rounded-[20px] bg-primaryWhite  mx-auto'>
          <thead>
            <tr className='pt-[9%] h-[30px]'>
              <th className='py-4 w-[100px] md:w-[14%]'>Date</th>
              <th className='py-4 px-4 md:pl-[8%]'>Subject</th>
              <th className='py-4 px-4 md:pl-[6%]'>Question</th>
              <th className='py-4 px-4'>Score</th>
              <th className='py-4 px-4 '>Action</th>
            </tr>
          </thead>
          <tbody className=''>

          
            {loading ? (
        <tr>
          <td colSpan={5} className="relative h-[250px]">
            <Spinner paddingTop={1} />
          </td>
        </tr>
      )
            : history?.examBlocks?.map((score, index) => (
              <tr key={index} className=''>
                <td className='py-2 px-4 md:pl-[4%]'>{Tools.formatDateToDDMMYYYY(score.updatedAt)}</td>
                <td className='py-2 px-4 pl-[5%] md:pl-[10%]'>{score.title}</td>
                <td className='py-2 px-4 pl-[8%] md:pl-[9%]'>{score.questions}</td>
                <td className='py-2 px-4 flex items-center  w-full pl-[10%] md:pl-[32%]'>
                  <div className='w-32 h-4 rounded-full bg-[#e8f1f9]'>
                    <div
                      className={`h-4 rounded-full ${score.score < 20 ? 'bg-red-500' : 'bg-green-500'}`}
                      style={{ width: `${(score.score / 40) * 100}%` }}
                    ></div>
                  </div>
                  <span className='ml-3'>{score.score}</span>
                </td>
                <td className='py-2 px-4 w-[20%]'>
                  <Button 
                  onClick={() => handleViewAnswers(score?.attemptId)} 
                  className='bg-primaryBlue text-white rounded-[15px] text-[13px] md:text-[15px] lg:text-[18px]'>View Answers</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
      </>
      
     : 
      ( 

           <div>
       <div className='w-[70%] md:w-[95%] lg:w-full  h-[120px] mt-[30px] lg:mt-0 ml-[2%] md:ml-[3%]  lg:ml-0 pl-[13px] md:pl-[40px] border lg:flex justify-between border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
           <div className='w-[98%] lg:flex items-center justify-between'>
             <div className='pt-[12px] lg:pt-0' >
                <p className='font-bold text-[18px] lg:text-[30px]'> Exam Practice </p>
              </div>
                <div className='flex gap-[10px] lg:gap-0 w-[98%] md:w-[80%] lg:w-[30%] mt-[15px] lg:mt-0'>
                  <div className='w-[58%] md:w-[70%] lg:w-[90%]'>  
                   <a
                    href="https://chat.whatsapp.com/ETfgpKavqLNDlPFl06EtXa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="cursor-pointer text-[#fff] px-1 md:px-5 text-[13px] md:text-[15px] lg:text-[18px] rounded-[15px] h-[50px] bg-[#4cb851]">
                      WhatsApp Community
                    </button>
                  </a>
                  </div>
                  <div className='w-[60%] md:w-[70%] lg:w-[68%]'>
                  <Button className='rounded-[15px] text-[13px] md:text-[15px] lg:text-[18px] cursor-pointer' onClick={() => navigate('/Jupeb/exam-instruction')}> Practice Exam </Button>
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

         </div>

         ) 
        

      }

      
    </Layout>
  )
}

export default ExamPractice