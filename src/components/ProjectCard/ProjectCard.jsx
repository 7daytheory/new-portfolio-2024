import React from "react";
import "./ProjectCard.css"

const ProjectCard = ({ cardInfo }) => {

  //Can do this right inside params declaration also but less flexible and less ability for error handling if it get's more complex
  const {projectName, projectLogo, projectImage, projectDesc, link} = cardInfo;

  console.log(projectImage);

  return (
    <div class="second hero inline-block relative sm:w-full lg:w-[400px] min-w-[400px] h-[400px] bg-slate-800 rounded-[30px] overflow-hidden shadow-lg m-8">
          <img class="hero-profile-img h-[70%] w-full object-cover" src={projectImage} alt={projectName} />
        <div class="hero-description-bk"></div>
        <div class="hero-logo h-20 w-20 rounded-[20px] bg-white absolute bottom-[30%] left-8 overflow-hidden shadow-lg">
            <img src={projectImage} alt={projectName} class="h-full w-full object-cover" />
        </div>
        <div class="hero-description absolute text-white font-extrabold right-[35px] bottom-[34%]">
            <p>{projectName}</p>
        </div>
        <div class="hero-btn absolute right-8 bottom-[10%] p-2 bg-white hover:bg-gray-100 rounded-sm pointer">
            <a href={link} class="text-slate-800">View Project</a>
        </div>
    </div>
  );
};

export default ProjectCard;
