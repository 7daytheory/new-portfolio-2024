import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import ClimbingPhoto from '../../assets/climbing-photo.jpg';
 
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
      <div className="flex flex-col sm:flex-row items-start gap-12 p-8 mx-auto max-w-4xl rounded-lg font-[sans-serif]">
        <div className="flex-1 space-y-4 border-4 border-white shadow-lg rounded-lg">
          <form className='bg-slate-800 p-4 shadow border-red-800 border-4' onSubmit={handleSubmit}>
            <input 
              type='text'
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder='Full Name'
              className="w-full text-slate-800 rounded-md py-2.5 mt-4 px-4 border text-sm shadow w-[95%]"
            />
            <input 
              type='email'
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder='example@gmail.com'
              className="w-full text-slate-800 rounded-md py-2.5 mt-4 px-4 border text-sm shadow w-[95%]"
            />
            <input 
              type='text'
              value={subjectValue}
              onChange={(e) => setSubjectValue(e.target.value)}
              placeholder='Subject'
              className="w-full text-slate-800 rounded-md py-2.5 mt-4 px-4 border text-sm shadow w-[95%]"
            />
            <textarea 
              placeholder='Please let me know how I can help.'
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              rows="6"
              className="w-full text-slate-800 rounded-md px-4 mt-4 border text-sm pt-2.5 shadow w-[95%]"
            />
            <div className="flex justify-end">
              <button
                type='submit'
                className="text-white bg-red-800 hover:bg-red-700 w-[100%] lg:w-[35%] lg:mr-4 rounded-md text-sm shadow px-4 py-3 mt-4">
                Send Message
              </button>
            </div>
            </form>
        </div>

        <div className="flex-1">
          <Fade duration={1000} delay={1000} direction='up' triggerOnce>
            <h1 className="text-4xl font-bold text-red-800 mb-2 mt-[-35px]">About Me</h1>
          </Fade>
          <Fade duration={1000} delay={1500} direction='up' cascade triggerOnce>
          <div className='text-slate-800 text-sm'>
            <p>I'm an experienced application developer with 10 years in the industry. I enjoy roles where I'm not confined to the same thing daily, some days I'm building user-facing front-end pages with JavaScript/React, other days I'm porting old C code to create PWAs.</p>
            <p>My design skills also come in handy. I can quickly tweak CSS to solve design issues without needing a lengthy process, saving time for everyone.</p>
            <div className="p-2 border border-4 border-white w-90-% lg:w-[75%] rounded-lg shadow-lg flex m-auto">
              <img src={ClimbingPhoto} alt="Matthew Lowe Climbing" className="h-auto border-red-800 border-4 border justify-center"></img>
            </div>
            <p className="mt-2">Outside of work, I'm an avid football fan and a longtime (on-and-off) rock climber. I try to climb every other day because I find it clears my head, and obviously because I love to do it.</p>
          </div>
          </Fade>
        </div>
      </div>
      <ToastContainer position="top-center" className="fixed"/>
    </div>
  );
};

export default Contact;
