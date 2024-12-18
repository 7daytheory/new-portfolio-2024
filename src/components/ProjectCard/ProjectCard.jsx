const ProjectCard = ({ cardInfo }) => {
  const { projectName, projectDesc, projectImage, projectLabel, link } = cardInfo;

  return (
    <a
      href={link}
      className="relative lg:w-[300px] min-w-[250px] lg:min-w-[300px] sm:w-[90%] h-[300px] sm:h-[250px] rounded-lg overflow-hidden bg-slate-800 border border-2 border-white m-8 hover:shadow-xl flex flex-col group"
      title={`View details about ${projectName}`}
    >
      {
       projectLabel && (
        <div className="absolute top-[-3px] right-[-2px] bg-white text-red-800 px-2 py-1 rounded-l-md border-white border border-3 font-bold text-md">
          <span className="mr-2">{projectLabel} only</span>
        </div>
       )
      }
      <div className="h-[60%] w-full bg-slate-800">
        <img
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          src={projectImage}
          alt={projectName}
        />
      </div>

      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <p className="font-extrabold text-white text-lg">{projectName}</p>
        </div>

        <div>
          <p className="text-sm text-gray-300">{projectDesc}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
