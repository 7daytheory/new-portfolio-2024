import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import ClimbingPhoto from '../../assets/climbing-photo.jpg';
import './Contact.css'
 
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
        setNameValue('');
        setEmailValue('');
        setSubjectValue('');
        setMessageValue('');
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
            <div className="text-red-800 text-[3em] absolute ml-[5%] top-[-22px] font-bold" id="contact">CONTACT <FontAwesomeIcon icon={faArrowDown} /></div>
        </Fade>
      <div className="flex flex-col sm:flex-row items-start gap-12 p-8 mx-auto max-w-4xl rounded-lg font-[sans-serif]">
      <div className="flex-1 space-y-4 w-full">
        <Fade duration={1000} triggerOnce>
          <form className='p-4 md:mt-8' onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                placeholder=" "
                required
                className="pt-3 pb-2 block w-full md:w-3/4 px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter name</label>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="email"
                name="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder=" "
                required
                className="pt-3 pb-2 block w-full md:w-3/4 px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter email address</label>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="subject"
                value={subjectValue}
                onChange={(e) => setSubjectValue(e.target.value)}
                placeholder=" "
                className="pt-3 pb-2 block w-full md:w-3/4 px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label htmlFor="subject" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter subject</label>
            </div>

            <div className="relative z-0 w-full mb-5">
              <textarea
                name="message"
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
                placeholder=" "
                rows="5"
                className="pt-3 pb-2 block w-full md:w-3/4 px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label htmlFor="message" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Please let me know how I can help</label>
            </div>

            <div className="flex justify-end">
              <button
                type='submit'
                className="text-white bg-red-800 hover:bg-red-700 w-full lg:w-[35%] rounded-md text-sm shadow px-4 py-3 mt-4 md:mr-[25%]">
                Send Message
              </button>
            </div>
          </form>
          </Fade>
        </div>

        <div className="flex-1">
          <Fade duration={1000} delay={1000} direction='right' triggerOnce>
            <h1 className="text-4xl font-bold text-red-800 mb-2 mt-[-35px]">About Me</h1>
          </Fade>
          <div className='text-slate-800 text-sm'>
          <Fade duration={1500} delay={500} direction='left' triggerOnce>
            <p>I'm an experienced application developer with 10 years in the industry. I enjoy roles where I'm not confined to the same thing daily, some days I'm building user-facing front-end pages with JavaScript/React, other days I'm porting old C code to create PWAs.</p>
          </Fade>
          <Fade duration={750} delay={1250} direction='down' triggerOnce>
            <p>My design skills also come in handy. I can quickly tweak CSS to solve design issues without needing a lengthy process, saving time for everyone.</p>
          </Fade>
          <Fade duration={500} delay={1500} triggerOnce>
            <div className="p-2 border border-4 border-white w-90-% lg:w-[75%] rounded-lg shadow-lg flex m-auto">
              <img src={ClimbingPhoto} alt="Matthew Lowe Rock Climbing" className="h-auto border-red-800 border-4 border justify-center"></img>
            </div>
          </Fade>
          <Fade duration={1250} delay={750} direction='right' triggerOnce>
            <p className="mt-2">Outside of work, I'm an avid football fan and a longtime (on-and-off) rock climber. I try to climb every other day because I find it clears my head, and obviously because I love to do it.</p>
          </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
