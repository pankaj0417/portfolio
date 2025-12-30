import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ image, head, main, logo, logo2, github, live }) => {
  return (
    <div className="relative group p-3 md:p-3 flex flex-col w-95 bg-white hover:bg-gradient-to-b from-gray-100 to-gray-900 shadow-lg hover:scale-110 transition-all duration-300 rounded-md overflow-hidden dark:bg-gray-800 dark:text-gray-300">
      <div className="relative overflow-hidden rounded-md">
        <img className="p-2 rounded-md w-full h-auto" src={image} alt="img" />

        {/* Hover Overlay with Buttons */}
        <div className="absolute inset-0  flex items-center justify-center gap-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
          {github && (
            <a
              href={github}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all duration-200 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-950"
            >
              <FaGithub size={24} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all duration-200 flex items-center justify-center  dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-950"
            >
              <FiExternalLink size={24} />
            </a>
          )}
        </div>
      </div>

      <h3 className="py-3 md:text-2xl font-bold">{head}</h3>
      <p className="px-2">{main}</p>

      <div className="p-4 mt-2 flex gap-4 justify-center md:text-2xl">
        {logo}
      </div>
      <div className="flex gap-4 justify-center md:text-2xl">{logo2}</div>
    </div>
  );
};

export default ProjectCard;
