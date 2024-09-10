
import React from 'react'
import { Fade } from "react-awesome-reveal";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
  return (
      <div id="projects" className="relative w-full p-4 text-center bg-red-800 sm:p-8">
        <Fade duration={2000} triggerOnce> 
            <div className="text-white text-[3em] absolute ml-[5%] top-[-23px] font-bold">PROJECTS <FontAwesomeIcon icon={faArrowDown} /></div>
            <div className="flex justify-center space-x-4 mt-12">
            <Fade duration={750} direction='right' cascade triggerOnce>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </Fade>
          </div>
        </Fade>
      </div>
  ) 
}

export default Projects