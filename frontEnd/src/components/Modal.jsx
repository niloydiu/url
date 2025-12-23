import React from "react";

const Modal = ({ open, onClose, title, message, type = "info" }) => {
  if (!open) return null;
  const bg =
    type === "error"
      ? "bg-red-600"
      : type === "success"
      ? "bg-green-600"
      : "bg-blue-600";
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative max-w-md w-[90%] mx-auto rounded-lg overflow-hidden shadow-lg">
        <div className={`${bg} px-4 py-3`}>
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
        <div className="bg-white p-4">
          <p className="text-sm text-gray-800 whitespace-pre-wrap">{message}</p>
          <div className="mt-4 text-right">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
