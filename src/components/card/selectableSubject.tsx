interface SelectableCardProps {
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SelectableSubject = ({ label, checked, onChange }: SelectableCardProps) => {
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

export default SelectableSubject;