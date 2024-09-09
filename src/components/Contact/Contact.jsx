import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-lg rounded-md font-[sans-serif]">
        <div className="flex-1 space-y-4">
          <Fade cascade duration={750} direction='left' triggerOnce>
          <input 
            type='text' 
            placeholder='Name' 
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" 
          />
          <input 
            type='email' 
            placeholder='Email' 
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" 
          />
          <input 
            type='text' 
            placeholder='Subject' 
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" 
          />
          <textarea 
            placeholder='Message' 
            rows="6" 
            className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
          />
          <button 
            type='button' 
            className="text-white bg-slate-800 hover:bg-slate-700 rounded-md text-sm px-4 py-3 w-full !mt-6">
            Send
          </button>
          </Fade>
        </div>

        <div className="flex-1">
          <Fade duration={1250} delay={2000} direction='up'>
            <h1 className="text-gray-800 text-3xl font-extrabold">About Me</h1>
          </Fade>
          <Fade duration={1250} delay={2500} direction='up' cascade>
            <p>I'm an experienced application developer that has worked in the industry for 10 years. I have enjoyed working for companies where I am not stuck in a box. Some days I'm building a user-facing front-end with Javascript/React, and other days I'm porting over old C code to make a PWA.</p>
            <p>I can also use some of my design talents to take the load off our developers where I notice something that does not fit. I can make a quick fix with CSS rather than having a whole design process that takes valuable time.</p>
            <p>I also do things outside of working on the computer, or I do my best to. I am an avid football fan and I've been a rock climber since I was a teenager (on and off). I try to go every other day as a workout currently, and I highly recommend it to anyone who needs to clear their head and do something active.</p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
