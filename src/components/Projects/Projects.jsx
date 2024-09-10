
import React from 'react'
import { Fade } from "react-awesome-reveal";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <>
        <div id="projects" className="relative w-full p-4 text-center bg-white sm:p-8 dark:bg-white dark:border-red-700">
        <Fade duration={1000} triggeOnce> 
            <div className="text-red-800 text-[3em] absolute ml-[2%] top-[-23px] font-bold">SOME PROJECTS <FontAwesomeIcon icon={faArrowDown} /></div>
            <div className="flex justify-center space-x-4 mt-12">
            <Fade duration={500} direction='right' cascade triggerOnce>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </Fade>
          </div>
        </Fade>
        </div>
    </>
  ) 
}

export default Projects