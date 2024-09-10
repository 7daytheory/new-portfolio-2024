import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fade } from 'react-awesome-reveal';

const RequestKey = ({ wrapWidth, closeForm }) => {
  const [firstName , setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [keyValue, setKeyValue] = useState('');

  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_API_KEY;
  const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;

  const generateKey = (length = 12) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate API key
    const generatedKey = generateKey()
    setKeyValue(generatedKey);

    //email params
    const emailParams = {
      name: firstName + ' ' + lastName,
      email: emailValue,
      phone: phoneValue,
      company: companyValue,
      apiKey: generatedKey,
    };

    // Send email with emailjs
    emailjs
    .send(SERVICE_KEY, TEMPLATE_KEY, emailParams, PUBLIC_KEY)
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
      className="p-6 relative border-slate-800 md:border-slate-800 rounded-lg shadow-[0px_0px_5px_0px_rgba(255,255,255,0.25)] m-auto"
      style={{ width: `${wrapWidth}px` }}
    >
      <p className="absolute top-[0] font-bold right-[10px] text-white cursor-pointer"
        onClick={closeForm}>x</p>
      <h1 className="font-bold text-white tracking-widest text-center">Request an API Key</h1>
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-red-800 border-white border-2 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-8 bg-white border-2 border-red-800 shadow-lg sm:rounded-3xl sm:p-8">
          <div class="max-w-lg mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Request an API Key</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <form class="max-w-md mx-auto text-left" onSubmit={handleSubmit}>
                  <div class="relative mb-6 pointer">
                    <input
                      autocomplete="off"
                      id="first_name"
                      name="first_name"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-red-600"
                      placeholder="First Name"
                      required
                    />
                    <label
                      for="first_name"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >First Name</label>
                  </div>

                  <div class="relative mb-6 pointer">
                    <input
                      autocomplete="off"
                      id="last_name"
                      name="last_name"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-red-600"
                      placeholder="Last Name"
                      required
                    />
                    <label
                      for="last_name"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Last Name</label>
                  </div>

                  <div class="relative mb-6 pointer">
                    <input
                      autocomplete="off"
                      id="email"
                      name="email"
                      type="email"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-red-600"
                      placeholder="Email Address"
                      required
                    />
                    <label
                      for="email"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Email Address</label>
                  </div>

                  <div class="relative mb-6 pointer">
                    <input
                      autocomplete="off"
                      id="phone"
                      name="phone"
                      type="tel"
                      value={phoneValue}
                      onChange={(e) => setPhoneValue(e.target.value)}
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-red-600"
                      placeholder="Phone (Optional)"
                    />
                    <label
                      for="phone"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Phone (Optional)</label>
                  </div>

                  <div class="relative mb-6 pointer">
                    <input
                      autocomplete="off"
                      id="company"
                      name="company"
                      type="text"
                      value={companyValue}
                      onChange={(e) => setCompanyValue(e.target.value)}
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-red-600"
                      placeholder="Company"
                      required
                    />
                    <label
                      for="company"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Company</label>
                  </div>

                  <div class="relative mb-6 pointer flex justify-end">
                    <button class="bg-slate-800 hover:bg-slate-700 text-white rounded-md px-4 py-2">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

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
