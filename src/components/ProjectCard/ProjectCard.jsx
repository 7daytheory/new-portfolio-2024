const ProjectCard = ({ cardInfo }) => {
  const { projectName, projectDesc, projectImage, projectLabel, link } = cardInfo;

  return (
    <a
      href={link}
      className="relative lg:w-[300px] min-w-[250px] lg:min-w-[300px] sm:w-[90%] h-[300px] hover:duration-700 hover:opacity-[0.9] sm:h-[250px] rounded-lg overflow-hidden bg-slate-800 border border-2 border-white shadow-[rgba(0,0,15,0.7)_2px_3px_3px_0px] hover:shadow-[rgba(0,0,15,1)_2px_5px_5px_1px] m-8 flex flex-col group"
      title={`View details about ${projectName}`}
    >
      {
       projectLabel && (
        <div className="absolute top-[-3px] right-0 bg-white text-slate-800 px-2 py-1 rounded-l-md font-semibold text-sm">
          {projectLabel} only
        </div>
       )
      }
      <div className="h-[60%] w-full bg-slate-800">
        <img
          className="h-full w-full object-cover"
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
