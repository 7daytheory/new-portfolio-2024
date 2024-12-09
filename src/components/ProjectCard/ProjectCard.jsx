import "./ProjectCard.css"

const ProjectCard = ({ cardInfo }) => {

  //Can do this right inside params declaration also but less flexible and less ability for error handling if it get's more complex
  const {projectName, projectDesc, projectImage, link} = cardInfo;
  
  return (
    <div className="inline-block relative sm:w-full sm:max-w-[300px] lg:max-w-[500px] lg:min-w-[300px] min-w-0 h-[400px] bg-slate-800 rounded-[30px] overflow-hidden border border-2 border-white shadow-lg m-8 hover:shadow-lg">
          <img className="hero-profile-img h-[70%] w-full" src={projectImage} alt={projectName} />
        <div className="hero-description-bk"></div>
        <div className="h-12 w-auto rounded-[20px] absolute bottom-[30%] left-8 font-extrabold text-white">
          <p>{projectName}</p>
        </div>
      <div className="absolute bottom-[20%] left-8 text-white lg:max-w-[50%] sm:max-w-[80%] mr-[10%] sm:mx-auto text-left">
        <p className="text-sm">{projectDesc}</p>
      </div>
        <div className="absolute right-8 bottom-[5%] py-2 px-4 bg-red-800 hover:bg-red-700 rounded-md pointer">
            <a href={link} className="text-white font-bold px-4 py-2 lg:my-2 sm:my-8">View Project</a>
        </div>
    </div>
  );
};

export default ProjectCard;