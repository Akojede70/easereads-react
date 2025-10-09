import React, { useEffect, useState } from 'react'
import { BackButton, Button } from '../../../components/shared';
import {  useLocation, useNavigate } from 'react-router-dom';
import { Services } from '../../../service';
import { Helper } from '../../../components';
import type { QuestionType } from '../../../types/exam';

const { ComponentLoader, Alert } = Helper;

const Question = () => {
    
    const navigate = useNavigate()
     const [showAlert, setShowAlert] = useState(false)
     const [alertMessage, setAlertMessage] = useState('')
     const [alertStatus, setAlertStatus] = useState('')
    const [loading, setLoading] = useState(false)
     const location = useLocation();
     const { quizId } = location.state || {};
     console.log("quizId",quizId)
    
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>(() => {  
    const savedAnswers = localStorage.getItem('selectedAnswers');
    return savedAnswers ? JSON.parse(savedAnswers) : {};
   });
    const [startTime] = useState<string>(() => {
    const saved = localStorage.getItem('examStartTime');
    if (saved) return saved;
    const now = new Date().toISOString();
    localStorage.setItem('examStartTime', now);
    return now;
  });


   const handleGoBack = () => {
      navigate(-1)
      localStorage.removeItem('timeLeft');
      localStorage.removeItem('examStartTime');
      localStorage.removeItem('selectedAnswers');
    } 

     const questionsString = localStorage.getItem("questions");
  const parsedData = questionsString ? JSON.parse(questionsString) : {};

   const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(() => {
  const savedIndex = localStorage.getItem('currentQuestionIndex');
  if (savedIndex) {
    const index = parseInt(savedIndex, 10);
    // Ensure the index is valid (between 0 and questions.length - 1)
    return index >= 0 && index < parsedData?.questionDetails?.length ? index : 0;
  }
  return 0;
});

  const totalTimeSeconds = parsedData?.timePeriod ? parsedData.timePeriod * 60 : 0;

  const [timeLeft, setTimeLeft] = useState<number>(() => {
  const savedTimeLeft = localStorage.getItem('timeLeft');
  if (savedTimeLeft) {
    return parseInt(savedTimeLeft, 10);
  }
  const start = new Date(startTime).getTime();
  const now = new Date().getTime();
  const elapsedSeconds = Math.floor((now - start) / 1000);
  const remaining = totalTimeSeconds - elapsedSeconds;
  return remaining > 0 ? remaining : 0;
});

   // Format to MM:SS
 const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const storedPayloadString = localStorage.getItem("examFormSubmitPayload");
const storedPayload = storedPayloadString ? JSON.parse(storedPayloadString) : null;


  useEffect(() => {
    if (timeLeft <= 0) {
      // Submit exam when time is up
      r.handleExamSubmit();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval); // Stop the timer
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [timeLeft]);

      useEffect(() => {
      localStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
      localStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
      localStorage.setItem('timeLeft', timeLeft.toString());

    }, [selectedAnswers, currentQuestionIndex, timeLeft ]);

        useEffect(() => {
          if (parsedData?.questionDetails?.length) {
            setQuestions(parsedData.questionDetails);
          }
        }, []);

        const currentQuestion = questions[currentQuestionIndex];

        // ✅ Handlers
        const handleNext = () => {
          if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
          }
        };

        const handlePrevious = () => {
          if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
          }
        };

    const r = {
      async handleExamSubmit ()  {
      
              try {
                setLoading(true)
                const questionDetails = Object.entries(selectedAnswers)
                .map(([index, userAnswer]) => ({
                  questionContent: questions[Number(index)].content || questions[Number(index)].question,
                  userAnswer,
                }));
                const finishedTime = new Date().toISOString();
                const timeSpentSeconds = Math.floor(
                (new Date(finishedTime).getTime() - new Date(startTime).getTime()) / 1000
              );
              //  total minutes and secs spent on exams
            const minutes = Math.floor(timeSpentSeconds / 60);
            const seconds = timeSpentSeconds % 60;

            const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}m`;
            localStorage.setItem("timeSpentOnAttendingQuestion", formattedTime);



                const submitQuestionPayload ={
                    userId: storedPayload.userId,
                    program: storedPayload.program,
                    subject: storedPayload.subject,
                    section: storedPayload.section,
                    selectedTopics: storedPayload.selectedTopics,
                    totalTime: timeSpentSeconds,
                    startDate: startTime,
                    finishedDate: finishedTime,
                    questionDetails: questionDetails
                   
                }      
                const response = await Services.exams.submitQuestions(submitQuestionPayload);
                setShowAlert(true)
                setAlertMessage(response?.message)
                setAlertStatus('success')
                localStorage.setItem("submitQuestion", JSON.stringify(response))
                localStorage.removeItem('timeLeft');
                localStorage.removeItem('examStartTime');
                localStorage.removeItem('selectedAnswers');
                setTimeout(() => { setShowAlert(false); navigate('/jupeb/exam-complete'); }, 5000)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } catch (error: any) {

                if (error.response) { 
                   const data = error.response.data;
                  const mainMessage =
                  data?.errors && Array.isArray(data.errors) && data.errors.length > 0
                    ? data.errors[0].message 
                    : data?.message || "An unexpected error occurred.";
                       setShowAlert(true);
                       setAlertMessage(mainMessage);
                       setAlertStatus("error");
                       setTimeout(() => setShowAlert(false), 4000)
                     }
              } finally {
                setLoading(false)
              }
            }
    }

  return (
    <div className='bg-creamWhite h-screen relative'>
         <div className='w-full bg-primaryWhite h-[90px] md:h-[100px] pt-[15px] md:pt-[30px] pl-[7%] md:pl-[3%] border-t border-b border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
          <div className='flex gap-[68%] w-[48%]  mx-auto'>
          <div  onClick={ handleGoBack}>
                        <BackButton />
          </div>
          <div>
            <Button onClick={ () => navigate('/jupeb/overview')}> Dashboard </Button>
          </div>
              </div>
            </div>
            
             <div className="w-[44%] absolute top-[20%] left-[28%] text-[14px] md:text-xl flex items-center justify-between text-center mb-4">
        <h2 className="font-semibold"> { currentQuestion?.content} </h2>
        <div className='flex gap-[10px] items-center'>
  <p className='font-bold pt-[7px] hidden md:block text-[17px]'>
    Time Remaining:
  </p>

  <span
    className={`px-8 py-1 rounded-[30px] text-white transition-colors duration-500 ${
      Number(minutes) < 5 ? 'bg-[#ff0808]' : 'bg-green-600'
    }`}
  >
    ⏱ {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
  </span>
</div>

      </div>

    <div className="w-[85%] lg:w-[45%]  h-[500px] md:h-[480px] mx-auto  mt-[7%] md:mt-[23%] lg:mt-[8%] pt-[40px] px-[20px] md:px-[50px] bg-primaryWhite rounded-[15px] shadow-md">
     
      <div className="space-y-[25px] mb-[30px]">
        {currentQuestion?.answers_suggestion.map((option: string, index: number) => (
          <label 
          key={index} 
          className={`flex items-center border border-borderColor hover:border-primaryBlue hover:bg-[#e8f1f9] cursor-pointer rounded-[7px] p-[12px] ${
      selectedAnswers[currentQuestionIndex] === option ? 'bg-blue-100 border-primaryBlue' : 'bg-[#f5f5f5]'
    }`}
          // className="flex items-center border border-borderColor hover:border-primaryBlue hover:bg-[#e8f1f9] cursor-pointer rounded-[7px] p-[12px] bg-[#f5f5f5]"
          >
            <input 
            type="radio" 
            name={`answer-${currentQuestionIndex}`} 
            className="mr-2 cursor-pointer" 
            checked={selectedAnswers[currentQuestionIndex] === option}
            onChange={() => {
            const updatedAnswers = { ...selectedAnswers, [currentQuestionIndex]: option };
            setSelectedAnswers(updatedAnswers);
            localStorage.setItem("selectedAnswers", JSON.stringify(updatedAnswers));
          }}

            // onChange={() =>
            //   setSelectedAnswers((prev) => ({ ...prev, [currentQuestionIndex]: option }))
            // }
            />
            {option}
          </label>
        ))}
      </div>
      <div className="lg:flex justify-between gap-[5%] mt-[5%]">
        <div className='pt-[20px]'> Questions: {currentQuestionIndex + 1} out of {parsedData?.questionDetails?.length}</div>
        <div className='flex space-x-8'>
        
        {
          currentQuestionIndex  > 0 && (
        
         <div className='w-[35%] lg:w-[70px]'>
            <button 
            className='border w-[100px] h-[40px]  border-primaryBlue rounded-[8px] text-primaryBlue hover:bg-primaryBlue hover:text-white cursor-pointer'
            onClick={handlePrevious}
         >
          Previous 
        </button>
        </div>
        )}
      
        <div className='w-[35%] lg:w-[120px] ml-[3%]'>
           <Button
                     className="bg-primaryBlue  text-white p-20 rounded"
          onClick={handleNext}
          disabled={currentQuestionIndex >= parsedData?.questionDetails?.length - 1}
        >
          Next
        </Button>
        </div>


          <div className='w-[35%] lg:w-[120px]'>
            { loading ? (  <Button>
                <ComponentLoader color={'#fff'} />
              </Button> ) :
           <Button
           className="bg-primaryBlue text-white px-4 py-2 rounded"
          onClick={r.handleExamSubmit}
        >
          Finish Quiz
        </Button>
}
        </div>


        </div>
      </div>
    </div>
       {showAlert && <Alert message={alertMessage} status={alertStatus}  />}
    </div>
      )
}

export default Question