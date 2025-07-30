import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-white mx-10 md:mx-10 flex-col flex items-center justify-center text-center dark:bg-gray-800 transition-all duration-500 dark:text-white ">
      <h1 className="text-4xl md:text-6xl font-bold py-4 dark:text-white tracking-wide">
        Hey there! 👋 I'm Pankaj
      </h1>
      <p className="mt-5 text-lg max-w-5xl md:text-xl px-4 leading-8">
        Welcome to My World of Code! I'm a dedicated Software Development
        Engineer with a passion for turning ideas into interactive web
        experiences. Currently, I'm pursuing a B.Tech in Computer Science at Ch.
        Ranbir Singh State Institute Jhajjar, with my graduation set for May
        2025.
      </p>
      <h1 className="text-2xl md:text-5xl font-bold mt-10 dark:text-white">
        What Sparks My Interest 🚀
      </h1>
      <p className="text-lg max-w-5xl md:text-xl my-5 px-4 leading-8">
        I thrive on building full-stack web applications that don’t just
        function but wow users. My coding journey has equipped me with the
        skills to craft seamless user interfaces using React.js and Tailwind
        CSS. On the backend, I ensure everything runs smoothly with Node.js,
        Express.js, and MongoDB.
      </p>

      <div className="my-5 flex flex-col gap-2 md:gap-8 md:flex-row">
        <a
          href="https://www.linkedin.com/in/pankaj017"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 font-semibold border border-indigo-500 rounded-lg text-lg text-indigo-700 cursor-pointer hover:bg-blue-50 flex transition-all duration-300"
        >
          <FaLinkedin size={20} className="m-1" /> LinkedIn
        </a>

        <a
          href="https://github.com/pankaj0417"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 font-semibold border border-indigo-500 rounded-lg text-lg text-indigo-700 cursor-pointer hover:bg-gray-100 hover:text-black hover:border-gray-700 flex transition-all duration-300"
        >
          <FaGithub size={20} className="m-1" /> GitHub
        </a>
      </div>

      <p className="text-lg">
        Thanks for stopping by—let's build something amazing together! ✨
      </p>
    </div>
  );
};

export default About;
