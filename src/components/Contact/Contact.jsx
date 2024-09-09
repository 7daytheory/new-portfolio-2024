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
                <h1 class="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
            </div>
        </div>
      </Fade>
    </div>
  )
}

export default Contact