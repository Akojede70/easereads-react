import React from "react";
import { Button, Modal } from "../../../components/shared";
import { Cup } from "../../../assets/icon";
import { useNavigate } from "react-router-dom";

interface PerformanceModalProps {
  open: boolean;
  onClose: () => void;
  correct: number;
  score: number
}

const PerformanceModal: React.FC<PerformanceModalProps> = ({ open, onClose, correct, score }) => {
    const navigate = useNavigate()
  return (
    <Modal open={open} onClose={onClose} className="w-[95%] md:w-[90%] lg:w-[30%]">
      <div className="flex flex-col items-center justify-center gap-[20px] mt-[5%] mb-[5%]">
        <Cup />
        <p className="text-3xl font-bold text-[#333333]">Keep Practicing</p>

        <div className="text-[17px] w-full text-[#333333] leading-[25px]">
          <div className="flex gap-[20px] my-[3%]">
            <div className="bg-[#e8f1f9] w-[50%] rounded-[10px] text-center py-[5%] flex flex-col gap-[20px]">
              <p className="text-[25px] font-bold text-primaryBlue">
                {score}
              </p>
              <p>Score</p>
            </div>
            <div className="bg-[#fff6e9] w-[50%] rounded-[10px] text-center py-[5%] flex flex-col gap-[20px]">
              <p className="text-[25px] font-bold text-[#ff9f23]">
                {correct}
              </p>
              <p>Correct</p>
            </div>
          </div>

          <div className="flex flex-col gap-[10px] mt-[30px]">
            <Button onClick={ () => navigate("/jupeb/quiz")} type="submit">Take another Quiz</Button>
            <Button onClick={ () => navigate("/jupeb/quiz-answer")} variant="outline" textColor="#106EBE">
              View Correction
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PerformanceModal;
