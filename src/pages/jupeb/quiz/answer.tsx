import React, {  useEffect, useState } from 'react';
import { Button } from '../../../components/shared';
import {  useLocation, useNavigate } from 'react-router-dom';
import { Services } from '../../../service';
import type { quizResult } from '../../../types/quiz';
import Spinner from '../../../components/helpers/spinner';


const Answer = () => {
  const navigate = useNavigate();
  // const handleGoBack = () => navigate(-1);

  // const location = useLocation();
  // const examId = location.state?.examId;

  // const getLocalStorageDetails = localStorage.getItem('submitQuestion');
  // const studentScore = getLocalStorageDetails ? JSON.parse(getLocalStorageDetails) : {};

  // const questionsString = localStorage.getItem('questions');
  // const parsedData = questionsString ? JSON.parse(questionsString) : {};

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<quizResult[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [historyData, setHistoryData] = useState<any>();
  const [correctWrongAnswer, setCorrectWrongAnswer] = useState<quizResult | null>(null);
   const location = useLocation()
     const { id } = location.state || {};
  const [currentIndex, setCurrentIndex] = useState(0);
 
const getQuizResult = JSON.parse(localStorage.getItem("quizResult") || '{}')
// const getQuizResultInformation = getQuizResult?.data
  // ✅ Fetch data only when examId exists
  useEffect(() => {
    const showHistoryResult = async (id: string | number) => {
      try {
        setLoading(true);
        const response = await Services.quiz.showResult(id);
        setCorrectWrongAnswer(response?.data || 0);
        setHistoryData(response?.data?.quizQuestions || []);
        setQuestions(response?.data?.quizQuestions?.answers || []);
      } catch (error) {
        void error
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      showHistoryResult(id);
    }
  }, [id]);

  // ✅ Navigation handlers
  const handleNext = () => {
    const total =  id ? questions?.length : getQuizResult?.attempt?.answers?.length || 0;
    if (currentIndex < total - 1) setCurrentIndex(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  // ✅ Correctly select current question based on data source
  const currentQuestion = id ? questions[currentIndex] : getQuizResult?.attempt?.answers?.[currentIndex];
  console.log('currentQuestion',currentQuestion)

  const totalQuestions = id ? questions.length : getQuizResult?.attempt?.answers?.length || 0;;

  return (
    <div className="bg-creamWhite w-full h-screen">
      {/* Header */}
      <div className="w-full bg-primaryWhite h-[90px] md:h-[100px] pt-[15px] md:pt-[30px] pl-[7%] md:pl-[3%] border-t border-b border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]">
        <div className="flex justify-end w-[48%] mx-auto">
          {/* <div onClick={handleGoBack}>
            <BackButton />
          </div> */}
          <div>
            <Button onClick={ () => navigate('/jupeb/overview')}>
              Dashboard
              </Button>
          </div>
        </div>
      </div>

      <div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="w-[90%] mt-[7%] md:w-[80%] lg:w-[45%] mx-auto px-[3%] bg-primaryWhite rounded-[10px] shadow-md font-bold">
            {/* Title */}
            <div className="text-[15px] md:text-[16px] flex justify-between items-center mb-[3%] pt-[5%]">
              <h2 className="text-[22px] font-bold">Exam Report</h2>
              <div>
                Total Percentage: {id ? historyData?.percentage : getQuizResult?.attempt?.percentage}
                
              </div>
            </div>

            {/* Question Section */}
            {currentQuestion ? (
              <div className="mb-4 text-[13px] md:text-[16px]">
                <div className="flex gap-[25px] md:gap-[5%]">
                  <p className="text-primaryBlue w-[110px] md:w-[120px]">
                    Question {currentIndex + 1} -
                  </p>
                  <p>{currentQuestion?.question || currentQuestion?.questionContent}</p>
                </div>

                <div className="flex gap-[30px] md:gap-[7%] pt-[2%]">
                  <p className="text-primaryBlue font-bold">Under Topic -</p>
                  <p>{currentQuestion?.topic || currentQuestion?.topics}</p>
                </div>

                <div className="flex gap-[30px] md:gap-[7%] pt-[2%]">
                  <p>Your Answer:</p>
                  <p>{currentQuestion?.selectedAnswer || currentQuestion?.userAnswer}</p>

                  {currentQuestion?.isCorrect === false ? (
                    <p className="text-primaryRed pl-[10px]">(incorrect) ✗</p>
                  ) : (
                    <p className="text-[#4bb851] font-bold">(correct) ✔</p>
                  )}
                </div>

                <div className="flex gap-[14px] md:gap-[4%] pt-[2%]">
                  <p>Correct answer:</p>
                  <p>{currentQuestion?.correctAnswer}</p>
                </div>
              </div>
            ) : (
              <p className="text-center py-6 text-gray-500">
                No question data found.
              </p>
            )}

            {/* Navigation Buttons */}
            <div className="flex mt-[5%]">
              <div className="w-[25%] lg:w-[170px]">
                { currentIndex > 0 &&
                   <button
                  className="border w-[130px] border-primaryBlue h-[40px] rounded-[8px] text-primaryBlue hover:bg-primaryBlue hover:text-white cursor-pointer"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                }
              
              </div>

              <div className="w-[30%] md:w-[15%]">
                <Button
                  onClick={handleNext}
                  disabled={currentIndex >= totalQuestions - 1}
                >
                  Next
                </Button>
              </div>
            </div>

            {/* Footer Summary */}
            <div className="md:flex justify-between mt-[3%] pt-[1%] border-t border-[#dbdbdb]">
              <div className="mb-[5%] flex flex-col gap-[15px] font-bold text-[14px] pt-[10px]">
                <p>
                  Correct Answers: {id ? correctWrongAnswer?.correctAnswers : getQuizResult?.correctAnswers}
                 
                </p>
                <p>
                  Wrong Answers: {id ? correctWrongAnswer?.wrongAnswers : getQuizResult?.wrongAnswers}
                 
                </p>
              </div>

              {currentIndex === totalQuestions - 1 && (
                <div className="text-[13px] md:text-[12px] lg:text-[14px] flex w-full md:w-[30%] gap-[20px] pt-[2%]">
                  <div className="w-full">
                    <div className="w-[35%] lg:w-[180px]">
                      <button
                        className="border w-[170px] h-[40px] border-primaryBlue rounded-[8px] text-primaryBlue hover:bg-primaryBlue hover:text-white cursor-pointer"
                        onClick={() => navigate('/jupeb/quiz')}
                      >
                        Retake Exam
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Answer;
