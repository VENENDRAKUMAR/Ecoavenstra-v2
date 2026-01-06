import React from 'react';
import { RxCross2 } from "react-icons/rx";
import "../../index.css"; // Ensure this file is imported

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className=" fixed inset-0 p-4 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white HideScrollBar p-8 rounded-lg shadow-lg max-w-lg w-full sm:w-4/5 md:w-3/5 lg:w-2/5 relative overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <RxCross2 size={25} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
