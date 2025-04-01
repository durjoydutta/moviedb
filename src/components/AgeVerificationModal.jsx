import React from "react";

const AgeVerificationModal = ({ setIsAdult, setShowModal }) => {
  const handleAdultSelection = (isAdult) => {
    setIsAdult(isAdult);
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Age Verification</h2>
        <p className="mb-6">Are you over 18 years old?</p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={() => handleAdultSelection(true)}
          >
            Yes
          </button>
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            onClick={() => handleAdultSelection(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationModal;