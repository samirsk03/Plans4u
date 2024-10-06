import React from "react";



const FeedbackCard = ({ feedback, name, designation }) => {
  return (
    <div className="bg-white min-w-60 h-auto shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <p className="text-lg italic text-gray-700 mb-4">
        "{feedback}"
      </p>
      <h4 className="text-xl font-bold text-[#6EC1E4]">
        {name}
      </h4>
      <span className="text-sm text-gray-500">
        {designation}
      </span>
    </div>
  );
};

export default FeedbackCard;
