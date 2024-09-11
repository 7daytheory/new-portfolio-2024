import React from "react";

const ProjectCard = ({ cardInfo }) => {
  return (
    <div className="flex flex-col w-full sm:w-[32%] min-h-[300px] bg-white shadow-[0px_10px_30px_-15px_rgba(0,0,0,0.2)] rounded-lg border border-[rgba(211,211,211,0.4)] hover:shadow-[0px_20px_30px_-10px_rgba(0,0,0,0.2)]">
      <div className="h-20 bg-slate-800 rounded-t-lg bg-cover bg-center flex items-end justify-center">
        <h5 className="text-2xl text-white font-bold truncate px-6 py-4 text-center">
          {cardInfo.projectName}
        </h5>
      </div>
      <div className="px-6 py-6 flex-grow">
        <h5 className="text-center font-bold text-lg sm:text-2xl text-black mb-4">
          {cardInfo.projectType}
        </h5>
        <p className="text-center text-base sm:text-lg text-slate-800">
          {cardInfo.projectDesc}
        </p>
        <div className="text-center mt-10">
          <a
            href={cardInfo.link}
            className="bg-red-800 text-white border-2 border-red-600 rounded px-4 py-2 hover:bg-red-700 transition duration-200"
            target="_blank"
            rel="noreferrer"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
