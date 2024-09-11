import React from "react";

const ProjectCard = ({ cardInfo }) => {
  return (
    <div className="relative bg-white shadow-[0px_10px_30px_-15px_rgba(0,0,0,0.2)] rounded-lg border border-[rgba(211,211,211,0.4)] hover:shadow-[0px_20px_30px_-10px_rgba(0,0,0,0.2)]">
      <div className="h-20 bg-gray-800 rounded-t-lg bg-cover bg-center flex items-end justify-center">
        <div className="absolute top-0 left-0 w-full flex items-center justify-center">
          <h5 className="text-2xl text-white font-bold truncate px-6 py-4">{cardInfo.projectName}</h5>
        </div>
      </div>
      <div className="px-6 py-6 mt-8">
        <h5 className="text-center font-bold text-lg sm:text-2xl text-black mb-4">{cardInfo.projectType}</h5>
        <p className="text-center text-base sm:text-lg text-gray-700">{cardInfo.projectDesc}</p>
        <div className="text-center mt-10">
          <a
            href={cardInfo.link}
            className="bg-red-600 text-white border-2 border-red-600 rounded px-4 py-2 hover:bg-white hover:text-red-600 transition duration-200"
            target="_blank"
            rel="noreferrer"
          >
            View Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;