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

  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_CONTACT_KEY;
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
    .send(SERVICE_KEY, TEMPLATE_KEY, emailParams, PUBLIC_KEY)
    .then(
      (result) => {
        console.log(result.text);
        toast.success('Success! Please check your email.');
      },
      (error) => {
        console.log(error.text);
        toast.error('Error! Please try again.');
      }
    );
  }

  return (
    <div className="relative w-full p-4 sm:p-8 bg-white">
      <Fade duration={2500}>
            <div className="text-red-800 text-[3em] absolute ml-[5%] top-[-22px] font-bold" id="contact">CONTACT ME <FontAwesomeIcon icon={faArrowDown} /></div>
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
            <h1 className="text-4xl font-extrabold text-red-800 mb-8">About Me</h1>
          </Fade>
          <Fade duration={750} delay={2500} direction='up' cascade triggerOnce>
          <div className='text-slate-800 text-sm'>
            <p>I'm an experienced application developer with 10 years in the industry. I enjoy roles where I'm not confined to the same thing daily, some days I'm building user-facing front-end pages with JavaScript/React, other days I'm porting old C code to create PWAs.</p>
            <p>My design skills also come in handy. I can quickly tweak CSS to solve design issues without needing a lengthy process, saving time for everyone.</p>
            <p>Outside of work, I'm an avid football fan and a longtime (on-and-off) rock climber. I try to climb every other day because I find it clears my head, and obviously because I love to do it.</p>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
