import React, { useEffect, useState } from 'react'
import { BackButton, Button } from '../../../components/shared';
import { useNavigate } from 'react-router-dom';

const Answer = () => {
  const navigate = useNavigate()
  
      const handleGoBack = () => {
    navigate('/jupeb/exam-complete')
  }

      type TopicAnalysis = {
      topic: string;
      correct: number;
      failed: number;
      total: number;
      percentage: number;
      failedFlag: boolean;
    }; 

    const [topicAnalysis, setTopicAnalysis] = useState<TopicAnalysis[]>([]);
    console.log("topicAnalysis", topicAnalysis)

    useEffect(() => {
     const getLocalStorageDetails = localStorage.getItem("submitQuestion")
      const storedData = getLocalStorageDetails ? JSON.parse(getLocalStorageDetails) : {}
      
    if (storedData?.topicAnalysis) {
      setTopicAnalysis(storedData.topicAnalysis);
    }
  }, []);

  return (
    <div className='bg-creamWhite h-screen w-full pt-[7%] lg:pt-[0%] overflow-auto '>
        <div className='w-full bg-primaryWhite h-[90px] md:h-[100px] pt-[15px] md:pt-[30px] pl-[7%] md:pl-[3%] border-t border-b border-[#d5d5d5] shadow-[0_4px_10px_#e0e0e0]'>
          <div className='flex gap-[68%] w-[48%]  mx-auto'>
           <div  
          onClick={ handleGoBack}
          >
                        <BackButton />
          </div>
          <div>
            <Button onClick={ () => navigate('/jupeb/overview')} > Dashboard </Button>
          </div>
              </div>
            </div>
     <div className="w-[90%] md:w-[80%] text-[12px] mt-[2%] md:text-[16px] lg:w-[45%] h-[800px] md:h-[960px] mx-auto px-[3%] mb-[40px] bg-primaryWhite rounded-[10px] shadow-md ">
    
      <div className=" mb-[3%] pt-[10%] md:pt-[5%] pl-[1%] lg:pl-0">
        <h2 className="text-xl font-bold"> Your Performance Breakdown </h2>
        <p className='pt-[3%]'> Understand how well you performed in each topic. Revisit resources where needed.</p>
      </div>
        <div className='flex gap-[7px] pl-[1%] lg:pl-0'>
          <p className='font-bold text-[17px]'> Number Of Times Attempted</p> 
          <p> ({topicAnalysis?.length}) </p>
        </div>


             {topicAnalysis.map((topic, index) => (
          <div
            key={index}
            className={`border-[2px] border-[#e8e8e8] px-[20px] md:px-[45px] mt-[30px] rounded-[15px] border-r-[15px] ${
              topic.failedFlag ? "border-r-[#ff0808]" : "border-r-[#4cb851]"
            }`}
          >
            {/* Topic name */}
            <div className="mb-4 pt-[20px]">
              <div className="flex gap-[10px] w-[80%] flex-wrap">
                <p className="font-bold text-[15px]">Topic:</p>
                <p className="bg-primaryYellow px-[12px] rounded-[10px] text-[#fff] text-center">
                  {topic.topic}
                </p>
              </div>

              {/* Correct Answers */}
              <div className="flex gap-[20px] pt-[5%] font-bold flex-wrap">
                <p>
                  Correct Answers: {topic.correct} out of {topic.total}
                </p>
                <p className="text-[#4bb851] font-bold">(Correct) ✔</p>
              </div>

              {/* Wrong Answers */}
              <div className="flex gap-[20px] pt-[3%] font-bold flex-wrap">
                <p>
                  Wrong Answers: {topic.failed} out of {topic.total}
                </p>
                <p className="text-[#ff0808] font-bold">(Incorrect) ❌</p>
              </div>

              {/* Percentage & Recommendation */}
              <div className="pt-[20px]">
          

                <p className="pt-[10px]">
                  <span className="font-bold">Recommendation: </span>
                  {topic.failedFlag
                    ? "We suggest reviewing this topic using the resources below."
                    : "You’ve mastered this topic — great job!"}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-[5%] mt-[5%] mb-[5%] flex-wrap">
              <div className="w-[45%] md:w-[25%]">
                <Button>Watch Video</Button>
              </div>

              <div className="w-[35%] lg:w-[180px]">
                <button
                  className="border w-[160px] h-[43px] border-primaryBlue rounded-[8px] p-[10px] text-primaryBlue hover:bg-primaryBlue hover:text-white cursor-pointer"
                >
                  Read Text Book
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
  )
}

export default Answer