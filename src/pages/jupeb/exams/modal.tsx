import React from "react";
import { Button, Modal } from "../../../components/shared";
import { Mark } from "../../../assets/icon";


interface ExamPreparingModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ExamPreparingModal: React.FC<ExamPreparingModalProps> = ({ open, setOpen }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)} className="w-[95%] md:w-[90%] lg:w-[45%]">
      <div className="flex items-center justify-center p-6">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Preparing Exams Question</h2>
          <div className="space-y-4 mx-auto flex flex-col items-center justify-center">
            <div className="flex gap-[10px]">
              <Mark />
              <span>Submitting Exams details</span>
            </div>
            <div className="flex gap-[10px] items-center ml-[21px]">
              <Mark />
              <span>Arranging Exams Questions</span>
            </div>
            <div className="flex gap-[10px] items-center">
              <Mark />
              <span>Getting Exams Question</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};


interface PaymentModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handlePayStackPayment: (amount: number, price: string) => void; 
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ open, setOpen, handlePayStackPayment  }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)} className="w-[95%] md:w-[90%] lg:w-[30%]">
      <div className="flex  flex-col items-center justify-center p-6">
        <div>
            <p className="text-xl"> Selecting any of the Payment method below will give you access to practice your subject combination. </p>
        </div>

        <h6 className="text-xl font-bold my-[30px]"> Choose Payment Method</h6>

        <div className="flex flex-col gap-[20px]">
            <Button onClick={() => handlePayStackPayment(500, '7 days')}> Pay N500 for 7days Practice access</Button>
            <Button onClick={() => handlePayStackPayment(1200,'30 days')}> Pay N1200 for 30days Practice access</Button>
            <Button onClick={() => handlePayStackPayment(3000, '3 months')}> Pay N3000 for 3 Months Practice access</Button>
            <Button onClick={() => handlePayStackPayment(4400, '5 months')}> Pay N4400 for 5 Months Practice access</Button>
            <Button onClick={() => handlePayStackPayment(6000, '9 months')}> Pay N6000 for 9 Months Practice access</Button>
        </div>
      </div>
    </Modal>
  );
};

