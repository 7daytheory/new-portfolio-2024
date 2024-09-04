import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import ProjectCard from '../ProjectCard/ProjectCard'

const Contact = () => {
  return (
    <div id="contact" className="relative w-full p-4 text-center bg-white sm:p-8 dark:bg-slate-800 dark:border-red-700">
        <Fade duration={2500} triggerOnce>
            <div className="text-white text-[3em] absolute ml-[10%] top-[-23px] font-bold">CONTACT <FontAwesomeIcon icon={faArrowDown} /></div>
            <div className="flex justify-center space-x-4 mt-12">

            <form>
                {/* Create Contact Form and Include photos */}
            </form>
          </div>
        </Fade>
        </div>
  )
}

export default Contact