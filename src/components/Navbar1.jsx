import React, { useState } from "react";
import logo from '../assets/plans4uLogo.png'
const services = [
  { title: "Licensing Services", description: "Comprehensive licensing services for all business types.", icon: "🛠️" },
  { title: "Tax Consultancy", description: "Expert tax consultation and filing services.", icon: "📊" },
  { title: "Business Registration", description: "Get your business registered with ease.", icon: "🏢" },
  { title: "Compliance Management", description: "Manage regulatory compliance efficiently.", icon: "📋" },
  { title: "GST Registration", description: "End-to-end GST registration and filing solutions.", icon: "💼" },
  { title: "Trademark Registration", description: "Secure your brand with trademark registration.", icon: "™️" },
  { title: "PAN/TAN Services", description: "Simplified PAN/TAN application services.", icon: "💳" },
  { title: "ISO Certification", description: "Get your business certified with ISO standards.", icon: "📜" },
  { title: "Company Registration", description: "Complete company registration services.", icon: "🏛️" },
  { title: "FSSAI Registration", description: "Food safety and standards registration made easy.", icon: "🍴" },
  { title: "Annual Filings", description: "Ensure timely and accurate annual filings.", icon: "🗂️" },
  { title: "IEC Registration", description: "Import Export Code registration services.", icon: "🚢" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md fixed w-full z-10">
      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <img src={logo} alt="Brand Logo" className="w-24 mb-3" />

        {/* Nav Items (hidden on mobile) */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-[#6EC1E4] font-semibold">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-[#6EC1E4] font-semibold">
            About
          </a>
          <div className="relative group">
            <button className="text-gray-700 hover:text-[#6EC1E4] font-semibold flex items-center">
              Service <span className="ml-1">▼</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 rounded-md">
              {services.map((item)=> (
                <a key={item.title} href={`/${item.title}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> {item.title} </a>
              ) )}
              
            </div>
          </div>
          <a href="#" className="text-gray-700 hover:text-[#6EC1E4] font-semibold">
            Contact
          </a>
          {/* Dropdown */}
          
        </div>

        {/* Hamburger Icon (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-gray-700 hover:text-[#6EC1E4]">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-20 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close button inside sidebar */}
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-gray-700 hover:text-[#6EC1E4]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Nav Items */}
        <div className="flex flex-col space-y-4 mt-8 px-6">
          <a href="#" className="text-gray-700 hover:text-[#6EC1E4] font-semibold">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-[#6EC1E4] font-semibold">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-[#6EC1E4] font-semibold">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-[#6EC1E4] font-semibold">
            Contact
          </a>
          <a href="#" className="text-gray-700 hover:text-[#6EC1E4] font-semibold">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
