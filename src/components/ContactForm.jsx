import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., send data to a server)
  };

  return (
    <form
      className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-semibold text-[#6EC1E4] mb-4 text-center">Contact Us</h2>

      {/* Full Name */}
      <div className="mb-2">
        <input
          type="text"
          {...register('fullName', { required: 'Full Name is required' })}
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6EC1E4] ${
            errors.fullName ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Full Name *"
        />
        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
      </div>

      {/* Phone */}
      <div className="mb-2">
        <input
          type="tel"
          {...register('phone', {
            required: 'Phone is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Enter a valid 10-digit phone number',
            },
          })}
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6EC1E4] ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Phone *"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      {/* Email */}
      <div className="mb-2">
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Enter a valid email address',
            },
          })}
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6EC1E4] ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Email *"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Service Dropdown */}
      <div className="mb-2">
        <select
          {...register('service', { required: 'Please select a service' })}
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6EC1E4] ${
            errors.service ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select a Service *</option>
          <option value="Pastries">Pastries</option>
          <option value="Cold Coffee">Cold Coffee</option>
          <option value="Milkshakes">Milkshakes</option>
        </select>
        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
      </div>

      

      {/* Additional Message */}
      <div className="mb-6">
        <textarea
          {...register('message')}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6EC1E4]"
          placeholder="Additional Message (optional)"
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#6EC1E4] text-white py-3 rounded-full hover:bg-[#5bb5d6] transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
