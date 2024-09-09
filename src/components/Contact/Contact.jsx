import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Contact = () => {
  return (
    <div class="mt-6">
      <Fade duration={2500} triggerOnce>
        <div class="flex flex-col sm:flex-row items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
            <form class="flex-1 space-y-4">
                <input type='text' placeholder='Name'
                    class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                <input type='email' placeholder='Email'
                    class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                <input type='text' placeholder='Subject'
                    class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                <textarea placeholder='Message' rows="6"
                    class="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"></textarea>
                <button type='button'
                    class="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
            </form>

            <div class="flex-1">
                <h1 class="text-gray-800 text-3xl font-extrabold">About Me</h1>
                <p>I'm an experience application developer that has worked in the industry for 10 years. I have enjoyed working for companies where I am not stuck in a box. Some days I'm building a user facing front-end with Javascript/React and other days I'm porting over old C code to make a PWA. 
                  I can also use some of my design talents to take the load off of our developers where I notice something that does not fit I can make a quick fix with css rather than having a whole desing process that takes valuable time.
                </p>
                <p>I also do things outside of working on the computer, or I do my best to. I am an avid football fan and I've been a rock climber since I was a teenager (on and off). I try to go every other day as a workout currently and I highly recommend it to anyone who needs to clear their head and needs to do something active.</p>
                <h2>Here I am below, in my elements: </h2>
            </div>
        </div>
      </Fade>
    </div>
  )
}

export default Contact