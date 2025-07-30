import React from "react";

const ProjectCard = ({image,head,main,logo,logo2 }) => {
  return (
    <div className="p-3 md:p-3 flex flex-col w-95  bg-white dark:bg-gray-800 dark:text-gray-300 shadow-lg hover:scale-105 transition-all duration-500 rounded-md ">
      <img className="p-2" src={image} alt="img" />
      <h3 className="py-3 md:text-2xl font-bold">{head}</h3>
      <p className="px-2 ">{main}</p>
      <div className="p-4 mt-2 flex gap-4 justify-center md:text-2xl">{logo}</div>
      <div className="flex gap-4 mb-5 justify-center md:text-2xl">{logo2}</div>
    </div>
  );
};

export default ProjectCard;
