import React from "react";
import { Modal } from "../../../components/shared";
import { Button } from "../../../components/shared";
import { AlatPayIcon, FlutterWaveIcon, IconForReferral, PaystackIcon } from "../../../assets/icon";


interface SummaryModalProps {
  open: boolean;
  onClose: () => void;
  summaryData?: {
    subjects?: string[];
    discount?: string;
    duration?: string;
    price?: number | string;
    totalDiscount?: string;
    additionalService?: string;
    totalPrice?: string;
    balance?: string;

  };
}

const PaymentSubscriptionModal: React.FC<SummaryModalProps> = ({ open, onClose, summaryData }) => {
  return (
    <Modal open={open} onClose={onClose} className="w-[95%] md:w-[90%] lg:w-[45%]">
      <div className="px-[2%] bg-white rounded-[12px] p-[20px]">
        <div>
          <p className="text-[25px] text-primaryBlue font-bold">Summary</p>

          {/* Subjects */}
          <p className="pt-[20px] font-bold">Subjects</p>
          <div className="text-[13px] md:text-[18px] border-2 p-[12px] border-[#e8e8e8] flex justify-between rounded-[8px] mt-[10px]">
            <div className="text-[16px] md:flex gap-[25px] pl-[20px] pt-[5px] font-bold">
              {summaryData?.subjects?.map((subject, i) => (
                <p key={i}>{subject}</p>
              ))}
            </div>
            <div className="bg-primaryYellow rounded-[20px] p-[10px] md:px-[10px] text-[16px]">
              <p>{summaryData?.discount || "3% discount"}</p>
            </div>
          </div>

          {/* Additional Services */}
          <p className="pt-[20px] font-bold text-[14px] md:text-[18px]">Additional Services</p>
          <div className="border-2 p-[12px] border-[#e8e8e8] flex justify-between rounded-[8px] mt-[10px]">
            <div className="flex gap-[20px] pl-[20px] pt-[5px] font-bold text-[12px] md:text-[17px]">
              <input
                type="checkbox"
                className="custom-checkbox w-5 h-5 rounded-full cursor-pointer  focus:ring-opacity-50"
              />
              <p>Live Class</p>
              <input
                type="checkbox"
               className="custom-checkbox w-5 h-5 rounded-full cursor-pointer  focus:ring-opacity-50"
              />
              <p>Video Tutorial</p>
            </div>
          </div>

          {/* Duration */}
          <p className="pt-[20px] font-bold text-[14px] md:text-[18px]">Duration</p>
          <div className="border-2 p-[12px] border-[#e8e8e8] flex justify-between rounded-[8px] mt-[10px] text-[13px] md:text-[20px]">
            <div className="flex gap-[25px] pl-[20px] pt-[5px] font-bold">
              <p>{summaryData?.duration || "1 Month"}</p>
            </div>

            <div className="bg-primaryYellow rounded-[20px] p-[5px] px-[2%] text-[16px]">
              <p>{summaryData?.discount || "3% discount"}</p>
            </div>

            <div className="font-bold pt-[2%] md:pt-[1%] lg:pt-0">
              {summaryData?.price || "N5,000"}
            </div>
          </div>
        </div>

        {/* Summary Total Section */}
        <div className="text-[1px] md:text-[20px] flex justify-end gap-[40px] mt-[4%]">
          <div className="flex flex-col gap-[20px] font-bold">
            <p>Total discount</p>
            <p>Additional Services</p>
            <p>Total Price</p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <p>
              <span className="font-bold pl-[19%] md:pl-0">{summaryData?.totalDiscount || "N2,000"}</span>{" "}
              (20% discount)
            </p>
            <p>
              <span className="font-bold pl-[19%] md:pl-0">{summaryData?.additionalService || "N1,000"}</span>{" "}
              (Video Tutorial)
            </p>
            <p className="font-bold pl-[120px] lg:pl-[67%] pt-[7%] md:pt-0">{summaryData?.totalPrice || "N5,000"}</p>
          </div>
        </div>

        <div className="border border-[#e8e8e8] w-full my-[5%] md:my-[2%]" />

        <div className="flex justify-end gap-[125px] md:gap-[195px]  lg:gap-[230px] font-bold text-[15px] md:text-[20px]">
          <p>Balance to pay</p>
          <p>{summaryData?.balance || "N3,000"}</p>
        </div>

        {/* Payment Methods */}
        <div className="text-[14px] md:text-[16px] mt-[15px] lg:mt-[12%]">
          <p className="font-bold">Select Payment Method</p>
          <div className="border-[2px] border-[#e8e8e8] w-full rounded-[10px] h-[190px] lg:h-[210px] pt-[3%] pl-[5%] mt-[2%]">
            <div className="flex gap-[4px] md:gap-[20px]">
              <input 
              name="paymentMethod"
              type="radio" 
              className="custom-checkbox w-5 h-5 rounded-full cursor-pointer  focus:ring-opacity-50" />
              <IconForReferral />
              <p className="font-bold">Referral Points</p>
              <div className="bg-primaryYellow w-[35%] md:w-[40%] lg:w-[50%] p-[5px] pl-[5%] md:pl-[2%] rounded-[20px]">
                <p className="font-bold text-[12px] md:text-[18px] lg:text-[16px]">Insufficient (15 Points)</p>
              </div>
            </div>

            <div className="flex gap-[20px] mt-[10px]">
              <input 
              name="paymentMethod"
              type="radio" 
              className="custom-checkbox w-5 h-5 rounded-full cursor-pointer  focus:ring-opacity-50"/>
              <FlutterWaveIcon />
              <p className="font-bold">Flutterwave</p>
            </div>

            <div className="flex gap-[20px] mt-[10px]">
              <input 
              name="paymentMethod"
              type="radio" 
              className="custom-checkbox w-5 h-5 rounded-full cursor-pointer  focus:ring-opacity-50" />
              <PaystackIcon />
              <p className="font-bold">Paystack</p>
            </div>

            <div className="flex gap-[20px] mt-[10px]">
              <input 
              name="paymentMethod"
              type="radio" 
              className="custom-checkbox w-5 h-5 rounded-full cursor-pointer  focus:ring-opacity-50"/>
              <AlatPayIcon />
              <p className="font-bold">ALAT PAY</p>
            </div>
          </div>
        </div>

        <div className="text-[15px] md:text-[22px] mt-[4%] mb-[2%]">
          <Button>Pay {summaryData?.balance || "N3,000"} Now</Button>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentSubscriptionModal;
