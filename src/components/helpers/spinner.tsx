import React from "react";

interface SpinnerProps {
  paddingTop?: number;
  marginLeft?: number;
  marginRight?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ paddingTop = 20, marginLeft = 0, marginRight = 0 }) => {
  return (
<div
  className="absolute left-0 z-30 w-full flex justify-center items-start pointer-events-none"
  style={{ paddingTop: `${paddingTop}%`, marginLeft: `${marginLeft}%`, marginRight: `${marginRight}%` }}
>
  <div className="w-[50px] h-[50px] border-2 border-[#0842A6] border-t-transparent rounded-full animate-spin" />
</div>

  );
};

export default Spinner;
