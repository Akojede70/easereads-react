// import React from "react";

// type ModalProps = {
//   open: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
//   width?: string; 
// };

// const Modal: React.FC<ModalProps> = ({ open, onClose, children, width }) => {
//   if (!open) return null;

//   const modalWidth = width ? width : "max-w-md";

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div
//         className={`bg-white p-6 rounded-[15px] relative ${modalWidth}`}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-5 right-7 text-lg font-bold cursor-pointer"
//         >
//           ✕
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string; // e.g. "500px", "70%", "w-[80%]" if using Tailwind
};

const Modal: React.FC<ModalProps> = ({ open, onClose, children, width }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        style={{ width: width || "500px" }} // 👈 control width here
        className="bg-white p-6 rounded-[15px] relative"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-7 text-lg font-bold cursor-pointer"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
