import React from 'react';
import logo from '../assets/plans4uLogo.png'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Brand and Logo */}
        <div className="flex flex-col items-start ">
          <img src={logo} alt="Brand Logo" className="w-24 mb-3" />
        </div>

        {/* Address and Contact */}
        <div>
          <h4 className="text-lg font-semibold text-[#6EC1E4] mb-3">Contact Us</h4>
          <p>Address: 123 Kitchen Street, Your City</p>
          <p>Phone: +123-456-7890</p>
          <p>Email: contact@yourkitchen.com</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-[#6EC1E4] mb-3">Services We Provide</h4>
          <ul>
            <li>Pastries</li>
            <li>Cold Coffee</li>
            <li>Milkshakes</li>
            {/* Add more services here */}
          </ul>
        </div>

        {/* Embedded Map */}
        <div>
          <h4 className="text-lg font-semibold text-[#6EC1E4] mb-3">Our Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9559283156161!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e704653b0267!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1632977621813!5m2!1sen!2sau"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Plans4U. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
