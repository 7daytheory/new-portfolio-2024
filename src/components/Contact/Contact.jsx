import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
 
const Contact = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const FORM_KEY = import.meta.env.VITE_FORM_KEY;
  const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_KEY;
  const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
  
    //Email Params
    const emailParams = {
      name: nameValue,
      email: emailValue,
      subject: subjectValue,
      message: messageValue,
    };
  
    // Send email with emailjs
    emailjs
    .send(SERVICE_KEY, TEMPLATE_KEY, emailParams, FORM_KEY)
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
  }

  return (
    <div className="relative w-full p-4 sm:p-8 dark:bg-red-800">
      <Fade duration={2500}>
            <div className="text-white text-[3em] absolute ml-[2%] top-[-22px] font-bold" id="contact">GET IN TOUCH <FontAwesomeIcon icon={faArrowDown} /></div>
        </Fade>
      <div className="flex flex-col sm:flex-row items-start gap-12 p-8 mx-auto max-w-4xl rounded-md font-[sans-serif]">
        <div className="flex-1 space-y-4">
          <form className='bg-slate-800 p-4 shadow' onSubmit={handleSubmit}>
            <Fade cascade duration={750} direction='left' triggerOnce>
            <input 
              type='text'
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder='Full Name'
              className="w-full text-gray-800 rounded-md py-2.5 mb-4 px-4 border text-sm shadow"
            />
            <input 
              type='email'
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder='example@gmail.com'
              className="w-full text-gray-800 rounded-md py-2.5 mb-4 px-4 border text-sm shadow"
            />
            <input 
              type='text'
              value={subjectValue}
              onChange={(e) => setSubjectValue(e.target.value)}
              placeholder='Subject'
              className="w-full text-gray-800 rounded-md py-2.5 mb-4 px-4 border text-sm shadow"
            />
            <textarea 
              placeholder='Please let me know how I can help.'
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              rows="6"
              className="w-full text-gray-800 rounded-md px-4 mb-4 border text-sm pt-2.5 shadow"
            />
            <button
              type='submit'
              className="text-white bg-red-800 hover:bg-red-700 align-right w-[25%] rounded-md text-sm shadow px-4 py-3 w-full !mt-6">
              Send Message
            </button>
            </Fade>
            </form>
        </div>

        <div className="flex-1">
          <Fade duration={1250} delay={2000} direction='up' triggerOnce>
            <h1 className="text-4xl font-extrabold text-slate-800 mb-8">About Me</h1>
          </Fade>
          <Fade duration={750} delay={2500} direction='up' cascade triggerOnce>
            <div className='text-white text-sm'>
              <p>I'm an experienced application developer that has worked in the industry for 10 years. I have enjoyed working for companies where I am not stuck in a box. Some days I'm building a user-facing front-end with Javascript/React, and other days I'm porting over old C code to make a PWA.</p>
              <p>I can also use some of my design talents to take the load off our developers where I notice something that does not fit. I can make a quick fix with CSS rather than having a whole design process that takes valuable time.</p>
              <p>I also do things outside of working on the computer, or I do my best to. I am an avid football fan and I've been a rock climber since I was a teenager (on and off). I try to go every other day as a workout currently, and I highly recommend it to anyone who needs to clear their head and do something active.</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
