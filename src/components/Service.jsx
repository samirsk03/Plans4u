import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";

// List of services
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



const Services = () => {
 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#6EC1E4]">
      Our Services
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  </div>
  );
};

export default Services;
