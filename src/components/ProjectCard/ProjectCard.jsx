import "./ProjectCard.css";

const ProjectCard = ({ cardInfo }) => {
  const { projectName, projectDesc, projectImage, link } = cardInfo;

  return (
    <a
      href={link}
      className="relative sm:w-full sm:max-w-[300px] lg:max-w-[300px] lg:min-w-[300px] h-[300px] lg:h-[300px] rounded-[30px] overflow-hidden bg-slate-800 border border-2 border-white shadow-lg m-8 hover:shadow-xl flex flex-col group"
      title={`View details about ${projectName}`}
    >
      {/* Image Section */}
      <div className="h-[60%] w-full bg-slate-800">
        <img
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          src={projectImage}
          alt={projectName}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between p-4">
        {/* Project Name */}
        <div>
          <p className="font-extrabold text-white text-lg">{projectName}</p>
        </div>

        {/* Project Description */}
        <div>
          <p className="text-sm text-gray-300">{projectDesc}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
