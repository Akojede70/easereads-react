import React, { useState } from 'react'

const Answer = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(19); // Start at question 20
  const totalQuestions = 20;
  const correctAnswers = 5;
  const wrongAnswers = 5;
  const totalPercentage = (correctAnswers / totalQuestions) * 100;

  const questions = [
    {
      question: 'Evaluate the limit <code>lim(x->∞) [log(x)]^(e^x)</code>',
      topic: 'Linear equation',
      yourAnswer: '6 e^(x^2) (incorrect)',
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
     <div className="w-[45%] h-[450px] mx-auto p-6 bg-creamWhite mt-[10%] rounded-[10px] shadow-md">
      <div className="flex justify-between bg-primaryWhite items-center mb-4">
        <h2 className="text-xl font-semibold">Exam Report</h2>
        <div className="text-blue-600">Total Percentage: {totalPercentage}%</div>
      </div>
      <div className="mb-4">
        <div className='flex gap-[30px]'>
           <p className="text-blue-600">Question {currentQuestionIndex + 1} - </p>
        <p> {currentQuestion.question}  </p>
        </div>
        
        
        <div className='flex gap-[20px]'>
              <p className="text-blue-600">Under Topic -</p>
              <p>  {currentQuestion.topic} </p>
        </div> 
        
        <div className='flex gap-[20px]'>
           <p className="text-red-500">Your Answer: </p>
           <p> {currentQuestion.yourAnswer} (incorrect) ✗ </p>
        </div>

        <div className='flex gap-[20px]'>
        <p>Correct answer: </p>
        <p> {currentQuestion.correctAnswer}  </p>
        </div>
        
      </div>
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-blue-200 text-blue-800 px-4 py-2 rounded"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <div className="text-center">
          <p>Correct Answers: {correctAnswers} out of {totalQuestions}</p>
          <p>Wrong Answers: {wrongAnswers} out of {totalQuestions}</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Result Breakdown</button>
      </div>
    </div>
  )
}

export default Answer