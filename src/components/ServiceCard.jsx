import React from 'react'

const ServiceCard = ({ title, description, icon }) => {
    return (
      <div className="service-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[#6EC1E4]">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  };

export default ServiceCard