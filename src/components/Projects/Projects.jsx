import { Fade } from "react-awesome-reveal";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectCard from '../ProjectCard/ProjectCard';
import { allProjects } from '../../content';

const Projects = () => {
  return (
      <div id="projects" className="relative w-full p-4 text-center bg-red-800 sm:p-8">
          <Fade duration={2000}> 
            <div className="text-white text-[3em] absolute sm:ml-[5%] lg:ml-[15%] top-[-23px] font-bold">{allProjects.projectsHeader} <FontAwesomeIcon icon={faArrowDown} /></div>
          </Fade>
            <div className="flex justify-center space-x-4 mt-12">
              <Fade duration={500} triggerOnce cascade >
              <div className="flex flex-wrap justify-between gap-6 sm:w-[100%] lg:w-[75%] p-2 mx-auto">
                {allProjects.projects.map((card, i) => {
                      return (
                        <ProjectCard
                          key={i}
                          cardInfo={{
                            projectName: card.projectName,
                            projectDesc: card.projectDesc,
                            projectType: card.projectType,
                            link: card.projectLink,
                            projectImage: card.projectImage,
                            projectLogo: card.projectLogo,
                            projectLabel: card.projectLabel,
                          }}
                        />
                      );
                    })}
                    </div>
              </Fade>
          </div>
      </div>
  ) 
}

export default Projects