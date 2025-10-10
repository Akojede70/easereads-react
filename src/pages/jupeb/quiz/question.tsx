import React, { useEffect, useState } from 'react'
import { BackButton, Button } from '../../../components/shared';
import {  useLocation, useNavigate } from 'react-router-dom';
import { Services } from '../../../service';
import { Helper } from '../../../components';
import type {  quizDataType, quizType } from '../../../types/quiz';
import { useSelector } from 'react-redux';
import type { ReduxStore } from '../../../redux/store';
import PerformanceModal from './modal';

const { ComponentLoader, Alert } = Helper;

const Question = () => {
    
    const userId = useSelector((state: ReduxStore) => state.auth.userId);
    const program = useSelector((state: ReduxStore) => state.auth.program);
    
    const navigate = useNavigate()
     const [showAlert, setShowAlert] = useState(false)
     const [alertMessage, setAlertMessage] = useState('')
     const [alertStatus, setAlertStatus] = useState('')
    const [loading, setLoading] = useState(false)
     const location = useLocation();
     const { quizId } = location.state || {};
      const [performanceOpen, setPerformanceOpen] = useState(false);
    //  const [getQuestion, setGetQuestion] = useState()
    // console.log("getQuestion", getQuestion)
    const  [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>(() => {  
    const savedAnswers = localStorage.getItem('selectedAnswers');
    return savedAnswers ? JSON.parse(savedAnswers) : {};
   });
    const [startTime] = useState<string>(() => {
    const saved = localStorage.getItem('quizTime');
    if (saved) return saved;
    const now = new Date().toISOString();
    localStorage.setItem('quizTime', now);
    return now;
  });

    

   const handleGoBack = () => {
      navigate(-1)
      localStorage.removeItem('timeLeft');
      localStorage.removeItem('quizTime');
      localStorage.removeItem('quizStartTime');
      localStorage.removeItem('selectedAnswers');
      localStorage.removeItem('timeSpentOnAttendingQuiz');
    } 

//      const questionsString = localStorage.getItem("questions");
//   const parsedData = questionsString ? JSON.parse(questionsString) : {};

   const [questions, setQuestions] = useState<quizType[]>([]);
   const [questionData, setQuestionData] = useState<quizDataType>();

   type modalQuizType =  {
    correctAnswers: number;
    score: number
   }
const [quizData, setQuizData] = useState<modalQuizType | null>(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(() => {
//   const savedIndex = localStorage.getItem('currentQuestionIndex');
//   if (savedIndex) {
//     const index = parseInt(savedIndex, 10);
//     // Ensure the index is valid (between 0 and questions.length - 1)
//     return index >= 0 && index < parsedData?.questionDetails?.length ? index : 0;
//   }
//   return 0;
// });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)

  const [timeLeft, setTimeLeft] = useState(0);

useEffect(() => {
  if (questionData?.timePeriod) {
    setTimeLeft(questionData.timePeriod * 60);
  }
}, [questionData?.timePeriod]);

useEffect(() => {
  if (timeLeft <= 0) {
    r.handleExamSubmit();
    localStorage.removeItem("quizStartTime"); // clear start time when finished
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        localStorage.removeItem("quizStartTime");
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft]);

const minutes = Math.floor(timeLeft / 60);
const seconds = timeLeft % 60;

// const formattedTime = `${minutes}m ${seconds}s`;
// console.log("timeLeft:", timeLeft);
// console.log("formattedTime:", formattedTime);


  // const [timeLeft, setTimeLeft] = useState<number>(() => {
  // const savedTimeLeft = localStorage.getItem('timeLeft');
  // if (savedTimeLeft) {
  //   return parseInt(savedTimeLeft, 10);
  // }
//   const start = new Date(startTime).getTime();
//   const now = new Date().getTime();
//   const elapsedSeconds = Math.floor((now - start) / 1000);
//   const remaining = totalTimeSeconds - elapsedSeconds;
//   return remaining > 0 ? remaining : 0;
// });

   // Format to MM:SS
//  const minutes = Math.floor(timeLeft / 60);
  // const seconds = timeLeft % 60;

  // const storedPayloadString = localStorage.getItem("examFormSubmitPayload");
// const storedPayload = storedPayloadString ? JSON.parse(storedPayloadString) : null;


  // useEffect(() => {
  //   if (timeLeft <= 0) {
  //     // Submit exam when time is up
  //     r.handleExamSubmit();
  //     return;
  //   }

  //   const interval = setInterval(() => {
  //     setTimeLeft((prev) => {
  //       if (prev <= 1) {
  //         clearInterval(interval); // Stop the timer
  //         return 0;
  //       }
  //       return prev - 1;
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval); // Cleanup interval on unmount
  // }, [timeLeft]);

    //   useEffect(() => {
    //   localStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
    //   localStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
    //   localStorage.setItem('timeLeft', timeLeft.toString());

    // }, [selectedAnswers, currentQuestionIndex, timeLeft ]);

        // useEffect(() => {
        //   if (parsedData?.questionDetails?.length) {
        //     setQuestions(parsedData.questionDetails);
        //   }
        // }, []);

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

        useEffect(() => {
            const quizDetails = async (quizId: string | number) => {
              try {
                setLoading(false);
                const response = await Services.quiz.getQuizQuestion(quizId);
                setQuestions(response?.data?.quizQuestions?.questions || []);
                setQuestionData(response?.data?.quizQuestions || []);

              } catch (error) {
                void error
              } finally {
                setLoading(false);
              }
            };
        
            if (quizId) {
              quizDetails(quizId);
            }
          }, [quizId]);

    const r = {
      async handleExamSubmit ()  {
      
              try {
                setLoading(true)
               
                const questionDetails = Object.entries(selectedAnswers)
                .map(([index, userAnswer]) => ({
                  questionContent: questions[Number(index)].content ,
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
            localStorage.setItem("timeSpentOnAttendingQuiz", formattedTime);

                const quizPayload ={
                    userId: userId,
                    program: program,
                    quizId: quizId,
                    totalTime: timeSpentSeconds,
                    questionDetails: questionDetails
                   
                }      
                console.log(quizPayload)
                const response = await Services.quiz.submitQuizQuestion(quizPayload);
                setShowAlert(true)
                setAlertMessage(response?.message)
                setAlertStatus('success')
                setPerformanceOpen(true)
                const score = response.data.attempt.score;
               const correct = response.data.correctAnswers;
               localStorage.setItem("quizResult", JSON.stringify(response.data));
               setQuizData({ score, correctAnswers: correct });              //  localStorage.removeItem('timeLeft');
              //  localStorage.removeItem('quizTime');
              //  localStorage.removeItem('quizStartTime');
              //  localStorage.removeItem('selectedAnswers');
              //  localStorage.removeItem('timeSpentOnAttendingQuiz');
                // setTimeout(() => { setShowAlert(false); navigate('/jupeb/quiz-answer'); }, 5000)
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
              <h2> Mathematics </h2>
        <div className='flex gap-[10px] items-center'>
  <p className='font-bold pt-[7px] hidden md:block text-[17px]'>
    Time Remaining:
  </p>

   <span
      className={`px-8 py-1 rounded-[30px] text-white transition-colors duration-500 ${
        Number(minutes) < 5 ? "bg-[#ff0808]" : "bg-green-600"
      }`}
    >
      ⏱ {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </span>
</div>

      </div>

    <div className="w-[85%] lg:w-[45%]  h-[500px] md:h-[480px] mx-auto  mt-[7%] md:mt-[23%] lg:mt-[8%] pt-[40px] px-[20px] md:px-[50px] bg-primaryWhite rounded-[15px] shadow-md">
               <h2 className="font-semibold mb-[3%]"> { currentQuestion?.content} </h2>

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
          //   onChange={() => {
          //   const updatedAnswers = { ...selectedAnswers, [currentQuestionIndex]: option };
          //   setSelectedAnswers(updatedAnswers);
          //   localStorage.setItem("selectedAnswers", JSON.stringify(updatedAnswers));
          // }}

            onChange={() =>
              setSelectedAnswers((prev) => ({ ...prev, [currentQuestionIndex]: option }))
            }
            />
            {option}
          </label>
        ))}
      </div>
      <div className="lg:flex justify-between gap-[5%] mt-[5%]">
        <div className='pt-[20px]'> Questions: {currentQuestionIndex + 1} out of {questions?.length}</div>
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
          disabled={currentQuestionIndex >= questions?.length - 1}
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

         <PerformanceModal
        open={performanceOpen}
        onClose={() => setPerformanceOpen(false)}
        score={quizData?.score ?? 0}
        correct={quizData?.correctAnswers ?? 0}
      />
        </div>


        </div>
      </div>
    </div>
       {showAlert && <Alert message={alertMessage} status={alertStatus}  />}
    </div>
      )
}

export default Question