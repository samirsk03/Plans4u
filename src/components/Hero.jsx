import React from "react";
import background from "../assets/hero-BG.jpg";
import ContactForm from "./ContactForm";

const Hero = () => {
  return (
    <div
  className="w-full h-full bg-fixed flex flex-col md:flex-row justify-around items-center shadow-md  md:p-16 lg:p-28 gap-4"
  style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
>
  {/* Text Section */}
  <div className="text-start md:text-left md:max-w-lg">
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">Plans4U</h2>
    <p className="text-lg md:text-xl lg:text-2xl font-bold mt-4 md:mt-6">
      We Are Best Licensing and Tax Consultant. Plans4U is India’s <br className="hidden md:inline" /> First Online & Offline Licensing Service Provider Company
    </p>
    <button className="px-4 py-2 mt-6 md:mt-8 lg:mt-12 text-lg md:text-xl bg-cyan-500 rounded-full font-bold hover:bg-cyan-600 transition-colors">
      Get Free Consultation
    </button>
  </div>

  {/* Contact Form Section */}
  <div className="w-full mt-8 md:mt-0 md:w-auto">
    <ContactForm />
  </div>
</div>

  );
};

export default Hero;
