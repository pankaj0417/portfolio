import React from "react";
import avatarImg from "../../assets/profile_img_front.png";
import Typewrite from "typewriter-effect";

const Home = () => {
  return (
    <div id="home" className="flex w-full flex-col md:flex-row justify-between items-start p-10 md:pt-20 ">
      <div className="w-full text-center md:text-left pt-20 md:w-2/3 md:pt-20 1">
        <div className="text-3xl md:text-4xl font-bold whitespace-pre text-blue-500">
          <Typewrite
            options={{
              strings: [
                "Software Engineer",
                "MERN Developer",
                "Programmer",
                "Tech Enthusiast",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className="text-2xl mt-5 dark:text-gray-300 text-gray-700 transition-all duration-500">
          Hello, I'm Pankaj. I'm a{" "}
          <span className="font-bold text-blue-400 cursor-pointer  hover:text-blue-500 transition-all duration-300" >
            Software Development Engineer{" "}
          </span>{" "}
          passionate about creating innovative web experiences.
        </p>

        <button
          className="text-white bg-blue-600 text-xl font-medium px-5 py-2 rounded-lg hover:bg-blue-800 cursor-pointer mt-6 transition-all duration-300"
          type="button"
        >
          Hire me
        </button>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
        <button
          className="text-white bg-blue-600 text-xl font-medium px-5 py-2 rounded-lg hover:bg-blue-800 cursor-pointer mt-6 ml-3 transition-all duration-300"
          type="button" 
        >
          Resume
        </button></a>
        
      </div>

      <div className="w-full md:w-1/2 flex justify-center mt-3">
        <img className="md:w-[16rem] w-[14rem]" src={avatarImg} alt="avatar" />
      </div>
    </div>
  );
};

export default Home;
