import React, { useState } from 'react'
import { Button } from '../../../components/shared';

const Answer = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(19); // Start at question 20
  const totalQuestions = 20;
  const correctAnswers = 5;
  const wrongAnswers = 5;
  const totalPercentage = (correctAnswers / totalQuestions) * 100;

  const questions = [
    {
      question: 'Evaluate the limit lim(x->∞) [log(x)]^(e^x)',
      topic: 'Linear equation',
      yourAnswer: '6 e^{x^2}',
      correctAnswer: '6 e^(3x^2)'
    },
    // Add more questions as needed
  ].slice(0, totalQuestions);

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex] || questions[0];
  return (
    <div className='bg-creamWhite w-full h-screen pt-[10%]'>
     <div className="w-[90%] md:w-[45%] h-[450px] mx-auto px-[3%] bg-primaryWhite rounded-[10px] shadow-md font-bold">
      <div className="flex justify-between  items-center mb-[3%] pt-[5%]">
        <h2 className="text-xl font-semibold">Exam Report</h2>
        <div >Total Percentage: {totalPercentage}%</div>
      </div>
      <div className="mb-4">
        <div className='flex gap-[30px]'>
           <p className="text-primaryBlue">Question {currentQuestionIndex + 1} - </p>
        <p > {currentQuestion.question}  </p>
        </div>
        
        
        <div className='flex gap-[30px] pt-[2%]'>
              <p className="text-primaryBlue font-bold">Under Topic -</p>
              <p>  {currentQuestion.topic} </p>
        </div> 
        
        <div className='flex gap-[30px] pt-[2%]'>
           <p >Your Answer: </p>
           <p> {currentQuestion.yourAnswer} <span className='text-primaryRed pl-[10px]'> (incorrect) ✗ </span> </p>
        </div>

        <div className='flex gap-[10px] pt-[2%]'>
        <p>Correct answer: </p>
        <p> {currentQuestion.correctAnswer}  </p>
        </div>
        
      </div>

      <div className="flex gap-[5%] mt-[5%]">
              <div className='w-[13%]'>
                  <Button 
               onClick={handlePrevious}
               disabled={currentQuestionIndex === 0}
               variant="outline"
               >
                Previous 
              </Button>
              </div>
            
              <div className='w-[13%]'>
                 <Button
                // onClick={handleNext}
                disabled={currentQuestionIndex >= totalQuestions - 1}
              >
                Next
              </Button>
              </div>
            </div>

            <div className='flex justify-between mt-[3%] pt-[2%] border-t border-[#dbdbdb]'>
              
              <div className='flex flex-col gap-[15px]  font-bold text-[14px] pt-[10px]'>
                <p>Correct Answers: {correctAnswers} out of {totalQuestions}</p>
                <p>Wrong Answers: {wrongAnswers} out of {totalQuestions}</p>
              </div>

              <div className='flex w-[50%] gap-[20px] pt-[2%]'>
                <div className='w-full'>
                <Button variant='outline'> Retake Exam</Button>
                </div>
                <div className='w-full'>
                <Button > Result Breakdown</Button>
                </div>
              </div>

            </div>
    </div>
    </div>
  )
}

export default Answer