import React from "react";

interface NotifyProps {
  message: string;
  status: string;
}

const Alert = ({ message, status }: NotifyProps) => {
  const isError = status === "error";

  return (
    <div
      className={`fixed top-[20px] right-5 z-40 px-5 py-4 rounded-md font-medium text-[15px] animate-slideInRight`}
      style={{
        backgroundColor: isError ? "#fee2e2" : "#dcfce7",
        border: `1px solid ${isError ? "#fee2e2" : "#dcfce7"}`,
        color: isError ? "#991919" : "#116932",
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
