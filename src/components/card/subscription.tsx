interface SelectableCardProps {
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SelectableSubject = ({ label, checked, onChange }: SelectableCardProps) => {
  return (
    <div className="flex gap-[15px] mt-[20px] items-center">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 rounded-full cursor-pointer accent-[#106EBE] border-2 border-gray-300 focus:ring-2 focus:ring-[#106EBE] focus:ring-opacity-50"
      />

      {/* Card */}
      <div className="border border-[#e7e7e7] p-2 rounded-[20px] w-[135px] font-bold bg-[#f7f7f7]">
        <p>{label}</p>
      </div>
    </div>
  );
};


interface HistoryCardProps {
  subjects: string[];
  statusText: string;
  statusColor?: string;
  duration: string;
  expiryDate: string;
  daysLeft: number;
  totalPaid: string;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({
  subjects,
  statusText,
  statusColor = "bg-primaryYellow",
  duration,
  expiryDate,
  daysLeft,
  totalPaid,
}) => {
  return (
    <div className="bg-primaryWhite mt-[30px] mx-auto w-[92%] h-[430px] md:h-[600px] lg:h-[350px] rounded-[20px] pt-[20px] pl-[20px] lg:pl-[50px]">
      <div className="border border-borderColor rounded-[10px] w-[95%] px-[20px] lg:px-[50px] mt-[2%]">
        {/* Header */}
        <p className="text-[23px] font-bold text-primaryBlue pt-[10%] lg:pt-[1%]">Subjects</p>

        <div className="lg:flex justify-between font-bold pt-[5%] lg:pt-[1%]">
          {/* Subjects List */}
          <div className="lg:flex space-y-[4%] lg:space-y-[0%] gap-[90px]">
            {subjects.map((subj, idx) => (
              <p key={idx}>{subj}</p>
            ))}
          </div>

          {/* Status */}
          <div className={`${statusColor} w-[197px] md:w-[230px] lg:w-[16%] mt-[7%] lg:mt-0 pl-[5%] lg:pl-[1%] rounded-[20px]`}>
            <p className="font-bold">{statusText}</p>
          </div>
        </div>

        <div className="w-full mt-[9%] md:mt-[4%] lg:mt-[2%] border border-borderColor"></div>

        {/* Duration Section */}
        <div className="mb-[9%] lg:mb-[0%]">
          <p className="text-[18px] font-bold pt-[5%] lg:pt-[2%]">Duration</p>
          <div className=" space-y-[3%] lg:space-y-[0%] lg:flex justify-between gap-[30px] py-[2%]">
            <p className="bg-primaryBlue w-[53%] md:w-[25%] lg:w-[8%] mt-[8%] md:mt-[3%] lg:mt-0 p-[10px] rounded-[10px] text-primaryWhite">
              {duration}
            </p>
            <p className="text-[18px] font-bold">Expires: {expiryDate}</p>
            <p className="text-primaryRed font-bold">{daysLeft} days left</p>
            <p className="font-bold">Total Paid {totalPaid}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

