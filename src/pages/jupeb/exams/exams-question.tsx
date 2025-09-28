import React, { useEffect, useState } from 'react'
import { BackButton, Button } from '../../../components/shared';

const Question = () => {

    type QuestionType = { question: string; options: string[] };
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(24 * 60 * 60); // 24 hours in seconds
  const totalQuestions = 20;

  
  useEffect(() => {
    // Dummy quiz data
    const dummyQuestions = [
      {
        question: 'Evaluate the limit <code>lim(x->∞) [log(x)]^(e^x)</code>',
        options: ['The limit is 1.', 'The limit is ∞.', 'The limit is 3.', 'The limit is 9.']
      },
      {
        question: 'What is 2 + 2?',
        options: ['The answer is 3.', 'The answer is 4.', 'The answer is 5.']
      },
      {
        question: 'Solve for x: 2x = 4',
        options: ['x = 1.', 'x = 2.', 'x = 3.']
      },
      
      // Add more questions as needed, up to totalQuestions
    ].slice(0, totalQuestions); // Limit to totalQuestions
    setQuestions(dummyQuestions);

    const timer = setInterval(() => {
      setTimeRemaining(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds:number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h:${minutes}m:${secs}s`;
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex] || {
    question: 'Evaluate the limit <code>lim(x->∞) [log(x)]^(e^x)</code>',
    options: ['The limit is 1.', 'The limit is ∞.', 'The limit is 3.']
  };

  const handlePrevious = () => {
  if (currentQuestionIndex > 0) {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }
};

  return (
    <div className='bg-creamWhite h-screen relative'>
         <div className='w-full bg-primaryWhite h-[90px] md:h-[100px] pt-[15px] md:pt-[30px] pl-[7%] md:pl-[3%] border-t border-b border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
          <div className='flex gap-[68%] w-[48%]  mx-auto'>
          <div >
                        <BackButton />
          </div>
          <div>
            <Button > Download </Button>
          </div>
              </div>
            </div>
            
             <div className="w-[44%] absolute top-[20%] left-[28%] text-[14px] md:text-xl flex items-center justify-between text-center mb-4">
        <h2 className="font-semibold">Mathematics Exams </h2>
        <div className='flex gap-[10px]'>
          <p className='font-bold pt-[7px] hidden md:block text-[17px]'> Time Remaining: </p> <span className="bg-[#ff0808] text-white px-8 py-1 rounded-[30px]"> {formatTime(timeRemaining)} </span>
        </div>
      </div>

    <div className="w-[85%] lg:w-[45%]  h-[500px] md:h-[480px] mx-auto  mt-[7%] md:mt-[23%] lg:mt-[8%] pt-[40px] px-[20px] md:px-[50px] bg-primaryWhite rounded-[15px] shadow-md">
     
      <div className="space-y-[25px] mb-[30px]">
        {currentQuestion.options.map((option, index) => (
          <label key={index} className="flex items-center border border-borderColor hover:border-primaryBlue hover:bg-[#e8f1f9] cursor-pointer rounded-[7px] p-[12px] bg-[#f5f5f5]">
            <input type="radio" name="answer" className="mr-2 cursor-pointer" />
            {option}
          </label>
        ))}
      </div>
      <div className="lg:flex justify-between gap-[5%] mt-[5%]">
        <div className='pt-[20px]'> Questions: {currentQuestionIndex + 1} out of {totalQuestions}</div>
        <div className='flex gap-[50px]'>
        
         <div className='w-[35%] lg:w-[180px]'>
            <button 
            className='border w-[200px] h-[40px]  border-primaryBlue rounded-[8px] p-[10px] text-primaryBlue hover:bg-primaryBlue hover:text-white cursor-pointer'
            onClick={handlePrevious}
         >
          Previous 
        </button>
        </div>
      
        <div className='w-[35%] lg:w-[180px]'>
           <Button
                     className="bg-primaryBlue text-white px-4 py-2 rounded"
          onClick={handleNext}
          disabled={currentQuestionIndex >= totalQuestions - 1}
        >
          Finish Quiz
        </Button>
        </div>
        </div>
      
        {/* <div className='lg:flex gap-[55px] lg:pl-[15%] font-bold text-[14px] md:text-[16px] lg:text-[18px] pt-[20px] md:pt-[13px] lg:pt-[10px]'>
          <p>Total Questions: {totalQuestions}</p>
          <p className='pt-[10px] lg:pt-0'>Questions Answered: {currentQuestionIndex + 1}</p>
        </div> */}
      </div>
    </div>
    </div>
      )
}

export default Question