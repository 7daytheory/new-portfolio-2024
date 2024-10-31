import React from "react";
import "./ProjectCard.css"

const ProjectCard = ({ cardInfo }) => {

  //Can do this right inside params declaration also but less flexible and less ability for error handling if it get's more complex
  const {projectName, projectLogo, projectImage, link} = cardInfo;
  
  return (
    <div className="second hero inline-block relative sm:w-full lg:w-[400px] min-w-[400px] h-[400px] bg-slate-800 rounded-[30px] overflow-hidden border border-2 border-white shadow-lg m-8 hover:shadow-lg">
          <img className="hero-profile-img h-[70%] w-full object-cover" src={projectImage} alt={projectName} />
        <div className="hero-description-bk"></div>
        <div className="h-12 w-auto rounded-[20px] absolute bottom-[30%] left-8 shadow-lg">
            <img src={projectLogo} alt={projectName} className="h-full w-full object-cover" />
        </div>
        <div className="hero-description absolute text-white font-extrabold right-[35px] bottom-[34%]">
            <p>{projectName}</p>
        </div>
        <div className="hero-btn absolute right-8 bottom-[10%] p-2 bg-white hover:bg-gray-100 rounded-sm pointer">
            <a href={link} className="text-slate-800 px-4 py-2">View Project</a>
        </div>
    </div>
  );
};

export default ProjectCard;
