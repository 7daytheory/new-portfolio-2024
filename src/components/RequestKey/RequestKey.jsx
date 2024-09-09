import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestKey = ({ wrapWidth, closeForm }) => {
  const [firstName , setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [keyValue, setKeyValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate API key
    const generatedKey = generateKey() // Generate key(default 12 chars)
    setKeyValue(generatedKey);

    //email params
    const emailParams = {
      firstName,
      lastName,
      email: emailValue,
      phone: phoneValue,
      company: companyValue,
      apiKey: generatedKey,
    };

    // Send email with emailjs
    emailjs
      .send('your_service_id', 'your_template_id', emailParams, 'your_user_id')
      .then(
        (result) => {
          console.log(result.text);
          toast.success('API key sent successfully to your email!');
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send the API key.');
        }
      );
  };

  return (
    <div
      className="p-6 bg-gray border-lg border-2 relative border-slate-800 md:border-slate-800 rounded-lg shadow-[0px_0px_5px_0px_rgba(255,255,255,0.25)] m-auto"
      style={{ width: `${wrapWidth}px` }}
    >
      <p className="absolute top-[0] font-bold right-[10px] text-white cursor-pointer"
        onClick={closeForm}>x</p>
      <h1 className="font-bold text-white tracking-widest text-center">Request an API Key</h1>
      <form className="max-w-md mx-auto text-left" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-left"
              placeholder=" "
              required
            />
            <label
              htmlFor="first_name"
              className="peer-focus:font-medium absolute text-sm dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name <span className="text-slate-800"> * </span>
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-left"
              placeholder=" "
              required
            />
            <label
              htmlFor="last_name"
              className="peer-focus:font-medium absolute text-sm dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name <span className="text-slate-800"> * </span>
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-left"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address <span className="text-slate-800"> * </span>
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-left"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (Optional)
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="company"
              id="company"
              value={companyValue}
              onChange={(e) => setCompanyValue(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-left"
              placeholder=" "
              required
            />
            <label
              htmlFor="company"
              className="peer-focus:font-medium absolute text-sm dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company <span className="text-slate-800"> * </span>
            </label>
          </div>
        </div>
        <div className="btn-wrap">
          <button
            type="submit"
            className="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-left dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          >
            Submit
          </button>
        </div>
      </form>

      {keyValue && (
        <div className="display-api mt-4">
          Your API key is {keyValue}. Check your email if you'd like to save it for later. Thank you for your interest in viewing my resume via an API request.
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default RequestKey;
