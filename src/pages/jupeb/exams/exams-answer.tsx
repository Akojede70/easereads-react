import React, { useEffect, useState } from 'react'
import { Button } from '../../../components/shared';
import { useParams } from 'react-router-dom';
import { Services } from '../../../service';

const Answer = () => {

  const getLocalStorageDetails = localStorage.getItem("submitQuestion")
  const studentScore = getLocalStorageDetails ? JSON.parse(getLocalStorageDetails) : {}
  const questionsString = localStorage.getItem("questions");
  const parsedData = questionsString ? JSON.parse(questionsString) : {};

  type ExamAnswer = {
  question: string;
  topic: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
};

  const [questions, setQuestions] = useState<ExamAnswer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

   const { id } = useParams<{ id:  string }>()

        useEffect(() => {
             const overviewInfo = async ( id: number | string ) => {
               try {
   
                 const response = await Services.exams.examDetails(id);
                 setQuestions(response.examDetails.answers || []);
                 
               } catch (error) { 
                   void error;         
              } 
             };
             if (id) {
               overviewInfo(id );
             }
             }, [id]);


    const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  return (
    <div className='bg-creamWhite w-full h-screen pt-[10%]'>
     <div className="w-[90%] md:w-[80%] lg:w-[45%] mx-auto px-[3%] bg-primaryWhite rounded-[10px] shadow-md font-bold">
      <div className="text-[15px] md:text-[16px] flex justify-between  items-center mb-[3%] pt-[5%]">
        <h2 className="text-[22px] font-bold">Exam Report</h2>
        <div >Total Percentage: {`${Math.round(studentScore?.percentageScore)}%`}</div>
      </div>
      <div className="mb-4 text-[13px] md:text-[16px]">
        <div className='flex gap-[25px] md:gap-[5%]'>
           <p className="text-primaryBlue w-[110px] md:w-[120px]">Question {currentIndex + 1} - </p>
        <p > {currentQuestion?.question}  </p>
        </div>
        
        
        <div className='flex gap-[30px] md:gap-[7%] pt-[2%]'>
              <p className="text-primaryBlue font-bold">Under Topic -</p>
              <p>  {currentQuestion?.topic} </p>
        </div> 
        
        <div className='flex gap-[30px] md:gap-[7%] pt-[2%]'>
           <p >Your Answer: </p>
           <p> {currentQuestion?.selectedAnswer} <span className='text-primaryRed pl-[10px]'> (incorrect) ✗ </span> </p>
        </div>

        <div className='flex gap-[14px] md:gap-[4%] pt-[2%]'>
        <p>Correct answer: </p>
        <p> {currentQuestion?.correctAnswer}  </p>
        </div>
        
      </div>

      <div className="flex mt-[5%]">
                <div className='w-[25%] lg:w-[170px]'>
            <button 
            className='border w-[130px] border-primaryBlue h-[40px] rounded-[8px]  text-primaryBlue hover:bg-primaryBlue hover:text-white cursor-pointer'
            onClick={handlePrevious}
            disabled={currentIndex === 0}
         >
          Previous 
        </button>
        </div>
            
              <div className='w-[30%] md:w-[15%]'>
                 <Button
                onClick={handleNext}
               disabled={currentIndex >= totalQuestions - 1}
              >
                Next
              </Button>
              </div>
            </div>

            <div className=' md:flex justify-between mt-[3%] pt-[1%] border-t border-[#dbdbdb]'>
              
              <div className='mb-[5%] flex flex-col gap-[15px]  font-bold text-[14px] pt-[10px]'>
                <p>Correct Answers: {studentScore?.totalCorrect} out of {parsedData?.questionDetails?.length}</p>
                <p>Wrong Answers: {studentScore?.totalWrong} out of {parsedData?.questionDetails?.length}</p>
              </div>

              {/* <div className='text-[13px] md:text-[12px] lg:text-[14px] flex w-full md:w-[50%] gap-[20px] pt-[2%]'>
                <div className='w-full'>
                    <div className='w-[35%] lg:w-[180px]'>
            <button 
            className='border w-[170px] h-[40px] border-primaryBlue rounded-[8px] text-primaryBlue hover:bg-primaryBlue hover:text-white cursor-pointer'
            onClick={handlePrevious}
         >
          Retake Exam
        </button>
        </div>
                </div>
                <div className='w-full'>
                <Button > Result Breakdown</Button>
                </div>
              </div> */}

            </div>
    </div>
    </div>
  )
}

export default Answer