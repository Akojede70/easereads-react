import React, { useEffect, useState } from 'react';
import { BackButton, Button } from '../../../components/shared';
import { useLocation, useNavigate } from 'react-router-dom';
import { Services } from '../../../service';
import type { ExamAnswer } from '../../../types/exam';
import { Helper } from '../../../components';

const { Spinner } = Helper;

const Answer = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  const location = useLocation();
  const examId = location.state?.examId;

  const getLocalStorageDetails = localStorage.getItem('submitQuestion');
  const studentScore = getLocalStorageDetails ? JSON.parse(getLocalStorageDetails) : {};

  const questionsString = localStorage.getItem('questions');
  const parsedData = questionsString ? JSON.parse(questionsString) : {};

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<ExamAnswer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Fetch data only when examId exists
  useEffect(() => {
    const overviewInfo = async (examId: string | number) => {
      try {
        setLoading(true);
        const response = await Services.exams.examDetails(examId);
        setQuestions(response?.examDetails?.answers || []);
      } catch (error) {
        void error
      } finally {
        setLoading(false);
      }
    };

    if (examId) {
      overviewInfo(examId);
    }
  }, [examId]);

  // ✅ Navigation handlers
  const handleNext = () => {
    const total = examId ? questions.length : studentScore?.results?.length || 0;
    if (currentIndex < total - 1) setCurrentIndex(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  // ✅ Correctly select current question based on data source
  const currentQuestion = examId
    ? questions[currentIndex]
    : studentScore?.results?.[currentIndex];

  const totalQuestions = examId
    ? questions.length
    : studentScore?.results?.length || 0;

  return (
    <div className="bg-creamWhite w-full h-screen">
      {/* Header */}
      <div className="w-full bg-primaryWhite h-[90px] md:h-[100px] pt-[15px] md:pt-[30px] pl-[7%] md:pl-[3%] border-t border-b border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]">
        <div className="flex gap-[68%] w-[48%] mx-auto">
          <div onClick={handleGoBack}>
            <BackButton />
          </div>
          <div>
            <Button onClick={ () => navigate('/jupeb/overview')}>
              Dashboard
              </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="w-[90%] mt-[7%] md:w-[80%] lg:w-[45%] mx-auto px-[3%] bg-primaryWhite rounded-[10px] shadow-md font-bold">
            {/* Title */}
            <div className="text-[15px] md:text-[16px] flex justify-between items-center mb-[3%] pt-[5%]">
              <h2 className="text-[22px] font-bold">Exam Report</h2>
              <div>
                Total Percentage:{' '}
                {examId
                  ? `${Math.round((questions.filter(q => q.isCorrect).length / questions.length) * 100)}%`
                  : `${Math.round(studentScore?.percentageScore)}%`}
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
                  Correct Answers:{' '}
                  {examId
                    ? questions.filter(q => q.isCorrect).length
                    : studentScore?.totalCorrect}{' '}
                  out of{' '}
                  {examId
                    ? questions.length
                    : parsedData?.questionDetails?.length}
                </p>
                <p>
                  Wrong Answers:{' '}
                  {examId
                    ? questions.filter(q => !q.isCorrect).length
                    : studentScore?.totalWrong}{' '}
                  out of{' '}
                  {examId
                    ? questions.length
                    : parsedData?.questionDetails?.length}
                </p>
              </div>

              {currentIndex === totalQuestions - 1 && (
                <div className="text-[13px] md:text-[12px] lg:text-[14px] flex w-full md:w-[50%] gap-[20px] pt-[2%]">
                  <div className="w-full">
                    <div className="w-[35%] lg:w-[180px]">
                      <button
                        className="border w-[170px] h-[40px] border-primaryBlue rounded-[8px] text-primaryBlue hover:bg-primaryBlue hover:text-white cursor-pointer"
                        onClick={() => navigate('/jupeb/exam-form')}
                      >
                        Retake Exam
                      </button>
                    </div>
                  </div>
                  <div className="w-full">
                    <Button
                      onClick={() => navigate('/jupeb/exam-solution-answer')}
                    >
                      Result Breakdown
                    </Button>
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
